import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'

//Redux
import { useDispatch, useSelector } from 'react-redux';


const CoinItem = (props) => {

  const { coinItem, openCoin } = props;

  //Redux
  const dispatch = useDispatch();
  // const {  } = useSelector(state => state.home)


  return (
    <TouchableOpacity
      onPress={() => {
        openCoin(coinItem)
      }}
      style={styles.container}>
      <Text style={styles.txtName}>{"Nombre"}</Text>
      <Text style={styles.txtPrice}>${"1000"}</Text>
    </TouchableOpacity>
  )
}

export default CoinItem