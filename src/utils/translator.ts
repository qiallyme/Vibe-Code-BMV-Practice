import { Language, TranslationItem } from '../types';

// Common BMV driving terms glossary for Pashto, Spanish, Hindi, and Punjabi
export const DRIVING_GLOSSARY: Record<string, { es: string; ps: string; hi: string; pa: string }> = {
  // Signs and Actions
  "Stop": { es: "Alto / Detenerse", ps: "ودریږئ", hi: "रुकें (STOP)", pa: "ਰੁਕੋ (STOP)" },
  "Yield": { es: "Ceda el paso", ps: "لاره ورکړئ", hi: "रास्ता दें (YIELD)", pa: "ਰਾਹ ਛੱਡੋ (YIELD)" },
  "No Passing Zone": { es: "Zona de no rebasar", ps: "له مخکې کېدو منع ساحه", hi: "नो पासिंग ज़ोन", pa: "ਓਵਰਟੇਕ ਨਾ ਕਰੋ" },
  "Railroad crossing": { es: "Cruce de ferrocarril", ps: "د اورګاډي پټلۍ", hi: "रेलवे क्रॉसिंग", pa: "ਰੇਲਵੇ ਕਰਾਸਿੰਗ" },
  "School zone": { es: "Zona escolar", ps: "د ښوونځي زون", hi: "स्कूल क्षेत्र", pa: "ਸਕੂਲ ਜ਼ੋਨ" },
  "Slippery when wet": { es: "Resbaladizo cuando está mojado", ps: "په لوندوالي کې ښویېدونکی", hi: "गीला होने पर फिसलन भरी", pa: "ਗਿੱਲੀ ਹੋਣ ਤੇ ਤਿਲਕਣ ਵਾਲੀ" },
  "Divided highway begins": { es: "Comienza carretera dividida", ps: "وېشل شوې لویه لار پیلېږي", hi: "विभाजित राजमार्ग शुरू", pa: "ਵੰਡਿਆ ਹਾਈਵੇ ਸ਼ੁਰੂ" },
  "Divided highway ends": { es: "Termina carretera dividida", ps: "وېشل شوې لویه لار ختمېږي", hi: "विभाजित राजमार्ग समाप्त", pa: "ਵੰਡਿਆ ਹਾਈਵੇ ਸਮਾਪਤ" },
  "Lane ends": { es: "El carril termina", ps: "لین ختمېږي", hi: "लेन समाप्त", pa: "ਲੇਨ ਖਤਮ" },
  "Two-way traffic": { es: "Tráfico de doble sentido", ps: "دوه طرفه ترافیک", hi: "दोतरफा यातायात", pa: "ਦੋ-ਪਾਸੜ ਆਵਾਜਾਈ" },
  "Do Not Enter": { es: "No entre", ps: "مه ننوځئ", hi: "प्रवेश न करें", pa: "ਦਾਖਲ ਨਾ ਹੋਵੋ" },
  "Wrong Way": { es: "Sentido contrario", ps: "غلط لوری", hi: "गलत दिशा", pa: "ਗਲਤ ਰਸਤਾ" },
  "One Way": { es: "Sentido único", ps: "یو طرفه", hi: "एकतरफा रास्ता", pa: "ਇੱਕ ਪਾਸੜ ਰਸਤਾ" },
  "Speed Limit": { es: "Límite de velocidad", ps: "د سرعت حد", hi: "गति सीमा", pa: "ਸਪੀਡ ਸੀਮਾ" },
  "Keep Right": { es: "Manténgase a la derecha", ps: "ښي لور ته واوسئ", hi: "दाहिनी ओर रहें", pa: "ਸੱਜੇ ਰਹੋ" },
  
  // Rules & Terms
  "learner's permit": { es: "permiso de aprendizaje", ps: "د زده کړې جواز", hi: "शिक्षार्थी परमिट", pa: "ਸਿੱਖਣ ਵਾਲਾ ਪਰਮਿਟ" },
  "driver's license": { es: "licencia de conducir", ps: "د موټر چلولو جواز", hi: "ड्राइविंग लाइसेंस", pa: "ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ" },
  "probationary license": { es: "licencia probatoria", ps: "ازمایښتي جواز", hi: "परिवीक्षाधीन लाइसेंस", pa: "ਪ੍ਰੋਬੇਸ਼ਨਰੀ ਲਾਇਸੈਂਸ" },
  "Real ID": { es: "Real ID", ps: "رییل آی ډي (Real ID)", hi: "रियल आईडी (Real ID)", pa: "ਰੀਅਲ ਆਈਡੀ (Real ID)" },
  "headlights": { es: "faros delanteros", ps: "د موټر مخکني څراغونه", hi: "हेडलाइट्स", pa: "ਹੈੱਡਲਾਈਟਾਂ" },
  "high beam": { es: "luces altas", ps: "لوړ څراغونه", hi: "हाई बीम", pa: "ਹਾਈ ਬੀਮ ਲਾਈਟਾਂ" },
  "low beam": { es: "luces bajas", ps: "ټیټ څراغونه", hi: "लो बीम", pa: "ਲੋਅ ਬੀਮ ਲਾਈਟਾਂ" },
  "school bus": { es: "autobús escolar", ps: "د ښوونځي بس", hi: "स्कूल बस", pa: "ਸਕੂਲ ਬੱਸ" },
  "blood alcohol concentration": { es: "concentración de alcohol en sangre (BAC)", ps: "په وینه کې د الکولو کچه (BAC)", hi: "रक्त अल्कोहल सांद्रता (BAC)", pa: "ਖੂਨ ਵਿੱਚ ਅਲਕੋਹਲ ਦੀ ਮਾਤਰਾ (BAC)" },
  "emergency vehicle": { es: "vehículo de emergencia", ps: "بیړنی موټر", hi: "आपातकालीन वाहन", pa: "ਐਮਰਜੈਂਸੀ ਵਾਹਨ" },
  "flashing red light": { es: "luz roja intermitente", ps: "رپېدونکی سور څراغ", hi: "लाल फ्लैशिंग लाइट", pa: "ਚਮਕਦੀ ਲਾਲ ਬੱਤੀ" },
  "flashing yellow light": { es: "luz amarilla intermitente", ps: "رپېدونکی ژېړ څراغ", hi: "पीली फ्लैशिंग लाइट", pa: "ਚਮਕਦੀ ਪੀਲੀ ਬੱਤੀ" },
  "right of way": { es: "derecho de paso", ps: "د لومړیتوب حق", hi: "पहले निकलने का अधिकार", pa: "ਰਸਤੇ ਦਾ ਅਧਿਕਾਰ" },
  "roundabout": { es: "rotonda", ps: "ګرد چکر", hi: "गोलचक्कर", pa: "ਗੋਲ ਚੱਕਰ" },
  "crosswalk": { es: "cruce peatonal", ps: "د پیاده لار", hi: "पैदल क्रॉसिंग", pa: "ਪੈਦਲ ਕ੍ਰਾਸਿੰਗ" },
  "pedestrian": { es: "peatón", ps: "پیاده تګ کوونکی", hi: "पैदल यात्री", pa: "ਪੈਦਲ ਯਾਤਰੀ" },
};

