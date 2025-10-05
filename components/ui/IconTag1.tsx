import { LucideIcon } from "lucide-react";

// Define props interface
interface IconTag1Props {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconSize?:
    | {
        mobile?: number;
        tablet?: number;
        desktop?: number;
      }
    | number;
  onClick?: () => void;
  className?: string;
}

// Reusable Download Button Component
const IconTag1 = ({
  title,
  subtitle,
  icon: Icon,
  iconSize = { mobile: 40, tablet: 48, desktop: 55 },
  onClick,
  className = "",
}: IconTag1Props) => {
  // Handle both number and object iconSize
  const sizes =
    typeof iconSize === "number"
      ? { mobile: iconSize, tablet: iconSize, desktop: iconSize }
      : { mobile: 40, tablet: 48, desktop: 55, ...iconSize };

  return (
    <div
      className={`flex gap-2 sm:gap-3 items-center bg-white/90 px-3 py-2 sm:px-4 sm:py-3 md:px-4 md:py-3 rounded-2xl sm:rounded-3xl ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className='flex flex-col font-bold -space-y-1 text-left text-sm  sm:text-base'>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      {Icon && (
        <>
          {/* Mobile icon */}
          <Icon
            size={sizes.mobile}
            className='block sm:hidden p-2 bg-black/5 hover:bg-black/10 transition-all duration-200 text-black/70 rounded-xl shrink-0'
          />
          {/* Tablet icon */}
          <Icon
            size={sizes.tablet}
            className='hidden sm:block md:hidden p-2.5 bg-black/5 hover:bg-black/10 transition-all duration-200 text-black/70 rounded-2xl shrink-0'
          />
          {/* Desktop icon */}
          <Icon
            size={sizes.desktop}
            className='hidden md:block p-3 bg-black/5 hover:bg-black/10 transition-all duration-200 text-black/70 rounded-2xl shrink-0'
          />
        </>
      )}
    </div>
  );
};

export default IconTag1;
