import axios from 'axios'
import { history } from '..'

const GET_POSTS = 'GET_POSTS'
const GET_SINGLE_POST = 'GET_SINGLE_POST'
const ADD_POST = 'ADD_POST'
const EDIT_POST = 'EDIT_POST'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_POST = 'DELETE_POST'
const SET_EDITING = 'SET_EDITING'
const LOCATION_CHANGE = '@@router/LOCATION_CHANGE'
const ERROR = 'ERROR'

const initialState = {
  posts: [],
  post: {},
  comments: [],
  isEditing: false,
  error: {}
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
    case ERROR:
      return {
        ...state,
        error: action.err
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
      dispatch({ type: ERROR, err })
      history.push('/error')
    }
  }
}

export function getSinglePost(postId) {
  return async (dispatch) => {
    try {
      const { data: post } = await axios(`/api/v1/posts/${postId}`)
      dispatch({ type: GET_SINGLE_POST, post, comments: post.comments })
    } catch (err) {
      dispatch({ type: ERROR, err })
      history.push('/error')
    }
  }
}

export function addPost(title, body) {
  return async (dispatch) => {
    try {
      const { data: newPost } = await axios.post('/api/v1/posts', { title, body })
      const { data: posts } = await axios('/api/v1/posts')
      dispatch({ type: ADD_POST, newPost, posts })
    } catch (err) {
      dispatch({ type: ERROR, err })
      history.push('/error')
    }
  }
}

export function editPost(postId, title, body) {
  return async (dispatch) => {
    try {
      const { data: post } = await axios.put(`/api/v1/posts/${postId}`, { title, body })
      dispatch({ type: EDIT_POST, post })
    } catch (err) {
      dispatch({ type: ERROR, err })
      history.push('/error')
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
      dispatch({ type: ERROR, err })
      history.push('/error')
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
      dispatch({ type: ERROR, err })
      history.push('/error')
    }
  }
}

export function setEditing() {
  return { type: SET_EDITING }
}
