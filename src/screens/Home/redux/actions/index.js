import { types } from '../../../../redux/types'

export const setHomeData = (data) => ({
  type: types.UPDATE_HOME,
  data,
})

export const setDataCoins = (data) => ({
  type: types.UPDATE_DATA_TOTAL_COINS,
  data,
})

export const setTotalCoinsData = (data) => ({
  type: types.UPDATE_TOTAL_COINS,
  data,
})

export const setTotalBaseAccountData = (data) => ({
  type: types.UPDATE_TOTAL_BASE_ACCOUNT,
  data,
})
