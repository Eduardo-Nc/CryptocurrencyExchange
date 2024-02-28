import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'

//Redux
import { useDispatch, useSelector } from 'react-redux';


const CombineBalance = () => {

  //Redux
  const dispatch = useDispatch();
  const { homeData, totalCoins, totalBaseAccount } = useSelector(state => state.home)

  const [total, setTotal] = useState(0);


  useEffect(() => {
    setTotal((totalCoins ? totalCoins : 0 + totalBaseAccount ? totalBaseAccount : 0))
  }, [totalCoins, totalBaseAccount])

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitleTotalBalance}>Total Balance:</Text>
      <Text style={styles.txtTotalBalance}>${total}</Text>
    </View>
  )
}

export default CombineBalance