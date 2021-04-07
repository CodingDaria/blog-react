import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../redux/reducers/postsReducer'
import { history } from '../redux'

const DeleteButton = (props) => {
  const { postId } = props
  const dispatch = useDispatch()
  return (
    <button
      type="button"
      className="bg-blue-300 hover:bg-blue-400 border rounded p-2"
      onClick={() => {
        dispatch(deletePost(postId))
        history.push('/')
      }}
    >
      Delete
    </button>
  )
}

export default DeleteButton
