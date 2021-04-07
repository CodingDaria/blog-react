import React from 'react'

const Post = (props) => {
  const { title, body } = props
  return (
    <div className="flex flex-col border-2 border-black">
      <div>{title}</div>
      <div>{body}</div>
    </div>
  )
}

export default Post
