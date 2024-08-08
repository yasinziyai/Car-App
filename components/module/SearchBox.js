import { useState } from "react";
import styles from "./SearchBox.module.css";
import { useRouter } from "next/router";

function SearchBox() {
  const router = useRouter();
  const searchHandler = () => {
    if (max && min) {
      router.push(`./filter/${min}/${max}`);
    } else {
      alert("slddfsdi");
    }
  };

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Inter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="Inter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBox;
