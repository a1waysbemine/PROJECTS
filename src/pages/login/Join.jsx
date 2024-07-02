import { Link } from 'react-router-dom';
import { JoinWrap } from './LoginStyle';
import JoinForm from '../../components/Login/JoinForm';
import { useEffect } from 'react';

const Join = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return (
        <JoinWrap>
            <ul>
                <li>
                    <Link to={'/'}>HOME</Link>
                </li>
                <li>
                    <Link to={'/login'}>로그인</Link>
                </li>
                <li className="on">회원가입</li>
            </ul>

            <div className="subInner">
                <h2>회원가입</h2>
                <JoinForm />
            </div>
        </JoinWrap>
    );
};

export default Join;
