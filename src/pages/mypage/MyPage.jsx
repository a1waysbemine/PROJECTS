import { TabMenu } from './MypageStyle';
import OrderList from '../../components/Mypage/OrderList';
import CounselList from '../../components/Mypage/CounselList';
import AS_List from '../../components/Mypage/AS_List';
import { useDispatch, useSelector } from 'react-redux';
import { changeMypageCategory } from '../../store/modules/supportSlice';

const MyPage = () => {
    const { mypageCategory } = useSelector((state) => state.support);
    const dispatch = useDispatch();

    const categorize = (category) => {
        dispatch(changeMypageCategory(category));
    };
    return (
        <>
            <TabMenu>
                <strong>마이페이지</strong>
                <ul className="tab">
                    <li
                        onClick={() => categorize('주문조회')}
                        className={mypageCategory === '주문조회' ? 'on' : ''}
                    >
                        주문조회
                    </li>
                    <li
                        onClick={() => categorize('상담내역')}
                        className={mypageCategory === '상담내역' ? 'on' : ''}
                    >
                        상담내역
                    </li>
                    <li
                        onClick={() => categorize('A/S신청내역')}
                        className={mypageCategory === 'A/S신청내역' ? 'on' : ''}
                    >
                        A/S신청내역
                    </li>
                </ul>
            </TabMenu>
            {mypageCategory === '주문조회' && <OrderList />}
            {mypageCategory === '상담내역' && <CounselList />}
            {mypageCategory === 'A/S신청내역' && <AS_List />}
        </>
    );
};

export default MyPage;
