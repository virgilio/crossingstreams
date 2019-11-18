import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import VideoEditView from './views/Video/VideoEditView';
import VideoListView from './views/Video/VideoListView';
import VideoView from './views/Video/VideoView';
import SignIn from './views/Auth/SignIn'
import SignUp from './views/Auth/SignUp'
import { AppBar, Typography, Toolbar } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Company name
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/join">
            <SignUp />
          </Route>
          <Route path="/video/edit">
            <VideoEditView />
          </Route>
          <Route path="/video">
            <VideoView />
          </Route>
          <Route path="/">
            <VideoListView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
