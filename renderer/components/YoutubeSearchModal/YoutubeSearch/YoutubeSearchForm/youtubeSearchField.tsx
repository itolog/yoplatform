import React, { memo } from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';

interface Props {
  className: string;
}

const YoutubeSearchField: React.FC<Props> = memo(({ className }) => {
  return (
    <Field name='videoSearch'>
      {({ field }) => (
        <TextField
          autoFocus={true}
          className={className}
          label={'Поиск'}
          type='text'
          {...field}
        />
      )}
    </Field>
  );
});

export default YoutubeSearchField;
