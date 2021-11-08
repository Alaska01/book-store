import React from 'react';
import PropTypes from 'prop-types';

const CATEGORIES = [
  'All',
  'Electronics',
  'Machine Learning',
  'Control Systems',
  'Artificial Intelligence',
  'Coding',
  'Internet of Things',
  'Bootcamp',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

function CategoryFilter({ handleFilterChange }) {
  return (
    <select onChange={handleFilterChange} name="filter">
      {CATEGORIES.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
