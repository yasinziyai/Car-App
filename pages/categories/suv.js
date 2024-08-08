import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import React from "react";

function Suv() {
  const suv = carsData.filter((car) => car.category === "suv");
  // console.log(suv);
  return <CarsList data={suv} />;
}

export default Suv;
