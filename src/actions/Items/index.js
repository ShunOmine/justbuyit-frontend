import { ROOT_URL } from "../settings"
import axios from 'axios'

export const GET_ITEM = 'GET_ITEM'

export const getItem = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/posts`)
  dispatch({ type: GET_ITEM, response })
}
