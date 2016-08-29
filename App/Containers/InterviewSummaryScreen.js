import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// import Actions from '../Actions/Creators'
// import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/InterviewSummaryScreenStyle'

class InterviewSummaryScreen extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  componentDidMount () {
    const { interview, questions } = this.props
    console.log(interview, questions)
  }

  _renderInterview = () => {
    const { questions } = this.props
    let categories = []
    for (let category in questions) {
      console.log(category)
      categories.push(<Text style={styles.text} key={category}>{category}</Text>)
    }
    return categories
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>InterviewSummaryScreen Container</Text>
        {this._renderInterview()}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    interview: state.interview,
    questions: state.questions.questions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewSummaryScreen)
