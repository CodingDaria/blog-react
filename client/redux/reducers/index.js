import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import postsReducer from './postsReducer'

const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    postsReducer
  })
}

export default createRootReducer
