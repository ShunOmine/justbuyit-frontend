import React from 'react';
import ReactDOM from 'react-dom';
import Root from './lib/Root'
import './assets/stylesheets/index.css'
// import { createStore, applyMiddleware } from "redux"
// import { Provider } from "react-redux"
// import reducer from "./reducers/index"
// import thunk from "redux-thunk"
// import { composeWithDevTools } from "redux-devtools-extension"

// const enhancer = process.env.NODE_ENV === 'development' ?
//   composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
// const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
