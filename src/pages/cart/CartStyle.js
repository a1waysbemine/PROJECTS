import styled from "styled-components";

export const CartWrap = styled.div`
  h2 {
    font-size: 30px;
    font-weight: 900;
    border-bottom: 1px solid #000;
    margin: 50px 0;
    padding-bottom: 10px;
  }
  table {
    width: 100%;
    margin-bottom: 50px;

    .name {
      width: auto;
    }
    .color {
      width: 150px;
    }
    .price,
    .totalPrice {
      width: 200px;
    }
    .count {
      width: 100px;
    }
    .del {
      width: 100px;
    }

    thead {
      background-color: #e7e7e7;
      th {
        height: 45px;
        line-height: 45px;
        color: #807f83;
      }
    }
    tbody {
      td {
        height: 120px;
        line-height: 120px;
      }
    }
    tfoot {
      background-color: #e7e7e7;
      th {
        height: 60px;
        line-height: 60px;
        color: #807f83;
      }
    }
    th,
    td {
      border: 1px solid #999;
      text-align: center;
    }
  }
  .cart-button {
    text-align: right;
    margin-bottom: 50px;
    button {
      font-size: 13px;
      font-weight: 700;
      background-color: #807f83;
      color: #fff;
      width: 155px;
      height: 36px;
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
        background-color: #002bd2;
      }
    }
  }
`;
export const CartMenuUl = styled.ul`
  padding: 10px 0;
  padding-left: 250px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  li {
    padding: 15px 25px;
    margin-right: 10px;
    color: #828282;
    font-weight: 400;
    &.on {
      border: 1px solid #002bd2;
      color: #002bd2;
    }
  }
`;

export const CartEmptyWrap = styled.tr`
  .empty {
    text-align: center;
  }
`;

export const CartListWrap = styled.tr`
  td {
    &:nth-child(1) {
      text-align: left;
      padding: 0 50px;
      img {
        width: 90px;
        height: 90px;
        vertical-align: middle;
        margin-right: 50px;
      }
    }

    input[type="number"] {
      width: 50px;
      text-align: center;
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: inner-spin-button;
        opacity: 1;
      }
    }
    button {
      width: 50px;
      height: 25px;
      background-color: #e6e6e6;
      border: 1px solid #000;
      border-radius: 3px;
    }
  }
`;
