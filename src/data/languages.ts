import { Language, LanguageMeta } from '../types';

export const LANGUAGES: Record<Language, LanguageMeta> = {
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    dir: 'ltr',
    fontClass: 'font-sans',
  },
  ps: {
    code: 'ps',
    name: 'Pashto',
    nativeName: 'پښتو',
    flag: '🇦🇫',
    dir: 'rtl',
    fontClass: 'font-arabic',
  },
  pa: {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    flag: '🇮🇳',
    dir: 'ltr',
    fontClass: 'font-gurmukhi',
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    dir: 'ltr',
    fontClass: 'font-devanagari',
  },
};

export const UI_TEXT = {
  revealTranslation: {
    en: 'Reveal Translation',
    es: 'Mostrar traducción',
    ps: 'ترجمه وښایاست',
    pa: 'ਅਨੁਵਾਦ ਵੇਖੋ',
    hi: 'अनुवाद देखें',
  },
  showEnglish: {
    en: 'Show English Original',
    es: 'Mostrar original en inglés',
    ps: 'اصلي انګلیسي وښایاست',
    pa: 'ਅਸਲੀ ਅੰਗਰੇਜ਼ੀ ਦਿਖਾਓ',
    hi: 'मूल अंग्रेजी दिखाएं',
  },
  clickToToggle: {
    en: 'Click to switch back and forth between English and translation',
    es: 'Haga clic para alternar entre inglés y la traducción',
    ps: 'د انګلیسي او ژباړې ترمنځ د بدلولو لپاره کلیک وکړئ',
    pa: 'ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਅਨੁਵਾਦ ਵਿਚਕਾਰ ਬਦਲਣ ਲਈ ਕਲਿੱਕ ਕਰੋ',
    hi: 'अंग्रेजी और अनुवाद के बीच बदलने के लिए क्लिक करें',
  },
  signsTestTitle: {
    en: 'BMV Blank Sign Identification Test',
    es: 'Examen de señales de tráfico en blanco del BMV',
    ps: 'د BMV خالي ټرافیکي نښو پیژندنې ازموینه',
    pa: 'BMV ਖਾਲੀ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਪਛਾਣ ਟੈਸਟ',
    hi: 'BMV खाली ट्रैफिक साइन पहचान परीक्षा',
  },
  blankSignNotice: {
    en: 'At the BMV, you will be shown blank shapes or signs with missing text and asked to identify their legal meaning.',
    es: 'En el BMV, verá formas o señales sin texto y se le pedirá identificar su significado legal.',
    ps: 'په BMV کې، تاسو ته به خالي بڼې یا نښې وښودل شي او د هغوی قانوني معنی به وپوښتل شي.',
    pa: 'BMV ਵਿਖੇ, ਤੁਹਾਨੂੰ ਖਾਲੀ ਆਕਾਰ ਜਾਂ ਬਿਨਾਂ ਲਿਖਤ ਵਾਲੇ ਚਿੰਨ੍ਹ ਦਿਖਾਏ ਜਾਣਗੇ ਅਤੇ ਉਹਨਾਂ ਦਾ ਮਤਲਬ ਪੁੱਛਿਆ ਜਾਵੇਗਾ।',
    hi: 'BMV में, आपको खाली आकृतियाँ या बिना लिखे संकेत दिखाए जाएंगे और उनका कानूनी अर्थ पूछा जाएगा।',
  },
};
