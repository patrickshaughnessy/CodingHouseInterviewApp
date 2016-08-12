import React, {PropTypes} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation,
  Alert,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/LoginScreenStyle'
import Actions from '../Actions/Creators'
import {Images, Metrics} from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'

class LoginScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      email: 'admin@admin.com',
      password: 'admin',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
    this.isAttempting = false
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()

    const { attempting, errorMessage, close } = newProps
    if (this.isAttempting && !attempting) {
      this.isAttempting = false
      if (errorMessage) {
        Alert.alert(
          'Oops',
          errorMessage,
          [
            {text: 'OK', onPress: () => console.log('OK pressed')}
          ]
        )
      } else {
        close()
      }
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
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth}
    })
  }

  handlePressLogin = () => {
    const { email, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(email, password)
  }

  handleChangeUsername = (text) => {
    this.setState({ email: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  render () {
    const { email, password } = this.state
    const { attempting } = this.props
    const editable = !attempting
    const textInputStyle = editable ? styles.textInput : styles.textInputReadonly
    return (
      <View contentContainerStyle={{justifyContent: 'center'}} style={[styles.container, {height: this.state.visibleHeight}]}>
        <Image source={Images.logo} style={[styles.topLogo, this.state.topLogo]} />
        <View style={styles.form}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Email</Text>
            <TextInput
              ref='email'
              style={textInputStyle}
              value={email}
              editable={editable}
              keyboardType='default'
              returnKeyType='next'
              onChangeText={this.handleChangeUsername}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.password.focus()}
              placeholder={'you@codinghouse.co'}
              autoCapitalize='none'
              autoCorrect='false'
              autoFocus

            />
          </View>

          <View style={styles.row}>
            <Text style={styles.rowLabel}>Password</Text>
            <TextInput
              ref='password'
              style={textInputStyle}
              value={password}
              editable={editable}
              keyboardType='default'
              returnKeyType='go'
              secureTextEntry
              onChangeText={this.handleChangePassword}
              underlineColorAndroid='transparent'
              onSubmitEditing={this.handlePressLogin}
              placeholder={'password'} />
          </View>

          <View style={[styles.loginRow]}>
            <TouchableOpacity style={styles.loginButtonWrapper} disabled={this.isAttempting} onPress={this.handlePressLogin}>
              <View style={styles.loginButton}>
                {this.isAttempting ? <ActivityIndicator /> : <Text style={styles.loginText}>Sign In</Text>}
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }

}

LoginScreen.propTypes = {
  dispatch: PropTypes.func,
  attempting: PropTypes.bool,
  attemptLogin: PropTypes.func,
  close: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    attempting: state.login.attempting,
    errorMessage: state.login.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: NavigationActions.pop,
    attemptLogin: (email, password) => dispatch(Actions.attemptLogin(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
