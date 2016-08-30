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

  const login = (credentials) => api.post('/auth', credentials)
  const getUsers = (token) => api.post('/api/users', { token })

  const getSettings = (user) => api.get(`/api/settings/${user._id}`)

  const submitInterview = (payload) => api.post('/api/interviews', payload)

  return {
    // a list of the API functions
    login,
    getUsers,
    getSettings,
    submitInterview,

    addMonitor
  }
}

export default {
  create
}
