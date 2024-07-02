import styled from 'styled-components';

export const VisualWrap = styled.section`
    width: 100%;
    height: 950px;
    box-sizing: border-box;
    border-bottom: 2px solid #dcdcdc;
    .visualInner {
        position: relative;
        width: 1600px;
        height: 900px;
        box-sizing: border-box;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
`;

export const TextWrap = styled.div`
    width: 500px;
    height: 100%;
    box-sizing: border-box;
    padding-top: 150px;
    h2 {
        width: 450px;
        font-size: 60px;
        word-break: keep-all;
        text-align: left;
        font-weight: 500;
        line-height: 1.4;
        position: absolute;
        left: 0;
        top: 150px;
        opacity: 0;
        transition: 0.5s;
        &.on {
            opacity: 1;
        }
    }
    strong {
        font-size: 80px;
        font-weight: 700;
        line-height: 1.2;
        width: 300px;
        position: absolute;
        left: 0;
        top: 380px;
        opacity: 0;
        transition: 0.5s;

        &.on {
            opacity: 1;
        }
    }
    .btnWrap {
        width: 190px;
        height: 30px;
        display: flex;
        justify-content: space-between;
        font-size: 22px;
        position: absolute;
        left: 0;
        bottom: 180px;
        span {
            line-height: 30px;
            font-weight: 500;
            cursor: pointer;
        }
    }
`;

export const GalleryWrap = styled.div`
    width: 1100px;
    height: 900px;
    box-sizing: border-box;
    position: relative;
    p {
        width: 1100px;
        height: 850px;
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 50px;
        transition: 0.7s;
        opacity: 0;
        &.on {
            opacity: 1;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
`;
// Visual

export const MainWrap = styled.div``;

export const ContentWrap = styled.div``;
