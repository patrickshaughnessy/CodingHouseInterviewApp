import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'

import styles, { android } from './Styles/FooterStyle'

import moment from 'moment'
import { SegmentedControls } from 'react-native-radio-buttons'

class Footer extends Component {

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
  constructor (props) {
    super(props)
    this.options = ['Interviewee', 'PAUSE', 'Interviewer']
  }

  _displayTime = (t) => {
    let time = moment.duration(t, 'seconds')._data
    let seconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds
    let minutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes
    return `${minutes} : ${seconds}`
  }

  _handleControlChange = (option, e) => {
    console.log(e)
    let { selectedIndex, timerID, stopTimer, startIntervieweeTime, startInterviewerTime, incrementIntervieweeTime, incrementInterviewerTime, updateTimeControl } = this.props
    let index = this.options.indexOf(option)

    if (selectedIndex === index) return

    if (timerID) {
      clearInterval(timerID)
      stopTimer()
    };

    let intervalID
    switch (index) {
      case 0:
        intervalID = setInterval(() => {
          incrementIntervieweeTime()
        }, 1000)
        startIntervieweeTime(intervalID)
        break
      case 2:
        intervalID = setInterval(() => {
          incrementInterviewerTime()
        }, 1000)
        startInterviewerTime(intervalID)
        break
    }
    updateTimeControl(index)
  }

  render () {
    let { selectedIndex, intervieweeTime, interviewerTime } = this.props
    const backTint = selectedIndex === 1 ? android.paused : android.running
    return (
      <View style={styles.container}>
        <View style={styles.controlsContainer}>
          <SegmentedControls
            tint={android.tint}
            backTint={backTint}
            containerStyle={android.containerStyle}
            optionContainerStyle={android.optionContainerStyle}
            options={this.options}
            selectedOption={this.options[selectedIndex]}
            onSelection={this._handleControlChange}
          />
        </View>
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
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedIndex: state.interview.timeControl,
    intervieweeTime: state.interview.intervieweeTime,
    interviewerTime: state.interview.interviewerTime,
    timerID: state.interview.timerID
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectIndex: (index) => dispatch(Actions.updateTimeControl(index)),
    stopTimer: () => dispatch(Actions.stopTimer()),
    startIntervieweeTime: (timerID) => dispatch(Actions.startIntervieweeTime(timerID)),
    startInterviewerTime: (timerID) => dispatch(Actions.startInterviewerTime(timerID)),
    incrementIntervieweeTime: () => dispatch(Actions.incrementIntervieweeTime()),
    incrementInterviewerTime: () => dispatch(Actions.incrementInterviewerTime()),
    updateTimeControl: (index) => dispatch(Actions.updateTimeControl(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
