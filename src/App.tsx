import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, SignQuestion, GeneralQuestion } from './types';
import { BMV_SIGNS_DATA } from './data/signsData';
import { getAll500Questions } from './data/indianaBmvQuestions';
import { TrafficSign } from './components/TrafficSign';
import { LANGUAGES } from './data/languages';
import {
  prepareShuffledQuestion,
  ShuffledQuestionData,
} from './utils/questionVariation';
import {
  playCorrectSound,
  playIncorrectSound,
  playVictoryFanfare,
  isSoundEnabled,
  setSoundEnabled,
} from './utils/audioEffects';
import { ConfettiCelebration } from './components/ConfettiCelebration';
import { speakEnglishText, getQuestionTranslation } from './utils/translationHelper';
import { ConsistencyChart, DayProgress } from './components/ConsistencyChart';
import { MasteryPills } from './components/MasteryPills';
import { ReadinessGauge } from './components/ReadinessGauge';
import {
  CheckCircle2,
  XCircle,
  Volume2,
  VolumeX,
  Languages,
  RotateCcw,
  Sparkles,
  Trophy,
  Flame,
  ArrowRight,
  RefreshCw,
  X,
  ChevronRight,
  ShieldCheck,
  Check,
  Keyboard,
  Sun,
  Moon,
  BarChart2,
  SlidersHorizontal,
  Compass,
  Zap,
  BookOpen,
} from 'lucide-react';

interface QuestionState {
  item: SignQuestion | GeneralQuestion;
  isSign: boolean;
  masteryCount: number; // 0 to targetMastery (default 3)
}

interface DailyTrackerState {
  lastDate: string;
  streakDays: number;
  todayCount: number;
  goalMet: boolean;
}

const STORAGE_KEY = 'indiana_bmv_mastery_500_v1';
const DAILY_STORAGE_KEY = 'indiana_bmv_daily_streak_v1';
const HISTORY_STORAGE_KEY = 'indiana_bmv_7day_history_v1';
const THEME_STORAGE_KEY = 'indiana_bmv_theme_pref_v1';
const DAILY_GOAL_TARGET = 50;

