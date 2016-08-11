import Types from './Types'

const attemptLogin = (email, password) =>
  ({ type: Types.LOGIN_ATTEMPT, email, password })

const loginSuccess = (payload) =>
  ({ type: Types.LOGIN_SUCCESS, ...payload })

const loginFailure = (payload) =>
  ({ type: Types.LOGIN_FAILURE, ...payload })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temp) => ({ type: Types.TEMPERATURE_RECEIVE, temp })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })

const requestQuestions = (user) => ({ type: Types.QUESTIONS_REQUEST, user })
const receiveQuestions = (payload) => ({ type: Types.QUESTIONS_RECEIVE, ...payload })
const receiveQuestionsFailure = (payload) => ({ type: Types.QUESTIONS_FAILURE, ...payload })

const requestUsers = (token) => ({ type: Types.USERS_REQUEST, token })
const receiveUsers = (payload) => ({ type: Types.USERS_RECEIVE, ...payload })
const receiveUsersFailure = (payload) => ({ type: Types.USERS_FAILURE, ...payload })

const updateInterviewee = (user) => ({ type: Types.UPDATE_INTERVIEWEE, user })
const updateInterviewData = (payload) => ({ type: Types.UPDATE_INTERVIEW_DATA, payload })

const updateTimeControl = (index) => ({ type: Types.UPDATE_TIME_CONTROL, index })

const startIntervieweeTime = (timerID) => ({ type: Types.START_INTERVIEWEE_TIME, timerID })
const startInterviewerTime = (timerID) => ({ type: Types.START_INTERVIEWER_TIME, timerID })

const incrementIntervieweeTime = () => ({ type: Types.INCREMENT_INTERVIEWEE_TIME })
const incrementInterviewerTime = () => ({ type: Types.INCREMENT_INTERVIEWER_TIME })

const stopTimer = () => ({ type: Types.STOP_TIMER })

const reset = () => ({ type: Types.RESET })

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

  requestUsers,
  receiveUsers,
  receiveUsersFailure,

  updateInterviewee,
  updateInterviewData,

  updateTimeControl,

  startIntervieweeTime,
  startInterviewerTime,
  incrementIntervieweeTime,
  incrementInterviewerTime,

  stopTimer,

  reset,
}
