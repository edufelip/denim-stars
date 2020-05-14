import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { addToCartSuccess, updateAmount } from './actions';

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
    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
    };
    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('ADD_TO_CART_REQUEST', addToCart)]);
