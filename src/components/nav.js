import React from 'react'
import {
  // Button,
  AppBar,
  Toolbar,
  Typography,
  Hidden
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AlertDialog from '../components/dialog';
import Sidenav from '../components/sidemenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  bgColor: {
    backgroundColor: '#333333'
  }
}));

const Nav = () => {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.bgColor}>
            <Hidden smUp>
              <Sidenav/>
            </Hidden>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                LearnStuff
              </Link>
            </Typography>
            <AlertDialog />
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Nav;
