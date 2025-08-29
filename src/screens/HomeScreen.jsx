import { View,Text,StyleSheet } from "react-native";

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text>Sou a Tela Inicial</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'cyan',
        alignItems:'center',
        justifyContent:'center'
    }
})