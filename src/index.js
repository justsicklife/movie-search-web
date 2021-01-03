import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules/index.js";
import ReduxThunk from "redux-thunk";

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();