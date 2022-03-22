import React, { useState } from "react";
import { View, ImageBackground, SafeAreaView, Text, StatusBar } from "react-native";
import { Input, Icon, Button, Card } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actions } from "../../../store";
import { useDispatch } from "react-redux";

import { styles } from "./style";
const image = require('../../../assets/images/bg-login-3.jpg');

export default (props) => {

  const [email, setEmail] = useState('');
  const [password, setPasswrod] = useState('');
  const [hiddenPass, setHiddenPass] = useState(true);
  const [iconHiddenPass, setIconHiddenPass] = useState('eye')

  const dispatch = useDispatch()

  const onChangeEmail = (value) => {
    setEmail(value)
  }

  const onChangePassword = (value) => {
    setPasswrod(value)
  }

  const handleHiddenPassButton = () => {
    const hidden = !hiddenPass ? true: false;
    const iconHidden = hidden ? 'eye' : 'eye-slash';
    setIconHiddenPass(iconHidden);
    setHiddenPass(hidden);
  }

  const _signIn = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(true))
    } catch (e) {
      // saving error
    }
    dispatch(actions.user.setUser(true))
  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar translucent backgroundColor="transparent" />

      <View style={styles.background}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.title}>PilarTecno</Text>
        </ImageBackground>
      </View>

      <View style={styles.loginContainer}>

        <Card
          containerStyle={styles.cardContainer}
          wrapperStyle={styles.loginCard}>

          <View style={{ position: "relative", alignItems: "center" }}>

            <Input
              label="Email"
              leftIcon={<Icon name="user" type="font-awesome-5" size={20} />}
              placeholder=""
              onChangeText={value => onChangeEmail(value)}
            />

            <Input
              label="Contraseña"
              leftIcon={<Icon name="lock" type="font-awesome-5" size={20} />}
              rightIcon={<Icon name={iconHiddenPass} type="font-awesome-5" size={20} onPress={ handleHiddenPassButton } color={'#777777'} />}
              placeholder=""
              secureTextEntry={hiddenPass}
              onChangeText={value => onChangePassword(value)}
            />

            <Card.Divider />

            <Button
              buttonStyle={{ width: 200 }}
              title="Ingresar"
              onPress={() => _signIn()}
            />

          </View>
        </Card>

      </View>
    </SafeAreaView>
  )
}