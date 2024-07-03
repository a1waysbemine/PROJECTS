import { Link, useNavigate, useParams } from "react-router-dom";
import { DetailWrap } from "../../../../pages/product/productStyle";
import { t55 } from "../../../../assets/api/productData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../../store/modules/cartSlice";

const T55Detail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { T55ID } = useParams();
  const [thum, setThum] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const T55 = t55.find((item) => item.id === Number(T55ID));
  const isColorcode2 = T55.colorcode2 !== undefined;
  const [selectedColor, setSelectedColor] = useState(T55.color1);
  const [selectedColorCode, setSelectedColorCode] = useState(T55.colorcode1);
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
      name: T55.name,
      code: T55.code,
      selectedColor,
      selectedColorCode,
      price: T55.price,
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
          <Link to={"/products/t55"}>T55</Link>
        </li>
        <li className="on">{T55.name}</li>
      </ul>
      <div className="subInner">
        <div className="products">
          <div className="bigImg">
            <img
              src={`./images/products/work/t55/${T55.code}/${selectedColorCode}_${thum}.png`}
              alt="t55"
            />
          </div>
          <div className="desc">
            <h3>{T55.name}</h3>
            <span>CODE # {T55.code}</span>
            <strong>￦{T55.price.toLocaleString()}</strong>
            <p className="color">COLOR / 색상</p>
            <ul className="colors">
              <li
                onClick={() => (
                  setSelectedColor(T55.color1),
                  setSelectedColorCode(T55.colorcode1),
                  setThum(1)
                )}
              >
                {selectedColor === T55.color1 ? (
                  <img
                    src={`./images/products/colors/${T55.colorcode1}_chk.png`}
                    alt="color1"
                  />
                ) : (
                  <img
                    src={`./images/products/colors/${T55.colorcode1}.png`}
                    alt="color1"
                  />
                )}
              </li>
              {isColorcode2 ? (
                <li
                  onClick={() => (
                    setSelectedColor(T55.color2),
                    setSelectedColorCode(T55.colorcode2),
                    setThum(1)
                  )}
                >
                  {selectedColor === T55.color2 ? (
                    <img
                      src={`./images/products/colors/${T55.colorcode2}_chk.png`}
                      alt="color2"
                    />
                  ) : (
                    <img
                      src={`./images/products/colors/${T55.colorcode2}.png`}
                      alt="color2"
                    />
                  )}
                </li>
              ) : (
                <li className="blank"></li>
              )}

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
              src={`./images/products/work/t55/${T55.code}/${selectedColorCode}_1.png`}
              alt="t55"
            />
          </li>
          <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
            <img
              src={`./images/products/work/t55/${T55.code}/${selectedColorCode}_2.png`}
              alt="t55"
            />
          </li>
          <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
            <img
              src={`./images/products/work/t55/${T55.code}/${selectedColorCode}_3.png`}
              alt="t55"
            />
          </li>
          <li className={thum === 4 ? "on" : ""} onClick={() => setThum(4)}>
            <img
              src={`./images/products/work/t55/${T55.code}/${selectedColorCode}_4.png`}
              alt="t55"
            />
          </li>
          <li className={thum === 5 ? "on" : ""} onClick={() => setThum(5)}>
            <img
              src={`./images/products/work/t55/${T55.code}/${selectedColorCode}_5.png`}
              alt="t55"
            />
          </li>
        </ul>
      </div>
    </DetailWrap>
  );
};

export default T55Detail;
