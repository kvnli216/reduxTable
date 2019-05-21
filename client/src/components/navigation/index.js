import React from 'react';
import {
  Divider, Drawer, MenuList, MenuItem,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './navigation.css';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});


const Navigation = (props) => {
  const { classes, children } = props;
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <MenuList>
          <h1 className="nav-title" variant="h6">Navigation</h1>
          <Divider />
          <MenuItem component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem component={Link} to="/about">
            About
          </MenuItem>
          <MenuItem component={Link} to="/contact">
            Contact
          </MenuItem>
        </MenuList>
      </Drawer>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
};

export default withStyles(styles)(Navigation);
