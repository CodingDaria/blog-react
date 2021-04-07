import React from 'react'
import { Link } from 'react-router-dom'
// import { Link, useParams } from 'react-router-dom'

const Header = (props) => {
  const { postId } = props
  return (
    <div className="w-full flex border-2 border-black">
      <div className="font-bold text-xl">React blog</div>
      {/* <Link to="/" className="bg-blue-300 hover:bg-blue-400 p-2 rounded-sm">
        Home
      </Link> */}
      {postId && (
        <Link to="/" className="bg-blue-300 hover:bg-blue-400 p-2 rounded-sm">
          Home
        </Link>
      )}
    </div>
  )
}

export default Header
