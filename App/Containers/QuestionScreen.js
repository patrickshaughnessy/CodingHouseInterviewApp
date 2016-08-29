import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
  ListView
} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'

import Question from '../Components/Question'
import Footer from './Footer'

import styles from './Styles/QuestionScreenStyle'

class QuestionScreen extends Component {
  constructor (props) {
    super(props)

    const { settings, questionsById, answers, viewing } = this.props

    const rowHasChanged = (r1, r2) => r1 !== r2

    const ds = new ListView.DataSource({rowHasChanged})

    const a = answers[viewing] ? answers[viewing].asMutable({deep: true}) : answers.asMutable()
    const qX = settings.find(setting => setting.category === viewing).questions.asMutable()
    const qa = qX.map(q => {
      let question = questionsById[q].asMutable({deep: true})
      question.answers = a[q] ? a[q] : []
      return question
    })

    this.state = {
      dataSource: ds.cloneWithRows(qa)
    }

    this._scrollView
  }

  componentWillReceiveProps (newProps) {
    const { settings, questionsById, answers, viewing } = newProps
    if (settings && answers && viewing) {
      const a = answers[viewing] ? answers[viewing].asMutable({deep: true}) : answers.asMutable()
      const qX = settings.find(setting => setting.category === viewing).questions.asMutable()
      const qa = qX.map(q => {
        let question = questionsById[q].asMutable({deep: true})
        question.answers = a[q] ? a[q] : []
        return question
      })

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(qa)
      })
    }
  }

  _renderRow = (rowData) => {
    let { updateInterviewData } = this.props
    console.log(rowData)
    return (
      <View style={styles.row}>
        <Question
          {...rowData}
          updateInterviewData={updateInterviewData}
        />
      </View>
    )
  }

  render () {
    const { viewing, categoriesById } = this.props
    return (
      <View style={styles.outerContainer}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>

            <Text style={styles.title}>{categoriesById[viewing].name}</Text>

            <ListView
              contentContainerStyle={styles.listContainer}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
            />

          </View>
        </ScrollView>
        <Footer />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    questionsById: state.questions.byId,
    categoriesById: state.categories.byId,
    settings: state.settings.categories,
    answers: state.interview.answers,
    viewing: state.control.viewing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateInterviewData: (payload) => dispatch(Actions.updateInterviewData(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen)
