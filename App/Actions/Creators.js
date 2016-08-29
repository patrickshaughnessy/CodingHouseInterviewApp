import Types from './Types'

const startup = () => ({ type: Types.STARTUP })

const login = (credentials) => ({ type: Types.LOGIN, credentials })
const loginSuccess = (payload) => ({ type: Types.LOGIN_SUCCESS, ...payload })
const loginFailure = (payload) => ({ type: Types.LOGIN_FAILURE, ...payload })

const logout = () => ({ type: Types.LOGOUT })

const requestSettings = () => ({ type: Types.REQUEST_SETTINGS })
const receiveSettings = (payload) => ({ type: Types.RECEIVE_SETTINGS, ...payload })
const receiveSettingsFailure = (payload) => ({ type: Types.RECEIVE_SETTINGS_FAILURE, ...payload })

const requestUsers = () => ({ type: Types.REQUEST_USERS })
const receiveUsers = (payload) => ({ type: Types.RECEIVE_USERS, ...payload })
const receiveUsersFailure = (payload) => ({ type: Types.RECEIVE_USERS_FAILURE, ...payload })

const updateInterviewee = (user) => ({ type: Types.UPDATE_INTERVIEWEE, user })
const updateInterviewData = (payload) => ({ type: Types.UPDATE_INTERVIEW_DATA, payload })

const updateTimeControl = (index) => ({ type: Types.UPDATE_TIME_CONTROL, index })

const startIntervieweeTime = (timerID) => ({ type: Types.START_INTERVIEWEE_TIME, timerID })
const startInterviewerTime = (timerID) => ({ type: Types.START_INTERVIEWER_TIME, timerID })

const incrementIntervieweeTime = () => ({ type: Types.INCREMENT_INTERVIEWEE_TIME })
const incrementInterviewerTime = () => ({ type: Types.INCREMENT_INTERVIEWER_TIME })

const stopTimer = () => ({ type: Types.STOP_TIMER })

const reset = () => ({ type: Types.RESET })

const viewQuestionsForCategory = (category) => ({ type: Types.VIEW_QUESTIONS_FOR_CATEGORY, category })
/**
 Makes available all the action creators we've created.
 */
export default {
  startup,
  login,
  loginSuccess,
  loginFailure,
  logout,
  requestUsers,
  receiveUsers,
  receiveUsersFailure,
  requestSettings,
  receiveSettings,
  receiveSettingsFailure,
  updateInterviewee,
  updateInterviewData,
  updateTimeControl,
  startIntervieweeTime,
  startInterviewerTime,
  incrementIntervieweeTime,
  incrementInterviewerTime,
  stopTimer,
  reset,
  viewQuestionsForCategory
}
