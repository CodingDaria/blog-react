import axios from 'axios'

const GET_POSTS = 'GET_POSTS'
const ADD_POST = 'ADD_POST'

const initialState = {
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case ADD_POST:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}

export function getPosts() {
  return async (dispatch) => {
    try {
      const { data: posts } = await axios('/api/v1/posts')
      dispatch({ type: GET_POSTS, posts })
    } catch (err) {
      console.log(err)
    }
  }
}

export function addPost(title, body) {
  return async (dispatch) => {
    try {
      axios.post('/api/v1/posts', { title, body })
      const { data: posts } = await axios('/api/v1/posts')
      dispatch({ type: ADD_POST, posts })
    } catch (err) {
      console.log(err)
    }
  }
}
