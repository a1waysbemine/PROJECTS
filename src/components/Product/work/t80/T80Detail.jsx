import { Link, useNavigate, useParams } from "react-router-dom";
import { DetailWrap } from "../../../../pages/product/productStyle";
import { useEffect, useState } from "react";
import { t80 } from "../../../../assets/api/productData";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../../store/modules/cartSlice";

const T80Detail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { T80ID } = useParams();
  const [thum, setThum] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const T80 = t80.find((item) => item.id === Number(T80ID));
  const [selectedColor, setSelectedColor] = useState(T80.color1);
  const [selectedColorCode, setSelectedColorCode] = useState(T80.colorcode1);
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
      name: T80.name,
      code: T80.code,
      selectedColor,
      selectedColorCode,
      price: T80.price,
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
          <Link to={"/products/t80"}>T80</Link>
        </li>
        <li className="on">{T80.name}</li>
      </ul>
      <div className="subInner">
        <div className="products">
          <div className="bigImg">
            <img
              src={`./images/products/work/t80/${T80.code}/${selectedColorCode}_${thum}.png`}
              alt="t80"
            />
          </div>
          <div className="desc">
            <h3>{T80.name}</h3>
            <span>CODE # {T80.code}</span>
            <strong>￦{T80.price.toLocaleString()}</strong>
            <p className="color">COLOR / 색상</p>
            <ul className="colors">
              <li
                onClick={() => (
                  setSelectedColor(T80.color1),
                  setSelectedColorCode(T80.colorcode1),
                  setThum(1)
                )}
              >
                {selectedColor === T80.color1 ? (
                  <img
                    src={`./images/products/colors/${T80.colorcode1}_chk.png`}
                    alt="color1"
                  />
                ) : (
                  <img
                    src={`./images/products/colors/${T80.colorcode1}.png`}
                    alt="color1"
                  />
                )}
              </li>
              <li
                onClick={() => (
                  setSelectedColor(T80.color2),
                  setSelectedColorCode(T80.colorcode2),
                  setThum(1)
                )}
              >
                {selectedColor === T80.color2 ? (
                  <img
                    src={`./images/products/colors/${T80.colorcode2}_chk.png`}
                    alt="color2"
                  />
                ) : (
                  <img
                    src={`./images/products/colors/${T80.colorcode2}.png`}
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
              src={`./images/products/work/t80/${T80.code}/${selectedColorCode}_1.png`}
              alt="t80"
            />
          </li>
          <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
            <img
              src={`./images/products/work/t80/${T80.code}/${selectedColorCode}_2.png`}
              alt="t80"
            />
          </li>
          <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
            <img
              src={`./images/products/work/t80/${T80.code}/${selectedColorCode}_3.png`}
              alt="t80"
            />
          </li>
          <li className={thum === 4 ? "on" : ""} onClick={() => setThum(4)}>
            <img
              src={`./images/products/work/t80/${T80.code}/${selectedColorCode}_4.png`}
              alt="t80"
            />
          </li>
          <li className={thum === 5 ? "on" : ""} onClick={() => setThum(5)}>
            <img
              src={`./images/products/work/t80/${T80.code}/${selectedColorCode}_5.png`}
              alt="t80"
            />
          </li>
        </ul>
      </div>
    </DetailWrap>
  );
};

export default T80Detail;
