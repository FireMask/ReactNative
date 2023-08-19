import React, { FC } from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { PostImage } from '../../Types'

const TodaysImage: FC<PostImage> = ({ date, title, url, hdurl }) => {
    return(
        <View style={styles.container}>
            <Image source={{ uri: url}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View"></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2c449D",
        marginVertical: 16,
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 12,
    },
    image: {
        width: '100%',
        borderRadius: 12,
        height: 190,
        borderWidth: 1,
        borderColor: 'white',
    },
    buttonContainer: {
        alignItems: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold',
    },
    date: {
        color: 'white',
        fontSize: 16,
    }
})

export default TodaysImage