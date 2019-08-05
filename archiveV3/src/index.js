import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import RootReducer from './reducers/RootReducer';

import Root from './Root';

const store = createStore(RootReducer);
//providing store object to Root component of application
ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);