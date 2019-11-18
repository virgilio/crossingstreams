import React from 'react';

import VideoEditView from './views/Video/VideoEditView';
import VideoListView from './views/Video/VideoListView';
import VideoView from './views/Video/VideoView';
import SignIn from './views/Auth/SignIn'
import SignUp from './views/Auth/SignUp'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
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
          <Route path="/video/:video" component={VideoView} />
          <Route path="/">
            <VideoListView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
