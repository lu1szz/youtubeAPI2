import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView, Dimensions, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { buscarVideosVimeo } from '../buscarvideovimeo'; 

const { width } = Dimensions.get('window');
const VIDEO_HEIGHT = width * 9 / 16;

export default function VimeoScreen({ route }) {
  const [pesquisa, setPesquisa] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (route.params?.pesquisa) {
      setPesquisa(route.params.pesquisa);
      pesquisar(route.params.pesquisa);
    }
  }, [route.params?.pesquisa]);

  const pesquisar = async (query) => {
    try {
      const resultados = await buscarVideosVimeo(query);
      setVideos(resultados);
    } catch (erro) {
      console.error('Erro ao pesquisar vídeos do Vimeo:', erro);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.containerPesquisa}>
        <TextInput
          style={styles.entrada}
          placeholder="Digite sua pesquisa"
          value={pesquisa}
          onChangeText={setPesquisa}
        />
        <TouchableOpacity style={styles.botao} onPress={() => pesquisar(pesquisa)}>
          <Text style={styles.textoBotao}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {videos.map(video => (
          <View key={video.uri} style={styles.containerVideo}>
            <Text style={styles.tituloVideo}>{video.name}</Text>
            <View style={styles.videoWrapper}>
              <WebView
                style={styles.webview}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ html: `<iframe src="https://player.vimeo.com/video/${video.uri.split('/').pop()}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>` }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  containerPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F1F0CC',
    borderRadius: 8,
    margin: 20,
  },
  entrada: {
    height: 40,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  botao: {
    backgroundColor: '#D5BF86',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerVideo: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloVideo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  videoWrapper: {
    width: '100%',
    height: VIDEO_HEIGHT,
    borderRadius: 8,
    overflow: 'hidden',
  },
  webview: {
    width: '100%',
    height: '100%',
  },
});
