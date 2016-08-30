// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`
  STARTUP

  LOGIN
  LOGIN_SUCCESS
  LOGIN_FAILURE

  LOGOUT

  REQUEST_QUESTIONS
  RECEIVE_QUESTIONS
  RECEIVE_QUESTIONS_FAILURE

  REQUEST_SETTINGS
  RECEIVE_SETTINGS
  RECEIVE_SETTINGS_FAILURE

  REQUEST_USERS
  RECEIVE_USERS
  RECEIVE_USERS_FAILURE

  UPDATE_INTERVIEWEE
  UPDATE_INTERVIEW_DATA

  UPDATE_TIME_CONTROL
  START_INTERVIEWEE_TIME
  START_INTERVIEWER_TIME

  STOP_TIMER

  INCREMENT_INTERVIEWEE_TIME
  INCREMENT_INTERVIEWER_TIME

  RESET

  VIEW_QUESTIONS_FOR_CATEGORY

  CHANGE_VIEWING

  SUBMIT_INTERVIEW
  SUBMIT_INTERVIEW_SUCCESS
  SUBMIT_INTERVIEW_FAILURE
`)
