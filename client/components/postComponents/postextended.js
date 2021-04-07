import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSinglePost } from '../../redux/reducers/postsReducer'
import Post from '../post'
import PostForm from '../homeComponents/postform'
import Comments from './comments'
import EditButton from './editbutton'
import DeleteButton from '../deletebutton'

const PostExtended = () => {
  const { postId } = useParams()
  // const [isEditing, setEditing] = useState(false)
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