// Translates full question and answer sets cleanly
export function translateSentence(text: string, lang: Language): string {
  if (!text) return text;

  // Numbers & speeds
  const speedMatch = text.match(/(\d+)\s*mph/i);
  const mphReplacement = speedMatch ? {
    es: `${speedMatch[1]} mph`,
    ps: `${speedMatch[1]} مایل په ساعت کې`,
    hi: `${speedMatch[1]} मील प्रति घंटा`,
    pa: `${speedMatch[1]} ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ`,
  } : null;

  // Patterns
  if (/maximum speed limit.*rural interstate/i.test(text)) {
    return {
      es: "¿Cuál es el límite de velocidad máximo en autopistas interestatales rurales de Indiana?",
      ps: "په انډیانا کې په کلیوالي لویو لارو (rural interstate) کې د سرعت اعظمي حد څومره دی؟",
      hi: "इंडियाना में ग्रामीण इंटरस्टेट राजमार्गों पर अधिकतम गति सीमा क्या है?",
      pa: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਪੇਂਡੂ ਇੰਟਰਸਟੇਟ ਹਾਈਵੇਅ ਤੇ ਵੱਧ ਤੋਂ ਵੱਧ ਗਤੀ ਸੀਮਾ ਕੀ ਹੈ?",
    }[lang];
  }

  if (/speed limit in alleys/i.test(text)) {
    return {
      es: "¿Cuál es el límite de velocidad en callejones en Indiana?",
      ps: "په انډیانا کې په تنګو کوڅو (alleys) کې د سرعت حد څومره دی؟",
      hi: "इंडियाना में गलियों (alleys) में गति सीमा क्या है?",
      pa: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਗਲੀਆਂ ਵਿੱਚ ਸਪੀਡ ਸੀਮਾ ਕੀ ਹੈ?",
    }[lang];
  }

  if (/speed limit.*urban residential/i.test(text)) {
    return {
      es: "¿Cuál es el límite de velocidad en la mayoría de las áreas residenciales urbanas?",
      ps: "په ښاري استوګنیزو سیمو کې د موټر د سرعت حد څومره دی؟",
      hi: "अधिकांश शहरी आवासीय क्षेत्रों में गति सीमा क्या है?",
      pa: "ਸ਼ਹਿਰੀ ਰਿਹਾਇਸ਼ੀ ਖੇਤਰਾਂ ਵਿੱਚ ਸਪੀਡ ਸੀਮਾ ਕੀ ਹੈ?",
    }[lang];
  }

  if (/speed limit.*school bus/i.test(text)) {
    return {
      es: "¿Cuál es el límite de velocidad máximo para autobuses escolares?",
      ps: "د ښوونځي د بسونو لپاره د سرعت اعظمي حد څومره دی؟",
      hi: "स्कूल बसों के लिए अधिकतम गति सीमा क्या है?",
      pa: "ਸਕੂਲ ਬੱਸਾਂ ਲਈ ਵੱਧ ਤੋਂ ਵੱਧ ਗਤੀ ਸੀਮਾ ਕੀ ਹੈ?",
    }[lang];
  }

  if (/when must drivers use headlights/i.test(text)) {
    return {
      es: "¿Cuándo deben los conductores usar los faros delanteros?",
      ps: "چلوونکي کله باید د موټر څراغونه بل وساتي؟",
      hi: "चालकों को हेडलाइट्स का उपयोग कब करना चाहिए?",
      pa: "ਡਰਾਈਵਰਾਂ ਨੂੰ ਹੈੱਡਲਾਈਟਾਂ ਦੀ ਵਰਤੋਂ ਕਦੋਂ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ?",
    }[lang];
  }

  if (/dim.*headlight.*approaching.*500/i.test(text) || /lower headlight.*approaching/i.test(text)) {
    return {
      es: "¿A qué distancia debe cambiar las luces altas a bajas al acercarse a otro vehículo?",
      ps: "مخامخ راتلونکي موټر ته په کوم واټن کې باید لوړ څراغونه ټیټ کړئ؟",
      hi: "सामने से आने वाले वाहन के कितने पास आने पर हाई बीम को लो बीम करना चाहिए?",
      pa: "ਸਾਹਮਣਿਓਂ ਆ ਰਹੇ ਵਾਹਨ ਦੇ ਕਿੰਨੇ ਨੇੜੇ ਆਉਣ ਤੇ ਹਾਈ ਬੀਮ ਲਾਈਟਾਂ ਡਿਮ ਕਰਨੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ?",
    }[lang];
  }

  if (/yellow lane markings/i.test(text)) {
    return {
      es: "¿Qué separan las marcas amarillas en el pavimento?",
      ps: "د سړک ژېړې نښې څه جلا کوي؟",
      hi: "पीली लेन मार्किंग क्या अलग करती हैं?",
      pa: "ਪੀਲੀਆਂ ਲੇਨ ਮਾਰਕਿੰਗਜ਼ ਕੀ ਵੱਖ ਕਰਦੀਆਂ ਹਨ?",
    }[lang];
  }

  if (/white lane markings/i.test(text)) {
    return {
      es: "¿Qué separan las marcas blancas en el pavimento?",
      ps: "د سړک سپینې نښې څه جلا کوي؟",
      hi: "सफेद लेन मार्किंग क्या अलग करती हैं?",
      pa: "ਚਿੱਟੀਆਂ ਲੇਨ ਮਾਰਕਿੰਗਜ਼ ਕੀ ਵੱਖ ਕਰਦੀਆਂ ਹਨ?",
    }[lang];
  }

  if (/stop for a school bus/i.test(text)) {
    return {
      es: "¿Cuándo es obligatorio detenerse ante un autobús escolar?",
      ps: "تاسو کله باید د ښوونځي د بس لپاره په بشپړ ډول ودریږئ؟",
      hi: "स्कूल बस के लिए कब रुकना अनिवार्य है?",
      pa: "ਸਕੂਲ ਬੱਸ ਲਈ ਕਦੋਂ ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ?",
    }[lang];
  }

  if (/blood alcohol concentration|BAC/i.test(text)) {
    return {
      es: "¿Cuál es el límite legal de concentración de alcohol en sangre (BAC) en Indiana?",
      ps: "په انډیانا کې په وینه کې د الکولو قانوني کچه (BAC) څومره ده؟",
      hi: "इंडियाना में रक्त अल्कोहल सांद्रता (BAC) की कानूनी सीमा क्या है?",
      pa: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਖੂਨ ਵਿੱਚ ਅਲਕੋਹਲ (BAC) ਦੀ ਕਾਨੂੰਨੀ ਸੀਮਾ ਕੀ ਹੈ?",
    }[lang];
  }

  if (/seat belts/i.test(text)) {
    return {
      es: "¿Quiénes están obligados a usar cinturón de seguridad en Indiana?",
      ps: "په انډیانا کې څوک باید د سیټ بیلټ وتړي؟",
      hi: "इंडियाना में सीट बेल्ट पहनना किसके लिए अनिवार्य है?",
      pa: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਸੀਟ ਬੈਲਟ ਪਹਿਨਣਾ ਕਿਸ ਲਈ ਲਾਜ਼ਮੀ ਹੈ?",
    }[lang];
  }

  if (/child restraint system|child/i.test(text)) {
    return {
      es: "¿A qué edad los niños deben viajar en un sistema de retención infantil?",
      ps: "ماشومان په کوم عمر کې باید د ماشومانو په ځانګړې څوکۍ (child seat) کې کښېني؟",
      hi: "किस उम्र तक के बच्चों को बाल सुरक्षा सीट में बैठना आवश्यक है?",
      pa: "ਕਿਸ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਲਈ ਚਾਈਲਡ ਸੀਟ ਲਾਜ਼ਮੀ ਹੈ?",
    }[lang];
  }

  if (/fire hydrant/i.test(text)) {
    return {
      es: "¿A qué distancia mínima de un hidrante de incendios se permite estacionar?",
      ps: "د اور وژنې له نل (fire hydrant) څخه په څومره واټن کې پارکینګ منع دی؟",
      hi: "फायर हाइड्रेंट से कितनी दूरी पर पार्किंग की अनुमति है?",
      pa: "ਫਾਇਰ ਹਾਈਡ੍ਰੈਂਟ ਤੋਂ ਕਿੰਨੀ ਦੂਰੀ ਤੇ ਪਾਰਕਿੰਗ ਦੀ ਮਨਾਹੀ ਹੈ?",
    }[lang];
  }

  if (/hydroplaning/i.test(text)) {
    return {
      es: "¿Qué es el hidroplaneo (hydroplaning)?",
      ps: "هایډروپلاینینګ (Hydroplaning) څه شی دی؟",
      hi: "हाइड्रोप्लेनिंग (Hydroplaning) क्या है?",
      pa: "ਹਾਈਡ੍ਰੋਪਲੇਨਿੰਗ (Hydroplaning) ਕੀ ਹੈ?",
    }[lang];
  }

  if (/text while driving|telecommunications/i.test(text)) {
    return {
      es: "¿Es legal usar un teléfono o enviar mensajes al conducir en Indiana?",
      ps: "ایا د موټر چلولو پر مهال د ټیلیفون کارول یا پیغام لیکل قانوني دي؟",
      hi: "क्या गाड़ी चलाते समय फोन पर बात करना या टेक्स्ट करना कानूनी है?",
      pa: "ਕੀ ਗੱਡੀ ਚਲਾਉਂਦੇ ਸਮੇਂ ਫ਼ੋਨ ਵਰਤਣਾ ਜਾਂ ਮੈਸੇਜ ਕਰਨਾ ਕਾਨੂੰਨੀ ਹੈ?",
    }[lang];
  }

  if (/following distance/i.test(text)) {
    return {
      es: "¿Cuál es la distancia de seguimiento mínima recomendada?",
      ps: "د مخکني موټر تر شا د تعقیب لږ تر لږه فاصله څومره ده؟",
      hi: "आगे चल रहे वाहन से न्यूनतम कितनी दूरी रखनी चाहिए?",
      pa: "ਅੱਗੇ ਚੱਲ ਰਹੇ ਵਾਹਨ ਤੋਂ ਘੱਟੋ-ਘੱਟ ਕਿੰਨੀ ਦੂਰੀ ਰੱਖਣੀ ਚਾਹੀਦੀ ਹੈ?",
    }[lang];
  }

  if (/roundabout/i.test(text)) {
    return {
      es: "Al aproximarse a una rotonda, ¿quién tiene preferencia de paso?",
      ps: "ګرد چکر (roundabout) ته په نږدې کېدو، د تګ حق د چا دی؟",
      hi: "गोलचक्कर पर पहुँचने पर पहले निकलने का अधिकार किसका है?",
      pa: "ਗੋਲ ਚੱਕਰ ਤੇ ਪਹੁੰਚਣ ਵੇਲੇ ਰਸਤੇ ਦਾ ਅਧਿਕਾਰ ਕਿਸ ਕੋਲ ਹੁੰਦਾ ਹੈ?",
    }[lang];
  }

  if (/railroad crossing/i.test(text)) {
    return {
      es: "¿Qué vehículos deben detenerse siempre en los cruces de ferrocarril?",
      ps: "کوم موټر باید تل د ریل په پټلۍ ودریږي؟",
      hi: "किन वाहनों को रेलवे क्रॉसिंग पर हमेशा रुकना आवश्यक है?",
      pa: "ਕਿਹੜੇ ਵਾਹਨਾਂ ਨੂੰ ਰੇਲਵੇ ਕਰਾਸਿੰਗ ਤੇ ਹਮੇਸ਼ਾ ਰੁਕਣਾ ਚਾਹੀਦਾ ਹੈ?",
    }[lang];
  }

  // Common option phrases
  if (/^all of the above/i.test(text)) {
    return { es: "Todas las anteriores", ps: "پورته ټول سم دي", hi: "उपरोक्त सभी", pa: "ਉਪਰੋਕਤ ਸਾਰੇ" }[lang];
  }
  if (/^none of the above/i.test(text)) {
    return { es: "Ninguna de las anteriores", ps: "له پورته څخه هیڅ یو نه", hi: "इनमें से कोई नहीं", pa: "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕੋਈ ਨਹੀਂ" }[lang];
  }
  if (/^always/i.test(text)) {
    return { es: "Siempre", ps: "تل", hi: "हमेशा", pa: "ਹਮੇਸ਼ਾ" }[lang];
  }
  if (/^never/i.test(text)) {
    return { es: "Nunca", ps: "هیڅکله نه", hi: "कभी नहीं", pa: "ਕਦੇ ਨਹੀਂ" }[lang];
  }
  if (/^1 year/i.test(text)) {
    return { es: "1 año", ps: "۱ کال", hi: "1 वर्ष", pa: "1 ਸਾਲ" }[lang];
  }
  if (/^2 years/i.test(text)) {
    return { es: "2 años", ps: "۲ کاله", hi: "2 वर्ष", pa: "2 ਸਾਲ" }[lang];
  }
  if (/^3 years/i.test(text)) {
    return { es: "3 años", ps: "۳ کاله", hi: "3 वर्ष", pa: "3 ਸਾਲ" }[lang];
  }
  if (/^4 years/i.test(text)) {
    return { es: "4 años", ps: "۴ کاله", hi: "4 वर्ष", pa: "4 ਸਾਲ" }[lang];
  }
  if (/^6 years/i.test(text)) {
    return { es: "6 años", ps: "۶ کاله", hi: "6 वर्ष", pa: "6 ਸਾਲ" }[lang];
  }
  if (/^30 days/i.test(text)) {
    return { es: "30 días", ps: "۳۰ ورځې", hi: "30 दिन", pa: "30 ਦਿਨ" }[lang];
  }
  if (/^60 days/i.test(text)) {
    return { es: "60 días", ps: "۶۰ ورځې", hi: "60 दिन", pa: "60 ਦਿਨ" }[lang];
  }
  if (/^90 days/i.test(text)) {
    return { es: "90 días", ps: "۹۰ ورځې", hi: "90 दिन", pa: "90 ਦਿਨ" }[lang];
  }
  if (/^180 days/i.test(text)) {
    return { es: "180 días", ps: "۱۸۰ ورځې", hi: "180 दिन", pa: "180 ਦਿਨ" }[lang];
  }
  if (/^55 mph/i.test(text)) {
    return { es: "55 mph", ps: "۵۵ مایل په ساعت کې", hi: "55 मील प्रति घंटा", pa: "55 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ" }[lang];
  }
  if (/^60 mph/i.test(text)) {
    return { es: "60 mph", ps: "۶۰ مایل په ساعت کې", hi: "60 मील प्रति घंटा", pa: "60 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ" }[lang];
  }
  if (/^65 mph/i.test(text)) {
    return { es: "65 mph", ps: "۶۵ مایل په ساعت کې", hi: "65 मील प्रति घंटा", pa: "65 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ" }[lang];
  }
  if (/^70 mph/i.test(text)) {
    return { es: "70 mph", ps: "۷۰ مایل په ساعت کې", hi: "70 मील प्रति घंटा", pa: "70 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ" }[lang];
  }
  if (/^15 mph/i.test(text)) {
    return { es: "15 mph", ps: "۱۵ مایل په ساعت کې", hi: "15 मील प्रति घंटा", pa: "15 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ" }[lang];
  }
  if (/^20 mph/i.test(text)) {
    return { es: "20 mph", ps: "۲۰ مایل په ساعت کې", hi: "20 मील प्रति घंटा", pa: "20 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ" }[lang];
  }
  if (/^25 mph/i.test(text)) {
    return { es: "25 mph", ps: "۲۵ مایل په ساعت کې", hi: "25 मील प्रति घंटा", pa: "25 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ" }[lang];
  }
  if (/^30 mph/i.test(text)) {
    return { es: "30 mph", ps: "۳۰ مایل په ساعت کې", hi: "30 मील प्रति घंटा", pa: "30 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ" }[lang];
  }
  if (/^35 mph/i.test(text)) {
    return { es: "35 mph", ps: "۳۵ مایل په ساعت کې", hi: "35 मील प्रति घंटा", pa: "35 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ" }[lang];
  }
  if (/^50 feet/i.test(text)) {
    return { es: "50 pies", ps: "۵۰ فوټه", hi: "50 फीट", pa: "50 ਫੁੱਟ" }[lang];
  }
  if (/^100 feet/i.test(text)) {
    return { es: "100 pies", ps: "۱۰۰ فوټه", hi: "100 फीट", pa: "100 ਫੁੱਟ" }[lang];
  }
  if (/^200 feet/i.test(text)) {
    return { es: "200 pies", ps: "۲۰۰ فوټه", hi: "200 फीट", pa: "200 ਫੁੱਟ" }[lang];
  }
  if (/^500 feet/i.test(text)) {
    return { es: "500 pies", ps: "۵۰۰ فوټه", hi: "500 फीट", pa: "500 ਫੁੱਟ" }[lang];
  }

  // If question prefix has What does a ... sign indicate
  const signQuestionMatch = text.match(/What does a ['"]?([^'"]+)['"]? sign (indicate|mean|warn)/i);
  if (signQuestionMatch) {
    const signName = signQuestionMatch[1];
    return {
      es: `¿Qué indica la señal de "${signName}"?`,
      ps: `د "${signName}" نښه څه ښيي او څه معنی لري؟`,
      hi: `"${signName}" का संकेत क्या दर्शाता है?`,
      pa: `"${signName}" ਦਾ ਚਿੰਨ੍ਹ ਕੀ ਦਰਸਾਉਂਦਾ ਹੈ?`,
    }[lang];
  }

  // General fallback translation with clear localized prompt
  if (lang === 'es') {
    return `[Español] ${text}`;
  } else if (lang === 'ps') {
    return `[پښتو] ${text}`;
  } else if (lang === 'hi') {
    return `[हिन्दी] ${text}`;
  } else {
    return `[ਪੰਜਾਬੀ] ${text}`;
  }
}

// Guarantees a full TranslationItem is ALWAYS available for any question
export function getEnsuredTranslation(
  question: string,
  options: string[],
  explanation: string,
  lang: Language,
  existingTranslation?: TranslationItem
): TranslationItem {
  if (existingTranslation && existingTranslation.question && existingTranslation.options && existingTranslation.options.length === options.length) {
    return existingTranslation;
  }

  return {
    question: translateSentence(question, lang),
    options: options.map((opt) => translateSentence(opt, lang)),
    explanation: translateSentence(explanation, lang),
  };
}
