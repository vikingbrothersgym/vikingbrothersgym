import YoutubePlayer from "react-player/youtube"
import { useState } from "react";

export default function Video({ className, url }) {
    return (
        <div className={`overflow-hidden rounded-xl aspect-video ${className}`} >
            <YoutubePlayer
                url={url}
                controls={true}
                width="100%"
                height="100%"
            />
        </div>
    )
}
