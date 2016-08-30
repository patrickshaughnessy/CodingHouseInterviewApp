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

const ACTION_HANDLERS = {
  [Types.LOGIN_SUCCESS]: success
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
