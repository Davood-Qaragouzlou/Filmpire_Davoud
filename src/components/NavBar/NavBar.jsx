/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  AppBar, IconButton, Toolbar, Button, Avatar, useMediaQuery, Drawer,
} from '@mui/material';
import {
  Menu, AccountCircle, Brightness4, Brightness7,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import Sidebar from '../Sidebar/Sidebar';
import useStyles from './styles';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  // if sth is larger than 600px then its not gonna be mobile
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton color="inherit" edge="start" style={{ outline: 'none' }} onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)} className={classes.menuButton}>
            <Menu />
          </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'search...'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp;
                {' '}
                <AccountCircle />
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/profile/:id" className={classes.linkButton} onClick={() => {}}>
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar style={{ width: 30, height: 30 }} alt="Profile" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmicrobiology.ucr.edu%2Fimage%2Fprofile-image-placeholder&psig=AOvVaw20wtodZk41-aB2g7P7FaYU&ust=1684639095223000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDkper3gv8CFQAAAAAdAAAAABAE" />
              </Button>
            )}
          </div>
          {isMobile && 'search...'}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
