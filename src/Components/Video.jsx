import YoutubePlayer from "react-player/youtube"
import "../CSS/Video.css"

const Video = ({ url }) => {
    return (
        <div className="player-container">
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