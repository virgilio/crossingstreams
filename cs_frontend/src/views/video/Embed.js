import React from 'react';
import axios from 'axios';

import YoutubePlayer from '../../cyoa/YoutubePlayer';
import CyoaPlayer from '../../cyoa/CyoaPlayer';
import Container from '../components/Container';

import Question from '../../cyoa/activities/Question';
import GetEmail from '../../cyoa/activities/GetEmail';

const VideoEmbed = (props) => {
    const [video, setVideo] = React.useState({
        data: {
            yt_video_id: undefined
        },
        loadVideo: false,
    });

    const [activity, setActivity] = React.useState({
        show: false,
        type: undefined,
        activity: undefined,
    });

    const activityHandler = (activity) => {
        setActivity({
            show: true,
            type: activity.activity_type,
            activity: activity
        });
    }

    const saveQuestionAnswer = (option) => {
        axios
            .post('/api/answer/', {
                activity: option.activity,
                answer: option.id
            })
            .then(res => console.log('Answer Saved'))
            .catch(err => console.log(err))
    }

    const saveEmail = (viewer_email, activity_id) => {
        axios
            .post('/api/answer/', {
                viewer_email: viewer_email,
                activity: activity_id
            })
    }

    const handleActivityClose = (data) => {
        if (activity.type === 'question') {
            if(data) {
                let option = activity.activity.options
                    .filter(o => o.id === Number(data)).shift()
                saveQuestionAnswer(option);
                switch (option.action) {
                    case 'change_video':
                        cyoa.setVideo(undefined);
                        setVideo({
                            ...video,
                            data: {
                                yt_video_id: option.jump_to_video,
                                activities: []
                            }
                        })
                        cyoa.reloadPlayerWith(option.jump_to_video);
                        break;
                    case 'jump_to':
                        cyoa.resumePlayerAt(option.jump_to_time);
                        break;
                    default:
                        cyoa.resumePlayer();
                }
            } else {
                cyoa.resumePlayer();
            }
        } else if (activity.type === 'email') {
            if (data) {
                saveEmail(data, activity.activity.id);
            }
            cyoa.resumePlayer();
        }
        setActivity({
            show: false,
            type: undefined,
            activity: undefined
        });
    }

    React.useEffect(() => {
        if (!video.data.yt_video_id) {
            axios
                .get(`/api/video/${props.match.params.video}`)
                .then(res => {
                    setVideo({
                        ...video,
                        data: res.data,
                    }, [video, props.match.params.video]);
                })
                .catch(err => console.log(err))
        } else if (!video.loadVideo) {
            setTimeout(setVideo, 1000, {
                ...video,
                loadVideo: true
            }, [video, props.match.params.video])
        }
    });

    let cyoa = new CyoaPlayer(activityHandler);
    if (video.data.yt_video_id && video.loadVideo) {
        cyoa.setVideo(video.data);
        return (
            <div>
                <YoutubePlayer
                    onReady={cyoa._onReady}
                    onPlay={cyoa._onPlay}
                    onPause={cyoa._onPause}
                    onChange={cyoa._onChange}
                    loadVideo={video.loadVideo}
                    video={video.data.yt_video_id}>
                </YoutubePlayer>
                <Question handleClose={handleActivityClose}
                    activity={activity.activity}
                    show={activity.show && activity.type === 'question'} />
                <GetEmail handleClose={handleActivityClose}
                    activity={activity.activity}
                    show={activity.show && activity.type === 'email'}
                ></GetEmail>
            </div>
        );
    } else {
        return (
            <Container>
                Loading the Video!
            </Container>
        );
    }
};

export default VideoEmbed;