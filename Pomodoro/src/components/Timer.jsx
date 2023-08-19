import { Text, View, StyleSheet } from "react-native"

export default Timer = ({ time }) => {

    const formattedTime = `${Math.floor(time / 60).toString().padStart(2, "0")}:${Math.floor(time % 60).toString().padStart(2, "0")}`

    return(
        <View style={styles.container}>
            <Text style={styles.time}>{formattedTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
        borderRadius: 15,
        padding: 15,
        flex: 0.3,
        justifyContent: "center"
    },
    time: {
        fontSize: 80,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333333"
    }
})