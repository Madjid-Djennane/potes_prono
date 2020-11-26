
import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import i18n from './../../config/translations'

const NoMatch = () => {
  let location = useLocation()
  return (
    <div>
      <h2>
        404 - <code>{location.pathname}</code> Not found
      </h2>
  <p>{i18n.t('utilisateur')}</p>
  <p>test</p>
      <Link to='/'>to Home</Link>
    </div>
  )
}

export default NoMatch
