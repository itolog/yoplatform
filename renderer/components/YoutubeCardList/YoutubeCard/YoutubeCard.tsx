import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

// Material UI
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import useStyles from './style';

// Store
import { Actions } from '../../../store/youtube/actions';

import { YoutubeVideo } from '../../../shared/interface/youtube';

interface Props {
  title: string;
  img: string;
  id: string;
  dataIndex: number;
  isActionButtonVisible?: boolean;
}

const YoutubeCard: React.FC<Props> = memo(
  ({ title, img, id, isActionButtonVisible = true }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleAddVideo = () => {
      const payload: YoutubeVideo = {
        id,
        snippet: {
          title,
          thumbnails: img,
        },
      };
      dispatch(Actions.addYoutubeVideo(payload));
    };

    return (
      <GridListTile className={classes.root}>
        <img src={img} alt={title} />
        <GridListTileBar
          title={title}
          actionIcon={
            isActionButtonVisible ? (
              <IconButton className={classes.icon} onClick={handleAddVideo}>
                <AddCircleIcon />
              </IconButton>
            ) : null
          }
        />
      </GridListTile>
    );
  },
);

export default YoutubeCard;
