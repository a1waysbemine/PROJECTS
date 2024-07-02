import styled from 'styled-components';

export const EventWrap = styled.div`
    .subInner {
        width: 1200px;
        padding: 50px 0 100px;
    }
    .subMenu {
        padding: 10px 0;
        padding-left: 250px;
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        li {
            padding: 15px 25px;
            margin-right: 10px;
            color: #828282;
            font-weight: 400;
            &.on {
                border: 1px solid #002bd2;
                color: #002bd2;
            }
        }
    }
    h2 {
        font-size: 35px;
        font-weight: 500;
        margin: 30px 0 50px;
    }
    .content {
        h3 {
            border-top: 1px solid #b5b5b5;
            text-align: center;
            font-size: 25px;
            font-weight: 500;
            color: #807f83;
            padding: 30px 0;
        }
    }
`;

export const EventUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`;

export const EventLi = styled.li`
    width: 320px;
    height: 400px;
    position: relative;
    box-sizing: border-box;
    margin: 20px;
    background-color: #e6e6e6;
    img {
        width: 320px;
        height: 320px;
    }
    strong {
        font-weight: 700;
    }
    strong,
    span {
        padding: 10px 15px;
        font-size: 14px;
        display: block;
    }
    p {
        button {
            padding: 10px 20px;
            font-size: 14px;
            font-weight: 500;
            color: #fff;
            background: #807f83;
            position: absolute;
            right: 10px;
            bottom: 10px;
        }
        &.active {
            button {
                background: #002bd2;
            }
        }
        &.end {
            pointer-events: none;
        }
    }
`;
