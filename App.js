import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, Text, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import KandaSelection from './KandaSelection';
import KandaDetails from './KandaDetails';

const Stack = createStackNavigator();

export default function App() {
  const [showGif, setShowGif] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="KandaSelection" component={KandaSelection} options={{ title: 'Select a Kanda' }} />
        <Stack.Screen name="KandaDetails" component={KandaDetails} options={{ title: 'Kanda Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/ramayana.jpg')} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>The Ramayana</Text>
        <Text style={styles.paragraph}>
          The Ramayana (Sanskrit: रामायण, Rāmāyana) belongs to the broad classification of Sanskrit Literature known as kavya (poetry). However, Ramayana is not only a kavya; it is also considered to be a mahakavya (ancient heroic epic poem). It is ascribed to the Hindu sage Valmiki and forms an important part of the Hindu canon. The Ramayana is one of the two great epics of India, the other being the Mahabharata. It depicts the duties of relationships, portraying ideal characters like the ideal servant, the ideal brother, the ideal wife, and the ideal king.
        </Text>
        <Text style={styles.paragraph}>
          The name Ramayana is a tatpurusha compound of Rāma and ayana (“going, advancing”), translating to “Rama’s Journey”. The Ramayana consists of 24,000 verses in seven books (kāndas) and 500 cantos (sargas), and tells the story of Rama (an incarnation of the Hindu preserver-God Vishnu), whose wife Sita is abducted by the demon king of Lanka, Ravana. Thematically, the epic explores the tenets of human existence and the concept of dharma.
        </Text>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('KandaSelection')}>
        <Text style={styles.buttonText}>Start Reading</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth,
    height: '50%',
    aspectRatio: 1, 
    marginBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 10,
    fontSize: 16,
  },
  startButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
