import { Link, useNavigate, useParams } from "react-router-dom";
import { t20repair } from "../../../../assets/api/productData";
import { useEffect, useState } from "react";
import { DetailWrap } from "../../../../pages/product/productStyle";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../../store/modules/cartSlice";

const T20RDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { T20RID } = useParams();
  const [thum, setThum] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const T20R = t20repair.find((item) => item.id === Number(T20RID));
  const isColorcode2 = T20R.colorcode2 !== undefined;
  const [selectedColor, setSelectedColor] = useState(T20R.color1);
  const [selectedColorCode, setSelectedColorCode] = useState(T20R.colorcode1);
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
      name: T20R.name,
      code: T20R.code,
      selectedColor,
      selectedColorCode,
      price: T20R.price,
      quantity,
    };
    dispatch(addCart(toCart));
  };

  return (
    <DetailWrap>
      <ul className="subMenu">
        <li>제품</li>
        <li>
          <Link to={"/products"}>SELF-REPAIR</Link>
        </li>
        <li>
          <Link to={"/products/t20_repair"}>T50</Link>
        </li>
        <li className="on">{T20R.name}</li>
      </ul>
      <div className="subInner">
        <div className="products">
          <div className="bigImg">
            <img
              src={`./images/products/selfrepair/t20r/${T20R.code}/${selectedColorCode}_${thum}.png`}
              alt="t20repair"
            />
          </div>
          <div className="desc">
            <h3>{T20R.name}</h3>
            <span>CODE # {T20R.code}</span>
            <strong>￦{T20R.price.toLocaleString()}</strong>
            <p className="color">COLOR / 색상</p>
            <ul className="colors">
              <li
                onClick={() => (
                  setSelectedColor(T20R.color1),
                  setSelectedColorCode(T20R.colorcode1),
                  setThum(1)
                )}
              >
                {selectedColor === T20R.color1 ? (
                  <img
                    src={`./images/products/colors/${T20R.colorcode1}_chk.png`}
                    alt="color1"
                  />
                ) : (
                  <img
                    src={`./images/products/colors/${T20R.colorcode1}.png`}
                    alt="color1"
                  />
                )}
              </li>
              {isColorcode2 ? (
                <li
                  onClick={() => (
                    setSelectedColor(T20R.color2),
                    setSelectedColorCode(T20R.colorcode2),
                    setThum(1)
                  )}
                >
                  {selectedColor === T20R.color2 ? (
                    <img
                      src={`./images/products/colors/${T20R.colorcode2}_chk.png`}
                      alt="color2"
                    />
                  ) : (
                    <img
                      src={`./images/products/colors/${T20R.colorcode2}.png`}
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
              src={`./images/products/selfrepair/t20r/${T20R.code}/${T20R.colorcode1}_1.png`}
              alt="t20repair"
            />
          </li>
        </ul>
      </div>
    </DetailWrap>
  );
};

export default T20RDetail;
