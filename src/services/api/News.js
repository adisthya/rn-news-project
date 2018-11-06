import api from "../../shared/constants/api";

const fetchSources = async (payload) => {
  try {
    let url = `${api.url}${api.endpoints.sources}?apiKey=${api.key}`;

    if (payload.hasOwnProperty('language')) url = `${url}&language=${payload.language}`;
    if (payload.hasOwnProperty('country')) url = `${url}&country=${payload.country}`;

    let response = await fetch(url);
    return response.json();
  } catch (exception) {
    console.log(exception);
    return [];
  }
}

const fetchNews = async (payload) => {
  try {
    let url = `${api.url}${api.endpoints.everything}?apiKey=${api.key}`;

    if (payload.hasOwnProperty('term')) url = `${url}&q=${payload.term}`;
    if (payload.hasOwnProperty('source')) url = `${url}&sources=${payload.source}`;
    if (payload.hasOwnProperty('pageSize')) url = `${url}&pageSize=${payload.pageSize}`;

    let response = await fetch(url);
    return response.json();
  } catch (exception) {
    console.log(exception);
    return [];
  }
}

export default News = {
  fetchSources,
  fetchNews
};
