import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 10,
    marginTop: 10,
    padding: 5
    // borderWidth: 4,
    // borderColor: 'red'
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  text: {
    fontSize: 16
  },
  checkboxContainer: {
    flexDirection: 'row'
  },
  unchecked: {
    height: 20,
    width: 20
  },
  checked: {
    height: 20,
    width: 20,
    backgroundColor: Colors.green,
    borderRadius: 3
  },
  labelStyle: {
    marginLeft: 20,
    alignSelf: 'center',
    fontSize: 18
  }
})
