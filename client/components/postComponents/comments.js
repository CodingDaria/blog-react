import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { getPosts } from '../redux/reducers/postsReducer'
import AddCommentButton from './addcommentbutton'

const Comments = () => {
  const comments = useSelector(({ postsReducer }) => postsReducer.comments)
  const [commentBody, setCommentBody] = useState('')
  return (
    <div>
      <div>Comments:</div>
      {
        // prettier-ignore
        comments.length && comments.map((comment) => {
          return (
            <div key={comment.id} className="border-2 border-black">
              {comment.body}
            </div>
          )
        })
      }
      <input
        type="text"
        placeholder="Enter comment"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      />
      <AddCommentButton commentBody={commentBody} setCommentBody={setCommentBody} />
    </div>
  )
}

export default Comments
