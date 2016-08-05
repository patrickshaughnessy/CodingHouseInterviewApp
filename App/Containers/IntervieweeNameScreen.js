import React, {PropTypes} from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  LayoutAnimation,
  View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
// import NameInput from '../Components/NameInput'
import { Actions as NavigationActions } from 'react-native-router-flux'

// styles
import styles from './Styles/IntervieweeNameScreenStyle'

class IntervieweeNameScreen extends React.Component {

  static propTypes = {
    componentExamples: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    // this.keyboardDidShowListener.remove()
    // this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    // let newSize = Metrics.screenHeight - e.endCoordinates.height
    // this.setState({
    //   visibleHeight: newSize,
    //   topLogo: {width: 100, height: 70}
    // })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    // this.setState({
    //   visibleHeight: Metrics.screenHeight,
    //   topLogo: {width: Metrics.screenWidth}
    // })
  }

  handleChangeName = (text) => {
    this.setState({ name: text })
  }

  render () {
    let { name } = this.state
    console.log('props', this.props)
    return (
      <View style={styles.mainContainer}>
        {/* <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' /> */}
        <ScrollView style={styles.container}>
          {/* <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View> */}
          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Input interviewee's name to begin.
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Name</Text>
              <TextInput
                ref='name'
                value={name}
                style={styles.textInput}
                keyboardType='default'
                returnKeyType='go'
                onChangeText={this.handleChangeName}
                underlineColorAndroid='transparent'
                onSubmitEditing={this.props.background}
                placeholder='Bob Jones' />
            </View>
          </View>

          <RoundedButton onPress={this.props.background}>
            Start Interviewing!
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    background: NavigationActions.background,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntervieweeNameScreen)
