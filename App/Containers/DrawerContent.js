import React, { Component } from 'react'
import {
  ScrollView,
  Image,
  Alert
} from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'
import { connect } from 'react-redux'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  _goToCategory = (category) => {
    const { interviewee, viewQuestionsForCategory } = this.props
    if (!interviewee) {
      Alert.alert(
        'Wait!',
        'Please select an interviewee before continuing',
        [
          {text: 'OK', onPress: () => this.toggleDrawer()}
        ]
      )
    } else {
      this.toggleDrawer()
      viewQuestionsForCategory(category)
      NavigationActions.questions({ title: interviewee.name })
    }
  }

  _logout = () => {
    const { logout } = this.props
    this.toggleDrawer()
    logout()
  }

  _home = () => {
    this.toggleDrawer()
    NavigationActions.interview()
  }

  render () {
    let { categories } = this.props
    const drawers = categories && categories.map((category) => <DrawerButton text={category.slice(0, 1).toUpperCase() + category.slice(1)} onPress={() => this._goToCategory(category)} />)

    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} resizeMode={'contain'} />
        <DrawerButton text='Home' onPress={() => this._home()} />
        {drawers}
        <DrawerButton text='Logout' onPress={() => this._logout()} />
      </ScrollView>
    )
  }

}

DrawerContent.propTypes = {
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    categories: state.questions.categories,
    viewing: state.questions.viewing,
    interviewee: state.interview.interviewee
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewQuestionsForCategory: (category) => dispatch(Actions.viewQuestionsForCategory(category)),
    logout: () => dispatch(Actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
