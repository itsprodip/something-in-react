import React, { Suspense } from "react";
import Navbar from "./Components/Navbar";
import CusNav from "./Components/CusNav";
import PricingCards from "./Components/PricingCards";
import ResultCharts from "./Components/ResultCharts";

const App = () => {
  const pricingData= fetch('pricingData.json') .then(res=>res.json());
  return (
    <div>
      <CusNav></CusNav>
      {/* <Navbar></Navbar> */}
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingCards pricingData={pricingData}></PricingCards>
      </Suspense>
      <ResultCharts></ResultCharts>
    </div>
  );
};

export default App;
