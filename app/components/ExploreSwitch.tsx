import { motion } from "framer-motion";
import Image from "next/image";

interface ExploreSwitchProps {
  isExploreVisible: boolean;
  onClick: () => void;
}

export default function ExploreSwitch({ isExploreVisible, onClick }: ExploreSwitchProps) {
  return (
    <div className="flex items-center w-full h-full max-w-full overflow-hidden">

      {/* Left side animations - flex container */}
      <div className="flex-1 min-w-0 flex justify-end h-full">
        {/* Actual animation content container */}
        <div className="relative w-full h-full">
          {/* explore animations */}
          <motion.div
            className="absolute inset-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: isExploreVisible ? 0 : 30,
              opacity: isExploreVisible ? 1 : 0
            }}
            transition={{ type: "tween", duration: 0.25, delay: 0.1 }}
          >
            <Image
              src="/explore/explore-m3.svg"
              alt="Mountain layer 3"
              fill
              className="object-cover object-right"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: isExploreVisible ? 0 : 30,
              opacity: isExploreVisible ? 1 : 0
            }}
            transition={{ type: "tween", duration: 0.25, delay: 0.05 }}
          >
            <Image
              src="/explore/explore-m2.svg"
              alt="Mountain layer 2"
              fill
              className="object-cover object-right"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: isExploreVisible ? 0 : 30,
              opacity: isExploreVisible ? 1 : 0
            }}
            transition={{ type: "tween", duration: 0.25, delay: 0 }}
          >
            <Image
              src="/explore/explore-m1.svg"
              alt="Mountain layer 1"
              fill
              className="object-cover object-right"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Center switch with text - ensure it doesn't shrink */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <span className={`text-md w-[64px] text-right whitespace-nowrap ${isExploreVisible ? "font-bold" : ""}`}>explore</span>
        <div
          onClick={onClick}
          className={`relative w-[48px] h-[24px] rounded-full cursor-pointer flex-shrink-0 ${isExploreVisible ? "bg-[#4ade80]" : "bg-[#60a5fa]"}`}
        >
          <motion.div
            className="absolute top-[3px] w-[18px] h-[18px] bg-white rounded-full"
            animate={{
              x: isExploreVisible ? 3 : 27
            }}
            transition={{ type: "tween", duration: 0.15 }}
          />
        </div>
        <span className={`text-md w-[64px] text-left whitespace-nowrap ${!isExploreVisible ? "font-bold" : ""}`}>solve</span>
      </div>

      {/* Right side animations - flex container */}
      <div className="flex-1 min-w-0 flex justify-start h-full">
        {/* Actual animation content container */}
        <div className="relative w-full h-full">
          {/* solve animations */}
          <motion.div
            className="absolute inset-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: !isExploreVisible ? 0 : 30,
              opacity: !isExploreVisible ? 1 : 0
            }}
            transition={{ type: "tween", duration: 0.25, delay: 0.1 }}
          >
            <Image
              src="/solve/solve-3.svg"
              alt="Solve layer 3"
              fill
              className="object-cover object-left"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: !isExploreVisible ? 0 : 30,
              opacity: !isExploreVisible ? 1 : 0
            }}
            transition={{ type: "tween", duration: 0.25, delay: 0.05 }}
          >
            <Image
              src="/solve/solve-2.svg"
              alt="Solve layer 2"
              fill
              className="object-cover object-left"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: !isExploreVisible ? 0 : 30,
              opacity: !isExploreVisible ? 1 : 0
            }}
            transition={{ type: "tween", duration: 0.25, delay: 0 }}
          >
            <Image
              src="/solve/solve-1.svg"
              alt="Solve layer 1"
              fill
              className="object-cover object-left"
              priority
            />
          </motion.div>
        </div>
      </div>

    </div>
  );
} 