import styled from 'styled-components';

export const VisualWrap = styled.section`
    width: 100%;
    height: 950px;
    box-sizing: border-box;
    /* padding-bottom: 50px; */
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
        font-weight: 400;
        line-height: 1.4;
        margin-bottom: 30px;
    }
    strong {
        font-size: 80px;
        font-weight: 700;
        line-height: 1.2;
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
    padding-top: 50px;
    img {
        width: 100%;
        height: 100%;
        transition: 1.5s;
    }
`;
// Visual

export const MainWrap = styled.div``;

export const ContentWrap = styled.div``;
