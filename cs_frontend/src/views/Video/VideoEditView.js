import React from 'react';

import { List, ListItem, ListItemText, Grid } from '@material-ui/core';
import HeaderComponent from '../../components/HeaderComponent';

import '../../App.css';

import VideoAction from '../../components/VideoEditFormComponent';
import VideoWrapper from '../../components/VideoWrapperComponent';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function VideoEditView() {

  const handleClick = (event) => {

  };

  return (
    <div className="App" style={{ flexGrow: 1, }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch">
        <Grid
          item
          direction="column"
          justify="center"
          alignItem="stretch">
          <HeaderComponent />
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          spacing={2}
          alignItems="stretch">
          <Grid
            item
            xs>
            <section>
              <VideoWrapper></VideoWrapper>
              <VideoAction></VideoAction>
            </section>
          </Grid>
          <Grid item xs={2}>
            <aside class="related-videos">
              <List component="nav" aria-label="main related-videos">
                <ListItem button>
                  <ListItemText onClick={handleClick} primary="Video 01" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Video 02" />
                </ListItem>
              </List>
            </aside>
            <aside class="video-information">
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                  <ListItemText primary="Tweets" />
                </ListItem>
                <ListItemLink href="#simple-list">
                  <ListItemText primary="Viewers" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                  <ListItemText primary="Stats" />
                </ListItemLink>
              </List>
            </aside>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default VideoEditView;
