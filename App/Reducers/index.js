import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import QuestionsReducer from './QuestionsReducer'
import InterviewReducer from './InterviewReducer'
import UsersReducer from './UsersReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  login: LoginReducer,
  questions: QuestionsReducer,
  interview: InterviewReducer,
  users: UsersReducer
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = []
