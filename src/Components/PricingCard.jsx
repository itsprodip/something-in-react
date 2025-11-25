import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingCard = ({pricing}) => {
    const {id,title,price,features,button_text: button}=pricing;
    return (
      <div
        className={` rounded-lg shadow-2xl text-[#202842] px-10 py-5 space-y-4 w-full ${
          id === 2 ? "bg-[#202842] text-white" : "bg-white"
        } `}
      >
        <h1 className="text-4xl">{title} Plan</h1>
        <h2 className="text-3xl">${price}</h2>
        <ul className="space-y-3 ">
          {features.map((item) => (
            <li className="flex space-x-2 gap-2">
              <CircleCheckBig size={20} />
              {item}
            </li>
          ))}
        </ul>
        <button className={`btn  mx-auto rounded-full ${id === 2 ? "bg-white" : "bg-[#202842] text-white"}`}>
          {button}
        </button>
      </div>
    );
};

export default PricingCard;