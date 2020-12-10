import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import WeekBet from '../components/weekBet'

const previousBet = () => {
  const location = useLocation()
  const weekBetId = location.state.id
  const historyBet = useSelector(state => state.history.historyValue).find(
    hb => hb._id === weekBetId
  )

  return <WeekBet weekGames={historyBet}></WeekBet>
}

export default previousBet
