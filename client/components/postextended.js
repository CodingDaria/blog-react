import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSinglePost } from '../redux/reducers/postsReducer'
import Post from './common/post'
import PostForm from './common/postform'
import Comments from './elements/comments'
import EditButton from './buttons/editbutton'
import DeleteButton from './buttons/deletebutton'

const PostExtended = () => {
  const { postId } = useParams()
  const { isEditing } = useSelector(({ postsReducer }) => postsReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSinglePost(postId))
  }, [isEditing, postId])
  return (
    <div className="flex flex-col border-2 border-black">
      {!isEditing && <Post />}
      {isEditing && <PostForm />}
      <EditButton />
      <DeleteButton postId={postId} />
      <Comments />
    </div>
  )
}

export default PostExtended
