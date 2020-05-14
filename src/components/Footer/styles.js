import styled from 'styled-components';

export const Container = styled.div`
  height: 220px;
  background-color: #c7c7c7;
  display: flex;
`;
export const Navigation = styled.div`
  flex: 1;
  div {
    width: 150px;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 30px 0 0;
    justify-content: start;
    p {
      span {
        font-weight: bold;
        font-size: 18px;
      }
    }
    a {
      text-decoration: none;
      margin-top: 15px;
    }
  }
  .help-nav {
    margin-left: 100px;
  }
  .shop-nav {
    float: right;
    margin-right: 50px;
  }
`;

export const Social = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 300px;
  height: 100%;
  margin: 0 auto;
  p {
    margin: 30px 0 0 0;
    font-weight: 500;
    font-size: 22px;
  }
  img {
    width: 130px;
  }
  .agroup {
    margin: 5px 0 30px 20px;
    * {
      margin: 0 10px 0 0;
    }
  }
`;
