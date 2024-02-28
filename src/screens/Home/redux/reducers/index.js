import { types } from '../../../../redux/types'

const initialState = {
  homeData: [],
}

export const home = (state = initialState, action) => {
  switch (action.type) {

    case types.UPDATE_HOME:
      return {
        ...state,
        homeData: action.data,
      }


    default:
      return state
  }
}
