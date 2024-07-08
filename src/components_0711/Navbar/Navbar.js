import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import gmail from '../assets/Gmail_icon.png';
import { Avatar, Grid } from '@mui/material';
import lens from '../assets/kisspng-computer-icons.jpg';
import './Navbar.css';
import { auth } from '../firebase/setup';

const Navbar = () => {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="static" sx={{ backgroundColor: '#f9f9f9', minHeight: '5vw', paddingTop: '7px', paddingRight: '30px' }}>
          <Toolbar variant="dense">
            <Grid item xs={2}>
              <div className="icon-box">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, color: '#3c3c3c' }}>
                  <MenuIcon sx={{ width: '2vw' }} />
                </IconButton>
                <img src={gmail} style={{ width: '2vw' }} />
                <Typography variant="h6" color="inherit" component="div" sx={{ marginLeft: '10px', color: '#3c3c3c', fontSize: '1.6vw' }}>
                  Gmail
                </Typography>
              </div>
            </Grid>
            <Grid item xs={9}>
              <div className="search-box">
                <img src={lens} />
                <input placeholder="Search mail" />
              </div>
            </Grid>
            <Grid item xs={1}>
              <Avatar sx={{ marginLeft: '7.5vw' }} src={auth.currentUser?.photoURL}></Avatar>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default Navbar;
