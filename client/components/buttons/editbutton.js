import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setEditing } from '../../redux/reducers/postsReducer'

const EditButton = () => {
  const { isEditing } = useSelector(({ postsReducer }) => postsReducer)
  const dispatch = useDispatch()
  const editButtonClass = isEditing ? 'hover:bg-red-100 mt-3' : 'hover:bg-gray-100'
  return (
    <button
      type="button"
      className={`${editButtonClass} h-8 w-8 font-bold m-2`}
      onClick={() => dispatch(setEditing())}
    >
      {isEditing && (
        <svg
          className="fill-current h-8 w-8 text-red-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Cancel</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      )}
      {!isEditing && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <title>Edit</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      )}
    </button>
  )
}

export default EditButton
