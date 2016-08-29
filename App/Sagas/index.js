import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import { watchStartup } from './StartupSaga'
import LoginSaga from './LoginSaga'
import QuestionsSaga from './QuestionsSaga'
import UsersSaga from './UsersSaga'

const api = API.create()

export default function * root () {
  yield fork(watchStartup)
  yield fork(LoginSaga(api).watcher)
  yield fork(QuestionsSaga(api).watcher)
  yield fork(UsersSaga(api).watcher)
}
