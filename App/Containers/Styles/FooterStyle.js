import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export const android = {
  tint: 'white',
  paused: Colors.red,
  running: Colors.green,
  containerStyle: {
    flex: 1,
  },
  optionContainerStyle: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center'
  }
}

export default StyleSheet.create({
  container: {
    height: Metrics.footerHeight,
    backgroundColor: '#4E3B2A',
    borderTopColor: 'black',
    borderTopWidth: 5
  },
  controlsContainer: {
    flex: 1,
    backgroundColor: Colors.red,
  },
  intervieweeTimeControl: {
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
