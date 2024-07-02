import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { caster } from '../../../../assets/api/productData';
import { DetailWrap } from '../../../../pages/product/productStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../../store/modules/cartSlice';

const CasterDetail = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    const { CASTERID } = useParams();
    const [thum, setThum] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const CASTER = caster.find((item) => item.id === Number(CASTERID));
    const isColorcode2 = CASTER.colorcode2 !== undefined;
    const [selectedColor, setSelectedColor] = useState(CASTER.color1);
    const [selectedColorCode, setSelectedColorCode] = useState(CASTER.colorcode1);
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
            name: CASTER.name,
            code: CASTER.code,
            selectedColor,
            selectedColorCode,
            price: CASTER.price,
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
                    <Link to={'/products/CASTER'}>caster</Link>
                </li>
                <li className="on">{CASTER.name}</li>
            </ul>
            <div className="subInner">
                <div className="products">
                    <div className="bigImg">
                        <img
                            src={`../../images/products/selfrepair/caster/${CASTER.code}/${selectedColorCode}_${thum}.png`}
                            alt="caster"
                        />
                    </div>
                    <div className="desc">
                        <h3>{CASTER.name}</h3>
                        <span>CODE # {CASTER.code}</span>
                        <strong>￦{CASTER.price.toLocaleString()}</strong>
                        <p className="color">COLOR / 색상</p>
                        <ul className="colors">
                            <li
                                onClick={() => (
                                    setSelectedColor(CASTER.color1),
                                    setSelectedColorCode(CASTER.colorcode1),
                                    setThum(1)
                                )}
                            >
                                {selectedColor === CASTER.color1 ? (
                                    <img
                                        src={`../../images/products/colors/${CASTER.colorcode1}_chk.png`}
                                        alt="color1"
                                    />
                                ) : (
                                    <img
                                        src={`../../images/products/colors/${CASTER.colorcode1}.png`}
                                        alt="color1"
                                    />
                                )}
                            </li>
                            {isColorcode2 ? (
                                <li
                                    onClick={() => (
                                        setSelectedColor(CASTER.color2),
                                        setSelectedColorCode(CASTER.colorcode2),
                                        setThum(1)
                                    )}
                                >
                                    {selectedColor === CASTER.color2 ? (
                                        <img
                                            src={`../../images/products/colors/${CASTER.colorcode2}_chk.png`}
                                            alt="color2"
                                        />
                                    ) : (
                                        <img
                                            src={`../../images/products/colors/${CASTER.colorcode2}.png`}
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
                            src={`../../images/products/selfrepair/caster/${CASTER.code}/${selectedColorCode}_1.png`}
                            alt="caster"
                        />
                    </li>
                </ul>
            </div>
        </DetailWrap>
    );
};

export default CasterDetail;
