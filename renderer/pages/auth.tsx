import React, { memo } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import Layout from '../shared/Layout/Layout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
  }),
);

const Auth = memo(() => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.root}>
        <h1>Auth Page</h1>
      </div>
    </Layout>
  );
});

export default Auth;
