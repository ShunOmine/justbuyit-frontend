import { ROOT_URL } from "../settings";
import axios from 'axios'

export const GET_USER = 'GET_USER'

export const getUser = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/users/${id}`)
  dispatch({ type: GET_USER, response })
}
