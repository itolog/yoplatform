import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import YouTube, { Options } from 'react-youtube';

// MATERIAL UI
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import IconButton from '@material-ui/core/IconButton';

// Store
import {
  getYoutubeVideoIDS,
  getYoutubeVideoList,
} from '../../store/youtube/selectors';
import { Actions } from '../../store/youtube/actions';

const playerW = 600;
const playerH = 300;

const useStyles = makeStyles(() =>
  createStyles({
    playerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: `${playerH}px`,
      width: `${playerW}px`,
      backgroundColor: 'black',
    },
    playBtn: {
      width: '100px',
      height: '100px',
    },
  }),
);

const YoutubePlayer = memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const youtubeList = useSelector(getYoutubeVideoIDS);
  const youtubeObj = useSelector(getYoutubeVideoList);

  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    console.log('state', youtubeObj);
  }, [youtubeObj]);

  useEffect(() => {
    console.log('list', youtubeList);
    if (youtubeList.length !== 0) {
      setShowPlayer(true);
    } else {
      setShowPlayer(false);
    }
  }, [youtubeList]);

  const opts: Options = {
    height: `${playerH}`,
    width: `${playerW}`,
    playerVars: {
      autoplay: 0,
    },
  };

  const handleOnReady = ({ target }) => {
    console.log(target.playerInfo.videoData.video_id);
    if (youtubeList.length !== 0) {
      target.loadPlaylist(youtubeList);
    }
  };

  const handleOnEnd = ({ target }) => {
    dispatch(Actions.removeYoutubeVideo(target.playerInfo.videoData.video_id));
    if (youtubeList.length !== 0) {
      target.loadPlaylist(youtubeList);
      target.nextVideo();
    }
  };

  return (
    <>
      {showPlayer ? (
        <YouTube opts={opts} onReady={handleOnReady} onEnd={handleOnEnd} />
      ) : (
        <div className={classes.playerContainer}>
          <IconButton
            color='secondary'
            aria-label='play video'
            component='button'>
            <PlayCircleFilledIcon className={classes.playBtn} />
          </IconButton>
        </div>
      )}
    </>
  );
});

export default YoutubePlayer;
