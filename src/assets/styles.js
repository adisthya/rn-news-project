import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 0,
    padding: 0
  },
  headerStyle: {
    backgroundColor: '#4CAF50'
  },
  rows: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'stretch'
  },
  rowsCentered: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  buttonContainerView: {
    height: '80%'
  },
  button: {
    height: '100%',
    backgroundColor: '#607D8B'
  },
  avatarStyle: {
    height: 32,
    width: 32
  }
});
