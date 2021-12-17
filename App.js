import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './navigation/MainStack/MainStack';
import TabNavigator from './navigation/TabNavigator/TabNavigator';

export default function App() {
  
  return (
    <>
      <TabNavigator />
    </>
  );
}

//ToDo: 
//  Agregar vista 'NewDetails' al stack de screens
