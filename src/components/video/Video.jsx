export default function Video({ className = "", url }) {
    const getVideoId = (url) => {
        try {
            const parsedUrl = new URL(url);

            if (parsedUrl.hostname === "youtu.be") {
                return parsedUrl.pathname.slice(1);
            }

            if (parsedUrl.hostname.endsWith("youtube.com")) {
                if (parsedUrl.pathname === "/watch") {
                    return parsedUrl.searchParams.get("v");
                }

                const match = parsedUrl.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/);
                return match?.[1] ?? null;
            }

            return null;
        } catch {
            return null;
        }
    };

    const videoId = getVideoId(url);

    if (!videoId) return null;

    return (
        <div className={`overflow-hidden rounded-xl aspect-video ${className}`}>
            <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title="Vídeo de YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
}