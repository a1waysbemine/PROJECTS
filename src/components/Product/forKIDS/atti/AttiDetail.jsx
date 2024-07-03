import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { atti } from "../../../../assets/api/productData";
import { DetailWrap } from "../../../../pages/product/productStyle";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../../store/modules/cartSlice";

const AttiDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { ATTIID } = useParams();
  const [thum, setThum] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ATTI = atti.find((item) => item.id === Number(ATTIID));
  const isColorcode2 = ATTI.colorcode2 !== undefined;
  const [selectedColor, setSelectedColor] = useState(ATTI.color1);
  const [selectedColorCode, setSelectedColorCode] = useState(ATTI.colorcode1);
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
      name: ATTI.name,
      code: ATTI.code,
      selectedColor,
      selectedColorCode,
      price: ATTI.price,
      quantity,
    };
    dispatch(addCart(toCart));
  };

  return (
    <DetailWrap>
      <ul className="subMenu">
        <li>제품</li>
        <li>
          <Link to={"/products"}>for KIDS</Link>
        </li>
        <li>
          <Link to={"/products/ATTI"}>atti</Link>
        </li>
        <li className="on">{ATTI.name}</li>
      </ul>
      <div className="subInner">
        <div className="products">
          <div className="bigImg">
            <img
              src={`./images/products/forkids/atti/${ATTI.code}/${selectedColorCode}_${thum}.png`}
              alt="atti"
            />
          </div>
          <div className="desc">
            <h3>{ATTI.name}</h3>
            <span>CODE # {ATTI.code}</span>
            <strong>￦{ATTI.price.toLocaleString()}</strong>
            <p className="color">COLOR / 색상</p>
            <ul className="colors">
              <li
                onClick={() => (
                  setSelectedColor(ATTI.color1),
                  setSelectedColorCode(ATTI.colorcode1),
                  setThum(1)
                )}
              >
                {selectedColor === ATTI.color1 ? (
                  <img
                    src={`./images/products/colors/${ATTI.colorcode1}_chk.png`}
                    alt="color1"
                  />
                ) : (
                  <img
                    src={`./images/products/colors/${ATTI.colorcode1}.png`}
                    alt="color1"
                  />
                )}
              </li>
              {isColorcode2 ? (
                <li
                  onClick={() => (
                    setSelectedColor(ATTI.color2),
                    setSelectedColorCode(ATTI.colorcode2),
                    setThum(1)
                  )}
                >
                  {selectedColor === ATTI.color2 ? (
                    <img
                      src={`./images/products/colors/${ATTI.colorcode2}_chk.png`}
                      alt="color2"
                    />
                  ) : (
                    <img
                      src={`./images/products/colors/${ATTI.colorcode2}.png`}
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
          {ATTI.id === 2 ? (
            <>
              <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
                <img
                  src={`./images/products/forkids/atti/${ATTI.code}/${selectedColorCode}_1.png`}
                  alt="atti"
                />
              </li>
              <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
                <img
                  src={`./images/products/forkids/atti/${ATTI.code}/${selectedColorCode}_2.png`}
                  alt="atti"
                />
              </li>
              <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
                <img
                  src={`./images/products/forkids/atti/${ATTI.code}/${selectedColorCode}_3.png`}
                  alt="atti"
                />
              </li>
            </>
          ) : (
            <>
              <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
                <img
                  src={`./images/products/forkids/atti/${ATTI.code}/${selectedColorCode}_1.png`}
                  alt="atti"
                />
              </li>
              <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
                <img
                  src={`./images/products/forkids/atti/${ATTI.code}/${selectedColorCode}_2.png`}
                  alt="atti"
                />
              </li>
              <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
                <img
                  src={`./images/products/forkids/atti/${ATTI.code}/${selectedColorCode}_3.png`}
                  alt="atti"
                />
              </li>
              <li className={thum === 4 ? "on" : ""} onClick={() => setThum(4)}>
                <img
                  src={`./images/products/forkids/atti/${ATTI.code}/${selectedColorCode}_4.png`}
                  alt="atti"
                />
              </li>
              <li className={thum === 5 ? "on" : ""} onClick={() => setThum(5)}>
                <img
                  src={`./images/products/forkids/atti/${ATTI.code}/${selectedColorCode}_5.png`}
                  alt="atti"
                />
              </li>
            </>
          )}
        </ul>
      </div>
    </DetailWrap>
  );
};

export default AttiDetail;
