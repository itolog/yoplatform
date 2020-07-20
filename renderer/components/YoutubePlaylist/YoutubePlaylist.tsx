import React from 'react';
import { useSelector } from 'react-redux';

import { getYoutubePlayList } from '../../store/youtube/selectors';

const YoutubePlaylist = () => {
  const playlist = useSelector(getYoutubePlayList);
  return <div></div>;
};

export default YoutubePlaylist;
