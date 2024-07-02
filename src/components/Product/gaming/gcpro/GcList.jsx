import { ListUl } from "../../../../pages/product/productStyle";
import GcItem from "../../gaming/gcpro/GcItem";

const GcList = ({ gcpro }) => {
  return (
    <ListUl>
      {gcpro.map((item) => (
        <GcItem key={item.id} item={item} />
      ))}
    </ListUl>
  );
};

export default GcList;
