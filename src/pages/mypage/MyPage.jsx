import { useState } from 'react';
import { TabMenu } from './MypageStyle';
import OrderList from '../../components/Mypage/OrderList';
import CounselList from '../../components/Mypage/CounselList';
import AS_List from '../../components/Mypage/AS_List';

const MyPage = () => {
    const [onTab, setOnTab] = useState(0);
    const onSubTab = (x) => {
        setOnTab(x);
    };
    return (
        <>
            <TabMenu>
                <strong>마이페이지</strong>
                <ul className="tab">
                    <li onClick={() => onSubTab(0)} className={onTab === 0 ? 'on' : ''}>
                        주문조회
                    </li>
                    <li onClick={() => onSubTab(1)} className={onTab === 1 ? 'on' : ''}>
                        상담내역
                    </li>
                    <li onClick={() => onSubTab(2)} className={onTab === 2 ? 'on' : ''}>
                        A/S신청내역
                    </li>
                </ul>
            </TabMenu>
            {onTab === 0 && <OrderList />}
            {onTab === 1 && <CounselList />}
            {onTab === 2 && <AS_List />}
        </>
    );
};

export default MyPage;
