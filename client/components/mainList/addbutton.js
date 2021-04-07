import React from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../redux/reducers/postsReducer'

const AddButton = (props) => {
  const {
    title, body, setTitle, setBody
  } = props
  const dispatch = useDispatch()
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(addPost(title, body))
        setTitle('')
        setBody('')
      }}
    >
      Add
    </button>
  )
}

export default AddButton
