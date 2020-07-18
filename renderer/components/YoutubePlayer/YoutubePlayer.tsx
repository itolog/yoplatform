import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import YouTube, { Options } from 'react-youtube';

// MATERIAL UI
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import IconButton from '@material-ui/core/IconButton';

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
      autoplay: 0,
    },
  };

  const handleOnReady = ({ target }) => {
    if (youtubeList.length !== 0) {
      target.loadPlaylist(youtubeList);
    }
    target.pauseVideo();
  };

  const handleOnEnd = ({ target }) => {
    dispatch(Actions.removeYoutubeVideo(target.playerInfo.videoData.video_id));
    if (youtubeList.length !== 0) {
      target.loadPlaylist(youtubeList);
      target.nextVideo();
    }
  };

  const handleModalOpen = () => {
    dispatch(modalSearchAction.setYtModalOpen());
  };

  return (
    <>
      {showPlayer ? (
        <div className={classes.playerContainer}>
          <YouTube opts={opts} onReady={handleOnReady} onEnd={handleOnEnd} />
        </div>
      ) : (
        <div className={classes.playerContainer}>
          <IconButton
            color='secondary'
            aria-label='play video'
            onClick={handleModalOpen}
            component='button'>
            <PlayCircleFilledIcon className={classes.playBtn} />
          </IconButton>
        </div>
      )}
    </>
  );
});

export default YoutubePlayer;
