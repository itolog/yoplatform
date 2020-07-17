import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

// MATERIAL
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import SearchVideoSchema from './validation';
import YoutubeSearchField from './youtubeSearchField';
import constants from '../../../shared/theme/constants';

// Store
import { Actions } from '../../../store/youtube/actions';

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px',
    },
    textInput: {
      width: '80%',
    },
    submitButton: {
      width: '50px',
      height: constants.SEARCH_BAR_HEIGHT,
    },
  }),
);

const YoutubeSearchForm = memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { videoSearch } = values;

    dispatch(Actions.addYoutubeVideo(videoSearch));

    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ videoSearch: '' }}
      validationSchema={SearchVideoSchema}
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={classes.form}>
          <YoutubeSearchField className={classes.textInput} />
          {/* SUBMIT BUTTON */}

          <Button
            variant='contained'
            color='primary'
            className={classes.submitButton}
            type='submit'
            disabled={isSubmitting}
            component='button'>
            <SearchIcon />
          </Button>
        </Form>
      )}
    </Formik>
  );
});

export default YoutubeSearchForm;
