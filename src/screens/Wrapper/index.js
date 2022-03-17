import React from "react"
import { ImageBackground, StyleSheet, Text, Pressable, View, Dimensions } from "react-native"
import { Icon } from 'react-native-elements';

const image = require('../../assets/images/background1.jpeg')

import { styles } from "./styles";

export default (props) => {
  return (
    <ImageBackground 
      source={image} 
      style={ styles.image }>

      <View style={ styles.container }>
        
        <Pressable
          onPress={() => props.navigate.goBack(null) }
          style={ styles.backButton }
        >
          <Icon reverse raised
            name='arrow-back'
            size={20}
            color='#eee'
            iconStyle={ {color:'#00abf1'} }
          />
        </Pressable>

        <Text style={ styles.title }> {props.title} </Text>

        <View style={{flex:1}}></View>
        
      </View>
      {props.children}
    </ImageBackground>
  )
}