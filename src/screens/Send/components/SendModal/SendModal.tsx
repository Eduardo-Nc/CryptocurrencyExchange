import { View, Text, TouchableOpacity, Modal, Image, TextInput, Alert } from 'react-native'
import React, { useState, FC } from 'react'
import styles from './styles'

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setTotalAmountInCoins, setPurchasedCoins } from '../../../Buy/redux/actions'


//Components
import { ICONS } from '../../../../assets/icons';
import { COLORS } from '../../../../assets/styles';

//Interfeces
import {coinItemObject} from '../../Send'

interface SendModal {
  coinItem: coinItemObject,
  isVisible:boolean,
setIsVisible:any
}


const SendModal: FC<SendModal> = (props) => {

  const { isVisible, setIsVisible, coinItem } = props;

  //Redux
  const dispatch = useDispatch();
  const { purchasedCoins, totalAmountInCoins } = useSelector((state:any) => state.buy)

  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
 

  const validateSend = () => {
    if (address === "") {
      Alert.alert("It is necessary to enter the delivery address")
      return
    } else {
      if (quantity !== "") {
        let findCoin = purchasedCoins.find((c) => c?.id === coinItem?.id)
        if (Number(quantity) > Number(findCoin.quantity)) {
          Alert.alert("You do not have enough coins to send")
        } else {
          let findCoins = purchasedCoins.find((c) => c.id === coinItem?.id)
          if (findCoins) {
            let totalQuantity = (Number(findCoins.quantity) - Number(quantity));
            let updateCoin = {
              ...findCoins,
              quantity: totalQuantity,
              totalPrice: (Number(totalQuantity) * Number(coinItem?.price))
            }
            let filterCoins = purchasedCoins.filter((c) => c.id !== coinItem?.id)
            let newTotalAmount = (totalAmountInCoins + Number(coinItem?.price) * Number(quantity))

            dispatch(setTotalAmountInCoins(newTotalAmount))
            dispatch(setPurchasedCoins([...filterCoins, updateCoin]))
            Alert.alert("Successful shipment")
            setIsVisible(false)
            setQuantity("")
            setAddress("")
          }
        }
      } else {
        Alert.alert("It is necessary to enter a number of coins to send")
      }

    }
  }

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={() => {
        setIsVisible(false)
        setQuantity("")
        setAddress("")
      }}
      statusBarTranslucent={true}
    >
      <View style={styles.mainContainer}>
        <View style={styles.container}>

          <TouchableOpacity
            onPress={() => {
              setIsVisible(false)
            }}
            style={styles.closeContainer}>
            <Image style={styles.iconClose} source={ICONS.cerrar} />
          </TouchableOpacity>

          <View style={styles.containerTitle}>
            <Text style={styles.txtTitle}>Cryptocurrency: {coinItem?.name}</Text>
            <Text style={styles.txtPrice}>Quantity Available: {coinItem?.quantity}</Text>
          </View>

          <View style={styles.maincontainerInputs}>
            <View style={styles.containerInput}>
              <TextInput
                style={styles.txtInput}
                keyboardType="number-pad"
                onChangeText={(text) => {
                  setQuantity(text)
                }}
                value={quantity.toString()}
                placeholderTextColor={COLORS.PLACEHOLDER}
                placeholder={"Quantity to send"}
              />
            </View>

            <View style={styles.containerInputAddress}>
              <TextInput
                style={styles.txtInputAddress}
                keyboardType="default"
                onChangeText={(text) => {
                  setAddress(text)
                }}
                value={address}
                placeholderTextColor={COLORS.PLACEHOLDER}
                placeholder={"Enter the shipping address"}
              />
            </View>
          </View>

          <TouchableOpacity
            disabled={false}
            onPress={() => {
              validateSend()
            }}
            style={styles.containerBtnBuy}>
            <Text style={styles.btnBuy}>Send</Text>
          </TouchableOpacity>


        </View>
      </View>
    </Modal>
  )
}

export default SendModal