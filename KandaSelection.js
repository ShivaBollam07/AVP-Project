import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default function KandaSelection({ navigation }) {
  const kandas = [
    { image: require('./assets/BalaKanda.jpg'), name: 'Bala Kanda' },
    { image: require('./assets/AyodhyaKanda.jpg'), name: 'Ayodhya Kanda' },
    { image: require('./assets/AranyaKanda.jpg'), name: 'Aranya Kanda' },
    { image: require('./assets/KishkindhaKanda.jpg'), name: 'Kishkindha Kanda' },
    { image: require('./assets/SundaraKanda.jpg'), name: 'Sundara Kanda' },
    { image: require('./assets/YuddhaKanda.jpg'), name: 'Yuddha Kanda' },
    { image: require('./assets/UttaraKanda.jpg'), name: 'Uttara Kanda' },
  ];

  const handleKandaSelect = (kanda) => {
    navigation.navigate('KandaDetails', { kanda });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {kandas.map((kanda, index) => (
        <TouchableOpacity key={index} style={styles.box} onPress={() => handleKandaSelect(kanda)}>
          <ImageBackground source={kanda.image} style={styles.image}>
            <Text style={styles.kandaName}>{kanda.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    height: 200,
    margin: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  kandaName: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
