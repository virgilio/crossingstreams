import React from 'react';
import YouTube from 'react-youtube';
import Slider from '@material-ui/core/Slider';

const VideoWrapper = () => {
    const opts = {
        playerVars: {}
        // https://developers.google.com/youtube/player_parameters
    }
    let player_status = -1;
    let player = undefined;
    const [value, setValue] = React.useState(0);

    const _onReady = (event) => {
        player = event.target;
    };

    const _onChange = (event) => {
        player_status = event.data;
        player = event.target;
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (player_status && player) {
            player.seekTo(newValue, true);
        }
    };


    return (
        <div>
            <YouTube
                videoId="2g811Eo7K8U"
                id="VIDEO01"
                opts={opts}
                onReady={_onReady}
                onStateChange={_onChange} />
            <div>
                <Slider value={value} max={26} onChange={handleChange} aria-labelledby="continuous-slider" />
            </div>
        </div>
    );
};

export default VideoWrapper;
