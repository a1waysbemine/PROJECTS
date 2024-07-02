import { Link, useNavigate } from 'react-router-dom';
import { TopMenuBar } from './HeaderStyle';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/modules/authSlice';

const TopMenu = () => {
    const { authed, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogout = () => {
        dispatch(logout(user));
    };
    const goCart = () => {
        if (authed) {
            navigate('/cart');
        } else {
            alert('로그인이 필요합니다.');
            navigate('/login');
        }
    };
    return (
        <TopMenuBar>
            {!authed ? (
                <>
                    <li>
                        <Link to="/login">로그인</Link>
                    </li>

                    <li>
                        <Link to="/join">회원가입</Link>
                    </li>
                </>
            ) : (
                <>
                    <li className="userName">{user.name}님 환영합니다.</li>
                    <li onClick={onLogout} className="logout">
                        로그아웃
                    </li>
                    <li className="mypage" onClick={() => navigate('/mypage')}>
                        마이페이지
                    </li>
                </>
            )}

            <li onClick={goCart} className="cart">
                장바구니
            </li>
        </TopMenuBar>
    );
};

export default TopMenu;
