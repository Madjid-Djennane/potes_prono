import React, { useEffect, useState } from 'react'
import { Flex_col } from '../styles/flex-style'
import Game from '../components/game'
import { useDispatch, useSelector } from 'react-redux'
import { getWeekGames } from '../actions/weekGames'
import { initBet } from '../actions/bet'
import { Link } from 'react-router-dom'

const Home = () => {
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

  return (
    <Flex_col>
      {_weekGames.gamesList?.map(_game => (
        <div key={_game._id}>
          <Game game={_game}></Game>
        </div>
      ))}
      <Link to='/test'>to test</Link>
    </Flex_col>
  )
}

export default Home
