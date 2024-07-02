import { useState } from 'react';
import AS_Request from '../../components/Support/AS_Request';
import Counsel from '../../components/Support/Counsel';
import Faq from '../../components/Support/Faq';
import { TabMenu } from './SupportStyle';
import FindStore from '../../components/Support/FindStore';
import AS_Notice from '../../components/Support/AS_Notice';

const Support = () => {
    const [onClass, setOnClass] = useState(0);

    return (
        <>
            <TabMenu>
                <strong>고객센터</strong>
                <ul className="tab">
                    <li onClick={() => setOnClass(0)} className={onClass === 0 ? 'on' : ''}>
                        FAQ
                    </li>
                    <li onClick={() => setOnClass(1)} className={onClass === 1 ? 'on' : ''}>
                        친절상담
                    </li>
                    <li onClick={() => setOnClass(2)} className={onClass === 2 ? 'on' : ''}>
                        A/S 안내
                    </li>
                    <li onClick={() => setOnClass(3)} className={onClass === 3 ? 'on' : ''}>
                        A/S 신청
                    </li>
                    <li onClick={() => setOnClass(4)} className={onClass === 4 ? 'on' : ''}>
                        매장 찾기
                    </li>
                </ul>
            </TabMenu>

            {onClass === 0 && <Faq />}
            {onClass === 1 && <Counsel />}
            {onClass === 2 && <AS_Notice setOnClass={setOnClass} />}
            {onClass === 3 && <AS_Request />}
            {onClass === 4 && <FindStore />}
        </>
    );
};

export default Support;
