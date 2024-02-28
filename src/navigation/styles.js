import { StyleSheet } from 'react-native';
import { COLORS } from '../assets/styles';

export default StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowColor: COLORS.PRIMARY,
    backgroundColor: COLORS.PRIMARY,
    height: 'auto',
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.WHITE
  }


});
