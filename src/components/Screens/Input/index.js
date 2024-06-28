import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';



export default function Input() {
  
  const navigation = useNavigation()
  return (
    <LinearGradient  
      colors={['#8bcaef', '#ffffff']} 
      style={styles.container}
      start={{x: 0, y:0}}
      end={{x:1, y:0}}
      //locations={[0.5, 0]}
    >
      <Text style={styles.Title} >Dtype</Text>

        <LinearGradient   
            style={styles.box}
            colors={['#8bcaef', '#ffffff']} 
            //locations={[0.5, 0]}
        >
            <Text style={styles.Text}>
                Fator de Sensbilidade
            </Text>
            <TextInput 
                style={styles.Input}
                placeholder={'Insira seu fator de sensibilidade'}
                placeholderTextColor={'#a6a6a6'}
            />
            <Text style={styles.Text}>
                Relação Insulínica
            </Text>
            <TextInput 
                style={styles.Input}
                placeholder={'Insira sua Relação Insulínica'} 
                placeholderTextColor={'#a6a6a6'}
            />

            <Text style={styles.Text}>
                Glicemia Meta
            </Text>
            <TextInput 
                style={styles.Input}
                placeholder={'Insira sua Glicemia Meta'} 
                placeholderTextColor={'#a6a6a6'}
            />
             
        </LinearGradient>

        
       
      
        <TouchableOpacity onPress={() => navigation.navigate('Data')}>
          <View >
            <Text  style={styles.BotaoCadastrar}>
              Cadastrar
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
    color:'#002557',
    paddingBottom:20
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
    padding:10,
    borderRadius:10,
    paddingBottom:60
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

 BotaoCadastrar:{
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
 }
  
});
