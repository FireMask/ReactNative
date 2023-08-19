import React, { FC } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { PostImage as PostImageTypes } from '../../Types'

const PostImage: FC<PostImageTypes> = ({ title, date }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.bottomContainer}>
                <Button title="View"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(18,39,133,255)',
        borderRadius: 12,
        marginBottom: 12,
        padding: 16
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12
    },
    date: {
        color: 'white',
    },
    bottomContainer: {
        alignItems: 'flex-end'
    }
})

export default PostImage