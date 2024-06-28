import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, StyleSheet, Text, TextInput, View,Image } from 'react-native';

export default function Login() {

const navigation = useNavigation()


  return (

    <LinearGradient  
      colors={['#8bcaef', '#ffffff']} 
      style={styles.container}
      start={{x: 0, y:0}}
      end={{x:1, y:0}}
      //locations={[0.5, 0]}
    >
     
      
     <Text style={styles.TextBold}>
      Dtype
     </Text>
     
      

        <LinearGradient   
            style={styles.box}
            colors={['#8bcaef', '#ffffff']} 
            //locations={[0.5, 0]}
        >
            <Text style={styles.Text}>
                Email
            </Text>
            <TextInput 
                style={styles.Input}
                placeholder={'Coloque seu email...'}
                placeholderTextColor={'#a6a6a6'}
            />
            <Text style={styles.Text}>
                Senha
            </Text>
            <TextInput 
                style={styles.Input}
                placeholder={'Coloque sua senha... '} 
                placeholderTextColor={'#a6a6a6'}
            />
             
        </LinearGradient>
       
        <TouchableOpacity >
            <View style={styles.TextoSenha}>
                <Text >
                    Esqueceu a senha ?
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <View >
            <Text  style={styles.BotaoEntrar}>
              Entrar
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  >
          <View style={styles.Visual}>
            <Text  style={styles.Text}>
              Não possui conta ?
            </Text>
            <Text style={styles.TextBold}>
              Cadastre -se
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.Visual}>
            <Text  style={styles.Text}>
            Dúvidas
            </Text>
            <Text style={styles.TextBold}>
               Fale com a gente
            </Text>
          </View>
        </TouchableOpacity>
        
    </LinearGradient >
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:4
  },
  Title:{
    fontSize:32.2,
    color:'#002557'
  },

  Input:{
    backgroundColor:'#fff',
    borderRadius:30,
    padding: 10,
    paddingRight:100,
    margin:5,
    marginBottom:20
    
  },
  box:{
    padding:60,
    borderRadius:10,
    bottom:''
  },
  Text:{
    fontSize:16,
    color:'#002557',
    marginRight:2
  },
  TextBold:{
    fontSize:16,
    color:'#002557',
    fontWeight:'bold' 
  },

  TextoSenha:{
    alignContent:'flex-start',
    alignSelf:'flex-end',
    justifyContent:'flex-end',
    paddingLeft:220,
    paddingTop:10    
},

 BotaoEntrar:{
  fontSize:30,
  color:'#1561c8',
  backgroundColor:'#8bcaef',
  width:300,
  height:50,
  marginTop:10,
  textAlign:'center',
  borderRadius:20
 },
 Visual:{
    flexDirection:'row'
 },
 ImageView:{
  alignSelf:'center',
  paddingLeft:30,
  
},
Image:{
  height:100,
  width:100
}
  
});
