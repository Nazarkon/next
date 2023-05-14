'use client'
import React from 'react';
import PropTypes from 'prop-types';

import './SelectFilter.scss';

const SelectFilter = ({ filterOptions, currentSelectedType, onChange }) => {
  return (
    <label className="select-label">
      <span className="select-label-text">SORT BY:</span>
      <select
        className="select-component"
        value={currentSelectedType}
        onChange={(e) => onChange(e.target.value)}
      >
        {filterOptions.map((option) => (
          <option key={option.id} className="select-option" value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

SelectFilter.propTypes = {
  filterOptions: PropTypes.array.isRequired,
  currentSelectedType: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default SelectFilter;
