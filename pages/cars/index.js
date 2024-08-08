import Categories from "@/components/module/Categories";
import SearchBox from "@/components/module/SearchBox";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

function Details() {
  return (
    <div>
      <SearchBox />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;
