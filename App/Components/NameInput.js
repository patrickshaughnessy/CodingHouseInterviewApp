import React, {PropTypes} from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Keyboard,
  LayoutAnimation,
  Alert
} from 'react-native'
// import { connect } from 'react-redux'
import Styles from './Styles/NameInputStyle'
// import Actions from '../Actions/Creators'
// import {Images, Metrics} from '../Themes'
// import { Actions as NavigationActions } from 'react-native-router-flux'

// I18n
import I18n from '../I18n/I18n.js'

export default class NameInput extends React.Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: React.PropTypes.object,
  //   someSetting: React.PropTypes.bool.isRequired
  // }

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    // let newSize = Metrics.screenHeight - e.endCoordinates.height
    // this.setState({
    //   visibleHeight: newSize,
    //   topLogo: {width: 100, height: 70}
    // })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    // this.setState({
    //   visibleHeight: Metrics.screenHeight,
    //   topLogo: {width: Metrics.screenWidth}
    // })
  }

  handleChangeName = (text) => {
    this.setState({ name: text })
  }

  render () {
    let { name } = this.state;
    return (
      <View style={Styles.form}>
        <View style={Styles.row}>
          <Text style={Styles.rowLabel}>{I18n.t('name')}</Text>
          <TextInput
            ref='name'
            value={name}
            style={Styles.textInput}
            keyboardType='default'
            returnKeyType='go'
            onChangeText={this.handleChangeName}
            underlineColorAndroid='transparent'
            placeholder={I18n.t('bob jones')} />
        </View>
      </View>
    )
  }
}
