import styled from 'styled-components';

export const FaqWrap = styled.div`
    .subInner {
        width: 1200px;
        padding: 50px 0 100px;
        box-sizing: border-box;
    }
    h2 {
        font-size: 35px;
        font-weight: 500;
        margin-bottom: 50px;
    }
    .sorting {
        display: flex;
        position: absolute;
        right: 0;
        li {
            margin-right: 5px;
            cursor: pointer;
            background: #f4f2f3;
            font-size: 15px;
            padding: 8px 40px;
            color: #999;
            &.on {
                background-color: #333;
                color: #fff;
            }
        }
    }
    .faqBox {
        width: 100%;
        margin-top: 100px;
        padding-top: 30px;
        border-top: 2px solid #dcdcdc;
        dt {
            width: 100%;
            height: 55px;
            box-sizing: border-box;
            background: #e6e6e6;
            color: #807f83;
            font-size: 18px;
            cursor: pointer;
            line-height: 55px;
            padding-left: 20px;
            margin-bottom: 5px;
            position: relative;
            &.on {
                font-weight: 500;
                background: none;
                color: #333;
            }
            .category {
                display: block;
                position: absolute;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
            }
            .xi-angle-right-min {
                font-weight: 700;
                font-size: 20px;
                vertical-align: middle;
                padding-right: 10px;
            }
            .xi-angle-down-min {
                font-weight: 700;
                color: #ff0000;
                font-size: 20px;
                vertical-align: middle;
                padding-right: 10px;
            }
        }
        dd {
            padding: 10px 50px 30px;
            font-size: 17px;
            color: #807f83;
            word-break: keep-all;
            display: none;
            &.on {
                display: block;
            }
        }
    }
`;

export const CounselWrap = styled.div`
    .subInner {
        width: 1200px;
        padding: 50px 0 100px;
        box-sizing: border-box;
    }
    h2 {
        font-size: 35px;
        font-weight: 500;
        padding-bottom: 50px;
        margin-bottom: 50px;
        border-bottom: 2px solid #dcdcdc;
    }
    .subVisual {
        width: 1200px;
        height: 170px;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover;
        background-image: url(../images/support/counsel_visual.png);
        padding-left: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #807f84;
        h3 {
            font-size: 32px;
        }
        h4 {
            font-size: 25px;
            text-indent: 20px;
            display: flex;
            align-items: center;
            span {
                font-size: 17px;
            }
        }
    }
    .infoPolicy {
        width: 1200px;
        height: 170px;
        padding: 20px;
        box-sizing: border-box;
        margin-top: 70px;
        margin-bottom: 30px;
        border: 2px solid #dcdcdc;
        overflow-y: scroll;
        color: #807f84;
        font-size: 17px;
        strong {
            font-weight: 700;
            font-size: 18px;
            color: #000;
            display: block;
            margin-bottom: 10px;
        }
    }
    .agree {
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-bottom: 50px;
        input {
            margin-right: 10px;
            width: 17px;
            height: 17px;
        }
    }
`;

export const CounselForm = styled.form`
    width: 1200px;
    box-sizing: border-box;
    border: 1px solid #999;
    margin-bottom: 50px;
    table {
        width: 1200px;
        box-sizing: border-box;
        margin-bottom: 30px;
        tr {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #999;
            &:last-child {
                border-bottom: none;
            }
            td {
                padding: 25px 10px;
                margin-right: 30px;
                box-sizing: border-box;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                &.email {
                    input {
                        width: 300px;
                    }
                }

                span {
                    font-size: 15px;
                    text-indent: 20px;
                    color: #999;
                }
                &:first-child {
                    justify-content: center;
                    border-right: 1px solid #999;
                    width: 200px;
                    font-size: 18px;
                    font-weight: 500;
                }
                input {
                    width: 230px;
                    height: 35px;
                    box-sizing: border-box;
                    padding-left: 10px;
                    font-size: 17px;
                    outline: none;
                }
                input[type='radio'] {
                    width: 17px;
                    height: 17px;
                    margin-right: 10px;
                    vertical-align: middle;
                }
            }
            &.title {
                td {
                    &:last-child {
                        input {
                            width: 350px;
                        }
                    }
                }
            }
            &.fileUpload {
                td {
                    &:last-child {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                }
            }
            &.details {
                td {
                    &:last-child {
                        div {
                            width: 700px;
                            height: 170px;
                            box-sizing: border-box;
                            font-size: 17px;
                            text-align: left;
                            outline: none;
                            padding: 10px;
                            border: 1px solid #999;
                            overflow-y: scroll;
                        }
                    }
                }
            }
        }
    }
    button {
        display: block;
        text-align: center;
        width: 150px;
        height: 50px;
        margin: auto;
        font-size: 16px;
        transition: 0.3s;
        margin-bottom: 50px;
        &:hover {
            font-size: 17px;
            color: #fff;
            background: #002bd2;
        }
    }
`;

