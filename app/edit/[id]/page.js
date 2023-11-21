import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topic: ", error);
  }
};

export default async function Edit({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return (
    <div className="w-[900px] p-4 mt-4 bg-slate-400 mx-auto border">
      <div className="text-center ">
        <h1 className="text-2xl font-extrabold text-white">Todu Edit</h1>
      </div>
      <div>
        <EditTopicForm id={id} title={title} description={description} />
      </div>
    </div>
  );
}
