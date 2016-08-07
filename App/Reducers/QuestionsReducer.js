import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  background: null,
  technical: null,
  personality: null,
  inferred: null,
  fetching: null,
  error: null,
})

// request questions
const request = (state, action) =>
  state.merge({
    fetching: true,
  })

// receive questions
const receive = (state, action) =>
  state.merge({
    fetching: false,
    error: null,
    ...action.questions
  })

// questions failure
const failure = (state, action) =>
  state.merge({
    fetching: false,
    error: true,
    questions: null
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.QUESTIONS_REQUEST]: request,
  [Types.QUESTIONS_RECEIVE]: receive,
  [Types.QUESTIONS_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
