import immutablePersistenceTransform from '../Store/ImmutablePersistenceTransform'
import { persistentStoreBlacklist } from '../Reducers/'
import { AsyncStorage } from 'react-native'
// import createEncryptor from 'redux-persist-transform-encrypt'
// import createCompressor from 'redux-persist-transform-compress'
//
// const compressor = createCompressor()
//
// const encryptor = createEncryptor({
//   secretKey: 'some-secret'
// })

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: persistentStoreBlacklist,
    transforms: [
      immutablePersistenceTransform
      // compressor,
      // encryptor
    ]
  }
}

export default REDUX_PERSIST
