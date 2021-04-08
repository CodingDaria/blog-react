import React from 'react'

const Comment = (props) => {
  const { body } = props
  return (
    <div className="mt-2 p-1 border-b border-black">
      {body}
    </div>
  )
}

export default Comment
