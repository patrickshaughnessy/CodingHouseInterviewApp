import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/SliderStyle'

export default class Slider extends React.Component {

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
    return (
      <View style={styles.container}>
        <Text>Slider Component</Text>
      </View>
    )
  }
}
