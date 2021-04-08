import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'

const Header = () => {
  const isHomeLinkRendered = history.location.pathname !== '/'
  return (
    <div className="w-full flex items-center bg-gray-100">
      <div className="flex items-center flex-shrink-0 mr-6">
        {isHomeLinkRendered && (
          <Link to="/" className="hover:bg-gray-200 h-8 w-8 rounded m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Home</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        )}
      </div>
      <div className="w-full p-3 flex-grow font-bold text-xl">React blog</div>
    </div>
  )
}

export default Header
