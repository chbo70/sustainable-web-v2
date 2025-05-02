import React, { useEffect, useRef } from "react";
import "./videosection.css";
import HighResolutionVideo from "../../assets/videos/forest_high.mp4";
import LowResolutionVideo from "../../assets/videos/forest_low.webm";

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.muted = true;
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.6 }
    );

    const videoElement = videoRef.current;
    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  return (
    <section className="video">
      <div className="video_container">
        <div className="video_wrapper">
          <video className="video_player" muted autoPlay loop>
            <source
              src={LowResolutionVideo}
              type="video/mp4"
              media="(max-width: 672px)" // Load low resolution on mobile devices
            />
            <source
              src={HighResolutionVideo}
              type="video/mp4"
              media="(min-width: 673px)" // Load high resolution on larger screens
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video_overlay"></div>
        <div className="video_content">
          The internet plays a crucial role in modern life, but its
          environmental impact is often overlooked. From data centers to website
          performance, every digital interaction consumes energy. By embracing
          sustainable web design, we can reduce carbon emissions, optimize
          efficiency, and create a digital ecosystem that aligns with our
          planet’s needs. At the heart of a greener web lies minimalist design,
          optimized code, and eco-friendly hosting solutions.
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
