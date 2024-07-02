import { ListUl } from "../../../../pages/product/productStyle";
import StepoItem from "./StepoItem";

const StepoList = ({ stepo }) => {
  return (
    <ListUl>
      {stepo.map((item) => (
        <StepoItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
    </ListUl>
  );
};

export default StepoList;
