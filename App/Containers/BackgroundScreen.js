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

import styles from './Styles/BackgroundScreenStyle'

const QUESTIONS = [
  {
    id: 1,
    // interviewID: 1,
    question: 'Where are you from?',
    placeholder: 'United States',
    content: ''
  },
  {
    id: 2,
    // interviewID: 1,
    question: 'Are you a US citizen?',
    options: ['Yes', 'No'],
    value: 'Yes',
    next: {
      question: 'Do you have a work permit?',
      options: ['Yes', 'No'],
      value: 'Yes',
      next: {
        question: 'The cost of the bootcamp is $14K, are you aware of that?',
        content: ''
      }
    }
  },
  {
    id: 3,
    // interviewID: 1,
    title: 'Where did you go to school',
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
  state = {
    activeQuestion: '',
  };

  _toggleExpanded = (question) => {
    this.setState({ activeQuestion: question.id === this.state.activeQuestion ? '' : question.id });
  }

  _setSection(section) {
    this.setState({ activeSection: section });
  }

  _renderHeader(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.question}</Text>
      </Animatable.View>
    );
  }

  _renderContent(section, i, isActive) {
    return (
      <Animatable.View duration={400}  style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        {/* <Animatable.View animation={isActive ? 'slideInUp' : undefined}> */}
          <TextInput
            placeholder={section.placeholder}
            multiline={true}
            numberOfLines={5}
            style={styles.contentInput}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        {/* </Animatable.View> */}
      </Animatable.View>
    );
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Background</Text>

            {/* <View style={styles.selectors}>
              <Text style={styles.selectTitle}>Select:</Text>
              {SELECTORS.map(selector => (
                <TouchableHighlight key={selector.title} onPress={this._setSection.bind(this, selector.value)}>
                  <View style={styles.selector}>
                    <Text style={selector.value === this.state.activeSection && styles.activeSelector}>
                      {selector.title}
                    </Text>
                  </View>
                </TouchableHighlight>
              ))}
            </View> */}

            <TouchableHighlight onPress={this._toggleExpanded.bind(this, QUESTIONS[0])}>
              <View style={styles.header}>
                <Text style={styles.headerText}>fs</Text>
              </View>
            </TouchableHighlight>
            <Collapsible collapsed={this.state.activeQuestion !== QUESTIONS[0].id} align="center">
              <View style={styles.content}>
                <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
              </View>
            </Collapsible>
            <TouchableHighlight onPress={this._toggleExpanded.bind(this, QUESTIONS[1])}>
              <View style={styles.header}>
                <Text style={styles.headerText}>fs</Text>
              </View>
            </TouchableHighlight>
            <Collapsible collapsed={this.state.activeQuestion !== QUESTIONS[1].id} align="center">
              <View style={styles.content}>
                <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
              </View>
            </Collapsible>
            {/* <Accordion
              activeSection={this.state.activeSection}
              sections={CONTENT}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent.bind(this)}
              duration={400}
              onChange={this._setSection.bind(this)}
            /> */}

          </View>
        </ScrollView>
        <View >
          <Text style={styles.footer}>Footer</Text>
        </View>
      </View>
    );
  }
}
