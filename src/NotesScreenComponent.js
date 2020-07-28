import React from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import SingleNoteSummaryComponent from './SingleNoteSummaryComponent';

const NotesScreenComponent = () => {

    data = [
        {"date": "06-12-1999", "text": "My Birthdate"},
        {"date": "27-07-2020", "text": "Today"},
        {"date": "27-07-2020", "text": "Today"},
        {"date": "27-07-2020", "text": "Today"},
        {"date": "27-07-2020", "text": "Today"},
        {"date": "27-07-2020", "text": "Today"},
        {"date": "27-07-2020", "text": "Today"},
        {"date": "27-07-2020", "text": "Today"},
        {"date": "27-07-2020", "text": "Today"}
    ]

    //to write javascript inside jsx, i need to enclose javascript code in {}

    //item, index
    return <View style={styles.viewProperities}>
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
            return <SingleNoteSummaryComponent myNoteText={item.text}/>
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