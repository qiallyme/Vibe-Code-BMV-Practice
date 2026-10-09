import React from 'react';
import { Language, SignQuestion } from '../types';
import { LANGUAGES } from '../data/languages';
import { TrafficSign } from './TrafficSign';
import { CheckCircle2, XCircle, RotateCcw, Award, ArrowRight } from 'lucide-react';

interface ExamResultsProps {
  score: { correct: number; total: number };
  missedQuestions: any[];
  onRetakeAll: () => void;
  onRetakeMissed: () => void;
  selectedLanguage: Language;
  testTitle: string;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  score,
  missedQuestions,
  onRetakeAll,
  onRetakeMissed,
  selectedLanguage,
  testTitle,
}) => {
  const percentage = Math.round((score.correct / score.total) * 100);
  const passed = percentage >= 80;
  const langMeta = LANGUAGES[selectedLanguage];

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-8 md:p-12 text-center max-w-4xl mx-auto">
      <div className="w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 text-3xl shadow-md bg-gradient-to-tr from-indigo-50 to-amber-50 border border-slate-200">
        {passed ? '🎉' : '📚'}
      </div>

      <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 mb-2">
        {testTitle} Result
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
        {passed ? 'Congratulations! You Passed!' : 'Needs Review - Keep Practicing!'}
      </h2>

      <p className="text-slate-600 text-sm max-w-lg mx-auto mb-8">
        {passed
          ? `You scored ${percentage}%, well above the Indiana BMV passing threshold of 80%. You have mastered the signs required for your driving test!`
          : `You scored ${percentage}%. In Indiana, you need at least 80% to pass the official knowledge and signs examination. Review your missed items below.`}
      </p>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left">
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="text-xs text-slate-500 font-semibold">Total Score</div>
          <div className="text-3xl font-extrabold text-slate-900 mt-1 tabular-nums">
            {percentage}%
          </div>
          <div className="text-xs text-slate-400 mt-1">Passing requirement: 80%</div>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
          <div className="text-xs text-emerald-700 font-semibold">Correct Answers</div>
          <div className="text-3xl font-extrabold text-emerald-900 mt-1 tabular-nums">
            {score.correct} / {score.total}
          </div>
          <div className="text-xs text-emerald-600 mt-1">Mastered items</div>
        </div>

        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
          <div className="text-xs text-amber-700 font-semibold">Missed Questions</div>
          <div className="text-3xl font-extrabold text-amber-900 mt-1 tabular-nums">
            {missedQuestions.length}
          </div>
          <div className="text-xs text-amber-600 mt-1">Need review</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <button
          type="button"
          onClick={onRetakeAll}
          className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake Full Test</span>
        </button>

        {missedQuestions.length > 0 && (
          <button
            type="button"
            onClick={onRetakeMissed}
            className="px-6 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <span>Retake {missedQuestions.length} Missed Only</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Missed Questions Breakdown */}
      {missedQuestions.length > 0 && (
        <div className="text-left pt-8 border-t border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Review Missed Questions ({missedQuestions.length})
          </h3>

          <div className="space-y-4">
            {missedQuestions.map((q, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start gap-4"
              >
                {q.signType && (
                  <div className="shrink-0 flex justify-center">
                    <TrafficSign signType={q.signType} blank={false} size="sm" showBadge={false} />
                  </div>
                )}

                <div className="grow">
                  <div className="text-xs font-bold text-rose-600 uppercase mb-1">
                    Missed #{idx + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{q.question}</h4>
                  <div className="mt-2 text-xs text-emerald-800 bg-emerald-100/60 p-2.5 rounded-xl border border-emerald-200">
                    <strong>Correct Answer:</strong> {q.options[q.correctAnswer]}
                  </div>
                  <p className="mt-1.5 text-xs text-slate-600">{q.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
