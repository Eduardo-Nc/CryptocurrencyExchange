import { Image, Text, TouchableOpacity } from 'react-native'
import React,{FC} from 'react'
import styles from './styles'

//Intefaces
export type coinItemObject = {
  image: string,
  name:string,
  current_price:string,
 };

interface Coin {
  coinItem: coinItemObject,
  openCoin: any
}


const CoinItem:FC<Coin> = (props) => {

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