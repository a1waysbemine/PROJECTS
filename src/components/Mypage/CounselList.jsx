import { useEffect } from 'react';
import CounselBox from './CounselBox';
import { CounselListWrap } from './MypageStyle';

const CounselList = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <CounselListWrap>
            <div className="subInner">
                <h2>상담 내역</h2>
                <CounselBox />
            </div>
        </CounselListWrap>
    );
};

export default CounselList;
