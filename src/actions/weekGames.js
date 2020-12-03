export const SET_WEEK_GAMES = 'SET_WEEK_GAMES'
import axios from 'axios'

export const setWeekGames = value => ({
  type: SET_WEEK_GAMES,
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
export const getWeekGames = () => dispatch => {
  axios({
    method: 'GET',
    url: 'http://localhost:3003/api/v1/weekBets/current'
  })
    .then(res => {
      dispatch(setWeekGames(res.data.data))
    })
    .catch(err => {
      console.log(err)
    })
}
