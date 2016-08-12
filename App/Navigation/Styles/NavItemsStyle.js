import {StyleSheet} from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  navButtonLeft: {
    marginTop: Metrics.doubleBaseMargin + 5,
    marginLeft: Metrics.baseMargin,
    backgroundColor: Colors.transparent,
    width: Metrics.icons.medium + 5
    // borderColor: 'red',
    // borderWidth: 2
  }
})
