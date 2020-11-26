import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const NoMatch = () => {
  let location = useLocation()
  return (
    <div>
      <h2>
        404 - <code>{location.pathname}</code> Not found
      </h2>
      <Link to='/'>to Home</Link>
    </div>
  )
}

export default NoMatch
