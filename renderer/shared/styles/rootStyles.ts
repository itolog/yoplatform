import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  '@global': {
    html: {
      fontSize: '18px',
      wordSpacing: '1px',
      textSizeAdjust: '100%',
      boxSizing: 'border-box',
      scrollBehavior: 'smooth',
      overflowX: 'hidden',
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    a: {
      display: 'block',
      textDecoration: 'none',
    },
  },
});

export default useStyles;
