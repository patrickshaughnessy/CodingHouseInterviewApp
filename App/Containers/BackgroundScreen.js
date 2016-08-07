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

class BackgroundScreen extends Component {
  constructor(props) {
    super(props)

    const { questions } = this.props

    const rowHasChanged = (r1, r2) => r1 !== r2

    const ds = new ListView.DataSource({rowHasChanged})

    this.state = {
      dataSource: ds.cloneWithRows(questions)
    }
  }

  _renderRow (rowData) {
    let { question } = rowData.levels[0]
    return (
      <View style={styles.row}>
        {/* <Text style={styles.questionTitle}>{ question }</Text> */}
        <Question {...rowData} />
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
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.title}>Background</Text>

            <ListView
              contentContainerStyle={styles.listContainer}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
            />

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
    questions: state.questions.background
  }
}

export default connect(mapStateToProps)(BackgroundScreen)
