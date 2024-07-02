import styled from 'styled-components';

export const OrderListWrap = styled.div`
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
        margin-bottom: 50px;
    }
    .process {
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: space-around;
        li {
            width: 210px;
            height: 120px;
            padding: 0 15px 0 75px;
            clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
            background-color: #efefef;
            line-height: 120px;
            /* text-align: right; */
            font-size: 20px;
            span {
                font-size: 40px;
                font-weight: 700;
                color: #999;
            }
            &.finished {
                background: #385be2;
                color: #fff;
                span {
                    color: #efefef;
                }
            }
        }
    }
`;

export const CounselListWrap = styled.div`
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
        margin-bottom: 50px;
    }
`;

export const AS_ListWrap = styled.div`
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
        margin-bottom: 50px;
    }
`;

export const CounselListTable = styled.table`
    width: 100%;
    padding: 30px 20px;
    border: 2px solid #000;
    text-align: center;
    thead {
        background: #dcdcdc;
        tr {
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            font-weight: 700;
        }
        td {
            border-right: 1px solid #000;
            &.category {
                width: 150px;
            }
            &.title {
                width: 400px;
            }
        }
    }
    tbody {
        height: 60px;
        line-height: 60px;
        td {
            padding: 0 10px;
            border-right: 1px solid #000;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &.category {
                width: 150px;
            }
            &.title {
                width: 400px;
            }
        }
    }
`;

export const ASListTable = styled.table`
    width: 100%;
    padding: 30px 20px;
    border: 2px solid #000;
    text-align: center;
    thead {
        background: #faf0d8;
        tr {
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            font-weight: 700;
        }
        td {
            border-right: 1px solid #000;
            &.category {
                width: 150px;
            }
            &.details {
                width: 500px;
            }
        }
    }
    tbody {
        height: 60px;
        line-height: 60px;
        td {
            padding: 0 10px;
            border-right: 1px solid #000;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &.category {
                width: 150px;
            }
            &.details {
                width: 800px;
            }
        }
    }
`;
