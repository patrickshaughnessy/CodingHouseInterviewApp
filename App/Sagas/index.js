import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import { watchStartup } from './StartupSaga'

import AuthSaga from './AuthSaga'
import SettingsSaga from './SettingsSaga'
import UsersSaga from './UsersSaga'
import InterviewSaga from './InterviewSaga'

const api = API.create()

export default function * root () {
  yield fork(watchStartup)
  yield fork(AuthSaga(api).watcher)
  yield fork(SettingsSaga(api).watcher)
  yield fork(UsersSaga(api).watcher)
  yield fork(InterviewSaga(api).watcher)
}
