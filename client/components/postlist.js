import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../redux/reducers/postsReducer'
import PostItem from './elements/postitem'
import PostForm from './common/postform'

const PostList = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(({ postsReducer }) => postsReducer)
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-blue-100">
      <div className="flex flex-col items-center w-full">
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />
        })}
      </div>
      <PostForm />
    </div>
  )
}

export default PostList
