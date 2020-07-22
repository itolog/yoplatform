import React, { memo } from 'react';

import GridList from '@material-ui/core/GridList';

import { YoutubeVideo } from '../../shared/interface/youtube';
import YoutubeCard from './YoutubeCard/YoutubeCard';

import useStyles from './style';

interface Props {
  items: YoutubeVideo[];
  isActionButtonVisible?: boolean;
}

const YoutubeCardList: React.FC<Props> = memo(
  ({ items, isActionButtonVisible }) => {
    const classes = useStyles();

    return (
      <GridList className={classes.gridList}>
        {items.map((item: YtItem, index) => {
          return (
            <YoutubeCard
              dataIndex={index}
              isActionButtonVisible={isActionButtonVisible}
              id={item.id}
              key={item.id}
              title={item.snippet.title}
              img={item.snippet.thumbnails}
            />
          );
        })}
      </GridList>
    );
  },
);

export default YoutubeCardList;
