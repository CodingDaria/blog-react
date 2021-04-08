import React from 'react'
import { useSelector } from 'react-redux'

const Error = () => {
  const { error } = useSelector(({ postsReducer }) => postsReducer)
  return (
    <div>
      Error!
      {` ${error.message}`}
    </div>
  )
}

export default Error
