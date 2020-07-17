import React, { memo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './styles';
import NavBar from './NavBar/NavBar';

const Header: React.FC = memo(() => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar variant='dense'>
        <NavBar />
      </Toolbar>
    </AppBar>
  );
});
export default Header;
