import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddButton from './addbutton'
import SaveButton from '../postComponents/savebutton'

const PostForm = () => {
  const { isEditing, post } = useSelector(({ postsReducer }) => postsReducer)
  const [title, setTitle] = useState(isEditing ? post.title : '')
  const [body, setBody] = useState(isEditing ? post.body : '')
  return (
    <div className="flex flex-col border border-black p-2">
      <input type="text" placeholder="Post title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Post body" value={body} onChange={(e) => setBody(e.target.value)} />
      {!isEditing && <AddButton title={title} body={body} setTitle={setTitle} setBody={setBody} />}
      {isEditing && <SaveButton postId={post.id} title={title} body={body} />}
    </div>
  )
}

export default PostForm
