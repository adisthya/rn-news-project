
import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from 'react-redux';
import { Button, List, ListItem } from "react-native-elements";
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
      <ListItem
        roundAvatar
        avatar={{uri: item.urlToImage}}
        title={item.title}
        subtitle={item.description}
        onPress={() => this.props.navigation.navigate('NewsDetail', {url: item.url})}
        avatarStyle={styles.avatarStyle}
        titleNumberOfLines=2
        subtitleNumberOfLines=3
      />
    )
  }

  rendernews = () => {
    const {news} = this.props;
    return (
      <FlatList
        data={news}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => `${index}-${item.id}` }
      />
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
  language: state.newsReducers.language,
  source: state.newsReducers.source,
  pageSize: state.newsReducers.pageSize,
  news: state.newsReducers.news,
  loading: state.newsReducers.loading,
  done: state.newsReducers.done
});

const mapDispatchToProps = {
  fetchingNews, fetchNewsDone, fetchNewsFail
};

// console.log(mapStateToProps);
export default connect(mapStateToProps, mapDispatchToProps) (NewsList);
