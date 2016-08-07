import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  name: null,
  background: {},
})

const updateData = (state, action) =>
  state.merge({...action.payload}, {deep: true})

const updateName = (state, action) =>
  state.merge({
    name: action.name
  })

// // receive questions
// const receive = (state, action) =>
//   state.merge({
//     fetching: false,
//     error: null,
//     ...action.questions
//   })
//
// // questions failure
// const failure = (state, action) =>
//   state.merge({
//     fetching: false,
//     error: true,
//     questions: null
//   })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.UPDATE_INTERVIEW_DATA]: updateData,
  [Types.UPDATE_INTERVIEW_NAME]: updateName,
  // [Types.QUESTIONS_RECEIVE]: receive,
  // [Types.QUESTIONS_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
