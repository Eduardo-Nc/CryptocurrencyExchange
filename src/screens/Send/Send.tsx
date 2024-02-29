import { View, Text,SafeAreaView } from 'react-native'
import React,{useState} from 'react'

//Native base
import { Button, Actionsheet, useDisclose, Box, Center } from "native-base";

//Components
import MainFooter from '../../components/MainFooter/MainFooter';
import SendModal from './components/SendModal/SendModal';


//Styles
import styles from './styles'

//Redux
import { useDispatch, useSelector } from 'react-redux';

//Types
export type purchasedCoinsObject = {
  name:string,
  quantity:string,
 };

 export type coinItemObject = {
  id: string,
  name:string,
  quantity:string,
  totalPrice:string,
  price:bigint,
 };
 
 
const Send = (): React.JSX.Element => {

  //Redux
  const dispatch = useDispatch();
  const { purchasedCoins } = useSelector((state:any) => state.buy)

  const [coinItem, setCoinItem] = useState<any>({})
  const [isVisible,setIsVisible] = useState(false);


  const ListOfCoins = () =>{

    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclose();

    return(
<Center>
      <Button onPress={onOpen}>View coins</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              My Coins
            </Text>
          </Box>
        
        {purchasedCoins && purchasedCoins.map((item:purchasedCoinsObject,index:bigint)=>{
          return(
            <Actionsheet.Item onPress={()=>{
              setCoinItem(item)
              setIsVisible(true)
            }} key={index}>{`${item?.name}  - Quantity Available: ${item?.quantity}`}</Actionsheet.Item>
          )
        })}
     
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    
    <View style={styles.mainTitleCont}>
              <Text style={styles.txtTitleCont}>Send</Text>
            </View>

            <Center flex={1} px="3">
                <ListOfCoins />
            </Center>

            <SendModal isVisible={isVisible} setIsVisible={setIsVisible} coinItem={coinItem} />

    <MainFooter />
    </SafeAreaView>
  )
}

export default Send