import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  users: null,
  errorCode: null,
  errorMessage: null,
  fetching: false
})

const request = (state, action) =>
  state.merge({ fetching: true })

const receive = (state, action) => {
  let { users } = action;
  return state.merge({
    users,
    fetching: false,
    errorCode: null,
    errorMessage: null
  })
}

const failure = (state, action) => {
  let { status, message } = action
  return state.merge({
    fetching: false,
    errorCode: status,
    errorMessage: message
  })
}

const reset = (state, action) =>
  state.merge({
    users: null,
    errorCode: null,
    errorMessage: null
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.USERS_REQUEST]: request,
  [Types.USERS_RECEIVE]: receive,
  [Types.USERS_FAILURE]: failure,
  [Types.RESET]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
