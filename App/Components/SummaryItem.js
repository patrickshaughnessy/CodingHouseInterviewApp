import React from 'react'
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import styles from './Styles/SummaryItemStyle'

import Collapsible from 'react-native-collapsible'

export default class SummaryItem extends React.Component {
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
    super(props)

    this.state = {
      collapsed: true
    }
  }

  _toggleCollapsed = (e) => {
    this.setState({collapsed: !this.state.collapsed})
  }

  _onUpdateInterviewData = (level, userInput) => {
    let { category, _id, answers, updateInterviewData } = this.props

    answers[level] = userInput

    let payload = {answers: {}}
    payload.answers[category._id] = {}
    payload.answers[category._id][_id] = answers
    updateInterviewData(payload)
  }

  _renderContent () {
    let { questionsWithAnswers } = this.props
    // Only show questions that have at least one answer
    questionsWithAnswers = questionsWithAnswers.filter(q => q.answers.length)

    return questionsWithAnswers.map(q => {
      const levels = q.levels.map((l, i) => {
        let answer

        switch (l.type) {
          case 'INPUT_BOX':
            answer = q.answers[i] || '--'
            break
          case 'CHECKBOX':
            if (q.answers[i] !== undefined) {
              answer = q.answers[i] ? 'Yes' : 'No'
            } else {
              answer = '--'
            }
            break
          case 'SLIDER':
            answer = q.answers[i] && `${q.answers[i]}/${l.range}` || '--'
            break
          case 'RADIO':
            answer = q.answers[i] || '--'
            break
        }

        return (
          <View style={styles.question} key={l._id}>
            <Text style={{fontWeight: 'bold'}}>{l.question}</Text>
            <Text>--> {answer}</Text>
          </View>
        )
      })
      return (
        <View key={q._id}>
          {levels}
        </View>
      )
    })
  }

  render () {
    let { categoryName } = this.props

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._toggleCollapsed}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{categoryName}</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.collapsed} align='center'>
          <View style={styles.question}>
            {this._renderContent()}
          </View>
        </Collapsible>
      </View>
    )
  }
}
