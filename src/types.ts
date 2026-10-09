export type Language = 'es' | 'ps' | 'pa' | 'hi';

export interface LanguageMeta {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  fontClass: string;
}

export type SignShape =
  | 'octagon'
  | 'triangle'
  | 'pennant'
  | 'circle'
  | 'pentagon'
  | 'diamond'
  | 'vertical_rectangle'
  | 'horizontal_rectangle'
  | 'square'
  | 'shield';

export type SignColor =
  | 'red'
  | 'yellow'
  | 'orange'
  | 'white'
  | 'green'
  | 'blue'
  | 'brown'
  | 'fluorescent_yellow_green';

export interface TranslationItem {
  question: string;
  options: string[];
  explanation: string;
}

export interface SignQuestion {
  id: string;
  signType: string;
  signName: string;
  signShape: SignShape;
  signColor: SignColor;
  blankMode: 'text_blanked' | 'shape_only' | 'symbol_only';
  category: 'regulatory' | 'warning' | 'guide' | 'construction' | 'school' | 'railroad';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  translations: {
    es: TranslationItem;
    ps: TranslationItem;
    pa: TranslationItem;
    hi: TranslationItem;
  };
}

export interface GeneralQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category?: string;
  translations?: Partial<Record<Language, TranslationItem>>;
}

export type AppMode = 'sign_recognition' | 'signs' | 'rules' | 'bmv_simulation' | 'study_cards';
