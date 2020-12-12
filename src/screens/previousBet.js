import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PreviousWeekBet from '../components/previousWeekBet'

const previousBet = () => {
  const location = useLocation()
  const weekBetId = location.state.id
  const historyBet = useSelector(state => state.history.historyValue).find(
    hb => hb._id === weekBetId
  )

  return <PreviousWeekBet weekGames={historyBet}></PreviousWeekBet>
}

export default previousBet
