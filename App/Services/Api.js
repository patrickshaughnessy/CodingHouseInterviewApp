// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Reactotron from 'reactotron'
import DebugSettings from '../Config/DebugSettings'

const create = (baseURL = DebugSettings.baseURL) => {
  const api = apisauce.create({baseURL})

  const addMonitor = api.addMonitor((response) => {
    // Monitors are called passively after every request.
    Reactotron.apiLog(response)
  })

  const login = (email, password) => api.post('/auth', { email, password })
  const getQuestions = (user) => api.get(`/api/settings/${user._id}`)
  const getUsers = (token) => api.post('/api/users', { token })

  return {
    // a list of the API functions
    login,
    getQuestions,
    getUsers,

    // additional utilities
    addMonitor
  }
}

export default {
  create
}
