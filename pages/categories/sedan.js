import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import React from "react";

function Sedan() {
  const sedan = carsData.filter((car) => car.category === "sedan");
  // console.log(sedan);
  return <CarsList data={sedan} />;
}

export default Sedan;
