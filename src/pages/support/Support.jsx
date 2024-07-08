import AS_Request from '../../components/Support/AS_Request';
import Counsel from '../../components/Support/Counsel';
import Faq from '../../components/Support/Faq';
import { TabMenu } from './SupportStyle';
import FindStore from '../../components/Support/FindStore';
import AS_Notice from '../../components/Support/AS_Notice';
import { useDispatch, useSelector } from 'react-redux';
import { changeSupportCategory } from '../../store/modules/supportSlice';

const Support = () => {
    const { category } = useSelector((state) => state.support);
    const dispatch = useDispatch();
    const categorize = (category) => {
        dispatch(changeSupportCategory(category));
    };

    return (
        <>
            <TabMenu>
                <strong>고객센터</strong>
                <ul className="tab">
                    <li
                        onClick={() => categorize('FAQ')}
                        className={category === 'FAQ' ? 'on' : ''}
                    >
                        FAQ
                    </li>
                    <li
                        onClick={() => categorize('친절상담')}
                        className={category === '친절상담' ? 'on' : ''}
                    >
                        친절상담
                    </li>
                    <li
                        onClick={() => categorize('A/S 안내')}
                        className={category === 'A/S 안내' ? 'on' : ''}
                    >
                        A/S 안내
                    </li>
                    <li
                        onClick={() => categorize('A/S 신청')}
                        className={category === 'A/S 신청' ? 'on' : ''}
                    >
                        A/S 신청
                    </li>
                    <li
                        onClick={() => categorize('매장 찾기')}
                        className={category === '매장 찾기' ? 'on' : ''}
                    >
                        매장 찾기
                    </li>
                </ul>
            </TabMenu>

            {category === 'FAQ' && <Faq />}
            {category === '친절상담' && <Counsel />}
            {category === 'A/S 안내' && <AS_Notice categorize={categorize} />}
            {category === 'A/S 신청' && <AS_Request />}
            {category === '매장 찾기' && <FindStore />}
        </>
    );
};

export default Support;
