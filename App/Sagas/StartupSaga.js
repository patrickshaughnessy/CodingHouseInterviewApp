import { take, put, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import R from 'ramda'

// process STARTUP actions
export function * watchStartup () {
  yield take(Types.STARTUP)

  // const user = yield select((state) => state.login.user)
  //
  // if (R.isNil(user)) {
  //   yield put(NavigationActions.login())
  // }

  const questions = yield select((state) => state.questions.background)
  if (R.isNil(questions)) {
    yield put(Actions.requestQuestions())
  }
}
