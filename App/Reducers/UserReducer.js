import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  token: null,
  info: null
})

const success = (state, action) => {
  let { token, user } = action
  return state.merge({
    token,
    info: user
  })
}

// // login failure
// const failure = (state, action) => {
//   let { status, message } = action
//   return state.merge({
//     attempting: false,
//     errorCode: status,
//     errorMessage: message
//   })
// }
//
// const reset = (state, action) =>
//   state.merge({
//     token: null,
//     user: null,
//     errorCode: null,
//     errorMessage: null
//   })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOGIN_SUCCESS]: success
  // [Types.LOGIN_FAILURE]: failure,
  // [Types.LOGOUT]: reset,
  // [Types.RESET]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
