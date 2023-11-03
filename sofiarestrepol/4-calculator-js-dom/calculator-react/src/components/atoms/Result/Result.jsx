import PropTypes from 'prop-types';
import React from 'react';

const Result = ({ text }) => {
  return <span>{text}</span>;
};

Result.defaultProps = {
  text: '0',
};

Result.propTypes = {
  text: PropTypes.string,
};

export default Result;