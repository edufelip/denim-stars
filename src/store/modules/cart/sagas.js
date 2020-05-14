import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );
  const stock = yield call(api.get, `/stock/${id}`);

  const stockQtt = stock.data.amount;
  const currentQtt = productExists ? productExists.amount : 0;
  const amount = currentQtt + 1;
  if (amount > stockQtt) {
    toast.error('Quantity out of stock');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
    };
    toast.success('Product added to cart');
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantity out of stock');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('ADD_TO_CART_REQUEST', addToCart),
  takeLatest('UPDATE_CART_AMOUNT_REQUEST', updateAmount),
]);
