import { StyleSheet, Dimensions } from "react-native"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    alignContent: "space-between"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginTop: width/9, 
    flex:1
  },
  title: {
    flex:2,
    textAlign: 'center',
    fontSize: width/16,
    fontWeight: 'bold',
    color: '#eee',
    marginTop: width/8
  }
})