import React, { memo } from 'react';
// Material UI
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

import Layout from '../shared/Layout/Layout';
import YoutubeSearch from '../components/YoutubeSearch/YoutubeSearch';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
  }),
);

const Home = memo(() => {
  const classes = useStyles({});
  return (
    <Layout>
      <div className={classes.root}>
        <YoutubeSearch />
        <h1>Home Page </h1>

        <HomeIcon />
      </div>
    </Layout>
  );
});

export default Home;
