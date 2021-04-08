import React from 'react'
import { useSelector } from 'react-redux'

const Post = (props) => {
  const { title: propsTitle, body: propsBody } = props
  const { title, body } = useSelector(({ postsReducer }) => postsReducer.post)
  return (
    <div className="flex flex-col p-1">
      <div className="font-bold text-2xl mb-2">{propsTitle || title}</div>
      <div className="text-xl">{propsBody || body}</div>
    </div>
  )
}

export default Post
