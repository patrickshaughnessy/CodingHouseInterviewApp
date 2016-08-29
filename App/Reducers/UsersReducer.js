import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  all: null
})

const receiveUsers = (state, action) => {
  let { users } = action
  return state.merge({
    all: users
  })
}

const ACTION_HANDLERS = {
  [Types.RECEIVE_USERS]: receiveUsers
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
