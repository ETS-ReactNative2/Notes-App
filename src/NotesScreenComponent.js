import React, { useState } from 'react';
import {Text, FlatList, View, StyleSheet, TextInput, Button} from 'react-native';
import SingleNoteSummaryComponent from './SingleNoteSummaryComponent';
import CreateNoteComponent from './CreateNoteComponent';
import firebase from 'firebase';

const NotesScreenComponent = () => {

    const [data, setData] = useState([]);

    const addNewNote = (text) => {
        setData([...data, {"text": text, "date": new Date}])
    }

    //to write javascript inside jsx, i need to enclose javascript code in {}

    //item, index
    return <View style={styles.viewProperities}>
        <Button title={"Log Out"}
        onPress={() => firebase.auth().signOut()
        }/>
        <CreateNoteComponent onCreateButtonPress={(text) => addNewNote(text)}/>
        <FlatList style={styles.listProperties}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={
            (item, index) => {
                console.log(index)
                return index.toString()
            }
        }
        numColumns={2} 
        renderItem={({item}) => { 
            return <SingleNoteSummaryComponent myNoteText={item.text} myNoteDate={item.date}/>
        }}/>
        </View>
}


const styles = StyleSheet.create({
    'viewProperities': {
        marginTop: 50
    },
    'listProperties': {
    }
});

export default NotesScreenComponent;