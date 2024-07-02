import { ListUl } from "../../../../pages/product/productStyle";
import T50AirItem from "./T50AirItem";

const T50AirList = ({ t50air }) => {
  return (
    <ListUl>
      {t50air.map((item) => (
        <T50AirItem key={item.id} item={item} />
      ))}
    </ListUl>
  );
};

export default T50AirList;
