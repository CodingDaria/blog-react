import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'

const Header = () => {
  const isHomeLinkRendered = history.location.pathname !== '/'
  return (
    <div className="w-full flex border-2 border-black">
      <div className="font-bold text-xl">React blog</div>
      {isHomeLinkRendered && (
        <Link to="/" className="bg-blue-300 hover:bg-blue-400 p-2 rounded-sm">
          Home
        </Link>
      )}
    </div>
  )
}

export default Header
