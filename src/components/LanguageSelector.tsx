import React from 'react';
import { Language } from '../types';
import { LANGUAGES } from '../data/languages';
import { Globe, Languages } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
        <Globe className="w-3.5 h-3.5 text-indigo-600" />
        <span>Translate to:</span>
      </div>

      <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200/80 shadow-xs">
        {(Object.keys(LANGUAGES) as Language[]).map((key) => {
          const lang = LANGUAGES[key];
          const isSelected = currentLanguage === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onLanguageChange(key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-white text-indigo-900 shadow-xs border border-indigo-200/60 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
              title={`Switch translation target to ${lang.name} (${lang.nativeName})`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
              <span className="text-[11px] opacity-70">({lang.nativeName})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
