import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Box, Button } from "native-base";


//Styles
import styles from './styles'


//Components
import MainFooter from '../../components/MainFooter/MainFooter';
import CombineBalance from './components/CombineBalance/CombineBalance';


//Redux
import { useDispatch, useSelector } from 'react-redux';
import {  setTotalBaseAccountData } from './redux/actions'


//Navigation
import { useNavigation } from '@react-navigation/core';


const Home = (): React.JSX.Element => {

  // Navigator
  const navigator = useNavigation();


  // Redux
  const dispatch = useDispatch();
  const { totalBaseAccount } = useSelector(state => state.home)

  
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.containerCombineBalance}>
          <CombineBalance />
      </View>

      <Box alignItems="center">
        <Button
          onPress={() => {
            dispatch(setTotalBaseAccountData((totalBaseAccount ? totalBaseAccount : 0) + 1000))
            // dispatch(setTotalBaseAccountData(0)) //reset
          }}>
          Deposit
        </Button>
      </Box>



      <MainFooter />
    </SafeAreaView>
  )
}

export default Home