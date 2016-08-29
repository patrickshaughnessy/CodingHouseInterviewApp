import { combineReducers } from 'redux'

import UserReducer from './UserReducer'
import QuestionsReducer from './QuestionsReducer'
import CategoriesReducer from './CategoriesReducer'
import SettingsReducer from './SettingsReducer'
import ControlReducer from './ControlReducer'

import InterviewReducer from './InterviewReducer'
import UsersReducer from './UsersReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  user: UserReducer,
  questions: QuestionsReducer,
  categories: CategoriesReducer,
  settings: SettingsReducer,
  control: ControlReducer,
  interview: InterviewReducer,
  users: UsersReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = []
