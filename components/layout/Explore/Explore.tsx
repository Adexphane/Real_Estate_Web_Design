"use client";

import TabSlider from "@/components/ui/TabSlider";
import { ArrowLeft, HousePlus, LandPlot, MapPin } from "lucide-react";
import Image from "next/image";
import React, { useState, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import IconBox2 from "@/components/ui/IconBox2";
import IconBox from "@/components/ui/IconBox";
import IconBox3 from "@/components/ui/IconBox3";

// Constants
const CATEGORIES = ["Apartment", "V Neo", "For Rent"];

// Types
interface PriceOption {
  label: string;
  price: string;
}

interface Property {
  id: string;
  title: string;
  location: string;
  imageSrc: string;
  priceOptions: PriceOption[];
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

// PropertyCard Component
const PropertyCard = ({ property }: { property: Property }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className='flex flex-1 overflow-hidden relative flex-col p-7 sm:p-10 justify-between bg-neutral-200 h-[60vh] sm:h-[70vh] lg:h-[80vh] rounded-4xl'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Image with zoom effect */}
      <motion.div
        className='absolute inset-0 rounded-4xl overflow-hidden'
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      >
        <Image
          src={property.imageSrc}
          alt={property.title}
          fill
          className='object-cover rounded-4xl'
          priority
        />
      </motion.div>

      {/* Hover overlay */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-4xl z-[1]'
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Base gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-4xl z-[1]' />

      {/* Header */}
      <div className='flex justify-between z-10'>
        <motion.p
          className='text-lg sm:text-xl text-foreground leading-tight'
          variants={fadeInDown}
          initial='hidden'
          animate={isHovered ? "visible" : "hidden"}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        >
          {property.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: isHovered ? 0 : -10 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        >
          <IconBox2 backgroundColor='bg-foreground' icon={ArrowLeft} />
        </motion.div>
      </div>

      {/* Content on hover */}
      <motion.div
        className='relative flex flex-col gap-3 z-10'
        variants={fadeInUp}
        initial='hidden'
        animate={isHovered ? "visible" : "hidden"}
        transition={{ duration: 0.3, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* Location badge */}
        <div className='flex justify-end'>
          <div className='flex items-center justify-center bg-blue-100 rounded-2xl px-3 sm:px-4 py-3 sm:py-4'>
            <div className='flex items-center gap-1 font-medium text-lg leading-tight'>
              <MapPin strokeWidth={1.6} className='w-5 h-5 sm:w-6 sm:h-6' />
              <span className='font-semibold text-sm leading-tight'>
                {property.location}
              </span>
            </div>
          </div>
        </div>

        {/* Price options */}
        <div className='flex gap-2 justify-end flex-wrap'>
          {property.priceOptions.map((option, index) => (
            <motion.div
              key={index}
              className='flex w-fit pr-6 overflow-hidden flex-col justify-between bg-neutral-50 h-[8vh] sm:h-[12vh] p-3 rounded-2xl'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <div className='text-xs font-semibold leading-tight'>
                {option.label}
              </div>
              <div className='font-bold text-base leading-tight'>
                {option.price}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Static title at bottom */}
      <motion.p
        className='absolute w-fit bottom-5 left-0 right-0 px-6 md:px-8 py-2 md:py-4 text-lg sm:text-xl leading-tight text-foreground z-10'
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {property.title}
      </motion.p>
    </motion.div>
  );
};

const Explore = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const properties: Property[] = useMemo(
    () => [
      {
        id: "1",
        title: "Azure Height PentHouse Residences",
        location: "Dubai Martins",
        imageSrc: "/images/hero/v1.jpg",
        priceOptions: [
          { label: "Double Quarterly", price: "From $190k" },
          { label: "Single Quarterly", price: "From $150k" },
          { label: "Annual", price: "From $500k" },
        ],
      },
      {
        id: "2",
        title: "Skyline Luxury Apartments",
        location: "Manhattan NYC",
        imageSrc: "/images/hero/v2.jpg",
        priceOptions: [
          { label: "Monthly", price: "From $250k" },
          { label: "Quarterly", price: "From $700k" },
        ],
      },
      {
        id: "3",
        title: "Oceanview Paradise Villas",
        location: "Malibu Beach",
        imageSrc: "/images/hero/v3.jpg",
        priceOptions: [
          { label: "Summer Season", price: "From $400k" },
          { label: "Winter Season", price: "From $350k" },
          { label: "Full Year", price: "From $1.2M" },
        ],
      },
      {
        id: "4",
        title: "Oceanview Paradise Villas",
        location: "Malibu Beach",
        imageSrc: "/images/hero/v3.jpg",
        priceOptions: [
          { label: "Summer Season", price: "From $400k" },
          { label: "Winter Season", price: "From $350k" },
          { label: "Full Year", price: "From $1.2M" },
        ],
      },
      {
        id: "5",
        title: "Oceanview Paradise Villas",
        location: "Malibu Beach",
        imageSrc: "/images/hero/v3.jpg",
        priceOptions: [
          { label: "Summer Season", price: "From $400k" },
          { label: "Winter Season", price: "From $350k" },
          { label: "Full Year", price: "From $1.2M" },
        ],
      },
      {
        id: "6",
        title: "Oceanview Paradise Villas",
        location: "Malibu Beach",
        imageSrc: "/images/hero/v3.jpg",
        priceOptions: [
          { label: "Summer Season", price: "From $400k" },
          { label: "Winter Season", price: "From $350k" },
          { label: "Full Year", price: "From $1.2M" },
        ],
      },
      // Add more properties here to automatically create more grids
    ],
    []
  );

  // Chunk properties into rows of 2
  const propertyRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < properties.length; i += 2) {
      rows.push(properties.slice(i, i + 2));
    }
    return rows;
  }, [properties]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale }}
      className='flex flex-col px-4 sm:px-8 bg-neutral-900 rounded-b-4xl pt-30 pb-10'
    >
      {/* Header section */}
      <div className='flex flex-col md:flex-row justify-between items-start sm:items-center gap-4 lg:gap-4'>
        <h1 className='xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-left font-medium tracking-tight text-white'>
          Explore Our Property Portfolio
        </h1>
        <TabSlider categories={CATEGORIES} />
      </div>

      {/* Dynamic property grid */}
      <div className='flex flex-col gap-8 lg:gap-8'>
        {propertyRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex flex-col lg:flex-row gap-8 lg:gap-8 h-[100vh] sm:h-[180vh] lg:h-[80vh]  ${
              rowIndex === 0 ? "mt-25" : "mt-0"
            }`}
          >
            {row.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ))}
      </div>
      <div className='flex md:flex-row flex-col items-center justify-between gap-16 mt-10 mb-6'>
        <p className=' hidden md:block text-foreground'>
          Never miss out on hot deals
        </p>
        <button className='relative left-0 -translate-x-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 bg-blue-50/90 text-base sm:text-sm px-4 py-2 font-semibold rounded-full'>
          All Properties
        </button>
        <div className='  md:flex hidden gap-2'>
          <IconBox3 icon={LandPlot} backgroundColor='bg-white/90' />
          <IconBox3 icon={HousePlus} backgroundColor='bg-white/90' />
        </div>
      </div>
    </motion.div>
  );
};

export default Explore;
