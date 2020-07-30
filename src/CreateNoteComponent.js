import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native'


const CreateNoteComponent = (props) => {

    const [newNoteText, setNewNoteText] = useState('')

    return <View>
        <TextInput 
    style={styles.textInputStyles}
    autoCorrect={false}
    autoCapitalize="none"
    multiline={true}
    value={newNoteText}
    onChangeText={(currentText) => setNewNoteText(currentText)}
    /><Button title='Create Node' onPress={() => {
        props.onCreateButtonPress(newNoteText)
        setNewNoteText('')
    }}></Button></View>      
}

const styles = StyleSheet.create({
    textInputStyles: {
        borderWidth: 5,
        width: 320,
        height: 140,
        borderRadius: 10
    }
});

export default CreateNoteComponent;