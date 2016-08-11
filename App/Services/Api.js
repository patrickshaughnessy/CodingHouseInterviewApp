// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Reactotron from 'reactotron'
import DebugSettings from '../Config/DebugSettings'
console.log(DebugSettings.baseURL)
// our "constructor"
const create = (baseURL = DebugSettings.baseURL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({baseURL})

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.
  const addMonitor = api.addMonitor((response) => {
    // Monitors are called passively after every request.
    Reactotron.apiLog(response)
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const login = (email, password) => api.post('/auth', { email, password })
  const getQuestions = (user) => api.get(`/api/settings/${user._id}`)
  const getUsers = (token) => api.post(`/api/users`, { token })

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.


  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    login,
    getQuestions,
    getUsers,
    // additional utilities
    addMonitor
  }
}

// let's return back our create method as the default.
export default {
  create
}
