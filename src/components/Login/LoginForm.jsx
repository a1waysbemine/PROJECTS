import { useNavigate } from 'react-router-dom';
import { LoginFormWrap } from '../../pages/login/LoginStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { login } from '../../store/modules/authSlice';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { authed } = useSelector((state) => state.auth);

    useEffect(() => {
        authed ? navigate('/') : navigate('/login');
    }, [authed]);

    const onJoin = () => {
        navigate('/join');
    };

    const [users, setUser] = useState({
        userid: '',
        password: '',
    });

    const { userid, password } = users;

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...users,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!userid || !password) return;
        dispatch(login(users));
        setUser({
            userid: '',
            password: '',
        });
    };

    return (
        <LoginFormWrap onSubmit={onSubmit}>
            <p className="id">
                <label htmlFor="">아이디</label>
                <input type="text" name="userid" value={userid} onChange={changeInput} />
            </p>
            <p className="pwd">
                <label htmlFor="">비밀번호</label>
                <input type="password" name="password" value={password} onChange={changeInput} />
            </p>
            <p className="btn">
                <button type="submit">로그인</button>
                <button onClick={onJoin}>회원가입</button>
            </p>
        </LoginFormWrap>
    );
};

export default LoginForm;
