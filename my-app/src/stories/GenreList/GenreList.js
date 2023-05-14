'use client'
import React from 'react';
import PropTypes from 'prop-types';
import './GenreList.scss';

const GenreList = (props) => {
  const { genreList, currentItem, updateList } = props;

  const capitalizeLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <ul className="list-container">
      {genreList.map((item) => (
        <li
          key={item.id}
          className={item.id === currentItem.id ? 'item-light' : ''}
          onClick={() => updateList(item)}
        >
          {capitalizeLetter(item.name)}
        </li>
      ))}
    </ul>
  );
};

GenreList.propTypes = {
  genreList: PropTypes.array.isRequired,
  currentItem: PropTypes.object.isRequired,
  updateList: PropTypes.func
};

export default GenreList;
