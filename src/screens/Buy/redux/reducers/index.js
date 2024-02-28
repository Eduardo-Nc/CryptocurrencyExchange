import { types } from '../../../../redux/types'

const initialState = {
  buyData: [],
  dataCoins: [],
  totalCoins: [],
  purchasedCoins: []
}

export const buy = (state = initialState, action) => {
  switch (action.type) {

    case types.UPDATE_BUY:
      return {
        ...state,
        buyData: action.data,
      }

    case types.UPDATE_DATA_TOTAL_COINS:
      console.log("action.data ", action.data)
      return {
        ...state,
        dataCoins: action.data,
      }

    case types.UPDATE_TOTAL_COINS:
      return {
        ...state,
        totalCoins: action.data,
      }

    case types.UPDATE_PURCHASED_COINS:
      return {
        ...state,
        purchasedCoins: action.data,
      }


    default:
      return state
  }
}
