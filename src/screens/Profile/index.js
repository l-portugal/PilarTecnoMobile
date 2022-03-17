import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { styles } from './styles.js';

import Wrapper from '../Wrapper';

export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Wrapper title="Perfil" navigate={props.navigation}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>Profile View</Text>
        </View>
      </Wrapper>
    </SafeAreaView>
  )
}