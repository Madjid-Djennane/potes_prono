import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NoMatch = () => {
  let location = useLocation()
  const { t } = useTranslation()
  return (
    <div>
      <h2>
        404 - <code>{location.pathname}</code> {t('notFound')}
      </h2>
    </div>
  )
}

export default NoMatch
