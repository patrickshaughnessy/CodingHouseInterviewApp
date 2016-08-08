import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/CheckboxStyle'

import { CheckboxField } from 'react-native-checkbox-field'

export default class Checkbox extends React.Component {

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
    const { question, position, label, answer, defaultValue, onChange } = this.props

    if (position === 0) {
      return (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <CheckboxField
              label={label}
              onSelect={() => onChange(position, !answer)}
              selected={ answer || defaultValue }
              containerStyle={styles.checkboxContainer}
              labelStyle={styles.labelStyle}
              labelSide={'right'}
            >
              <View style={answer ? styles.checked : styles.unchecked}></View>
            </CheckboxField>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>{question}</Text>
          </View>
          <View style={styles.innerContainer}>
            <CheckboxField
              label={label}
              onSelect={() => onChange(position, !answer)}
              selected={ answer || defaultValue }
              containerStyle={styles.checkboxContainer}
              labelStyle={styles.labelStyle}
              labelSide={'right'}
            >
              <View style={answer ? styles.checked : styles.unchecked}></View>
            </CheckboxField>
          </View>
        </View>
      )
    }

  }
}
