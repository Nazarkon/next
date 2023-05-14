import listOfGenres from '../mock/mockOfAllAvailableGenre.json';
export const createMovieItemsList = (movieItemsList) => {
  if (!movieItemsList || !movieItemsList.length) return '-';

  if (movieItemsList.length > 2) return movieItemsList.join(',');

  return movieItemsList.join('&');
};

export const isGenreExist = (searchString) => listOfGenres.includes(searchString.toLowerCase());
