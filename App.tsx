import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { UIButton } from './components/UIButton/index.ios';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <Text>Welcome to Popcorn Remote</Text>
			<UIButton title="Press" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',

		paddingTop: 50,
		paddingHorizontal: 16,
  },
});
