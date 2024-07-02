import { ListUl } from "../../../../pages/product/productStyle";
import T90Item from "./T90Item";

const T90List = ({ t90 }) => {
  return (
    <ListUl>
      {t90.map((item) => (
        <T90Item key={item.id} item={item} />
      ))}
      <li className="blank"></li>
    </ListUl>
  );
};

export default T90List;
