import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';

// MATERIAL
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import SearchVideoSchema from './validation';
import YoutubeSearchField from './youtubeSearchField';

// Store
import { Actions } from '../../../../store/youtube/actions';

import useStyles from './styles';

const YoutubeSearchForm = memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { videoSearch } = values;

    dispatch(Actions.fetchYoutubeVideo(videoSearch));

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
