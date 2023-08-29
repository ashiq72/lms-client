export default function Edit() {
  return (
    <div className="w-[900px] p-4 mt-4 bg-slate-400 mx-auto border">
      <div className="text-center ">
        <h1 className="text-2xl font-extrabold text-white">Todu Edit</h1>
      </div>
      <div>
        <from className="p-4 flex flex-col gap-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="rounded px-2 py-1 text-xl outline-none"
          />
          <textarea
            placeholder="Description..."
            className="px-2 py-1 rounded outline-none"
          />
          <button className="bg-green-600  hover:bg-slate-200 hover:text-black transition-all text-white font-bold py-2 rounded">
            Submit
          </button>
        </from>
      </div>
    </div>
  );
}
