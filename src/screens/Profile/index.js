import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, Alert } from "react-native";
import { Button, Icon } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actions } from "../../store/index.js";
import { useDispatch } from "react-redux";

import { styles } from './styles.js';

import Wrapper from '../Wrapper';

const picture = require('../../assets/images/profile.jpeg')
export default (props) => {

  const [user] = useState({
    id: 1,
    email: 'messi@pilartecno.com',
    name: 'Leo Messi',
  })

  const dispatch = useDispatch()

  const _signOutAlert = () => {
    Alert.alert(
      'PilarTecno',
      '¿Desea cerrar sesión?',
      [
        { text: "OK", onPress: () => _signOut() },
        { text: "Cancelar", onPress: () => null },
      ]
    )
  }

  const _signOut = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(false))
    } catch (e) {
      // saving error
    }
    dispatch(actions.user.setUser(false))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Wrapper title="Perfil" navigate={props.navigation}>

        <View style={styles.mainContent}>

          <Image source={picture} style={styles.picture} />
          <Text style={[styles.name, styles.text]}>{user.name}</Text>
          <Text style={[styles.email, styles.text]}>{user.email}</Text>

          <Button
            icon={
              <Icon
                name="sign-out-alt"
                size={18}
                color="white"
                type="font-awesome-5"
              />
            }
            buttonStyle={styles.buttonLogout}
            containerStyle={{ margin: 20 }}
            title=" Cerrar sesión"
            onPress={() => _signOutAlert()}
          />

        </View>

      </Wrapper>
    </SafeAreaView>
  )
}