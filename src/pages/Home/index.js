import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';

import {
  WholeMain,
  Container,
  MainBackground,
  Trending,
  Promotion,
  ProductList,
} from './styles';

export default function Home() {
  return (
    <WholeMain>
      <Container>
        <MainBackground>
          <h1 className="p-one">THE BEST JEANS</h1> <br />
          <p className="p-two">YOU FIND HERE</p>
          <Link to="/">FIND OUT MORE</Link>
        </MainBackground>
        <Trending />
      </Container>
      <Trending>
        <p>SEE WHAT'S TRENDING</p>
        <ProductList>
          <li>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51rzGqM1yEL.jpg"
              alt="jacket"
            />
            <strong>Denim Jacket</strong>
            <span>$89,90</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} />3
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
          <li>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51rzGqM1yEL.jpg"
              alt="jacket"
            />
            <strong>Denim Jacket</strong>
            <span>$89,90</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} />3
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
          <li>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51rzGqM1yEL.jpg"
              alt="jacket"
            />
            <strong>Denim Jacket</strong>
            <span>$89,90</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} />3
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
          <li>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51rzGqM1yEL.jpg"
              alt="jacket"
            />
            <strong>Denim Jacket</strong>
            <span>$89,90</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} />3
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
        </ProductList>
        <Link to="/">SEE MORE</Link>
      </Trending>
      <Promotion>
        <p>Join us, get 15% off our first purchase</p>
        <p className="sub">Plus, member exclusives are around the corner</p>
      </Promotion>
    </WholeMain>
  );
}
