import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import React from "react";

async function getData() {
  const data = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  );
  return data.json();
}

export default async function page() {
  const item = await getData();

  const items = [];

  console.log(item);

  const printItems = (number) => {
    for (let i = 0; i < number; i++) {
      items.push(
        <Card className="border rounded-lg border-gray-700 bg-darkLight p-3 text-white">
          <CardHeader>
            <h2 className="text-xl font-lg text-left">{item.title}</h2>
          </CardHeader>
          <CardBody>
            <p className="text-secondary pb-2">{item.date}</p>
            <p className="text-justify">{item.explanation}</p>
          </CardBody>
        </Card>
      );
    }
    return items;
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="p-10 border border-gray-700 rounded-lg bg-darkLighter">
        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {printItems(4)}
        </div>
      </div>
    </div>
  );
}
