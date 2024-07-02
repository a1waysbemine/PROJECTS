import { useEffect } from 'react';
import { OrderListWrap } from './MypageStyle';
import { useSelector } from 'react-redux';

const OrderList = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const { carts } = useSelector((state) => state.cart);

    return (
        <OrderListWrap>
            <div className="subInner">
                <h2>주문 상태 조회</h2>
                <ul className="process">
                    <li className={carts.length !== 0 ? 'finished' : ''}>
                        <span>1 </span> 입금대기
                    </li>
                    <li className={carts.length !== 0 ? 'finished' : ''}>
                        <span>2 </span> 주문완료
                    </li>
                    <li className={carts.length !== 0 ? 'finished' : ''}>
                        <span>3 </span> 배송준비중
                    </li>
                    <li>
                        <span>4 </span> 배송중
                    </li>
                    <li>
                        <span>5 </span> 배송완료
                    </li>
                </ul>
            </div>
        </OrderListWrap>
    );
};

export default OrderList;
