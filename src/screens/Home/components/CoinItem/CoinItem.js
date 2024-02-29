import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'


const CoinItem = (props) => {

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