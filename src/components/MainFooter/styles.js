import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    paddingBottom: Platform.OS === "ios" ? 10 : 0,
    backgroundColor: COLORS.PRIMARY
  },
  mainContItemMenu: {
    width: "33%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: COLORS.WHITE,
    marginBottom: 5
  },
  itemTxtTitle: {
    fontSize: 12,
    fontWeight: "400",
    color: COLORS.WHITE
  },

});
