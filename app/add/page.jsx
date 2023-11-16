"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[900px] p-4 mt-4 bg-slate-400 mx-auto border">
      <div className="text-center ">
        <h1 className="text-2xl font-extrabold text-white">Todu Add</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-y-4">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            placeholder="Title"
            className="rounded px-2 py-1 text-xl outline-none"
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Description..."
            className="px-2 py-1 rounded outline-none"
          />
          <button
            type="submit"
            className="bg-green-600  hover:bg-slate-200 hover:text-black transition-all text-white font-bold py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
