import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

export default Header = ({ tabs, currentTab, setCurrentTab, setTime, setIsRunning, setIsActive }) => {

    const handlePress = (index) => {
        const newTab = tabs.find((item) => item.Id == index)
        if(currentTab.Id !== newTab.Id){
            setCurrentTab(newTab)
            setTime(newTab.Duration * 60)
            setIsRunning(false)
            setIsActive(false)
        }
    }

    return(
        <View style={{flexDirection:"row"}}>
            {
                tabs.map((item) => (
                    <TouchableOpacity key={item.Id} style={[styles.itemStyle, currentTab.Id != item.Id && { borderColor: "transparent"}]} onPress={() => handlePress(item.Id)}>
                        <Text style={{fontWeight: "bold"}}>{item.Name}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        width: "33.33%",
        borderWidth: 3,
        padding: 5,
        borderColor: "white",
        marginVertical: 20,
        borderRadius: 10,
        alignItems: "center"
    }
})