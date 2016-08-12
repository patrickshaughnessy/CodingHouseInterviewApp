import {take, call, put} from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

export default (api) => {
  function * worker () {
    const response = yield call(api.getUsers)

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
      yield take(Types.USERS_REQUEST)
      yield call(worker)
    }
  }

  return {
    watcher,
    worker
  }
}
