import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { getPosts } from '../redux/reducers/postsReducer'

const Comments = (props) => {
  const { comments } = props
  return (
    <div>
      {comments && comments.map((comment) => {
        return (
          <div key={comment.id} className="border-2 border-black">
            {comment.body}
          </div>
        )
      })}{' '}
      comments
    </div>
  )
}

export default Comments
