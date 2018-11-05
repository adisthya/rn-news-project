/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import { Provider } from 'react-redux';
import NavStack from "./src/modules/NavStack";
// import store from './src/redux/storage';

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <NavStack />
      // </Provider>
    );
  }
}
