
import React, { Component } from "react";
import { WebView } from "react-native";
import { connect } from 'react-redux';
import styles from "../../assets/styles";

import Loading from '../../shared/components/Loading';
import ErrorView from '../../shared/components/ErrorView';

class NewsDetail extends Component {
  static navigationOptions = {
    title: 'News Detail',
    headerStyle: styles.headerStyle,
    headerTintColor: '#ffffff'
  };

  constructor(props) {
    super(props);
  }

  renderLoading = () => {
    return ( <Loading animating={true} /> );
  }

  render() {
    const { navigation } = this.props;

    return (
      <WebView source={{uri: navigation.getParam('url')}} renderLoading={this.renderLoading} startInLoadingState />
    );
  }
}

export default NewsDetail;
