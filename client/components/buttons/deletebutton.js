import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/reducers/postsReducer'
import { history } from '../../redux'

const DeleteButton = (props) => {
  const { postId } = props
  const dispatch = useDispatch()
  return (
    <button
      type="button"
      className="flex-shrink-0 h-8 w-8 hover:bg-red-100 m-2"
      onClick={() => {
        dispatch(deletePost(postId))
        history.push('/')
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <title>Delete</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  )
}

export default DeleteButton
