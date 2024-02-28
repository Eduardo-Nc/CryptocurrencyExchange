import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../assets/styles';

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: COLORS.LIGHTGRAY2,
    backgroundColor: COLORS.GREEN
  },
  imgCrypo: {
    width: 50,
    height: 50,
    resizeMode: "contain"
  },
  txtName: {
    fontSize: 20,
    color: COLORS.BLACK,
    fontWeight: "500",
    marginBottom: 10
  },
  txtPrice: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontWeight: "bold"
  },
});
