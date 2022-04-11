import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#777777'
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    width: width,
    height: height/2 * 1.2,
    alignSelf: 'center',
    marginTop: width/6,
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
    alignSelf: 'center'
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  marker: {
    height: 52,
    width: 52
  },
  panel: {
    position: 'relative', 
    flexDirection: 'row', 
    marginTop: 0, 
    height: 80, 
    backgroundColor: '#f0f1f3', 
    opacity: 1
  },
  panelLabels:{
    justifyContent: 'center', 
    alignItems: 'center'
  },
  panelIcons: {
    justifyContent: 'flex-end', 
    alignItems: 'flex-end'
  }
})