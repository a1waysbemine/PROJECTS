import { ListUl } from "../../../../pages/product/productStyle";
import IbleItem from "./IbleItem";

const IbleList = ({ ible }) => {
  return (
    <ListUl>
      {ible.map((item) => (
        <IbleItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
    </ListUl>
  );
};

export default IbleList;
