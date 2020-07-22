import React, { memo } from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      height: '100%',
      width: '100%',
    },
  }),
);

const Loader: React.FC = memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
});

export default Loader;
