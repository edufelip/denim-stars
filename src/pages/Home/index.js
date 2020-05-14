import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');
    this.setState({ products: response.data });
  }

  handleAdd = (product) => {
    const { addProduct } = this.props;
    addProduct(product);
  };

  render() {
    const { products } = this.state;
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
                <button type="button" onClick={() => this.handleAdd(product)}>
                  <div>
                    <MdAddShoppingCart size={16} />3
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
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(CartActions.addToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
