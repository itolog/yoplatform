import React from 'react';

import useStyles from './styles';

const Chat = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>CHAT</h1>
    </div>
  );
};

export default Chat;
