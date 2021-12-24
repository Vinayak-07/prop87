import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase'


export default class Loading extends Component {
    
    checkIfLoggedIn = ()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                this.props.navigation.navigate('DashBoard')
            } else {
                this.props.navigation.navigate('Login');
            }
        });
    }
    componentDidMount(){
        this.checkIfLoggedIn()
    }    
    render() {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
}
