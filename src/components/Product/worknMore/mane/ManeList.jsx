import { ListUl } from "../../../../pages/product/productStyle";
import ManeItem from "./ManeItem";

const ManeList = ({ mane }) => {
  return (
    <ListUl>
      {mane.map((item) => (
        <ManeItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
    </ListUl>
  );
};

export default ManeList;
