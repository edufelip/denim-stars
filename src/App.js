// import React, { Component } from 'react';
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

import store from './store/index';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
        <ToastContainer autoClose={2000} />
      </Router>
    </Provider>
  );
}

export default App;
