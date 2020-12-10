export const SET_HISTORY = 'SET_HISTORY'
import axios from 'axios'

export const setHistory = value => ({
  type: SET_HISTORY,
  payload: value
})

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
// eslint-disable-next-line no-unused-vars
export const getHistory = () => dispatch => {
  axios({
    method: 'GET',
    url: 'http://localhost:3003/api/v1/weekBets/all'
  })
    .then(res => {
      dispatch(setHistory(res.data.data))
    })
    .catch(err => {
      console.warn(err)
    })
}
