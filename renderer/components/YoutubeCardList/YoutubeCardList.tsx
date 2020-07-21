import React, { memo } from 'react';

import GridList from '@material-ui/core/GridList';

import {
  ActionButtonType,
  YoutubeResponseItems,
  YoutubeVideo,
} from '../../shared/interface/youtube';
import YoutubeCard from './YoutubeCard/YoutubeCard';

import useStyles from './style';

interface Props {
  items: YoutubeResponseItems[] | YoutubeVideo[];
  isActionButtonVisible?: boolean;
}

const YoutubeCardList: React.FC<Props> = memo(
  ({ items, isActionButtonVisible }) => {
    const classes = useStyles();

    return (
      <GridList className={classes.gridList}>
        {items.map((item, index) => {
          return (
            <YoutubeCard
              dataIndex={index}
              isActionButtonVisible={isActionButtonVisible}
              id={item.id?.videoId || item.id}
              key={item.id?.videoId || item.id}
              title={item.snippet.title}
              img={
                item?.snippet?.thumbnails?.medium?.url ||
                item.snippet.thumbnails
              }
            />
          );
        })}
      </GridList>
    );
  },
);

export default YoutubeCardList;
