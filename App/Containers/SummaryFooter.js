import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'

import Actions from '../Actions/Creators'

import styles from './Styles/SummaryFooterStyle'

const moment = require('moment')

class SummaryFooter extends React.Component {

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: React.PropTypes.object,
  //   someSetting: React.PropTypes.bool.isRequired
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  _displayTime = (t) => {
    let time = moment.duration(t, 'seconds')._data
    let seconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds
    let minutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes
    return `${minutes} : ${seconds}`
  }

  _submitInterview = () => {
    const { submitInterview } = this.props
    Alert.alert(
      'Are you sure?',
      'This will end the current interview',
      [
        {text: 'Cancel'},
        {text: 'Submit', onPress: () => submitInterview()}
      ]
    )
  }

  render () {
    const { intervieweeTime, interviewerTime, fetching } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <View style={styles.time} >
            <Text style={styles.textTitle}>Interviewee</Text>
            <Text style={styles.textCount}>{this._displayTime(intervieweeTime)}</Text>
          </View>
          <View style={styles.time}>
            <Text style={styles.textTitle}>Interviewer</Text>
            <Text style={styles.textCount}>{this._displayTime(interviewerTime)}</Text>
          </View>
        </View>
        <View style={styles.submitButtonContainer}>
          <TouchableOpacity style={styles.button} disabled={fetching} onPress={this._submitInterview}>
            {fetching ? <ActivityIndicator /> : <Text style={styles.buttonText}>Submit</Text>}
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    intervieweeTime: state.interview.intervieweeTime,
    interviewerTime: state.interview.interviewerTime,
    fetching: state.control.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitInterview: () => dispatch(Actions.submitInterview())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryFooter)
