import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: '0.4rem 1rem',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      width: '90%',
      height: '90%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      overflow: 'auto',
    },
    youtubeItemsContainer: {
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
    },
    openModal: { width: '50px', height: '50px' },
    closeContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      marginBottom: '20px',
    },
    close: {
      width: '50px',
    },

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
