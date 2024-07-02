import { ListUl } from "../../../../pages/product/productStyle";
import CasterItem from "./CasterItem";

const CasterList = ({ caster }) => {
  return (
    <ListUl>
      {caster.map((item) => (
        <CasterItem key={item.id} item={item} />
      ))}
    </ListUl>
  );
};

export default CasterList;
