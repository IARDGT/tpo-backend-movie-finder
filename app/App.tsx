
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';




export const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello world!!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
},
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
    alignSelf: 'center'
  }
})
