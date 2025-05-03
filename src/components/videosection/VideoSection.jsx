import React, { useEffect, useRef, useState } from "react";
import "./videosection.css";
import HighResolutionVideo from "../../assets/videos/forest_high.webm";
import LowResolutionVideo from "../../assets/videos/forest_low.webm";

const VideoSection = () => {
  const videoRef = useRef(null);
  const sourceRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFile, setVideoFile] = useState(LowResolutionVideo);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        const source = sourceRef.current;

        if (entry.isIntersecting && !videoLoaded) {
          setVideoFile(
            window.innerWidth >= 673 ? HighResolutionVideo : LowResolutionVideo
          );
          source.src = videoFile;
          video.load();
          setVideoLoaded(true);
        }

        if (!entry.isIntersecting && video) {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );

    const videoElement = videoRef.current;
    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, [videoLoaded, videoFile]);

  const handleToggleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.muted = false;
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="video">
      <div className="video_container">
        <div className="video_wrapper">
          <video
            className="video_player"
            ref={videoRef}
            muted
            loop
            preload="none"
          >
            <source
              ref={sourceRef}
              src={LowResolutionVideo}
              type="video/mp4"
              media="(max-width: 672px)"
            />
            <source
              src={HighResolutionVideo}
              type="video/mp4"
              media="(min-width: 673px)"
            />
            <track kind="captions" srcLang="en" src="" label="English" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video_overlay"></div>
        <div className="video_content">
          <p>
            The internet plays a crucial role in modern life, but its
            environmental impact is often overlooked. From data centers to
            website performance, every digital interaction consumes energy. By
            embracing sustainable web design, we can reduce carbon emissions,
            optimize efficiency, and create a digital ecosystem that aligns with
            our planet’s needs. At the heart of a greener web lies minimalist
            design, optimized code, and eco-friendly hosting solutions.
          </p>
          <button className="video_play_button" onClick={handleToggleClick}>
            {isPlaying ? "⏹ Stop Video" : "▶ Play Video"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
