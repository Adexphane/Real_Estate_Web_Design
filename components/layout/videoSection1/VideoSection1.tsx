import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VideoSection1 = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale from small to fullscreen
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [0.4, 1, 1, 0.7]
  );

  // Optional: Also transform border radius to go from rounded to sharp corners
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [70, 0, 0, 70]
  );

  return (
    <div
      ref={containerRef}
      className='relative flex h-screen items-center justify-center'
    >
      <motion.div
        style={{
          scale,
          borderRadius,
        }}
        className='relative w-[90vw] md:w-[100vw] h-[60vh] md:h-screen shadow-2xl flex items-center justify-center overflow-hidden'
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute top-0 left-0 w-full h-full object-cover'
        >
          <source src='/videos/v1.mp4' type='video/mp4' />
          <source src='/videos/v1.webm' type='video/webm' />
          Your browser does not support the video tag.
        </video>

        {/* Optional: Dark overlay for better text readability */}
        <div className='absolute top-0 left-0 w-full h-full bg-black/30' />

        {/* Content */}
        <p className='relative z-10 text-white text-2xl font-bold'>Scale Box</p>
      </motion.div>
    </div>
  );
};

export default VideoSection1;
