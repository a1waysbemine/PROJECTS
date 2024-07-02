import { CartEmptyWrap } from "../../pages/cart/CartStyle";

const CartEmpty = () => {
  return (
    <CartEmptyWrap>
      <td colSpan={"6"} className="empty">
        장바구니에 담긴 품목이 없습니다.
      </td>
    </CartEmptyWrap>
  );
};

export default CartEmpty;
