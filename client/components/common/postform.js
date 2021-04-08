import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddButton from '../buttons/addbutton'
import SaveButton from '../buttons/savebutton'

const PostForm = () => {
  const { isEditing, post } = useSelector(({ postsReducer }) => postsReducer)
  const [title, setTitle] = useState(isEditing ? post.title : '')
  const [body, setBody] = useState(isEditing ? post.body : '')
  return (
    <div className="flex flex-col w-full mt-2 p-1">
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="shadow appearance-none box-border border border-gray-500 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <textarea
        type="text"
        placeholder="Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows="3"
        className="shadow appearance-none border border-gray-500 rounded w-full p-2 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {!isEditing && <AddButton title={title} body={body} setTitle={setTitle} setBody={setBody} />}
      {isEditing && <SaveButton postId={post.id} title={title} body={body} />}
    </div>
  )
}

export default PostForm