export const RequestWrap = styled.div`
    .subInner {
        width: 1200px;
        padding: 50px 0 100px;
        box-sizing: border-box;
    }
    h2 {
        font-size: 35px;
        font-weight: 500;
        padding-bottom: 50px;
        border-bottom: 2px solid #dcdcdc;
    }
    .visual {
        width: 1200px;
        height: 600px;
        box-sizing: border-box;
        padding-top: 70px;
        padding-left: 270px;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover;
        background-image: url(../images/support/as_visual.png);
        h3 {
            font-size: 30px;
            font-weight: 500;
            color: #5f5f5f;
            margin-bottom: 50px;
        }
        p {
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 10px;
        }
        b {
            display: block;
            font-size: 18px;
            color: #5f5f5f;
            margin-bottom: 30px;
        }
        strong {
            display: block;
            font-size: 25px;
            font-weight: 500;
            i {
                padding-right: 10px;
            }
            span {
                padding-left: 10px;
                font-size: 17px;
                color: #5f5f5f;
            }
        }
    }
    .infoPolicy {
        width: 1200px;
        height: 170px;
        padding: 20px;
        box-sizing: border-box;
        margin-top: 70px;
        margin-bottom: 30px;
        border: 2px solid #dcdcdc;
        overflow-y: scroll;
        color: #807f84;
        font-size: 17px;
        strong {
            font-weight: 700;
            font-size: 18px;
            color: #000;
            display: block;
            margin-bottom: 10px;
        }
    }
    .agree {
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-bottom: 50px;
        input {
            margin-right: 10px;
            width: 17px;
            height: 17px;
        }
    }
`;

export const ASRequestForm = styled.form`
    width: 1200px;
    box-sizing: border-box;
    border: 1px solid #999;
    margin-bottom: 50px;
    table {
        width: 1200px;
        margin-bottom: 30px;
        box-sizing: border-box;
        tr {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #999;
            &:last-child {
                border-bottom: none;
            }
            td {
                padding: 25px 10px;
                margin-right: 30px;
                box-sizing: border-box;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    font-size: 15px;
                    text-indent: 20px;
                    color: #999;
                }
                &:first-child {
                    justify-content: center;
                    border-right: 1px solid #999;
                    width: 200px;
                    font-size: 18px;
                    font-weight: 500;
                }
                select {
                    width: 200px;
                    height: 40px;
                    padding-left: 10px;
                    outline: none;
                    font-size: 17px;
                }
                input[type='date'] {
                    text-align: center;
                }
                input {
                    width: 230px;
                    height: 35px;
                    box-sizing: border-box;
                    padding-left: 10px;
                    font-size: 17px;
                    outline: none;
                }
                input[type='radio'] {
                    width: 17px;
                    height: 17px;
                    margin-right: 10px;
                    vertical-align: middle;
                }
                &.address {
                    display: flex;
                    flex-direction: column;
                    align-items: baseline;
                    input {
                        &:last-child {
                            width: 350px;
                        }
                    }
                }
                &.title {
                    input {
                        width: 350px;
                    }
                }
                &.date {
                    width: 200px;
                    border-left: 1px solid #999;
                    border-right: 1px solid #999;
                }
                &.upload {
                    display: flex;
                    flex-direction: column;
                }
                div {
                    width: 700px;
                    height: 170px;
                    box-sizing: border-box;
                    font-size: 17px;
                    text-align: left;
                    outline: none;
                    padding: 10px;
                    border: 1px solid #999;
                    overflow-y: scroll;
                }
            }
        }
    }
    button {
        display: block;
        text-align: center;
        width: 150px;
        height: 50px;
        margin: auto;
        font-size: 16px;
        transition: 0.3s;
        margin-bottom: 50px;
        &:hover {
            font-size: 17px;
            color: #fff;
            background: #002bd2;
        }
    }
`;

