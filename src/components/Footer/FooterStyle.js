import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;
  height: 600px;
  background: #141414;
  .inner {
    width: 1400px;
    display: flex;
    color: #fff;
  }
  h1 {
    position: absolute;
    left: 0;
    top: 60px;
  }
  .info {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 150px;
    li {
      margin-bottom: 30px;
    }
  }
  .footerMenu {
    position: absolute;
    right: 0;
    top: 150px;
    display: flex;
    .menu {
      margin-left: 80px;
      text-align: center;
      font-size: 18px;
      &:first-child {
        margin-left: 0;
      }
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
          margin-top: 10px;
          cursor: pointer;
          font-size: 16px;
          &:first-child {
            margin-top: 20px;
          }
        }
      }
      .time {
        pointer-events: none;
      }
    }
  }
`;
