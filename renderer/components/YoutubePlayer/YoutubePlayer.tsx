import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import YouTube, { Options } from 'react-youtube';

import ErrorBoundary from '../../shared/components/ErrorBoundary/ErrorBoundary';

// MATERIAL UI
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';

// Store
import { getYoutubeVideoIDS } from '../../store/youtube/selectors';
import { Actions } from '../../store/youtube/actions';
import { Actions as modalSearchAction } from '../../store/yt-search-modal/actions';

import useStyles from './styles';

import constants from './constants';

const YoutubePlayer = memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const youtubeList = useSelector(getYoutubeVideoIDS);

  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    if (youtubeList.length !== 0) {
      setShowPlayer(true);
    } else {
      setShowPlayer(false);
    }
  }, [youtubeList]);

  const opts: Options = {
    height: `${constants.playerH}`,
    width: `${constants.playerW}`,
    playerVars: {
      autoplay: 1,
      iv_load_policy: 3,
      rel: 0,
      showinfo: 0,
    },
  };

  const handleOnReady = ({ target }) => {
    if (youtubeList.length !== 0) {
      target.pauseVideo();
    }
  };

  const handleOnEnd = () => {
    if (youtubeList.length !== 0) {
      dispatch(Actions.removeYoutubeVideo(0));
    }
  };

  const handleModalOpen = () => {
    dispatch(modalSearchAction.setYtModalOpen());
  };

  const handleNextVideo = () => {
    dispatch(Actions.removeYoutubeVideo(0));
  };

  return (
    <ErrorBoundary>
      {showPlayer ? (
        <div className={classes.playerContainer}>
          <YouTube
            opts={opts}
            videoId={youtubeList[0]}
            onReady={handleOnReady}
            onEnd={handleOnEnd}
          />
          <IconButton
            color='secondary'
            onClick={handleNextVideo}
            component='button'>
            <SkipNextIcon className={classes.nextBtn} />
          </IconButton>
        </div>
      ) : (
        <div className={classes.playerContainer}>
          <IconButton
            color='secondary'
            onClick={handleModalOpen}
            component='button'>
            <PlayCircleFilledIcon className={classes.playBtn} />
          </IconButton>
        </div>
      )}
    </ErrorBoundary>
  );
});

export default YoutubePlayer;
