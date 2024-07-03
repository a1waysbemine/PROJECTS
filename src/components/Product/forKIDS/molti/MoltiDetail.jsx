import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DetailWrap } from "../../../../pages/product/productStyle";
import { molti } from "../../../../assets/api/productData";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../../store/modules/cartSlice";

const MoltiDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { MOLTIID } = useParams();
  const [thum, setThum] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MOLTI = molti.find((item) => item.id === Number(MOLTIID));
  const isColorcode2 = MOLTI.colorcode2 !== undefined;
  const [selectedColor, setSelectedColor] = useState(MOLTI.color1);
  const [selectedColorCode, setSelectedColorCode] = useState(MOLTI.colorcode1);
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
      name: MOLTI.name,
      code: MOLTI.code,
      selectedColor,
      selectedColorCode,
      price: MOLTI.price,
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
          <Link to={"/products/MOLTI"}>molti</Link>
        </li>
        <li className="on">{MOLTI.name}</li>
      </ul>
      <div className="subInner">
        <div className="products">
          <div className="bigImg">
            <img
              src={`./images/products/forkids/molti/${MOLTI.code}/${selectedColorCode}_${thum}.png`}
              alt="molti"
            />
          </div>
          <div className="desc">
            <h3>{MOLTI.name}</h3>
            <span>CODE # {MOLTI.code}</span>
            <strong>￦{MOLTI.price.toLocaleString()}</strong>
            <p className="color">COLOR / 색상</p>
            <ul className="colors">
              <li
                onClick={() => (
                  setSelectedColor(MOLTI.color1),
                  setSelectedColorCode(MOLTI.colorcode1),
                  setThum(1)
                )}
              >
                {selectedColor === MOLTI.color1 ? (
                  <img
                    src={`./images/products/colors/${MOLTI.colorcode1}_chk.png`}
                    alt="color1"
                  />
                ) : (
                  <img
                    src={`./images/products/colors/${MOLTI.colorcode1}.png`}
                    alt="color1"
                  />
                )}
              </li>
              {isColorcode2 ? (
                <li
                  onClick={() => (
                    setSelectedColor(MOLTI.color2),
                    setSelectedColorCode(MOLTI.colorcode2),
                    setThum(1)
                  )}
                >
                  {selectedColor === MOLTI.color2 ? (
                    <img
                      src={`./images/products/colors/${MOLTI.colorcode2}_chk.png`}
                      alt="color2"
                    />
                  ) : (
                    <img
                      src={`./images/products/colors/${MOLTI.colorcode2}.png`}
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
          {MOLTI.id === 2 || MOLTI.id === 4 ? (
            <>
              <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
                <img
                  src={`./images/products/forkids/molti/${MOLTI.code}/${selectedColorCode}_1.png`}
                  alt="molti"
                />
              </li>
              <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
                <img
                  src={`./images/products/forkids/molti/${MOLTI.code}/${selectedColorCode}_2.png`}
                  alt="molti"
                />
              </li>
              <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
                <img
                  src={`./images/products/forkids/molti/${MOLTI.code}/${selectedColorCode}_3.png`}
                  alt="molti"
                />
              </li>
            </>
          ) : MOLTI.id === 5 ? (
            <>
              <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
                <img
                  src={`./images/products/forkids/molti/${MOLTI.code}/${selectedColorCode}_1.png`}
                  alt="molti"
                />
              </li>
              <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
                <img
                  src={`./images/products/forkids/molti/${MOLTI.code}/${selectedColorCode}_2.png`}
                  alt="molti"
                />
              </li>
            </>
          ) : (
            <>
              <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
                <img
                  src={`./images/products/forkids/molti/${MOLTI.code}/${selectedColorCode}_1.png`}
                  alt="molti"
                />
              </li>
              <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
                <img
                  src={`./images/products/forkids/molti/${MOLTI.code}/${selectedColorCode}_2.png`}
                  alt="molti"
                />
              </li>
              <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
                <img
                  src={`./images/products/forkids/molti/${MOLTI.code}/${selectedColorCode}_3.png`}
                  alt="molti"
                />
              </li>
              <li className={thum === 4 ? "on" : ""} onClick={() => setThum(4)}>
                <img
                  src={`./images/products/forkids/molti/${MOLTI.code}/${selectedColorCode}_4.png`}
                  alt="molti"
                />
              </li>
              <li className={thum === 5 ? "on" : ""} onClick={() => setThum(5)}>
                <img
                  src={`./images/products/forkids/molti/${MOLTI.code}/${selectedColorCode}_5.png`}
                  alt="molti"
                />
              </li>
            </>
          )}
        </ul>
      </div>
    </DetailWrap>
  );
};

export default MoltiDetail;
