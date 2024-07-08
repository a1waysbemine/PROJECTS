import AS_Request from '../../components/Support/AS_Request';
import Counsel from '../../components/Support/Counsel';
import Faq from '../../components/Support/Faq';
import { TabMenu } from './SupportStyle';
import AS_Notice from '../../components/Support/AS_Notice';
import { useDispatch, useSelector } from 'react-redux';
import { changeSupportCategory } from '../../store/modules/supportSlice';

const Support = () => {
    const { supportCategory } = useSelector((state) => state.support);
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
                        className={supportCategory === 'FAQ' ? 'on' : ''}
                    >
                        FAQ
                    </li>
                    <li
                        onClick={() => categorize('친절상담')}
                        className={supportCategory === '친절상담' ? 'on' : ''}
                    >
                        친절상담
                    </li>
                    <li
                        onClick={() => categorize('A/S 안내')}
                        className={supportCategory === 'A/S 안내' ? 'on' : ''}
                    >
                        A/S 안내
                    </li>
                    <li
                        onClick={() => categorize('A/S 신청')}
                        className={supportCategory === 'A/S 신청' ? 'on' : ''}
                    >
                        A/S 신청
                    </li>
                </ul>
            </TabMenu>

            {supportCategory === 'FAQ' && <Faq />}
            {supportCategory === '친절상담' && <Counsel />}
            {supportCategory === 'A/S 안내' && <AS_Notice categorize={categorize} />}
            {supportCategory === 'A/S 신청' && <AS_Request />}
        </>
    );
};

export default Support;
