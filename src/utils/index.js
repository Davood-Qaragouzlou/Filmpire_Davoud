/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */

import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

// * this fn makes a get req to create auth token. we get the token, if its seccessful
// * we set it to localStorage and redirect to auth page
export const fetchToken = async () => {
  try {
    // * first we need to create a request token
    const { data } = await moviesApi.get('/authentication/token/new');
    const token = data.request_token;
    if (data.success) {
      // *now we have to redirect and create a session id
      localStorage.setItem('request_token', token);
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    console.log('Sorry, your token could not be created.');
  }
};

export const createSessionId = async () => {
  const token = localStorage.getItem('request_token');
  if (token) {
    try {
      const { data: { session_id } } = await moviesApi.post('authentication/session/new', {
        request_token: token,
      });
      localStorage.setItem('session_id', session_id);
      return session_id;
    } catch (error) {
      console.log(error);
    }
  }
};
