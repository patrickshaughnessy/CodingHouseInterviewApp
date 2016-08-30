import React, { Component } from 'react'
import {
  ScrollView,
  Image,
  Alert,
  Text,
  View
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
    NavigationActions.login()
  }

  _home = () => {
    this.toggleDrawer()
    NavigationActions.interview()
  }

  _summary = () => {
    const { interviewee } = this.props
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
      NavigationActions.summary({ title: interviewee.name })
    }
  }

  render () {
    let { settings, categoriesById } = this.props
    const drawers = settings && settings.map((setting) => {
      const { category } = setting
      const name = categoriesById[category].name
      return (
        <DrawerButton
          text={name}
          onPress={() => this._goToCategory(category)}
        />
      )
    })
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} resizeMode={'contain'} />
        <View style={styles.categories}>
          <Text style={styles.text}>CATEGORIES</Text>
        </View>
        {drawers}
        <View style={styles.categories}>
          <Text style={styles.text}>NAVIGATION</Text>
        </View>
        <View style={styles.section}>
          <DrawerButton text='Summary' onPress={this._summary} />
        </View>
        <View style={styles.section}>
          <DrawerButton text='Home' onPress={this._home} />
        </View>
        <View style={styles.section}>
          <DrawerButton text='Logout' onPress={this._logout} />
        </View>
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
    settings: state.settings.categories,
    categoriesById: state.categories.byId,
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
