import React from 'react'
import {
  Modal,
  ScrollView,
  Text,
  View,
  ListView,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
// import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/InterviewSummaryScreenStyle'

import SummaryItem from '../Components/SummaryItem'
import SummaryFooter from './SummaryFooter'

class InterviewSummaryScreen extends React.Component {

  constructor (props) {
    super(props)

    const { settings, answers, categoriesById, questionsById } = this.props

    const rowHasChanged = (r1, r2) => r1 !== r2

    const ds = new ListView.DataSource({rowHasChanged})

    const interview = settings.map(setting => {
      const { category, questions } = setting
      const categoryName = categoriesById[category].name
      const questionsWithAnswers = questions.map(q => {
        let question = questionsById[q].asMutable()
        question.answers = answers[category] && answers[category][q] || []
        return question
      })
      return {
        categoryName,
        questionsWithAnswers
      }
    })
    console.log(interview)
    this.state = {
      dataSource: ds.cloneWithRows(interview)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.interviewee) {
      return NavigationActions.interview()
    }
  }

  _renderRow = (rowData) => {
    return (
      <View style={styles.row}>
        <SummaryItem {...rowData} />
      </View>
    )
  }

  render () {
    const { fetching } = this.props
    return (
      <View style={styles.outerContainer}>
        <ScrollView style={styles.scrollView}>
          <Modal
            style={styles.modal}
            transparent
            animationType='fade'
            visible={fetching}
            onRequestClose={() => console.log('close')}
          >
            <View style={styles.innerModalContainer}>
              <Text style={styles.modalText}>Submitting Interview...</Text>
              <ActivityIndicator size='large' />
            </View>
          </Modal>
          <View style={styles.container}>
            <Text style={styles.title}>Summary</Text>
            <ListView
              contentContainerStyle={styles.listContainer}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow}
            />
          </View>
        </ScrollView>
        <SummaryFooter />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    answers: state.interview.answers,
    settings: state.settings.categories,
    categoriesById: state.categories.byId,
    questionsById: state.questions.byId,
    fetching: state.control.fetching,
    interviewee: state.interview.interviewee
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewSummaryScreen)
