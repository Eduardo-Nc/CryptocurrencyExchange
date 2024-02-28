import { View, Text, TouchableOpacity, Modal, Image, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'

//Redux
import { useDispatch, useSelector } from 'react-redux';

//Components
import { ICONS } from '../../../../assets/icons';
import { COLORS } from '../../../../assets/styles';


const BuyModal = (props) => {

  const { isVisible, setIsVisible, coinItem } = props;

  //Redux
  const dispatch = useDispatch();
  const { totalBaseAccount } = useSelector(state => state.home)

  console.log("Modal item ", coinItem)
  console.log("totalBaseAccount ", totalBaseAccount)

  const [quantity, setQuantity] = useState("")

  const validateBuy = () => {
    let totalBuy = (quantity ? Number(quantity) : 0) * coinItem;
    console.log("totalBuy ", totalBuy)
    if (totalBuy > totalBaseAccount) {
      Alert.alert("You do not have enough money to make the purchase")
    } else {
      setIsVisible(false)
    }
  }

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={() => {
        setIsVisible(false)
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
            <Text style={styles.txtTitle}>Name: {"Nombre moneda"}</Text>
            <Text style={styles.txtPrice}>Price: {"11000"}</Text>
            <Text style={styles.txtTotal}>Total: {"332000"}</Text>

          </View>

          <View style={styles.containerInput}>
            <TextInput
              style={styles.txtInput}
              keyboardType="number-pad"
              onChangeText={(text) => {
                setQuantity(text)
              }}
              value={quantity.toString()}
              placeholderTextColor={COLORS.PLACEHOLDER}
              placeholder={"Quantity to buy"}
            />
          </View>


          <TouchableOpacity
            disabled={false}
            onPress={() => {
              validateBuy()
            }}
            style={styles.containerBtnBuy}>
            <Text style={styles.btnBuy}>Buy</Text>
          </TouchableOpacity>


        </View>
      </View>
    </Modal>
  )
}

export default BuyModal