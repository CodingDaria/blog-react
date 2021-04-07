import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { getPosts } from '../redux/reducers/postsReducer'
import NewPostButton from './newpostbutton'

const NewPost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  return (
    <div className="flex flex-col border border-black p-2">
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <NewPostButton title={title} body={body} setTitle={setTitle} setBody={setBody} />
    </div>
  )
}

export default NewPost
