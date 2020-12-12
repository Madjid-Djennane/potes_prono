import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import COLORS from '../../styles/color'
import { Button } from '../../styles/style'
import { Flex_col_center, Flex_row_center } from '../../styles/flex-style'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'

import { store } from 'react-notifications-component'
import 'animate.css'
import 'react-notifications-component/dist/theme.css'

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
  const { t } = useTranslation()
  const notify = () => {
    store.addNotification({
      title: 'Info',
      message: t('alreadyBet'),
      type: 'warning',
      container: 'top-right',
      insert: 'top',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true
      }
    })
  }
  const send = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:3003/api/v1/bets/',
      data: userBet
    })
      .then(res => {
        res.status === 201
          ? Swal.fire({
              title: 'Succès',
              text: t('betTaken'),
              icon: 'success'
            })
          : notify()
      })
      .catch(err => console.warn(err))
  }
  return (
    <Flex_col_center height='180px'>
      <Flex_row_center>
        <Button color={COLORS.btn_blue_royal} onClick={send}>
          {t('send')}
        </Button>
      </Flex_row_center>
    </Flex_col_center>
  )
}

export default ConfirmBet
