import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const SingleNoteSummaryComponent = (props) => {
     return <View backgroundColor={randbg()} style={styles.textViewStyle}>
     <Text>{props.myNoteDate.toDateString()}</Text>
            <Text style={styles.textProperties}>{props.myNoteText}</Text>
            </View>
}

const randbg = () => {
    var red = Math.floor(Math.random() * 255)
    var blue = Math.floor(Math.random() * 255)
    var green = Math.floor(Math.random() * 255)

    //String Interpolation
    //In a string -> insert a value of some other data type
    //`` '' ""

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    'textProperties': {
        fontSize: 20
    },
    'textViewStyle': {
        height: 150,
        width: 150,
        margin: 10,
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default SingleNoteSummaryComponent;