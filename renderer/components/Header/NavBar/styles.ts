import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    navigation: {
      display: 'flex',
      justifyContent: 'space-around',
      alignContent: 'center',
      width: '100%',
    },
    navigationItems: {},
    navigationLink: {
      color: 'black',
      '&:hover': {
        color: 'pink',
      },
    },
    active: {
      color: 'white',
    },
  }),
);

export default useStyles;
