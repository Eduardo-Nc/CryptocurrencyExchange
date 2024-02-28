import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../assets/styles';

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: COLORS.LIGHTGRAY2,
    backgroundColor: COLORS.WHITE
  },
  txtTitleTotalBalance: {
    fontSize: 20,
    fontWeight: "500",
    color: COLORS.BLACK,
    marginBottom: 5
  },
  txtTotalBalance: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.BLACK
  }

});
