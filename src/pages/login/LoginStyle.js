import styled from 'styled-components';

export const LogInWrap = styled.div`
    ul {
        padding: 10px 0;
        padding-left: 250px;
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        li {
            padding: 15px 25px;
            margin-right: 10px;
            font-weight: 400;
            color: #828282;
            &.on {
                border: 1px solid #002bd2;
                color: #002bd2;
            }
        }
    }
    h2 {
        font-size: 30px;
        font-weight: 900;
        border-bottom: 1px solid #000;
        margin: 50px 0;
        padding-bottom: 10px;
    }
`;

export const LoginFormWrap = styled.form`
    border: 1px solid #999;
    text-align: center;
    width: 500px;
    height: 200px;
    padding: 50px;
    margin: 0 auto 50px;
    position: relative;
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        label {
            width: 70px;
        }
        input[type='password'],
        input[type='text'] {
            width: 200px;
            height: 30px;
            padding: 0 20px;
            margin-left: 30px;
            outline: none;
        }
    }
    .btn {
        position: absolute;
        left: 0;
        bottom: 30px;
        padding-bottom: 0;
        transform: translateX(50%);
        button {
            font-size: 13px;
            font-weight: 700;
            background-color: #807f83;
            color: #fff;
            width: 155px;
            height: 36px;
            margin-left: 15px;
            &:first-child {
                margin-left: -15px;
                background-color: #002bd2;
            }
        }
    }
`;

export const JoinWrap = styled.div`
    ul {
        padding: 10px 0;
        padding-left: 250px;
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        li {
            padding: 15px 25px;
            margin-right: 10px;
            font-weight: 400;
            color: #828282;
            &.on {
                border: 1px solid #002bd2;
                color: #002bd2;
            }
        }
    }
    h2 {
        font-size: 30px;
        font-weight: 900;
        border-bottom: 1px solid #000;
        margin: 50px 0;
        padding-bottom: 10px;
    }
`;

export const JoinFormWrap = styled.form`
    margin-bottom: 50px;
    .policy {
        h3 {
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 30px;
        }
        p {
            margin-bottom: 20px;
            label {
                margin-left: 5px;
                font-size: 14px;
            }
        }
        .terms {
            display: flex;
            flex-direction: column;
            textarea {
                margin-top: 10px;
                width: 97%;
                height: 100px;
                resize: none;
                font-size: 12px;
                padding: 20px;
            }
        }
    }
    .input {
        h3 {
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            margin: 50px 0 30px;
        }
        p {
            display: flex;
            justify-content: start;
            align-items: center;
            width: 1000px;
            margin: auto;
            border: 1px solid #999;
            border-bottom: none;
            &:last-child {
                border-bottom: 1px solid #999;
            }
            label {
                width: 110px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                border-right: 1px solid #999;
            }
            input[type='password'],
            input[type='email'],
            input[type='text'] {
                width: 200px;
                height: 25px;
                margin-left: 20px;
                padding: 0 10px;
            }
            button {
                width: 100px;
                height: 30px;
                background-color: #807f83;
                color: #fff;
                margin: 0 0 0 20px;
            }
            em {
                font-size: 13px;
                margin-left: 20px;
            }
        }
    }
    .btn {
        margin-top: 30px;
        text-align: center;
        button {
            font-size: 13px;
            font-weight: 700;
            background-color: #807f83;
            color: #fff;
            width: 155px;
            height: 36px;
            margin-left: 15px;
            &:first-child {
                margin-left: -15px;
                background-color: #002bd2;
            }
        }
    }
`;
