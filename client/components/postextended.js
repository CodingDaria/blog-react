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
    <div className="flex flex-col items-center w-full">
      <div className="flex w-2/3 justify-between p-1 rounded overflow-hidden shadow-lg">
        <div className="w-full mt-2">
          {!isEditing && <Post />}
          {isEditing && <PostForm />}
        </div>
        <div className="flex flex-col mt-2">
          {!isEditing && <DeleteButton postId={postId} />}
          <EditButton />
        </div>
      </div>
      <Comments />
    </div>
  )
}

export default PostExtended
