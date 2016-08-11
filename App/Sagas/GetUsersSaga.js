import {take, call, put} from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

export default (api) => {
  function * worker (token) {
    const response = yield call(api.getUsers, token)

    if (response.ok) {
      const { users } = response.data
      yield put(Actions.receiveUsers({ users: JSON.parse(users) }))
    } else {
      const { status, data: {message} } = response
      yield put(Actions.receiveUsersFailure({ message, status }))
    }
  }

  function * watcher () {
    while (true) {
      const { token } = yield take(Types.USERS_REQUEST)
      yield call(worker, token)
    }
  }

  return {
    watcher,
    worker
  }
}
