import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  questions: null,
  categories: null,
  fetching: null,
  errorMessage: null,
  errorCode: null,
})

const mapQuestionsToCategories = (categories) => {
  return categories.reduce((a, category) => {
    let { category: {name: name}, questions } = category
    a[name] = questions;
    return a;
  }, {})
}

// request questions
const request = (state, action) =>
  state.merge({
    fetching: true,
    errorMessage: null,
    errorCode: null
  })

// receive questions
const receive = (state, action) => {
  let { categories } = action
  return state.merge({
    fetching: false,
    errorCode: null,
    errorMessage: null,
    questions: mapQuestionsToCategories(categories),
    categories: categories.map(({category}) => category.name)
  })
}

// questions failure
const failure = (state, action) => {
  let { message, status } = action
  return state.merge({
    fetching: false,
    errorMessage: message,
    errorCode: status
  })
}

const reset = (state, action) => {
  // any question categories will remain on the state, but that's ok
  return state.merge({
    fetching: false,
    errorMessage: null,
    errorCode: null
  })
}

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.QUESTIONS_REQUEST]: request,
  [Types.QUESTIONS_RECEIVE]: receive,
  [Types.QUESTIONS_FAILURE]: failure,
  [Types.RESET]: reset,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
