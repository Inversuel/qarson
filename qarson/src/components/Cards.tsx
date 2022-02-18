import React from "react";
import CardsItem from "./CardsItem";
import { IOffers } from "../helpers/interface";

const Cards = ({ data }: { data: IOffers[] }) => {
  return (
    <div className="cards">
      {data.map((item, index) => {
          return <CardsItem offers={item} key={index} id={item.id} />
        })}
    </div>
  );
};

export default Cards;
