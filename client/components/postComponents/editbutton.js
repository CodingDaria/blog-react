import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setEditing } from '../../redux/reducers/postsReducer'

const EditButton = () => {
  const { isEditing } = useSelector(({ postsReducer }) => postsReducer)
  const dispatch = useDispatch()
  const buttonText = isEditing ? 'Cancel' : 'Edit'
  return (
    <button
      type="button"
      className="bg-blue-300 hover:bg-blue-400 border rounded p-2"
      onClick={() => dispatch(setEditing())}
    >
      {buttonText}
    </button>
  )
}

export default EditButton
