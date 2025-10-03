"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface IconButtonProps {
  icon: LucideIcon;
  text: string;
  onClick?: () => void;
  iconSize?: number;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export default function IconButton({
  icon: Icon,
  text,
  onClick,
  iconSize = 40,
  className = "",
  iconClassName = "",
  textClassName = "",
}: IconButtonProps) {
  // Calculate responsive icon sizes based on the iconSize prop
  const mobileSize = Math.round(iconSize * 0.7); // 70% of base size
  const tabletSize = Math.round(iconSize * 0.85); // 85% of base size
  const desktopSize = iconSize; // 100% of base size

  return (
    <div className='relative'>
      <div className='overflow-hidden'>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 1,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.5,
          }}
          onClick={onClick}
          className={`flex items-center gap-2 sm:gap-3 bg-black w-fit rounded-full p-1.5 pr-3 sm:p-2 sm:pr-5 cursor-pointer hover:bg-black/90 transition-colors ${className}`}
        >
          <Icon
            size={mobileSize}
            className={`p-1.5 sm:p-2 bg-white text-black/80 rounded-full sm:hidden ${iconClassName}`}
          />
          <Icon
            size={tabletSize}
            className={`p-1.5 sm:p-2 bg-white text-black/80 rounded-full hidden sm:block md:hidden ${iconClassName}`}
          />
          <Icon
            size={desktopSize}
            className={`p-2 bg-white text-black/80 rounded-full hidden md:block ${iconClassName}`}
          />
          <p
            style={{
              fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
            }}
            className={`font-medium text-primary-foreground whitespace-nowrap ${textClassName}`}
          >
            {text}
          </p>
        </motion.div>
      </div>
    </div>
  );
}