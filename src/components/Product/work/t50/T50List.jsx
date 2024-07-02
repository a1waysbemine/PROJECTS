import { t50 } from "../../../../assets/api/productData";
import { ListUl } from "../../../../pages/product/productStyle";
import T50Item from "./T50Item";

const T50List = ({ t50 }) => {
  return (
    <ListUl>
      {t50.map((item) => (
        <T50Item key={item.id} item={item} />
      ))}
    </ListUl>
  );
};

export default T50List;
