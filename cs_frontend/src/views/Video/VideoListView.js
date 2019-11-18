import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import axios from 'axios';

import '../../App.css';


function VideoListView() {
  axios.get('api/video/?user__email=admin@admin.com').then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  });

  return (
    <div className="App" style={{ flexGrow: 1, }}>
      <HeaderComponent></HeaderComponent>
      List of videos
    </div>
  );
}

export default VideoListView;