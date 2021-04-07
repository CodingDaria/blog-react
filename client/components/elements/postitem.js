import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../common/post'
import DeleteButton from '../buttons/deletebutton'

const PostItem = (props) => {
  const { post } = props
  return (
    <div className="flex">
      <Post title={post.title} body={post.body} />
      <Link to={`/${post.id}`} className="bg-blue-300 hover:bg-blue-400 p-2 rounded-sm">
        Show
      </Link>
      <DeleteButton postId={post.id} />
    </div>
  )
}

export default PostItem
