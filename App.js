import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoadingSpinner from './Components/LoadingSpinner';
import SearchBox from './Components/SearchBox';
import NoResults from './Components/NoResults';

export default function App() {
  return (
    <View style={styles.container}>
      
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
