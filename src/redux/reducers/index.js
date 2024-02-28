import { combineReducers } from 'redux'
import { home } from '../../screens/Home/redux/reducers'
import { send } from '../../screens/Send/redux/reducers'
import { buy } from '../../screens/Buy/redux/reducers'

import { types } from '../types'


const appReducer = combineReducers({
  home,
  send,
  buy
})

const rootReducer = (state, action) => {
  if (action.type === types.LOG_OUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer