import React from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {VideoCreate, VideoEdit, VideoEmbed, VideoStats} from './views/video/index'

const App = () => {

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/video/edit/:video" component={VideoEdit} />
                    <Route path="/video/stats/:video" component={VideoStats} />
                    <Route path="/video/embed/:video" component={VideoEmbed} />
                    <Route path="/">
                        <VideoCreate />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;