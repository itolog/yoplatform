import React, { memo } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import { YoutubeItems } from '../../shared/interface/youtube';
import YoutubeCard from './YoutubeCard/YoutubeCard';

interface Props {
  items: YoutubeItems[];
}

const useStyles = makeStyles(() =>
  createStyles({
    gridList: {
      display: 'flex',
      justifyContent: 'space-around',
      '&::-webkit-scrollbar': {
        width: '6px',
        backgroundColor: 'rgba(85, 108, 214, 0.04)',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(25, 133, 123, 0.5)',
      },
      '&::-webkit-scrollbar-track': {
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
        backgroundColor: '#F5F5F5',
      },
    },
  }),
);

const YoutubeCardList: React.FC<Props> = memo(({ items }) => {
  const classes = useStyles();

  return (
    <GridList cellHeight={220} className={classes.gridList}>
      {items.map((item: YoutubeItems) => {
        return (
          <YoutubeCard
            id={item.id.videoId}
            key={item.id.videoId}
            title={item.snippet.title}
            img={item.snippet.thumbnails.medium.url}
          />
        );
      })}
    </GridList>
  );
});

export default YoutubeCardList;
