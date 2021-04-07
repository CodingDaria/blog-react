import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addComment } from '../../redux/reducers/postsReducer'

const AddCommentButton = (props) => {
  const { commentBody, setCommentBody } = props
  const { id } = useSelector(({ postsReducer }) => postsReducer.post)
  const dispatch = useDispatch()
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(addComment(id, commentBody))
        setCommentBody('')
      }}
    >
      Add
    </button>
  )
}

export default AddCommentButton
