import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../redux/reducers/postsReducer'
import Post from './post'
import NewPost from './newpost'

const Home = () => {
  const dispatch = useDispatch()
  const posts = useSelector(({ postsReducer }) => postsReducer.posts)
  useEffect(() => {
    dispatch(getPosts())
  }, [posts])
  return (
    <div className="flex flex-col items-center h-screen w-screen bg-blue-100">
      <div className="flex flex-col items-center w-full">
        {posts.map((post) => {
          return <Post key={post.id} title={post.title} body={post.body} />
        })}
      </div>
      <NewPost />
    </div>
  )
}

export default Home
