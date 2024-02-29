import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './styles'

export type coinItemObject = {
  name:string,
  quantity:string,
  totalPrice:string,
  price:string,
 };

interface Coin {
  coinItem: coinItemObject,
  openCoin: any
}

const CoinItem: FC<Coin> = (props) => {

  const { coinItem, openCoin } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        openCoin(coinItem)
      }}
      style={styles.container}>
      <Text style={styles.txtName}>Name: {coinItem?.name}</Text>
      <Text style={styles.txtPrice}>Quantity: {coinItem?.quantity}</Text>
      <Text style={styles.txtPrice}>Total Value: ${coinItem?.totalPrice}</Text>
      <Text style={styles.txtPrice}>Individual Value: ${coinItem?.price}</Text>

    </TouchableOpacity>
  )
}

export default CoinItem