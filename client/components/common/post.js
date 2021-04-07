import React from 'react'
import { useSelector } from 'react-redux'

const Post = (props) => {
  const { title: propsTitle, body: propsBody } = props
  const { title, body } = useSelector(({ postsReducer }) => postsReducer.post)
  return (
    <div className="flex flex-col border-2 border-black">
      <div>{propsTitle || title}</div>
      <div>{propsBody || body}</div>
    </div>
  )
}

export default Post
