import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { styles } from "./styles";

import Wrapper from '../Wrapper';

export default (props) => {
  return(
    <SafeAreaView style={styles.container}>
      <Wrapper title="Mapa" navigate={props.navigation}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>Map View</Text>
        </View>
      </Wrapper>
    </SafeAreaView>
  )
}