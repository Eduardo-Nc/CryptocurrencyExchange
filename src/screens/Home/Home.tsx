import { View, Text } from 'react-native'
import React from 'react'

//Styles
import styles from './styles'

const Home = () : React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={{color:"black"}}>Home</Text>
    </View>
  )
}

export default Home