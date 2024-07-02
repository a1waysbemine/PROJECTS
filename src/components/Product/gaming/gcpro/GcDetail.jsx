import { Link, useNavigate, useParams } from "react-router-dom";
import { gcpro } from "../../../../assets/api/productData";
import { useEffect, useState } from "react";
import { DetailWrap } from "../../../../pages/product/productStyle";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../../store/modules/cartSlice";

const GcDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { GCID } = useParams();
  const [thum, setThum] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const GC = gcpro.find((item) => item.id === Number(GCID));
  const [selectedColor, setSelectedColor] = useState(GC.color1);
  const [selectedColorCode, setSelectedColorCode] = useState(GC.colorcode1);
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
      name: GC.name,
      code: GC.code,
      selectedColor,
      selectedColorCode,
      price: GC.price,
      quantity,
    };
    dispatch(addCart(toCart));
  };

  return (
    <DetailWrap>
      <ul className="subMenu">
        <li>제품</li>
        <li>
          <Link to={"/products"}>WORK & MORE</Link>
        </li>
        <li>
          <Link to={"/products/gc_pro"}>GC PRO</Link>
        </li>
        <li className="on">{GC.name}</li>
      </ul>
      <div className="subInner">
        <div className="products">
          <div className="bigImg">
            <img
              src={`../../images/products/gaming/gcpro/${GC.code}/${selectedColorCode}_${thum}.png`}
              alt="gcpro"
            />
          </div>
          <div className="desc">
            <h3>{GC.name}</h3>
            <span>CODE # {GC.code}</span>
            <strong>￦{GC.price.toLocaleString()}</strong>
            <p className="color">COLOR / 색상</p>
            <ul className="colors">
              <li
                onClick={() => (
                  setSelectedColor(GC.color1),
                  setSelectedColorCode(GC.colorcode1),
                  setThum(1)
                )}
              >
                {selectedColor === GC.color1 ? (
                  <img
                    src={`../../images/products/colors/${GC.colorcode1}_chk.png`}
                    alt="color1"
                  />
                ) : (
                  <img
                    src={`../../images/products/colors/${GC.colorcode1}.png`}
                    alt="color1"
                  />
                )}
              </li>
              <li
                onClick={() => (
                  setSelectedColor(GC.color2),
                  setSelectedColorCode(GC.colorcode2),
                  setThum(1)
                )}
              >
                {selectedColor === GC.color2 ? (
                  <img
                    src={`../../images/products/colors/${GC.colorcode2}_chk.png`}
                    alt="color2"
                  />
                ) : (
                  <img
                    src={`../../images/products/colors/${GC.colorcode2}.png`}
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
          {GC.id === 3 ? (
            <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
              <img
                src={`../../images/products/gaming/gcpro/${GC.code}/${selectedColorCode}_1.png`}
                alt="gcpro"
              />
            </li>
          ) : (
            <>
              <li className={thum === 1 ? "on" : ""} onClick={() => setThum(1)}>
                <img
                  src={`../../images/products/gaming/gcpro/${GC.code}/${selectedColorCode}_1.png`}
                  alt="gcpro"
                />
              </li>
              <li className={thum === 2 ? "on" : ""} onClick={() => setThum(2)}>
                <img
                  src={`../../images/products/gaming/gcpro/${GC.code}/${selectedColorCode}_2.png`}
                  alt="gcpro"
                />
              </li>
              <li className={thum === 3 ? "on" : ""} onClick={() => setThum(3)}>
                <img
                  src={`../../images/products/gaming/gcpro/${GC.code}/${selectedColorCode}_3.png`}
                  alt="gcpro"
                />
              </li>
            </>
          )}
        </ul>
      </div>
    </DetailWrap>
  );
};

export default GcDetail;
