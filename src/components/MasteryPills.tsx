import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Star } from 'lucide-react';

interface MasteryPillsProps {
  currentCount: number; // 0 to target
  targetCount: number; // 3
  isMastered: boolean;
  isDark?: boolean;
}

export const MasteryPills: React.FC<MasteryPillsProps> = ({
  currentCount,
  targetCount,
  isMastered,
  isDark = false,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/70 dark:border-white/10 shadow-inner">
        {Array.from({ length: targetCount }).map((_, i) => {
          const isFilled = i < currentCount;
          return (
            <motion.div
              key={i}
              layout
              initial={false}
              animate={{
                scale: isFilled ? [1, 1.3, 1] : 1,
                backgroundColor: isFilled
                  ? '#10b981'
                  : isDark
                  ? '#334155'
                  : '#cbd5e1',
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 25,
                mass: 0.5,
              }}
              className={`relative w-3.5 h-3.5 rounded-full flex items-center justify-center transition-shadow ${
                isFilled
                  ? 'shadow-[0_0_10px_rgba(16,185,129,0.55)] ring-2 ring-emerald-400/40'
                  : ''
              }`}
            >
              {isFilled && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.05, duration: 0.15 }}
                >
                  <Check className="w-2 h-2 text-white stroke-[3.5]" />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {isMastered ? (
          <motion.div
            key="mastered"
            initial={{ scale: 0.5, opacity: 0, y: -4 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 600, damping: 20 }}
            className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-black uppercase tracking-wider shadow-sm shadow-emerald-500/30"
          >
            <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '3s' }} />
            <span>Mastered!</span>
          </motion.div>
        ) : (
          <motion.span
            key="reps"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-[11px] font-extrabold tracking-tight tabular-nums ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {currentCount}/{targetCount} reps
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
