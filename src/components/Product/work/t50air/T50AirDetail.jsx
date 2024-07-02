import { Link, useNavigate, useParams } from "react-router-dom";
import { DetailWrap } from "../../../../pages/product/productStyle";
import { t50air } from "../../../../assets/api/productData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../../store/modules/cartSlice";

const T50AirDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { T50AID } = useParams();
  const [thum, setThum] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const T50A = t50air.find((item) => item.id === Number(T50AID));
  const isColorcode2 = T50A.colorcode2 !== undefined;
  const [selectedColor, setSelectedColor] = useState(T50A.color1);
  const [selectedColorCode, setSelectedColorCode] = useState(T50A.colorcode1);
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
      name: T50A.name,
      code: T50A.code,
      selectedColor,
      selectedColorCode,
      price: T50A.price,
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
          <Link to={"/products/T50_Air"}>T50 AIR</Link>
        </li>
        <li className="on">{T50A.name}</li>
      </ul>
      <div className="subInner">
        <div className="products">
          <div className="bigImg">
            <img
              src={`../../images/products/work/t50air/${T50A.code}/${selectedColorCode}_${thum}.png`}
              alt="t50air"
            />
          </div>
          <div className="desc">
            <h3>{T50A.name}</h3>
            <span>CODE # {T50A.code}</span>
            <strong>￦{T50A.price.toLocaleString()}</strong>
            <p className="color">COLOR / 색상</p>
            <ul className="colors">
              <li
                onClick={() => (
                  setSelectedColor(T50A.color1),
                  setSelectedColorCode(T50A.colorcode1),
                  setThum(1)
                )}
              >
                {selectedColor === T50A.color1 ? (
                  <img
                    src={`../../images/products/colors/${T50A.colorcode1}_chk.png`}
                    alt="color1"
                  />
                ) : (
                  <img
                    src={`../../images/products/colors/${T50A.colorcode1}.png`}
                    alt="color1"
                  />
                )}
              </li>
              {isColorcode2 ? (
                <li
                  onClick={() => (
                    setSelectedColor(T50A.color2),
                    setSelectedColorCode(T50A.colorcode2),
                    setThum(1)
                  )}
                >
                  {selectedColor === T50A.color2 ? (
                    <img
                      src={`../../images/products/colors/${T50A.colorcode2}_chk.png`}
                      alt="color2"
                    />
                  ) : (
                    <img
                      src={`../../images/products/colors/${T50A.colorcode2}.png`}
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
          {T50A.id === 1 ? (
            <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
              <img
                src={`../../images/products/work/t50air/${T50A.code}/${selectedColorCode}_1.png`}
                alt="t50air"
              />
            </li>
          ) : (
            <>
              <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
                <img
                  src={`../../images/products/work/t50air/${T50A.code}/${selectedColorCode}_1.png`}
                  alt="t50air"
                />
              </li>
              <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
                <img
                  src={`../../images/products/work/t50air/${T50A.code}/${selectedColorCode}_2.png`}
                  alt="t50air"
                />
              </li>
              <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
                <img
                  src={`../../images/products/work/t50air/${T50A.code}/${selectedColorCode}_3.png`}
                  alt="t50air"
                />
              </li>
              <li className={thum === 4 ? "on" : ""} onClick={() => setThum(4)}>
                <img
                  src={`../../images/products/work/t50air/${T50A.code}/${selectedColorCode}_4.png`}
                  alt="t50air"
                />
              </li>
              <li className={thum === 5 ? "on" : ""} onClick={() => setThum(5)}>
                <img
                  src={`../../images/products/work/t50air/${T50A.code}/${selectedColorCode}_5.png`}
                  alt="t50air"
                />
              </li>
            </>
          )}
        </ul>
      </div>
    </DetailWrap>
  );
};

export default T50AirDetail;
