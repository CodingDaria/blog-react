import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addComment } from '../../redux/reducers/postsReducer'

const AddCommentForm = () => {
  const [commentBody, setCommentBody] = useState('')
  const { id } = useSelector(({ postsReducer }) => postsReducer.post)
  const dispatch = useDispatch()
  const click = () => {
    dispatch(addComment(id, commentBody))
    setCommentBody('')
  }
  return (
    <div className="flex mt-2">
      <input
        type="text"
        placeholder="Enter comment"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            click()
          }
        }}
        className="shadow appearance-none border border-gray-500 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button type="button" onClick={click} className="hover:bg-gray-100 h-8 w-8 rounded m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <title>Comment</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
      </button>
    </div>
  )
}

export default AddCommentForm
