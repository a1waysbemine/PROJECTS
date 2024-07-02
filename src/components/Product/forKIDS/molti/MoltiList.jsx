import { ListUl } from "../../../../pages/product/productStyle";
import MoltiItem from "./MoltiItem";

const MoltiList = ({ molti }) => {
  return (
    <ListUl>
      {molti.map((item) => (
        <MoltiItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
    </ListUl>
  );
};

export default MoltiList;
