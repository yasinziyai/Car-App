import AllButton from "@/components/module/AllButton";
import Categories from "@/components/module/Categories";
import SearchBox from "@/components/module/SearchBox";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBox />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </div>
  );
}
export default Index;
