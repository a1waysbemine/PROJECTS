import { ListUl } from "../../../../pages/product/productStyle";
import RingoRItem from "./RingoRItem";

const RingoRList = ({ ringoRepair }) => {
  return (
    <ListUl>
      {ringoRepair.map((item) => (
        <RingoRItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
      <li className="blank"></li>
    </ListUl>
  );
};

export default RingoRList;
