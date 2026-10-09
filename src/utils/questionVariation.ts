import { Language, SignQuestion, GeneralQuestion, TranslationItem } from '../types';
import { getQuestionTranslation } from './translationHelper';

export interface ShuffledQuestionData {
  displayQuestion: string;
  displayOptions: string[];
  correctIndex: number;
  explanation: string;
  variantLabel: string; // e.g. "Round 1: Standard" | "Round 2: Rephrased" | "Round 3: Scenario"
  translations?: Partial<Record<Language, TranslationItem>>;
}

// Rephrasings dictionary for core road signs based on mastery count (0 = 1st, 1 = 2nd, 2 = 3rd)
const SIGN_REPHRASINGS: Record<string, {
  round2: string;
  round3: string;
  tr2?: Partial<Record<Language, string>>;
  tr3?: Partial<Record<Language, string>>;
}> = {
  stop: {
    round2: "When approaching this blank 8-sided red sign at an intersection, what action is legally required?",
    round3: "You see this octagonal red sign ahead with a pedestrian crosswalk. How must you respond?",
    tr2: {
      es: "¿Qué acción se exige legalmente al acercarse a esta señal roja de 8 lados en una intersección?",
      ps: "په څلورلارې کې دې ۸ کونجه سرې خالي نښې ته په نږدې کېدو، قانوناً څه کول لازمي دي؟",
      pa: "ਚੌਰਾਹੇ ਤੇ ਇਸ 8-ਪਾਸੜ ਲਾਲ ਚਿੰਨ੍ਹ ਕੋਲ ਪਹੁੰਚਣ ਵੇਲੇ ਕਾਨੂੰਨੀ ਤੌਰ ਤੇ ਕੀ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ?",
      hi: "चौराहे पर इस 8-भुजा वाले लाल संकेत के पास पहुँचने पर कानूनी रूप से क्या आवश्यक है?",
    },
    tr3: {
      es: "Ve esta señal roja octagonal adelante con un paso peatonal. ¿Cómo debe responder?",
      ps: "تاسو مخکې دا اته کونجه سره نښه او پیاده لاره وینئ. تاسو باید څه عکس العمل وښایئ؟",
      pa: "ਤੁਸੀਂ ਅੱਗੇ ਪੈਦਲ ਕ੍ਰਾਸਿੰਗ ਵਾਲਾ ਇਹ ਅੱਠਭੁਜ ਲਾਲ ਚਿੰਨ੍ਹ ਦੇਖਦੇ ਹੋ। ਤੁਹਾਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      hi: "आप आगे पैदल क्रॉसिंग के साथ यह अष्टकोणीय लाल संकेत देखते हैं। आपको क्या करना चाहिए?",
    },
  },
  yield: {
    round2: "What is your legal duty when entering traffic facing this blank downward triangle sign?",
    round3: "Traffic is approaching as you reach this triangular red and white sign. What must you do?",
    tr2: {
      es: "¿Cuál es su deber legal al entrar al tráfico frente a esta señal triangular invertida?",
      ps: "کله چې دې ښکته درې کونجه نښې ته مخامخ ترافیک ته ننوځئ، ستاسو قانوني دنده څه ده؟",
      pa: "ਇਸ ਹੇਠਾਂ ਵੱਲ ਤਿਕੋਣ ਵਾਲੇ ਚਿੰਨ੍ਹ ਦੇ ਸਾਹਮਣੇ ਆਵਾਜਾਈ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਵੇਲੇ ਤੁਹਾਡਾ ਕਾਨੂੰਨੀ ਫਰਜ਼ ਕੀ ਹੈ?",
      hi: "इस उल्टे त्रिकोण संकेत के सामने यातायात में प्रवेश करते समय आपका कानूनी कर्तव्य क्या है?",
    },
    tr3: {
      es: "Se aproxima tráfico mientras llega a esta señal triangular roja y blanca. ¿Qué debe hacer?",
      ps: "کله چې تاسو دې سرې او سپینې درې کونجه نښې ته ورسیږئ او موټر راروان وي، څه باید وکړئ؟",
      pa: "ਜਦੋਂ ਤੁਸੀਂ ਇਸ ਲਾਲ ਅਤੇ ਚਿੱਟੇ ਤਿਕੋਣੇ ਚਿੰਨ੍ਹ ਤੇ ਪਹੁੰਚਦੇ ਹੋ ਅਤੇ ਟ੍ਰੈਫਿਕ ਆ ਰਿਹਾ ਹੈ, ਤੁਹਾਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      hi: "जब आप इस लाल और सफेद त्रिकोणीय संकेत पर पहुंचते हैं और यातायात आ रहा है, तो आपको क्या करना चाहिए?",
    },
  },
  no_passing: {
    round2: "You are on a two-lane highway and observe this pennant sign on the left. What does it prohibit?",
    round3: "Why is this pennant-shaped sign uniquely posted on the left-hand side of the road?",
    tr2: {
      es: "Está en una carretera de dos carriles y observa este banderín a la izquierda. ¿Qué prohíbe?",
      ps: "تاسو په دوه طرفه سرک روان یاست او کیڼ اړخ ته دا د بیرغ نښه وینئ. دا د څه ممانعت کوي؟",
      pa: "ਤੁਸੀਂ ਦੋ-ਮਾਰਗੀ ਸੜਕ ਤੇ ਹੋ ਅਤੇ ਖੱਬੇ ਪਾਸੇ ਇਹ ਝੰਡਾ ਚਿੰਨ੍ਹ ਦੇਖਦੇ ਹੋ। ਇਹ ਕਿਸ ਚੀਜ਼ ਦੀ ਮਨਾਹੀ ਕਰਦਾ ਹੈ?",
      hi: "आप दो-लेन राजमार्ग पर हैं और बाईं ओर यह पताका संकेत देखते हैं। यह किस पर रोक लगाता है?",
    },
    tr3: {
      es: "¿Por qué se coloca esta señal en forma de banderín únicamente en el lado izquierdo?",
      ps: "ولې دا بیرغ ډوله نښه یوازې د سړک په چپ اړخ کې درول کیږي؟",
      pa: "ਇਹ ਝੰਡੇ ਦੇ ਆਕਾਰ ਵਾਲਾ ਚਿੰਨ੍ਹ ਖਾਸ ਤੌਰ ਤੇ ਸੜਕ ਦੇ ਖੱਬੇ ਪਾਸੇ ਕਿਉਂ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ?",
      hi: "यह पताका के आकार का संकेत विशेष रूप से सड़क के बाईं ओर ही क्यों लगाया जाता है?",
    },
  },
  railroad: {
    round2: "Driving down a country road, you encounter this circular yellow sign. What hazard is ahead?",
    round3: "What warning does this yellow circular crossbuck advance sign convey to a motorist?",
    tr2: {
      es: "Conduciendo por un camino rural, encuentra esta señal circular amarilla. ¿Qué peligro hay adelante?",
      ps: "په کليوالي سرک د موټر چلولو پرمهال دا ګرده ژېړه نښه وینئ. مخکې کوم خطر دی؟",
      pa: "ਸੜਕ ਤੇ ਜਾਂਦੇ ਹੋਏ ਤੁਸੀਂ ਇਹ ਗੋਲ ਪੀਲਾ ਚਿੰਨ੍ਹ ਦੇਖਦੇ ਹੋ। ਅੱਗੇ ਕਿਹੜਾ ਖ਼ਤਰਾ ਹੈ?",
      hi: "सड़क पर चलते हुए आप यह गोल पीला संकेत देखते हैं। आगे कौन सा खतरा है?",
    },
    tr3: {
      es: "¿Qué advertencia transmite esta señal circular de cruce de ferrocarril a un conductor?",
      ps: "دا ګرده ژېړه نښه چلوونکي ته د څه خبرداری ورکوي؟",
      pa: "ਇਹ ਪੀਲਾ ਗੋਲ ਚਿੰਨ੍ਹ ਡਰਾਈਵਰ ਨੂੰ ਕੀ ਚੇਤਾਵਨੀ ਦਿੰਦਾ ਹੈ?",
      hi: "यह पीला गोल संकेत चालक को क्या चेतावनी देता है?",
    },
  },
  school_zone: {
    round2: "When driving in the morning near this pentagon-shaped sign, what must you watch for?",
    round3: "What special traffic zone is indicated exclusively by this five-sided pentagon shape?",
    tr2: {
      es: "Al conducir por la mañana cerca de esta señal con forma de pentágono, ¿de qué debe cuidarse?",
      ps: "د سهار پرمهال دې پنځه کونجه نښې ته نږدې، تاسو باید د څه لپاره متوجه اوسئ؟",
      pa: "ਸਵੇਰੇ ਇਸ ਪੰਜ-ਭੁਜੀ ਚਿੰਨ੍ਹ ਦੇ ਨੇੜੇ ਗੱਡੀ ਚਲਾਉਂਦੇ ਸਮੇਂ ਤੁਹਾਨੂੰ ਕਿਸ ਚੀਜ਼ ਦਾ ਧਿਆਨ ਰੱਖਣਾ ਚਾਹੀਦਾ ਹੈ?",
      hi: "सुबह के समय इस पंचकोणीय संकेत के पास गाड़ी चलाते समय आपको किस बात का ध्यान रखना चाहिए?",
    },
    tr3: {
      es: "¿Qué zona especial de tráfico se indica exclusivamente con esta forma de pentágono de cinco lados?",
      ps: "کوم ځانګړی ترافیکي زون یوازې د دې پنځه اړخیزه نښې لخوا ښودل کیږي؟",
      pa: "ਇਸ ਪੰਜ-ਪਾਸੜ ਆਕਾਰ ਦੁਆਰਾ ਕਿਹੜਾ ਵਿਸ਼ੇਸ਼ ਟ੍ਰੈਫਿਕ ਜ਼ੋਨ ਦਰਸਾਇਆ ਜਾਂਦਾ ਹੈ?",
      hi: "इस पांच भुजाओं वाले आकार द्वारा विशेष रूप से कौन सा ट्रैफिक क्षेत्र दर्शाया जाता है?",
    },
  },
  slippery_when_wet: {
    round2: "During rainfall or wet conditions, how should you adjust your driving upon seeing this sign?",
    round3: "What specific hazard does this diamond symbol alert motorists to when precipitation begins?",
    tr2: {
      es: "Durante lluvia o humedad, ¿cómo debe ajustar su conducción al ver esta señal?",
      ps: "د باران پرمهال د دې نښې په لیدو تاسو باید موټر چلول څنګه عیار کړئ؟",
      pa: "ਮੀਂਹ ਦੇ ਦੌਰਾਨ ਇਸ ਚਿੰਨ੍ਹ ਨੂੰ ਦੇਖ ਕੇ ਤੁਹਾਨੂੰ ਆਪਣੀ ਡਰਾਈਵਿੰਗ ਕਿਵੇਂ ਬਦਲਣੀ ਚਾਹੀਦੀ ਹੈ?",
      hi: "बारिश के दौरान इस संकेत को देखकर आपको अपनी ड्राइविंग को कैसे समायोजित करना चाहिए?",
    },
    tr3: {
      es: "¿De qué peligro específico alerta este símbolo de diamante cuando comienza la lluvia?",
      ps: "د باران په پیل کېدا دا د الماس نښه د کوم ځانګړي خطر خبرداری ورکوي؟",
      pa: "ਮੀਂਹ ਪੈਣ ਵੇਲੇ ਇਹ ਹੀਰਾ ਚਿੰਨ੍ਹ ਕਿਸ ਖਾਸ ਖ਼ਤਰੇ ਬਾਰੇ ਸੁਚੇਤ ਕਰਦਾ ਹੈ?",
      hi: "बारिश शुरू होने पर यह हीरे का प्रतीक किस विशिष्ट खतरे की चेतावनी देता है?",
    },
  },
  do_not_enter: {
    round2: "You are turning onto an entrance ramp and see this red circle with a white bar. What must you do?",
    round3: "What dangerous driving mistake does this regulatory symbol prevent on ramps and one-way streets?",
    tr2: {
      es: "Gira hacia una rampa y ve este círculo rojo con una barra blanca. ¿Qué debe hacer?",
      ps: "تاسو یوې لارې ته تاوېږئ او دا سور دایره له سپینې پټۍ سره وینئ. تاسو باید څه وکړئ؟",
      pa: "ਤੁਸੀਂ ਰੈਂਪ ਤੇ ਮੁੜ ਰਹੇ ਹੋ ਅਤੇ ਚਿੱਟੀ ਪੱਟੀ ਵਾਲਾ ਲਾਲ ਚੱਕਰ ਦੇਖਦੇ ਹੋ। ਤੁਹਾਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      hi: "आप रैंप पर मुड़ रहे हैं और सफेद पट्टी वाला लाल वृत्त देखते हैं। आपको क्या करना चाहिए?",
    },
    tr3: {
      es: "¿Qué peligroso error de conducción previene este símbolo reglamentario?",
      ps: "دا تنظيمي نښه د موټر چلولو د کومې خطرناکې تېروتنې مخه نیسي؟",
      pa: "ਇਹ ਚਿੰਨ੍ਹ ਡਰਾਈਵਿੰਗ ਦੀ ਕਿਹੜੀ ਖਤਰਨਾਕ ਗਲਤੀ ਨੂੰ ਰੋਕਦਾ ਹੈ?",
      hi: "यह नियामक संकेत ड्राइविंग की किस खतरनाक गलती को रोकता है?",
    },
  },
  lane_ends: {
    round2: "You are traveling in the right lane and see this sign ahead. How should you prepare?",
    round3: "What driving adjustment is required as this roadway tapers from two lanes to one?",
    tr2: {
      es: "Circula por el carril derecho y ve esta señal más adelante. ¿Cómo debe prepararse?",
      ps: "تاسو په ښي لین کې روان یاست او دا نښه مخکې وینئ. تاسو باید څنګه چمتو شئ؟",
      pa: "ਤੁਸੀਂ ਸੱਜੀ ਲੇਨ ਵਿੱਚ ਹੋ ਅਤੇ ਅੱਗੇ ਇਹ ਚਿੰਨ੍ਹ ਦੇਖਦੇ ਹੋ। ਤੁਹਾਨੂੰ ਕਿਵੇਂ ਤਿਆਰੀ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ?",
      hi: "आप दाहिनी लेन में जा रहे हैं और आगे यह संकेत देखते हैं। आपको कैसे तैयारी करनी चाहिए?",
    },
    tr3: {
      es: "¿Qué ajuste de conducción se requiere cuando la carretera se reduce de dos carriles a uno?",
      ps: "کله چې لار له دوو لینونو یو ته کمه شي، په موټر چلولو کې کوم بدلون پکار دی؟",
      pa: "ਜਦੋਂ ਸੜਕ ਦੋ ਲੇਨਾਂ ਤੋਂ ਘਟ ਕੇ ਇੱਕ ਹੋ ਜਾਂਦੀ ਹੈ ਤਾਂ ਕੀ ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ?",
      hi: "जब सड़क दो लेन से घटकर एक हो जाती है तो क्या समायोजन आवश्यक है?",
    },
  },
};

