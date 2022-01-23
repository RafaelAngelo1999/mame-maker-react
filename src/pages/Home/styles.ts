import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  gridContainer: {
    border: '1px solid #CCCCCC',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
  },
  gridCarrossel: {
    border: '1px solid #CCCCCC',
    boxShadow: '0 6px 10px 0 rgba(0,0,0,0.20)',
    backgroundColor: 'lightgray',
    borderRadius: '8px',
    overflowY: 'auto',
    display: 'flex',
  },
  gridVizualizador: {
    border: '1px solid #CCCCCC',
    boxShadow: '0 6px 10px 0 rgba(0,0,0,0.20)',
    borderRadius: '8px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  opcaoMeme: {
    border: '2px solid transparent',
    width: '100px',
    height: '100px',
  },
}));

export { useStyles };
