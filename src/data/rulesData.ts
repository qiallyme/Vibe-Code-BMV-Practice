import { GeneralQuestion } from '../types';

// Core BMV Knowledge Questions with complete high-fidelity translations across Pashto, Spanish, Punjabi, and Hindi
export const CORE_RULES_QUESTIONS: GeneralQuestion[] = [
  {
    id: 'r-1',
    category: 'Credentials & ID',
    question: 'What does a star marker in the upper right-hand corner of an Indiana credential indicate?',
    options: [
      "It's a probationary license",
      "It's Real ID-compliant",
      "It's expired",
      "It's a temporary credential",
    ],
    correctAnswer: 1,
    explanation: 'A star marker indicates the credential is Real ID-compliant and may be used for federal purposes like commercial boarding.',
    translations: {
      es: {
        question: '¿Qué indica un marcador de estrella en la esquina superior derecha de una credencial de Indiana?',
        options: [
          'Es una licencia probatoria',
          'Cumple con los requisitos de Real ID',
          'Está vencida',
          'Es una credencial temporal',
        ],
        explanation: 'Una estrella indica que la credencial cumple con Real ID y puede usarse para abordar vuelos federales.',
      },
      ps: {
        question: 'د انډیانا په لایسنس کې په پورته ښي کونج کې د ستوري نښه څه ښيي؟',
        options: [
          'دا ازمایښتي لایسنس دی',
          'دا د Real ID سره مطابقت لري',
          'دا تېر شوی (expired) دی',
          'دا موقتي لایسنس دی',
        ],
        explanation: 'د ستوري نښه ښيي چې دا Real ID ده او د فدرالي الوتکو لپاره کارول کیدی شي.',
      },
      pa: {
        question: 'ਇੰਡੀਆਨਾ ਲਾਇਸੈਂਸ ਦੇ ਉੱਪਰਲੇ ਸੱਜੇ ਕੋਨੇ ਵਿੱਚ ਤਾਰੇ ਦਾ ਨਿਸ਼ਾਨ ਕੀ ਦਰਸਾਉਂਦਾ ਹੈ?',
        options: [
          'ਇਹ ਪ੍ਰੋਬੇਸ਼ਨਰੀ ਲਾਇਸੈਂਸ ਹੈ',
          'ਇਹ ਰੀਅਲ ਆਈਡੀ (Real ID) ਅਨੁਕੂਲ ਹੈ',
          'ਇਹ ਮਿਆਦ ਪੁੱਗ ਚੁੱਕਾ ਹੈ',
          'ਇਹ ਇੱਕ ਆਰਜ਼ੀ ਲਾਇਸੈਂਸ ਹੈ',
        ],
        explanation: 'ਤਾਰੇ ਦਾ ਨਿਸ਼ਾਨ ਦਰਸਾਉਂਦਾ ਹੈ ਕਿ ਲਾਇਸੈਂਸ ਰੀਅਲ ਆਈਡੀ ਅਨੁਕੂਲ ਹੈ ਅਤੇ ਸੰਘੀ ਉਦੇਸ਼ਾਂ ਲਈ ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ।',
      },
      hi: {
        question: 'इंडियाना लाइसेंस के ऊपरी दाएं कोने में तारे का निशान क्या दर्शाता है?',
        options: [
          'यह परिवीक्षाधीन (Probationary) लाइसेंस है',
          'यह रियल आईडी (Real ID) अनुरूप है',
          'इसकी समय सीमा समाप्त हो चुकी है',
          'यह एक अस्थायी लाइसेंस है',
        ],
        explanation: 'तारे का निशान दर्शाता है कि यह रियल आईडी के नियमों के अनुरूप है और हवाई यात्रा के लिए मान्य है।',
      },
    },
  },
  {
    id: 'r-2',
    category: 'Permits & Licenses',
    question: 'How long is a learner’s permit valid in Indiana?',
    options: ['1 year', '2 years', '3 years', '4 years'],
    correctAnswer: 1,
    explanation: 'Learner’s permits are valid for two years from the date of issuance.',
    translations: {
      es: {
        question: '¿Por cuánto tiempo es válido un permiso de aprendizaje en Indiana?',
        options: ['1 año', '2 años', '3 años', '4 años'],
        explanation: 'Los permisos de aprendizaje son válidos por dos años a partir de la fecha de emisión.',
      },
      ps: {
        question: 'په انډیانا کې د زده کونکي جواز (learner’s permit) څومره وخت اعتبار لري؟',
        options: ['۱ کال', '۲ کاله', '۳ کاله', '۴ کاله'],
        explanation: 'د زده کونکي لایسنس د صادرېدو له نیټې څخه ۲ کاله اعتبار لري.',
      },
      pa: {
        question: 'ਇੰਡੀਆਨਾ ਵਿੱਚ ਲਰਨਰ ਪਰਮਿਟ ਕਿੰਨੇ ਸਮੇਂ ਲਈ ਵੈਧ ਹੁੰਦਾ ਹੈ?',
        options: ['1 ਸਾਲ', '2 ਸਾਲ', '3 ਸਾਲ', '4 ਸਾਲ'],
        explanation: 'ਲਰਨਰ ਪਰਮਿਟ ਜਾਰੀ ਹੋਣ ਦੀ ਮਿਤੀ ਤੋਂ ਦੋ ਸਾਲਾਂ ਲਈ ਵੈਧ ਹੁੰਦਾ ਹੈ।',
      },
      hi: {
        question: 'इंडियाना में लर्नर परमिट कितने समय के लिए वैध होता है?',
        options: ['1 वर्ष', '2 वर्ष', '3 वर्ष', '4 वर्ष'],
        explanation: 'लर्नर परमिट जारी होने की तारीख से दो साल के लिए वैध होता है।',
      },
    },
  },
  {
    id: 'r-3',
    category: 'Speed Limits',
    question: 'What is the maximum speed limit for passenger vehicles on rural interstate highways in Indiana?',
    options: ['55 mph', '60 mph', '65 mph', '70 mph'],
    correctAnswer: 3,
    explanation: 'Passenger vehicles may not exceed 70 mph or the posted speed limit on rural interstate highways.',
    translations: {
      es: {
        question: '¿Cuál es el límite de velocidad máximo para vehículos de pasajeros en autopistas interestatales rurales en Indiana?',
        options: ['55 mph', '60 mph', '65 mph', '70 mph'],
        explanation: 'Los vehículos de pasajeros no pueden exceder 70 mph en autopistas interestatales rurales.',
      },
      ps: {
        question: 'په انډیانا کې په کلیوالي لویو لارو (rural interstate) کې د سپرلۍ موټرو اعظمي سرعت څومره دی؟',
        options: ['۵۵ مایل په ساعت کې', '۶۰ مایل په ساعت کې', '۶۵ مایل په ساعت کې', '۷۰ مایل په ساعت کې'],
        explanation: 'د سپرلۍ موټرې په کلیوالي لویو لارو کې له ۷۰ مایل په ساعت څخه زیات سرعت نه شي کولای.',
      },
      pa: {
        question: 'ਇੰਡੀਆਨਾ ਵਿੱਚ ਪੇਂਡੂ ਇੰਟਰਸਟੇਟ ਹਾਈਵੇਅ ਤੇ ਯਾਤਰੀ ਵਾਹਨਾਂ ਲਈ ਵੱਧ ਤੋਂ ਵੱਧ ਗਤੀ ਸੀਮਾ ਕੀ ਹੈ?',
        options: ['55 mph', '60 mph', '65 mph', '70 mph'],
        explanation: 'ਪੇਂਡੂ ਇੰਟਰਸਟੇਟ ਹਾਈਵੇਅ ਤੇ ਯਾਤਰੀ ਵਾਹਨਾਂ ਲਈ ਗਤੀ ਸੀਮਾ 70 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਹੈ।',
      },
      hi: {
        question: 'इंडियाना में ग्रामीण इंटरस्टेट राजमार्गों पर यात्री वाहनों के लिए अधिकतम गति सीमा क्या है?',
        options: ['55 mph', '60 mph', '65 mph', '70 mph'],
        explanation: 'ग्रामीण इंटरस्टेट हाईवे पर यात्री वाहन 70 मील प्रति घंटे से अधिक गति नहीं कर सकते।',
      },
    },
  },
  {
    id: 'r-4',
    category: 'Speed Limits',
    question: 'What is the speed limit in alleys in Indiana?',
    options: ['10 mph', '15 mph', '20 mph', '25 mph'],
    correctAnswer: 1,
    explanation: 'In alleys, vehicles may not exceed 15 miles per hour or the posted limit.',
    translations: {
      es: {
        question: '¿Cuál es el límite de velocidad en callejones (alleys) en Indiana?',
        options: ['10 mph', '15 mph', '20 mph', '25 mph'],
        explanation: 'En los callejones, la velocidad máxima permitida es de 15 millas por hora.',
      },
      ps: {
        question: 'په انډیانا کې په کوڅو (alleys) کې د سرعت حد څومره دی؟',
        options: ['۱۰ مایل په ساعت کې', '۱۵ مایل په ساعت کې', '۲۰ مایل په ساعت کې', '۲۵ مایل په ساعت کې'],
        explanation: 'په تنګو کوڅو (alleys) کې موټر نه شي کولای له ۱۵ مایل په ساعت څخه چټک لاړ شي.',
      },
      pa: {
        question: 'ਇੰਡੀਆਨਾ ਵਿੱਚ ਗਲੀਆਂ (alleys) ਵਿੱਚ ਸਪੀਡ ਸੀਮਾ ਕੀ ਹੈ?',
        options: ['10 mph', '15 mph', '20 mph', '25 mph'],
        explanation: 'ਤੰਗ ਗਲੀਆਂ ਵਿੱਚ ਵਾਹਨ 15 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਤੋਂ ਵੱਧ ਨਹੀਂ ਚੱਲ ਸਕਦੇ।',
      },
      hi: {
        question: 'इंडियाना में संकरी गलियों (alleys) में गति सीमा क्या है?',
        options: ['10 mph', '15 mph', '20 mph', '25 mph'],
        explanation: 'गलियों में वाहनों की अधिकतम गति 15 मील प्रति घंटा होती है।',
      },
    },
  },
  {
    id: 'r-5',
    category: 'Traffic Signals',
    question: 'When may you turn right on a red light in Indiana?',
    options: [
      'Always without stopping',
      'Never under any circumstance',
      'After coming to a complete stop and checking for traffic and pedestrians, if not prohibited by a sign',
      'Only if no vehicles are visible anywhere in sight',
    ],
    correctAnswer: 2,
    explanation: 'You may turn right on red after coming to a complete stop, yielding to pedestrians and traffic, unless a "No Turn on Red" sign is posted.',
    translations: {
      es: {
        question: '¿Cuándo puede girar a la derecha en luz roja en Indiana?',
        options: [
          'Siempre sin necesidad de detenerse',
          'Nunca bajo ninguna circunstancia',
          'Después de detenerse por completo y verificar el tráfico y los peatones, si ninguna señal lo prohíbe',
          'Solo si no hay vehículos visibles a la vista',
        ],
        explanation: 'Puede girar a la derecha con luz roja tras detenerse por completo y ceder el paso, siempre que no haya un letrero de "No Turn on Red".',
      },
      ps: {
        question: 'په انډیانا کې تاسو کله کولی شئ په سور څراغ ښي لاس ته تاو شئ؟',
        options: [
          'تل پرته له ځنډه',
          'په هیڅ صورت کله هم نه',
          'وروسته له پوره درېدو، او د ترافیک او پیاده خلکو له کتلو وروسته، که چیرې په کومه نښه منع شوی نه وي',
          'یوازې که چیرې هیڅ موټر نه ښکاري',
        ],
        explanation: 'په سور څراغ ښي اړخ ته د تاوېدو اجازه شته که لومړی پوره ودریږئ، لاره وګورئ او د "No Turn on Red" نښه نه وي.',
      },
      pa: {
        question: 'ਇੰਡੀਆਨਾ ਵਿੱਚ ਤੁਸੀਂ ਲਾਲ ਬੱਤੀ ਤੇ ਸੱਜੇ ਕਦੋਂ ਮੁੜ ਸਕਦੇ ਹੋ?',
        options: [
          'ਬਿਨਾਂ ਰੁਕੇ ਹਮੇਸ਼ਾ',
          'ਕਿਸੇ ਵੀ ਹਾਲਤ ਵਿੱਚ ਕਦੇ ਨਹੀਂ',
          'ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕਣ ਤੋਂ ਬਾਅਦ ਅਤੇ ਆਵਾਜਾਈ ਤੇ ਪੈਦਲ ਯਾਤਰੀਆਂ ਨੂੰ ਦੇਖਣ ਤੋਂ ਬਾਅਦ, ਜੇਕਰ ਕਿਸੇ ਚਿੰਨ੍ਹ ਦੁਆਰਾ ਮਨਾਹੀ ਨਾ ਹੋਵੇ',
          'ਸਿਰਫ਼ ਜੇਕਰ ਕੋਈ ਵਾਹਨ ਨਾ ਦਿਖਾਈ ਦੇਵੇ',
        ],
        explanation: 'ਲਾਲ ਬੱਤੀ ਤੇ ਪੂਰਾ ਰੁਕ ਕੇ ਸੱਜੇ ਮੁੜਿਆ ਜਾ ਸਕਦਾ ਹੈ ਬਸ਼ਰਤੇ "No Turn on Red" ਦਾ ਬੋਰਡ ਨਾ ਲੱਗਾ ਹੋਵੇ।',
      },
      hi: {
        question: 'इंडियाना में आप लाल बत्ती पर दाहिने कब मुड़ सकते हैं?',
        options: [
          'बिना रुके हमेशा',
          'किसी भी परिस्थिति में कभी नहीं',
          'पूरी तरह रुकने और यातायात तथा पैदल यात्रियों की जांच करने के बाद, यदि किसी संकेत द्वारा वर्जित न हो',
          'केवल तभी जब कोई वाहन दिखाई न दे',
        ],
        explanation: 'लाल बत्ती पर पूरी तरह रुकने और रास्ता खाली होने पर दाहिने मुड़ सकते हैं, बशर्ते "No Turn on Red" संकेत न लगा हो।',
      },
    },
  },
  {
    id: 'r-6',
    category: 'Safety & Headlights',
    question: 'When must drivers use headlights according to Indiana law?',
    options: [
      'Only at midnight',
      'Between sunset and sunrise, and whenever visibility is less than 500 feet',
      'Only on highways during rainfall',
      'Only when driving outside city limits',
    ],
    correctAnswer: 1,
    explanation: 'Headlights must be used between sunset and sunrise, as well as any other time when visibility is less than 500 feet.',
    translations: {
      es: {
        question: '¿Cuándo deben los conductores usar los faros delanteros según la ley de Indiana?',
        options: [
          'Solo a la medianoche',
          'Entre la puesta y la salida del sol, y siempre que la visibilidad sea menor a 500 pies',
          'Solo en autopistas durante la lluvia',
          'Solo al conducir fuera de los límites de la ciudad',
        ],
        explanation: 'Los faros deben usarse entre la puesta y la salida del sol, o cuando la visibilidad sea inferior a 500 pies.',
      },
      ps: {
        question: 'د انډیانا د قانون له مخې چلوونکي کله باید د موټر څراغونه بل وساتي؟',
        options: [
          'یوازې په نیمه شپه کې',
          'د لمر لوېدو او ختلو ترمنځ، او هر کله چې د لید فاصله له ۵۰۰ فوټو څخه کمه وي',
          'یوازې په باران کې په لویو لارو',
          'یوازې له ښار څخه بهر',
        ],
        explanation: 'څراغونه باید د ماښام له لمر لوېدو تر سهاره، او کله چې لید له ۵۰۰ فوټو کم وي، بل وي.',
      },
      pa: {
        question: 'ਇੰਡੀਆਨਾ ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਡਰਾਈਵਰਾਂ ਨੂੰ ਹੈੱਡਲਾਈਟਾਂ ਦੀ ਵਰਤੋਂ ਕਦੋਂ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ?',
        options: [
          'ਸਿਰਫ਼ ਅੱਧੀ ਰਾਤ ਨੂੰ',
          'ਸੂਰਜ ਡੁੱਬਣ ਤੋਂ ਸੂਰਜ ਚੜ੍ਹਨ ਤੱਕ, ਅਤੇ ਜਦੋਂ ਵੀ ਦਿੱਖ (visibility) 500 ਫੁੱਟ ਤੋਂ ਘੱਟ ਹੋਵੇ',
          'ਸਿਰਫ਼ ਮੀਂਹ ਦੌਰਾਨ ਹਾਈਵੇਅ ਤੇ',
          'ਸਿਰਫ਼ ਸ਼ਹਿਰ ਤੋਂ ਬਾਹਰ',
        ],
        explanation: 'ਸੂਰਜ ਡੁੱਬਣ ਤੋਂ ਸੂਰਜ ਚੜ੍ਹਨ ਦੇ ਵਿਚਕਾਰ ਅਤੇ ਜਦੋਂ 500 ਫੁੱਟ ਤੋਂ ਘੱਟ ਦਿਸਦਾ ਹੋਵੇ ਤਾਂ ਹੈੱਡਲਾਈਟਾਂ ਜਗਾਉਣੀਆਂ ਲਾਜ਼ਮੀ ਹਨ।',
      },
      hi: {
        question: 'इंडियाना कानून के अनुसार चालकों को हेडलाइट्स का उपयोग कब करना चाहिए?',
        options: [
          'केवल आधी रात को',
          'सूर्यास्त और सूर्योदय के बीच, और जब भी दृश्यता 500 फीट से कम हो',
          'केवल बारिश के दौरान राजमार्गों पर',
          'केवल शहर की सीमा से बाहर',
        ],
        explanation: 'सूर्यास्त से सूर्योदय तक और जब भी दृश्यता 500 फीट से कम हो, हेडलाइट्स जलाना अनिवार्य है।',
      },
    },
  },
  {
    id: 'r-7',
    category: 'Safety & Headlights',
    question: 'When approaching oncoming traffic, within how many feet must you dim high-beam headlights to low beams?',
    options: ['100 feet', '200 feet', '300 feet', '500 feet'],
    correctAnswer: 3,
    explanation: 'You must dim high beams to low beams within 500 feet of an approaching oncoming vehicle, and within 200 feet when following behind.',
    translations: {
      es: {
        question: 'Al acercarse a un vehículo en sentido contrario, ¿a cuántos pies debe cambiar las luces altas a bajas?',
        options: ['100 pies', '200 pies', '300 pies', '500 pies'],
        explanation: 'Debe cambiar las luces altas a bajas a menos de 500 pies de un vehículo que viene de frente (y a 200 pies si lo sigue por detrás).',
      },
      ps: {
        question: 'کله چې مخامخ موټر راځي، په څو فوټه واټن کې باید لوړ څراغونه (high beams) ټیټ کړئ؟',
        options: ['۱۰۰ فوټه', '۲۰۰ فوټه', '۳۰۰ فوټه', '۵۰۰ فوټه'],
        explanation: 'مخامخ راتلونکي موټر ته په ۵۰۰ فوټۍ کې باید تېز څراغونه ټیټ (low beam) کړئ.',
      },
      pa: {
        question: 'ਸਾਹਮਣਿਓਂ ਆ ਰਹੇ ਵਾਹਨ ਦੇ ਕਿੰਨੇ ਫੁੱਟ ਦੇ ਅੰਦਰ ਤੁਹਾਨੂੰ ਹਾਈ-ਬੀਮ ਲਾਈਟਾਂ ਨੂੰ ਲੋਅ-ਬੀਮ ਵਿੱਚ ਬਦਲਣਾ ਚਾਹੀਦਾ ਹੈ?',
        options: ['100 ਫੁੱਟ', '200 ਫੁੱਟ', '300 ਫੁੱਟ', '500 ਫੁੱਟ'],
        explanation: 'ਸਾਹਮਣਿਓਂ ਆ ਰਹੇ ਵਾਹਨ ਦੇ 500 ਫੁੱਟ ਦੇ ਅੰਦਰ (ਅਤੇ ਪਿੱਛੇ ਚੱਲਦੇ ਸਮੇਂ 200 ਫੁੱਟ ਦੇ ਅੰਦਰ) ਲਾਈਟਾਂ ਡਿਮ ਕਰਨੀਆਂ ਲਾਜ਼ਮੀ ਹਨ।',
      },
      hi: {
        question: 'सामने से आ रहे वाहन के कितने फीट के भीतर आपको हाई-बीम लाइट को लो-बीम पर करना चाहिए?',
        options: ['100 फीट', '200 फीट', '300 फीट', '500 फीट'],
        explanation: 'सामने से आने वाले वाहन के 500 फीट के भीतर हाई-बीम को लो-बीम करना आवश्यक है (और पीछे चलते समय 200 फीट)।',
      },
    },
  },
  {
    id: 'r-8',
    category: 'School Buses',
    question: 'When must you stop for a school bus in Indiana?',
    options: [
      'Only when children are visibly running',
      'Whenever the bus activates flashing red lights and extends its stop arm',
      'Only on rural dirt roads',
      'Never if driving in the morning rush hour',
    ],
    correctAnswer: 1,
    explanation: 'You must stop when approaching a school bus with flashing red lights activated and the stop arm extended.',
    translations: {
      es: {
        question: '¿Cuándo debe detenerse ante un autobús escolar en Indiana?',
        options: [
          'Solo cuando los niños corren visiblemente',
          'Siempre que el autobús active las luces rojas intermitentes y extienda el brazo de parada',
          'Solo en caminos rurales de tierra',
          'Nunca si conduce en la hora pico de la mañana',
        ],
        explanation: 'Debe detenerse cuando un autobús escolar tenga las luces rojas intermitentes activadas y el brazo de alto extendido.',
      },
      ps: {
        question: 'په انډیانا کې تاسو کله باید د ښوونځي بس لپاره ودریږئ؟',
        options: [
          'یوازې کله چې ماشومان په منډه ښکاري',
          'کله چې بس سره رپېدونکي څراغونه ولګوي او د سټاپ (Stop) لاسه وغزوي',
          'یوازې په خامو سړکونو',
          'هیڅکله نه په سهار کې',
        ],
        explanation: 'کله چې د ښوونځي بس سره څراغونه بل کړي او د سټاپ وزر خلاص کړي، درېدل لازمي دي.',
      },
      pa: {
        question: 'ਇੰਡੀਆਨਾ ਵਿੱਚ ਸਕੂਲ ਬੱਸ ਲਈ ਤੁਹਾਨੂੰ ਕਦੋਂ ਰੁਕਣਾ ਪਵੇਗਾ?',
        options: [
          'ਸਿਰਫ਼ ਉਦੋਂ ਜਦੋਂ ਬੱਚੇ ਭੱਜਦੇ ਦਿਖਾਈ ਦੇਣ',
          'ਜਦੋਂ ਵੀ ਬੱਸ ਲਾਲ ਬੱਤੀਆਂ ਜਗਾਉਂਦੀ ਹੈ ਅਤੇ ਸਟਾਪ ਆਰਮ ਬਾਹਰ ਕੱਢਦੀ ਹੈ',
          'ਸਿਰਫ਼ ਪੇਂਡੂ ਕੱਚੀਆਂ ਸੜਕਾਂ ਤੇ',
          'ਸਵੇਰ ਦੇ ਭੀੜ-ਭੜੱਕੇ ਵੇਲੇ ਕਦੇ ਨਹੀਂ',
        ],
        explanation: 'ਜਦੋਂ ਸਕੂਲ ਬੱਸ ਦੀਆਂ ਲਾਲ ਬੱਤੀਆਂ ਚਮਕਦੀਆਂ ਹਨ ਅਤੇ ਸਟਾਪ ਆਰਮ ਖੁੱਲ੍ਹੀ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
      },
      hi: {
        question: 'इंडियाना में स्कूल बस के लिए आपको कब रुकना होगा?',
        options: [
          'केवल तभी जब बच्चे दौड़ते हुए दिखाई दें',
          'जब भी बस लाल फ्लैशिंग लाइट चालू करे और स्टॉप आर्म बाहर निकाले',
          'केवल ग्रामीण कच्ची सड़कों पर',
          'सुबह के व्यस्त समय में कभी नहीं',
        ],
        explanation: 'जब स्कूल बस लाल लाइट चमकाए और स्टॉप आर्म बाहर निकाले, तो रुकना अनिवार्य है।',
      },
    },
  },
  {
    id: 'r-9',
    category: 'Alcohol & Law',
    question: 'What is the legal Blood Alcohol Concentration (BAC) limit for drivers 21 and older in Indiana?',
    options: ['0.02%', '0.05%', '0.08%', '0.10%'],
    correctAnswer: 2,
    explanation: 'In Indiana, operating a motor vehicle with a BAC of 0.08% or higher is illegal for drivers age 21 and older.',
    translations: {
      es: {
        question: '¿Cuál es el límite legal de concentración de alcohol en sangre (BAC) para conductores de 21 años o más en Indiana?',
        options: ['0.02%', '0.05%', '0.08%', '0.10%'],
        explanation: 'En Indiana, conducir con un BAC de 0.08% o superior es ilegal para personas de 21 años o más.',
      },
      ps: {
        question: 'په انډیانا کې د ۲۱ کلنو او تر هغې پورته چلوونکو لپاره په وینه کې د الکولو قانوني اندازه (BAC) څومره ده؟',
        options: ['۰.۰۲٪', '۰.۰۵٪', '۰.۰۸٪', '۰.۱۰٪'],
        explanation: 'په انډیانا کې ۰.۰۸٪ یا له دې پورته الکول په وینه کې د قانون له مخې نشه او غیرقانوني ګڼل کیږي.',
      },
      pa: {
        question: 'ਇੰਡੀਆਨਾ ਵਿੱਚ 21 ਸਾਲ ਅਤੇ ਵੱਧ ਉਮਰ ਦੇ ਡਰਾਈਵਰਾਂ ਲਈ ਕਾਨੂੰਨੀ ਬਲੱਡ ਅਲਕੋਹਲ ਸੀਮਾ (BAC) ਕੀ ਹੈ?',
        options: ['0.02%', '0.05%', '0.08%', '0.10%'],
        explanation: 'ਇੰਡੀਆਨਾ ਵਿੱਚ 21 ਸਾਲ ਜਾਂ ਵੱਧ ਉਮਰ ਦੇ ਡਰਾਈਵਰਾਂ ਲਈ 0.08% ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ BAC ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ।',
      },
      hi: {
        question: 'इंडियाना में 21 वर्ष और उससे अधिक उम्र के चालकों के लिए कानूनी रक्त अल्कोहल सांद्रता (BAC) सीमा क्या है?',
        options: ['0.02%', '0.05%', '0.08%', '0.10%'],
        explanation: 'इंडियाना में 21 वर्ष या उससे अधिक उम्र के चालकों के लिए 0.08% या उससे अधिक BAC गैरकानूनी है।',
      },
    },
  },
  {
    id: 'r-10',
    category: 'Emergency Vehicles',
    question: 'What must you do when approaching an authorized emergency vehicle stopped on the side with flashing lights?',
    options: [
      'Honk your horn and accelerate',
      'Change lanes away from the emergency vehicle if possible, or slow down to at least 10 mph under the posted speed limit',
      'Stop immediately in the middle of the roadway',
      'Maintain your exact speed and lane',
    ],
    correctAnswer: 1,
    explanation: 'Indiana’s "Move Over" law requires drivers to move over into an adjacent lane away from stopped emergency vehicles, or reduce speed to 10 mph under the limit.',
    translations: {
      es: {
        question: '¿Qué debe hacer al acercarse a un vehículo de emergencia detenido a un costado con luces intermitentes?',
        options: [
          'Tocar la bocina y acelerar',
          'Cambiar de carril alejándose del vehículo si es posible, o reducir la velocidad al menos 10 mph por debajo del límite',
          'Detenerse inmediatamente en medio de la carretera',
          'Mantener la velocidad y el carril exactos',
        ],
        explanation: 'La ley de Indiana exige cambiarse de carril para alejarse del vehículo de emergencia o reducir la velocidad a 10 mph por debajo del límite.',
      },
      ps: {
        question: 'کله چې تاسو بیړني ولاړ موټر ته چې څراغونه یې لګېدلي وي نږدې شئ، څه باید وکړئ؟',
        options: [
          'هارن ووهئ او سرعت زیات کړئ',
          'که امکان ولري بل لین ته واوړئ، یا لږترلږه د قانوني سرعت څخه ۱۰ مایل په ساعت خپل سرعت کم کړئ',
          'سمدستي د سرک په منځ کې بریک ونیسئ',
          'په همغه سرعت او لین لاړ شئ',
        ],
        explanation: 'د انډیانا قانون له مخې باید له بیړني ولاړ موټر څخه لیرې لین ته لاړ شئ یا ۱۰ مایله سرعت راکم کړئ.',
      },
      pa: {
        question: 'ਜਦੋਂ ਲਾਈਟਾਂ ਵਾਲਾ ਐਮਰਜੈਂਸੀ ਵਾਹਨ ਸੜਕ ਦੇ ਕਿਨਾਰੇ ਖੜ੍ਹਾ ਹੋਵੇ ਤਾਂ ਤੁਹਾਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?',
        options: [
          'ਹਾਰਨ ਵਜਾਓ ਅਤੇ ਤੇਜ਼ ਕਰੋ',
          'ਜੇਕਰ ਸੰਭਵ ਹੋਵੇ ਤਾਂ ਐਮਰਜੈਂਸੀ ਵਾਹਨ ਤੋਂ ਦੂਰ ਵਾਲੀ ਲੇਨ ਵਿੱਚ ਜਾਓ, ਜਾਂ ਸਪੀਡ ਸੀਮਾ ਤੋਂ ਘੱਟੋ-ਘੱਟ 10 mph ਹੌਲੀ ਕਰੋ',
          'ਸੜਕ ਦੇ ਵਿਚਕਾਰ ਤੁਰੰਤ ਰੁਕੋ',
          'ਆਪਣੀ ਰਫ਼ਤਾਰ ਅਤੇ ਲੇਨ ਬਰਕਰਾਰ ਰੱਖੋ',
        ],
        explanation: 'ਇੰਡੀਆਨਾ ਦਾ "Move Over" ਕਾਨੂੰਨ ਕਹਿੰਦਾ ਹੈ ਕਿ ਦੂਜੀ ਲੇਨ ਵਿੱਚ ਜਾਓ ਜਾਂ ਗਤੀ 10 mph ਘਟਾਓ।',
      },
      hi: {
        question: 'फ्लैशिंग लाइट वाले आपातकालीन वाहन के पास पहुँचने पर आपको क्या करना चाहिए?',
        options: [
          'हॉर्न बजाएं और गति बढ़ाएं',
          'यदि संभव हो तो आपातकालीन वाहन से दूर वाली लेन में बदलें, या गति सीमा से कम से कम 10 mph धीमी करें',
          'सड़क के बीच में तुरंत रुकें',
          'अपनी गति और लेन बनाए रखें',
        ],
        explanation: 'इंडियाना का "मूव ओवर" कानून कहता है कि आपातकालीन वाहन से दूर वाली लेन में जाएं या गति 10 mph कम करें।',
      },
    },
  },
];
