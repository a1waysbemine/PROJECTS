import React from "react";
import { ListUl } from "../../../../pages/product/productStyle";
import T20RItem from "./T20RItem";

const T20RList = ({ t20repair }) => {
  return (
    <ListUl>
      {t20repair.map((item) => (
        <T20RItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
      <li className="blank"></li>
    </ListUl>
  );
};

export default T20RList;
