import { Link } from 'react-router-dom';
import { TopMenuBar } from './HeaderStyle';

const TopMenu = () => {
    return (
        <TopMenuBar>
            <li>
                <Link to="/login">로그인</Link>
            </li>

            <li>
                <Link to="/join">회원가입</Link>
            </li>
            <li>
                <Link to="/event">이벤트</Link>
            </li>
            <li>
                <Link to="/cart">
                    <i className="xi-cart"></i>장바구니
                </Link>
            </li>
        </TopMenuBar>
    );
};

export default TopMenu;
