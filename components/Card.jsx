"use client";

import Link from "next/link";
import { RiDeleteBin3Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function Card({ topic }) {
  const { _id, title, description } = topic;
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${_id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <div className=" bg-slate-100 p-5 rounded flex items-start justify-between my-4">
      <div className="border-l-4 border-gray-400 pl-5 ">
        <h1 className="text-2xl font-bold">{topic?.title}</h1>
        <p className="text-lg text-slate-600">{topic?.description}</p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => removeTopic(_id)}
          className="text-xl text-red-700 cursor-pointer"
        >
          <RiDeleteBin3Line />
        </button>
        <Link
          className="text-xl text-lime-800 cursor-pointer"
          href={`/edit/${_id}`}
        >
          <BiEditAlt />
        </Link>
      </div>
    </div>
  );
}