// Shuffles an array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): { shuffled: T[]; originalIndices: number[] } {
  const itemsWithOriginalIndex = array.map((item, index) => ({ item, index }));
  for (let i = itemsWithOriginalIndex.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [itemsWithOriginalIndex[i], itemsWithOriginalIndex[j]] = [itemsWithOriginalIndex[j], itemsWithOriginalIndex[i]];
  }
  return {
    shuffled: itemsWithOriginalIndex.map((x) => x.item),
    originalIndices: itemsWithOriginalIndex.map((x) => x.index),
  };
}

// Generates the presentation for a question on any given round,
// guaranteeing shuffled options every single time and rephrased question on round 2 and 3!
export function prepareShuffledQuestion(
  item: SignQuestion | GeneralQuestion,
  masteryCount: number, // 0 = 1st time, 1 = 2nd time, 2 = 3rd time
  isSign: boolean
): ShuffledQuestionData {
  let displayQuestion = item.question;
  let variantLabel = 'Rep 1 of 3 (Standard)';

  // Determine rephrasing based on mastery count (Round 1 vs Round 2 vs Round 3)
  const signType = (item as SignQuestion).signType;
  if (isSign && signType && SIGN_REPHRASINGS[signType]) {
    const rephraser = SIGN_REPHRASINGS[signType];
    if (masteryCount === 1) {
      displayQuestion = rephraser.round2;
      variantLabel = 'Rep 2 of 3 (Rephrased Action)';
    } else if (masteryCount >= 2) {
      displayQuestion = rephraser.round3;
      variantLabel = 'Rep 3 of 3 (Real-World Scenario)';
    }
  } else if (!isSign) {
    if (masteryCount === 1) {
      displayQuestion = `[BMV Scenario] According to Indiana traffic laws: ${item.question.replace(/^What is /i, 'What is the designated ').replace(/^When /i, 'Under what circumstances ')}`;
      variantLabel = 'Rep 2 of 3 (Scenario Rephrased)';
    } else if (masteryCount >= 2) {
      displayQuestion = `[Official Exam Knowledge] On the Indiana knowledge test: ${item.question}`;
      variantLabel = 'Rep 3 of 3 (Test of Mastery)';
    }
  }

  // Shuffle the options so they are never in the same order
  const { shuffled: displayOptions, originalIndices } = shuffleArray(item.options);
  const correctIndex = originalIndices.indexOf(item.correctAnswer);

  // Synchronize translations with the exact same option permutation
  const displayTranslations: Partial<Record<Language, TranslationItem>> = {};
  const langs: Language[] = ['es', 'ps', 'hi', 'pa'];

  langs.forEach((lang) => {
    const origTr = getQuestionTranslation(item, lang);
    if (origTr) {
      let trQuestion = origTr.question;

      // Apply translated rephrasing if available for sign
      if (isSign && signType && SIGN_REPHRASINGS[signType]) {
        const rephrase = SIGN_REPHRASINGS[signType];
        if (masteryCount === 1 && rephrase.tr2 && rephrase.tr2[lang]) {
          trQuestion = rephrase.tr2[lang]!;
        } else if (masteryCount >= 2 && rephrase.tr3 && rephrase.tr3[lang]) {
          trQuestion = rephrase.tr3[lang]!;
        }
      }

      const shuffledTrOptions = originalIndices.map((origIdx) => origTr.options[origIdx] || item.options[origIdx]);

      displayTranslations[lang] = {
        question: trQuestion,
        options: shuffledTrOptions,
        explanation: origTr.explanation || item.explanation,
      };
    }
  });

  return {
    displayQuestion,
    displayOptions,
    correctIndex,
    explanation: item.explanation,
    variantLabel,
    translations: displayTranslations,
  };
}
