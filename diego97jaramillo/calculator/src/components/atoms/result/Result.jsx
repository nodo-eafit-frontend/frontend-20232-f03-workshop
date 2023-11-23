import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => {
  return (
    <span>{result}</span>
  )
}

Result.defaultProps = {
  result: "0"
};

Result.propTypes = {
  result: PropTypes.string
};

export default Result;
