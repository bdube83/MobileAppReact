import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import navigation from './src/reducers/reducer'
import input from './src/reducers/inputReducer'

import Navigator, { middleware } from './src/actions/navigator'

const reducer = combineReducers({ navigation, input })
const store = createStore(reducer, applyMiddleware(logger, middleware))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
