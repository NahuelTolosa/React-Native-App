import React, { useState } from "react";
import { StyleSheet, FlatList, Text, SegmentedControlIOSComponent } from "react-native";
import  NewsListItem  from "../NewsListItem/NewsListItem";

import { DATABASE } from "../../data/database";


const NewsList = () => {

    const [list, setList] = useState(DATABASE);

    // const handlePress = () => {
    //     navigation.navigate('AddNew');
    // }


    const getIndexOnDataBase = id => {
        let index = -1;

        for (let i = 0; i < list.length; i++) {
            const element = list[i];

            if (element.id === id)
                index = i;

        }

        return index;
    }

    
    const handleSeeMore = item => {
        navigation.navigate('NewsDetails',{
            id: `${item.id}`,
            title: `${item.title}`,
            image: `${item.image}`,
            description: `${item.description}`,
            author: `${item.author}`,
            date: `${item.date}`,
            location: `${item.location}`
        });
    }

    const handleDelete = id => {
        DATABASE.splice(getIndexOnDataBase(id), 1);
        setList([...DATABASE]);
        console.log(list);
        console.log(DATABASE);
    }


    return( 
        <>
            <FlatList style={listStyles.container}

                //Infomación de la lista
                data={list}

                //Renderizado
                renderItem={data => (<NewsListItem data={data} handleDelete={handleDelete} handleSeeMore={handleSeeMore}/>)}

                //Key
                keyExtractor={(item) => item.id}
            />

        </>
    );
}

const listStyles = StyleSheet.create({
    container: {
        width:'100%'        
    },
    add: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color:'#fff'
    }
});

export default NewsList;