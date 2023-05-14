import './page.scss';
import axios from 'axios';

import sortByOption from '../mock/sortByOption.json';
import genreListData from '../mock/genreData.json'

import { getMovieList } from '../api/movie/controller';
import GenreList from '@/stories/GenreList/GenreList';
import SelectFilter from '@/stories/SelectFilter/SelectFilter';
import MovieCard from '@/stories/MovieCard/MovieCard';
import Header from '@/stories/Header/Header'

const navigationList = [
  {
    id: '1',
    name: 'Edit',
    action: ''
  },
  {
    id: '2',
    name: 'Delete',
    action: ''
  }
];


async function getMovies(searchParams) {
  const ourRequest = axios.CancelToken.source();
  const res = await getMovieList(searchParams,ourRequest);
  return res;
}


export default async function Page({ params, searchParams }) {
  console.log(params, 'params')
  console.log(searchParams, 'searchParams')

  const searchUrlParams = {
    sortBy: searchParams.sortBy || sortByOption[0].value,
    genre: searchParams.genre ||'romance'
  }
 
  const data = await getMovies(searchUrlParams, 'getAll')
  return (
    <>
    <Header/>
    <div className="movie-page-container">
    <div
      className='movie-page-search-image-background'
    >
    </div>
    <div>
      <div className="movie-page-film-filter">
      <GenreList
          genreList={genreListData}
          currentItem={{ id: searchUrlParams.genre, name: searchUrlParams.genre  }}
          updateList={getMovies(searchUrlParams, 'getbyGenre')}
        />
       <SelectFilter
          filterOptions={sortByOption}
          currentSelectedType={searchUrlParams.sortBy}
        />
      </div>
      <div className="movie-page-film-counter">
        <strong>{data.length}</strong> movies found
      </div>
      <div className="movie-page-film-list">
        { data.map((movie) => 
        (
            <MovieCard
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              name={movie.title}
              year={movie.release_date}
              genreList={movie.genres}
              navigationList={navigationList}
            />
        )
        )}
      </div>
    </div>
  </div>
  </>
  )
}