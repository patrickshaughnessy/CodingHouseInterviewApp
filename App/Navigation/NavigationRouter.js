import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router

import IntervieweeNameScreen from '../Containers/IntervieweeNameScreen'
import BackgroundScreen from '../Containers/BackgroundScreen'
import PersonalityScreen from '../Containers/PersonalityScreen'
import TechnicalScreen from '../Containers/TechnicalScreen'
import InferredScreen from '../Containers/InferredScreen'
import LoginScreen from '../Containers/LoginScreen'
// import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
// import ListviewExample from '../Containers/ListviewExample'
// import ListviewGridExample from '../Containers/ListviewGridExample'
// import MapviewExample from '../Containers/MapviewExample'
// import APITestingScreen from '../Containers/APITestingScreen'
// import ThemeScreen from '../Containers/ThemeScreen'
// import DeviceInfoScreen from '../Containers/DeviceInfoScreen'

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
            <Scene key='personality' component={PersonalityScreen} title='Personality' />
            <Scene key='technical' component={TechnicalScreen} title='Technical' />
            <Scene key='inferred' component={InferredScreen} title='Inferred' />
            {/* <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} /> */}
            {/* <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
            <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
            <Scene key='mapviewExample' component={MapviewExample} title='Mapview Example' />
            <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
            <Scene key='theme' component={ThemeScreen} title='Theme' />
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' /> */}
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
