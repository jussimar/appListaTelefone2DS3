import { StyleSheet, Text, View, FlatList } from 'react-native';
import Contatos from './componentes/Contatos';
const contatos = [
  {id:"1",nome:"Augusto",tel:"(13) 99859-9874"},
  {id:"2",nome:"Maria",tel:"(13) 75859-9874"},
  {id:"3",nome:"José",tel:"(13) 87859-9874"},
  {id:"4",nome:"Ana",tel:"(13) 89859-9874"},
  {id:"5",nome:"Paulo",tel:"(13) 95859-9874"},
  {id:"6",nome:"Orelha",tel:"(13) 95559-9874"},
  {id:"7",nome:"Jussimar",tel:"(13) 96859-9874"},
  {id:"8",nome:"Jonas",tel:"(13) 85859-9874"},
]
export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Lista de Contatos</Text>
      
      <View style={styles.lista}>
        <FlatList 
          data={contatos}
          keyExtractor={item=>item.id}
          renderItem={({item}) => <Contatos tel={item.tel} nome={item.nome}/>}
        />
      </View>
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista:{
    height:500,
    width:'90%',
    marginLeft:'5%'
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold'
  }
  
});
