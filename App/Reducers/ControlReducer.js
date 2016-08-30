import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  viewing: null,
  fetching: false,
  error: null,
  success: null
})

const changeViewing = (state, action) => {
  return state.merge({
    viewing: action.category
  })
}

const request = (state, action) =>
  state.merge({
    fetching: true,
    error: null,
    success: null
  })

const receive = (state, action) =>
  state.merge({
    fetching: false,
    error: null
  })

const failure = (state, action) =>
  state.merge({
    fetching: false,
    error: action.message || 'An unknown error occurred'
  })

const reset = (state, action) =>
  state.merge({
    viewing: null,
    fetching: false,
    error: null,
    success: null
  })

const ACTION_HANDLERS = {
  [Types.LOGIN]: request,
  [Types.LOGIN_SUCCESS]: receive,
  [Types.LOGIN_FAILURE]: failure,
  [Types.REQUEST_USERS]: request,
  [Types.RECEIVE_USERS]: receive,
  [Types.RECEIVE_USERS_FAILURE]: failure,
  [Types.VIEW_QUESTIONS_FOR_CATEGORY]: changeViewing,
  [Types.REQUEST_QUESTIONS]: request,
  [Types.RECEIVE_QUESTIONS]: receive,
  [Types.RECEIVE_QUESTIONS_FAILURE]: failure,
  [Types.SUBMIT_INTERVIEW]: request,
  [Types.SUBMIT_INTERVIEW_SUCCESS]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
