import React from 'react'
import {
  View,
  Text,
  SegmentedControlIOS
} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import styles from './Styles/FooterStyle'

class Footer extends React.Component {

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
  constructor(props) {
    super(props)
  }

  _handleControlChange = (e) => {
    let { selectedIndex, selectIndex, timerID, stopTimer, startIntervieweeTime, startInterviewerTime, incrementIntervieweeTime, incrementInterviewerTime, updateTimeControl } = this.props
    let index = e.nativeEvent.selectedSegmentIndex;

    if (selectedIndex === index) return;

    if (timerID) {
      clearInterval(timerID)
      stopTimer()
    };

    let intervalID;
    switch (index) {
      case 0:
        intervalID = setInterval(() => {
          incrementIntervieweeTime()
        }, 1000);
        startIntervieweeTime(intervalID)
        break;
      case 2:
        intervalID = setInterval(() => {
          incrementInterviewerTime()
        }, 1000);
        startInterviewerTime(intervalID)
        break
    }
    updateTimeControl(index);
  }

  render () {
    let { selectedIndex, intervieweeTime, interviewerTime } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.controlsContainer}>
          <SegmentedControlIOS
            style={styles.segmentedControl}
            values={['Interviewee', 'PAUSE', 'Interviewer']}
            selectedIndex={selectedIndex}
            onChange={this._handleControlChange}
          />
        </View>
        <View style={styles.timeContainer}>
          <View style={styles.time} >
            <Text style={styles.textTitle}>Interviewee</Text>
            <Text style={styles.textCount}>{intervieweeTime}</Text>
          </View>
          <View style={styles.time}>
            <Text style={styles.textTitle}>Interviewer</Text>
            <Text style={styles.textCount}>{interviewerTime}</Text>
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
