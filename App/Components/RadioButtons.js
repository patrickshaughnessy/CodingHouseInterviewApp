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
    let { options, question, position, onChange, answer } = this.props
    if (position === 0) {
      return (
        <View style={styles.container}>
          <View style={styles.radioContainer}>
            {options.map((option, i) => {
              return(
                <View style={styles.radioContainerInner} key={i}>
                  <TouchableOpacity onPress={() => onChange(position, option)}>
                    <View style={styles.radioOuter}>
                      { answer == option ? <View style={styles.radioInner}/> : null }
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.optionText}>{option}</Text>
                </View>
              )
            })}
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.question}>{question}</Text>
          <View style={styles.radioContainer}>
          {options.map((option, i) => {
            return(
              <View style={styles.radioContainerInner} key={i}>
                <TouchableOpacity onPress={() => onChange(position, option)}>
                  <View style={styles.radioOuter}>
                    { answer === option ? <View style={styles.radioInner}/> : null }
                  </View>
                </TouchableOpacity>
                <Text style={styles.optionText}>{option}</Text>
              </View>
              )
            })}
          </View>

        </View>
      )
    }
  }
}
