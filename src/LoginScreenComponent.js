import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button, ToastAndroid} from 'react-native';
import firebase from 'firebase';

const LoginScreenComponent = () => {

const [email, SetEmail] = useState("")
const [password, SetPassword] = useState("")

    return <View>
        <Text style={styles.textproperties}>Email: </Text>
        <TextInput style={styles.textinputproperties} value={email}
        onChangeText={(currentText) => SetEmail(currentText)}
        autoCapitalize='none' autoCorrect={false}/>
        <Text style={styles.textproperties}>Password: </Text>
        <TextInput style={styles.textinputproperties} 
        value={password}
        onChangeText={(currentText) => SetPassword(currentText)}
        secureTextEntry={true} autoCapitalize='none' autoCorrect={false}/>
        <View style={styles.buttonproperties}>
            <Button title='Login'
            onPress={() => {
                firebase.auth().signInWithEmailAndPassword(email, password)
                .catch((someerror) => {
                    if(someerror == "[Error: The password is invalid or the user does not have a password.]")
                    ToastAndroid.show("Incorrect Email or Password", ToastAndroid.SHORT)
                })
            }}/>
            </View>
        <View style={styles.buttonproperties}>
            <Button title='Sign Up'
            onPress={() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    SetEmail("")
                    SetPassword("")
                })
                .catch(() => {
                    ToastAndroid.show("Error", ToastAndroid.SHORT)
                })
            }}
            />
            </View>
    </View>
}

const styles = StyleSheet.create({
'textinputproperties': {
    borderWidth: 5,
    width: 300,
    padding: 10,
    fontSize: 20
},
'textproperties': {
    fontSize: 25
},
'buttonproperties': {
    margin: 20
}
});

export default LoginScreenComponent;