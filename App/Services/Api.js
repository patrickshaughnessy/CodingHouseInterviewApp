// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Reactotron from 'reactotron'
import DebugSettings from '../Config/DebugSettings'

const create = (baseURL = DebugSettings.baseURL) => {
  const api = apisauce.create({baseURL})
  console.log(baseURL)

  let token

  const addMonitor = api.addMonitor((response) => {
    // Monitors are called passively after every request.
    Reactotron.apiLog(response)
  })

  const setToken = (newToken) => {
    token = newToken
  }

  const getToken = () => {
    return token || null
  }

  const login = (email, password) => api.post('/auth', { email, password })
  const getQuestions = (user) => api.get(`/api/settings/${user._id}`)
  const getUsers = () => api.post('/api/users', { token })

  return {
    // a list of the API functions
    login,
    getQuestions,
    getUsers,

    // additional utilities
    addMonitor,
    setToken,
    getToken
  }
}

export default {
  create
}
