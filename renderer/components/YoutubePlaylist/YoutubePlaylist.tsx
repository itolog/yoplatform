import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import useStyles from './styles';

import YoutubeCardList from '../YoutubeCardList/YoutubeCardList';

import { getYoutubePlayList } from '../../store/youtube/selectors';

const YoutubePlaylist = memo(() => {
  const playlist = useSelector(getYoutubePlayList);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!!playlist && (
        <YoutubeCardList items={playlist} isActionButtonVisible={false} />
      )}
    </div>
  );
});

export default YoutubePlaylist;
