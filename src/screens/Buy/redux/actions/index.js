import { types } from '../../../../redux/types'

export const setBuyData = (data) => ({
  type: types.UPDATE_BUY,
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

