import { combineReducers } from "redux";
import { FETCH_SOURCES, FETCH_SOURCES_DONE, FETCH_SOURCES_FAILED, FETCH_NEWS, FETCH_NEWS_DONE, FETCH_NEWS_FAILED } from "../../shared/constants/actions";

const initialState = {
  sources: [],
  news: [],
  loading: true,
  done: false,
  country: 'us',
  source: '',
  language: 'en',
  pageSize: 20
};

const sourceReducers = (currentState = initialState, action) => {
  // console.log('action: ', action);
  switch (action.type) {
    case FETCH_SOURCES:
      return {
        ...currentState,
        loading: true
      };
    case FETCH_SOURCES_DONE:
      const { sources } = action.response;
      return {
        ...currentState,
        loading: false,
        done: true,
        sources: sources
      };
    case FETCH_SOURCES_FAILED:
      return {
        ...currentState,
        loading: false,
        done: false,
        sources: []
      }
    default:
      return currentState;
  }
}

const newsReducers = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        ...currentState,
        loading: true
      };
    case FETCH_NEWS_DONE:
      const {articles} = action.response
      console.log(action.response);
      return {
        ...currentState,
        loading: false,
        done: true,
        news: articles
      };
    case FETCH_NEWS_FAILED:
      return {
        ...currentState,
        loading: false,
        done: false,
        news: []
      }
    default:
      return currentState;
  }
}

const reducers = combineReducers({
  sourceReducers,
  newsReducers
});

export default reducers;
