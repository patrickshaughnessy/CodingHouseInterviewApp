import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: Metrics.titlePadding,
    // flexDirection: 'row',
    height: Metrics.footerHeight,
    backgroundColor: '#4E3B2A',
    // borderColor: 'red',
    // borderWidth: 4
  },
  controlsContainer: {
    flex: 1,
    backgroundColor: Colors.red,
    // borderColor: 'blue',
    // borderWidth: 1
  },
  intervieweeTimeControl: {
    // backgroundColor: '#92982E'
    backgroundColor: Colors.green
  },
  interviewerTimeControl: {
    backgroundColor: Colors.green
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
