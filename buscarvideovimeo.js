import axios from 'axios';

const VIMEO_ACCESS_TOKEN = '15fd47fe4ff77fc6e037c8d53f7a544d'; 

export const buscarVideosVimeo = async (query) => {
  try {
    const pesquisa = await axios.get('https://api.vimeo.com/videos', {
      headers: {
        'Authorization': `Bearer ${VIMEO_ACCESS_TOKEN}`
      },
      params: {
        query: query,
        per_page: 10,
      },
    });
    return pesquisa.data.data; // A API do Vimeo retorna dados de vídeo em `data`
  } catch (erro) {
    console.error('Erro ao buscar vídeos do Vimeo:', erro);
    throw erro;
  }
};
