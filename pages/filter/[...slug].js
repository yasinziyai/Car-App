import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filteredCars = carsData.filter((i) => i.price > min && i.price < max);
  console.log(filteredCars);
  if (!filteredCars) return;
  return <CarsList data={filteredCars} />;
}

export default FilteredCars;
