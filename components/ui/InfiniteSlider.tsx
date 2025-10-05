import { motion } from "framer-motion";

export default function InfiniteSlider({
  text = "Payment with Interest",
  speed = 20,
  direction = "left",
  textSize = "text-2xl",
  textColor = "text-white",
  separator = ".",
}) {
  const isLeft = direction === "left";
  const animationValues = isLeft ? [0, -1000] : [-1000, 0];

  return (
    <div className='relative '>
      <div className='flex'>
        <motion.div
          className='flex whitespace-nowrap'
          animate={{
            x: animationValues,
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
        >
          {[...Array(10)].map((_, i) => (
            <p
              key={i}
              className={`relative z-10 ${textColor} ${textSize} font-bold mx-1`}
            >
              {text} {separator}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
