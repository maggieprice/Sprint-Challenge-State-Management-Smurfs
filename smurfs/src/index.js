import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { smurfReducer } from './reducers/reducer';
import App from "./components/App";

const store = createStore(smurfReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
