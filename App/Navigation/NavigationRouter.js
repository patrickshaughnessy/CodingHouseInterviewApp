import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router

import IntervieweeNameScreen from '../Containers/IntervieweeNameScreen'
import BackgroundScreen from '../Containers/BackgroundScreen'
import LoginScreen from '../Containers/LoginScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='login' component={LoginScreen} direction='vertical' hideNavBar />
            <Scene initial key='interview' component={IntervieweeNameScreen} title='Interview' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='background' component={BackgroundScreen} title='Background' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
