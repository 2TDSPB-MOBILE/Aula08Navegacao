import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='home' component={HomeScreen}/>
            <Drawer.Screen name='login' component={LoginScreen}/>
        </Drawer.Navigator>
    )
}