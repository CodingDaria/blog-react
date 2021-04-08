import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../common/post'
import DeleteButton from '../buttons/deletebutton'

const PostItem = (props) => {
  const { post } = props
  return (
    <div className="flex w-full justify-between p-1 my-1 rounded overflow-hidden shadow-lg hover:bg-gray-100">
      <Link to={`/${post.id}`} className="w-full text-base">
        <Post title={post.title} body={post.body} />
      </Link>
      <DeleteButton postId={post.id} />
    </div>
  )
}

export default PostItem
