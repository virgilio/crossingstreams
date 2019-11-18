import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

import HeaderComponent from '../../components/HeaderComponent';

import '../../App.css';

import VideoWrapper from '../../components/VideoWrapperComponent';

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(1, 2),
//   },
//   link: {
//     display: 'flex',
//   },
//   icon: {
//     marginRight: theme.spacing(0.5),
//     width: 20,
//     height: 20,
//   },
// }));

function VideoView() {
  // const classes = useStyles();

  return (
    <div className="App" style={{ flexGrow: 1, }}>
      <HeaderComponent></HeaderComponent>
      <VideoWrapper></VideoWrapper>
    </div>
  );
}

export default VideoView;
