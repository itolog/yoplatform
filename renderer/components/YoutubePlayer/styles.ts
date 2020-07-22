import { createStyles, makeStyles } from '@material-ui/core/styles';

import constants from './constants';

const useStyles = makeStyles(() =>
  createStyles({
    playerContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: `${constants.playerH}px`,
      width: `${constants.playerW}px`,
      backgroundColor: 'black',
      marginBottom: '5%',
    },
    playBtn: {
      width: '100px',
      height: '100px',
    },
    nextBtn: {
      width: '50px',
      height: '50px',
      transition: '.3s',
      '&:hover': {
        backgroundColor: 'rgb(59, 90, 83)',
      },
    },
  }),
);

export default useStyles;
