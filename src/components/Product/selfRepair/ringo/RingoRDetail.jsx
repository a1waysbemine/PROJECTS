import { useEffect, useState } from 'react';
import { ringoRepair } from '../../../../assets/api/productData';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { DetailWrap } from '../../../../pages/product/productStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../../store/modules/cartSlice';

const RingoRDetail = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    const { RINRID } = useParams();
    const [thum, setThum] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const RINR = ringoRepair.find((item) => item.id === Number(RINRID));
    const isColorcode2 = RINR.colorcode2 !== undefined;
    const [selectedColor, setSelectedColor] = useState(RINR.color1);
    const [selectedColorCode, setSelectedColorCode] = useState(RINR.colorcode1);
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
            name: RINR.name,
            code: RINR.code,
            selectedColor,
            selectedColorCode,
            price: RINR.price,
            quantity,
        };
        dispatch(addCart(toCart));
    };

    return (
        <DetailWrap>
            <ul className="subMenu">
                <li>제품</li>
                <li>
                    <Link to={'/products'}>SELF-REPAIR</Link>
                </li>
                <li>
                    <Link to={'/products/Ringo_repair'}>ringo</Link>
                </li>
                <li className="on">{RINR.name}</li>
            </ul>
            <div className="subInner">
                <div className="products">
                    <div className="bigImg">
                        <img
                            src={`../../images/products/selfrepair/ringo/${RINR.code}/${selectedColorCode}_${thum}.png`}
                            alt="ringoRepair"
                        />
                    </div>
                    <div className="desc">
                        <h3>{RINR.name}</h3>
                        <span>CODE # {RINR.code}</span>
                        <strong>￦{RINR.price.toLocaleString()}</strong>
                        <p className="color">COLOR / 색상</p>
                        <ul className="colors">
                            <li
                                onClick={() => (
                                    setSelectedColor(RINR.color1),
                                    setSelectedColorCode(RINR.colorcode1),
                                    setThum(1)
                                )}
                            >
                                {selectedColor === RINR.color1 ? (
                                    <img
                                        src={`../../images/products/colors/${RINR.colorcode1}_chk.png`}
                                        alt="color1"
                                    />
                                ) : (
                                    <img
                                        src={`../../images/products/colors/${RINR.colorcode1}.png`}
                                        alt="color1"
                                    />
                                )}
                            </li>
                            {isColorcode2 ? (
                                <li
                                    onClick={() => (
                                        setSelectedColor(RINR.color2),
                                        setSelectedColorCode(RINR.colorcode2),
                                        setThum(1)
                                    )}
                                >
                                    {selectedColor === RINR.color2 ? (
                                        <img
                                            src={`../../images/products/colors/${RINR.colorcode2}_chk.png`}
                                            alt="color2"
                                        />
                                    ) : (
                                        <img
                                            src={`../../images/products/colors/${RINR.colorcode2}.png`}
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
                    <li className={thum === 1 ? 'on' : ''} onClick={() => setThum(1)}>
                        <img
                            src={`../../images/products/selfrepair/ringo/${RINR.code}/${selectedColorCode}_1.png`}
                            alt="ringoRepair"
                        />
                    </li>
                </ul>
            </div>
        </DetailWrap>
    );
};

export default RingoRDetail;
