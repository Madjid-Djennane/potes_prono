import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getHistory } from '../actions/history'
import AntWeekBets from '../components/antWeekBet'
import { Title } from '../styles/style'
import { Flex_col, Flex_row_center } from '../styles/flex-style'
import { useTranslation } from 'react-i18next'

const History = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const historyBet = useSelector(state => state.history.historyValue)
  useEffect(() => {
    dispatch(getHistory())
  }, [])

  return (
    <Flex_col height='100vh'>
      <Flex_row_center>
        <Title>{t('previousBets')}</Title>
      </Flex_row_center>
      {historyBet.map(hb => (
        <div key={hb._id}>
          <Flex_row_center>
            <AntWeekBets id={hb._id}></AntWeekBets>
          </Flex_row_center>
        </div>
      ))}
    </Flex_col>
  )
}

export default History
