"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconBox from "@/components/ui/IconBox";
import IconButton from "@/components/ui/IconButton";
import IconTag1 from "@/components/ui/IconTag1";
import { House, ArrowDownToLine, Heart } from "lucide-react";
import Image from "next/image";

const Section2 = () => {
  const images = [
    "/images/hero/v1.jpg",
    "/images/hero/v2.jpg",
    "/images/hero/v3.jpg",
    "/images/hero/v4.jpg",
    "/images/hero/v5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Set initial load to false after first render
    const timer = setTimeout(() => setIsInitialLoad(false), 100);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [images.length]);

  const slideVariants = {
    enter: {
      x: "100%",
    },
    center: {
      x: 0,
    },
    exit: {
      x: "-100%",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.2,
      }}
      className='relative flex flex-col justify-between md:flex-1 min-h-[70vh] lg:min-h-0 rounded-4xl overflow-hidden'
    >
      {/* Background Image Slideshow */}

      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            duration: 0.8,
            ease: [0.87, 0, 0.13, 1],
          }}
          className='absolute inset-0'
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
            }}
            className='w-full h-full'
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className='object-cover'
              priority
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className='relative z-10 flex justify-between md:px-10 md:py-10 px-6 py-6'>
        <div
          style={{
            fontSize: "clamp(1rem, 1.1vw, 4rem)",
          }}
          className='flex gap-8'
        >
          <motion.p
            initial={{ y: "50%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.3,
            }}
            style={{
              width: "clamp(10rem, 12vw, 18rem)",
            }}
            className='font-medium text-foreground'
          >
            More than 1500 real estate properties
          </motion.p>
          <motion.p
            initial={{ y: "50%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.3,
            }}
            style={{
              width: "clamp(10rem, 12vw, 22rem)",
            }}
            className='hidden sm:block lg:hidden xl:block font-medium w-60 text-foreground'
          >
            From $145,000 with a yield of 10% per annum
          </motion.p>
        </div>

        <div className='flex gap-2'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.2,
            }}
          >
            {" "}
            <IconBox
              iconColor='text-foreground'
              backgroundColor='bg-white/20'
              icon={Heart}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.2,
            }}
          >
            {" "}
            <IconBox backgroundColor='bg-foreground' icon={House} />
          </motion.div>
        </div>
      </div>

      <div className='relative z-10 flex justify-between items-center md:px-8 md:py-8 px-6 py-6'>
        {/* Slideshow indicators - now interactive */}
        <div className='flex gap-2 bg-white/30 md:p-3 p-2 rounded-full'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-black/60" : "bg-black/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.2,
          }}
        >
          {" "}
          <IconTag1 title='Dubai' subtitle='Catalog' icon={ArrowDownToLine} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section2;
