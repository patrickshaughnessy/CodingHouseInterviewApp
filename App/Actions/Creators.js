import Types from './Types'

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password })

const loginSuccess = (username) =>
  ({ type: Types.LOGIN_SUCCESS, username })

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temp) => ({ type: Types.TEMPERATURE_RECEIVE, temp })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })

const requestQuestions = () => ({ type: Types.QUESTIONS_REQUEST })
const receiveQuestions = (questions) => ({ type: Types.QUESTIONS_RECEIVE, questions })
const receiveQuestionsFailure = () => ({ type: Types.QUESTIONS_FAILURE })

const updateInterviewData = (payload) => ({ type: Types.UPDATE_INTERVIEW_DATA, payload })
const updateInterviewName = (name) => ({ type: Types.UPDATE_INTERVIEW_NAME, name })

const updateTimeControl = (index) => ({ type: Types.UPDATE_TIME_CONTROL, index })

const startIntervieweeTime = (timerID) => ({ type: Types.START_INTERVIEWEE_TIME, timerID })
const startInterviewerTime = (timerID) => ({ type: Types.START_INTERVIEWER_TIME, timerID })

const incrementIntervieweeTime = () => ({ type: Types.INCREMENT_INTERVIEWEE_TIME })
const incrementInterviewerTime = () => ({ type: Types.INCREMENT_INTERVIEWER_TIME })

const stopTimer = () => ({ type: Types.STOP_TIMER })

/**
 Makes available all the action creators we've created.
 */
export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  logout,
  startup,
  requestTemperature,
  receiveTemperature,
  receiveTemperatureFailure,
  requestQuestions,
  receiveQuestions,
  receiveQuestionsFailure,
  updateInterviewData,
  updateInterviewName,
  updateTimeControl,
  startIntervieweeTime,
  startInterviewerTime,
  incrementIntervieweeTime,
  incrementInterviewerTime,
  stopTimer,
}
