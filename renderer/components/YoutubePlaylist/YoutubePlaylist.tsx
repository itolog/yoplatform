import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import YoutubeCardList from '../YoutubeCardList/YoutubeCardList';

import { getYoutubePlayList } from '../../store/youtube/selectors';

const YoutubePlaylist = memo(() => {
  const playlist = useSelector(getYoutubePlayList);

  return (
    <div>
      {!!playlist && (
        <YoutubeCardList items={playlist} isActionButtonVisible={false} />
      )}
    </div>
  );
});

export default YoutubePlaylist;
