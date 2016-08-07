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
import Actions from '../Actions/Creators';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import Question from '../Components/Question'

import styles from './Styles/BackgroundScreenStyle'

class BackgroundScreen extends Component {
  constructor(props) {
    super(props)

    const { questions, answers } = this.props
    console.log(answers)
    const rowHasChanged = (r1, r2) => r1 !== r2

    const ds = new ListView.DataSource({rowHasChanged})

    this.state = {
      dataSource: ds.cloneWithRows(questions)
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps) {
      
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.questions)
      })
    }
  }

  _renderRow = (rowData) => {
    let { updateInterviewData, answers } = this.props
    return (
      <View style={styles.row}>
        <Question {...rowData} answers={answers[rowData._id] || []} updateInterviewData={updateInterviewData} />
      </View>
    )
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
    questions: state.questions.background,
    answers: state.interview.background
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateInterviewData: (payload) => dispatch(Actions.updateInterviewData(payload)) // section, questionID, level, data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundScreen)
