import React, { memo } from 'react';
import Link from 'next/link';

import useStyles from './styles';
import navItems from './navItems';

const NavBar: React.FC = memo(() => {
  const classes = useStyles();
  return (
    <ul className={classes.navigation}>
      {navItems.map((items) => {
        return (
          <li key={items.id} className={classes.navigationItems}>
            <Link
              href={items.path}>
              <a className={classes.navigationLink}> {items.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
});

export default NavBar;
