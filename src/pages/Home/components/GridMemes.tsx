import React, { FC } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import { MemeModel } from '../../../repositories/MemeRepository/models/MemeModel';

interface IGridMemesProps {
  memes: MemeModel[];
  memeSelecionado: MemeModel;
  alterarMeme: (meme: MemeModel) => void;
}

const GridMemes: FC<IGridMemesProps> = ({ memes, memeSelecionado, alterarMeme }) => {
  return (
    <ImageList variant="quilted" sx={{ width: '100%', height: 400 }} cols={5} rowHeight={350}>
      {memes.map((item) => (
        <ImageListItem
          key={item.id}
          sx={{ padding: '5px', border: '4px solid', borderColor: memeSelecionado?.id === item.id ? 'red' : 'white' }}
        >
          <img
            src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
            onClick={() => alterarMeme(item)}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GridMemes;
