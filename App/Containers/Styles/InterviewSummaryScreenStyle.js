import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: Metrics.navBarHeight
    // marginBottom: Metrics.footerHeight
  },
  scrollView: {
    backgroundColor: Colors.background
    // borderColor: 'red',
    // borderWidth: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
    // borderColor: 'yellow',
    // borderWidth: 4,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    marginTop: 20,
    color: Colors.snow,
    textDecorationLine: 'underline'
  },
  outerQuestionContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  questionTitle: {
    color: 'white'
  },
  modal: {
    backgroundColor: '#f5fcff',
    flex: 1
  },
  innerModalContainer: {
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flex: 1
  },
  modalText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 15
  }
})
