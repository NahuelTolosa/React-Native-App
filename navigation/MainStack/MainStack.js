import React from "react";
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "../TabNavigator/TabNavigator";
import NewsList from "../../components/NewsList/NewsList";
import NewsDetails from '../../components/NewsDetails/NewsDetails';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    
    return (
            
        <NavigationContainer>
            <TabNavigator />
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