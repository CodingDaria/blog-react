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
    <div className="flex flex-col items-center w-screen">
      <div className="flex flex-col items-center w-2/3">
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />
        })}
      </div>
      <div className="w-2/3 rounded overflow-hidden shadow-lg">
        <PostForm />
      </div>
    </div>
  )
}

export default PostList
