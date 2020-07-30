import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {

  const [ULI, SULI] = useState(false)


  if(firebase.apps.length === 0){
  var firebaseConfig = {
    apiKey: " API HIDDEN ",
    authDomain: "rn-notesapp.firebaseapp.com",
    databaseURL: "https://rn-notesapp.firebaseio.com",
    projectId: "rn-notesapp",
    storageBucket: "rn-notesapp.appspot.com",
    messagingSenderId: "610604084619",
    appId: "1:610604084619:web:dd9ef2035b20d92eb8138e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }


  firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
      SULI(false)
    }
    else{
      SULI(true)
    }
  })

  if(ULI == false){
    return ( <View style={styles.container}>
      <LoginScreenComponent/>
    </View>);
  }
  else{
    return (<View style={styles.container}>
      <NotesScreenComponent/>
    </View>);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
