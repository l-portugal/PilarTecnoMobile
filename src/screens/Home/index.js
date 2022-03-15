import React, { Component, useCallback } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    ImageBackground,
    Alert
} from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './styles'


const image = require('../../assets/images/background.jpeg')
const icons = { size: 40, color: '#eee' }

export default Home = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={ styles.image }>
                <Text style={ styles.title2 }>Bienvenido</Text>
                <View style={styles.mainContent}>
                    <View style={styles.rowContent}>
                        <Pressable
                            style={[styles.buttonContent]}
                            onPress={() => Alert.alert(
                                'PilarTecno',
                                'Ya se encuentra en la pantalla home',
                                [
                                   { text: "OK", onPress: () => console.log("OK Pressed") }
                                ]
                            ) }
                        >

                            <Icon 
                                name='home' 
                                color={icons.color}
                                size={icons.size}
                                 />
                            
                        </Pressable>
                        <Pressable
                            style={[styles.buttonContent]}
                            onPress={() => props.navigation.navigate('List')}
                        >
                            <Icon 
                                type='font-awesome-5'
                                name='users' 
                                color={icons.color}
                                size={icons.size}
                                 />

                        </Pressable>
                    </View>
                    <View style={styles.rowContent}>
                        <Pressable
                            style={[styles.buttonContent]}
                            onPress={() => props.navigation.navigate('Map')}
                        >
                            <Icon 
                                name='map' 
                                color={icons.color}
                                size={icons.size}
                                 />

                        </Pressable>
                        <Pressable
                            style={[styles.buttonContent]}
                            onPress={() => props.navigation.navigate('Profile')}
                        >
                            <Icon 
                                type='font-awesome-5'
                                name='wrench' 
                                color={icons.color}
                                size={icons.size}
                                 />

                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}