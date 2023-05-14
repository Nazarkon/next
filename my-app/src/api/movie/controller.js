import axios from 'axios';

import getMovieSerializer from './serializers/getMovieSerializer';
import getMovieByIdSerializer from './serializers/getMovieByIdSerializer';
import postMovieSerializer from './serializers/postMovieSerializer';
import putMovieSerializer from './serializers/putMovieSerializer';
const client = axios.create({
  baseURL: 'http://localhost:4000/movies'
});

export const getMovieList = (payload, ourRequest) => {
  const params = getMovieSerializer(payload.sortBy, payload.genre, payload.searchString);
  return new Promise((resolve, reject) => {
    client
      .get('/', { params, cancelToken: ourRequest.token })
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getMovieListById = (id) => {
  return new Promise((resolve, reject) => {
    client
      .get(`/${id}`)
      .then((response) => {
        resolve(getMovieByIdSerializer(response.data));
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const addMovie = (payload, ourRequest) => {
  const data = postMovieSerializer(payload);
  return new Promise((resolve, reject) => {
    client
      .post('/', data, { cancelToken: ourRequest.token })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const editMovie = (payload, ourRequest) => {
  const data = putMovieSerializer(payload);
  return new Promise((resolve, reject) => {
    client
      .put(`/`, data, { cancelToken: ourRequest.token })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteMovie = (id) => {
  return new Promise((resolve, reject) => {
    client
      .delete(`/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
