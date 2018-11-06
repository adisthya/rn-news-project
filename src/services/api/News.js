import api from "../../shared/constants/api";

const fetchSources = async (payload) => {
  try {
    let url = `${api.url}${api.endpoints.sources}?apiKey=${api.key}`;

    if (payload.hasOwnProperty('language')) url = `${url}&language=${payload.language}`;
    if (payload.hasOwnProperty('country')) url = `${url}&country=${payload.country}`;

    console.log('URL: ', url);
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
    if (payload.hasOwnProperty('sources')) url = `${url}&sources=${payload.sources}`;
    if (payload.hasOwnProperty('pageSize')) url = `${url}&pageSize=${payload.pageSize}`;

    console.log(payload)
    console.log(url);
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
