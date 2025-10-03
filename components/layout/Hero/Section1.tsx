"use client";

import IconBox from "@/components/ui/IconBox";
import IconButton from "@/components/ui/IconButton";
import { PanelLeftDashed, Map, Headset } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const Section1 = () => {
  return (
    <div className='flex flex-col justify-between md:flex-1 min-h-[70vh] lg:min-h-0 rounded-4xl'>
      <div className=' flex justify-between items-center px-4 py-0 md:px-8 md:py-6 '>
        <div className='overflow-hidden'>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.3,
            }}
            className=' flex gap-2 items-center'
          >
            <div className='w-4 h-4 bg-black rounded-full' />
            <p className=' text-xl md:text-2xl font-bold tracking-wider'>
              Monte
            </p>
          </motion.div>
        </div>
        <div className=' flex gap-2'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.2,
            }}
          >
            <IconBox icon={Map} />
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
            <IconBox icon={PanelLeftDashed} />
          </motion.div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center text-center'>
        <div
          style={{
            padding: "clamp(1rem, 6vw, 9rem)",
          }}
          className='px-25 '
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.4,
            }}
            style={{
              fontSize: "clamp(1rem, 4vw, 1.2rem)",
            }}
            className='font-bold text-xl mb-3'
          >
            Building Your Dreams
          </motion.p>
          <div
            style={{
              fontSize: "clamp(2rem, 4vw, 8rem)",
            }}
            className='font-semibold tracking-tighter -space-y-3 md:-space-y-6'
          >
            <div className='overflow-hidden'>
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 0.2,
                }}
              >
                Real Estate in Dubai:{" "}
              </motion.p>
            </div>
            <div className='overflow-hidden'>
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 0.3,
                }}
              >
                Ideal for Living and
              </motion.p>
            </div>
            <div className='overflow-hidden'>
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 0.4,
                }}
              >
                Investing
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between px-0 py-2 md:px-8 md:py-6'>
        <IconButton
          icon={Headset}
          text='Contact Us Now'
          onClick={() => console.log("Clicked!")}
        />
        <div
          style={{
            fontSize: "clamp(1rem, 1vw, 4rem)",
          }}
          className=' text-lg text-right flex flex-col overflow-hidden -space-y-4 sm:-space-y-1'
        >
          <motion.div
            className='-space-y-1'
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.5,
            }}
          >
            <p className=' font-bold'>Explore All</p>
            <p className=' font-medium'>Our Properties</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
