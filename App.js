import React, { Component } from 'react';
import { View, TabNavigator, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import SignIn from './src/components/SignIn';
import Worker from './src/components/Worker';

export default class App extends Component {
  // state = {
  //   loggedIn: false
  // };
  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: 'AIzaSyCtX6rFLFJ2stJYkPSGBla9_bdFnhl1ypI',
  //     authDomain: 'auth-d2aa2.firebaseapp.com',
  //     databaseURL: 'https://auth-d2aa2.firebaseio.com',
  //     projectId: 'auth-d2aa2',
  //     storageBucket: 'auth-d2aa2.appspot.com',
  //     messagingSenderId: '246571864217'
  // });
  // firebase.auth().onAuthStateChanged((user) => { //NOTE: firebase.User object~
  //   if (user) {
  //     this.setState({ loggedIn: true });
  //   } else {
  //     this.setState({ loggedIn: false });
  //   }
  // });
  // }//componentWillMount - firebase initialization

   renderContent() { //NOTE: I need a way to
  //   switch (this.state.loggedIn) {
  //     case true: return (
  //       <View>
  //       <Button text="Log out" onPress={() => firebase.auth().signOut()} />
  //       </View>
  //     );
  //     case false: return (
  //       <View style={styles.navigationStyle}>
  //         <Button text="Join us" />;
  //         <Button text="Sign in" />;
  //
  //       </View>
  //     );
  //     default: return (
  //       <View style={styles.spinnerStyle}>
  //       <Spinner size="large" />
  //       </View>
  //     );
  //   }//switch
   }//renderContent
  render() {
    return (
      <View>
      <Worker />
      {this.renderContent()}
      </View>

    );//return
  }//render
}//App

// const styles = {
//   spinnerStyle: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   navigationStyle: {
//     flex: 1
//   }
// };
