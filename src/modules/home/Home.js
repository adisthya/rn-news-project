
import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from 'react-redux';
import { Button, List } from "react-native-elements";
import styles from "../../assets/styles";

import { fetchingSources, fetchSourcesDone, fetchSourcesFail } from "../../services/redux/actions";
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



  renderItem = ({item, index}) => {
    return (
      <View style={styles.rows}>
        <Button title={item.name} onPress={() => { this.props.navigation.navigate('NewsList', item)}} borderRadius={3} containerViewStyle={styles.buttonContainerView} buttonStyle={styles.button} large raised />
      </View>
    )
  }

  renderSources = () => {
    const {sources} = this.props;
    return (
      <List style={styles.body}>
        <FlatList
          data={sources}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `${index}-${item.id}` }
        />
      </List>
    )
  }

  renderLoading = () => {
    const {loading} = this.props;

    return ( <Loading animating={loading} /> );
  }

  renderError = () => {
    return ( <ErrorView /> );
  }

  componentDidMount() {
    const { fetchingSources } = this.props;
    fetchingSources();
  }

  render() {
    const {loading, done} = this.props;

    return (
      ( (loading ? this.renderLoading() : ( done ? this.renderSources() : this.renderError() ) ) )
    );
  }
}

const mapStateToProps = (state) => ({
  country: state.sourceReducers.country,
  sources: state.sourceReducers.sources,
  loading: state.sourceReducers.loading,
  done: state.sourceReducers.done
});

const mapDispatchToProps = {
  fetchingSources, fetchSourcesDone, fetchSourcesFail
};

// console.log(mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps) (Home);
