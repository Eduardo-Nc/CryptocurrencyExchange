import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'

//Redux
import { useDispatch, useSelector } from 'react-redux';


const CombineBalance = () => {

  //Redux
  const dispatch = useDispatch();
  const { totalBaseAccount } = useSelector(state => state.home)
  const { purchasedCoins, totalAmountInCoins } = useSelector(state => state.buy)
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(((totalAmountInCoins ? totalAmountInCoins : 0) + totalBaseAccount ? totalBaseAccount : 0))
  }, [totalAmountInCoins, totalBaseAccount])

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitleTotalBalance}>Total Balance:</Text>
      <Text style={styles.txtTotalBalance} adjustsFontSizeToFit={true} >${total}</Text>
    </View>
  )
}

export default CombineBalance