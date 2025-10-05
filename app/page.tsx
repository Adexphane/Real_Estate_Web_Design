"use client";

import Explore from "@/components/layout/Explore/Explore";
import Hero from "@/components/layout/Hero/Hero";
import VideoSection1 from "@/components/layout/videoSection1/VideoSection1";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      wheelMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <div className=' overflow-hidden'>
      <div className=' z-20'>
        <Hero />
      </div>
      <div className='mt-60 md:mt-100 lg:mt-10 -z-10'>
        <VideoSection1 />
      </div>
      <div className='mt-20'>
        <Explore />
      </div>
      <div className='h-[100vh]' />
    </div>
  );
}
