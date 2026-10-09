import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, AlertCircle } from 'lucide-react';

interface ReadinessGaugeProps {
  masteredCount: number;
  totalPoolSize: number;
  signsMastered: number;
  signsTotal: number;
  rulesMastered: number;
  rulesTotal: number;
  streakDays: number;
  isDark?: boolean;
}

export const ReadinessGauge: React.FC<ReadinessGaugeProps> = ({
  masteredCount,
  totalPoolSize,
  signsMastered,
  signsTotal,
  rulesMastered,
  rulesTotal,
  streakDays,
  isDark = false,
}) => {
  const readinessPercent = totalPoolSize > 0 ? Math.min(100, Math.round((masteredCount / totalPoolSize) * 100)) : 0;
  const signsPercent = signsTotal > 0 ? Math.min(100, Math.round((signsMastered / signsTotal) * 100)) : 0;
  const rulesPercent = rulesTotal > 0 ? Math.min(100, Math.round((rulesMastered / rulesTotal) * 100)) : 0;

  // Indiana BMV standard: 80% passing threshold
  const isPassing = readinessPercent >= 80;

  // SVG circle calculation
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (readinessPercent / 100) * circumference;

  let statusLabel = 'Getting Started';
  let statusColor = isDark ? 'text-slate-400' : 'text-slate-500';
  if (readinessPercent >= 80) {
    statusLabel = 'Indiana BMV Exam Ready';
    statusColor = 'text-emerald-500';
  } else if (readinessPercent >= 50) {
    statusLabel = 'Strong Momentum';
    statusColor = 'text-indigo-500';
  } else if (readinessPercent >= 20) {
    statusLabel = 'Building Foundation';
    statusColor = 'text-amber-500';
  }

  return (
    <div
      className={`rounded-2xl p-5 border transition-colors ${
        isDark
          ? 'bg-slate-900/90 border-slate-800 text-white'
          : 'bg-white border-slate-200/90 text-slate-900 shadow-xs'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
            BMV Test Readiness
          </h4>
          <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Indiana 80% passing benchmark
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold">
          {isPassing ? (
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Pass Grade</span>
            </span>
          ) : (
            <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Target: 80%+
            </span>
          )}
        </div>
      </div>

      {/* Circular Radial Gauge */}
      <div className="flex items-center gap-5 my-2">
        <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120" role="img" aria-label={`Test readiness ${readinessPercent}%`}>
            {/* Background track */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              className={`${isDark ? 'stroke-slate-800' : 'stroke-slate-100'}`}
              strokeWidth="9"
              fill="transparent"
            />
            {/* Benchmark tick at 80% */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke={isDark ? '#475569' : '#cbd5e1'}
              strokeWidth="9"
              strokeDasharray={`2 ${circumference - 2}`}
              strokeDashoffset={circumference - (0.8 * circumference)}
              fill="transparent"
            />
            {/* Animated progress stroke */}
            <motion.circle
              cx="60"
              cy="60"
              r={radius}
              stroke={isPassing ? '#10b981' : '#6366f1'}
              strokeWidth="9"
              strokeLinecap="round"
              fill="transparent"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ strokeDasharray: circumference }}
            />
          </svg>

          {/* Centered Percentage Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-black tracking-tight tabular-nums">
              {readinessPercent}%
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Readiness
            </span>
          </div>
        </div>

        {/* Readiness Info Details */}
        <div className="grow space-y-2 text-xs">
          <div>
            <div className={`text-xs font-black ${statusColor}`}>
              {statusLabel}
            </div>
            <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              <span className="font-bold text-slate-900 dark:text-white tabular-nums">{masteredCount}</span> of {totalPoolSize} questions mastered (3x verified)
            </div>
          </div>

          <div className={`pt-2 border-t text-[11px] ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
            <span>Daily Streak: </span>
            <span className="font-bold text-amber-500">🔥 {streakDays} days</span>
          </div>
        </div>
      </div>

      {/* Sub-Category Breakdowns */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
        {/* Road Signs */}
        <div>
          <div className="flex items-center justify-between text-[11px] font-semibold mb-1">
            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
              Road Signs & Symbols
            </span>
            <span className="tabular-nums font-bold text-slate-900 dark:text-white">
              {signsMastered}/{signsTotal} ({signsPercent}%)
            </span>
          </div>
          <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <motion.div
              className="h-full bg-amber-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${signsPercent}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        {/* Road Rules & Laws */}
        <div>
          <div className="flex items-center justify-between text-[11px] font-semibold mb-1">
            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
              Rules of the Road & Safety
            </span>
            <span className="tabular-nums font-bold text-slate-900 dark:text-white">
              {rulesMastered}/{rulesTotal} ({rulesPercent}%)
            </span>
          </div>
          <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <motion.div
              className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${rulesPercent}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
