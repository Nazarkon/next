export default (apiData) => {
  const { poster_path, title, release_date, vote_average, runtime, overview, genres } = apiData;
  const movieObject = {
    imageUrl: poster_path,
    name: title,
    year: release_date,
    rating: vote_average,
    duration: runtime,
    description: overview,
    genreList: [genres[0].toLowerCase()]
  };

  return movieObject;
};
