import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = (props) => {
    const opts = {
        playerVars: {
            // controls: 0,
            disablekb: 1,
            iv_load_policy: 3,
            modestbranding: 1,
            showinfo: 0,
            autoplay: 0,
            rel: 0
        }
        // https://developers.google.com/youtube/player_parameters
    }

    if (props.loadVideo) {
        return (
            <div>
                <YouTube
                    id={props.video}
                    videoId={props.video}
                    opts={opts}
                    onReady={props.onReady}
                    onPlay={props.onPlay}
                    onPause={props.onPause}
                    onStateChange={props.onChange} />
            </div>
        );
    } else {
        return (
            <div style={{
                visibility: "hidden",
                minHeight: "360px"
            }}></div>);
    }

};

export default YoutubePlayer;
