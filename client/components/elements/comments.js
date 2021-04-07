import React from 'react'
import { useSelector } from 'react-redux'
import AddCommentForm from './addcommentform'
import Comment from './comment'

const Comments = () => {
  const comments = useSelector(({ postsReducer }) => postsReducer.comments)
  return (
    <div>
      <div>Comments:</div>
      {
        // prettier-ignore
        comments.length && comments.map((comment) => {
          return (
            <Comment key={comment.id} body={comment.body} />
          )
        })
      }
      <AddCommentForm />
    </div>
  )
}

export default Comments
