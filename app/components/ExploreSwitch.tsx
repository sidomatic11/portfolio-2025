import { motion } from "framer-motion";

interface ExploreSwitchProps {
  isExploreVisible: boolean;
  onClick: () => void;
}

export default function ExploreSwitch({ isExploreVisible, onClick }: ExploreSwitchProps) {
  return (
    <div className="flex items-center gap-4 overflow-hidden">
      <div className="flex flex-row gap-2">
        {/* explore animations */}
        <motion.div
          className="bg-green-500 h-[30px] w-[60px] rounded-md"
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: isExploreVisible ? 0 : 30,
            opacity: isExploreVisible ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
        />
        <motion.div
          className="bg-green-500 h-[30px] w-[60px] rounded-md"
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: isExploreVisible ? 0 : 30,
            opacity: isExploreVisible ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.05 }}
        />
        <motion.div
          className="bg-green-500 h-[30px] w-[60px] rounded-md"
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: isExploreVisible ? 0 : 30,
            opacity: isExploreVisible ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0 }}
        />
      </div>
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
      <div className="flex flex-row gap-2">
        {/* solve animations */}
        <motion.div
          className="bg-blue-500 h-[30px] w-[60px] rounded-md"
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: !isExploreVisible ? 0 : 30,
            opacity: !isExploreVisible ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0 }}
        />
        <motion.div
          className="bg-blue-500 h-[30px] w-[60px] rounded-md"
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: !isExploreVisible ? 0 : 30,
            opacity: !isExploreVisible ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.05 }}
        />
        <motion.div
          className="bg-blue-500 h-[30px] w-[60px] rounded-md"
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: !isExploreVisible ? 0 : 30,
            opacity: !isExploreVisible ? 1 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
        />
      </div>
    </div>
  );
} 