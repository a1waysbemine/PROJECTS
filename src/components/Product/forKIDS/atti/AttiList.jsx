import { ListUl } from "../../../../pages/product/productStyle";
import AttiItem from "./AttiItem";

const AttiList = ({ atti }) => {
  return (
    <ListUl>
      {atti.map((item) => (
        <AttiItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
    </ListUl>
  );
};

export default AttiList;
