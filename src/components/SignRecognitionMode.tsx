import React, { useState, useEffect, useRef } from 'react';
import { Language, SignQuestion } from '../types';
import { BMV_SIGNS_DATA } from '../data/signsData';
import { TrafficSign } from './TrafficSign';
import { LANGUAGES } from '../data/languages';
import {
  playCorrectSound,
  playIncorrectSound,
  playVictoryFanfare,
  isSoundEnabled,
  setSoundEnabled,
} from '../utils/audioEffects';
import { ConfettiCelebration } from './ConfettiCelebration';
import { speakEnglishText } from '../utils/translationHelper';
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
  Eye,
  RefreshCw,
  Zap,
} from 'lucide-react';

interface SignRecognitionModeProps {
  selectedLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const SignRecognitionMode: React.FC<SignRecognitionModeProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  // Queue of remaining questions to master
  const [queue, setQueue] = useState<SignQuestion[]>(() => [...BMV_SIGNS_DATA]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const [streak, setStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [totalAttempts, setTotalAttempts] = useState<number>(0);

  // Instant response state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswering, setIsAnswering] = useState<boolean>(false);
  const [revealedCompletedSign, setRevealedCompletedSign] = useState<boolean>(false);

  // Translation display state (Two buttons: Reveal vs Hide/Revert)
  const [isTranslated, setIsTranslated] = useState<boolean>(false);

  // Sound toggle
  const [soundOn, setSoundOn] = useState<boolean>(() => isSoundEnabled());

  // Celebration state when 100% is reached
  const [is100PercentCelebration, setIs100PercentCelebration] = useState<boolean>(false);

  const autoAdvanceTimerRef = useRef<number | null>(null);

  const totalPoolCount = BMV_SIGNS_DATA.length;
  const currentSign = queue[currentQuestionIndex] || BMV_SIGNS_DATA[0];
  const langMeta = LANGUAGES[selectedLanguage];
  const translation = currentSign.translations ? currentSign.translations[selectedLanguage] : null;

  // Calculate mastery progress
  const masteryPercentage = Math.round((masteredIds.size / totalPoolCount) * 100);

  // Check if 100% goal is met
  useEffect(() => {
    if (masteredIds.size >= totalPoolCount && !is100PercentCelebration) {
      setIs100PercentCelebration(true);
      playVictoryFanfare();
    }
  }, [masteredIds.size, totalPoolCount, is100PercentCelebration]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        window.clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, []);

  // Instant selection handler - NO SUBMIT BUTTON!
  const handleSelectOption = (optionIndex: number) => {
    if (isAnswering) return; // Prevent double taps

    setIsAnswering(true);
    setSelectedOption(optionIndex);
    setTotalAttempts((prev) => prev + 1);

    const isCorrect = optionIndex === currentSign.correctAnswer;

    if (isCorrect) {
      // Play instant pleasant chime
      playCorrectSound();
      setStreak((prev) => {
        const next = prev + 1;
        if (next > bestStreak) setBestStreak(next);
        return next;
      });

      // Mark as mastered
      setMasteredIds((prev) => new Set([...prev, currentSign.id]));
      setRevealedCompletedSign(true);

      // Short auto-advance delay (1100ms) for high speed & fluid feel
      autoAdvanceTimerRef.current = window.setTimeout(() => {
        advanceNextQuestion(true);
      }, 1150);
    } else {
      // Play instant buzz/thud
      playIncorrectSound();
      setStreak(0);
      setRevealedCompletedSign(true);

      // Question stays in queue / pushed to end so user practices it again
      autoAdvanceTimerRef.current = window.setTimeout(() => {
        advanceNextQuestion(false);
      }, 1600);
    }
  };

  // Move to next question immediately
  const advanceNextQuestion = (wasCorrect: boolean) => {
    if (autoAdvanceTimerRef.current) {
      window.clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    setSelectedOption(null);
    setIsAnswering(false);
    setRevealedCompletedSign(false);

    // If correct, remove from remaining unmastered queue; if wrong, move to end of queue
    setQueue((prevQueue) => {
      if (wasCorrect) {
        const remaining = prevQueue.filter((q) => q.id !== currentSign.id);
        if (remaining.length === 0) {
          return prevQueue; // 100% complete!
        }
        return remaining;
      } else {
        // Move to the back of the queue so it is asked again
        const otherQuestions = prevQueue.filter((q) => q.id !== currentSign.id);
        return [...otherQuestions, currentSign];
      }
    });

    setCurrentQuestionIndex(0);
  };

  // Restart the whole sign recognition session
  const restartSession = () => {
    setQueue([...BMV_SIGNS_DATA]);
    setCurrentQuestionIndex(0);
    setMasteredIds(new Set());
    setStreak(0);
    setTotalAttempts(0);
    setSelectedOption(null);
    setIsAnswering(false);
    setRevealedCompletedSign(false);
    setIs100PercentCelebration(false);
  };

  // Active question text & options based on translation toggle
  const displayedQuestion = isTranslated && translation
    ? translation.question
    : currentSign.question;

  const isRtl = isTranslated && langMeta.dir === 'rtl';

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* 100% Full Celebration Modal & Confetti */}
      {is100PercentCelebration && (
        <>
          <ConfettiCelebration />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl shadow-2xl border border-amber-300 max-w-lg w-full p-8 text-center relative overflow-hidden">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 flex items-center justify-center text-5xl shadow-lg mb-6 ring-8 ring-amber-100">
                🏆
              </div>

              <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-black tracking-wider uppercase">
                100% Perfect Mastery!
              </span>

              <h2 className="text-3xl font-black text-slate-900 mt-3 mb-2">
                BMV Sign Test Master!
              </h2>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                You have successfully identified and mastered all <strong>{totalPoolCount} official road signs</strong> with 100% accuracy! You are fully prepared to ace the BMV sign recognition exam.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 text-left">
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold">Signs Mastered</div>
                  <div className="text-2xl font-black text-emerald-600 mt-0.5 tabular-nums">
                    {totalPoolCount} / {totalPoolCount}
                  </div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold">Best Streak</div>
                  <div className="text-2xl font-black text-indigo-600 mt-0.5 tabular-nums">
                    {bestStreak} in a row
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={restartSession}
                className="w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Play Again & Keep Sharpening</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Top Mastery Progress Header */}
      <div className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-slate-200/90">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-md text-xs font-black uppercase tracking-wider">
                Sign Recognition Mode
              </span>
              {streak >= 3 && (
                <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md animate-pulse">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>{streak} Streak!</span>
                </span>
              )}
            </div>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-1">
              Identify the Blank Sign
            </h1>
          </div>

          {/* Sound & Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const next = !soundOn;
                setSoundOn(next);
                setSoundEnabled(next);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors"
              title={soundOn ? 'Mute sound effects' : 'Enable sound effects'}
            >
              {soundOn ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sound ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span>Sound OFF</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={restartSession}
              className="p-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
              title="Reset progress"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 100% Goal Tracker Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-slate-600">
              Mastery Goal: <strong className="text-indigo-600">{masteredIds.size}</strong> of {totalPoolCount} signs
            </span>
            <span className="text-indigo-600 tabular-nums">
              {masteryPercentage}% Complete
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3.5 p-0.5 border border-slate-200/80 overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-emerald-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${masteryPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Interactive Sign Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
        {/* Translation Control Strip (Featuring distinct Reveal and Hide/Revert buttons) */}
        <div className="bg-slate-900 text-white p-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {/* Target Language Select */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
              Language:
            </span>
            <div className="inline-flex p-1 bg-slate-800 rounded-xl border border-slate-700">
              {(['es', 'ps', 'hi', 'pa'] as Language[]).map((langKey) => {
                const lang = LANGUAGES[langKey];
                const active = selectedLanguage === langKey;
                return (
                  <button
                    key={langKey}
                    type="button"
                    onClick={() => {
                      onLanguageChange(langKey);
                    }}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                      active
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{lang.flag}</span> <span className="hidden md:inline">{lang.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* TWO REQUIRED BUTTONS: Reveal Translation vs Hide & Revert to English */}
          <div className="flex items-center gap-2">
            {/* Button 1: Reveal Translation */}
            <button
              type="button"
              onClick={() => setIsTranslated(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isTranslated
                  ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-300'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>Reveal {langMeta.name}</span>
            </button>

            {/* Button 2: Hide / Revert to English */}
            <button
              type="button"
              onClick={() => setIsTranslated(false)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                !isTranslated
                  ? 'bg-indigo-600 text-white ring-2 ring-indigo-400'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Revert to English</span>
            </button>
          </div>
        </div>

        {/* Interactive Play Area */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: The Blank Sign Display (changes to completed sign on click) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative transform hover:scale-102 transition-transform duration-200">
                <TrafficSign
                  signType={currentSign.signType}
                  blank={!revealedCompletedSign}
                  size="lg"
                  shape={currentSign.signShape}
                  color={currentSign.signColor}
                  showBadge={true}
                />
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span>Shape: <strong className="text-slate-800 capitalize">{currentSign.signShape}</strong></span>
                <span>·</span>
                <span>Color: <strong className="text-slate-800 capitalize">{currentSign.signColor}</strong></span>
              </div>
            </div>

            {/* Right: Question and Rapid Multiple Choice Options */}
            <div className="md:col-span-7 flex flex-col">
              {/* Question Header & Speech Audio */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>Select the correct sign name:</span>
                  </div>
                  <h2
                    className={`text-xl md:text-2xl font-black text-slate-900 leading-snug ${
                      isRtl ? 'text-right font-arabic' : 'font-sans'
                    }`}
                    dir={isRtl ? 'rtl' : 'ltr'}
                  >
                    {displayedQuestion}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => speakEnglishText(currentSign.question)}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-colors shrink-0"
                  title="Listen to question in English"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Instant Tap Options List */}
              <div className="space-y-3 mb-4">
                {currentSign.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentSign.correctAnswer;

                  // Resolve translation if active
                  let optionLabel = option;
                  if (isTranslated && translation && translation.options) {
                    optionLabel = translation.options[idx] || option;
                  }

                  // Dynamic style states for instant feedback
                  let btnClasses =
                    'w-full min-h-[56px] text-left p-4 rounded-2xl border-2 font-semibold text-sm transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer ';

                  if (isAnswering) {
                    if (isCorrect) {
                      btnClasses += 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-300 font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnClasses += 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-200 animate-shake';
                    } else {
                      btnClasses += 'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
                    }
                  } else {
                    btnClasses += 'bg-white border-slate-200 text-slate-800 hover:border-indigo-500 hover:bg-indigo-50/50 hover:shadow-sm active:scale-[0.99]';
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswering}
                      className={btnClasses}
                    >
                      <div className="flex items-center gap-3 w-full">
                        <span
                          className={`w-7 h-7 shrink-0 rounded-xl flex items-center justify-center font-black text-xs ${
                            isAnswering
                              ? isCorrect
                                ? 'bg-emerald-600 text-white'
                                : isSelected
                                ? 'bg-rose-600 text-white'
                                : 'bg-slate-200 text-slate-600'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </span>

                        <div
                          className={`grow ${
                            isRtl ? 'text-right font-arabic' : ''
                          }`}
                          dir={isRtl ? 'rtl' : 'ltr'}
                        >
                          <div className="font-bold">{optionLabel}</div>
                          {isTranslated && (
                            <div className="text-[11px] text-slate-400 font-normal">
                              EN: {option}
                            </div>
                          )}
                        </div>

                        {/* Instant visual indicators */}
                        {isAnswering && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isAnswering && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Speed-skip affordance during delay */}
              {isAnswering && (
                <div className="flex items-center justify-between pt-2 text-xs">
                  <span className="text-slate-500 italic">
                    {selectedOption === currentSign.correctAnswer
                      ? '✓ Correct! Advancing...'
                      : 'Incorrect — Correct answer highlighted above'}
                  </span>
                  <button
                    type="button"
                    onClick={() => advanceNextQuestion(selectedOption === currentSign.correctAnswer)}
                    className="flex items-center gap-1 font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    <span>Next now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
