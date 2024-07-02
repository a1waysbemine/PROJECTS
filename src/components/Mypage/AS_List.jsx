import AS_ListBox from './AS_ListBox';
import { AS_ListWrap } from './MypageStyle';

const AS_List = () => {
    return (
        <AS_ListWrap>
            <div className="subInner">
                <h2>A/S 신청 내역</h2>
                <AS_ListBox />
            </div>
        </AS_ListWrap>
    );
};

export default AS_List;
