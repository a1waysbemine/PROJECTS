import { ListUl } from "../../../../pages/product/productStyle";
import T55Item from "./T55Item";

const T55List = ({ t55 }) => {
  return (
    <ListUl>
      {t55.map((item) => (
        <T55Item key={item.id} item={item} />
      ))}
      <li className="blank"></li>
      <li className="blank"></li>
    </ListUl>
  );
};

export default T55List;
