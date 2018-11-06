import { takeLatest } from 'redux-saga/effects';
import * as NewsWorker from '../workers/NewsWorker';
import { FETCH_SOURCES, FETCH_NEWS } from "../../shared/constants/actions";

export default function* sagaActions() {
  yield [
    takeLatest(FETCH_SOURCES, NewsWorker.fetchSources),
    takeLatest(FETCH_NEWS, NewsWorker.fetchNews)
  ];
}
