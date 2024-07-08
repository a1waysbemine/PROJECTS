import { useState } from 'react';
import { TabMenu } from './MypageStyle';
import OrderList from '../../components/Mypage/OrderList';
import CounselList from '../../components/Mypage/CounselList';
import AS_List from '../../components/Mypage/AS_List';

const MyPage = () => {
    const [onTab, setOnTab] = useState('주문조회');
    const onSubTab = (x) => {
        setOnTab(x);
    };
    return (
        <>
            <TabMenu>
                <strong>마이페이지</strong>
                <ul className="tab">
                    <li
                        onClick={() => onSubTab('주문조회')}
                        className={onTab === '주문조회' ? 'on' : ''}
                    >
                        주문조회
                    </li>
                    <li
                        onClick={() => onSubTab('상담내역')}
                        className={onTab === '상담내역' ? 'on' : ''}
                    >
                        상담내역
                    </li>
                    <li
                        onClick={() => onSubTab('A/S신청내역')}
                        className={onTab === 'A/S신청내역' ? 'on' : ''}
                    >
                        A/S신청내역
                    </li>
                </ul>
            </TabMenu>
            {onTab === '주문조회' && <OrderList />}
            {onTab === '상담내역' && <CounselList />}
            {onTab === 'A/S신청내역' && <AS_List />}
        </>
    );
};

export default MyPage;
