import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { stats } from "@/data";

const BarStat = ({
  label,
  value,
  max = 100,
  color,
}: {
  label: string;
  value: number;
  max?: number;
  color: string;
}) => (
  <div className="flex items-center gap-3 px-4 py-2.5 border-b-2 border-black last:border-b-0">
    <span className="text-[10px] font-black tracking-widest text-gray-500 w-24 shrink-0">
      {label}
    </span>
    <div className="flex-1 h-2.5 bg-gray-100 border-2 border-black rounded-sm overflow-hidden">
      <div
        className={`h-full ${color}`}
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
    <span className="text-xs font-black w-9 text-right">{value}%</span>
  </div>
);

const MonkeyTypeCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    className="relative w-full mx-auto"
  >
    {/* Neo shadow */}
    <div className="absolute inset-0 bg-yellow-400 border-[3px] border-black translate-x-2 translate-y-2 rounded-lg" />

    <div className="relative bg-white border-[3px] border-black rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-black px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[1, 0, 1, 0, 1].map((lit, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-sm ${lit ? "bg-yellow-400" : "bg-gray-600"}`}
              />
            ))}
          </div>
          <span className="text-yellow-400 text-xs font-black tracking-widest">
            MONKEYTYPE STATS
          </span>
        </div>
      </div>

      {/* Hero WPM */}
      <div className="grid grid-cols-2 border-b-[3px] border-black">
        {[
          { val: stats.highestWpm, label: "HIGHEST" },
          { val: stats.avgWpm, label: "AVERAGE" },
        ].map((s, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center py-4 ${i === 1 ? "border-l-[3px] border-black" : ""}`}
          >
            <span className="text-5xl font-black leading-none">{s.val}</span>
            <span className="text-[10px] font-bold text-gray-400 tracking-widest mt-1">
              WPM
            </span>
            <span className="text-[9px] font-black text-gray-500 tracking-widest mt-1">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bar stats */}
      <div className="py-1">
        <BarStat
          label="ACCURACY"
          value={stats.avgAccuracy}
          color="bg-green-400"
        />
        <BarStat
          label="CONSISTENCY"
          value={stats.highestConsistency}
          color="bg-blue-400"
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t-[3px] border-black">
        <span className="text-[10px] font-black text-gray-400 tracking-wider">
          {stats.testsCompleted} TESTS · {stats.completionRate} DONE
        </span>

        <a
          href={stats.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 bg-yellow-400 text-black text-[10px] font-black border-2 border-black rounded px-3 py-1.5 tracking-wider shadow-[2px_2px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          VIEW PROFILE <ArrowUpRight size={11} />
        </a>
      </div>
    </div>
  </motion.div>
);

export default MonkeyTypeCard;
