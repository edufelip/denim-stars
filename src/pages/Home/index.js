import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';

import * as CartActions from '~/store/modules/cart/actions';

import {
  WholeMain,
  Container,
  MainBackground,
  Trending,
  Promotion,
  ProductList,
  Status,
} from './styles';

import api from '~/services/api';

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState([]);
  const [stock, setStock] = useState([]);

  const amount = useSelector((state) =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products?_limit=4');
      setProducts(response.data);
    }
    async function loadStock() {
      const response = await api.get('stock?_limit=4');
      const productsAmount = response.data.reduce((amountSum, product) => {
        amountSum[response.data.indexOf(product)] = product.amount;
        return amountSum;
      }, []);
      setStock(productsAmount);
    }
    loadProducts();
    loadStock();
  }, []);

  function handleAdd(id) {
    if (size !== '') {
      dispatch(CartActions.addToCartRequest(id));
    }
  }

  const handleChange = useCallback(
    (newValue, index) => {
      const value = [...size];
      value[index] = newValue;
      setSize(value);
    },
    [size]
  );

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
              <div className="container">
                <strong>{product.title}</strong>
                <span>${product.price.replace('.', ',')}</span>
              </div>
              <label htmlFor="size">
                select the size{' '}
                <Status stock={stock[products.indexOf(product)]}>
                  : not available
                </Status>
                <select
                  name="size"
                  id="size"
                  value={size[products.indexOf(product)]}
                  onChange={(event) =>
                    handleChange(event.target.value, products.indexOf(product))
                  }
                >
                  <option value="" disabled selected hidden>
                    Select
                  </option>
                  <option value="x-small">X-Small</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="x-large">X-Large</option>
                  <option value="xx-large">XX-Large</option>
                </select>
              </label>
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
