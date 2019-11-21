class CyoaPlayer {
    constructor(activityHandler) {
        this.activityHandler = activityHandler;
    }

    _setNextActivity = () => {
        if (this.video.activities.length === 0) {
            this.activity = undefined;
        } else {
            this.activity = this.video.activities
                .filter((q) => q.prompt_time > this.player.getCurrentTime())
                .shift();
        }
    }

    _onReady = (event) => {
        this.player = event.target;
        this.player.playVideo();
    };

    _onPlay = (event) => {
        this.player = event.target;
        if (this.currTimeout) {
            clearTimeout(this.currTimeout);
        }
        this._setNextActivity();
        if (this.activity) {
            this.currTimeout = setTimeout(
                this.pausePlayer,
                (this.activity.prompt_time - this.player.getCurrentTime()) * 1000,
            );
        }
    }

    _onPause = (event) => {
        this.player = event.target;
        if (this.currTimeout) {
            clearTimeout(this.currTimeout);
        }
    }

    _onChange = (event) => {
        this.player_status = event.data;
        this.player = event.target;
    };

    resumePlayer = () => {
        this.player.playVideo();
    };

    pausePlayer = () => {
        this.player.pauseVideo();
        this.activityHandler(this.activity);
    }

    reloadPlayerWith = (video_id) => {
        this.player.stopVideo();
        clearTimeout(this.currTimeout);
        this.player.loadVideoById(video_id);
    }

    reloadCyoaPlayerWith = (video) => {
        this.setVideo(video)
        this.reloadPlayerWith(video.yt_video_id);
    }

    resumePlayerAt = (jump_to) => {
        this.player.seekTo(jump_to, true);
        this.player.playVideo()
    }

    setVideo = (video) => {
        this.video = video;
    }

}

export default CyoaPlayer;