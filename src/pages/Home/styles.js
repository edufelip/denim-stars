import styled from 'styled-components';
import { darken, lighten } from 'polished';

import BackgroundImage from '~/assets/images/Main-Bg.svg';
import SelectArrowImg from '~/assets/images/ico-seta-appearance.gif';

export const WholeMain = styled.div``;

export const Container = styled.div`
  height: 80vh;
  width: 100%;
  min-height: 500px;
  margin: 0 auto;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const MainBackground = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p,
  h1 {
    color: #ffffff;
    font-size: 78px;
    font-family: 'Roboto Condensed', sans serif;
    letter-spacing: 10px;
    display: block;
    width: auto;
    margin: 0 auto;
  }
  .p-one {
    margin: -20px 150px 0 0;
  }
  .p-two {
    margin: -30px 0 0 150px;
  }
  > a {
    width: 300px;
    height: 60px;
    background-color: #d2d2d2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #2e2e2e;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 3px;
    margin: 40px 0 0 0;
    transition: background 0.3s ease;
    &:hover {
      background: ${darken(0.06, '#d2d2d2')};
    }
  }
`;

export const Trending = styled.div`
  p {
    font-size: 22px;
    letter-spacing: 2px;
    display: block;
    width: fit-content;
    margin: 30px auto 0;
    border-bottom: 1px solid #00000020;
    padding: 4px 35px;
  }
  a {
    display: flex;
    width: 200px;
    height: 45px;
    background-color: #24375b;
    margin: 40px auto 0;
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 90%;
  margin: 20px auto 0;
  grid-gap: 20px;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 1px 1px 12px 1px #00000035;
    img {
      align-self: center;
      height: 240px;
    }
    .container {
      width: 100%;
      height: 80px;
      > strong {
        display: block;
        width: 100%px;
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin: 5px 0 0 0;
      }
      > span {
        width: 100%;
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 10px 0;
      }
    }
    button {
      background: #7c9ed9;
      color: white;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.3s ease;
      &:hover {
        background: ${darken(0.05, '#7c9ed9')};
      }
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin: 0 5px 0 0;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
    label {
      margin-top: auto;
      color: ${lighten(0.35, '#000')};
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url(${SelectArrowImg}) no-repeat #eeeeee;
        background-position: 158px center;
        width: 190px;
        height: 30px;
        border: 1px solid #ddd;
        margin: 2px 0 10px 0;
        padding-left: 5px;
        color: ${lighten(0.25, '#000')};
      }
      span {
      }
    }
  }
`;

export const Status = styled.span`
  width: fit-content;
  display: ${(props) => (props.stock ? 'none' : 'inline-block')};
  color: ${darken(0.16, 'red')};
`;

export const Promotion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin: 40px auto;
  background-color: #d48276;
  padding: 20px 0;
  p {
    font-size: 26px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .sub {
    font-size: 14px;
    font-weight: 400;
  }
`;
