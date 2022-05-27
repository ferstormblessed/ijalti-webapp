import Card from "../components/cards";

export default function test() {
  const people = [
    {
      name: "Jane Cooper",
      info: "Regional Paradigm Technician at Google, front-end engineer at meta, and a full-stack developer at Twitter.",
      role: "Frontend Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    // More people...
  ];
  return (
    <Card
      name={people[0].name}
      info={people[0].info}
      role={people[0].role}
      imageUrl={people[0].imageUrl}
    />
  );
}
