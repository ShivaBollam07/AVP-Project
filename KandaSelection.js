import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function KandaSelection({ navigation }) {
  const handleKandaSelect = () => {
    navigation.navigate('KandaDetails');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Render Kanda boxes here */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Back</Text>
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
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    padding: 10,
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
  },
});
