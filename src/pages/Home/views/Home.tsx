import React, { FC, useEffect, useState } from 'react';
import { Button, Grid, Typography, Box, TextField } from '@mui/material';
import { useStyles } from '../styles';
import {
  memeModelInitial,
  memeGeradoModelInitial,
  MemeModel,
  MemeGeradoModel,
} from '../../../repositories/MemeRepository/models/MemeModel';
import MemeService from '../services/MemeService';
import GridMemes from '../components/GridMemes';
import ApresentacaoMeme from '../components/ApresentacaoMeme';

const Home: FC = () => {
  const classes = useStyles();
  const [memes, setMemes] = useState<MemeModel[]>([]);
  const [memeGerado, setMemeGerado] = useState<MemeGeradoModel>(memeGeradoModelInitial);
  const [textosMeme, setTextosMeme] = useState<string[]>([]);
  const [memeSelecionado, setMemeSelecionado] = useState<MemeModel>(memeModelInitial);

  const obterMemes = async () => {
    const resultado = await MemeService.obterMemes();

    if (!(resultado instanceof Error)) {
      setMemes(resultado.data?.memes);
    }
  };

  const handlerLimparMemeGerado = () => {
    setMemeGerado(memeGeradoModelInitial);
  };

  const handlerAlterarMemeSelecionado = async (meme: MemeModel) => {
    setMemeSelecionado(meme);
    setTextosMeme([]);
  };

  const handleInputChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = textosMeme;
    newValues[index] = e.target.value;
    setTextosMeme(newValues);
    setMemeSelecionado((prevState) => {
      return {
        ...prevState,
        textos: newValues,
      };
    });
  };

  const handleGerarMeme = async () => {
    const memeCriado = await MemeService.gerarMeme(memeSelecionado);
    if (!(memeCriado instanceof Error)) {
      setMemeGerado(memeCriado.data);
    }
  };

  useEffect(() => {
    obterMemes();
  }, []);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        p={4}
        style={{ minHeight: '80vh' }}
      >
        <Grid width={'80%'} item>
          <Box className={classes.gridContainer}>
            <Box m={2} p={2}>
              <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid pb={2} item xs={12}>
                  {memeGerado?.page_url === '' ? (
                    <Box>
                      <Typography variant="h3" align="left" pb={2}>
                        Selecione um tema maladeza ai
                      </Typography>
                      <GridMemes
                        memes={memes}
                        memeSelecionado={memeSelecionado}
                        alterarMeme={handlerAlterarMemeSelecionado}
                      />
                      <Typography pb={2} variant="h3" align="left">
                        Textos
                      </Typography>
                      <Grid container spacing={3}>
                        {new Array(memeSelecionado.box_count).fill('').map((_, index) => (
                          <Grid key={index} item xs={12}>
                            <TextField
                              fullWidth
                              id="outlined"
                              label={`Texto #${index + 1}`}
                              onChange={handleInputChange(index)}
                            />
                          </Grid>
                        ))}
                        <Grid item xs={12}>
                          <Button
                            color="secondary"
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={handleGerarMeme}
                          >
                            <Typography variant="h5" align="left">
                              Gerar o meme ai garai
                            </Typography>
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  ) : (
                    <ApresentacaoMeme memeGerado={memeGerado} handlerLimparMemeGerado={handlerLimparMemeGerado} />
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
