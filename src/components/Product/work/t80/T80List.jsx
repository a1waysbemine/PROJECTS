import { ListUl } from "../../../../pages/product/productStyle";
import T80Item from "./T80Item";

const T80List = ({ t80 }) => {
  return (
    <ListUl>
      {t80.map((item) => (
        <T80Item key={item.id} item={item} />
      ))}
    </ListUl>
  );
};

export default T80List;
