import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import GenreList from './GenreList';
import genreList from '../../mock/genreData.json';

describe('Check GenreList element behavior', () => {
  it('Matches snapshot', () => {
    const { container } = render(<GenreList genreList={genreList} currentItem={genreList[0]} />);
    expect(container).toMatchSnapshot();
  });
  test('Check that component renders all genres passed in props', () => {
    const { getByText } = render(<GenreList genreList={genreList} currentItem={genreList[0]} />);

    expect(getByText('All')).toBeInTheDocument();

    expect(getByText('Fantasy')).toBeInTheDocument();

    expect(getByText('Adventure')).toBeInTheDocument();

    expect(getByText('Romance')).toBeInTheDocument();

    expect(getByText('Science Fiction')).toBeInTheDocument();
  });

  test('Check that component highlights a selected genre passed in props', () => {
    const selectedGenre = genreList[0];
    render(<GenreList genreList={genreList} currentItem={selectedGenre} />);

    const capitalizeLetter = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const selectedGenreElement = screen.getByText(capitalizeLetter(selectedGenre.name));

    expect(selectedGenreElement).toHaveClass('item-light');
  });

  test('Check that after a click event on a genre button component calls onChange callback and passes correct genre in arguments', () => {
    const selectedGenre = genreList[0];
    const onClick = jest.fn();
    render(<GenreList genreList={genreList} currentItem={selectedGenre} updateList={onClick} />);

    const genreElement = screen.getByText('Romance');

    userEvent.click(genreElement);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith({
      id: 'romance',
      is_active: false,
      name: 'romance'
    });
  });
});
