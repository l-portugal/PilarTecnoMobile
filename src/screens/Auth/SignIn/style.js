import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex:1,
    // backgroundColor: 'red',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    width: '100%',
    height: '100%'
  },
  loginContainer: {
    flex:1,
    margin:0,
    borderRadius: 30
  },
  cardContainer: {
    // backgroundColor: 'green', 
    width: width, 
    margin:0, 
    padding: 50,
    opacity: 0.8
  },
  loginCard: {
    // backgroundColor: 'green',
    height: height/2
  },
  title: {
    fontSize: 50, 
    fontWeight: 'bold', 
    color: '#eee'
  }
})