import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface IconBoxProps {
  icon: LucideIcon;
  size?:
    | {
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
      }
    | number;
  className?: string;
  iconClassName?: string;
  backgroundColor?: string;
  iconColor?: string;
}

export default function IconBox2({
  icon: Icon,
  size = { sm: 50, md: 57, lg: 63, xl: 70 },
  className = "",
  iconClassName = "",
  backgroundColor = "bg-black/5",
  iconColor = "text-black/70",
}: IconBoxProps) {
  // If size is a number, use it for all breakpoints
  const sizes =
    typeof size === "number"
      ? { sm: size, md: size, lg: size, xl: size }
      : { sm: 40, md: 48, lg: 55, xl: 70, ...size };

  return (
    <>
      {/* Mobile (sm) */}
      <motion.div
        className={`${className} block sm:hidden`}
        whileHover={{ scale: 1.1, rotate: 45 }}
        transition={{ duration: 0.3 }}
      >
        <Icon
          size={sizes.sm}
          className={`p-2 rotate-135 ${backgroundColor} ${iconColor} rounded-full ${iconClassName}`}
        />
      </motion.div>

      {/* Tablet (md) */}
      <motion.div
        className={`${className} hidden sm:block md:hidden`}
        whileHover={{ scale: 1.1, rotate: 45 }}
        transition={{ duration: 0.3 }}
      >
        <Icon
          size={sizes.md}
          className={`p-2.5 rotate-135 ${backgroundColor} ${iconColor} rounded-full ${iconClassName}`}
        />
      </motion.div>

      {/* Desktop (lg) */}
      <motion.div
        className={`${className} hidden md:block lg:hidden`}
        whileHover={{ scale: 1.1, rotate: 45 }}
        transition={{ duration: 0.3 }}
      >
        <Icon
          size={sizes.lg}
          className={`p-3 rotate-135 ${backgroundColor} ${iconColor} rounded-full ${iconClassName}`}
        />
      </motion.div>

      {/* Large Desktop (xl) */}
      <motion.div
        className={`${className} hidden lg:block`}
        whileHover={{ scale: 1.1, rotate: 45 }}
        transition={{ duration: 0.2 }}
      >
        <Icon
          size={sizes.xl}
          className={`p-3.5 rotate-135 ${backgroundColor} ${iconColor} rounded-full ${iconClassName}`}
        />
      </motion.div>
    </>
  );
}
