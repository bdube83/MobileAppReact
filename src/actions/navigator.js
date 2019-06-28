import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation,
);
const addListener = createReduxBoundAddListener("root");

import Home from '../components/Home';
import ScreenA from '../components/ScreenA';
import ScreenB from '../components/ScreenB';

export const Navigator = new StackNavigator({
    Home: { screen: Home },
    ScreenA: { screen: ScreenA },
    ScreenB: { screen: ScreenB }
}, {
        initialRouteName: 'Home'
    });

class Nav extends Component {
  render() {

      return (
          <Navigator navigation={addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.navigation,
              addListener
          })} />
      );
  }
}

const mapStateToProps = state => ({
    navigation: state.navigation
});

export default connect(mapStateToProps)(Nav);
