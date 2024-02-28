import { types } from '../../../../redux/types'

const initialState = {
  homeData: [],
  totalBaseAccount: 0
}

export const home = (state = initialState, action) => {
  switch (action.type) {

    case types.UPDATE_HOME:
      return {
        ...state,
        homeData: action.data,
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
