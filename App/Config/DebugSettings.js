// Change baseURL settings to heroku for DEV and codinghouse domain for prod after initial development complete
// To run on simulator, use localhost
// To run on device, use IP + xip.io

const SETTINGS = {
  useFixtures: false,
  ezLogin: false,
  reduxLogging: true,
  baseURL: __DEV__ ? 'http://172.16.0.24.xip.io:3000' : 'https://chinterviewapp.herokuapp.com'
  // baseURL: __DEV__ ? 'http://localhost:3000' : 'https://chinterviewapp.herokuapp.com'
}

export default SETTINGS
