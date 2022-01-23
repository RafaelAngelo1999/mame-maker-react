import React, { FC } from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { MemeGeradoModel } from '../../../repositories/MemeRepository/models/MemeModel';

interface IApresentacaoMemeProps {
  memeGerado: MemeGeradoModel;
  handlerLimparMemeGerado: () => void;
}

const ApresentacaoMeme: FC<IApresentacaoMemeProps> = ({ memeGerado, handlerLimparMemeGerado }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '70vh' }}
    >
      <Grid item xs={3}>
        <img src={memeGerado.url} alt="Generated Meme" />
      </Grid>
      <Grid item pt={2} xs={3}>
        <Button color="secondary" variant="contained" size="large" onClick={handlerLimparMemeGerado}>
          <Typography variant="h5" align="left">
            Voltar
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default ApresentacaoMeme;
