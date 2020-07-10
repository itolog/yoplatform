import React, { memo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './styles';
import NavBar from './NavBar/NavBar';

const Header: React.FC = memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <NavBar />
        </Toolbar>
      </AppBar>
    </div>
  );
});
export default Header;
