import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import Colors from '../../constants/Colors';
import { DATABASE } from "../../data/database";

const AddNew = ({ navigation }) => {

    // const [newList, setNewList] = useState(list);
    const [title, setTitle] = useState(``);
    const [description, setDescription] = useState(``);


    //Por el momento se genera un id random.
    const random = Math.round(Math.random() * (999) + 1);


    const handleTitle = _title => {
        setTitle(_title)
    }


    const handleDescription = _desc => {
        setDescription(_desc);
    }


    const onAdd = () =>{

        DATABASE.push({
            id: `${random}`,
            title: `${title}`,
            image: `Image ${random}`,
            description: `${description}`,
            author: `Author ${random}`,
            date: `Date ${random}`,
            location: `Location ${random}`
        })
        navigation.navigate('NewsList');
    }

    return (
        <>
            <View style={AddNewStyle.container} >

                <View >
                    <Text>Título</Text>
                    <TextInput style={AddNewStyle.input} onChangeText={_title => handleTitle(_title)} />
                </View>
                {/* <View >
                    <Text>Imagen {random}</Text>
                    <TextInput onChangeText={image => handleImage(image)} />
                </View> */}
                <View >
                    <Text>Descripción</Text>
                    <TextInput style={AddNewStyle.input} onChangeText={_desc => handleDescription(_desc)} />
                </View>

            </View>
            <Button title='Agregar' onPress={onAdd} />
        </>
    )
}

const AddNewStyle = StyleSheet.create({
    container: {
        width: '90%',
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 0,
        paddingLeft: 0,
        backgroundColor: Colors.cards,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginTop: 5,
        borderRadius: 10,
        width: '100%',
        padding: 10,
        backgroundColor: Colors.details
    }
});

export default AddNew;