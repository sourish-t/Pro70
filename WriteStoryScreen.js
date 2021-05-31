import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';


export default class WriteStoryScreen extends React.Component{

    render(){
        return (
        <View style={styles.container}>
        <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'Write Your Story Here',
            style: { color: 'Black', fontSize: 15 },
          }}
        />

        <TextInput

        style={styles.title}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}

        />

        <TextInput
        
        style={styles.Author}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        
        />

        <TextInput
        
        style={styles.writeStory}
          onChangeText={text => {
            this.setState({ text: text });
            multiline:{true}
          }}
          value={this.state.text}
        
        />

        <TouchableOpacity styles = {styles.submitButton}>

            onPress={() =>{
                this.setState({})
            }}

        </TouchableOpacity>

        </View>
        )

    }
}

const styles = StyleSheet.create ({

    container:{
        flex: 1,
    backgroundColor: 'cyan',
    },

    title:{
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    },

    Author:{
    marginTop: 100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    },

    writeStory:{

    marginTop: 150,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    }
    
})