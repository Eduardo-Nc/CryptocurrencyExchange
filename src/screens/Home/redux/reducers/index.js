import { types } from '../../../../redux/types'

const initialState = {
  homeData: [],
  dataCoins: [],
  totalCoins: [],
  totalBaseAccount: 0
}

export const home = (state = initialState, action) => {
  switch (action.type) {

    case types.UPDATE_HOME:
      return {
        ...state,
        homeData: action.data,
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

    case types.UPDATE_TOTAL_BASE_ACCOUNT:
      return {
        ...state,
        totalBaseAccount: action.data,
      }

    default:
      return state
  }
}
