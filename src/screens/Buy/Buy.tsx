import { View, Text,SafeAreaView, FlatList, Modal } from 'react-native'
import React, {useState} from 'react'


//Components
import MainFooter from '../../components/MainFooter/MainFooter';
import CoinItem from './components/CoinItem/CoinItem';
import BuyModal from './components/BuyModal/BuyModal';


//Styles
import styles from './styles'

const Buy = () => {

  const [isVisible,setIsVisible] = useState(false);
  const [coinItem, setCoinItem] = useState({})

  const openCoin = (item) => {
    setCoinItem(item)
   console.log("item ", item)
   setIsVisible(true)
  };

  return (
    <SafeAreaView style={styles.container}>
    
    <FlatList
          data={[1,2,3,4,5,6]}
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