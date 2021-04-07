import React from 'react'
import { useSelector } from 'react-redux'

const Error = () => {
  const { error } = useSelector(({ postsReducer }) => postsReducer)
  console.log(error)
  return (
    <div>
      Error!
      {JSON.stringify(error)}
    </div>
  )
}

export default Error
