import { types } from '../../../../redux/types'

const initialState = {
  buyData: [],
}

export const buy = (state = initialState, action) => {
  switch (action.type) {

    case types.UPDATE_BUY:
      return {
        ...state,
        buyData: action.data,
      }


    default:
      return state
  }
}
