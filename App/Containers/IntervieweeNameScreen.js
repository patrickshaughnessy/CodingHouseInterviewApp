import React, {PropTypes} from 'react'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  RefreshControl
} from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

import Autocomplete from 'react-native-autocomplete-input'

// styles
import styles from './Styles/IntervieweeNameScreenStyle'

class IntervieweeNameScreen extends React.Component {

  constructor (props) {
    super(props)

    let { interviewee } = this.props

    this.state = {
      query: interviewee && interviewee.name || ''
    }
  }

  componentDidMount () {
    const { interviewee, user, login } = this.props

    if (!user) {
      this.setState({ query: '' })
      return login()
    }

    if (interviewee) {
      this.setState({ query: interviewee.name })
    }
  }

  componentWillReceiveProps (newProps) {
    const { isFetchingQuestions, questionsError, user, requestQuestions, login, interviewee, users, requestUsers } = newProps
    if (!user) {
      this.setState({ query: '' })
      return login()
    }

    if (!users) {
      return requestUsers()
    }

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
    if (interviewee) {
      this.setState({ query: interviewee.name })
    }
  }

  startInterview = () => {
    const { interviewee, viewQuestionsForCategory, categories } = this.props
    if (!interviewee) {
      Alert.alert(
        'Wait!',
        'Please select an interviewee before continuing',
        [
          {text: 'OK'}
        ]
      )
    } else {
      viewQuestionsForCategory(categories[0].category)
      NavigationActions.questions({ title: interviewee.name })
    }
  }

  _findUsers = (query) => {
    const { users } = this.props
    if (!query || !users) {
      return users || []
    }

    const regex = new RegExp(`${query.trim()}`, 'i')
    return users.filter(user => user.name.search(regex) >= 0)
  }

  _updateInterviewee = (user) => {
    const { updateInterviewee } = this.props
    this.setState({ query: user.name })
    updateInterviewee(user)
  }

  render () {
    const { fetching, requestUsers } = this.props
    const { query } = this.state
    const users = this._findUsers(query)
    const comp = (q, s) => q.toLowerCase().trim() === s.toLowerCase().trim()
    return (
      <View style={styles.mainContainer}>
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps
          refreshControl={
            <RefreshControl
              refreshing={fetching}
              onRefresh={requestUsers}
              tintColor='#ff0000'
              title='Pull to refresh user list...'
              titleColor='#00ff00'
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor='#ffff00'
            />
          }
        >

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Input interviewee's name to begin.
            </Text>
          </View>

          <View>
            <Autocomplete
              autoCapitalize='none'
              autoCorrect
              containerStyle={styles.autocompleteContainer}
              data={users.length === 1 && comp(query, users[0].name) ? [] : users}
              defaultValue={query}
              onChangeText={text => this.setState({ query: text })}
              placeholder='Who are you interviewing?'
              renderItem={(user) => (
                <TouchableOpacity onPress={() => this._updateInterviewee(user)}>
                  <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>{user.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
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
  updateInterviewee: PropTypes.func,
  requestQuestions: PropTypes.func,
  isFetchingUsers: PropTypes.bool,
  isFetchingQuestions: PropTypes.bool,
  users: PropTypes.array,
  usersError: PropTypes.string,
  viewQuestionsForCategory: PropTypes.func,
  categories: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    fetching: state.control.fetching,
    users: state.users.all,
    name: state.interview.name,
    categories: state.settings.categories,
    user: state.user.info,
    questionsError: state.questions.errorMessage,
    usersError: state.users.errorMessage,
    interviewee: state.interview.interviewee
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: NavigationActions.login,
    updateInterviewee: (user) => dispatch(Actions.updateInterviewee(user)),
    requestQuestions: (user) => dispatch(Actions.requestQuestions(user)),
    viewQuestionsForCategory: (category) => dispatch(Actions.viewQuestionsForCategory(category)),
    requestUsers: () => dispatch(Actions.requestUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntervieweeNameScreen)
