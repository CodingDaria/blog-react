import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSinglePost } from '../../redux/reducers/postsReducer'
import Post from '../post'
import Comments from './comments'

const PostExtended = () => {
  const { postId } = useParams()
  const post = useSelector(({ postsReducer }) => postsReducer.post)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSinglePost(postId))
  }, [post])
  return (
    <div className="flex flex-col border-2 border-black">
      <Post title={post.title} body={post.body} />
      <Comments comments={post.comments} />
    </div>
  )
}

export default PostExtended
