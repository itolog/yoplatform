import React, { memo } from 'react';
// Material UI
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import Layout from '../shared/Layout/Layout';
import YoutubeSearchModal from '../components/YoutubeSearchModal/YoutubeSearchModal';
import YoutubePlayer from '../components/YoutubePlayer/YoutubePlayer';
import YoutubePlaylist from '../components/YoutubePlaylist/YoutubePlaylist';
import Chat from '../components/Chat/Chat';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      textAlign: 'center',
      paddingTop: theme.spacing(4),
      // background: `linear-gradient(to right top, #051937, #2a2962, #613287, #a42fa0, #eb12a9)`,
    },
    main: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '50px',
    },
    playerContainer: {
      display: 'flex',
      flexFlow: 'row-reverse wrap',
      justifyContent: 'center',
      width: '100%',
    },
  }),
);

const Home = memo(() => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.playerContainer}>
          <YoutubeSearchModal />
          <YoutubePlayer />
        </div>
        <main className={classes.main}>
          <YoutubePlaylist />
          <Chat />
        </main>
      </div>
    </Layout>
  );
});

export default Home;
