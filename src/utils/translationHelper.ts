import { GeneralQuestion, Language, SignQuestion, TranslationItem } from '../types';
import { BMV_TRANSLATIONS_MAP } from '../data/translationsDictionary';

export function getQuestionTranslation(
  q: SignQuestion | GeneralQuestion | undefined | null,
  lang: Language
): TranslationItem | null {
  if (!q) return null;

  // 1. Direct object translation
  if (q.translations && q.translations[lang]) {
    return q.translations[lang] as TranslationItem;
  }

  // 2. Direct map lookup by ID
  if (q.id && BMV_TRANSLATIONS_MAP[q.id] && BMV_TRANSLATIONS_MAP[q.id][lang]) {
    return BMV_TRANSLATIONS_MAP[q.id][lang];
  }

  // 3. Modulo lookup for cloned IDs (101 to 500)
  const numId = parseInt(q.id, 10);
  if (!isNaN(numId) && numId > 100) {
    const baseId = String(((numId - 101) % 100) + 1);
    if (BMV_TRANSLATIONS_MAP[baseId] && BMV_TRANSLATIONS_MAP[baseId][lang]) {
      return BMV_TRANSLATIONS_MAP[baseId][lang];
    }
  }

  // 4. Fallback search by English question text
  const entry = Object.values(BMV_TRANSLATIONS_MAP).find(
    (item) => item[lang] && (q.question.includes(item.es.options[0]) || q.question.slice(0, 25) === q.question.slice(0, 25))
  );
  if (entry && entry[lang]) {
    return entry[lang];
  }

  return null;
}

// Speaks the English question or text using Web Speech API with screen-reader friendly voice
export function speakEnglishText(text: string) {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
}
