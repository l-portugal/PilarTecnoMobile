import React, { Component, useCallback } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { styles } from './styles';

import Wrapper from '../Wrapper';

export default (props) => {

  return (
    <SafeAreaView style={styles.container} >
      <Wrapper title="Lista" navigate={props.navigation.navigate}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>List View</Text>
        </View>
      </Wrapper>
    </SafeAreaView>
  )
}