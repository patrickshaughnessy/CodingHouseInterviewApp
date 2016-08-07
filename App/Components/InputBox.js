import React from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'
import styles from './Styles/InputBoxStyle'

export default class InputBox extends React.Component {

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: React.PropTypes.object,
  //   someSetting: React.PropTypes.bool.isRequired
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    let { question, position, placeholder } = this.props

    if (position === 0) {
      return (
        <View style={styles.container}>
          <TextInput style={styles.textInput}
            placeholder={placeholder}
          />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{question}</Text>
          <TextInput style={styles.textInput}
            placeholder={placeholder}
          />
        </View>
      )
    }
  }
}
