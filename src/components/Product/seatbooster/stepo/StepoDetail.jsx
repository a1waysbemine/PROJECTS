import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { stepo } from "../../../../assets/api/productData";
import { DetailWrap } from "../../../../pages/product/productStyle";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../../store/modules/cartSlice";

const StepoDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { STEPOID } = useParams();
  const [thum, setThum] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const STEPO = stepo.find((item) => item.id === Number(STEPOID));
  const isColorcode2 = STEPO.colorcode2 !== undefined;
  const [selectedColor, setSelectedColor] = useState(STEPO.color1);
  const [selectedColorCode, setSelectedColorCode] = useState(STEPO.colorcode1);
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
      name: STEPO.name,
      code: STEPO.code,
      selectedColor,
      selectedColorCode,
      price: STEPO.price,
      quantity,
    };
    dispatch(addCart(toCart));
  };

  return (
    <DetailWrap>
      <ul className="subMenu">
        <li>제품</li>
        <li>
          <Link to={"/products"}>SEAT BOOSTER</Link>
        </li>
        <li>
          <Link to={"/products/STEPO"}>STEPO</Link>
        </li>
        <li className="on">{STEPO.name}</li>
      </ul>
      <div className="subInner">
        <div className="products">
          <div className="bigImg">
            <img
              src={`./images/products/seatbooster/stepo/${STEPO.code}/${selectedColorCode}_${thum}.png`}
              alt="stepo"
            />
          </div>
          <div className="desc">
            <h3>{STEPO.name}</h3>
            <span>CODE # {STEPO.code}</span>
            <strong>￦{STEPO.price.toLocaleString()}</strong>
            <p className="color">COLOR / 색상</p>
            <ul className="colors">
              <li
                onClick={() => (
                  setSelectedColor(STEPO.color1),
                  setSelectedColorCode(STEPO.colorcode1),
                  setThum(1)
                )}
              >
                {selectedColor === STEPO.color1 ? (
                  <img
                    src={`./images/products/colors/${STEPO.colorcode1}_chk.png`}
                    alt="color1"
                  />
                ) : (
                  <img
                    src={`./images/products/colors/${STEPO.colorcode1}.png`}
                    alt="color1"
                  />
                )}
              </li>
              {isColorcode2 ? (
                <li
                  onClick={() => (
                    setSelectedColor(STEPO.color2),
                    setSelectedColorCode(STEPO.colorcode2),
                    setThum(1)
                  )}
                >
                  {selectedColor === STEPO.color2 ? (
                    <img
                      src={`./images/products/colors/${STEPO.colorcode2}_chk.png`}
                      alt="color2"
                    />
                  ) : (
                    <img
                      src={`./images/products/colors/${STEPO.colorcode2}.png`}
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
              src={`./images/products/seatbooster/stepo/${STEPO.code}/${selectedColorCode}_1.png`}
              alt="stepo"
            />
          </li>
          <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
            <img
              src={`./images/products/seatbooster/stepo/${STEPO.code}/${selectedColorCode}_2.png`}
              alt="stepo"
            />
          </li>
          <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
            <img
              src={`./images/products/seatbooster/stepo/${STEPO.code}/${selectedColorCode}_3.png`}
              alt="stepo"
            />
          </li>
          <li className={thum === 4 ? "on" : ""} onClick={() => setThum(4)}>
            <img
              src={`./images/products/seatbooster/stepo/${STEPO.code}/${selectedColorCode}_4.png`}
              alt="stepo"
            />
          </li>
          <li className={thum === 5 ? "on" : ""} onClick={() => setThum(5)}>
            <img
              src={`./images/products/seatbooster/stepo/${STEPO.code}/${selectedColorCode}_5.png`}
              alt="stepo"
            />
          </li>
        </ul>
      </div>
    </DetailWrap>
  );
};

export default StepoDetail;
