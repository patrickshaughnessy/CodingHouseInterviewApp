import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './Styles/QuestionComponentStyle'

import RadioButtons from './RadioButtons'

export default class QuestionComponent extends React.Component {
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
    const { type, next } = this.props;
    let display;

    switch (type) {
      case 'INPUT_BOX':
        // display = <InputBox />
        break;
      case 'RADIO':
        display = <RadioButtons {...this.props} />
        break;
    }

    return (
      <View style={styles.container}>
        {display}
        {/* { next ? <QuestionComponent {...next} /> : null } */}
      </View>
    )
  }
}
