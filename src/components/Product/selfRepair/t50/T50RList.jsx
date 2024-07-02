import { ListUl } from "../../../../pages/product/productStyle";
import T50RItem from "./T50RItem";

const T50RList = ({ t50repair }) => {
  return (
    <ListUl>
      {t50repair.map((item) => (
        <T50RItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
      <li className="blank"></li>
    </ListUl>
  );
};

export default T50RList;
