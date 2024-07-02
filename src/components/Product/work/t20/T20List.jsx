import { ListUl } from "../../../../pages/product/productStyle";
import T20Item from "./T20Item";

const T20List = ({ t20 }) => {
  return (
    <ListUl>
      {t20.map((item) => (
        <T20Item key={item.id} item={item} />
      ))}
      <li className="blank"></li>
    </ListUl>
  );
};

export default T20List;
