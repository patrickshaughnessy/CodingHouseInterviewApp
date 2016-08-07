import { take, put, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import R from 'ramda'

// process STARTUP actions
export function * watchStartup () {
  yield take(Types.STARTUP)
  const questions = yield select((state) => state.questions.background)
  // only fetch new questions when we don't have any yet
  if (R.isNil(questions)) {
    yield put(Actions.requestQuestions())
  }
}
