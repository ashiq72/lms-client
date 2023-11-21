"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function EditTopicForm({ id, title, description }) {
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
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <from className="p-4 flex flex-col gap-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={title}
          className="rounded px-2 py-1 text-xl outline-none"
        />
        <textarea
          placeholder="Description..."
          defaultValue={description}
          className="px-2 py-1 rounded outline-none"
        />
        <button className="bg-green-600  hover:bg-slate-200 hover:text-black transition-all text-white font-bold py-2 rounded">
          Submit
        </button>
      </from>
    </div>
  );
}

export default EditTopicForm;
