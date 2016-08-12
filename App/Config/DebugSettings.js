// Change baseURL settings to heroku for DEV and codinghouse domain for prod after initial development complete

const SETTINGS = {
  useFixtures: false,
  ezLogin: false,
  reduxLogging: true,
  baseURL: __DEV__ ? 'http://localhost:1337' : 'https://chinterviewapp.herokuapp.com'
}

export default SETTINGS
