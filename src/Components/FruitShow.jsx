import axios from "axios";
import React, { useEffect, useState } from "react";

const FruitShow = () => {
  const [fruit, setFruit] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios("https://dummyjson.com/products");
      setFruit(res.data); // res.data = actual API data
    };

    loadData();
  }, []);

  console.log(fruit);

  return <div>

  </div>;
};

export default FruitShow;
