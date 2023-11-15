import React from 'react'

const Result = ({readOnly, result}) => {
  return (
    <input value={result} readOnly={readOnly}></input>
  )
}

export default Result
