import { StyleSheet, Platform, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react"
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import { Audio } from "expo-av"

const tabs = [
    {
        Id: 1,
        ShortName: "POMO",
        Name: "Pomodoro",
        Duration: 25,
        Color: "#F7DC6F"
    },
    {
        Id: 3,
        ShortName: "BREAK",
        Name: "Short Break",
        Duration: 5,
        Color: "#D7BDE2"
    },
    {
        Id: 2,
        ShortName: "SHORT",
        Name: "Long Break",
        Duration: 15,
        Color: "#A2D9CF"
    },
]

export default function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(25 * 60)
  const [currentTab, setCurrentTab] = useState(tabs[0])
  const [isActive, setIsActive] = useState(false)
  let intervalId = null

  const handleStartStop = () => {
    playSound()
    setIsActive(!isActive)
    if(isActive && intervalId != null){
        
    }else{
        clearInterval(intervalId)
        intervalId = null
    }
  }

  useEffect(() => {
    let intervalId = null

    if(isActive){
        intervalId = setInterval(() => {
            console.log("tick");
            setTime(time - 1)
        }, 1000)
    }else{
        clearInterval(intervalId)
    }

    if(time === 0){
        setIsActive(false)
        setIsRunning(!isRunning)
        setTime(currentTab.Duration * 60)
    }

    return () => clearInterval(intervalId)
  }, [isActive, time])
  
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require("./assets/click.wav"))
    await sound.playAsync() 
  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: currentTab.Color}]}>
      <View style={{flex:1, paddingHorizontal: 15, paddingTop: Platform.OS === "android" && 30}}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} setTime={setTime} setIsRunning={setIsRunning} setIsActive={setIsActive}/>
        <Timer time={time}/>
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
            <Text style={{ color: "white", fontWeight: "bold" }}>{ isActive ? "STOP" : "START" }</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: "#333333",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    alignItems: "center"
  }
});
