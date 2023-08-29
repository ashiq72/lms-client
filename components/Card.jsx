import Link from "next/link";
import { RiDeleteBin3Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
export default function Card() {
  return (
    <div className=" bg-slate-100 p-5 rounded flex items-start justify-between">
      <div className="border-l-4 border-gray-400 pl-5 ">
        <h1 className="text-2xl font-bold">JavaScript</h1>
        <p className="text-lg text-slate-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="flex gap-3">
        <button className="text-xl text-red-700 cursor-pointer">
          <RiDeleteBin3Line />
        </button>
        <Link className="text-xl text-lime-800 cursor-pointer" href="/edit">
          <BiEditAlt />
        </Link>
      </div>
    </div>
  );
}
