import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const goToYouTube = () => {
    navigation.navigate('youtubetela');
  };

  const goToVimeo = () => {
    navigation.navigate('vimeotela');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <TouchableOpacity style={styles.button} onPress={goToYouTube}>
        <Text style={styles.buttonText}>Pesquisar no YouTube</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToVimeo}>
        <Text style={styles.buttonText}>Pesquisar no Vimeo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3F0D12',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
