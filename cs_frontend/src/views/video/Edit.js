import React from 'react';
import axios from 'axios';

import Container from '../components/Container';
import YoutubePlayer from '../../cyoa/YoutubePlayer';
import ActivityEditor from '../../cyoa/ActivityEditor';

const VideoEdit = (props) => {
    const [state, setState] = React.useState({
        video: undefined,
        loaded: false,
        error: false,
        dataLoaded: false
    });

    const handleLoadedVideo = (video) => {
        setState({
            ...state,
            video: video,
            loaded: true
        });
    }

    const onPlayerReady = (event) => {
        if (state.video.duration === 0) {
            let video = {
                id: state.video.id,
                duration: event.target.getDuration(),
                title: event.target.getVideoData().title
            }
            axios.put(`/api/video/${state.video.id}/`, video)
                .then(res => {
                    console.log(res);
                    setState({
                        ...state,
                        dataLoaded: true,
                    });
                })
                .catch();
        } else {
            setState({
                ...state,
                dataLoaded: true,
            });
        }
    }

    React.useEffect(() => {
        if (!state.video && !state.error) {
            axios.get(`/api/video/${props.match.params.video}`)
                .then(res => {
                    setTimeout(handleLoadedVideo, 1000, res.data);
                })
                .catch(err => {
                    setTimeout(setState, 1000, {
                        ...state,
                        error: true
                    });
                });
        }
    });

    const activityChangeHandler = (newActivity) => {
        let activity = state.video.activities
            .filter((a) => a.id === newActivity.id)
            .shift();
        let activities = activity ?
            [...state.video.activities.filter(q => q.id !== newActivity.id)] :
            [...state.video.activities];
        setState({
                ...state,
                video: {
                    ...state.video,
                    activities: [
                        ...activities,
                        newActivity
                    ]
                }
        });
    }

    if (state.video) {
        return (
            <Container
                loader={!state.dataLoaded}
                title={state.video.title ? `${state.video.title} (${state.video.duration}s)` : "Video loaded, looking if everything is good..."}
                color="warning">
                <div className="row justify-content-center"
                    style={{ backgroundColor: "#000000" }}>
                    <YoutubePlayer
                        onReady={onPlayerReady}
                        loadVideo={state.loaded}
                        video={state.video.yt_video_id}>
                    </YoutubePlayer>
                </div>
                <ActivityEditor
                    onActivityChange={activityChangeHandler}
                    loadEditor={state.loaded}
                    video={state.video}>
                </ActivityEditor>
            </Container>
        );
    } else if (state.error) {
        return (
            <Container>
                <div className="alert alert-danger" role="alert">
                    Something went wrong loading data =( Please, try again later!
                </div>
            </Container>
        );
    } else {
        return (
            <Container
                loader={true}
                title="We are working..."
                color="danger"></Container>
        );
    }
};

export default VideoEdit;