import styled from 'styled-components';

export const BrandStoryWrap = styled.div`
    .subInner {
        padding: 50px 0 100px;
    }
    h2 {
        font-size: 35px;
        font-weight: 500;
        margin-bottom: 50px;
    }
    .thum {
        text-align: center;
        a {
            img {
                width: 1400px;
            }
        }
    }
    .text {
        text-align: center;
        font-size: 22px;
        line-height: 1.7;
        padding: 100px 0 150px;
        border-bottom: 1px solid #000;
        span {
            display: block;
            font-weight: 700;
            margin-top: 30px;
        }
    }
    h3 {
        font-size: 25px;
        padding-top: 100px;
        margin-bottom: 30px;
    }
    .vision {
        width: 1300px;
        height: 300px;
        margin: auto;
        background: #f4f2f3;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
    }
    .list {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
            width: 650px;
            height: 300px;
            box-sizing: border-box;
            margin-bottom: 40px;
            padding: 50px 40px;
            background-repeat: no-repeat;
            background-position: 0 0;
            background-size: cover;
            h4 {
                color: #fff;
                font-size: 40px;
                margin-bottom: 50px;
            }
            b {
                display: block;
                font-size: 22px;
                color: #fff;
            }
            &:nth-child(1) {
                background-image: url(./images/about/value_img1.jpg);
            }
            &:nth-child(2) {
                background-image: url(./images/about/value_img2.jpg);
            }
            &:nth-child(3) {
                background-image: url(./images/about/value_img3.jpg);
            }
            &:nth-child(4) {
                background-image: url(./images/about/value_img4.jpg);
            }
        }
    }
    .hisBox {
        display: flex;
        width: 100%;
        height: 350px;
        p {
            width: 50%;
            img {
                width: 100%;
                height: 100%;
            }
            &.txt {
                background: #f5f5f5;
                text-align: center;
                font-size: 22px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                span {
                    display: block;
                    cursor: pointer;
                    margin-top: 30px;
                    font-size: 18px;
                    color: #fff;
                    background: #002bd0;
                    padding: 12px 25px;
                    border-radius: 10px;
                }
            }
        }
    }
`;

export const HistoryWrap = styled.div`
    .subInner {
        padding: 50px 0 100px;
    }
    .visualImg {
        margin: auto;
        width: 1000px;
        height: 400px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    h2 {
        text-align: center;
        margin-top: 50px;
        font-size: 70px;
        font-weight: 700;
    }
    .period {
        display: block;
        text-align: center;
        font-size: 30px;
        margin-bottom: 50px;
    }
    .historyList {
        width: 1000px;
        margin: auto;
        display: flex;
        flex-direction: column;
        .listItem {
            width: 1000px;
            padding: 30px 0;
            background: #f5f5f5;
            box-sizing: border-box;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            .year {
                display: block;
                text-align: center;
                font-size: 40px;
                width: 400px;
                box-sizing: border-box;
            }
            .contentList {
                width: 600px;
                box-sizing: border-box;
                padding-left: 50px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                li {
                    display: flex;
                    font-size: 18px;
                    margin-bottom: 10px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .month {
                        display: block;
                        width: 25px;
                        font-size: 20px;
                        margin-right: 30px;
                        font-weight: 500;
                        text-align: center;
                    }
                    .textBox {
                        display: flex;
                        flex-direction: column;
                    }
                }
            }
        }
    }
`;

export const NewsWrap = styled.div`
    .subInner {
        padding: 50px 0;
    }
    h2 {
        font-size: 35px;
        font-weight: 500;
        margin-bottom: 50px;
        text-indent: 100px;
    }
    .newsList {
        width: 1200px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
            width: 350px;
            height: 450px;
            box-sizing: border-box;
            margin-bottom: 50px;
            position: relative;
            background: #f4f2f3;
            word-break: keep-all;
            img {
                width: 350px;
                height: 350px;
            }
            strong {
                display: block;
                padding-top: 10px;
                font-size: 17px;
                font-weight: 600;
                padding-left: 10px;
            }
            span {
                display: block;
                position: absolute;
                left: 10px;
                bottom: 0;
            }
        }
    }
    .more {
        display: block;
        width: 120px;
        height: 55px;
        box-sizing: border-box;
        line-height: 55px;
        margin: auto;
        text-align: center;
        font-size: 18px;
        border: 1px solid #002ad4;
        cursor: pointer;
        &:hover {
            color: #002ad4;
            font-weight: 500;
        }
    }
`;
