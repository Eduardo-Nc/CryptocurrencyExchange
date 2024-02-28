import { View, Text,SafeAreaView, FlatList, Modal } from 'react-native'
import React, {useState,useEffect} from 'react'

//Components
import MainFooter from '../../components/MainFooter/MainFooter';
import CoinItem from './components/CoinItem/CoinItem';
import BuyModal from './components/BuyModal/BuyModal';

//React Query
import { useQuery } from 'react-query';
import baseGetRequest from '../../utils/baseGetRequest';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setDataCoins } from './redux/actions'


//Styles
import styles from './styles'

const Buy = () => {

  //React Query
  const {data, error, isLoading} = useQuery(['coins', "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"], baseGetRequest);

  // Redux
  const dispatch = useDispatch();
  const { dataCoins } = useSelector(state => state.buy)

  const [isVisible,setIsVisible] = useState(false);
  const [coinItem, setCoinItem] = useState({})

  const openCoin = (item) => {
    setCoinItem(item)
   setIsVisible(true)
  };

  useEffect(()=>{
    if(data){
      dispatch(setDataCoins(data ? data :[]))
    }},[data])

  return (
    <SafeAreaView style={styles.container}>
    
    <FlatList
          data={dataCoins ? dataCoins :[]}
          style={styles.flatListContainer}
          showsVerticalScrollIndicator={true}
          ListHeaderComponent={() => {
            return (
              <View style={styles.mainTitleCont}>
              <Text style={styles.txtTitleCont}>Buy</Text>
            </View>
            );
          }}
          renderItem={({ item }) => {
            return <CoinItem coinItem={item} openCoin={openCoin} />;
          }}
        />

<BuyModal isVisible={isVisible} setIsVisible={setIsVisible} coinItem={coinItem} />

    <MainFooter />
    </SafeAreaView>
  )
}

export default Buy