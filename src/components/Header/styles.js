import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 200px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  display: block;
  position: relative;
  width: 70%;
  margin: 0 auto;
  a {
    img {
      display: block;
      width: 200px;
      margin: 30px auto 0 auto;
    }
  }
`;

export const NavBar = styled.div`
  display: flex;
  width: 60%;
  min-width: 660px;
  margin: 30px auto 0;
  justify-content: space-around;
  align-items: flex-end;
  a {
    text-decoration: none;
    color: #2e2e2e;
    font-weight: 500;
    transition: opacity 0.3s ease-out;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: black;
    }
    span {
      font-size: 12px;
      color: #989898;
    }
  }
`;

export const Profile = styled.div`
  width: 300px;
  height: 50px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  right: 0px;
  top: 10px;
  form {
    display: flex;
    align-items: center;
    margin: 0 10px 0 0;
    input {
      width: 200px;
      margin: 0 5px 0 0;
      background-color: transparent;
      border: 1px solid #00000030;
      border-radius: 5px;
      padding: 3px 6px;
      font-size: 13px;
      opacity: 0.6;
      transition: opacity 0.3s ease;
      &:focus {
        opacity: 1;
      }
    }
    button {
      margin: 5px 0 0 0;
      background-color: transparent;
      border: 0;
    }
  }
  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
