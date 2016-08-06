import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/RadioButtonsStyle'

export default class RadioButtons extends React.Component {

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
    let { inputs, options, handleInput, currentLevel } = this.props
    return (
      <View style={styles.container}>
      {options.map((option, i) => {
        return(
          <View style={styles.radioContainer} key={option}>
            <TouchableOpacity onPress={() => handleInput(this.props, option)}>
              <View style={styles.radioOuter}>
              { inputs[currentLevel] === option ? <View style={styles.radioInner}/> : null }
              </View>
            </TouchableOpacity>
            <Text style={styles.radioText}>{option}</Text>
          </View>
        )
      })}
      </View>
    )
  }
}
