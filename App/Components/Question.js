import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './Styles/QuestionStyle'

import RadioButtons from './RadioButtons'

export default class Question extends React.Component {
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
        <Text>
          This will be a question
        </Text>
        {/* {display} */}
        {/* { next ? <Question {...next} /> : null } */}
      </View>
    )
  }
}
