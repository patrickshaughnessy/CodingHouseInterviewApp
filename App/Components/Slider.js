import React from 'react'
import {
  View,
  Text,
  Slider
} from 'react-native'
import styles, { tint } from './Styles/SliderStyle'

export default class SliderComponent extends React.Component {

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
    let { question, position, range, defaultValue, onChange, answer } = this.props
    let rangeDisplay = []
    for (let i = 1; i <= range; i++) {
      rangeDisplay.push(<Text key={i} style={styles.rangeText}>{i}</Text>)
    }

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{question}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Slider
            minimumValue={1}
            maximumValue={range}
            minimumTrackTintColor={tint.green}
            maximumTrackTintColor={tint.red}
            step={1}
            value={answer || defaultValue}
            onSlidingComplete={(value) => onChange(position, value)}
          />
          <View style={styles.rangeDisplay}>
            {rangeDisplay}
          </View>
        </View>
      </View>
    )
  }
}
