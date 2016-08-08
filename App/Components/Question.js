import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ListView
} from 'react-native'
import styles from './Styles/QuestionStyle'
import { Metrics } from '../Themes'

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';

import RadioButtons from './RadioButtons'
import InputBox from './InputBox'
import Slider from './Slider'
import Checkbox from './Checkbox'

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

  constructor (props) {
    super(props);

    this.state = {
      collapsed: true
    }

  }

  _toggleCollapsed = (e) => {
    this.setState({collapsed: !this.state.collapsed})
  }

  _onUpdateInterviewData = (level, userInput) => {
    let { category, _id, answers, updateInterviewData } = this.props

    answers[level] = userInput;

    let payload = {};
    payload[category] = {};
    payload[category][_id] = answers
    updateInterviewData(payload)
  }

  _renderContent () {
    let { answers } = this.props
    return this.props.levels.map((level, i) => {
      switch (level.type) {
        case 'INPUT_BOX':
          return <InputBox position={i} answer={answers[i]} onChange={this._onUpdateInterviewData} {...level} />
        case 'RADIO':
          return <RadioButtons position={i} answer={answers[i]} onChange={this._onUpdateInterviewData} {...level} />
        case 'SLIDER':
          return <Slider position={i} answer={answers[i]} onChange={this._onUpdateInterviewData} {...level} />
        case 'CHECKBOX':
          return <Checkbox position={i} answer={answers[i]} onChange={this._onUpdateInterviewData} {...level} />
      }
    })
  }

  render () {
    let { question, type } = this.props.levels[0]

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._toggleCollapsed}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{question}</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.collapsed} align="center">
          <View style={styles.question}>
            {this._renderContent()}
          </View>
        </Collapsible>
      </View>
    )
  }
}
