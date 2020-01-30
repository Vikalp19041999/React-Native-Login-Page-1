import *  as React from 'react'
import { View, StyleSheet, Image, StatusBar, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behaviour="padding" style={styles.container}>
        <StatusBar backgroundColor="#bdc3c7" barStyle="light-content"></StatusBar>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./app/images/image.png')}></Image>
          <Text style={styles.textHeading}>An app made using the React Native</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Username"
            placeholderTextColor="#0984e3"
            autoCapitalize="none"
            returnKeyType='next'
            onSubmitEditing={() => this.passwordInput}
          />
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#0984e3"
            autoCapitalize="none"
            secureTextEntry={true}
            returnKeyType='go'
            ref={(input) => this.passwordInput = input}
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    backgroundColor: '#0984e3'
  },
  appTitle: {
    fontSize: 20,
    color: 'snow'
  },
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  image: {
    width: 130,
    height: 130
  },
  textHeading: {
    color: 'black',
    marginTop: 10,
    width: 150,
    textAlign: 'center',
    opacity: 0.9
  },
  formContainer: {
    padding: 30,
    marginBottom:120
  },
  input: {
    height: 40,
    backgroundColor: 'snow',
    color: 'black',
    marginBottom: 20
  },
  buttonContainer: {
    backgroundColor: '#0984e3',
    paddingVertical: 10,
    alignSelf:'auto',
    height: 40,
  },
  buttonText: {
    textAlign: 'center',
    color: 'snow',
    fontWeight: '700'
  },
})
