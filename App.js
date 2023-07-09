import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import KandaSelection from './KandaSelection';
import KandaDetails from './KandaDetails';

export default function App() {
  const handleStartReading = () => {
    navigation.navigate('KandaSelection');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/ramayana.jpg')} style={styles.image} />
      <Text style={styles.introText}>Introduction to Ramayana</Text>
      <TouchableOpacity style={styles.startButton} onPress={handleStartReading}>
        <Text style={styles.buttonText}>Start Reading</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  introText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

const Stack = createStackNavigator();

export function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="KandaSelection" component={KandaSelection} options={{ title: 'Select a Kanda' }} />
        <Stack.Screen name="KandaDetails" component={KandaDetails} options={{ title: 'Kanda Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
