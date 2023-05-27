/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import {
  Actors, MovieInformation, Profile, Movies, NavBar,
} from '.';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path={['/', '/approved']}>
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};


export default App;
