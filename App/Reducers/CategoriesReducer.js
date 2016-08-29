import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  byId: {}
})

const receiveSettings = (state, action) => {
  const { entities } = action.payload
  return state.merge({
    byId: entities.categories
  })
}

const ACTION_HANDLERS = {
  [Types.RECEIVE_SETTINGS]: receiveSettings
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
