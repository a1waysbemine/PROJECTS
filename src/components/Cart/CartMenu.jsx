import { CartMenuUl } from "../../pages/cart/CartStyle";
import { Link } from "react-router-dom";

const CartMenu = () => {
  return (
    <CartMenuUl>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li className="on">장바구니</li>
    </CartMenuUl>
  );
};

export default CartMenu;
