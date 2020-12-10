import React, { useEffect, useState } from 'react'
import NoBets from '../components/noBets'
import { useDispatch, useSelector } from 'react-redux'
import { getWeekGames } from '../actions/weekGames'
import { initBet } from '../actions/bet'
import WeekBet from '../components/weekBet'

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [_weekGames, _setWeekGames] = useState({})
  const dispatch = useDispatch()
  const weekGames = useSelector(state => state.weekGames.weekGamesValue)

  useEffect(() => {
    dispatch(getWeekGames())
  }, [])

  useEffect(() => {
    _setWeekGames(weekGames)
    // initialiser tous les matches a 0 (matche nul)
    const bets = weekGames.gamesList?.map(g => ({
      game: g._id,
      user_bet: 0
    }))
    const initialBet = {
      weekGames: weekGames._id,
      bets: bets
    }
    dispatch(initBet(initialBet))
  }, [weekGames])

  return weekGames.status !== 'noWeekBet' ? (
    <WeekBet weekGames={weekGames}></WeekBet>
  ) : (
    <NoBets></NoBets>
  )
}

export default Home
