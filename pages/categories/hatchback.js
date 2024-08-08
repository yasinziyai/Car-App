import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import React from "react";

function Hatchback() {
  const hatchback = carsData.filter((car) => car.category === "hatchback");
  // console.log(hatchback);
  return <CarsList data={hatchback} />;
}

export default Hatchback;
