import React from 'react'
import {
  // Button,
  AppBar,
  Toolbar,
  Typography,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';
import AlertDialog from '../components/dialog';
import Sidenav from '../components/sidemenu';

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#333333' }}>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Sidenav/>
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              LearnStuff
            </Link>
          </Typography>
          <AlertDialog />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
