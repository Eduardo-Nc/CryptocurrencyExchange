import { View, Text, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Box, Button } from "native-base";

//React Query
import { useQuery } from 'react-query';
import baseGetRequest from '../../utils/baseGetRequest';


//Styles
import styles from './styles'

//Components
import MainFooter from '../../components/MainFooter/MainFooter';
import CombineBalance from './components/CombineBalance/CombineBalance';


//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setDataCoins,setTotalCoinsData, setTotalBaseAccountData } from './redux/actions'


//Navigation
import { useNavigation } from '@react-navigation/core';


const Home = (): React.JSX.Element => {

  // Navigator
  const navigator = useNavigation();

  //React Query
  const {data, error, isLoading} = useQuery(['coins', "coins/list"], baseGetRequest);

  // Redux
  const dispatch = useDispatch();
  const { totalBaseAccount ,dataCoins} = useSelector(state => state.home)


  useEffect(()=>{
dispatch(setDataCoins(data ? data :[]))
  },[])

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