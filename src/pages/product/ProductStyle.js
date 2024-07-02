import styled from "styled-components";

export const ProductWrap = styled.div``;

export const SubMenuUl = styled.ul`
  width: 100%;
  padding: 10px 0;
  padding-left: 250px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 2px solid #dcdcdc;
  li {
    padding: 15px 20px;
    margin-right: 10px;
    color: #828282;
    font-weight: 400;
    cursor: pointer;
    &.on {
      border: 1px solid #002bd2;
      color: #002bd2;
    }
    &.title {
      pointer-events: none;
      font-weight: 500;
    }
  }
`;

export const ContentWrap = styled.div`
  padding: 50px 0;
  h2 {
    width: 100%;
    height: 100px;
    text-align: left;
    font-size: 50px;
    font-weight: 700;
    border-bottom: 1px solid #b5b5b5;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    li {
      padding: 30px;
      img {
        cursor: pointer;
        width: 490px;
        height: 395px;
      }
      &:last-child {
        p {
          width: 490px;
          height: 395px;
          padding: 0;
          border: 1px solid #999;
          background: url("https://cdn.sidiz.com/img/bg/grey.png");
        }
      }
    }
  }
`;

export const SortWrap = styled.div`
  border-bottom: 1px solid #000;
  margin-bottom: 50px;
  height: 50px;
  ul {
    display: flex;
    justify-content: end;
    align-items: center;
    li {
      cursor: pointer;
      margin-right: 20px;
      font-weight: 400;
      &.on {
        color: #002bd2;
      }
    }
  }
`;

export const ProductsWrap = styled.div`
  .subMenu {
    padding: 10px 0;
    padding-left: 250px;
    border-bottom: 2px solid #dcdcdc;
    display: flex;
    justify-content: start;
    align-items: center;
    li {
      padding: 15px 20px;
      color: #828282;
      font-weight: 400;
      margin-right: 10px;
      &.on {
        border: 1px solid #002bd2;
        color: #002bd2;
      }
      &:first-child {
        font-weight: 500;
        font-size: 16px;
      }
    }
  }
  div {
    text-align: center;
    img {
      padding: 30px 0 50px;
      width: 1000px;
      height: 538px;
    }
  }
`;

export const ListUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
  .blank {
    width: 355px;
    height: 355px;
    box-sizing: border-box;
    border: 1px solid #d1d1d1;
    background-position: 0 0;
    background-image: url("https://cdn.sidiz.com/img/bg/grey.png");
  }
`;

export const ItemLi = styled.li`
  width: 355px;
  height: 355px;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #d1d1d1;
  &:hover {
    .detail {
      opacity: 1;
    }
  }
  span {
    position: absolute;
    left: 10px;
    top: 10px;
    img {
      width: 45px;
      height: 23px;
      padding: 0;
    }
  }
  strong {
    padding: 40px 10px 0;
    display: block;
    font-size: 14px;
    text-align: right;
    color: #807f83;
    font-weight: 500;
  }
  .price {
    text-align: right;
    padding: 0 10px;
    font-weight: 700;
  }
  .thum {
    img {
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -50%);
      width: 280px;
      height: 280px;
      z-index: -1;
    }
  }

  .detail {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.2);
    button {
      width: 120px;
      height: 40px;
      margin-left: 20px;
      color: #fff;
      border-radius: 3px;
      font-size: 12px;
      font-weight: 700;
      background-color: #002bd2;
      cursor: pointer;
      &.cart {
        background-color: #807f83;
        margin-left: 0;
      }
    }
  }
`;

export const DetailWrap = styled.div`
  .subMenu {
    padding: 10px 0;
    padding-left: 250px;
    border-bottom: 2px solid #dcdcdc;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 30px;
    li {
      padding: 15px 25px;
      margin-right: 10px;
      font-weight: 400;
      color: #828282;
      &.on {
        margin-right: 0;
        border: 1px solid #002bd2;
        color: #002bd2;
      }
      &:first-child {
        font-weight: 500;
      }
    }
  }
  .products {
    background-image: url("https://cdn.sidiz.com/img/product/bg_product.jpg");
    background-repeat: no-repeat;
    background-position: 0 0;
    display: flex;
    justify-content: center;
    .bigImg {
      margin-right: 30px;
      img {
        width: 580px;
        height: 580px;
        box-sizing: border-box;
      }
    }
    .desc {
      padding: 50px 0;
      h3 {
        font-size: 25px;
        font-weight: 700;
        color: #807f83;
      }
      span {
        display: block;
        font-size: 15px;
        color: #999;
      }
      strong {
        font-size: 25px;
        font-weight: 500;
        color: #807f83;
      }
      .color {
        font-size: 13px;
        margin-top: 20px;
      }
      .colors {
        display: flex;
        li {
          width: 44px;
          height: 44px;
          box-sizing: border-box;
          margin-right: 10px;
        }
        .blank {
          border: 1px solid #999;
          width: 44px;
          height: 44px;
          box-sizing: border-box;
          background-image: url("https://cdn.sidiz.com/img/bg/grey.png");
        }
      }
      .name {
        margin-top: 10px;
        text-align: center;
        width: 315px;
        font-size: 16px;
        line-height: 25px;
        height: 25px;
        background: #fff;
      }

      em {
        display: block;
        font-size: 13px;
        margin-top: 100px;
      }
      .count {
        border-bottom: 1px solid #000;
        width: 150px;
        display: flex;
        justify-content: space-between;
        span {
          font-size: 18px;
          font-weight: 700;
          color: #000;
        }
      }
      .btn {
        margin-top: 20px;
        button {
          width: 174px;
          height: 60px;
          background-color: #002bd2;
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          margin-right: 20px;
          &:last-child {
            margin-right: 0;
            background-color: #807f83;
          }
        }
      }
    }
  }
  .thum {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    li {
      margin-right: 15px;
      cursor: pointer;
      img {
        width: 101px;
        height: 101px;
        box-sizing: border-box;
      }
      &.on {
        outline: 1px solid #002bd2;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
