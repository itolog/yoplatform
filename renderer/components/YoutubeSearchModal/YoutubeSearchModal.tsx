import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// MATERIAL UI
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import AddBoxIcon from '@material-ui/icons/AddBox';

import YoutubeSearch from './YoutubeSearch/YoutubeSearch';
import YoutubeCardList from '../YoutubeCardList/YoutubeCardList';
import Loader from '../../shared/UI/Loader/Loader';

import useStyles from './styles';

// Store
import { isYtSearchModalOpen } from '../../store/yt-search-modal/selectors';
import {
  getYoutubeSearchItems,
  isLoading,
} from '../../store/youtube/selectors';
import { Actions } from '../../store/yt-search-modal/actions';

const YoutubeSearchModal = memo(() => {
  const dispatch = useDispatch();
  const open = useSelector(isYtSearchModalOpen);
  const searchItems = useSelector(getYoutubeSearchItems);
  const isFetching = useSelector(isLoading);

  const classes = useStyles();

  const handleOpen = () => {
    dispatch(Actions.setYtModalOpen());
  };

  const handleClose = () => {
    dispatch(Actions.setYtModalClose());
  };

  return (
    <div className={classes.container}>
      <Button
        variant='contained'
        color='primary'
        className={classes.close}
        onClick={handleOpen}>
        <AddBoxIcon className={classes.openModal} />
      </Button>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.closeContainer}>
              <Button
                className={classes.close}
                color='primary'
                aria-label='close'
                onClick={handleClose}>
                <CancelPresentationIcon />
              </Button>
            </div>
            <YoutubeSearch />
            {/* SEARCH RESULTS  */}
            {!isFetching ? <YoutubeCardList items={searchItems} /> : <Loader />}
          </div>
        </Fade>
      </Modal>
    </div>
  );
});

export default YoutubeSearchModal;
