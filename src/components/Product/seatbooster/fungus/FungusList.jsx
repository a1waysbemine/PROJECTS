import { ListUl } from "../../../../pages/product/productStyle";
import FungusItem from "./FungusItem";

const FungusList = ({ fungus }) => {
  return (
    <ListUl>
      {fungus.map((item) => (
        <FungusItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
      <li className="blank"></li>
    </ListUl>
  );
};

export default FungusList;
