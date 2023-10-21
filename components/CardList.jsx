import Card from "./Card";
// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/topics", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// };

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
  console.log(topics);
  return (
    <div>
      {topics.map((t, index) => (
        <Card key={index} topic={t} />
      ))}
    </div>
  );
}
