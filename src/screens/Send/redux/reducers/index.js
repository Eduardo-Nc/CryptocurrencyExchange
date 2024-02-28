import { types } from '../../../../redux/types'

const initialState = {
  sendData: [],
}

export const send = (state = initialState, action) => {
  switch (action.type) {

    case types.UPDATE_SEND:
      return {
        ...state,
        sendData: action.data,
      }


    default:
      return state
  }
}
