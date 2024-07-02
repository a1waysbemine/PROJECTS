import { ListUl } from "../../../../pages/product/productStyle";
import EgaItem from "./EgaItem";

const EgaList = ({ ega }) => {
  return (
    <ListUl>
      {ega.map((item) => (
        <EgaItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
      <li className="blank"></li>
    </ListUl>
  );
};

export default EgaList;
