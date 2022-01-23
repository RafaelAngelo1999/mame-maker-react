export interface MemeModel {
  id: string;
  name: string;
  url: string;
  box_count: number;
  textos: string[];
}

export interface MemeGeradoModel {
  url: string;
  page_url: string;
}

export const memeModelInitial: MemeModel = {
  id: '',
  name: '',
  url: '',
  box_count: 0,
  textos: [],
};

export const memeGeradoModelInitial: MemeGeradoModel = {
  url: '',
  page_url: '',
};
