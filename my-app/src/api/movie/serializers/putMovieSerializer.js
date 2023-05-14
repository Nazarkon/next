export default (payload) => {
  const capitalizeLetter = (word) => {
    const result = word.charAt(0).toUpperCase() + word.slice(1);
    return [result];
  };

  const data = {
    id: payload.id,
    title: payload.title,
    tagline: 'some tag',
    vote_average: payload.movieRating,
    vote_count: 0,
    release_date: payload.releaseDate,
    poster_path: payload.movieURL,
    overview: payload.overview,
    budget: 30000000,
    revenue: 445435700,
    runtime: payload.runtime,
    genres: capitalizeLetter(payload.genre)
  };
  return data;
};
