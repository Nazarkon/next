import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from './MovieCard';
import { BrowserRouter } from 'react-router-dom';

describe('MovieCard component', () => {
  const mockData = {
    image: 'Bitmap.png',
    name: 'Pulp Fiction',
    year: '2003',
    genreList: ['Action', 'Adventure']
  };

  it('matches snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <MovieCard
          id={123}
          imageUrl={mockData.image}
          name={mockData.name}
          year={mockData.year}
          genreList={mockData.genreList}
        />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it('Check that component renders movie information correctly', () => {
    const { getByAltText, getByText } = render(
      <BrowserRouter>
        <MovieCard
          id={123}
          imageUrl={mockData.image}
          name={mockData.name}
          year={mockData.year}
          genreList={mockData.genreList}
        />
      </BrowserRouter>
    );

    expect(getByAltText('film poster')).toHaveAttribute('src', 'Bitmap.png');

    expect(getByText('Pulp Fiction')).toBeInTheDocument();

    expect(getByText('2003')).toBeInTheDocument();

    expect(getByText('Action&Adventure')).toBeInTheDocument();
  });
});
