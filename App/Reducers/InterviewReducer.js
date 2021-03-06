import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  interviewee: null,
  intervieweeTime: 0,
  interviewerTime: 0,
  timeControl: 1,
  timerID: null,
  answers: {}
})

const updateInterviewData = (state, action) =>
  state.merge({...action.payload}, {deep: true}) // need deep:true for multiple questions in state

const updateInterviewee = (state, action) =>
  state.merge({
    interviewee: action.user
  })

const updateTimeControl = (state, action) =>
  state.merge({
    timeControl: action.index
  })

const stopTimer = (state, action) =>
  state.merge({
    timerID: null
  })

const startIntervieweeTime = (state, action) =>
  state.merge({
    timerID: action.timerID
  })

const incrementIntervieweeTime = (state, action) =>
  state.merge({
    intervieweeTime: state.intervieweeTime + 1
  })

const startInterviewerTime = (state, action) =>
  state.merge({
    timerID: action.timerID
  })

const incrementInterviewerTime = (state, action) =>
  state.merge({
    interviewerTime: state.interviewerTime + 1
  })

const reset = (state, action) =>
  state.merge({
    interviewee: null,
    intervieweeTime: 0,
    interviewerTime: 0,
    timeControl: 1,
    timerID: null,
    answers: {}
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.UPDATE_INTERVIEW_DATA]: updateInterviewData,
  [Types.UPDATE_INTERVIEWEE]: updateInterviewee,
  [Types.UPDATE_TIME_CONTROL]: updateTimeControl,
  [Types.STOP_TIMER]: stopTimer,
  [Types.START_INTERVIEWEE_TIME]: startIntervieweeTime,
  [Types.START_INTERVIEWER_TIME]: startInterviewerTime,
  [Types.INCREMENT_INTERVIEWEE_TIME]: incrementIntervieweeTime,
  [Types.INCREMENT_INTERVIEWER_TIME]: incrementInterviewerTime,
  [Types.LOGOUT]: reset,
  [Types.SUBMIT_INTERVIEW_SUCCESS]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
