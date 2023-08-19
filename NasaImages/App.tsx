import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Home from './src/Views/Home/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default"/>
      <Home></Home>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7, 26, 93, 255)'
  },
});

export default App