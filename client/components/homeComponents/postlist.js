import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../redux/reducers/postsReducer'
import Post from '../post'
import PostForm from './postform'
import DeleteButton from '../deletebutton'

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
          return (
            <div className="flex" key={post.id}>
              <Post title={post.title} body={post.body} />
              <Link to={`/${post.id}`} className="bg-blue-300 hover:bg-blue-400 p-2 rounded-sm">
                Show
              </Link>
              <DeleteButton postId={post.id} />
            </div>
          )
        })}
      </div>
      <PostForm />
    </div>
  )
}

export default PostList
