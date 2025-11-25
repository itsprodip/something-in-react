import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingCards = ({ pricingData }) => {
    const priceData=use(pricingData);
    
  return (
    <div className="w-11/12 mx-auto bg-[#070027] rounded-lg px-20 py-10" >
      <h2>Get our subscriptions</h2>
      <div className="flex bg-[#f4f2fd] px-20 py-10 rounded-lg gap-5 justify-around">
        {priceData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;