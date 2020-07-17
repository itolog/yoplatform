import React from 'react';

// MATERIAL UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import AddBoxIcon from '@material-ui/icons/AddBox';

import YoutubeSearch from '../YoutubeSearch/YoutubeSearch';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: '0.4rem 1rem',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      width: '90%',
      height: '90%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    openModal: { width: '50px', height: '50px' },
    closeContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      marginBottom: '20px',
    },
    close: {
      width: '50px',
    },
  }),
);

const YoutubeSearchModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default YoutubeSearchModal;
