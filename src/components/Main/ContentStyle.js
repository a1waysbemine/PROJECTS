import styled from 'styled-components';

export const Con1Wrap = styled.div`
    width: 100%;
    border-bottom: 2px solid #dcdcdc;
    .inner {
        width: 1400px;
        padding: 100px 0;
    }
    h2 {
        font-size: 45px;
        line-height: 1;
        margin-bottom: 30px;
    }
    .more {
        display: block;
        text-align: right;
        margin-bottom: 30px;
        a {
            font-size: 18px;
            cursor: pointer;
            color: #002bd2;
        }
    }
    .list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
            width: 600px;
            margin-bottom: 100px;
            img {
                width: 600px;
                cursor: pointer;
            }
            h3 {
                text-align: center;
                font-size: 50px;
                font-weight: 600;
                margin-top: 10px;
            }
            strong {
                display: block;
                text-align: center;
                font-size: 25px;
            }
        }
    }
`;

export const Con2Wrap = styled.div`
    width: 100%;
    border-bottom: 2px solid #dcdcdc;
    .inner {
        width: 1400px;
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        line-height: 1;
        margin-bottom: 30px;
    }
    .more {
        display: block;
        text-align: right;
        margin-bottom: 30px;
        a {
            font-size: 18px;
            cursor: pointer;
            color: #002bd2;
        }
    }
    .list {
        display: flex;
        justify-content: space-between;
        li {
            width: 380px;
            img {
                width: 380px;
                cursor: pointer;
            }
            h3 {
                font-size: 30px;
                font-weight: 600;
                margin-top: 10px;
                text-align: center;
            }
            strong {
                display: block;
                text-align: center;
                font-size: 18px;
            }
        }
    }
`;

export const Con3Wrap = styled.div`
    width: 100%;
    .inner {
        width: 1400px;
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        line-height: 1;
        margin-bottom: 30px;
    }
    .more {
        display: block;
        text-align: right;
        margin-bottom: 30px;
        a {
            font-size: 18px;
            cursor: pointer;
            color: #002bd2;
        }
    }
    .list {
        display: flex;
        justify-content: space-between;
        li {
            width: 380px;
            img {
                width: 380px;
                cursor: pointer;
            }
            h3 {
                font-size: 30px;
                font-weight: 600;
                margin-top: 10px;
                text-align: center;
            }
            strong {
                display: block;
                text-align: center;
                font-size: 18px;
            }
        }
    }
`;

export const Con4Wrap = styled.div`
    width: 100%;
    background: #f5f5f5;
    .inner {
        width: 1400px;
        padding: 100px 0;
    }
    .news {
        display: flex;
        margin-bottom: 100px;
        p {
            height: 80px;
            line-height: 80px;
            &:first-child {
                width: 200px;
                background: #002bd2;
                color: #fff;
                font-size: 20px;
                text-align: center;
            }
            &:last-child {
                width: 1200px;
                background: #dde6ff;
                padding-left: 300px;
                font-size: 20px;
                font-weight: 600;
                position: relative;
                em {
                    font-size: 17px;
                    font-weight: 400;
                    padding-left: 30px;
                }
                span {
                    font-size: 17px;
                    text-decoration: underline;
                    position: absolute;
                    right: 30px;
                    bottom: 0;
                    font-weight: 500;
                    cursor: pointer;
                    a {
                        &:hover {
                            text-decoration: underline;
                            color: #002bd2;
                        }
                    }
                }
            }
        }
    }
    .instaContents {
        p {
            display: flex;
            align-items: center;
            margin-bottom: 50px;
            span {
                width: 70px;
                height: 70px;
                display: block;
                border-radius: 100%;
                background-image: url(../images/main/con4_sidiz.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                margin-right: 20px;
            }
            strong {
                display: block;
                font-size: 20px;
                font-weight: 500;
                cursor: pointer;
            }
        }
        .list {
            display: flex;
            justify-content: space-between;
            margin-bottom: 100px;
            li {
                width: 250px;
                img {
                    width: 250px;
                }
            }
        }
    }
    .blogContents {
        width: 100%;
        position: relative;
        strong {
            display: block;
            font-size: 25px;
            font-weight: 500;
            padding-left: 50px;
            background-image: url(../images/main/con4_blogIcon.png);
            background-repeat: no-repeat;
            background-position: 0 0;
            background-size: contain;
        }
        h3 {
            font-size: 35px;
            font-weight: 700;
            line-height: 1.3;
            margin: 30px 0 40px;
        }
        p {
            width: 450px;
            word-break: keep-all;
            font-size: 18px;
            margin-bottom: 50px;
        }
        .more {
            a {
                font-size: 17px;
                text-decoration: underline;
                color: #002bd2;
            }
        }
        .pic {
            position: absolute;
            right: 0;
            top: 0;
            width: 650px;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
`;
