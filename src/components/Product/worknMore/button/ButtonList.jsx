import { ListUl } from "../../../../pages/product/productStyle";
import ButtonItem from "./ButtonItem";

const ButtonList = ({ button }) => {
  return (
    <ListUl>
      {button.map((item) => (
        <ButtonItem key={item.id} item={item} />
      ))}
      <li className="blank"></li>
      <li className="blank"></li>
    </ListUl>
  );
};

export default ButtonList;
