import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import InfiniteSlider from "@/components/ui/InfiniteSlider";

const VideoSection1 = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is Tailwind's md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale from small to fullscreen
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [0.4, 1, 1, 0.98]
  );

  // Transform border radius
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [100, 30, 30, 50]
  );

  return (
    <motion.div
      ref={containerRef}
      className='relative flex h-screen items-center justify-center '
    >
      <motion.div
        style={{
          scale,
          borderRadius,
        }}
        className='relative w-[96vw] md:w-[100vw] h-[60vh] md:h-screen flex items-center justify-center overflow-hidden'
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
        <InfiniteSlider
          speed={10}
          direction='right'
          textSize='text-5xl'
          textColor='text-white/90'
          separator='⊙'
        />
      </motion.div>
    </motion.div>
  );
};

export default VideoSection1;
