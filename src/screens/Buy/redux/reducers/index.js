import { types } from '../../../../redux/types'

const initialState = {
  buyData: [],
  dataCoins: [],
  totalCoins: [],
  purchasedCoins: [],
  totalAmountInCoins: 0
}

export const buy = (state = initialState, action) => {
  switch (action.type) {

    case types.UPDATE_BUY:
      return {
        ...state,
        buyData: action.data,
      }

    case types.UPDATE_DATA_TOTAL_COINS:
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

    case types.UPDATE_TOTAL_AMOUNT_IN_COINS:
      return {
        ...state,
        totalAmountInCoins: action.data,
      }

    default:
      return state
  }
}
