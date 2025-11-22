const HiperVideo = ({video}) => {
    return (
        <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay
            loop
            muted
            playsInline
        />
    );
}

export default HiperVideo;