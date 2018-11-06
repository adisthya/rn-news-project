
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from 'react-redux';
import { Button, List } from "react-native-elements";
import styles from "../../assets/styles";

import { fetchingSources, fetchSourcesDone, fetchSourcesFail, recheck } from "../../services/redux/actions";
import Loading from '../../shared/components/Loading';
import ErrorView from '../../shared/components/ErrorView';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: styles.headerStyle,
    headerTintColor: '#ffffff'
  };

  constructor(props) {
    super(props);
  }

  renderItem(item, index) {
    return (
      <View style={styles.rows}>
        <Button title={item.name} borderRadius={3} containerViewStyle={styles.buttonContainerView} buttonStyle={styles.button} large raised />
      </View>
    )
  }

  renderSources() {
    const {sources} = this.props;
    return (
      <View style={styles.body}>
        <List>
          <FlatList
            data={sources}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `${index}-${item.id}`}
          />
        </List>
      </View>
    )
  }

  renderLoading() {
    const {fetchingSources, recheck, loading} = this.props;
    fetchingSources();
    setTimeout(recheck, 3000);

    return ( <Loading animating={loading} /> );
  }

  renderError() {
    return ( <ErrorView /> );
  }

  render() {
    const { sources, loading, done} = this.props;

    console.log('sources', sources);
    // if (done === true && (Array.isArray(sources) && sources.length > 0)) {
    //   return this.renderSources();
    // } else if (loading === false && failed === true) {
    //   return this.renderError();
    // } else {
    //   return this.renderLoading();
    // }

    return (
      ( (!sources || !loading) ? this.renderLoading() : ( done ? this.renderSources() : this.renderError() ) )
    );
  }
}

const mapStateToProps = (state) => ({
  source: state.source,
  sources: state.sources,
  loading: state.loading,
  done: state.done
});

const mapDispatchToProps = {
  fetchingSources, fetchSourcesDone, fetchSourcesFail, recheck
};

// console.log(mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps) (Home);
