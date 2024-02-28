import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  mainTitleCont: {
    paddingLeft: 25,
    paddingRight: 25,
    width: "100%",
    height: 65,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHTGRAY2,
    marginBottom: 20
  },
  txtTitleCont: {
    fontSize: 30,
    color: COLORS.BLACK,
    fontWeight: "bold",
  },
  flatListContainer: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 70
  }
});
