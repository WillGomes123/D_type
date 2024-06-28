import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Login from '../Login';

export default function Home() {
  return (
    <LinearGradient  
      colors={['#8bcaef', '#ffffff']} 
      style={styles.container}
      start={{x: 0, y:0}}
      end={{x:1, y:0}}
      locations={[0.5, 0]}
    >
      <Image
      style={styles.Image}
       source={require('../../Images/logo.png')}
      />
      
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center ',
    justifyContent: 'center',
    
  },
  Image:{
    alignSelf:'center',
    
   
     
  }
});
