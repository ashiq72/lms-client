"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!newTitle || !newDescription) {
    //   alert("New title and new description are required.");
    //   return;
    // }

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to update a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <from onSubmit={handleSubmit} className="p-4 flex flex-col gap-y-4">
        <input
          type="text"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          placeholder="Title"
          defaultValue={title}
          className="rounded px-2 py-1 text-xl outline-none"
        />
        <textarea
          placeholder="Description..."
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          //   defaultValue={description}
          className="px-2 py-1 rounded outline-none"
        />
        <button
          //   onClick={() => handleSubmit}
          type="submit"
          className="bg-green-600  hover:bg-slate-200 hover:text-black transition-all text-white font-bold py-2 rounded"
        >
          Submit
        </button>
      </from> */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          defaultValue={title}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Title"
        />

        <input
          onChange={(e) => setNewDescription(e.target.value)}
          defaultValue={description}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Description"
        />

        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Topic
        </button>
      </form>
    </div>
  );
}

export default EditTopicForm;
