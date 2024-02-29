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

export const setPurchasedCoins = (data) => ({
  type: types.UPDATE_PURCHASED_COINS,
  data,
})

export const setTotalAmountInCoins = (data) => ({
  type: types.UPDATE_TOTAL_AMOUNT_IN_COINS,
  data,
})