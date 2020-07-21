import { createStyles, makeStyles } from '@material-ui/core/styles';

import constants from './constants';

const useStyles = makeStyles(() =>
  createStyles({
    playerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: `${constants.playerH}px`,
      width: `${constants.playerW}px`,
      backgroundColor: 'black',
      marginBottom: '5%',
    },
    playBtn: {
      width: '100px',
      height: '100px',
    },
  }),
);

export default useStyles;
