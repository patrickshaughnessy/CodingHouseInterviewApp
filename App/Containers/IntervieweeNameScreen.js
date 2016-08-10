import React, {PropTypes} from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  LayoutAnimation,
  View,
  Alert
} from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

// styles
import styles from './Styles/IntervieweeNameScreenStyle'

class IntervieweeNameScreen extends React.Component {

  componentWillMount() {
    const { user, login } = this.props
    if (!user) {
      login()
    }
  }

  componentWillReceiveProps(newProps) {
    const { isFetchingQuestions, questionsError, user, requestQuestions, login } = newProps
    console.log("WHILL RECEIVE", isFetchingQuestions, questionsError)
    if (!isFetchingQuestions && questionsError) {
      Alert.alert(
        'Hey!',
        questionsError,
        [
          {text: 'Try Again', onPress: () => requestQuestions(user)},
          {text: 'Login As A Different User', onPress: () => login()}
        ]
      )
    }
  }

  startInterview = () => {
    this.props.background({ title: this.props.name });
  }

  render () {
    let { updateInterviewName, name } = this.props
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

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
                onChangeText={updateInterviewName}
                underlineColorAndroid='transparent'
                onSubmitEditing={this.startInterview}
                placeholder='Bob Jones' />
            </View>
          </View>

          <RoundedButton onPress={this.startInterview}>
            Start Interviewing!
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}

IntervieweeNameScreen.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string,
  questionsError: PropTypes.string,
  login: PropTypes.func,
  background: PropTypes.func,
  updateInterviewName: PropTypes.func,
  requestQuestions: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    name: state.interview.name,
    user: state.login.user,
    isFetchingQuestions: state.questions.fetching,
    questionsError: state.questions.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: NavigationActions.login,
    background: NavigationActions.background,
    updateInterviewName: (name) => dispatch(Actions.updateInterviewName(name)),
    requestQuestions: (user) => dispatch(Actions.requestQuestions(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntervieweeNameScreen)
