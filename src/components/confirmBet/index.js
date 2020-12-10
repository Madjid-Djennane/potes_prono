import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import COLORS from '../../styles/color'
import { Button } from '../../styles/style'
import { Flex_col_center, Flex_row_center } from '../../styles/flex-style'
import Swal from 'sweetalert2'

axios.interceptors.request.use(
  config => {
    config.headers.authorization = `${localStorage.getItem('userToken')}`
    return config
  },
  error => {
    // eslint-disable-next-line no-undef
    return Promise.reject(error)
  }
)

const ConfirmBet = () => {
  const userBet = useSelector(state => state.bet.betValue)

  const send = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:3003/api/v1/bets/',
      data: userBet
    })
      .then(res => {
        Swal.fire({
          title: res.status === 201 ? 'Succès' : 'Info',
          text: res.data.msg,
          icon: res.status === 201 ? 'success' : 'warning'
        })
      })
      .catch(err => console.warn(err))
  }
  return (
    <Flex_col_center height='180px'>
      <Flex_row_center>
        <Button color={COLORS.btn_blue_royal} onClick={send}>
          Envoyer
        </Button>
      </Flex_row_center>
    </Flex_col_center>
  )
}

export default ConfirmBet
