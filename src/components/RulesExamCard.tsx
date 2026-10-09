import React, { useState } from 'react';
import { GeneralQuestion, Language } from '../types';
import { LANGUAGES } from '../data/languages';
import { speakEnglishText } from '../utils/translationHelper';
import {
  Volume2,
  Languages,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface RulesExamCardProps {
  question: GeneralQuestion;
  selectedLanguage: Language;
  onAnswer: (optionIndex: number) => void;
  currentIndex: number;
  totalQuestions: number;
  score: { correct: number; total: number };
}

export const RulesExamCard: React.FC<RulesExamCardProps> = ({
  question,
  selectedLanguage,
  onAnswer,
  currentIndex,
  totalQuestions,
  score,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [revealedOptions, setRevealedOptions] = useState<Record<number, boolean>>({});

  const langMeta = LANGUAGES[selectedLanguage];
  const translation = question.translations ? question.translations[selectedLanguage] : null;

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isAnswered) return;
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowTranslation(false);
      setRevealedOptions({});
    }
  };

  const toggleOptionTranslation = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setRevealedOptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const isCorrect = selectedOption === question.correctAnswer;

  const displayedQuestionText = showTranslation && translation
    ? translation.question
    : question.question;

  const displayedExplanation = showTranslation && translation
    ? translation.explanation
    : question.explanation;

  const isRtl = showTranslation && langMeta.dir === 'rtl';

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
      {/* Top Test Header Bar */}
      <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-lg text-xs font-bold uppercase tracking-wider">
            BMV Knowledge Test Question {currentIndex + 1} of {totalQuestions}
          </span>
          {question.category && (
            <span className="text-xs text-slate-300">
              Category: <strong className="text-white">{question.category}</strong>
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="text-emerald-400 font-bold">
            Score: {score.correct} / {score.total} ({score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%)
          </span>
          <div className="w-24 bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-indigo-500 h-full transition-all duration-300"
              style={{ width: `${(currentIndex / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Translation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 bg-slate-100 rounded-2xl border border-slate-200 mb-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => speakEnglishText(question.question)}
              className="p-2 rounded-xl bg-white text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 transition-colors shadow-xs"
              title="Listen to question in English"
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <span className="text-xs font-medium text-slate-600">
              {showTranslation && translation ? (
                <span className="text-indigo-700 font-semibold">
                  Translated into {langMeta.name} ({langMeta.nativeName})
                </span>
              ) : (
                <span>Default: English text (BMV official testing format)</span>
              )}
            </span>
          </div>

          {/* Reveal & Revert button */}
          <button
            type="button"
            onClick={() => setShowTranslation(!showTranslation)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
              showTranslation
                ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-200'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
            }`}
          >
            {showTranslation ? (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Revert to English Original</span>
              </>
            ) : (
              <>
                <Languages className="w-3.5 h-3.5" />
                <span>Reveal {langMeta.name} Translation</span>
              </>
            )}
          </button>
        </div>

        {/* Question Text */}
        <div className="mb-6">
          <h2
            className={`text-xl md:text-2xl font-extrabold text-slate-900 leading-snug ${
              isRtl ? 'text-right font-arabic' : 'font-sans'
            }`}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {displayedQuestionText}
          </h2>

          {showTranslation && (
            <p className="mt-2 text-xs text-slate-500 italic bg-slate-50 p-2 rounded-lg border border-slate-200">
              English original: "{question.question}"
            </p>
          )}
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((opt, idx) => {
            const isOptionSelected = selectedOption === idx;
            const isOptionCorrect = idx === question.correctAnswer;
            const isOptionRevealedIndividually = revealedOptions[idx];

            let optionText = opt;
            if ((showTranslation || isOptionRevealedIndividually) && translation && translation.options) {
              optionText = translation.options[idx] || opt;
            }

            let buttonStyles =
              'w-full text-left p-4 rounded-xl border-2 transition-all font-medium flex items-center justify-between gap-3 ';

            if (isAnswered) {
              if (isOptionCorrect) {
                buttonStyles += 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
              } else if (isOptionSelected && !isOptionCorrect) {
                buttonStyles += 'bg-rose-50 border-rose-500 text-rose-950';
              } else {
                buttonStyles += 'bg-slate-50 border-slate-200 text-slate-500 opacity-60';
              }
            } else {
              if (isOptionSelected) {
                buttonStyles += 'bg-indigo-50 border-indigo-600 text-indigo-950 shadow-sm';
              } else {
                buttonStyles += 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-slate-50';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
                className={buttonStyles}
              >
                <div className="flex items-center gap-3 w-full">
                  <span
                    className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isAnswered
                        ? isOptionCorrect
                          ? 'bg-emerald-600 text-white'
                          : isOptionSelected
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-200 text-slate-700'
                        : isOptionSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>

                  <div
                    className={`grow text-sm ${
                      isRtl && (showTranslation || isOptionRevealedIndividually)
                        ? 'text-right font-arabic'
                        : ''
                    }`}
                    dir={isRtl && (showTranslation || isOptionRevealedIndividually) ? 'rtl' : 'ltr'}
                  >
                    <div>{optionText}</div>
                    {(showTranslation || isOptionRevealedIndividually) && (
                      <div className="text-[11px] text-slate-400 mt-0.5">EN: {opt}</div>
                    )}
                  </div>

                  {!isAnswered && translation && (
                    <button
                      type="button"
                      onClick={(e) => toggleOptionTranslation(idx, e)}
                      className="shrink-0 p-1.5 rounded-md text-slate-400 hover:text-indigo-600 hover:bg-indigo-100/50 transition-colors"
                      title={isOptionRevealedIndividually ? 'Revert to English' : `Translate to ${langMeta.name}`}
                    >
                      <Languages className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {isAnswered && isOptionCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswered && isOptionSelected && !isOptionCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {isAnswered && (
          <div
            className={`p-5 rounded-2xl mb-6 border animate-in fade-in duration-200 ${
              isCorrect
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                : 'bg-amber-50 border-amber-300 text-amber-950'
            }`}
          >
            <div className="flex items-center gap-2 font-bold mb-2 text-sm">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-amber-900">
                    Incorrect. Option {String.fromCharCode(65 + question.correctAnswer)} is the correct answer.
                  </span>
                </>
              )}
            </div>

            <p
              className={`text-sm leading-relaxed text-slate-700 ${
                isRtl ? 'text-right font-arabic' : ''
              }`}
              dir={isRtl ? 'rtl' : 'ltr'}
            >
              {displayedExplanation}
            </p>
          </div>
        )}

        {/* Action button */}
        {!isAnswered ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className={`w-full py-4 px-6 rounded-2xl font-bold text-base transition-all shadow-md ${
              selectedOption === null
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200 hover:shadow-lg'
            }`}
          >
            Submit Answer
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="w-full py-4 px-6 rounded-2xl font-bold text-base bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Next Question</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
