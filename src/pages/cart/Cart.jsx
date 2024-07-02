import { useNavigate } from "react-router-dom";
import CartEmpty from "../../components/Cart/CartEmpty";
import CartMenu from "../../components/Cart/CartMenu";
import { CartWrap } from "./CartStyle";
import CartList from "../../components/Cart/CartList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { buyItem, removeAll, totalCart } from "../../store/modules/cartSlice";

const Cart = () => {
  const { carts, cartTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(totalCart());
  }, [carts]);

  console.log(carts);

  return (
    <CartWrap>
      <CartMenu />
      <div className="subInner">
        <h2>장바구니</h2>
        <table>
          <colgroup>
            <col className="name" />
            <col className="color" />
            <col className="price" />
            <col className="count" />
            <col className="totalPrice" />
            <col className="del" />
          </colgroup>
          <thead>
            <tr>
              <th>제품정보</th>
              <th>색상</th>
              <th>판매가격</th>
              <th>수량</th>
              <th>주문금액</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carts.length === 0 ? (
              <CartEmpty />
            ) : (
              <>
                {carts.map((cart) => (
                  <CartList key={cart.id} cart={cart} />
                ))}
              </>
            )}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={4}>총 결제금액</th>
              <th colSpan={2}>{cartTotal.toLocaleString()}원</th>
            </tr>
          </tfoot>
        </table>

        <p className="cart-button">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            계속 쇼핑하기
          </button>
          <button onClick={() => dispatch(removeAll())}>
            전체상품 삭제하기
          </button>
          <button onClick={() => dispatch(buyItem())}>상품 주문하기</button>
        </p>
      </div>
    </CartWrap>
  );
};

export default Cart;
