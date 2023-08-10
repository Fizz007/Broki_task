import React from "react";
import { cardItems } from "../data";
import '../Style/Style.css';
import Cardpanel from "./Cardpanel";

const Cards = () => {
  return (
    <div>
      <div className="text">
        <h5>Checkout</h5>
        <h1>Hot Deals</h1>
        <h4>Check out these amazing outlets listed with us</h4>
      </div>

      <div className="card_wrapper">
       {cardItems.map((item,i)=>{
        return <Cardpanel item={item} key={i}/>
       })}
      </div>
    </div>
  );
};

export default Cards;