export const ASNoticeWrap = styled.div`
    .subInner {
        width: 1200px;
        padding: 50px 0 100px;
        box-sizing: border-box;
    }
    h2 {
        font-size: 35px;
        font-weight: 500;
        padding-bottom: 50px;
        border-bottom: 2px solid #dcdcdc;
        margin-bottom: 100px;
    }
    .box {
        width: 1000px;
        padding-top: 40px;
        box-sizing: border-box;
        background: #f4f3f1;
        margin: auto;
    }
    .box1 {
        margin-bottom: 70px;
        h3 {
            font-size: 30px;
            font-weight: 700;
            text-align: center;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        p {
            font-size: 20px;
            color: #7b7a78;
            text-align: center;
        }
        .miniBox {
            width: 1000px;
            padding: 30px 0;
            margin-top: 40px;
            border-top: 1px solid #999;
            display: flex;
            flex-direction: column;
            justify-content: center;
            p {
                color: #000;
                em {
                    font-weight: 700;
                }
                span {
                    font-size: 20px;
                    font-weight: 700;
                    padding: 0 5px;
                }
                &.available {
                    margin-top: 10px;
                    strong {
                        font-size: 16px;
                    }
                    span {
                        display: inline-block;
                        padding: 5px 10px;
                        margin: 0 10px;
                        background: #fff;
                        font-size: 15px;
                        border-radius: 15px;
                    }
                }
            }
        }
    }
    h4 {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 20px;
        text-indent: 100px;
    }
    .box2 {
        margin-bottom: 70px;
        padding-bottom: 40px;
        .miniBox2 {
            margin: auto;
            position: relative;
            .plus {
                display: block;
                width: 45px;
                height: 45px;
                font-size: 35px;
                line-height: 45px;
                text-align: center;
                border-radius: 100%;
                background: #d9d9d9;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
            }
            p {
                margin: auto;
                width: 700px;
                font-size: 19px;
                padding: 20px 30px;
                background: #fff;
                margin-bottom: 20px;
                line-height: 2;
                strong {
                    display: flex;
                    align-items: center;
                    font-size: 17px;
                    font-weight: 700;
                    span {
                        display: block;
                        font-size: 15px;
                        width: 22px;
                        height: 22px;
                        background: #000;
                        border-radius: 100%;
                        color: #fff;
                        text-align: center;
                        line-height: 22px;
                        margin-right: 5px;
                    }
                }
                em {
                    font-weight: 700;
                    color: #082cb8;
                    padding: 0 3px;
                }
            }
        }
        .text {
            line-height: 1.3;
            text-indent: 120px;
            margin-bottom: 10px;
        }
        .equal {
            display: block;
            text-align: center;
            font-size: 20px;
            margin-top: 30px;
            font-weight: 500;
        }
        .total {
            text-align: center;
            margin: auto;
            width: 700px;
            font-size: 20px;
            font-weight: 700;
            color: #082cb8;
            padding: 30px 0;
            background: #fff;
            margin-top: 30px;
        }
    }
    .box3 {
        background: #fff;
        margin-bottom: 50px;
        h4 {
            font-size: 25px;
            font-weight: 700;
            margin-bottom: 20px;
            text-indent: 0;
        }
        p {
            font-size: 19px;
            font-weight: 500;
            color: #444;
            margin-bottom: 30px;
            span {
                display: block;
                padding-left: 20px;
                font-size: 16px;
                color: #777;
            }
        }
        .explain2 {
            color: #555;
            font-size: 20px;
            margin-bottom: 40px;
            font-weight: 600;
        }
    }
    button {
        display: block;
        text-align: center;
        width: 160px;
        height: 50px;
        margin: auto;
        font-size: 16px;
        transition: 0.3s;
        &:hover {
            font-size: 17px;
            color: #fff;
            background: #002bd2;
        }
    }
`;

export const FindStoreWrap = styled.div`
    .subInner {
        width: 1200px;
        padding: 50px 0 100px;
        box-sizing: border-box;
    }
`;
