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

import styles from './Styles/BackgroundScreenStyle'

import Immutable from 'seamless-immutable'

class BackgroundScreen extends Component {
  constructor(props) {
    super(props)

    const { questions, answers } = this.props

    const rowHasChanged = (r1, r2) => r1 !== r2

    const ds = new ListView.DataSource({rowHasChanged})

    const a = answers.asMutable({deep: true})
    const qX = questions.asMutable({deep: true})
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
      const { questions, answers } = newProps
      const a = answers.asMutable({deep: true})
      const qX = questions.asMutable({deep: true})
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
        <Footer />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions.background,
    answers: state.interview.background,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateInterviewData: (payload) => dispatch(Actions.updateInterviewData(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundScreen)
