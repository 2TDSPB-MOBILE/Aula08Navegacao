import { Button,View,Text,StyleSheet } from "react-native";

export default function LoginScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text>Sou a Tela Login</Text>
            <Button 
                title="Voltar"
                onPress={()=>navigation.goBack()}
            />
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