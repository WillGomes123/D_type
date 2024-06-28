import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cabecalho from '../../Cabecalho';
import Rodape from '../../Rodape';

export default function Data() {
  return (
    <View style={styles.container}>
       
        <Cabecalho titulo={'Olá, Usuário!!'}/>

        <View style={styles.Info}>
          <View>
          <TextInput borderColor="blue" style={styles.Input} placeholder='Fator de Sensibilidade'/>
          </View>
           
            <TextInput placeholder='Relação Insulínica'/>
            <TextInput placeholder='Glicemia Meta'/>
        </View>

        <View style={styles.Info}>
            <TextInput style={styles.Input} placeholder='Carboidatro/ porção de alimento'/>
            <TextInput style={styles.Input} placeholder='Glicemia pré prandial'/>
        </View>
      
         <Rodape/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1
  },
  Info:{
    flex:1,
    flexDirection:'row',
  },
  Input:{
    padding:5,
    borderColor:'#A2D4FF',
    borderRadius:5

  }

});