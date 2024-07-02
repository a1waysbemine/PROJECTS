import CounselBox from './CounselBox';
import { CounselListWrap } from './MypageStyle';

const CounselList = () => {
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
