import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  token: null,
  user: null,
  errorCode: null,
  errorMessage: null,
  attempting: false
})

// login attempts
const attempt = (state, action) =>
  state.merge({ attempting: true })

// successful logins
const success = (state, action) => {
  let { token, user } = action;
  return state.merge({
    attempting: false,
    errorCode: null,
    errorMessage: null,
    token: token,
    user: user
  })
}

// login failure
const failure = (state, action) => {
  let { status, message } = action
  return state.merge({
    attempting: false,
    errorCode: status,
    errorMessage: message
  })
}

// logout
// const logout = (state, action) =>
//   state.merge({ username: null })

const reset = (state, action) =>
  state.merge({
    token: null,
    user: null,
    errorCode: null,
    errorMessage: null
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOGIN_ATTEMPT]: attempt,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  // [Types.LOGOUT]: logout
  [Types.RESET]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
