import React, { useState } from 'react';
import { Language, SignQuestion } from '../types';
import { BMV_SIGNS_DATA } from '../data/signsData';
import { TrafficSign } from './TrafficSign';
import { LANGUAGES } from '../data/languages';
import { speakEnglishText } from '../utils/translationHelper';
import {
  Search,
  Eye,
  EyeOff,
  Volume2,
  Sparkles,
  HelpCircle,
  Filter,
} from 'lucide-react';

interface SignStudyCatalogProps {
  selectedLanguage: Language;
}

export const SignStudyCatalog: React.FC<SignStudyCatalogProps> = ({
  selectedLanguage,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [blankModeAll, setBlankModeAll] = useState<boolean>(true);
  const [cardBlankStates, setCardBlankStates] = useState<Record<string, boolean>>({});

  const langMeta = LANGUAGES[selectedLanguage];

  const categories = [
    { id: 'all', label: 'All Signs' },
    { id: 'regulatory', label: 'Regulatory' },
    { id: 'warning', label: 'Warning' },
    { id: 'school', label: 'School' },
    { id: 'railroad', label: 'Railroad' },
    { id: 'construction', label: 'Construction' },
    { id: 'guide', label: 'Guide & Services' },
  ];

  const filteredSigns = BMV_SIGNS_DATA.filter((sign) => {
    const matchesCategory = filterCategory === 'all' || sign.category === filterCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      sign.signName.toLowerCase().includes(query) ||
      sign.signShape.toLowerCase().includes(query) ||
      sign.signColor.toLowerCase().includes(query) ||
      sign.question.toLowerCase().includes(query) ||
      (sign.translations[selectedLanguage]?.question.toLowerCase().includes(query) ?? false);
    return matchesCategory && matchesSearch;
  });

  const toggleSingleSign = (id: string) => {
    setCardBlankStates((prev) => ({
      ...prev,
      [id]: prev[id] !== undefined ? !prev[id] : !blankModeAll,
    }));
  };

  return (
    <div className="space-y-8">
      {/* Educational Banner on BMV Sign Shapes & Colors */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
          <div>
            <span className="px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/40 rounded-lg text-xs font-bold uppercase tracking-wider">
              BMV Official Exam Standard
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2">
              Recognize Signs by Color & Shape
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              At the BMV testing terminal, questions often omit words and symbols. You must know what every shape and color means by heart!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                const nextState = !blankModeAll;
                setBlankModeAll(nextState);
                const resets: Record<string, boolean> = {};
                BMV_SIGNS_DATA.forEach((s) => (resets[s.id] = nextState));
                setCardBlankStates(resets);
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-all shadow-md"
            >
              {blankModeAll ? (
                <>
                  <Eye className="w-4 h-4 text-emerald-600" />
                  <span>Reveal All Real Signs</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-4 h-4 text-amber-600" />
                  <span>Test Myself with Blank Signs</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Shape Reference Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-4 border-t border-slate-800/80">
          <div className="p-2.5 bg-slate-800/60 rounded-xl text-center border border-slate-700/60">
            <span className="text-red-400 font-bold block text-xs">Octagon (8)</span>
            <span className="text-[11px] text-slate-300">STOP Only</span>
          </div>
          <div className="p-2.5 bg-slate-800/60 rounded-xl text-center border border-slate-700/60">
            <span className="text-red-400 font-bold block text-xs">Triangle ▼</span>
            <span className="text-[11px] text-slate-300">YIELD Right of Way</span>
          </div>
          <div className="p-2.5 bg-slate-800/60 rounded-xl text-center border border-slate-700/60">
            <span className="text-amber-400 font-bold block text-xs">Pennant ▶</span>
            <span className="text-[11px] text-slate-300">No Passing Zone</span>
          </div>
          <div className="p-2.5 bg-slate-800/60 rounded-xl text-center border border-slate-700/60">
            <span className="text-amber-400 font-bold block text-xs">Diamond ◆</span>
            <span className="text-[11px] text-slate-300">Warning / Hazards</span>
          </div>
          <div className="p-2.5 bg-slate-800/60 rounded-xl text-center border border-slate-700/60">
            <span className="text-yellow-300 font-bold block text-xs">Round ●</span>
            <span className="text-[11px] text-slate-300">Railroad Crossing</span>
          </div>
          <div className="p-2.5 bg-slate-800/60 rounded-xl text-center border border-slate-700/60">
            <span className="text-lime-400 font-bold block text-xs">Pentagon ⬠</span>
            <span className="text-[11px] text-slate-300">School Zone</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-2 bg-white rounded-2xl border border-slate-200/90 shadow-sm">
        {/* Category Filters */}
        <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto p-1">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilterCategory(c.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                filterCategory === c.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sign or shape..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900"
          />
        </div>
      </div>

      {/* Sign Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSigns.map((sign) => {
          const isBlank =
            cardBlankStates[sign.id] !== undefined
              ? cardBlankStates[sign.id]
              : blankModeAll;
          const tr = sign.translations[selectedLanguage];
          const isRtl = langMeta.dir === 'rtl';

          return (
            <div
              key={sign.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between"
            >
              <div>
                {/* Sign Vector Center */}
                <div className="flex justify-center mb-4">
                  <TrafficSign
                    signType={sign.signType}
                    blank={isBlank}
                    size="md"
                    shape={sign.signShape}
                    color={sign.signColor}
                  />
                </div>

                {/* Sign Names in English and Target Language */}
                <div className="text-center mb-3">
                  <h3 className="font-extrabold text-slate-900 text-base">
                    {sign.signName}
                  </h3>
                  <div
                    className={`text-xs font-semibold text-indigo-700 mt-0.5 ${
                      isRtl ? 'font-arabic' : ''
                    }`}
                    dir={isRtl ? 'rtl' : 'ltr'}
                  >
                    {tr?.question.slice(0, 48)}...
                  </div>
                </div>

                {/* Characteristics */}
                <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1.5 border border-slate-100 text-slate-600 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Shape:</span>
                    <strong className="text-slate-800 capitalize">{sign.signShape}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Color:</span>
                    <strong className="text-slate-800 capitalize">{sign.signColor}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Meaning:</span>
                    <strong className="text-slate-800">{sign.options[sign.correctAnswer]}</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => toggleSingleSign(sign.id)}
                  className="grow flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  {isBlank ? (
                    <>
                      <Eye className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Reveal Sign</span>
                    </>
                  ) : (
                    <>
                      <EyeOff className="w-3.5 h-3.5 text-slate-500" />
                      <span>Show Blank</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => speakEnglishText(sign.signName + '. ' + sign.options[sign.correctAnswer])}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-colors"
                  title="Listen in English"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSigns.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 text-slate-500">
          <p className="text-base font-medium">No signs matching your search.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setFilterCategory('all');
            }}
            className="mt-3 text-xs font-bold text-indigo-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
