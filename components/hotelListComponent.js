/* eslint-disable @next/next/no-img-element */
import React from "react";
import HotelListItemComponent from "./hotelListItemComponent";

const HotelListComponent = ({ items }) => {
  return (
    items &&
    items.length > 0 &&
    items.map((item,index) => (<HotelListItemComponent item={item} index={index} key={index}/> ))
  );
};
export default HotelListComponent;
