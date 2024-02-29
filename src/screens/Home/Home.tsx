import { View, SafeAreaView, FlatList } from 'react-native'
import React, {useState} from 'react'
import { Box, Button } from "native-base";

//Styles
import styles from './styles'


//Components
import MainFooter from '../../components/MainFooter/MainFooter';
import CombineBalance from './components/CombineBalance/CombineBalance';
import CoinItem from './components/CoinItem/CoinItem';


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
  const { totalBaseAccount } = useSelector((state:any) => state.home)
  const { purchasedCoins } = useSelector((state:any) => state.buy)

  const [coinItem, setCoinItem] = useState<object>({})


  const openCoin = (item:object) => {
    setCoinItem(item)
  };
  
  return (
    <SafeAreaView style={styles.container}>

      <FlatList
          data={purchasedCoins ? purchasedCoins :[]}
          style={styles.flatListContainer}
          showsVerticalScrollIndicator={true}
          ListHeaderComponent={ (
              <>
               <View style={styles.containerCombineBalance}>
          <CombineBalance />
      </View>

      <Box alignItems="center" marginBottom={5}>
        <Button
          onPress={() => {
            dispatch(setTotalBaseAccountData(Number(totalBaseAccount ? totalBaseAccount : 0) + 100))
            // dispatch(setTotalBaseAccountData(0)) //reset
          }}>
          Deposit
        </Button>
      </Box>
            </>
            )}
          renderItem={({ item }) => {
            return <CoinItem coinItem={item} openCoin={openCoin} />;
          }}
        />

      <MainFooter />
    </SafeAreaView>
  )
}

export default Home