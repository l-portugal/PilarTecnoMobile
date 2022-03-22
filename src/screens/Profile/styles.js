import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  text: {
    alignSelf: 'center',
    color: '#777777'
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 22,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    borderRadius: 100,
    position: 'absolute',
    top: 10,
    borderColor: '#eee',
    borderWidth: 10
  },
  buttonLogout: {
    width: 150, 
    backgroundColor: '#00abf1',
    marginTop: 0
  }
})