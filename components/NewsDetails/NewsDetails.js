import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from '../../constants/Colors';

const NewsDetails = ({ navigation, route }) => {

    const { id,title,image,description,author,date,location } = route.params;

    return (
        <View style={listItemsStyles.listItem}>

            <Text style={listItemsStyles.title}>{title}</Text>

            <View style={listItemsStyles.infoContainer}>
                <Text style={listItemsStyles.image}>{image}</Text>
                <Text style={listItemsStyles.date}>{date}</Text>
                <View style={listItemsStyles.newFooter}>
                    <Text style={listItemsStyles.author}>{author}</Text>
                    <Text style={listItemsStyles.location}>{location}</Text>
                </View>
            </View >

        </View>
    );
}

const listItemsStyles = StyleSheet.create({
    listItem: {
        width: '90%',
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: Colors.cards,
        borderRadius: 7
    },
    title: {
        color: Colors.font,
        alignSelf: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    infoContainer: {
        width: '75%',
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        alignSelf: 'center',
        height: 150,
        backgroundColor: Colors.second_cards,
        borderRadius: 7
    },
    date: {
        color: Colors.second_font,
        marginBottom: 20,
        alignSelf: 'flex-end'
    },
    newFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    author: {
        color: Colors.font
    },
    location: {
        color: Colors.font
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    deleteBtnContainer: {
        width: '25%'
    },
    moreBtnContainer: {
        width: '25%'
    },
});

export default NewsDetails;