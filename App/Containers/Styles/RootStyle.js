import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors} from '../../Themes/'

const RootStyle = StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }

})

export default RootStyle
