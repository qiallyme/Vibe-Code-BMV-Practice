import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  CartesianGrid,
} from 'recharts';
import { Target, TrendingUp, CalendarCheck } from 'lucide-react';

export interface DayProgress {
  day: string; // e.g. "Mon"
  fullDate: string;
  questions: number;
  target: number;
}

interface ConsistencyChartProps {
  data: DayProgress[];
  todayCount: number;
  streakDays: number;
  isDark?: boolean;
}

export const ConsistencyChart: React.FC<ConsistencyChartProps> = ({
  data,
  todayCount,
  streakDays,
  isDark = false,
}) => {
  const totalWeekQuestions = data.reduce((acc, curr) => acc + curr.questions, 0);
  const avgDaily = Math.round(totalWeekQuestions / (data.length || 1));

  return (
    <div
      className={`rounded-2xl p-4 border transition-colors ${
        isDark
          ? 'bg-slate-800/80 border-slate-700/80 text-white'
          : 'bg-white border-slate-200 shadow-xs text-slate-900'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div
            className={`p-2 rounded-xl ${
              isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider">
              7-Day Study Consistency
            </h4>
            <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Mastery questions answered daily
            </p>
          </div>
        </div>

        <span
          className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full border ${
            isDark
              ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
              : 'bg-amber-50 text-amber-700 border-amber-200'
          }`}
        >
          {streakDays}d Streak 🔥
        </span>
      </div>

      {/* Week Metrics Snapshot */}
      <div className="grid grid-cols-2 gap-2 mb-3 text-left">
        <div
          className={`p-2.5 rounded-xl border ${
            isDark
              ? 'bg-slate-900/60 border-slate-800'
              : 'bg-slate-50 border-slate-100'
          }`}
        >
          <div className={`text-[10px] font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            7-Day Total
          </div>
          <div className="text-base font-black text-indigo-600 dark:text-indigo-400 mt-0.5 tabular-nums">
            {totalWeekQuestions} questions
          </div>
        </div>

        <div
          className={`p-2.5 rounded-xl border ${
            isDark
              ? 'bg-slate-900/60 border-slate-800'
              : 'bg-slate-50 border-slate-100'
          }`}
        >
          <div className={`text-[10px] font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Daily Target
          </div>
          <div className="text-base font-black text-emerald-600 dark:text-emerald-400 mt-0.5 tabular-nums">
            50 / day
          </div>
        </div>
      </div>

      {/* Recharts Area Chart */}
      <div className="h-44 w-full pt-1" aria-label="7-Day progress chart" role="img">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="questionGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={isDark ? 0.45 : 0.35} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={isDark ? '#334155' : '#e2e8f0'}
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: isDark ? '#94a3b8' : '#64748b',
                fontSize: 11,
                fontWeight: 600,
              }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{
                fill: isDark ? '#94a3b8' : '#64748b',
                fontSize: 10,
              }}
              domain={[0, 'auto']}
            />

            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const item = payload[0].payload as DayProgress;
                  return (
                    <div
                      className={`p-2.5 rounded-xl shadow-lg border text-xs font-bold ${
                        isDark
                          ? 'bg-slate-900 border-slate-700 text-white'
                          : 'bg-white border-slate-200 text-slate-900'
                      }`}
                    >
                      <div className="text-[10px] font-semibold text-slate-400">
                        {item.fullDate} ({item.day})
                      </div>
                      <div className="text-sm font-black text-indigo-500 mt-0.5">
                        {item.questions} questions
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {item.questions >= 50 ? '✓ Daily Goal Met' : `${50 - item.questions} to goal`}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />

            {/* Target 50 threshold line */}
            <ReferenceLine
              y={50}
              stroke="#10b981"
              strokeDasharray="3 3"
              strokeWidth={1.5}
            />

            <Area
              type="monotone"
              dataKey="questions"
              stroke="#6366f1"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#questionGradient)"
              activeDot={{ r: 5, fill: '#6366f1', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-0.5 bg-emerald-500 rounded-full inline-block" />
          <span>Green dashed: 50/day target</span>
        </span>
        <span>Avg: {avgDaily}/day</span>
      </div>
    </div>
  );
};
