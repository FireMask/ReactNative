import React, { FC } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { PostImage as PostImageTypes } from '../../Types'
import PostImage from '../PostImage/PostImage'

const LastFiveDaysImages: FC<{postImages? :PostImageTypes[]}> = ({postImages}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 Days</Text>
            <ScrollView style={styles.content}>
                {
                    postImages?.map(postIamge => (
                        <PostImage key={`post-image-${postIamge.title}`} {...postIamge}/>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8
    },
    title: {
        color: 'white',
        fontSize: 16,
        marginBottom: 18
    },
    content: {
        paddingHorizontal: 16
    }
})

export default LastFiveDaysImages