import { useDispatch } from "react-redux";
import { CartListWrap } from "../../pages/cart/CartStyle";
import { removeCart, updateQuantity } from "../../store/modules/cartSlice";

const CartList = ({ cart }) => {
  const { id, name, price, selectedColor, selectedColorCode, code, quantity } =
    cart;
  const dispatch = useDispatch();

  const changeInput = (e) => {
    const newQuantity = Number(e.target.value);
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };
  const keyDown = (e) => {
    e.preventDefault();
  };

  return (
    <CartListWrap>
      <td className="product">
        <img
          src={`./images/cart/${code}/${selectedColorCode}.png`}
          alt={name}
        />
        {name}
      </td>
      <td>{selectedColor}</td>
      <td>{price.toLocaleString()}원</td>
      <td>
        <input
          type="number"
          value={quantity}
          min={1}
          max={99}
          onKeyDown={keyDown}
          onChange={changeInput}
        />
      </td>
      <td>{Number(price * quantity).toLocaleString()}원</td>
      <td>
        <button onClick={() => dispatch(removeCart(id))}>삭제</button>
      </td>
    </CartListWrap>
  );
};

export default CartList;
