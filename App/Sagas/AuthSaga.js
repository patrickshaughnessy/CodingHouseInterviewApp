import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

// attempts to login
export default (api) => {
  function * worker (credentials) {
    const response = yield call(api.login, credentials)

    if (response.ok) {
      const { token, user } = response.data
      yield put(Actions.loginSuccess({ token, user: JSON.parse(user) }))
      yield put(Actions.requestSettings())
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.loginFailure({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions.loginFailure({ message: problem, status }))
    }
  }

  function * watcher () {
    while (true) {
      const { credentials } = yield take(Types.LOGIN)
      yield call(worker, credentials)
    }
  }

  return {
    watcher,
    worker
  }
}
