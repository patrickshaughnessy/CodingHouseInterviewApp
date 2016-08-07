import React, {PropTypes} from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  LayoutAnimation,
  View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'

// styles
import styles from './Styles/IntervieweeNameScreenStyle'

class IntervieweeNameScreen extends React.Component {

  static propTypes = {
    background: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: 'Bob Jones'
    }
  }

  handleChangeName = (text) => {
    this.setState({ name: text })
  }

  startInterview = () => {
    this.props.background({ title: this.state.name });
  }

  render () {
    let { name } = this.state
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Input interviewee's name to begin.
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Name</Text>
              <TextInput
                ref='name'
                value={name}
                style={styles.textInput}
                keyboardType='default'
                returnKeyType='go'
                onChangeText={this.handleChangeName}
                underlineColorAndroid='transparent'
                onSubmitEditing={this.startInterview}
                placeholder='Bob Jones' />
            </View>
          </View>

          <RoundedButton onPress={this.startInterview}>
            Start Interviewing!
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    background: NavigationActions.background
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntervieweeNameScreen)
