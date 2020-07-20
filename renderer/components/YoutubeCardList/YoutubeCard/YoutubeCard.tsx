import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// Store
import { Actions } from '../../../store/youtube/actions';
import { YoutubeVideo } from '../../../store/youtube/types';

interface Props {
  title: string;
  img: string;
  id: string;
}

const useStyles = makeStyles({
  root: {
    width: '320px',
    height: '180px',
    marginBottom: '2%',
  },
  icon: {
    color: 'rgb(84,238,189)',
  },
});

const YoutubeCard: React.FC<Props> = memo(({ title, img, id }) => {
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
          <IconButton className={classes.icon} onClick={handleAddVideo}>
            <AddCircleIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
});

export default YoutubeCard;
