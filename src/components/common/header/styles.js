import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  headerRow: {
    flex: 1,
    flexDirection: "row",
  },
  menuIcon: {
    fontSize: (height / 32),
    color: "#000",
    marginLeft: (height / 55)
  },
  title: {
    textAlign: 'center',
    fontSize: (height / 48),
    color: "#000",
  },
});
