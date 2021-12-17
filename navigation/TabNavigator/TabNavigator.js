import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import NewsList from "../../components/NewsList/NewsList";
import LogIn from '../../components/LogIn/LogIn';
import AddNew from '../../components/AddNew/AddNew';
import { Text, View, StyleSheet} from "react-native";
import { Icon } from "react-native-elements";

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {

    return (
        <NavigationContainer>

            <Tabs.Navigator screenOptions={{
                headerShowm: false,
                tabBarShowLabel: false
            }} 
                tabBarOptions={{
                    showLabel: false
            }}
                initialRouteName="Home"
            >

                <Tabs.Screen name='Inicio'
                    component={NewsList} 
                    options={{
                        tabBarIcon:({focused}) => (
                        <View>
                            <Text>Inicio</Text>
                        </View> 
                        )
                    }}        
                />

                <Tabs.Screen name='Agregar' 
                    component={AddNew}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Icon
                                    type='material-community'
                                    name='plus'
                                    color='#777'
                                    raised
                                    containerStyle={listStyles.add}
                                />
                            </View>
                        )
                    }}   
                />

                <Tabs.Screen name='Perfil' 
                    component={LogIn}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Text>Iniciar Sesión</Text>
                            </View>
                        )
                    }}    
                />

            </Tabs.Navigator>

        </NavigationContainer>
    );
}
const listStyles = StyleSheet.create({
    add: {
        position: 'relative',
        bottom: 25,
        color: '#fff'
    }
});
export default TabNavigator;