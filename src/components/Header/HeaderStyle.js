import styled from 'styled-components';

export const HeaderWrap = styled.header`
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    border-bottom: 2px solid #dcdcdc;
    .inner {
        width: 1600px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1 {
        position: absolute;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const NavWrap = styled.nav`
    .gnb {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            margin-right: 80px;
            cursor: pointer;
            font-size: 20px;
            font-weight: 700;
            transition: 0.4s;
            &:last-child {
                margin-right: 0;
            }
            a {
                &:hover {
                    color: #002bd2;
                }
            }
        }
    }
`;

export const TopMenuBar = styled.ul`
    position: absolute;
    right: 0;
    top: 10px;
    display: flex;
    li {
        font-size: 17px;
        margin-right: 40px;
        cursor: pointer;
        &:first-child {
            cursor: auto;
        }
        &:last-child {
            margin-right: 0;
        }

        &.logout:hover,
        &.mypage:hover,
        &.cart:hover {
            font-weight: 700;
            color: #002bd2;
        }

        i {
            font-size: 17px;
            margin-right: 5px;
        }
    }
`;
