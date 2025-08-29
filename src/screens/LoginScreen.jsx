import { View,Text,StyleSheet } from "react-native";

export default function LoginScreen(){
    return(
        <View style={styles.container}>
            <Text>Sou a Tela Login</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center'
    }
})