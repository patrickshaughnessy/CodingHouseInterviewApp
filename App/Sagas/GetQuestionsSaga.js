import {take, call, put} from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

export default (api) => {
  function * worker (user) {
    const response = yield call(api.getQuestions, user)

    if (response.ok) {
      yield put(Actions.receiveQuestions(response.data))
    } else {
      console.log(response);
      const { status, data: {message} } = response
      yield put(Actions.receiveQuestionsFailure({ message, status }))
    }
  }

  function * watcher () {
    while (true) {
      const { user } = yield take(Types.QUESTIONS_REQUEST)
      yield call(worker, user)
    }
  }

  return {
    watcher,
    worker
  }
}
