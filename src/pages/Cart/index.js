import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { CartBody, Container, ProductTable, Total } from './styles';

import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, removeProduct, updateAmount, total }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }
  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <CartBody>
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th aria-label="nothig" />
              <th>PRODUCT</th>
              <th>QTY</th>
              <th>SUBTOTAL</th>
              <th aria-label="nothing" />
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>${product.price}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline color="blue" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline color="blue" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>${product.subtotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => removeProduct(product.id)}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        <footer>
          <button type="button"> Finish Purchase </button>
          <Total>
            <span>TOTAL</span>
            <strong>${total}</strong>
          </Total>
        </footer>
      </Container>
    </CartBody>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.map((product) => ({
      ...product,
      subtotal: (parseFloat(product.price) * product.amount)
        .toFixed(2)
        .toString()
        .replace('.', ','),
    })),
    total: state.cart
      .reduce((total, product) => {
        return total + parseFloat(product.price) * product.amount;
      }, 0)
      .toFixed(2)
      .toString()
      .replace('.', ','),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (id) => {
      dispatch(CartActions.removeFromCart(id));
    },
    updateAmount: (id, amount) => {
      dispatch(CartActions.updateAmount(id, amount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
