import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: Metrics.titlePadding,
    // flexDirection: 'row',
    height: Metrics.footerHeight,
    backgroundColor: 'black',
    // borderColor: 'red',
    // borderWidth: 4
  },
  controlsContainer: {
    flex: 1,
    // borderColor: 'blue',
    // borderWidth: 1
  },
  segmentedControl: {
    flex: 1,
    tintColor: 'white',
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  time: {
    flex: 1,
    alignSelf: 'flex-start',
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: 1
  },
  textTitle: {
    flex: 1,
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 3,
    paddingBottom: 3,
  },
  textCount: {
    flex: 2,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },

})
