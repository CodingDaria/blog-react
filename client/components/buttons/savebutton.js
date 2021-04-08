import React from 'react'
import { useDispatch } from 'react-redux'
import { editPost } from '../../redux/reducers/postsReducer'

const SaveButton = (props) => {
  const { postId, title, body } = props
  const dispatch = useDispatch()
  return (
    <button
      type="button"
      className="hover:bg-gray-100 h-8 w-8 rounded m-2"
      onClick={() => {
        dispatch(editPost(postId, title, body))
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <title>Save</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
        />
      </svg>
    </button>
  )
}

export default SaveButton
