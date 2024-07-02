import { ListUl } from "../../../../pages/product/productStyle";
import LinieItem from "./LinieItem";

const LinieList = ({ linie }) => {
  return (
    <ListUl>
      {linie.map((item) => (
        <LinieItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
      <li className="blank"></li>
    </ListUl>
  );
};

export default LinieList;
