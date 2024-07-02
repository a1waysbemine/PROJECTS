import styled from 'styled-components';

export const TabMenu = styled.div`
    padding: 10px 0;
    padding-left: 250px;
    border-bottom: 2px solid #dcdcdc;
    display: flex;
    align-items: center;
    strong {
        color: #828282;
        font-size: 16px;
        font-weight: 500;
        margin-right: 50px;
    }
    .tab {
        display: flex;
        li {
            padding: 15px 20px;
            color: #828282;
            font-weight: 400;
            cursor: pointer;
            &.on {
                border: 1px solid #002bd2;
                color: #002bd2;
            }
        }
    }
`;
