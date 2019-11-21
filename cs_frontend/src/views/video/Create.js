import React from 'react';
import axios from 'axios';

import Container from '../components/Container';

const VideoCreate = () => {
    const [data, setData] = React.useState({status: 'loaded'});

    const handleCreateVideo = (event) => {
        event.preventDefault();
        axios.post('/api/video/', data)
            .then(res => setData({ ...data, status: 'sent' }))
            .catch((err) => setData({ ...data, status: 'error', error: err }));
    }

    const emailChange = event => setData({ ...data, email: event.target.value });
    const videoChange = event => setData({ ...data, yt_video_id: event.target.value });

    if (data.status === 'loaded') {
        return (
            <Container>
                <p>{data.status}To create a video, just put your e-mail and the Youtube Video ID bellow</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="emailInput">Your e-mail</label>
                        <input type="email" onChange={emailChange} className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="videoID">Your e-mail</label>
                        <input type="text" onChange={videoChange} className="form-control" id="videoIDInput" aria-describedby="videoIDHelp" placeholder="Youtube Video ID.. it's right after the v= in the url" />
                        <small id="videoIDHelp" className="form-text text-muted">It's right after the v= in the url youtube.com/watch?v=MyV1D30ID and before any &</small>
                    </div>
                    <button type="submit" onClick={handleCreateVideo} className="btn btn-primary">Send me my Video to edit!</button>
                </form>
            </Container>
        );
    } else if (data.status === 'sent') {
        return (
            <Container>
                <p>Verify your e-mail! and you will find instructions to edit and share your video!</p>
            </Container>
        );
    } else {
        return (
            <Container>
                <div className="alert alert-danger" role="alert">
                    <h4>Sorry</h4>
                    <p>An error has occurred creating your video :( Reload and try again </p>
                </div>
                <div className="alert alert-danger" role="alert">
                    <p>Contact us with the following message:</p>
                    <pre>{JSON.stringify(data.error, null, 2)}</pre>
                </div>
            </Container>
        );
    }
};

export default VideoCreate;