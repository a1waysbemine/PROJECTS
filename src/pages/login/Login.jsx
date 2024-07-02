import { Link } from 'react-router-dom';
import LoginForm from '../../components/Login/LoginForm';
import { LogInWrap } from './LoginStyle';
import { useEffect } from 'react';

const Login = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return (
        <LogInWrap>
            <ul>
                <li>
                    <Link to={'/'}>HOME</Link>
                </li>
                <li className="on">로그인</li>
                <li>
                    <Link to={'/join'}>회원가입</Link>
                </li>
            </ul>

            <div className="subInner">
                <h2>LOGIN</h2>
                <LoginForm />
            </div>
        </LogInWrap>
    );
};

export default Login;
