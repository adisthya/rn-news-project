import { call, put } from "redux-saga/effects";
import News from '../api/News';
import { FETCH_NEWS_DONE, FETCH_NEWS_FAILED, FETCH_SOURCES_FAILED, FETCH_SOURCES_DONE } from "../../shared/constants/actions";


export function* fetchSources(payload) {
  try {
    const response = yield call(News.fetchSources, payload);
    yield put({type: FETCH_SOURCES_DONE, response});
  } catch (exception) {
    yield put({type: FETCH_SOURCES_FAILED});
  }
}

export function* fetchNews(payload) {
  try {
    const response = yield call(News.fetchNews, payload);
    yield put({type: FETCH_NEWS_DONE, response});
  } catch (exception) {
    yield put({type: FETCH_NEWS_FAILED});
  }
}
