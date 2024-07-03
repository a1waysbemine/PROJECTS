import { Link, useNavigate, useParams } from "react-router-dom";
import { DetailWrap } from "../../../../pages/product/productStyle";
import { useEffect, useState } from "react";
import { t20 } from "../../../../assets/api/productData";
import { addCart } from "../../../../store/modules/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const T20Detail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { T20ID } = useParams();
  const [thum, setThum] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const T20 = t20.find((item) => item.id === Number(T20ID));
  const [selectedColor, setSelectedColor] = useState(T20.color1);
  const [selectedColorCode, setSelectedColorCode] = useState(T20.colorcode1);
  const { authed } = useSelector((state) => state.auth);

  const increaseQuantity = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    if (!authed) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    const toCart = {
      name: T20.name,
      code: T20.code,
      selectedColor,
      selectedColorCode,
      price: T20.price,
      quantity,
    };
    dispatch(addCart(toCart));
  };

  return (
    <DetailWrap>
      <ul className="subMenu">
        <li>제품</li>
        <li>
          <Link to={"/products"}>WORK</Link>
        </li>
        <li>
          <Link to={"/products/T20"}>T20</Link>
        </li>
        <li className="on">{T20.name}</li>
      </ul>
      <div className="subInner">
        <div className="products">
          <div className="bigImg">
            <img
              src={`./images/products/work/t20/${T20.code}/${selectedColorCode}_${thum}.png`}
              alt="t20"
            />
          </div>
          <div className="desc">
            <h3>{T20.name}</h3>
            <span>CODE # {T20.code}</span>
            <strong>￦{T20.price.toLocaleString()}</strong>
            <p className="color">COLOR / 색상</p>
            <ul className="colors">
              <li
                onClick={() => (
                  setSelectedColor(T20.color1),
                  setSelectedColorCode(T20.colorcode1),
                  setThum(1)
                )}
              >
                {selectedColor === T20.color1 ? (
                  <img
                    src={`./images/products/colors/${T20.colorcode1}_chk.png`}
                    alt="color1"
                  />
                ) : (
                  <img
                    src={`./images/products/colors/${T20.colorcode1}.png`}
                    alt="color1"
                  />
                )}
              </li>
              <li
                onClick={() => (
                  setSelectedColor(T20.color2),
                  setSelectedColorCode(T20.colorcode2),
                  setThum(1)
                )}
              >
                {selectedColor === T20.color2 ? (
                  <img
                    src={`./images/products/colors/${T20.colorcode2}_chk.png`}
                    alt="color2"
                  />
                ) : (
                  <img
                    src={`./images/products/colors/${T20.colorcode2}.png`}
                    alt="color2"
                  />
                )}
              </li>
              <li className="blank"></li>
              <li className="blank"></li>
              <li className="blank"></li>
              <li className="blank"></li>
            </ul>
            <p className="name">{`${selectedColorCode}_${selectedColor}`}</p>

            <em>QUANTITY / 수량</em>
            <p className="count">
              <button onClick={decreaseQuantity}>
                <i className="xi-caret-down"></i>
              </button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>
                <i className="xi-caret-up"></i>
              </button>
            </p>
            <p className="btn">
              <button onClick={addToCart}>장바구니</button>
              <button
                onClick={() => {
                  navigate(-1);
                }}
              >
                뒤로가기
              </button>
            </p>
          </div>
        </div>
        <ul className="thum">
          <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
            <img
              src={`./images/products/work/t20/${T20.code}/${selectedColorCode}_1.png`}
              alt="t20"
            />
          </li>
          <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
            <img
              src={`./images/products/work/t20/${T20.code}/${selectedColorCode}_2.png`}
              alt="t20"
            />
          </li>
          <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
            <img
              src={`./images/products/work/t20/${T20.code}/${selectedColorCode}_3.png`}
              alt="t20"
            />
          </li>
          <li className={thum === 4 ? "on" : ""} onClick={() => setThum(4)}>
            <img
              src={`./images/products/work/t20/${T20.code}/${selectedColorCode}_4.png`}
              alt="t20"
            />
          </li>
          <li className={thum === 5 ? "on" : ""} onClick={() => setThum(5)}>
            <img
              src={`./images/products/work/t20/${T20.code}/${selectedColorCode}_5.png`}
              alt="t20"
            />
          </li>
        </ul>
      </div>
    </DetailWrap>
  );
};

export default T20Detail;
