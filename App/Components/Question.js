import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import styles from './Styles/QuestionStyle'

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';

import RadioButtons from './RadioButtons'
import InputBox from './InputBox'

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

  _toggleCollapsed = () => {
    this.setState({collapsed: !this.state.collapsed})
  }

  _renderContent () {
    return this.props.levels.map((level, i) => {
      switch (level.type) {
        case 'INPUT_BOX':
          return <InputBox position={i} {...level} />
        case 'RADIO':
          return <RadioButtons position={i} {...level} />
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
            {/* <Question {...this.props} /> */}
          </View>
        </Collapsible>

        {/* {this._renderTitle()} */}
        {/* {this._renderLevels()} */}
        {/* {levels.map(question => {
          question.handleInput = this._handleInput;
          question.inputs = this.state.inputs[question.id];
          return (
            <View key={question.id}>
              <TouchableHighlight onPress={this._toggleExpanded.bind(this, question)}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>{question.question}</Text>
                </View>
              </TouchableHighlight>
              <Collapsible collapsed={this.state.activeQuestion !== question.id} align="center">
                <View style={styles.outerQuestionContainer}>
                  <Question {...question} />
                </View>
              </Collapsible>
            </View>
          )
        })} */}
      </View>
    )
  }
}
