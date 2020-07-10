import React, { useState } from 'react';
// Material UI
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { youtubeService } from '../../shared/services/youtube.service';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  }),
);

const YoutubeSearch = () => {
  const classes = useStyles();

  const [value, setValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  const handleSearch = async () => {
    if (value.trim().length) {
      const response = await youtubeService.search(value);
      console.log('from client', response);
    } else {
      console.log('Tape value');
    }
  };

  return (
    <div className={classes.root}>
      <TextField
        id='outlined-full-width'
        label='Поиск'
        style={{ margin: 8 }}
        placeholder='Поиск'
        fullWidth
        value={value}
        onChange={handleInputChange}
        margin='normal'
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
      />
      <IconButton
        onClick={handleSearch}
        color='primary'
        aria-label='search video'
        component='button'>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default YoutubeSearch;
