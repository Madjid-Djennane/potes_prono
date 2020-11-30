import React, { useEffect, useState } from 'react'
import {
  Flex_col,
  Flex_col_space_between,
  Flex_row_space_between
} from '../styles/felx-style'
import axios from 'axios'
import Team from '../components/team'

const Home = () => {
  const [weekBets, setWeekBets] = useState({})

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3003/api/v1/weekBets/current'
    })
      .then(res => {
        setWeekBets(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log(weekBets)
  }, [weekBets])

  return (
    <Flex_col>
      {weekBets.gamesList?.map(weekBet => (
        <div key={weekBet._id}>
          <Flex_col_space_between>
            <Flex_row_space_between>
              <Team data={weekBet.firstTeam}></Team>
              <Team data={weekBet.secondTeam}></Team>
            </Flex_row_space_between>
            <hr></hr>
          </Flex_col_space_between>
        </div>
      ))}
    </Flex_col>

  )
}

export default Home
