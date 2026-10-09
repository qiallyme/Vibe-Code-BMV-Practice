import React from 'react';
import { AppMode } from '../types';

interface HeaderProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentMode, onSelectMode }) => {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-4 bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Zone 1: Single text element wordmark */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onSelectMode('signs');
        }}
        className="text-lg font-extrabold tracking-tight text-slate-950 whitespace-nowrap shrink-0 flex items-center gap-2"
      >
        <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
          BMV
        </span>
        <span>Practice Exam</span>
      </a>

      {/* Zone 2: 4-5 clean single-line text navigation links */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
        <button
          type="button"
          onClick={() => onSelectMode('sign_recognition')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
            currentMode === 'sign_recognition' ? 'text-indigo-600 underline underline-offset-8 font-bold' : ''
          }`}
        >
          Sign Recognition Mode
        </button>
        <button
          type="button"
          onClick={() => onSelectMode('rules')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
            currentMode === 'rules' ? 'text-indigo-600 underline underline-offset-8 font-bold' : ''
          }`}
        >
          Knowledge Rules Test
        </button>
        <button
          type="button"
          onClick={() => onSelectMode('study_cards')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
            currentMode === 'study_cards' ? 'text-indigo-600 underline underline-offset-8 font-bold' : ''
          }`}
        >
          Sign Study Guide
        </button>
        <button
          type="button"
          onClick={() => onSelectMode('bmv_simulation')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${
            currentMode === 'bmv_simulation' ? 'text-indigo-600 underline underline-offset-8 font-bold' : ''
          }`}
        >
          Full Simulation
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={() => onSelectMode('sign_recognition')}
          className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-xs whitespace-nowrap shrink-0"
        >
          Play Sign Recognition
        </button>
      </div>
    </header>
  );
};
