import { FETCH_SOURCES, FETCH_SOURCES_DONE, FETCH_SOURCES_FAILED, FETCH_NEWS, FETCH_NEWS_DONE, FETCH_NEWS_FAILED, RECHECK } from "../../shared/constants/actions";

export const fetchingSources = () => {
  return { type: FETCH_SOURCES };
};

export const fetchSourcesDone = () => {
  return { type: FETCH_SOURCES_DONE };
};

export const fetchSourcesFail = () => {
  return { type: FETCH_SOURCES_FAILED };
};

export const fetchingNews = (id, pageSize) => {
  return { type: FETCH_NEWS, sources: id, pageSize: pageSize };
};

export const fetchNewsDone = () => {
  return { type: FETCH_NEWS_DONE };
};

export const fetchNewsFail = () => {
  return { type: FETCH_NEWS_FAILED };
};
