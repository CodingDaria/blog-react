import axios from 'axios'

const GET_POSTS = 'GET_POSTS'
const GET_SINGLE_POST = 'GET_SINGLE_POST'
const ADD_POST = 'ADD_POST'
const EDIT_POST = 'EDIT_POST'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_POST = 'DELETE_POST'
const SET_EDITING = 'SET_EDITING'
const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'

const initialState = {
  posts: [],
  post: {},
  comments: [],
  isEditing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
    case DELETE_POST:
    case ADD_POST:
      return {
        ...state,
        posts: action.posts
      }
    case GET_SINGLE_POST:
      return {
        ...state,
        post: action.post,
        comments: action.comments
      }
    case ADD_COMMENT:
      return {
        ...state,
        post: action.post,
        comments: [...state.comments, action.newComment]
      }
    case SET_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing
      }
    case EDIT_POST:
      return {
        ...state,
        post: action.post,
        isEditing: !state.isEditing
      }
    case LOCATION_CHANGE:
      return {
        ...state,
        isEditing: false
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

export function getSinglePost(postId) {
  return async (dispatch) => {
    try {
      const { data: post } = await axios(`/api/v1/posts/${postId}`)
      dispatch({ type: GET_SINGLE_POST, post, comments: post.comments })
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

// export function editPost(postId, title, body) {
//   return async (dispatch) => {
//     try {
//       const { data: updatedPost } = await axios.patch(`/api/v1/posts/${postId}`, { title, body })
//       console.log('redux after patch')
//       // const { data: post } = await axios(`/api/v1/posts/${postId}`)
//       dispatch({ type: EDIT_POST, updatedPost })
//       console.log('redux after dispatch')
//     } catch (err) {
//       console.log(err)
//     }
//   }
// }

export function editPost(postId, title, body) {
  return async (dispatch) => {
    try {
      console.log('show smth', postId, title, body)
      const { data: post } = await axios.put(`/api/v1/posts/${postId}`, { title, body })
      console.log(post)
      // const { data: post } = await axios(`/api/v1/posts/${postId}`)
      dispatch({ type: EDIT_POST, post })
    } catch (err) {
      console.log(err)
    }
  }
}

export function addComment(postId, body) {
  return async (dispatch) => {
    try {
      const { data: newComment } = await axios.post(`/api/v1/posts/${postId}`, { body })
      const { data: post } = await axios(`/api/v1/posts/${postId}`)
      dispatch({ type: ADD_COMMENT, post, newComment })
    } catch (err) {
      console.log(err)
    }
  }
}

export function deletePost(postId) {
  return async (dispatch) => {
    try {
      axios.delete(`/api/v1/posts/${postId}`)
      const { data: posts } = await axios('/api/v1/posts')
      dispatch({ type: DELETE_POST, posts })
    } catch (err) {
      console.log(err)
    }
  }
}

export function setEditing() {
  return { type: SET_EDITING }
}
