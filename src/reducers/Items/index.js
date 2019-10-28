import _ from 'lodash'
import { GET_ITEM } from "../../actions/Items";

export default (items = {}, action) => {
  switch (action.type) {
    case GET_ITEM:
      return _.mapKeys(action.response.data, 'id')
    default:
      return items
  }
}
