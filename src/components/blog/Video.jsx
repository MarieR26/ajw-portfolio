import React from "react";
import YouTube from "react-youtube";
// https://youtu.be/9ZludpemynY
// https://www.youtube.com/watch?v=9ZludpemynY
// https://www.youtube.com/watch?v=9ZludpemynY&t=6s&ab_channel=CVR-CentralVietnamRealty

export default class Example extends React.Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const { videoId } = this.props;

    return (
      <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
    );
  }
}
