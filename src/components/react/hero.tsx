import React from "react";

const Hero = () => {
  return (
    <div className="px-4">
      <div className="relative w-full h-[80vh] overflow-hidden rounded-lg">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://files.duckhou.se/video-bg-caterina-capstone.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-[600px]">
              <h1 className="text-5xl font-bold text-white mb-6">
                Health on your wrist
              </h1>
              <p className="text-xl text-white/90">
                Advanced health tracking meets intelligent coaching. Chronos
                helps you understand your body, optimize your workouts, and
                achieve your fitness goals with precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
