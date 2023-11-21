import React from 'react';
import PropTypes from "prop-types";


const Input = ({ type, readOnly, textGiven }) => {
  return (
    <input type={type} readOnly={readOnly} value={textGiven}></input>
  )
};

Input.defaultProps = {
  type: "text",
  readOnly: true,
  textGiven: ''
};

Input.propTypes = {
  type: PropTypes.string,
  readOnly: PropTypes.bool,
  textGiven: PropTypes.string
};


export default Input;
