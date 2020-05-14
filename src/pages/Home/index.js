import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import {
  WholeMain,
  Container,
  MainBackground,
  Trending,
  Promotion,
  ProductList,
} from './styles';

import api from '../../services/api';

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  function handleAdd(id) {
    dispatch(CartActions.addToCartRequest(id));
  }
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
        <p>SEE WHAT&apos;S TRENDING</p>
        <ProductList>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>${product.price.replace('.', ',')}</span>
              <button type="button" onClick={() => handleAdd(product.id)}>
                <div>
                  <MdAddShoppingCart size={16} />
                  {amount[product.id] || 0}
                </div>
                <span>ADD TO CART</span>
              </button>
            </li>
          ))}
        </ProductList>
        <Link to="/">SEE MORE</Link>
      </Trending>
      <Promotion>
        <p>Join us, get 15% off your first purchase</p>
        <p className="sub">Plus, member exclusives are around the corner</p>
      </Promotion>
    </WholeMain>
  );
}

export default Home;
