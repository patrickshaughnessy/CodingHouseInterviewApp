import {take, call, put, select} from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

export default (api) => {
  function * worker (token) {
    const response = yield call(api.getUsers, token)

    if (response.ok) {
      const { users } = response.data
      yield put(Actions.receiveUsers({ users: JSON.parse(users) }))
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.receiveUsersFailure({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions.receiveUsersFailure({ message: problem, status }))
    }
  }

  function * watcher () {
    while (true) {
      yield take(Types.REQUEST_USERS)
      const token = yield select((state) => state.user.token)
      if (token) {
        yield call(worker, token)
      }
    }
  }

  return {
    watcher,
    worker
  }
}
