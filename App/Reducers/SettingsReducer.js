import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  categories: []
})

const receiveSettings = (state, action) => {
  const { result } = action.payload
  return state.merge({
    categories: result.categories
  })
}

const reset = (state, action) =>
  state.set('categories', [])

const ACTION_HANDLERS = {
  [Types.RECEIVE_SETTINGS]: receiveSettings,
  [Types.LOGOUT]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
