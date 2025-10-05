import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface TabSliderProps {
  categories: string[];
  onTabChange?: (category: string, index: number) => void;
  defaultIndex?: number;
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  sliderClassName?: string;
}

interface SliderStyle {
  width: number;
  left: number;
}

const TabSlider = ({
  categories,
  onTabChange,
  defaultIndex = 0,
  className = "",
  tabClassName = "",
  activeTabClassName = "",
  sliderClassName = "",
}: TabSliderProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);
  const [sliderStyle, setSliderStyle] = useState<SliderStyle>({
    width: 0,
    left: 0,
  });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (tabRefs.current[activeIndex]) {
      const tab = tabRefs.current[activeIndex];
      if (tab) {
        setSliderStyle({
          width: tab.offsetWidth,
          left: tab.offsetLeft,
        });
      }
    }
  }, [activeIndex]);

  const handleTabClick = (index: number): void => {
    setActiveIndex(index);
    if (onTabChange) {
      onTabChange(categories[index], index);
    }
  };

  return (
    <div
      className={`relative flex gap-3 text-sm font-medium bg-neutral-800  py-2 rounded-lg ${className}`}
    >
      {/* Animated background slider */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 h-full  bg-white/90 rounded-md  ${sliderClassName}`}
        animate={{
          width: sliderStyle.width,
          left: sliderStyle.left,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Tab items */}
      {categories.map((item, index) => (
        <button
          key={index}
          ref={(el) => (tabRefs.current[index] = el)}
          onClick={() => handleTabClick(index)}
          className={`relative z-10 sm:px-4 px-4 text-nowrap transition-colors duration-200 cursor-pointer ${
            activeIndex === index
              ? `text-neutral-900 font-semibold ${activeTabClassName}`
              : `text-white/80 ${tabClassName}`
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default TabSlider;
