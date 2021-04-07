import React from 'react'

const Comment = (props) => {
  const { body } = props
  return (
    <div className="border-2 border-black">
      {body}
    </div>
  )
}

export default Comment
