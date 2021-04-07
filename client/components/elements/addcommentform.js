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
    <div>
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
      />
      <button type="button" onClick={click}>
        Add
      </button>
    </div>
  )
}

export default AddCommentForm