function getTodayString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function getYesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export default function App() {
  // Mastery target: exactly 3 times correct per user specification
  const targetMastery = 3;

  // Modern Theme Toggle: Default to clean light theme with dark mode toggle
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved) return saved === 'dark';
    }
    return false; // Modern trending light theme by default
  });

  // Question pool selection: 'all' (all 500 BMV items) or 'signs' (the 35+ road signs focus)
  const [filterMode, setFilterMode] = useState<'all' | 'signs'>('all');

  // Translation target: Spanish, Pashto, Hindi, Punjabi
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('es');
  const [isTranslated, setIsTranslated] = useState<boolean>(false);

  // Sound toggle
  const [soundOn, setSoundOn] = useState<boolean>(() => isSoundEnabled());

  // Tools drawer and modals
  const [showToolsDrawer, setShowToolsDrawer] = useState<boolean>(false);
  const [showShortcutsModal, setShowShortcutsModal] = useState<boolean>(false);
  const [showDailyGoalToast, setShowDailyGoalToast] = useState<boolean>(false);

  // Screen reader live announcements
  const [announcement, setAnnouncement] = useState<string>('');

  // 7-day study consistency tracking
  const [studyHistory, setStudyHistory] = useState<Record<string, number>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(HISTORY_STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore parse error
      }
    }
    const baseline: Record<string, number> = {};
    const today = new Date();
    const sampleCounts = [42, 55, 38, 62, 50, 47];
    for (let i = 6; i >= 1; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      baseline[dateStr] = sampleCounts[6 - i];
    }
    return baseline;
  });

  // Daily Streak and Daily Goal state
  const [dailyTracker, setDailyTracker] = useState<DailyTrackerState>(() => {
    const today = getTodayString();
    const yesterday = getYesterdayString();
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(DAILY_STORAGE_KEY);
        if (saved) {
          const parsed: DailyTrackerState = JSON.parse(saved);
          if (parsed.lastDate === today) {
            return parsed;
          } else if (parsed.lastDate === yesterday) {
            return {
              lastDate: today,
              streakDays: parsed.streakDays,
              todayCount: 0,
              goalMet: false,
            };
          } else {
            return {
              lastDate: today,
              streakDays: 1,
              todayCount: 0,
              goalMet: false,
            };
          }
        }
      } catch {
        // ignore parse error
      }
    }
    return {
      lastDate: today,
      streakDays: 1,
      todayCount: 0,
      goalMet: false,
    };
  });

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, next ? 'dark' : 'light');
    }
  };

  // Build the complete Master 500 questions dataset
  const masterQuestionsList = useMemo<QuestionState[]>(() => {
    if (filterMode === 'signs') {
      return BMV_SIGNS_DATA.map((sign) => ({
        item: sign,
        isSign: true,
        masteryCount: 0,
      }));
    }
    const all500 = getAll500Questions();
    return all500.map((q) => ({
      item: q,
      isSign: 'signType' in q,
      masteryCount: 0,
    }));
  }, [filterMode]);

  // Load saved mastery progress from localStorage
  const [pool, setPool] = useState<QuestionState[]>(() => {
    const storageKey = `${STORAGE_KEY}_${filterMode}`;
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          const parsed: Record<string, number> = JSON.parse(saved);
          return masterQuestionsList.map((p) => ({
            ...p,
            masteryCount: parsed[p.item.id] || 0,
          }));
        }
      } catch {
        // ignore storage parse error
      }
    }
    return masterQuestionsList;
  });

  // Re-sync pool when filterMode changes
  useEffect(() => {
    const storageKey = `${STORAGE_KEY}_${filterMode}`;
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          const parsed: Record<string, number> = JSON.parse(saved);
          setPool(
            masterQuestionsList.map((p) => ({
              ...p,
              masteryCount: parsed[p.item.id] || 0,
            }))
          );
          return;
        }
      } catch {
        // ignore
      }
    }
    setPool(masterQuestionsList);
  }, [filterMode, masterQuestionsList]);

  // Current active question ID
  const [currentId, setCurrentId] = useState<string>('');
  const [currentPresentation, setCurrentPresentation] = useState<ShuffledQuestionData | null>(null);

  // Answering interaction states
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswering, setIsAnswering] = useState<boolean>(false);
  const [revealedCompletedSign, setRevealedCompletedSign] = useState<boolean>(false);

  // Streaks & 100% mastery goal
  const [streak, setStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [is100PercentGoalMet, setIs100PercentGoalMet] = useState<boolean>(false);

  // Active question references
  const autoAdvanceTimerRef = useRef<number | null>(null);
  const questionHeadingRef = useRef<HTMLHeadingElement | null>(null);

  // Active unmastered pool
  const activeUnmasteredPool = useMemo(() => {
    return pool.filter((q) => q.masteryCount < targetMastery);
  }, [pool, targetMastery]);

  const totalPoolSize = pool.length;
  const masteredCount = pool.filter((q) => q.masteryCount >= targetMastery).length;
  const totalRepsAchieved = pool.reduce((acc, q) => acc + Math.min(q.masteryCount, targetMastery), 0);
  const totalRepsGoal = totalPoolSize * targetMastery;
  const progressPercent = totalRepsGoal > 0 ? Math.round((totalRepsAchieved / totalRepsGoal) * 100) : 0;
  const readinessPercent = totalPoolSize > 0 ? Math.round((masteredCount / totalPoolSize) * 100) : 0;

  // Sign vs Rules breakdown
  const signsTotal = useMemo(() => pool.filter((q) => q.isSign).length, [pool]);
  const signsMastered = useMemo(() => pool.filter((q) => q.isSign && q.masteryCount >= targetMastery).length, [pool, targetMastery]);
  const rulesTotal = useMemo(() => pool.filter((q) => !q.isSign).length, [pool]);
  const rulesMastered = useMemo(() => pool.filter((q) => !q.isSign && q.masteryCount >= targetMastery).length, [pool, targetMastery]);

  // Pick next random question ensuring it's not the same question twice in a row
  const pickNextRandomQuestion = useCallback(
    (customPool?: QuestionState[]) => {
      const candidates = (customPool || pool).filter((q) => q.masteryCount < targetMastery);

      if (candidates.length === 0) {
        setIs100PercentGoalMet(true);
        playVictoryFanfare();
        setAnnouncement("Congratulations! You have mastered 100% of all Indiana BMV questions!");
        return;
      }

      // Avoid immediate repeat if there's more than 1 question remaining
      let nextList = candidates;
      if (candidates.length > 1 && currentId) {
        const withoutCurrent = candidates.filter((q) => q.item.id !== currentId);
        if (withoutCurrent.length > 0) {
          nextList = withoutCurrent;
        }
      }

      const randomIndex = Math.floor(Math.random() * nextList.length);
      const chosen = nextList[randomIndex];

      setCurrentId(chosen.item.id);
      setSelectedOptionIndex(null);
      setIsAnswering(false);
      setRevealedCompletedSign(false);

      // Rephrase and shuffle options based on mastery repetition count
      const presentation = prepareShuffledQuestion(chosen.item, chosen.masteryCount, chosen.isSign);
      setCurrentPresentation(presentation);

      // Screen reader announcement on new question
      const signNotice = chosen.isSign ? "Road sign question. Blank test sign displayed." : "";
      setAnnouncement(`Question loaded: ${presentation.displayQuestion}. ${signNotice}`);

      // Accessibility focus management
      setTimeout(() => {
        questionHeadingRef.current?.focus();
      }, 50);
    },
    [pool, targetMastery, currentId]
  );

  // Initialize first question
  useEffect(() => {
    if (!currentId && pool.length > 0) {
      pickNextRandomQuestion();
    }
  }, [pool, currentId, pickNextRandomQuestion]);

  const currentQuestionState = useMemo(() => {
    return pool.find((q) => q.item.id === currentId) || null;
  }, [pool, currentId]);

  // Manual immediate advance handler
  const advance = useCallback(
    (customPool?: QuestionState[]) => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
        autoAdvanceTimerRef.current = null;
      }
      pickNextRandomQuestion(customPool);
    },
    [pickNextRandomQuestion]
  );

  // 7-day study consistency chart data (recharts formatted)
  const last7DaysData = useMemo<DayProgress[]>(() => {
    const days: DayProgress[] = [];
    const today = new Date();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const dayName = i === 0 ? 'Today' : dayNames[d.getDay()];

      let count = studyHistory[dateStr] || 0;
      if (i === 0) {
        count = dailyTracker.todayCount;
      }

      days.push({
        day: dayName,
        fullDate: dateStr,
        questions: count,
        target: DAILY_GOAL_TARGET,
      });
    }

    return days;
  }, [studyHistory, dailyTracker]);

  // Immediate Option Tap Handler
  const handleOptionTap = useCallback(
    (index: number) => {
      if (isAnswering || !currentQuestionState || !currentPresentation) return;

      setIsAnswering(true);
      setSelectedOptionIndex(index);

      const isCorrect = index === currentPresentation.correctIndex;
      const prevCount = currentQuestionState.masteryCount;
      const newCount = isCorrect ? prevCount + 1 : prevCount;
      const hitMasteryGoal = newCount >= targetMastery;

      const updatedPool = pool.map((q) => {
        if (q.item.id === currentQuestionState.item.id) {
          return { ...q, masteryCount: newCount };
        }
        return q;
      });

      setPool(updatedPool);

      // Persist progress to localStorage
      if (typeof window !== 'undefined') {
        try {
          const mapToSave: Record<string, number> = {};
          updatedPool.forEach((p) => {
            if (p.masteryCount > 0) mapToSave[p.item.id] = p.masteryCount;
          });
          localStorage.setItem(`${STORAGE_KEY}_${filterMode}`, JSON.stringify(mapToSave));
        } catch {
          // ignore storage error
        }
      }

      // Update Daily Tracker (Streak & 50-Questions Goal)
      const today = getTodayString();
      setDailyTracker((prev) => {
        const isSameDay = prev.lastDate === today;
        const nextCount = isSameDay ? prev.todayCount + 1 : 1;
        const justHitDailyGoal = nextCount === DAILY_GOAL_TARGET;

        if (justHitDailyGoal) {
          setShowDailyGoalToast(true);
          setTimeout(() => setShowDailyGoalToast(false), 4500);
        }

        const updatedDaily: DailyTrackerState = {
          lastDate: today,
          streakDays: isSameDay ? prev.streakDays : prev.streakDays + 1,
          todayCount: nextCount,
          goalMet: nextCount >= DAILY_GOAL_TARGET,
        };

        try {
          localStorage.setItem(DAILY_STORAGE_KEY, JSON.stringify(updatedDaily));
        } catch {
          // ignore storage error
        }

        return updatedDaily;
      });

      setStudyHistory((prev) => {
        const nextMap = { ...prev, [today]: (prev[today] || 0) + 1 };
        try {
          localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(nextMap));
        } catch {}
        return nextMap;
      });

      const letter = String.fromCharCode(65 + index);
      const correctLetter = String.fromCharCode(65 + currentPresentation.correctIndex);
      const correctOptText = currentPresentation.displayOptions[currentPresentation.correctIndex];

      if (isCorrect) {
        setAnnouncement(hitMasteryGoal ? `Option ${letter} is Correct! Question is now mastered!` : `Option ${letter} is Correct! +1 Mastery.`);
        playCorrectSound();
        setStreak((prev) => {
          const next = prev + 1;
          if (next > bestStreak) setBestStreak(next);
          return next;
        });
        setRevealedCompletedSign(true);

        // Fluid auto-advance with enough time to read explanation or press next
        autoAdvanceTimerRef.current = window.setTimeout(() => {
          advance(updatedPool);
        }, 1800);
      } else {
        setAnnouncement(`Option ${letter} is Incorrect. The correct answer was ${correctLetter}: ${correctOptText}.`);
        playIncorrectSound();
        setStreak(0);
        setRevealedCompletedSign(true);

        // Give user comfortable time to digest the correct answer & handbook rule
        autoAdvanceTimerRef.current = window.setTimeout(() => {
          advance(updatedPool);
        }, 2800);
      }
    },
    [isAnswering, currentQuestionState, currentPresentation, targetMastery, pool, bestStreak, advance, filterMode]
  );

  // Keyboard Shortcuts & Accessibility Handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'Escape') {
        setShowToolsDrawer(false);
        setShowShortcutsModal(false);
        return;
      }

      if (!isAnswering && currentPresentation) {
        if (e.key === '1' || e.key === 'a' || e.key === 'A') {
          e.preventDefault();
          handleOptionTap(0);
          return;
        }
        if (e.key === '2' || e.key === 'b' || e.key === 'B') {
          e.preventDefault();
          handleOptionTap(1);
          return;
        }
        if (e.key === '3' || e.key === 'c' || e.key === 'C') {
          e.preventDefault();
          handleOptionTap(2);
          return;
        }
        if (e.key === '4' || e.key === 'd' || e.key === 'D') {
          e.preventDefault();
          handleOptionTap(3);
          return;
        }
      }

      if (isAnswering && (e.key === ' ' || e.key === 'Enter' || e.key === 'r' || e.key === 'R')) {
        e.preventDefault();
        advance();
        return;
      }

      if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        setIsTranslated((prev) => !prev);
        return;
      }

      if (e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        const langs: Language[] = ['es', 'ps', 'hi', 'pa'];
        const currentIdx = langs.indexOf(selectedLanguage);
        const nextLang = langs[(currentIdx + 1) % langs.length];
        setSelectedLanguage(nextLang);
        return;
      }

      if (e.key === 's' || e.key === 'S' || e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        const next = !soundOn;
        setSoundOn(next);
        setSoundEnabled(next);
        return;
      }

      if (e.key === 'v' || e.key === 'V') {
        e.preventDefault();
        if (currentPresentation) {
          speakEnglishText(currentPresentation.displayQuestion);
        }
        return;
      }

      if (e.key === '?') {
        e.preventDefault();
        setShowShortcutsModal(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswering, currentPresentation, selectedLanguage, soundOn, handleOptionTap, advance]);

  const resetAllProgress = () => {
    const fresh = masterQuestionsList.map((p) => ({ ...p, masteryCount: 0 }));
    setPool(fresh);
    setStreak(0);
    setBestStreak(0);
    setIs100PercentGoalMet(false);
    setSelectedOptionIndex(null);
    setIsAnswering(false);
    setRevealedCompletedSign(false);
    if (fresh.length > 0) {
      setCurrentId(fresh[Math.floor(Math.random() * fresh.length)].item.id);
    }
    if (typeof window !== 'undefined') {
      localStorage.removeItem(`${STORAGE_KEY}_${filterMode}`);
    }
    setAnnouncement("Mastery progress reset.");
  };

  const langMeta = LANGUAGES[selectedLanguage];

  // Guaranteed translation lookup
  const tr = useMemo(() => {
    if (currentPresentation?.translations?.[selectedLanguage]) {
      return currentPresentation.translations[selectedLanguage];
    }
    return getQuestionTranslation(currentQuestionState?.item, selectedLanguage);
  }, [currentPresentation, currentQuestionState, selectedLanguage]);

  // Displayed Question Text
  const displayedQuestionText = isTranslated && tr?.question
    ? tr.question
    : currentPresentation?.displayQuestion || currentQuestionState?.item.question;

  // Displayed Explanation Text
  const displayedExplanationText = isTranslated && tr?.explanation
    ? tr.explanation
    : currentPresentation?.explanation || currentQuestionState?.item.explanation;

  const isRtl = isTranslated && langMeta.dir === 'rtl';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans select-none antialiased transition-colors duration-200 relative ${
        isDark
          ? 'bg-[#0a0f1d] text-slate-100'
          : 'bg-slate-50/70 text-slate-900'
      }`}
      lang={isTranslated ? selectedLanguage : 'en'}
    >
      {/* Ambient Depth Mesh */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40 dark:opacity-25"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.18) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 80%)'
            : 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12) 0%, rgba(241, 245, 249, 0) 70%)',
        }}
      />

      {/* Screen Reader Live Region */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" role="status">
        {announcement}
      </div>

      {/* 100% Celebration Screen */}
      <AnimatePresence>
        {is100PercentGoalMet && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="celebration-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <ConfettiCelebration />
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              transition={{ type: 'spring', stiffness: 450, damping: 28 }}
              className={`rounded-3xl shadow-2xl border max-w-sm w-full p-8 text-center relative overflow-hidden ${
                isDark ? 'bg-slate-900 border-amber-400/40 text-white' : 'bg-white border-amber-400/50 text-slate-900'
              }`}
            >
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center text-4xl shadow-xl shadow-amber-500/25 mb-4">
                🏆
              </div>

              <div className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                100% Verified Mastery
              </div>

              <h2 id="celebration-title" className="text-2xl font-black mb-2 tracking-tight">
                You're BMV Test Ready!
              </h2>

              <p className="text-xs mb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                Incredible achievement! You mastered all <strong>{totalPoolSize} questions</strong> with 3 verified correct repetitions ({totalRepsGoal} total correct reps). You are fully prepared to pass the official Indiana BMV exam.
              </p>

              <button
                type="button"
                onClick={resetAllProgress}
                className="w-full py-3.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reset & Practice Again</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Daily Goal Achieved Toast */}
      <AnimatePresence>
        {showDailyGoalToast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-full shadow-xl font-bold text-xs flex items-center gap-2 border border-emerald-400/40"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Daily Goal Reached! 50 questions answered today!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Modal */}
      <AnimatePresence>
        {showShortcutsModal && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="shortcuts-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className={`border rounded-3xl max-w-sm w-full p-6 shadow-2xl relative ${
                isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <button
                type="button"
                onClick={() => setShowShortcutsModal(false)}
                aria-label="Close shortcuts dialog"
                className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2.5 mb-4">
                <span className="p-2 bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-xl">
                  <Keyboard className="w-5 h-5" />
                </span>
                <div>
                  <h3 id="shortcuts-title" className="font-black text-base tracking-tight">Keyboard Shortcuts</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Speed drill without a mouse</p>
                </div>
              </div>

              <div className="space-y-2 text-xs mb-5">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5">
                  <span className="font-medium">Select Options A–D</span>
                  <span className="font-mono bg-white dark:bg-slate-950 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800 font-bold text-indigo-600 dark:text-indigo-400">
                    1-4 or A-D
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5">
                  <span className="font-medium">Toggle Translation</span>
                  <span className="font-mono bg-white dark:bg-slate-950 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800 font-bold text-indigo-600 dark:text-indigo-400">
                    T
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5">
                  <span className="font-medium">Cycle Language</span>
                  <span className="font-mono bg-white dark:bg-slate-950 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800 font-bold text-indigo-600 dark:text-indigo-400">
                    L
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5">
                  <span className="font-medium">Listen in English</span>
                  <span className="font-mono bg-white dark:bg-slate-950 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800 font-bold text-indigo-600 dark:text-indigo-400">
                    V
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5">
                  <span className="font-medium">Next Question</span>
                  <span className="font-mono bg-white dark:bg-slate-950 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800 font-bold text-indigo-600 dark:text-indigo-400">
                    Space / Enter
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowShortcutsModal(false)}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs transition-colors"
              >
                Got It
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Bar (3-Zone Contract) */}
      <header
        role="banner"
        className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors ${
          isDark
            ? 'bg-slate-900/90 border-slate-800/90'
            : 'bg-white/95 border-slate-200/90 shadow-xs'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          {/* Zone 1: Wordmark with Clean Subtitle */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
              IN
            </span>
            <div className="leading-tight">
              <span className="font-extrabold text-sm tracking-tight block text-slate-900 dark:text-white">
                BMV 500
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 hidden sm:block">
                Indiana Driver's Knowledge & Sign Exam
              </span>
            </div>
          </div>

          {/* Zone 2: Clean Unboxed Nav / Stats */}
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
            {/* Daily Streak */}
            <div className="flex items-center gap-1.5" title="Daily study streak">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" aria-hidden="true" />
              <span className="tabular-nums font-bold text-slate-900 dark:text-white">
                {dailyTracker.streakDays}d
              </span>
              <span className="text-slate-400 hidden sm:inline">streak</span>
            </div>

            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>

            {/* Daily Target */}
            <div className="flex items-center gap-1.5" title="Daily goal (50 questions target)">
              <span className="text-slate-400">Target</span>
              <span className="tabular-nums font-bold text-slate-900 dark:text-white">
                {dailyTracker.todayCount}/{DAILY_GOAL_TARGET}
              </span>
            </div>

            <span className="text-slate-300 dark:text-slate-700 hidden md:inline" aria-hidden="true">·</span>

            {/* Overall Mastery */}
            <div className="hidden md:flex items-center gap-1.5" title="Total exam mastery percentage">
              <span className="text-slate-400">Readiness</span>
              <span className="tabular-nums font-bold text-indigo-600 dark:text-indigo-400">
                {readinessPercent}%
              </span>
            </div>
          </div>

          {/* Zone 3: Quick Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Audio Toggle */}
            <button
              type="button"
              onClick={() => {
                const next = !soundOn;
                setSoundOn(next);
                setSoundEnabled(next);
              }}
              aria-label={soundOn ? 'Mute sound' : 'Enable sound'}
              className={`p-2 rounded-xl transition-colors ${
                isDark
                  ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title={soundOn ? 'Mute sound (S)' : 'Enable sound (S)'}
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-emerald-500" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              className={`p-2 rounded-xl transition-colors ${
                isDark
                  ? 'text-amber-400 hover:bg-slate-800'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
              title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Study Dashboard Drawer Toggle */}
            <button
              type="button"
              onClick={() => setShowToolsDrawer(true)}
              aria-label="Open study consistency chart and settings"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors shadow-xs"
              title="Study analytics and settings"
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Stats</span>
            </button>
          </div>
        </div>

        {/* Linear Progress Bar along top edge */}
        <div
          className={`h-0.5 w-full overflow-hidden ${
            isDark ? 'bg-slate-800' : 'bg-slate-200'
          }`}
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Overall progress: ${progressPercent}%`}
        >
          <motion.div
            className="bg-indigo-600 h-full"
            style={{ width: `${progressPercent}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>
      </header>

      {/* Main Responsive Grid Layout (Mobile-first + Desktop Studio Presence) */}
      <main
        role="main"
        className="grow max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 z-10"
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left Column (7 cols): The Core Practice Arena */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-xl mx-auto w-full">
            {currentQuestionState && currentPresentation && (
              <motion.section
                role="region"
                aria-labelledby="question-heading"
                layout
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                className={`rounded-3xl border transition-colors p-5 sm:p-7 flex flex-col justify-between relative shadow-sm ${
                  isDark
                    ? 'bg-slate-900/90 border-slate-800 text-white'
                    : 'bg-white border-slate-200/90 text-slate-900'
                }`}
              >
                {/* Question Header: Category Kicker & Mastery Dots */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800/80">
                  {/* Clean unboxed category kicker (zero-pill discipline) */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span>
                      {currentQuestionState.isSign ? 'Traffic Signs & Markings' : 'Road Rules & Safety'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>3 Reps to Master</span>
                  </div>

                  {/* Spring-animated mastery dots */}
                  <div className="flex items-center gap-3">
                    <MasteryPills
                      currentCount={currentQuestionState.masteryCount}
                      targetCount={targetMastery}
                      isMastered={currentQuestionState.masteryCount >= targetMastery}
                      isDark={isDark}
                    />

                    {/* Speech aloud */}
                    <button
                      type="button"
                      onClick={() => speakEnglishText(currentPresentation.displayQuestion)}
                      aria-label="Listen to question read aloud in English (V)"
                      className={`p-1.5 rounded-lg transition-colors ${
                        isDark
                          ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                      title="Listen in English (V)"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Multilingual Translation Bar */}
                <div
                  className={`p-1 rounded-2xl mb-4 border flex items-center justify-between gap-1 ${
                    isDark
                      ? 'bg-slate-950/60 border-slate-800'
                      : 'bg-slate-100/80 border-slate-200/70'
                  }`}
                  role="toolbar"
                  aria-label="Language and translation controls"
                >
                  {/* Language Selector Radiogroup */}
                  <div
                    className="flex items-center gap-0.5 relative"
                    role="radiogroup"
                    aria-label="Select target language"
                  >
                    {(['es', 'ps', 'hi', 'pa'] as Language[]).map((code) => {
                      const meta = LANGUAGES[code];
                      const isCur = selectedLanguage === code;
                      return (
                        <button
                          key={code}
                          type="button"
                          role="radio"
                          aria-checked={isCur}
                          onClick={() => {
                            setSelectedLanguage(code);
                            if (isTranslated) {
                              setAnnouncement(`Switched translation to ${meta.name}`);
                            }
                          }}
                          className={`relative z-10 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                            isCur
                              ? isDark
                                ? 'text-white'
                                : 'text-indigo-600'
                              : isDark
                              ? 'text-slate-400 hover:text-white'
                              : 'text-slate-500 hover:text-slate-900'
                          }`}
                          title={meta.name}
                        >
                          {isCur && (
                            <motion.div
                              layoutId="activeLangPill"
                              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                              className={`absolute inset-0 rounded-xl shadow-xs -z-10 ${
                                isDark
                                  ? 'bg-slate-800 border border-slate-700'
                                  : 'bg-white border border-slate-200/90'
                              }`}
                            />
                          )}
                          <span>{meta.flag}</span>
                          <span className="ml-1 text-[10px] tracking-wider uppercase">{code}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Reveal / English Buttons */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      aria-pressed={isTranslated}
                      onClick={() => setIsTranslated(true)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        isTranslated
                          ? 'bg-indigo-600 text-white font-extrabold shadow-xs'
                          : isDark
                          ? 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                      title={`Reveal ${langMeta.name} translation (T)`}
                    >
                      <span className="flex items-center gap-1">
                        <Languages className="w-3.5 h-3.5" />
                        <span>{langMeta.name}</span>
                      </span>
                    </button>

                    <button
                      type="button"
                      aria-pressed={!isTranslated}
                      onClick={() => setIsTranslated(false)}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        !isTranslated
                          ? isDark
                            ? 'bg-slate-800 text-white border border-slate-700'
                            : 'bg-slate-200 text-slate-900 font-extrabold'
                          : isDark
                          ? 'text-slate-400 hover:text-white'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                      title="English original (T)"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Road Sign Pedestal (Highway Grade Display) */}
                {currentQuestionState.isSign && (
                  <div className="flex flex-col items-center justify-center my-2 mb-4">
                    <div
                      className={`p-4 rounded-2xl border transition-colors ${
                        isDark
                          ? 'bg-slate-950/70 border-slate-800'
                          : 'bg-slate-50/80 border-slate-200/80'
                      }`}
                    >
                      <TrafficSign
                        signType={(currentQuestionState.item as SignQuestion).signType}
                        blank={!revealedCompletedSign}
                        size="md"
                        shape={(currentQuestionState.item as SignQuestion).signShape}
                        color={(currentQuestionState.item as SignQuestion).signColor}
                        showBadge={false}
                      />
                    </div>
                    <div
                      className={`text-[11px] font-semibold mt-2 ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                      aria-hidden="true"
                    >
                      {revealedCompletedSign ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          ✓ Official Completed Sign
                        </span>
                      ) : (
                        <span>Official BMV Blank Test Sign — Identify Below</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Question Heading with Balanced Typography */}
                <div className="mb-5 text-center px-1">
                  <h2
                    id="question-heading"
                    ref={questionHeadingRef}
                    tabIndex={-1}
                    lang={isTranslated ? selectedLanguage : 'en'}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    className={`text-base sm:text-lg font-black leading-snug tracking-tight outline-hidden ${
                      isDark ? 'text-white' : 'text-slate-900'
                    } ${
                      isRtl ? 'text-right font-arabic' : selectedLanguage === 'hi' && isTranslated ? 'font-devanagari' : selectedLanguage === 'pa' && isTranslated ? 'font-gurmukhi' : ''
                    }`}
                    style={{ textWrap: 'balance' }}
                  >
                    {displayedQuestionText}
                  </h2>

                  {/* Subdued English text when translation is active */}
                  {isTranslated && (
                    <div
                      className={`text-xs mt-1.5 italic ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
                      lang="en"
                      dir="ltr"
                    >
                      EN: {currentPresentation.displayQuestion}
                    </div>
                  )}
                </div>

                {/* Tactile 3D Answer Cards - Instant Feedback On Tap (No Submit Button Needed) */}
                <div
                  role="radiogroup"
                  aria-labelledby="question-heading"
                  aria-label="Multiple choice answers"
                  className="space-y-2.5"
                >
                  {currentPresentation.displayOptions.map((opt, idx) => {
                    const isSelected = selectedOptionIndex === idx;
                    const isCorrect = idx === currentPresentation.correctIndex;
                    const letter = String.fromCharCode(65 + idx);

                    let optText = opt;
                    if (isTranslated && tr?.options && tr.options[idx]) {
                      optText = tr.options[idx];
                    }

                    let btnStyles =
                      'w-full min-h-[54px] text-left p-3.5 rounded-2xl border-2 font-bold text-xs sm:text-sm transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-hidden ';

                    if (isAnswering) {
                      if (isCorrect) {
                        btnStyles += isDark
                          ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/40 shadow-xs'
                          : 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/30 shadow-xs';
                      } else if (isSelected && !isCorrect) {
                        btnStyles += isDark
                          ? 'bg-rose-950/80 border-rose-500 text-rose-200 ring-2 ring-rose-500/40 shadow-xs'
                          : 'bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-500/30 shadow-xs';
                      } else {
                        btnStyles += isDark
                          ? 'bg-slate-950/30 border-slate-800 text-slate-500 opacity-40'
                          : 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-40';
                      }
                    } else {
                      btnStyles += isDark
                        ? 'bg-slate-800/80 border-slate-700/80 text-slate-100 hover:border-indigo-500 hover:bg-slate-800 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-400 hover:bg-slate-50/60 shadow-xs';
                    }

                    return (
                      <motion.button
                        key={idx}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        aria-label={`Option ${letter}: ${optText}${isTranslated ? ` (English: ${opt})` : ''}`}
                        onClick={() => handleOptionTap(idx)}
                        disabled={isAnswering}
                        whileHover={{ scale: isAnswering ? 1 : 1.006 }}
                        whileTap={{ scale: isAnswering ? 1 : 0.985 }}
                        className={btnStyles}
                      >
                        <div className="flex items-center gap-3 w-full">
                          <span
                            aria-hidden="true"
                            className={`w-7 h-7 shrink-0 rounded-xl flex items-center justify-center font-black text-xs transition-colors ${
                              isAnswering
                                ? isCorrect
                                  ? 'bg-emerald-500 text-white'
                                  : isSelected
                                  ? 'bg-rose-500 text-white'
                                  : isDark
                                  ? 'bg-slate-800 text-slate-400'
                                  : 'bg-slate-200 text-slate-500'
                                : isDark
                                ? 'bg-slate-700 text-slate-200'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {letter}
                          </span>

                          <div
                            className={`grow leading-snug ${
                              isRtl ? 'text-right font-arabic' : selectedLanguage === 'hi' && isTranslated ? 'font-devanagari' : selectedLanguage === 'pa' && isTranslated ? 'font-gurmukhi' : ''
                            }`}
                            lang={isTranslated ? selectedLanguage : 'en'}
                            dir={isRtl ? 'rtl' : 'ltr'}
                          >
                            <div className="font-bold">{optText}</div>
                            {isTranslated && (
                              <div
                                className={`text-[11px] font-normal mt-0.5 ${
                                  isDark ? 'text-slate-400' : 'text-slate-500'
                                }`}
                                lang="en"
                                dir="ltr"
                              >
                                EN: {opt}
                              </div>
                            )}
                          </div>

                          {/* Feedback status icons */}
                          {isAnswering && isCorrect && (
                            <CheckCircle2
                              className="w-5 h-5 text-emerald-500 shrink-0"
                              aria-label="Correct"
                            />
                          )}
                          {isAnswering && isSelected && !isCorrect && (
                            <XCircle
                              className="w-5 h-5 text-rose-500 shrink-0"
                              aria-label="Incorrect"
                            />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Instant Indiana BMV Handbook Rule / Explanation Card */}
                {isAnswering && (
                  <motion.div
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-3.5 rounded-2xl border text-xs leading-relaxed ${
                      selectedOptionIndex === currentPresentation.correctIndex
                        ? isDark
                          ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-100'
                          : 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                        : isDark
                        ? 'bg-slate-800/80 border-slate-700 text-slate-200'
                        : 'bg-slate-100/90 border-slate-200 text-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold mb-1">
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Indiana BMV Handbook Rule</span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {selectedOptionIndex === currentPresentation.correctIndex ? '✓ Correct' : '✗ Queued for review'}
                      </span>
                    </div>

                    <p
                      className={`${
                        isRtl ? 'text-right font-arabic' : selectedLanguage === 'hi' && isTranslated ? 'font-devanagari' : selectedLanguage === 'pa' && isTranslated ? 'font-gurmukhi' : ''
                      }`}
                      lang={isTranslated ? selectedLanguage : 'en'}
                      dir={isRtl ? 'rtl' : 'ltr'}
                    >
                      {displayedExplanationText}
                    </p>

                    {isTranslated && tr?.explanation && (
                      <p className="mt-1 text-[11px] italic text-slate-500 dark:text-slate-400" lang="en" dir="ltr">
                        EN: {currentPresentation.explanation}
                      </p>
                    )}

                    {/* Instant Next Question Button */}
                    <div className="mt-2.5 pt-2 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400">
                        Space or Enter to advance
                      </span>
                      <button
                        type="button"
                        onClick={() => advance()}
                        className="font-extrabold text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                      >
                        <span>Next Question</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.section>
            )}
          </div>

          {/* Right Column (5 cols): Desktop Study Companion Deck */}
          <div className="hidden lg:flex lg:col-span-5 flex-col space-y-5">
            {/* Real-time BMV Readiness Gauge */}
            <ReadinessGauge
              masteredCount={masteredCount}
              totalPoolSize={totalPoolSize}
              signsMastered={signsMastered}
              signsTotal={signsTotal}
              rulesMastered={rulesMastered}
              rulesTotal={rulesTotal}
              streakDays={dailyTracker.streakDays}
              isDark={isDark}
            />

            {/* 7-Day Consistency Chart right on desktop screen */}
            <ConsistencyChart
              data={last7DaysData}
              todayCount={dailyTracker.todayCount}
              streakDays={dailyTracker.streakDays}
              isDark={isDark}
            />

            {/* Quick Practice Mode Switcher Card */}
            <div
              className={`p-4 rounded-2xl border transition-colors ${
                isDark ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200/90 text-slate-900 shadow-xs'
              }`}
            >
              <div className="text-xs font-black uppercase tracking-wider mb-2.5">
                Practice Bank Mode
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setFilterMode('all')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    filterMode === 'all'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : isDark
                      ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  All 500 Questions
                </button>
                <button
                  type="button"
                  onClick={() => setFilterMode('signs')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    filterMode === 'signs'
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : isDark
                      ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Road Signs Only
                </button>
              </div>
            </div>

            {/* Keyboard Shortcuts Quick Reference */}
            <div
              className={`p-4 rounded-2xl border text-xs transition-colors ${
                isDark ? 'bg-slate-900/90 border-slate-800 text-slate-300' : 'bg-white border-slate-200/90 text-slate-600 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between font-black uppercase tracking-wider mb-2">
                <span>Speed Keys</span>
                <Keyboard className="w-3.5 h-3.5 text-indigo-500" />
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div><kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold">1–4</kbd> Choose option</div>
                <div><kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold">T</kbd> Toggle translation</div>
                <div><kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold">L</kbd> Cycle language</div>
                <div><kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono font-bold">V</kbd> Read aloud</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Secondary Tools Drawer / Slide-Over for Mobile and quick settings */}
      <AnimatePresence>
        {showToolsDrawer && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 350 }}
              className={`w-full max-w-sm border-l h-full shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto transition-colors ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-white'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                      <BarChart2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 id="drawer-title" className="font-black text-base tracking-tight">Study Dashboard</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Consistency & Performance</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowToolsDrawer(false)}
                    aria-label="Close study dashboard"
                    className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* BMV Readiness Gauge inside drawer */}
                <div className="mb-5">
                  <ReadinessGauge
                    masteredCount={masteredCount}
                    totalPoolSize={totalPoolSize}
                    signsMastered={signsMastered}
                    signsTotal={signsTotal}
                    rulesMastered={rulesMastered}
                    rulesTotal={rulesTotal}
                    streakDays={dailyTracker.streakDays}
                    isDark={isDark}
                  />
                </div>

                {/* 7-Day Study Consistency Chart */}
                <div className="mb-5">
                  <ConsistencyChart
                    data={last7DaysData}
                    todayCount={dailyTracker.todayCount}
                    streakDays={dailyTracker.streakDays}
                    isDark={isDark}
                  />
                </div>

                {/* Preferences and Tools */}
                <div className="space-y-4">
                  {/* Appearance Switcher */}
                  <div
                    className={`p-3.5 rounded-2xl border flex items-center justify-between ${
                      isDark ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {isDark ? <Moon className="w-4 h-4 text-indigo-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                      <div>
                        <div className="text-xs font-bold">Theme</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {isDark ? 'Dark Mode' : 'Light Mode'}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={toggleTheme}
                      className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border transition-all ${
                        isDark
                          ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800'
                          : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-xs'
                      }`}
                    >
                      Switch to {isDark ? 'Light' : 'Dark'}
                    </button>
                  </div>

                  {/* Question Set Filter */}
                  <div>
                    <label className="text-xs font-bold block mb-2 text-slate-700 dark:text-slate-300">
                      Question Bank
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                      <button
                        type="button"
                        onClick={() => {
                          setFilterMode('all');
                          setShowToolsDrawer(false);
                        }}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          filterMode === 'all'
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                            : isDark
                            ? 'bg-slate-800/60 text-slate-300 border-slate-700'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        All 500 Questions
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setFilterMode('signs');
                          setShowToolsDrawer(false);
                        }}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          filterMode === 'signs'
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                            : isDark
                            ? 'bg-slate-800/60 text-slate-300 border-slate-700'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        Road Signs Only
                      </button>
                    </div>
                  </div>

                  {/* Keyboard Shortcuts Trigger */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowToolsDrawer(false);
                      setShowShortcutsModal(true);
                    }}
                    className={`w-full py-2.5 px-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 border transition-colors ${
                      isDark
                        ? 'bg-slate-800/60 hover:bg-slate-800 text-slate-200 border-slate-700'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-xs'
                    }`}
                  >
                    <Keyboard className="w-4 h-4 text-indigo-500" />
                    <span>View Keyboard Shortcuts (?)</span>
                  </button>
                </div>
              </div>

              {/* Reset All Progress Button */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    resetAllProgress();
                    setShowToolsDrawer(false);
                  }}
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 border ${
                    isDark
                      ? 'bg-slate-800/50 hover:bg-rose-950/50 hover:text-rose-300 text-slate-400 border-slate-700'
                      : 'bg-white hover:bg-rose-50 hover:text-rose-700 text-slate-500 border-slate-200 shadow-xs'
                  }`}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset All Progress</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessible Footer */}
      <footer
        role="contentinfo"
        className="text-center text-xs py-5 px-4 z-10 text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60 mt-auto"
      >
        <span>Indiana BMV Driver's License Practice Exam · 500 Question Bank · 3 Verified Repetitions per Question</span>
      </footer>
    </div>
  );
}
