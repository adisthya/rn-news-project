import { combineReducers } from "redux";
import { FETCH_SOURCES, FETCH_SOURCES_DONE, FETCH_SOURCES_FAILED, FETCH_NEWS, FETCH_NEWS_DONE, FETCH_NEWS_FAILED, RECHECK } from "../../shared/constants/actions";

const initialState = {
  sources: [],
  news: [],
  loading: false,
  done: false,
  country: 'us',
  source: '',
  language: 'en',
  pageSize: 50
};

const sourceReducers = (currentState = initialState, action) => {
  // console.log('action: ', action);
  switch (action.type) {
    case FETCH_SOURCES:
      console.log('fetching source...');
      return {
        ...currentState,
        loading: true
      };
    case FETCH_SOURCES_DONE:
      console.log('fetching source done..');
      const { sources } = action.response;
      console.log('sources:', sources.length);
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
    case RECHECK:
      console.log('RECHECK currentState: ', currentState);
      return currentState;
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
      return {
        ...currentState,
        loading: false,
        done: true,
        news: action.response
      };
    case FETCH_NEWS_FAILED:
      return {
        ...currentState,
        loading: false,
        done: false,
        news: []
      }
    case RECHECK:
      console.log('RECHECK currentState: ', currentState);
      return currentState;
    default:
      return currentState;
  }
}

const reducers = combineReducers({
  sourceReducers,
  newsReducers
});

export default reducers;
