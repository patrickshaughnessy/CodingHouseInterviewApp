import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5
    // borderColor: 'black',
    // borderWidth: 1,
  },
  question: {
    padding: 2,
    textAlign: 'center',
    fontSize: 16
  },
  radioContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5
    // borderColor: 'red',
    // borderWidth: 4,
  },
  radioContainerInner: {
    flex: 1,
    alignItems: 'center'
  },
  radioOuter: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000'
  },
  optionText: {
    textAlign: 'center',
    padding: 2,
    fontSize: 14
  }
})
