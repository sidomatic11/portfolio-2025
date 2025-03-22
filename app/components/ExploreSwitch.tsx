import { motion } from "framer-motion";

interface ExploreSwitchProps {
  isExploreVisible: boolean;
  onClick: () => void;
}

export default function ExploreSwitch({ isExploreVisible, onClick }: ExploreSwitchProps) {
  return (
    <div className="flex items-center gap-4">
      <span className={`text-md w-[56px] text-right ${isExploreVisible ? "font-bold" : ""}`}>explore</span>
      <div
        onClick={onClick}
        className={`relative w-[48px] h-[24px] rounded-full cursor-pointer ${isExploreVisible ? "bg-[#4ade80]" : "bg-[#60a5fa]"
          }`}
      >
        <motion.div
          className="absolute top-[3px] w-[18px] h-[18px] bg-white rounded-full"
          animate={{
            x: isExploreVisible ? 3 : 27
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
      </div>
      <span className={`text-md w-[56px] ${!isExploreVisible ? "font-bold" : ""}`}>solve</span>
    </div>
  );
} 