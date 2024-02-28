import { types } from '../../../../redux/types'

export const setHomeData = (data) => ({
  type: types.UPDATE_HOME,
  data,
})

export const setTotalBaseAccountData = (data) => ({
  type: types.UPDATE_TOTAL_BASE_ACCOUNT,
  data,
})
