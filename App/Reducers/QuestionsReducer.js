import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  byId: {}
})

const receiveSettings = (state, action) => {
  const { entities } = action.payload
  return state.merge({
    byId: entities.questions
  })
}

const reset = (state, action) =>
  state.set('byId', {})

const ACTION_HANDLERS = {
  [Types.RECEIVE_SETTINGS]: receiveSettings,
  [Types.LOGOUT]: reset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
