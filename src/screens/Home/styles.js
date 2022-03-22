import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonContent: {
      width: width / 3,
      height: width / 3,
      margin: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00abf1'
    },
    mainContent: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: width / 4
    },
    rowContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#eee'
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      width: '100%'
    },
    title2: {
      fontSize: 48,
      fontWeight: 'bold',
      marginTop: width/4,
      color: '#eee'
    }
})