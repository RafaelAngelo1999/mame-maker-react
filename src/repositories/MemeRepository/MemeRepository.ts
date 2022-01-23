import qs from 'qs';
import axios from '../../utils/AxiosInstance';
import { MemeModel } from './models/MemeModel';

class MemeRepository {
  async obterMemes() {
    return axios.get<MemeModel>(`https://api.imgflip.com/get_memes`);
  }

  async gerarMeme(meme: MemeModel) {
    const params = qs.stringify({
      template_id: meme.id,
      username: 'RafaelMeme',
      password: 'memepadrex',
      boxes: meme.textos.map((text) => ({ text })),
    });
    return axios.post(`https://api.imgflip.com/caption_image?`, params);
  }
}

export default new MemeRepository();
