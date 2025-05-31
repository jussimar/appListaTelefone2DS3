import {View,Text, StyleSheet} from 'react-native';

interface propsContato{
    nome:string,
    tel:string
}

export default function Contatos({nome, tel}:propsContato){

    return(
        <>
            <View style={styles.cartao}>
                <Text style={styles.nome}>
                    Nome: {nome}
                </Text>
                <Text style={styles.tel}>
                    Telefone: {tel}
                </Text>
            </View>
        </>

    );


}

const styles = StyleSheet.create({
    cartao:{
        backgroundColor:"#08f",
        padding:8,
        marginVertical:10,
        borderRadius:8,
        width:'90%'
    },
    nome:{
        fontSize:26,
        fontWeight:'bold'
    },
    tel:{
        fontSize:20,
        color:'#333'
    }
});