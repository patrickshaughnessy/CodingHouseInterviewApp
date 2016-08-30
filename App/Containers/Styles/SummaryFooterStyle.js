import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export const android = {
  tint: 'white',
  paused: Colors.red,
  running: Colors.green,
  containerStyle: {
    flex: 1
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
    backgroundColor: 'black',
    borderTopColor: 'black',
    borderTopWidth: 5
  },
  submitButtonContainer: {
    flex: 1,
    margin: 5
  },
  button: {
    height: 45,
    borderRadius: 5,
    backgroundColor: Colors.green,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  },
  intervieweeTimeControl: {
    backgroundColor: Colors.green
  },
  interviewerTimeControl: {
    backgroundColor: Colors.green
  },
  segmentedControl: {
    flex: 1,
    tintColor: 'white'
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4E3B2A'
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
    paddingBottom: 3
  },
  textCount: {
    flex: 2,
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }

})
