import axios from 'axios';
const options = {
  method: 'GET',
  baseURL: 'https://youtube-v31.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};
const YoutubeClient = axios.create(options);

async function fetchYoutubeAPI(endpointURL, queryParams, abortSignal) {
  try {
    const { data } = await YoutubeClient({
      url: endpointURL,
      params: queryParams,
      signal: abortSignal,
    });
    if (data.error) {
      throw data.error.errors[0];
    }
    return data;
  } catch (e) {
    throw e;
  }
}
export { fetchYoutubeAPI };
