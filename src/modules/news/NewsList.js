
import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from 'react-redux';
import { Button, List } from "react-native-elements";
import styles from "../../assets/styles";

import { fetchingNews, fetchNewsDone, fetchNewsFail } from "../../services/redux/actions";
import Loading from '../../shared/components/Loading';
import ErrorView from '../../shared/components/ErrorView';

class NewsList extends Component {
  static navigationOptions = {
    title: 'News List',
    headerStyle: styles.headerStyle,
    headerTintColor: '#ffffff'
  };

  constructor(props) {
    super(props);
  }

  renderItem = ({item, index}) => {
    return (
      <View style={styles.rows}>
        <Button title={item.title} borderRadius={3} containerViewStyle={styles.buttonContainerView} buttonStyle={styles.button} large raised></Button>
      </View>
    )
  }

  rendernews = () => {
    const {news} = this.props;
    return (
      <View style={styles.body}>
        <List>
          <FlatList
            data={news}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => `${index}-${item.id}` }
          />
        </List>
      </View>
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
    const { fetchingNews, navigation, pageSize } = this.props;
    const id = navigation.getParam('id');
    fetchingNews(id, pageSize);
  }

  render() {
    const { loading, done} = this.props;

    return (
      ( (loading ? this.renderLoading() : ( done ? this.rendernews() : this.renderError() ) ) )
    );
  }
}

const mapStateToProps = (state) => ({
  source: state.newsReducers.source,
  news: state.newsReducers.news,
  loading: state.newsReducers.loading,
  done: state.newsReducers.done
});

const mapDispatchToProps = {
  fetchingNews, fetchNewsDone, fetchNewsFail
};

// console.log(mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps) (NewsList);
