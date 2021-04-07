import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { getPosts } from '../redux/reducers/postsReducer'

const Post = (props) => {
  const { title, body } = props
  return (
    <div className="flex flex-col border-2 border-black">
      <div>{title} title</div>
      <div>{body} body</div>
    </div>
  )
}

export default Post
