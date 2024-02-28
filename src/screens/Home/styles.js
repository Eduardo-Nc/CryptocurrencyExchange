import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.WHITE,
  },
  containerCombineBalance: {
    marginTop: Platform.OS === "android" ? 20 : 5,
    marginBottom: 20,
    paddingLeft: 25,
    paddingRight: 25
  }

});
