import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

// attempts to login
export default (api) => {
  function * worker (email, password) {
    const response = yield call(api.login, email, password)

    if (response.ok) {
      const { token, user } = response.data
      yield put(Actions.loginSuccess({ token, user: JSON.parse(user) }))
      yield put(Actions.requestQuestions(JSON.parse(user)))
    } else {
      const { status, data: {message} } = response
      yield put(Actions.loginFailure({ message, status }))
    }
  }

  function * watcher () {
    while (true) {
      const { email, password } = yield take(Types.LOGIN_ATTEMPT)
      yield put(Actions.reset());
      yield call(worker, email, password)
    }
  }

  return {
    watcher,
    worker
  }
}
