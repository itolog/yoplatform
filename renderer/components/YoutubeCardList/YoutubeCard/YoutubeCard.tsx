import React, { memo, useEffect, useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Material UI
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

import useStyles from './style';

// Store
import { Actions } from '../../../store/youtube/actions';
import { getYoutubeVideoIDS } from '../../../store/youtube/selectors';

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

    const [isAdd, setIsAdd] = useState(false);

    const playListIDS = useSelector(getYoutubeVideoIDS);

    useEffect(() => {
      const isAdded = playListIDS.includes(id);
      setIsAdd(isAdded);
    }, [id, playListIDS]);

    const handleAddVideo = useCallback(() => {
      const payload: YoutubeVideo = {
        id,
        snippet: {
          title,
          thumbnails: img,
        },
      };
      dispatch(Actions.addYoutubeVideo(payload));
    }, [dispatch, id, img, title]);

    const addButton = useMemo(() => {
      if (!isAdd) {
        return (
          <IconButton className={classes.icon} onClick={handleAddVideo}>
            <AddCircleIcon />
          </IconButton>
        );
      } else {
        return (
          <IconButton className={classes.icon}>
            <PlaylistAddCheckIcon />
          </IconButton>
        );
      }
    }, [classes.icon, handleAddVideo, isAdd]);

    return (
      <GridListTile className={classes.root}>
        <img src={img} alt={title} />
        <GridListTileBar
          title={title}
          actionIcon={isActionButtonVisible ? addButton : null}
        />
      </GridListTile>
    );
  },
);

export default YoutubeCard;
