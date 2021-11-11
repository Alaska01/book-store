import React from 'react';
import PropTypes from 'prop-types';

const CATEGORIES = [
  'Electronics',
  'Machine Learning',
  'Control Systems',
  'Artificial Intelligence',
  'Coding',
  'Internet of Things',
  'Bootcamp',
  'Deep Learning',
  'Robotics',
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
    <select onChange={handleFilterChange} name="filter" className="count">
      <option value="All">All</option>
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
