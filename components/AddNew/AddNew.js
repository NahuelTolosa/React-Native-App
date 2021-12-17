import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import Colors from '../../constants/Colors';
import { DATABASE } from "../../data/database";

const AddNew = () => {

    // const [newList, setNewList] = useState(list);
    const [title, setTitle] = useState(``);
    const [description, setDescription] = useState(``);
    const navigation = useNavigation();


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
        goBack();
        // navigation.navigate('NewsList');
    }

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={AddNewStyle.container} >
            <View style={AddNewStyle.addNewContainer} >

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

                <View style={AddNewStyle.btnContainer} >
                    <View style={AddNewStyle.deleteBtnContainer} >
                        <Button title='Cancelar' onPress={goBack} />
                    </View>
                    <View style={AddNewStyle.goBackBtnContainer} >
                        <Button title='Agregar' onPress={onAdd} />
                    </View>
                </View>

            </View>
        </View>
    )
}

const AddNewStyle = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addNewContainer: {
        width: '90%',
        paddingTop: 10,
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
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    deleteBtnContainer: {
        width: '30%'
    },
    goBackBtnContainer: {
        width: '30%'
    }
});

export default AddNew;