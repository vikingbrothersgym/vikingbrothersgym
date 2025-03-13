import YoutubePlayer from "react-player/youtube"
import "../CSS/Video.css"
import { useState } from "react";

const Video = ({ url, w = 0 }) => {
    const [width, setWidth] = useState(
        w == 0 ? (window.innerWidth > 1000 ? 50 : 90) : w
    );

    return (
        <div 
          className="player-container" 
          style={{
            width: width+"%",
          }}
        >
            <YoutubePlayer
                url={url}
                controls={true}
                width="100%"
                height="100%"
                />
        </div>
    )
}

export default Video;