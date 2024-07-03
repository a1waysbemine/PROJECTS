import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DetailWrap } from "../../../../pages/product/productStyle";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../../store/modules/cartSlice";
import { t50repair } from "../../../../assets/api/productData";

const T50RDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { T50RID } = useParams();
  const [thum, setThum] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const T50R = t50repair.find((item) => item.id === Number(T50RID));
  const isColorcode2 = T50R.colorcode2 !== undefined;
  const [selectedColor, setSelectedColor] = useState(T50R.color1);
  const [selectedColorCode, setSelectedColorCode] = useState(T50R.colorcode1);
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
      name: T50R.name,
      code: T50R.code,
      selectedColor,
      selectedColorCode,
      price: T50R.price,
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
          <Link to={"/products/t50_repair"}>T50</Link>
        </li>
        <li className="on">{T50R.name}</li>
      </ul>
      <div className="subInner">
        <div className="products">
          <div className="bigImg">
            <img
              src={`./images/products/selfrepair/t50r/${T50R.code}/${selectedColorCode}_${thum}.png`}
              alt="t50repair"
            />
          </div>
          <div className="desc">
            <h3>{T50R.name}</h3>
            <span>CODE # {T50R.code}</span>
            <strong>￦{T50R.price.toLocaleString()}</strong>
            <p className="color">COLOR / 색상</p>
            <ul className="colors">
              <li
                onClick={() => (
                  setSelectedColor(T50R.color1),
                  setSelectedColorCode(T50R.colorcode1),
                  setThum(1)
                )}
              >
                {selectedColor === T50R.color1 ? (
                  <img
                    src={`./images/products/colors/${T50R.colorcode1}_chk.png`}
                    alt="color1"
                  />
                ) : (
                  <img
                    src={`./images/products/colors/${T50R.colorcode1}.png`}
                    alt="color1"
                  />
                )}
              </li>
              {isColorcode2 ? (
                <li
                  onClick={() => (
                    setSelectedColor(T50R.color2),
                    setSelectedColorCode(T50R.colorcode2),
                    setThum(1)
                  )}
                >
                  {selectedColor === T50R.color2 ? (
                    <img
                      src={`./images/products/colors/${T50R.colorcode2}_chk.png`}
                      alt="color2"
                    />
                  ) : (
                    <img
                      src={`./images/products/colors/${T50R.colorcode2}.png`}
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
              src={`./images/products/selfrepair/t50r/${T50R.code}/${selectedColorCode}_1.png`}
              alt="t50repair"
            />
          </li>
        </ul>
      </div>
    </DetailWrap>
  );
};

export default T50RDetail;
