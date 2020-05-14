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

  handleAdd = (id) => {
    const { addProduct } = this.props;
    addProduct(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
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
                <button
                  type="button"
                  onClick={() => this.handleAdd(product.id)}
                >
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
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(CartActions.addToCartRequest(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
