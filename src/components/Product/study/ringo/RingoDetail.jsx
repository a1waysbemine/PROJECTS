import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ringo } from "../../../../assets/api/productData";
import { DetailWrap } from "../../../../pages/product/productStyle";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../../store/modules/cartSlice";

const RingoDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { RINGOID } = useParams();
  const [thum, setThum] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const RINGO = ringo.find((item) => item.id === Number(RINGOID));
  const isColorcode2 = RINGO.colorcode2 !== undefined;
  const [selectedColor, setSelectedColor] = useState(RINGO.color1);
  const [selectedColorCode, setSelectedColorCode] = useState(RINGO.colorcode1);
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
      name: RINGO.name,
      code: RINGO.code,
      selectedColor,
      selectedColorCode,
      price: RINGO.price,
      quantity,
    };
    dispatch(addCart(toCart));
  };

  return (
    <DetailWrap>
      <div className="subInner">
        <ul className="subMenu">
          <li>제품</li>
          <li>
            <Link to={"/products"}>WORK & MORE</Link>
          </li>
          <li>
            <Link to={"/products/RINGO"}>ringo</Link>
          </li>
          <li className="on">{RINGO.name}</li>
        </ul>
        <div className="products">
          <div className="bigImg">
            <img
              src={`./images/products/study/ringo/${RINGO.code}/${selectedColorCode}_${thum}.png`}
              alt="ringo"
            />
          </div>
          <div className="desc">
            <h3>{RINGO.name}</h3>
            <span>CODE # {RINGO.code}</span>
            <strong>￦{RINGO.price.toLocaleString()}</strong>
            <p className="color">COLOR / 색상</p>
            <ul className="colors">
              <li
                onClick={() => (
                  setSelectedColor(RINGO.color1),
                  setSelectedColorCode(RINGO.colorcode1),
                  setThum(1)
                )}
              >
                {selectedColor === RINGO.color1 ? (
                  <img
                    src={`./images/products/colors/${RINGO.colorcode1}_chk.png`}
                    alt="color1"
                  />
                ) : (
                  <img
                    src={`./images/products/colors/${RINGO.colorcode1}.png`}
                    alt="color1"
                  />
                )}
              </li>
              {isColorcode2 ? (
                <li
                  onClick={() => (
                    setSelectedColor(RINGO.color2),
                    setSelectedColorCode(RINGO.colorcode2),
                    setThum(1)
                  )}
                >
                  {selectedColor === RINGO.color2 ? (
                    <img
                      src={`./images/products/colors/${RINGO.colorcode2}_chk.png`}
                      alt="color2"
                    />
                  ) : (
                    <img
                      src={`./images/products/colors/${RINGO.colorcode2}.png`}
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
          {RINGO.id >= 3 ? (
            <>
              <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
                <img
                  src={`./images/products/study/ringo/${RINGO.code}/${selectedColorCode}_1.png`}
                  alt="ringo"
                />
              </li>
              <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
                <img
                  src={`./images/products/study/ringo/${RINGO.code}/${selectedColorCode}_2.png`}
                  alt="ringo"
                />
              </li>
              <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
                <img
                  src={`./images/products/study/ringo/${RINGO.code}/${selectedColorCode}_3.png`}
                  alt="ringo"
                />
              </li>
            </>
          ) : RINGO.id === 1 ? (
            <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
              <img
                src={`./images/products/study/ringo/${RINGO.code}/${selectedColorCode}_1.png`}
                alt="ringo"
              />
            </li>
          ) : (
            <>
              <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
                <img
                  src={`./images/products/study/ringo/${RINGO.code}/${selectedColorCode}_1.png`}
                  alt="ringo"
                />
              </li>
              <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
                <img
                  src={`./images/products/study/ringo/${RINGO.code}/${selectedColorCode}_2.png`}
                  alt="ringo"
                />
              </li>
              <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
                <img
                  src={`./images/products/study/ringo/${RINGO.code}/${selectedColorCode}_3.png`}
                  alt="ringo"
                />
              </li>
              <li className={thum === 4 ? "on" : ""} onClick={() => setThum(4)}>
                <img
                  src={`./images/products/study/ringo/${RINGO.code}/${selectedColorCode}_4.png`}
                  alt="ringo"
                />
              </li>
              <li className={thum === 5 ? "on" : ""} onClick={() => setThum(5)}>
                <img
                  src={`./images/products/study/ringo/${RINGO.code}/${selectedColorCode}_5.png`}
                  alt="ringo"
                />
              </li>
            </>
          )}
        </ul>
      </div>
    </DetailWrap>
  );
};

export default RingoDetail;
