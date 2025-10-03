import { LucideIcon } from "lucide-react";

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

export default function IconBox({
  icon: Icon,
  size = { sm: 40, md: 48, lg: 55, xl: 60 },
  className = "",
  iconClassName = "",
  backgroundColor = "bg-black/5",
  iconColor = "text-black/70",
}: IconBoxProps) {
  // If size is a number, use it for all breakpoints
  const sizes =
    typeof size === "number"
      ? { sm: size, md: size, lg: size, xl: size }
      : { sm: 40, md: 48, lg: 55, xl: 60, ...size };

  return (
    <>
      {/* Mobile (sm) */}
      <div className={`${className} block sm:hidden`}>
        <Icon
          size={sizes.sm}
          className={`p-2 ${backgroundColor} ${iconColor} rounded-full ${iconClassName}`}
        />
      </div>

      {/* Tablet (md) */}
      <div className={`${className} hidden sm:block md:hidden`}>
        <Icon
          size={sizes.md}
          className={`p-2.5 ${backgroundColor} ${iconColor} rounded-full ${iconClassName}`}
        />
      </div>

      {/* Desktop (lg) */}
      <div className={`${className} hidden md:block lg:hidden`}>
        <Icon
          size={sizes.lg}
          className={`p-3 ${backgroundColor} ${iconColor} rounded-full ${iconClassName}`}
        />
      </div>

      {/* Large Desktop (xl) */}
      <div className={`${className} hidden lg:block`}>
        <Icon
          size={sizes.xl}
          className={`p-3.5 ${backgroundColor} ${iconColor} rounded-full ${iconClassName}`}
        />
      </div>
    </>
  );
}
