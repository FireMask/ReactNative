import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../../Components/Header/Header'
import fetchApi from '../../Utils/fetch'
import TodaysImage from '../../Components/TodaysImage/TodaysImage'
import { PostImage } from '../../Types'
import { format, sub } from 'date-fns'
import LastFiveDaysImages from '../../Components/LastFiveDaysImages/LastFiveDaysImages'

const Home = () => {

    const [todaysImage, setTodaysImage] = useState<PostImage>({})
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([])

    useEffect(() => {
      const loadTodayImage = async () => {
        try{
            const todayImage = await fetchApi()
            setTodaysImage(todayImage)
        }catch(error){
            console.error(error);
            setTodaysImage({})
        }
      }

      const loadLast5DaysImages = async () => {
        try{
            const date = new Date()
            const todayDate = format(date, "yyyy-MM-dd")
            const fiveDaysAgo = format(sub(date, { days: 5 }), "yyyy-MM-dd")
            const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgo}&end_date=${todayDate}`)
            setLastFiveDaysImages(lastFiveDaysImagesResponse)
        }catch(error){
            console.error(error);
            setTodaysImage({})
        }
      }

      loadTodayImage().catch(null)
      loadLast5DaysImages().catch(null)
    }, [])

    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage} />
            <LastFiveDaysImages postImages={lastFiveDaysImages} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    }
})

export default Home