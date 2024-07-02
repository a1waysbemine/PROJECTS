import { Link, useNavigate, useParams } from 'react-router-dom';
import { DetailWrap } from '../../../../pages/product/productStyle';
import { useEffect, useState } from 'react';
import { linie } from '../../../../assets/api/productData';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../../store/modules/cartSlice';

const LinieDetail = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    const { LINIEID } = useParams();
    const [thum, setThum] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const LIN = linie.find((item) => item.id === Number(LINIEID));
    const isColorcode2 = LIN.colorcode2 !== undefined;
    const [selectedColor, setSelectedColor] = useState(LIN.color1);
    const [selectedColorCode, setSelectedColorCode] = useState(LIN.colorcode1);
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
            name: LIN.name,
            code: LIN.code,
            selectedColor,
            selectedColorCode,
            price: LIN.price,
            quantity,
        };
        dispatch(addCart(toCart));
    };

    return (
        <DetailWrap>
            <ul className="subMenu">
                <li>제품</li>
                <li>
                    <Link to={'/products'}>WORK</Link>
                </li>
                <li>
                    <Link to={'/products/LINIE'}>LINIE</Link>
                </li>
                <li className="on">{LIN.name}</li>
            </ul>
            <div className="subInner">
                <div className="products">
                    <div className="bigImg">
                        <img
                            src={`../../images/products/work/linie/${LIN.code}/${selectedColorCode}_${thum}.png`}
                            alt="linie"
                        />
                    </div>
                    <div className="desc">
                        <h3>{LIN.name}</h3>
                        <span>CODE # {LIN.code}</span>
                        <strong>￦{LIN.price.toLocaleString()}</strong>
                        <p className="color">COLOR / 색상</p>
                        <ul className="colors">
                            <li
                                onClick={() => (
                                    setSelectedColor(LIN.color1),
                                    setSelectedColorCode(LIN.colorcode1),
                                    setThum(1)
                                )}
                            >
                                {selectedColor === LIN.color1 ? (
                                    <img
                                        src={`../../images/products/colors/${LIN.colorcode1}_chk.png`}
                                        alt="color1"
                                    />
                                ) : (
                                    <img
                                        src={`../../images/products/colors/${LIN.colorcode1}.png`}
                                        alt="color1"
                                    />
                                )}
                            </li>
                            {isColorcode2 ? (
                                <li
                                    onClick={() => (
                                        setSelectedColor(LIN.color2),
                                        setSelectedColorCode(LIN.colorcode2),
                                        setThum(1)
                                    )}
                                >
                                    {selectedColor === LIN.color2 ? (
                                        <img
                                            src={`../../images/products/colors/${LIN.colorcode2}_chk.png`}
                                            alt="color2"
                                        />
                                    ) : (
                                        <img
                                            src={`../../images/products/colors/${LIN.colorcode2}.png`}
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
                            src={`../../images/products/work/linie/${LIN.code}/${selectedColorCode}_1.png`}
                            alt="linie"
                        />
                    </li>
                    <li className={thum === 2 ? 'on' : ''} onClick={() => setThum(2)}>
                        <img
                            src={`../../images/products/work/linie/${LIN.code}/${selectedColorCode}_2.png`}
                            alt="linie"
                        />
                    </li>
                    <li className={thum === 3 ? 'on' : ''} onClick={() => setThum(3)}>
                        <img
                            src={`../../images/products/work/linie/${LIN.code}/${selectedColorCode}_3.png`}
                            alt="linie"
                        />
                    </li>
                    <li className={thum === 4 ? 'on' : ''} onClick={() => setThum(4)}>
                        <img
                            src={`../../images/products/work/linie/${LIN.code}/${selectedColorCode}_4.png`}
                            alt="linie"
                        />
                    </li>
                    <li className={thum === 5 ? 'on' : ''} onClick={() => setThum(5)}>
                        <img
                            src={`../../images/products/work/linie/${LIN.code}/${selectedColorCode}_5.png`}
                            alt="linie"
                        />
                    </li>
                </ul>
            </div>
        </DetailWrap>
    );
};

export default LinieDetail;
