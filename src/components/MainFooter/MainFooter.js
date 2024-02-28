import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

//Styles
import styles from './styles'

//Icons
import { ICONS } from '../../assets/icons';

//Redux
import { useDispatch, useSelector } from 'react-redux';

//Navigation
import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';


//Interfaces
interface ItemMenuProps {
  title: String,
  icon: String,
  screen: String
}


const MainFooter = (): React.JSX.Element => {

  // Navigator
  const navigator = useNavigation();

  // Redux
  const dispatch = useDispatch();
  //  const {  } = useSelector(state => state.)


  const ItemMenu: React.FC<ItemMenuProps> = ({ title, icon, screen }) => {
    return (
      <TouchableOpacity onPress={() => {
        navigator.push(screen)
      }} style={styles.mainContItemMenu}>
        <Image source={icon} style={styles.itemIcon} />
        <Text style={styles.itemTxtTitle}>{title}</Text>
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.container}>

      <ItemMenu title="Home" icon={ICONS.home} screen="Home" />
      <ItemMenu title="Send" icon={ICONS.send} screen="Send" />
      <ItemMenu title="Buy" icon={ICONS.buy} screen="Buy" />

    </View>
  )
}

export default MainFooter