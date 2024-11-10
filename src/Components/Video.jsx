import YoutubePlayer from "react-player/youtube"
import "../CSS/Video.css"
import { useState } from "react";

const Video = ({ url, w = "normal" }) => {
    const [width, setWidth] = useState(
        w == "normal" ? (window.innerWidth > 1000 ? 50 : 90) 
        : (window.innerWidth > 1000 ? 90 : 90)
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

export default Video