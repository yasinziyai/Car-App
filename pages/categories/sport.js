import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import React from "react";

function Sport() {
  const sport = carsData.filter((car) => car.category === "sport");
  // console.log(sport);
  return <CarsList data={sport} />;
}

export default Sport;
