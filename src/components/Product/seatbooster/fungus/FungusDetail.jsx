import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fungus } from '../../../../assets/api/productData';
import { DetailWrap } from '../../../../pages/product/productStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../../store/modules/cartSlice';

const FungusDetail = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    const { FUNGUSID } = useParams();
    const [thum, setThum] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const FUNGUS = fungus.find((item) => item.id === Number(FUNGUSID));
    const [selectedColor, setSelectedColor] = useState(FUNGUS.color1);
    const [selectedColorCode, setSelectedColorCode] = useState(FUNGUS.colorcode1);
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
            alert('로그인이 필요합니다.');
            navigate('/login');
            return;
        }
        const toCart = {
            name: FUNGUS.name,
            code: FUNGUS.code,
            selectedColor,
            selectedColorCode,
            price: FUNGUS.price,
            quantity,
        };
        dispatch(addCart(toCart));
    };

    return (
        <DetailWrap>
            <ul className="subMenu">
                <li>제품</li>
                <li>
                    <Link to={'/products'}>SEAT BOOSTER</Link>
                </li>
                <li>
                    <Link to={'/products/FUNGUS'}>FUNGUS</Link>
                </li>
                <li className="on">{FUNGUS.name}</li>
            </ul>
            <div className="subInner">
                <div className="products">
                    <div className="bigImg">
                        <img
                            src={`../../images/products/seatbooster/fungus/${FUNGUS.code}/${selectedColorCode}_${thum}.png`}
                            alt="fungus"
                        />
                    </div>
                    <div className="desc">
                        <h3>{FUNGUS.name}</h3>
                        <span>CODE # {FUNGUS.code}</span>
                        <strong>￦{FUNGUS.price.toLocaleString()}</strong>
                        <p className="color">COLOR / 색상</p>
                        <ul className="colors">
                            <li
                                onClick={() => (
                                    setSelectedColor(FUNGUS.color1),
                                    setSelectedColorCode(FUNGUS.colorcode1),
                                    setThum(1)
                                )}
                            >
                                {selectedColor === FUNGUS.color1 ? (
                                    <img
                                        src={`../../images/products/colors/${FUNGUS.colorcode1}_chk.png`}
                                        alt="color1"
                                    />
                                ) : (
                                    <img
                                        src={`../../images/products/colors/${FUNGUS.colorcode1}.png`}
                                        alt="color1"
                                    />
                                )}
                            </li>
                            <li
                                onClick={() => (
                                    setSelectedColor(FUNGUS.color2),
                                    setSelectedColorCode(FUNGUS.colorcode2),
                                    setThum(1)
                                )}
                            >
                                {selectedColor === FUNGUS.color2 ? (
                                    <img
                                        src={`../../images/products/colors/${FUNGUS.colorcode2}_chk.png`}
                                        alt="color2"
                                    />
                                ) : (
                                    <img
                                        src={`../../images/products/colors/${FUNGUS.colorcode2}.png`}
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
                    <li className={thum === 1 ? 'on' : ''} onClick={() => setThum(1)}>
                        <img
                            src={`../../images/products/seatbooster/fungus/${FUNGUS.code}/${selectedColorCode}_1.png`}
                            alt="fungus"
                        />
                    </li>
                </ul>
            </div>
        </DetailWrap>
    );
};

export default FungusDetail;
