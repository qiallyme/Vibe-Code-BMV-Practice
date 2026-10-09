import { GeneralQuestion } from '../types';
import { CORE_RULES_QUESTIONS } from './rulesData';

// We can export the full pool of questions.
// The core curated set has full multilingual translations, and we provide fallback glossary translation helper for others.
export const ALL_RULES_QUESTIONS: GeneralQuestion[] = [
  ...CORE_RULES_QUESTIONS,
  {
    id: '11',
    category: 'Road Signs',
    question: 'What do yellow or fluorescent yellow-green traffic signs indicate?',
    options: ['Stop required', 'Regulations to obey', 'Road conditions and hazards ahead', 'Permitted movements'],
    correctAnswer: 2,
    explanation: 'Yellow or fluorescent yellow-green signs prepare drivers for specific road conditions and hazards ahead.',
    translations: {
      es: {
        question: '¿Qué indican las señales de tráfico amarillas o verde-amarillo fluorescentes?',
        options: ['Alto obligatorio', 'Regulaciones a obedecer', 'Condiciones de la carretera y peligros adelante', 'Movimientos permitidos'],
        explanation: 'Las señales amarillas o amarillo-verdosas preparan a los conductores para peligros y condiciones del camino.',
      },
      ps: {
        question: 'ژېړ یا فلوروسینټ ژېړ-شین ترافیکي نښانونه څه ښيي؟',
        options: ['درېدل فرض دي', 'هغه اصول چې باید پرې عمل وشي', 'مخکې د سړک حالات او خطرونه', 'مجاز حرکتونه'],
        explanation: 'ژېړ رنګ لرونکې نښې چلوونکو ته د راتلونکو خطرونو او سړک د حالاتو خبرداری ورکوي.',
      },
      pa: {
        question: 'ਪੀਲੇ ਜਾਂ ਚਮਕਦਾਰ ਪੀਲੇ-ਹਰੇ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕੀ ਦਰਸਾਉਂਦੇ ਹਨ?',
        options: ['ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ', 'ਨਿਯਮ ਜਿਨ੍ਹਾਂ ਦੀ ਪਾਲਣਾ ਕਰਨੀ ਹੈ', 'ਅੱਗੇ ਸੜਕ ਦੀਆਂ ਹਾਲਤਾਂ ਅਤੇ ਖ਼ਤਰੇ', 'ਇਜਾਜ਼ਤ ਦਿੱਤੀਆਂ ਹਰਕਤਾਂ'],
        explanation: 'ਪੀਲੇ ਚਿੰਨ੍ਹ ਡਰਾਈਵਰਾਂ ਨੂੰ ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਖ਼ਤਰਿਆਂ ਬਾਰੇ ਸੁਚੇਤ ਕਰਦੇ ਹਨ।',
      },
      hi: {
        question: 'पीले या फ्लोरोसेंट पीले-हरे ट्रैफिक संकेत क्या दर्शाते हैं?',
        options: ['रुकना अनिवार्य है', 'नियम जिनका पालन करना है', 'आगे सड़क की स्थिति और खतरे', 'अनुमति प्राप्त गतिविधियाँ'],
        explanation: 'पीले रंग के संकेत आगे आने वाले खतरों और सड़क की स्थिति की चेतावनी देते हैं।',
      },
    },
  },
  {
    id: '12',
    category: 'Road Signs',
    question: 'What do white traffic signs display?',
    options: ['Warning signs', 'Traffic regulations and helpful information', 'Recreational areas', 'Road services'],
    correctAnswer: 1,
    explanation: 'White traffic signs display traffic regulations, such as speed limits, that drivers must obey, as well as helpful information.',
    translations: {
      es: {
        question: '¿Qué muestran las señales de tráfico blancas?',
        options: ['Señales de advertencia', 'Normas de tráfico e información útil', 'Áreas recreativas', 'Servicios viales'],
        explanation: 'Las señales blancas muestran reglamentos de tráfico como límites de velocidad que se deben obedecer.',
      },
      ps: {
        question: 'سپین ترافیکي نښانونه څه ښيي؟',
        options: ['د خبرداري نښې', 'ترافیکي مقررات او ګټور معلومات', 'تفریحي سیمې', 'د سړک خدمتونه'],
        explanation: 'سپین نښانونه ترافیکي قوانین او مقررات ښيي چې باید عمل پرې وشي.',
      },
      pa: {
        question: 'ਚਿੱਟੇ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕੀ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰਦੇ ਹਨ?',
        options: ['ਚੇਤਾਵਨੀ ਚਿੰਨ੍ਹ', 'ਟ੍ਰੈਫਿਕ ਨਿਯਮ ਅਤੇ ਮਦਦਗਾਰ ਜਾਣਕਾਰੀ', 'ਮਨੋਰੰਜਨ ਖੇਤਰ', 'ਸੜਕ ਸੇਵਾਵਾਂ'],
        explanation: 'ਚਿੱਟੇ ਚਿੰਨ੍ਹ ਟ੍ਰੈਫਿਕ ਨਿਯਮਾਂ (ਜਿਵੇਂ ਕਿ ਸਪੀਡ ਸੀਮਾ) ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ।',
      },
      hi: {
        question: 'सफेद ट्रैफिक संकेत क्या प्रदर्शित करते हैं?',
        options: ['चेतावनी संकेत', 'यातायात नियम और उपयोगी जानकारी', 'मनोरंजन क्षेत्र', 'सड़क सेवाएं'],
        explanation: 'सफेद रंग के संकेत यातायात नियमों जैसे गति सीमा आदि को प्रदर्शित करते हैं।',
      },
    },
  },
  {
    id: '13',
    category: 'Road Signs',
    question: 'What do orange traffic signs warn drivers of?',
    options: ['Permanent road conditions', 'Temporary traffic conditions and highway work zones', 'School zones', 'Railroad crossings'],
    correctAnswer: 1,
    explanation: 'Orange traffic signs warn drivers of temporary traffic conditions, often used for highway construction and maintenance projects.',
    translations: {
      es: {
        question: '¿De qué advierten las señales de tráfico de color naranja?',
        options: ['Condiciones permanentes de la carretera', 'Condiciones temporales de tráfico y zonas de obras en autopistas', 'Zonas escolares', 'Cruces de ferrocarril'],
        explanation: 'Las señales naranjas advierten sobre condiciones temporales por construcción o mantenimiento vial.',
      },
      ps: {
        question: 'نارنجي ترافیکي نښانونه چلوونکو ته د څه په اړه خبرداری ورکوي؟',
        options: ['دایمي حالات', 'موقتي ترافیکي حالات او د سرک د جوړولو کاري سیمې', 'د ښوونځي زونونه', 'د ریل پټلۍ'],
        explanation: 'نارنجي نښانونه د سړک د کار او موقتي وضعیت خبرداری ورکوي.',
      },
      pa: {
        question: 'ਸੰਤਰੀ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਡਰਾਈਵਰਾਂ ਨੂੰ ਕਿਸ ਚੀਜ਼ ਦੀ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ?',
        options: ['ਸਥਾਈ ਸੜਕ ਦੀਆਂ ਹਾਲਤਾਂ', 'ਆਰਜ਼ੀ ਆਵਾਜਾਈ ਦੀਆਂ ਸਥਿਤੀਆਂ ਅਤੇ ਹਾਈਵੇਅ ਨਿਰਮਾਣ ਖੇਤਰ', 'ਸਕੂਲ ਜ਼ੋਨ', 'ਰੇਲਵੇ ਕਰਾਸਿੰਗ'],
        explanation: 'ਸੰਤਰੀ ਚਿੰਨ੍ਹ ਨਿਰਮਾਣ ਅਤੇ ਮੁਰੰਮਤ ਦੇ ਆਰਜ਼ੀ ਕੰਮਾਂ ਬਾਰੇ ਸੁਚੇਤ ਕਰਦੇ ਹਨ।',
      },
      hi: {
        question: 'नारंगी ट्रैफिक संकेत चालकों को किस बात की चेतावनी देते हैं?',
        options: ['स्थायी सड़क स्थितियां', 'अस्थायी यातायात स्थितियां और राजमार्ग निर्माण क्षेत्र', 'स्कूल क्षेत्र', 'रेलवे क्रॉसिंग'],
        explanation: 'नारंगी रंग के संकेत सड़क निर्माण व मरम्मत जैसी अस्थायी स्थितियों की चेतावनी देते हैं।',
      },
    },
  },
  {
    id: '14',
    category: 'Road Signs',
    question: 'What do green traffic signs indicate?',
    options: ['Stop required', 'Warning of hazards', 'Permitted movements and directions or guidance', 'Road services'],
    correctAnswer: 2,
    explanation: 'Green traffic signs indicate permitted movements and directions or guidance, such as highway entrances and exits.',
    translations: {
      es: {
        question: '¿Qué indican las señales de tráfico verdes?',
        options: ['Alto obligatorio', 'Advertencia de peligros', 'Movimientos permitidos y direcciones o guía', 'Servicios viales'],
        explanation: 'Las señales verdes indican destinos, direcciones y salidas de autopistas.',
      },
      ps: {
        question: 'شنه ترافیکي نښانونه څه ښيي؟',
        options: ['درېدل لازمي دي', 'د خطرونو خبرداری', 'مجاز حرکتونه او لارښوونې لکه د لویو لارو وتلو او ننوتلو لارې', 'د سړک خدمتونه'],
        explanation: 'شنه نښانونه د لارښوونې، ښارونو او د وتلو لارو واټن ښيي.',
      },
      pa: {
        question: 'ਹਰੇ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕੀ ਦਰਸਾਉਂਦੇ ਹਨ?',
        options: ['ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ', 'ਖ਼ਤਰਿਆਂ ਦੀ ਚੇਤਾਵਨੀ', 'ਇਜਾਜ਼ਤ ਦਿੱਤੀਆਂ ਹਰਕਤਾਂ ਅਤੇ ਦਿਸ਼ਾਵਾਂ ਜਾਂ ਮਾਰਗਦਰਸ਼ਨ', 'ਸੜਕ ਸੇਵਾਵਾਂ'],
        explanation: 'ਹਰੇ ਚਿੰਨ੍ਹ ਮੰਜ਼ਿਲ, ਦਿਸ਼ਾ ਅਤੇ ਐਗਜ਼ਿਟ ਰੈਂਪਾਂ ਦੀ ਜਾਣਕਾਰੀ ਦਿੰਦੇ ਹਨ।',
      },
      hi: {
        question: 'हरे ट्रैफिक संकेत क्या दर्शाते हैं?',
        options: ['रुकना अनिवार्य है', 'खतरों की चेतावनी', 'अनुमति प्राप्त गतिविधियाँ और दिशाएं या मार्गदर्शन', 'सड़क सेवाएं'],
        explanation: 'हरे रंग के संकेत दिशा, गंतव्य और निकास मार्ग का मार्गदर्शन करते हैं।',
      },
    },
  },
  {
    id: '48',
    category: 'Passing Rules',
    question: 'When is it illegal to pass other vehicles?',
    options: [
      'When a solid yellow line is on your side',
      'When a pennant-shaped "No Passing Zone" sign is posted',
      'Within 100 feet of an intersection or railroad crossing',
      'All of the above',
    ],
    correctAnswer: 3,
    explanation: 'It is dangerous and illegal to pass in all these situations: solid yellow line on your side, no passing signs, and within 100 feet of intersections or crossings.',
    translations: {
      es: {
        question: '¿Cuándo es ilegal rebasar a otros vehículos?',
        options: [
          'Cuando hay una línea amarilla continua en su lado',
          'Cuando hay una señal de banderín de "No Passing Zone"',
          'A menos de 100 pies de una intersección o cruce de ferrocarril',
          'Todas las anteriores',
        ],
        explanation: 'Es ilegal rebasar con línea amarilla sólida, señal de no rebasar y a menos de 100 pies de intersecciones.',
      },
      ps: {
        question: 'له نورو موټرو څخه مخکې کیدل (سبقت) کله غیرقانوني دي؟',
        options: [
          'کله چې ستاسو په خوا ژېړه پوره (ممتد) کرښه وي',
          'کله چې د بیرغ بڼه "No Passing Zone" نښه لګیدلې وي',
          'له څلورلارې یا د ریل له پټلۍ څخه په ۱۰۰ فوټۍ کې',
          'پورته ټول صحیح دي',
        ],
        explanation: 'په دې ټولو حالتونو کې له بل موټر څخه مخکې کېدل منع او غیرقانوني دي.',
      },
      pa: {
        question: 'ਦੂਜੇ ਵਾਹਨਾਂ ਨੂੰ ਓਵਰਟੇਕ ਕਰਨਾ ਕਦੋਂ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ?',
        options: [
          'ਜਦੋਂ ਤੁਹਾਡੇ ਪਾਸੇ ਇੱਕ ਠੋਸ (solid) ਪੀਲੀ ਲਾਈਨ ਹੋਵੇ',
          'ਜਦੋਂ "No Passing Zone" ਦਾ ਬੋਰਡ ਲੱਗਿਆ ਹੋਵੇ',
          'ਚੌਰਾਹੇ ਜਾਂ ਰੇਲਵੇ ਕਰਾਸਿੰਗ ਦੇ 100 ਫੁੱਟ ਦੇ ਅੰਦਰ',
          'ਉਪਰੋਕਤ ਸਾਰੇ',
        ],
        explanation: 'ਇਹਨਾਂ ਸਾਰੀਆਂ ਸਥਿਤੀਆਂ ਵਿੱਚ ਓਵਰਟੇਕ ਕਰਨਾ ਖਤਰਨਾਕ ਅਤੇ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ।',
      },
      hi: {
        question: 'अन्य वाहनों को ओवरटेक करना कब गैरकानूनी है?',
        options: [
          'जब आपकी तरफ ठोस (solid) पीली रेखा हो',
          'जब "No Passing Zone" का संकेत लगा हो',
          'चौराहे या रेलवे क्रॉसिंग के 100 फीट के भीतर',
          'उपरोक्त सभी',
        ],
        explanation: 'इन सभी स्थितियों में ओवरटेक करना अवैध और खतरनाक है।',
      },
    },
  },
  {
    id: '54',
    category: 'Roundabouts',
    question: 'When approaching a roundabout, who has the right of way?',
    options: [
      'Incoming traffic entering the circle',
      'Circulating traffic already inside the roundabout',
      'The largest vehicle',
      'The first vehicle that honks',
    ],
    correctAnswer: 1,
    explanation: 'When approaching a roundabout, incoming traffic must always yield the right-of-way to circulating traffic already in the circle.',
    translations: {
      es: {
        question: 'Al acercarse a una rotonda, ¿quién tiene el derecho de paso?',
        options: [
          'El tráfico que ingresa a la rotonda',
          'El tráfico que ya circula dentro de la rotonda',
          'El vehículo más grande',
          'El primer vehículo que toque la bocina',
        ],
        explanation: 'Al ingresar a una rotonda, siempre debe ceder el paso a los vehículos que ya están circulando adentro.',
      },
      ps: {
        question: 'ګرد چکر (roundabout) ته په نږدې کیدو، د تګ حق (Right of way) د چا دی؟',
        options: [
          'هغه ترافیک چې چکر ته ننوځي',
          'هغه ترافیک چې لا دمخه د ګرد چکر په داخل کې څرخي',
          'لوی موټر',
          'هغه موټر چې لومړی هارن وکړي',
        ],
        explanation: 'هغه موټر چې په ګرد چکر کې دننه دي تل لومړیتوب لري؛ ننووتونکي موټر باید هغوی ته لاره ورکړي.',
      },
      pa: {
        question: 'ਗੋਲ ਚੱਕਰ (Roundabout) ਤੇ ਪਹੁੰਚਣ ਵੇਲੇ, ਪਹਿਲ ਦਾ ਅਧਿਕਾਰ ਕਿਸ ਕੋਲ ਹੁੰਦਾ ਹੈ?',
        options: [
          'ਚੱਕਰ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਵਾਲਾ ਟ੍ਰੈਫਿਕ',
          'ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਗੋਲ ਚੱਕਰ ਵਿੱਚ ਘੁੰਮ ਰਿਹਾ ਟ੍ਰੈਫਿਕ',
          'ਸਭ ਤੋਂ ਵੱਡਾ ਵਾਹਨ',
          'ਪਹਿਲਾਂ ਹਾਰਨ ਵਜਾਉਣ ਵਾਲਾ ਵਾਹਨ',
        ],
        explanation: 'ਗੋਲ ਚੱਕਰ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਵਾਲੇ ਵਾਹਨਾਂ ਨੂੰ ਅੰਦਰ ਘੁੰਮ ਰਹੇ ਟ੍ਰੈਫਿਕ ਨੂੰ ਰਸਤਾ ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ।',
      },
      hi: {
        question: 'गोलचक्कर (Roundabout) के पास पहुंचने पर, पहले निकलने का अधिकार किसका होता है?',
        options: [
          'चक्कर में प्रवेश करने वाला यातायात',
          'पहले से ही गोलचक्कर के अंदर घूम रहा यातायात',
          'सबसे बड़ा वाहन',
          'पहले हॉर्न बजाने वाला वाहन',
        ],
        explanation: 'गोलचक्कर में पहले से मौजूद वाहनों को प्राथमिकता होती है, प्रवेश करने वालों को रास्ता देना चाहिए।',
      },
    },
  },
  {
    id: '56',
    category: 'Following Distance',
    question: 'What is the recommended minimum following distance under good driving conditions?',
    options: ['1 second', '2 to 3 seconds', '5 seconds', '7 seconds'],
    correctAnswer: 1,
    explanation: 'A good rule for drivers to follow is to stay at least two to three seconds behind the vehicle ahead under good conditions.',
    translations: {
      es: {
        question: '¿Cuál es la distancia de seguimiento mínima recomendada en buenas condiciones de conducción?',
        options: ['1 segundo', '2 a 3 segundos', '5 segundos', '7 segundos'],
        explanation: 'Se recomienda mantener al menos dos a tres segundos de distancia detrás del vehículo que va adelante.',
      },
      ps: {
        question: 'په ښو شرایطو کې د مخکني موټر تر شا د تعقیب لږ تر لږه سپارښتنه شوې فاصله څومره ده؟',
        options: ['۱ ثانیه', '۲ تر ۳ ثانیې', '۵ ثانیې', '۷ ثانیې'],
        explanation: 'چلوونکي باید لږ تر لږه ۲ تر ۳ ثانیې له مخکني موټر شاته واټن وساتي.',
      },
      pa: {
        question: 'ਚੰਗੀਆਂ ਹਾਲਤਾਂ ਵਿੱਚ ਅੱਗੇ ਵਾਲੇ ਵਾਹਨ ਤੋਂ ਘੱਟੋ-ਘੱਟ ਕਿੰਨੀ ਦੂਰੀ (Following distance) ਰੱਖਣ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ?',
        options: ['1 ਸਕਿੰਟ', '2 ਤੋਂ 3 ਸਕਿੰਟ', '5 ਸਕਿੰਟ', '7 ਸਕਿੰਟ'],
        explanation: 'ਆਮ ਹਾਲਤਾਂ ਵਿੱਚ ਅੱਗੇ ਚੱਲ ਰਹੇ ਵਾਹਨ ਤੋਂ ਘੱਟੋ-ਘੱਟ 2 ਤੋਂ 3 ਸਕਿੰਟਾਂ ਦੀ ਦੂਰੀ ਬਣਾਈ ਰੱਖੋ।',
      },
      hi: {
        question: 'अनुकूल परिस्थितियों में आगे वाले वाहन से न्यूनतम कितनी दूरी (Following distance) रखने की सिफारिश की जाती है?',
        options: ['1 सेकंड', '2 से 3 सेकंड', '5 सेकंड', '7 सेकंड'],
        explanation: 'आगे वाले वाहन से कम से कम 2 से 3 सेकंड की सुरक्षित दूरी रखनी चाहिए।',
      },
    },
  },
  {
    id: '78',
    category: 'Distracted Driving',
    question: 'Is it legal to use a handheld telecommunications device or text while driving in Indiana?',
    options: [
      'Yes, on highways only',
      'No, Indiana law prohibits holding a telecommunications device while driving unless hands-free or calling 911 for emergency',
      'Yes, when stopped at a red light',
      'Only if you are over 25 years old',
    ],
    correctAnswer: 1,
    explanation: 'Holding a mobile device while driving is illegal in Indiana. Only hands-free mode or bona fide 911 emergency calls are permitted.',
    translations: {
      es: {
        question: '¿Es legal usar un dispositivo de telecomunicaciones portátil o enviar mensajes de texto mientras conduce en Indiana?',
        options: [
          'Sí, solo en autopistas',
          'No, la ley de Indiana prohíbe sostener un dispositivo mientras conduce, a menos que sea manos libres o llame al 911',
          'Sí, al estar detenido en una luz roja',
          'Solo si tiene más de 25 años',
        ],
        explanation: 'En Indiana está prohibido sostener un teléfono mientras conduce, salvo con manos libres o llamadas de emergencia al 911.',
      },
      ps: {
        question: 'ایا په انډیانا کې د موټر چلولو پرمهال په لاس کې د تلیفون نیول یا پیغام (text) لیکل قانوني دي؟',
        options: [
          'هو، یوازې په لویو لارو',
          'نه، د انډیانا قانون د موټر چلولو پرمهال په لاس کې د ټیلیفون نیول منع کوي مګر دا چې hands-free وي یا 911 ته بیړنۍ اړیکه وي',
          'هو، کله چې په سور څراغ ولاړ یاست',
          'یوازې که له ۲۵ کالو پورته یاست',
        ],
        explanation: 'د موټر چلولو په وخت کې په لاس کې د موبایل نیول په انډیانا کې منع دي، پرته له هینډز-فري یا د 911 اړیکې.',
      },
      pa: {
        question: 'ਕੀ ਇੰਡੀਆਨਾ ਵਿੱਚ ਗੱਡੀ ਚਲਾਉਂਦੇ ਸਮੇਂ ਹੱਥ ਵਿੱਚ ਫ਼ੋਨ ਫੜਨਾ ਜਾਂ ਮੈਸੇਜ ਕਰਨਾ ਕਾਨੂੰਨੀ ਹੈ?',
        options: [
          'ਹਾਂ, ਸਿਰਫ਼ ਹਾਈਵੇਅ ਤੇ',
          'ਨਹੀਂ, ਇੰਡੀਆਨਾ ਕਾਨੂੰਨ ਗੱਡੀ ਚਲਾਉਂਦੇ ਸਮੇਂ ਹੱਥ ਵਿੱਚ ਫ਼ੋਨ ਫੜਨ ਦੀ ਮਨਾਹੀ ਕਰਦਾ ਹੈ ਸਿਵਾਏ ਹੈਂਡਸ-ਫ੍ਰੀ ਜਾਂ 911 ਐਮਰਜੈਂਸੀ ਕਾਲ ਦੇ',
          'ਹਾਂ, ਲਾਲ ਬੱਤੀ ਤੇ ਰੁਕੇ ਹੋਣ ਵੇਲੇ',
          'ਸਿਰਫ਼ ਤਾਂ ਜੇਕਰ ਤੁਹਾਡੀ ਉਮਰ 25 ਸਾਲ ਤੋਂ ਵੱਧ ਹੈ',
        ],
        explanation: 'ਗੱਡੀ ਚਲਾਉਂਦੇ ਸਮੇਂ ਫ਼ੋਨ ਹੱਥ ਵਿੱਚ ਫੜਨਾ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ। ਸਿਰਫ਼ ਹੈਂਡਸ-ਫ੍ਰੀ ਦੀ ਇਜਾਜ਼ਤ ਹੈ।',
      },
      hi: {
        question: 'क्या इंडियाना में गाड़ी चलाते समय हाथ में फोन पकड़ना या टेक्स्ट करना कानूनी है?',
        options: [
          'हाँ, केवल राजमार्गों पर',
          'नहीं, इंडियाना कानून गाड़ी चलाते समय फोन हाथ में पकड़ने पर रोक लगाता है, जब तक कि हैंड्स-फ्री न हो या 911 आपातकालीन कॉल न हो',
          'हाँ, जब लाल बत्ती पर रुके हों',
          'केवल यदि आपकी आयु 25 वर्ष से अधिक हो',
        ],
        explanation: 'गाड़ी चलाते समय हाथ में मोबाइल फोन पकड़ना गैरकानूनी है। केवल हैंड्स-फ्री या आपात स्थिति में 911 की अनुमति है।',
      },
    },
  },
  {
    id: '115',
    category: 'Adverse Conditions',
    question: 'What is hydroplaning?',
    options: [
      'Washing your vehicle with high-pressure water',
      'When tires lose contact with the road surface due to a layer of water, reducing control',
      'Driving across a shallow river bed',
      'Brake failure caused by cold weather',
    ],
    correctAnswer: 1,
    explanation: 'Hydroplaning occurs when tires ride on a thin film of water rather than the pavement surface, resulting in loss of braking and steering.',
    translations: {
      es: {
        question: '¿Qué es el hidroplaneo (hydroplaning)?',
        options: [
          'Lavar su vehículo con agua a alta presión',
          'Cuando los neumáticos pierden contacto con la carretera debido a una capa de agua, reduciendo el control',
          'Conducir a través del lecho de un río poco profundo',
          'Fallo de frenos causado por el clima frío',
        ],
        explanation: 'El hidroplaneo ocurre cuando las llantas flotan sobre una película de agua perdiendo el agarre con el asfalto.',
      },
      ps: {
        question: 'هایډروپلاینینګ (Hydroplaning) څه شی دی؟',
        options: [
          'په لوړ فشار سره د موټر مینځل',
          'کله چې د اوبو د پتې طبقې له امله د موټر ټایرونه له سړک سره تماس له لاسه ورکړي او کنټرول ختم شي',
          'له سیند څخه د موټر تېرول',
          'د سړې هوا له امله د بریک خرابېدل',
        ],
        explanation: 'هایډروپلاینینګ هغه حالت دی چې د باران د اوبو د طبقې له امله ټایرونه له ځمکې پورته شي او بریک یا سټیرنګ کار نه کوي.',
      },
      pa: {
        question: 'ਹਾਈਡ੍ਰੋਪਲੇਨਿੰਗ (Hydroplaning) ਕੀ ਹੁੰਦਾ ਹੈ?',
        options: [
          'ਤੇਜ਼ ਪਾਣੀ ਨਾਲ ਕਾਰ ਧੋਣਾ',
          'ਜਦੋਂ ਪਾਣੀ ਦੀ ਪਰਤ ਕਾਰਨ ਟਾਇਰ ਸੜਕ ਨਾਲ ਸੰਪਰਕ ਗੁਆ ਬੈਠਦੇ ਹਨ ਅਤੇ ਕੰਟਰੋਲ ਖਤਮ ਹੋ ਜਾਂਦਾ ਹੈ',
          'ਨਦੀ ਵਿੱਚੋਂ ਗੱਡੀ ਕੱਢਣਾ',
          'ਠੰਢ ਕਾਰਨ ਬ੍ਰੇਕ ਫੇਲ੍ਹ ਹੋਣਾ',
        ],
        explanation: 'ਜਦੋਂ ਟਾਇਰ ਸੜਕ ਦੀ ਬਜਾਏ ਪਾਣੀ ਦੀ ਪਰਤ ਉੱਤੇ ਤੈਰਨ ਲੱਗਦੇ ਹਨ ਅਤੇ ਕੰਟਰੋਲ ਖਤਮ ਹੋ ਜਾਂਦਾ ਹੈ, ਉਸਨੂੰ ਹਾਈਡ੍ਰੋਪਲੇਨਿੰਗ ਕਹਿੰਦੇ ਹਨ।',
      },
      hi: {
        question: 'हाइड्रोप्लेनिंग (Hydroplaning) क्या है?',
        options: [
          'वाहन को तेज पानी से धोना',
          'जब पानी की परत के कारण टायर सड़क से संपर्क खो देते हैं और नियंत्रण समाप्त हो जाता है',
          'उथली नदी में गाड़ी चलाना',
          'ठंड के मौसम में ब्रेक फेल होना',
        ],
        explanation: 'जब सड़क पर पानी के कारण टायर सड़क से फिसलकर पानी की सतह पर तैरने लगते हैं, जिससे नियंत्रण खत्म हो जाता है।',
      },
    },
  },
  {
    id: '134',
    category: 'Pedestrian Safety',
    question: 'Who has the right of way at a crosswalk or intersection?',
    options: [
      'The fastest vehicle approaching',
      'Motorists always have priority over people walking',
      'Pedestrians always have the right of way in crosswalks',
      'Cyclists only',
    ],
    correctAnswer: 2,
    explanation: 'Drivers must always yield the right-of-way to pedestrians crossing within any marked or unmarked crosswalk.',
    translations: {
      es: {
        question: '¿Quién tiene el derecho de paso en un cruce peatonal o intersección?',
        options: [
          'El vehículo más rápido que se aproxime',
          'Los conductores siempre tienen prioridad sobre los peatones',
          'Los peatones siempre tienen el derecho de paso en los cruces peatonales',
          'Solo los ciclistas',
        ],
        explanation: 'Los conductores siempre deben ceder el paso a los peatones en cualquier cruce peatonal.',
      },
      ps: {
        question: 'د پیاده لارې (crosswalk) یا څلورلارې په سر د تګ لومړیتوب (right of way) د چا دی؟',
        options: [
          'تر ټولو چټک موټر',
          'چلوونکي تل په پیاده خلکو لومړیتوب لري',
          'پیاده خلک تل د پیاده لارو (crosswalks) په سر د تګ لومړیتوب لري',
          'یوازې بایسکل چلوونکي',
        ],
        explanation: 'چلوونکي باید تل په نښه شوي او نا نښه شوي پیاده لارو کې پیاده روانو کسانو ته لومړیتوب ورکړي.',
      },
      pa: {
        question: 'ਪੈਦਲ ਕ੍ਰਾਸਿੰਗ (crosswalk) ਜਾਂ ਚੌਰਾਹੇ ਤੇ ਰਸਤੇ ਦਾ ਅਧਿਕਾਰ (Right of way) ਕਿਸ ਕੋਲ ਹੁੰਦਾ ਹੈ?',
        options: [
          'ਸਭ ਤੋਂ ਤੇਜ਼ ਆਉਣ ਵਾਲਾ ਵਾਹਨ',
          'ਡਰਾਈਵਰਾਂ ਨੂੰ ਹਮੇਸ਼ਾ ਪੈਦਲ ਯਾਤਰੀਆਂ ਤੇ ਪਹਿਲ ਹੁੰਦੀ ਹੈ',
          'ਪੈਦਲ ਚੱਲਣ ਵਾਲਿਆਂ ਨੂੰ ਹਮੇਸ਼ਾ ਕ੍ਰਾਸਿੰਗ ਤੇ ਰਸਤੇ ਦਾ ਅਧਿਕਾਰ ਹੁੰਦਾ ਹੈ',
          'ਸਿਰਫ਼ ਸਾਈਕਲ ਸਵਾਰਾਂ ਕੋਲ',
        ],
        explanation: 'ਡਰਾਈਵਰਾਂ ਨੂੰ ਹਮੇਸ਼ਾ ਪੈਦਲ ਚੱਲਣ ਵਾਲਿਆਂ ਨੂੰ ਪਹਿਲ ਦੇਣੀ ਚਾਹੀਦੀ ਹੈ।',
      },
      hi: {
        question: 'पैदल क्रॉसिंग (Crosswalk) पर पहले निकलने का अधिकार किसका होता है?',
        options: [
          'सबसे तेजी से आने वाला वाहन',
          'चालकों को हमेशा पैदल यात्रियों पर प्राथमिकता होती है',
          'पैदल यात्रियों को क्रॉसिंग पर हमेशा रास्ता पाने का अधिकार होता है',
          'केवल साइकिल चालकों को',
        ],
        explanation: 'वाहन चालकों को हमेशा पैदल चलने वालों को पहले रास्ता देना चाहिए।',
      },
    },
  },
  {
    id: '135',
    category: 'Special Pedestrians',
    question: 'What must you do when you see a pedestrian carrying a white cane or accompanied by a guide dog?',
    options: [
      'Honk your horn to warn them',
      'Always yield the right of way and take extra precautions',
      'Pass quickly before they start walking',
      'Wave your hand to tell them to cross',
    ],
    correctAnswer: 1,
    explanation: 'A white cane indicates a blind or visually impaired person. Drivers must always yield the right of way and stop if necessary.',
    translations: {
      es: {
        question: '¿Qué debe hacer al ver a un peatón con un bastón blanco o acompañado por un perro guía?',
        options: [
          'Tocar la bocina para advertirle',
          'Ceder siempre el paso y tomar precauciones adicionales',
          'Pasar rápidamente antes de que empiece a caminar',
          'Hacer una seña con la mano para que cruce',
        ],
        explanation: 'El bastón blanco indica una persona con discapacidad visual. Siempre debe cederle el paso.',
      },
      ps: {
        question: 'کله چې تاسو یو پیاده کس وګورئ چې سپینه لکړه (white cane) لري یا لارښود سپی ورسره وي، څه باید وکړئ؟',
        options: [
          'هارن ووهئ چې خبر شي',
          'تل د تګ بشپړ لومړیتوب ورکړئ او ځانګړی احتیاط وکړئ',
          'ژر ترې تېر شئ مخکې له دې چې حرکت وکړي',
          'په لاس اشاره ورته وکړئ',
        ],
        explanation: 'سپینه لکړه د ړانده یا لید محروم کس نښه ده؛ چلوونکي باید حتماً هغوی ته لاره ورکړي او تم شي.',
      },
      pa: {
        question: 'ਜਦੋਂ ਤੁਸੀਂ ਚਿੱਟੀ ਸੋਟੀ (white cane) ਵਾਲਾ ਜਾਂ ਗਾਈਡ ਕੁੱਤੇ ਵਾਲਾ ਪੈਦਲ ਯਾਤਰੀ ਦੇਖਦੇ ਹੋ ਤਾਂ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?',
        options: [
          'ਉਹਨਾਂ ਨੂੰ ਸੁਚੇਤ ਕਰਨ ਲਈ ਹਾਰਨ ਵਜਾਓ',
          'ਹਮੇਸ਼ਾ ਰਸਤਾ ਦਿਓ (Yield right of way) ਅਤੇ ਵਾਧੂ ਸਾਵਧਾਨੀ ਵਰਤੋ',
          'ਉਹਨਾਂ ਦੇ ਤੁਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤੇਜ਼ੀ ਨਾਲ ਨਿਕਲੋ',
          'ਲੰਘਣ ਲਈ ਹੱਥ ਹਿਲਾਓ',
        ],
        explanation: 'ਚਿੱਟੀ ਸੋਟੀ ਦ੍ਰਿਸ਼ਟੀਹੀਣ ਵਿਅਕਤੀ ਦੀ ਨਿਸ਼ਾਨੀ ਹੈ। ਉਹਨਾਂ ਨੂੰ ਹਮੇਸ਼ਾ ਰਸਤਾ ਦੇਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
      },
      hi: {
        question: 'सफेद छड़ी (White cane) या गाइड कुत्ते के साथ किसी पैदल यात्री को देखने पर आपको क्या करना चाहिए?',
        options: [
          'हॉर्न बजाकर उन्हें सचेत करें',
          'हमेशा रास्ता दें और अतिरिक्त सावधानी बरतें',
          'उनके चलने से पहले तेजी से निकल जाएं',
          'हाथ हिलाकर सड़क पार करने का इशारा करें',
        ],
        explanation: 'सफेद छड़ी दृष्टिबाधित व्यक्ति की पहचान है। उन्हें हमेशा पहले रास्ता दें।',
      },
    },
  },
];
