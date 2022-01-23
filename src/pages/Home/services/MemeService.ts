import MemeRepository from '../../../repositories/MemeRepository/MemeRepository';
import { MemeModel } from '../../../repositories/MemeRepository/models/MemeModel';

class MemeService {
  async obterMemes() {
    return MemeRepository.obterMemes()
      .then((resposta) => resposta && resposta.data)
      .catch((erro) => erro);
  }

  async gerarMeme(meme: MemeModel) {
    console.log(meme);
    return MemeRepository.gerarMeme(meme)
      .then((resposta) => resposta && resposta.data)
      .catch((erro) => erro);
  }
}

export default new MemeService();
