import { Image, Text, TouchableOpacity } from 'react-native'
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
      <Image style={styles.imgCrypo} source={{ uri: coinItem?.image }} />
      <Text style={styles.txtName}>{coinItem?.name}</Text>
      <Text style={styles.txtPrice}>${coinItem?.current_price}</Text>
    </TouchableOpacity>
  )
}

export default CoinItem