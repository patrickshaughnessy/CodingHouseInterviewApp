import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ListView
} from 'react-native';

import { connect } from 'react-redux';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import Question from '../Components/Question'

import styles from './Styles/BackgroundScreenStyle'

const QUESTIONS = [
  {
    id: 1,
    // interviewID: 1,
    type: 'INPUT_BOX',
    levels: 1,
    currentLevel: 1,
    question: 'Where are you from?',
    placeholder: 'United States',
    content: '',
  },
  {
    id: 2,
    // interviewID: 1,
    type: 'RADIO',
    levels: 3,
    currentLevel: 1,
    question: 'Are you a US citizen?',
    options: ['Yes', 'No'],
    value: 'Yes',
    next: {
      type: 'RADIO',
      currentLevel: 2,
      question: 'Do you have a work permit?',
      options: ['Yes', 'No'],
      value: 'Yes',
      next: {
        type: 'INPUT_BOX',
        currentLevel: 3,
        question: 'The cost of the bootcamp is $14K, are you aware of that?',
        content: ''
      }
    }
  },
  {
    id: 3,
    // interviewID: 1,
    question: 'Where did you go to school',
    placeholder: '',
    content: ''
  },
  {
    id: 4,
    // interviewID: 1,
    question: 'What was your major?',
    placeholder: '',
    next: {
      question: 'Did you graduate?',
      options: ['Yes', 'No'],
      value: 'Yes',
      next: {
        question: 'With what degree?',
        content: ''
      }
    }
  }
];

class BackgroundScreen extends Component {
  constructor(props) {
    super(props)

    // const { backgroundQuestions } = this.props

    const rowHasChanged = (r1, r2) => r1 !== r2

    const ds = new ListView.DataSource({rowHasChanged})

    this.state = {
      dataSource: ds.cloneWithRows(QUESTIONS)
    }
  }

  _renderRow (rowData) {
    return (
      <View style={styles.row}>
        <Question />
      </View>
    )
  }

  _toggleExpanded = (question) => {
    this.setState({ activeQuestion: question.id === this.state.activeQuestion ? '' : question.id });
  }

  _handleInput = (question, input) => {
    console.log('here', question, input)
    let { id, currentLevel } = question;
    let inputs = Object.assign({}, this.state.inputs)
    inputs[id][currentLevel] = input;
    this.setState({ inputs: inputs})
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Background</Text>

            <ListView
              contentContainerStyle={styles.listContainer}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
            />

            {/* {QUESTIONS.map(question => {
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
        </ScrollView>
        <View >
          <Text style={styles.footer}>Footer</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(BackgroundScreen)
