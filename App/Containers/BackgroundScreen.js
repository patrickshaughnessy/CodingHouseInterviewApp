import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import QuestionComponent from '../Components/QuestionComponent'

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

export default class BackgroundScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeQuestion: '',
      inputs: {
        '2': {
          '1': 'Yes',
          '2': 'No',
          '3': 'Parents are rich'
        }
      }
    };
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
    console.log(this.state);
    return (
      <View style={styles.outerContainer}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Background</Text>

            {QUESTIONS.map(question => {
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
                      <QuestionComponent {...question} />
                    </View>
                  </Collapsible>
                </View>
              )
            })}

          </View>
        </ScrollView>
        <View >
          <Text style={styles.footer}>Footer</Text>
        </View>
      </View>
    );
  }
}
