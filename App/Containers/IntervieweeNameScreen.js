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
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

// styles
import styles from './Styles/IntervieweeNameScreenStyle'

class IntervieweeNameScreen extends React.Component {

  componentWillMount() {
    if (!this.props.user) {
      this.props.login()
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
  background: PropTypes.func,
  login: PropTypes.func,
  name: PropTypes.string,
  user: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    name: state.interview.name,
    user: state.login.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: NavigationActions.login,
    background: NavigationActions.background,
    updateInterviewName: (name) => dispatch(Actions.updateInterviewName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntervieweeNameScreen)
