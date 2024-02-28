import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../assets/styles';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeContainer: {
    zIndex: 10,
    position: "absolute",
    right: 30,
    top: Platform.OS === "android" ? 0 : 20,
    width: 37,
    height: 37,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHTGRAY2,
    borderRadius: 50,
    overflow: 'hidden'
  },
  iconClose: {
    width: "75%",
    height: "75%",
    resizeMode: "contain",
    tintColor: COLORS.GRAY_BACKGROUND_2
  },
  containerTitle: {
    marginTop: 50,
    width: "100%",

    justifyContent: 'center',
    alignItems: "center",
  },
  txtTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.BLACK,
    marginBottom: 10
  },
  txtPrice: {
    fontSize: 20,
    fontWeight: "500",
    color: COLORS.BLACK
  },
  txtTotal: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.BLACK
  },
  containerInput: {
    paddingLeft: 25,
    paddingRight: 25,
    width: "100%",
    height: 80,
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 50,
  },
  txtInput: {
    color: COLORS.BLACK,
    width: "100%",
    height: 55,
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.7,
    borderColor: COLORS.BLACK
  },
  containerBtnBuy: {
    width: "100%",
    height: 70,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY
  },
  btnBuy: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.WHITE
  }

});
