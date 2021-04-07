import React from 'react'
import { useDispatch } from 'react-redux'
import { editPost } from '../../redux/reducers/postsReducer'

const SaveButton = (props) => {
  const { postId, title, body } = props
  const dispatch = useDispatch()
  return (
    <button
      type="button"
      className="bg-blue-300 hover:bg-blue-400 border rounded p-2"
      onClick={() => {
        dispatch(editPost(postId, title, body))
      }}
    >
      Save
    </button>
  )
}

export default SaveButton
