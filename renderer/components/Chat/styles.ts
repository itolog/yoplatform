import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: 'grey',
      width: '400px',
      height: '400px',
    },
  }),
);

export default useStyles;
