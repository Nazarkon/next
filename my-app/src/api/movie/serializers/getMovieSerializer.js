export default (sortType, genre, searchString) => {
  const params = {};

  if (sortType) {
    params.sortBy = sortType;
    params.sortOrder = 'desc';
  }

  if (genre && genre !== 'all') {
    params.filter = genre;
  }

  if (searchString) {
    params.searchBy = 'title';
    params.search = searchString;
  }

  return params;
};
