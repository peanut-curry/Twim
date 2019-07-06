import React, { Component } from 'react';
import { AppRegistry, Image, TouchableOpacity, View } from 'react-native';

export default class MainScreen extends Component {
    //callFun = () => {alret("change screen to mainscreen!") ;}

    render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/LOGO.png')} 
                style={{ alignItems: 'center' }} />
            <Image source={require('../assets/SUBTITLE.png')} 
                style={{ alignItems: 'center' }} />
            <TouchableOpacity activeOpacity={0.5} onPress={this.callFun}>
                <Image source={require('../assets/STARTBUTTON')} 
                    style={{ alignItems: 'center' }}/>
            </TouchableOpacity>
      </View>
        );
    }
}
