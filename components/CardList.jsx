import Card from "./Card";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
export default async function CardList() {
  const { topics } = await getTopics();

  return (
    <div>
      {topics?.map((topic, index) => (
        <Card key={index} topic={topic} />
      ))}
    </div>
  );
}
