import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export const tint = {
  red: Colors.red,
  green: Colors.green
}

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 10,
    marginTop: 10,
    padding: 5,
  },
  innerContainer: {
    padding: 5,
  },
  text: {
    fontSize: 16
  },
  rangeDisplay: {
    flexDirection: 'row',
  },
  rangeText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center'
  }
})
