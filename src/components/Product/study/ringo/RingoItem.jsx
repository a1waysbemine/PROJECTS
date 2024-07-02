import { Link, useNavigate } from 'react-router-dom';
import { ItemLi } from '../../../../pages/product/productStyle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../../store/modules/cartSlice';

const RingoItem = ({ item }) => {
    const { id, name, price, thumurl, iconurl, code, color1, colorcode1 } = item;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState(color1);
    const [selectedColorCode, setSelectedColorCode] = useState(colorcode1);
    const { authed } = useSelector((state) => state.auth);

    const addToCart = () => {
        if (!authed) {
            alert('로그인이 필요합니다.');
            navigate('/login');
            return;
        }
        const toCart = {
            name,
            code,
            selectedColor,
            selectedColorCode,
            price,
            quantity: 1,
        };
        dispatch(addCart(toCart));
    };
    return (
        <ItemLi>
            <span>
                <img src={iconurl} alt="icon" />
            </span>
            <strong>{name}</strong>
            <p className="price">￦{price.toLocaleString()}</p>
            <p className="thum">
                <img src={thumurl} alt={name} />
            </p>
            <div className="detail">
                <button className="cart" onClick={addToCart}>
                    장바구니
                </button>
                <Link to={`${id}`}>
                    <button>상세정보</button>
                </Link>
            </div>
        </ItemLi>
    );
};

export default RingoItem;
