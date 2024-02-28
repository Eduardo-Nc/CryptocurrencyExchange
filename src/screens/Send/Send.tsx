import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'

//Components
import MainFooter from '../../components/MainFooter/MainFooter';

//Styles
import styles from './styles'

const Send = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={{color:"black"}}>Send</Text>
    </View>

    <MainFooter />
    </SafeAreaView>
  )
}

export default Send