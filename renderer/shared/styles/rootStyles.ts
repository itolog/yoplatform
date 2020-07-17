import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  '@global': {
    'html,body': {
      height: '100%',
    },
    '#__next': {
      height: '100%',
      width: '100vw',
    },
    html: {
      fontSize: '18px',
      wordSpacing: '1px',
      textSizeAdjust: '100%',
      boxSizing: 'border-box',
      scrollBehavior: 'smooth',
      overflowX: 'hidden',
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
