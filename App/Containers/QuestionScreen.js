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
import Footer from './Footer'

import styles from './Styles/QuestionScreenStyle'

import Immutable from 'seamless-immutable'

class QuestionScreen extends Component {
  constructor(props) {
    super(props)

    const { questions, answers, viewing } = this.props

    const rowHasChanged = (r1, r2) => r1 !== r2

    const ds = new ListView.DataSource({rowHasChanged})

    const a = answers[viewing] ? answers[viewing].asMutable({deep: true}) : answers.asMutable()
    const qX = questions[viewing].asMutable({deep: true})
    const qa = qX.map(q => {
      q.answers = a[q._id] ? a[q._id] : []
      return q
    })

    this.state = {
      dataSource: ds.cloneWithRows(qa)
    }

    this._scrollView
  }

  componentWillReceiveProps (newProps) {
    if (newProps) {
      const { questions, answers, viewing } = newProps
      const a = answers[viewing] ? answers[viewing].asMutable({deep: true}) : answers.asMutable()
      const qX = questions[viewing].asMutable({deep: true})
      const qa = qX.map(q => {
        q.answers = a[q._id] ? a[q._id] : []
        return q
      })
      console.log('will receive props', qa);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(qa)
      })
    }
  }

  _renderRow = (rowData) => {
    let { updateInterviewData } = this.props
    return (
      <View style={styles.row}>
        <Question
          {...rowData}
          updateInterviewData={updateInterviewData}
        />
      </View>
    )
  }

  render() {
    const { viewing } = this.props;
    return (
      <View style={styles.outerContainer}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>

            <Text style={styles.title}>{viewing.slice(0,1).toUpperCase() + viewing.slice(1)}</Text>

            <ListView
              contentContainerStyle={styles.listContainer}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
            />

          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions.questions,
    answers: state.interview.answers,
    viewing: state.interview.viewing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateInterviewData: (payload) => dispatch(Actions.updateInterviewData(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen)
