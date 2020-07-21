import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    gridList: {
      display: 'flex',
      justifyContent: 'space-around',
      '&::-webkit-scrollbar': {
        width: '6px',
        backgroundColor: 'rgba(85, 108, 214, 0.04)',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(25, 133, 123, 0.5)',
      },
      '&::-webkit-scrollbar-track': {
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
        backgroundColor: '#F5F5F5',
      },
    },
  }),
);

export default useStyles;
