import React from "react";
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogIn from '../components/LogIn/LogIn';
import NewsList from '../components/NewsList/NewsList';
import AddNew from '../components/AddNew/AddNew';
import NewsDetails from '../components/NewsDetails/NewsDetails';
import NewsListItem from '../components/NewsListItem/NewsListItem';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    
    return (
            
            <NavigationContainer>
                <Stack.Navigator initialRouteName="NewsList" screenOptions={{headerShown:true}}>
                    <Stack.Screen name='LogIn' component={LogIn} />
                    <Stack.Screen name='NewsList' component={NewsList} />
                    <Stack.Screen name='AddNew' component={AddNew} />
                    <Stack.Screen name='NewsListItem' component={NewsListItem} />
                    <Stack.Screen name='NewsDetails' component={NewsDetails} />
                </Stack.Navigator>
            </NavigationContainer>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainStack;