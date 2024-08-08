import CarDetails from "@/components/templates/CarDetails";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function CarDetail() {
  const router = useRouter();
  const { carid } = router.query;
  const carDetails = carsData[carid - 1];

  return (
    <div>
      <CarDetails {...carDetails} />
    </div>
  );
}

export default CarDetail;
