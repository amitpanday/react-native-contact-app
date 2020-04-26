import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: "#fff",
  },
  menuList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  menuTitle: {
    padding: 2,
    marginVertical: 5,
    marginHorizontal: (height / 52),
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: (height / 46),
    color: '#fff'
  },
  text: {
    fontWeight: '600',
    fontSize: (height / 46),
  },
  menuicon: {
    fontSize: (height / 28),
    color: '#3464a2',
    paddingTop: 5,
    paddingLeft: 5
  },
});
