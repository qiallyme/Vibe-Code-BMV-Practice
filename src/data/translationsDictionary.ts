import { Language, TranslationItem } from '../types';

export interface QuestionTranslationMap {
  [questionId: string]: Record<Language, TranslationItem>;
}

// Comprehensive verified translations for Indiana BMV Driver's Manual questions
// in Spanish (es), Pashto (ps), Punjabi (pa), and Hindi (hi)
export const BMV_TRANSLATIONS_MAP: QuestionTranslationMap = {
  "1": {
    es: {
      question: "¿Qué indica un marcador de estrella en la esquina superior derecha de una credencial de Indiana?",
      options: ["Es una licencia probatoria", "Cumple con los requisitos de Real ID", "Está vencida", "Es una credencial temporal"],
      explanation: "Un marcador de estrella indica que la credencial cumple con Real ID y puede usarse para propósitos federales como abordar vuelos comerciales."
    },
    ps: {
      question: "د انډیانا په لایسنس کې په پورته ښي کونج کې د ستوري نښه څه ښيي؟",
      options: ["دا ازمایښتي لایسنس دی", "دا د Real ID سره مطابقت لري", "دا تېر شوی (expired) دی", "دا موقتي لایسنس دی"],
      explanation: "د ستوري نښه ښيي چې دا لایسنس Real ID دی او د فدرالي الوتکو لپاره کارول کیدی شي."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ ਲਾਇਸੈਂਸ ਦੇ ਉੱਪਰਲੇ ਸੱਜੇ ਕੋਨੇ ਵਿੱਚ ਤਾਰੇ ਦਾ ਨਿਸ਼ਾਨ ਕੀ ਦਰਸਾਉਂਦਾ ਹੈ?",
      options: ["ਇਹ ਪ੍ਰੋਬੇਸ਼ਨਰੀ ਲਾਇਸੈਂਸ ਹੈ", "ਇਹ ਰੀਅਲ ਆਈਡੀ (Real ID) ਅਨੁਕੂਲ ਹੈ", "ਇਹ ਮਿਆਦ ਪੁੱਗ ਚੁੱਕਾ ਹੈ", "ਇਹ ਇੱਕ ਆਰਜ਼ੀ ਲਾਇਸੈਂਸ ਹੈ"],
      explanation: "ਤਾਰੇ ਦਾ ਨਿਸ਼ਾਨ ਦਰਸਾਉਂਦਾ ਹੈ ਕਿ ਲਾਇਸੈਂਸ ਰੀਅਲ ਆਈਡੀ ਅਨੁਕੂਲ ਹੈ ਅਤੇ ਸੰਘੀ ਉਦੇਸ਼ਾਂ ਲਈ ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ।"
    },
    hi: {
      question: "इंडियाना लाइसेंस के ऊपरी दाएं कोने में तारे का निशान क्या दर्शाता है?",
      options: ["यह परिवीक्षाधीन (Probationary) लाइसेंस है", "यह रियल आईडी (Real ID) अनुरूप है", "इसकी समय सीमा समाप्त हो चुकी है", "यह एक अस्थायी लाइसेंस है"],
      explanation: "तारे का निशान दर्शाता है कि यह रियल आईडी के नियमों के अनुरूप है और हवाई यात्रा के लिए मान्य है।"
    }
  },
  "2": {
    es: {
      question: "¿Por cuánto tiempo es válido un permiso de aprendizaje en Indiana?",
      options: ["1 año", "2 años", "3 años", "4 años"],
      explanation: "Los permisos de aprendizaje son válidos por dos años a partir de la fecha de emisión."
    },
    ps: {
      question: "په انډیانا کې د زده کونکي جواز (learner’s permit) څومره وخت اعتبار لري؟",
      options: ["۱ کال", "۲ کاله", "۳ کاله", "۴ کاله"],
      explanation: "د زده کونکي لایسنس د صادرېدو له نیټې څخه دوه کاله اعتبار لري."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਲਰਨਰ ਪਰਮਿਟ ਕਿੰਨੇ ਸਮੇਂ ਲਈ ਵੈਧ ਹੁੰਦਾ ਹੈ?",
      options: ["1 ਸਾਲ", "2 ਸਾਲ", "3 ਸਾਲ", "4 ਸਾਲ"],
      explanation: "ਲਰਨਰ ਪਰਮਿਟ ਜਾਰੀ ਹੋਣ ਦੀ ਮਿਤੀ ਤੋਂ ਦੋ ਸਾਲਾਂ ਲਈ ਵੈਧ ਹੁੰਦਾ ਹੈ।"
    },
    hi: {
      question: "इंडियाना में लर्नर परमिट कितने समय के लिए वैध होता है?",
      options: ["1 वर्ष", "2 वर्ष", "3 वर्ष", "4 वर्ष"],
      explanation: "लर्नर परमिट जारी होने की तारीख से दो साल के लिए वैध होता है।"
    }
  },
  "3": {
    es: {
      question: "¿Cuál es la edad mínima para solicitar un permiso de aprendizaje en Indiana?",
      options: ["14 años", "15 años", "16 años", "17 años"],
      explanation: "Puede solicitarlo a los 15 años si está inscrito en educación vial, o a los 16 años sin ella."
    },
    ps: {
      question: "په انډیانا کې د زده کونکي جواز اخیستلو لپاره لږترلږه عمر څو کاله دی؟",
      options: ["۱۴ کاله", "۱۵ کاله", "۱۶ کاله", "۱۷ کاله"],
      explanation: "که تاسو د ډرایورۍ زده کړې کورس کې شامل یاست ۱۵ کلنۍ کې او که نه ۱۶ کلنۍ کې درخواست کولی شئ."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਲਰਨਰ ਪਰਮਿਟ ਲਈ ਅਰਜ਼ੀ ਦੇਣ ਦੀ ਘੱਟੋ-ਘੱਟ ਉਮਰ ਕੀ ਹੈ?",
      options: ["14 ਸਾਲ", "15 ਸਾਲ", "16 ਸਾਲ", "17 ਸਾਲ"],
      explanation: "ਜੇਕਰ ਡਰਾਈਵਰ ਸਿੱਖਿਆ ਕੋਰਸ ਵਿੱਚ ਦਾਖਲਾ ਲਿਆ ਹੈ ਤਾਂ 15 ਸਾਲ, ਨਹੀਂ ਤਾਂ 16 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਅਰਜ਼ੀ ਦੇ ਸਕਦੇ ਹੋ।"
    },
    hi: {
      question: "इंडियाना में शिक्षार्थी (Learner's) परमिट के लिए आवेदन करने की न्यूनतम आयु क्या है?",
      options: ["14 वर्ष", "15 वर्ष", "16 वर्ष", "17 वर्ष"],
      explanation: "यदि आप चालक प्रशिक्षण में नामांकित हैं तो 15 वर्ष, अन्यथा 16 वर्ष की आयु में आवेदन कर सकते हैं।"
    }
  },
  "4": {
    es: {
      question: "¿Cuánto tiempo debe tener un permiso de aprendizaje antes de solicitar una licencia de conducir?",
      options: ["90 días", "120 días", "180 días", "270 días"],
      explanation: "Debe mantener un permiso de aprendizaje válido durante al menos 180 días antes de solicitar la licencia."
    },
    ps: {
      question: "د موټر چلولو اصلي لایسنس اخیستو دمخه باید د زده کونکي جواز څومره وخت ولرئ؟",
      options: ["۹۰ ورځې", "۱۲۰ ورځې", "۱۸۰ ورځې", "۲۷۰ ورځې"],
      explanation: "تاسو باید لږترلږه ۱۸۰ ورځې د زده کونکي جواز ولرئ مخکې لدې چې د لایسنس غوښتنه وکړئ."
    },
    pa: {
      question: "ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ ਲਈ ਅਰਜ਼ੀ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਡੇ ਕੋਲ ਲਰਨਰ ਪਰਮਿਟ ਕਿੰਨੇ ਸਮੇਂ ਲਈ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["90 ਦਿਨ", "120 ਦਿਨ", "180 ਦਿਨ", "270 ਦਿਨ"],
      explanation: "ਲਾਇਸੈਂਸ ਅਪਲਾਈ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਡੇ ਕੋਲ ਘੱਟੋ-ਘੱਟ 180 ਦਿਨਾਂ ਲਈ ਲਰਨਰ ਪਰਮਿਟ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।"
    },
    hi: {
      question: "ड्राइविंग लाइसेंस के लिए आवेदन करने से पहले आपके पास कितने समय तक लर्नर परमिट होना चाहिए?",
      options: ["90 दिन", "120 दिन", "180 दिन", "270 दिन"],
      explanation: "ड्राइविंग लाइसेंस के लिए आवेदन करने से पहले आपके पास कम से कम 180 दिनों के लिए शिक्षार्थी परमिट होना अनिवार्य है।"
    }
  },
  "5": {
    es: {
      question: "¿Cuál es el período de validez de una licencia de conducir para menores de 75 años?",
      options: ["3 años", "4 años", "6 años", "8 años"],
      explanation: "Una licencia de conducir es válida por seis años si es menor de 75 años."
    },
    ps: {
      question: "د هغو کسانو لپاره چې عمر یې تر ۷۵ کلونو کم وي، د موټر چلولو لایسنس څومره وخت اعتبار لري؟",
      options: ["۳ کاله", "۴ کاله", "۶ کاله", "۸ کاله"],
      explanation: "د موټر چلولو لایسنس د هغو کسانو لپاره چې عمر یې تر ۷۵ کاله کم دی ۶ کاله اعتبار لري."
    },
    pa: {
      question: "75 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਵਿਅਕਤੀ ਲਈ ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ ਦੀ ਮਿਆਦ ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?",
      options: ["3 ਸਾਲ", "4 ਸਾਲ", "6 ਸਾਲ", "8 ਸਾਲ"],
      explanation: "ਜੇਕਰ ਤੁਹਾਡੀ ਉਮਰ 75 ਸਾਲ ਤੋਂ ਘੱਟ ਹੈ ਤਾਂ ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ 6 ਸਾਲਾਂ ਲਈ ਵੈਧ ਹੁੰਦਾ ਹੈ।"
    },
    hi: {
      question: "75 वर्ष से कम आयु के व्यक्ति के लिए ड्राइविंग लाइसेंस की वैधता अवधि क्या है?",
      options: ["3 वर्ष", "4 वर्ष", "6 वर्ष", "8 वर्ष"],
      explanation: "यदि आपकी आयु 75 वर्ष से कम है, तो ड्राइविंग लाइसेंस छह साल के लिए वैध होता है।"
    }
  },
  "6": {
    es: {
      question: "¿Cuándo vence una licencia de conducir probatoria en Indiana?",
      options: ["A los 18 años", "A los 21 años y 30 días", "Después de 2 años", "Después de 4 años"],
      explanation: "Una licencia probatoria vence cuando el titular cumple 21 años y 30 días de edad."
    },
    ps: {
      question: "ازمایښتي لایسنس کله ختمیږي؟",
      options: ["په ۱۸ کلنۍ کې", "په ۲۱ کلنۍ او ۳۰ ورځو کې", "له ۲ کلونو وروسته", "له ۴ کلونو وروسته"],
      explanation: "ازمایښتي لایسنس هغه وخت پای ته رسیږي چې لرونکی یې ۲۱ کاله او ۳۰ ورځې عمر ولري."
    },
    pa: {
      question: "ਪ੍ਰੋਬੇਸ਼ਨਰੀ ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ ਦੀ ਮਿਆਦ ਕਦੋਂ ਪੁੱਗਦੀ ਹੈ?",
      options: ["18 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ", "21 ਸਾਲ ਅਤੇ 30 ਦਿਨਾਂ ਦੀ ਉਮਰ ਵਿੱਚ", "2 ਸਾਲ ਬਾਅਦ", "4 ਸਾਲ ਬਾਅਦ"],
      explanation: "ਪ੍ਰੋਬੇਸ਼ਨਰੀ ਲਾਇਸੈਂਸ ਕਾਰਡਧਾਰਕ ਦੇ 21 ਸਾਲ ਅਤੇ 30 ਦਿਨ ਹੋਣ ਤੇ ਖਤਮ ਹੁੰਦਾ ਹੈ।"
    },
    hi: {
      question: "परिवीक्षाधीन (Probationary) ड्राइविंग लाइसेंस की समय सीमा कब समाप्त होती है?",
      options: ["18 वर्ष की आयु में", "21 वर्ष और 30 दिन की आयु में", "2 वर्ष बाद", "4 वर्ष बाद"],
      explanation: "एक परिवीक्षाधीन लाइसेंस तब समाप्त होता है जब कार्डधारक 21 वर्ष और 30 दिन का हो जाता है।"
    }
  },
  "7": {
    es: {
      question: "¿Cuál es la fecha límite de Real ID para abordar vuelos comerciales?",
      options: ["1 de enero de 2024", "7 de mayo de 2025", "1 de enero de 2026", "Sin fecha límite"],
      explanation: "El Departamento de Seguridad Nacional estableció el 7 de mayo de 2025 como fecha límite de cumplimiento de Real ID."
    },
    ps: {
      question: "د سوداګریزو الوتنو لپاره د Real ID پلي کولو وروستۍ نیټه څه ده؟",
      options: ["د جنوري ۱، ۲۰۲۴", "د می ۷، ۲۰۲۵", "د جنوري ۱، ۲۰۲۶", "هیڅ نیټه نه ده ټاکل شوې"],
      explanation: "د کورني امنیت ریاست د ۲۰۲۵ کال د می ۷ نیټه د Real ID لازمي نیټه ټاکلې ده."
    },
    pa: {
      question: "ਵਪਾਰਕ ਉਡਾਣਾਂ ਲਈ ਰੀਅਲ ਆਈਡੀ (Real ID) ਦੀ ਆਖਰੀ ਮਿਤੀ ਕੀ ਹੈ?",
      options: ["1 ਜਨਵਰੀ 2024", "7 ਮਈ 2025", "1 ਜਨਵਰੀ 2026", "ਕੋਈ ਮਿਤੀ ਤੈਅ ਨਹੀਂ"],
      explanation: "ਹੋਮਲੈਂਡ ਸੁਰੱਖਿਆ ਵਿਭਾਗ ਨੇ ਰੀਅਲ ਆਈਡੀ ਲਈ 7 ਮਈ 2025 ਦੀ ਅੰਤਮ ਮਿਤੀ ਨਿਰਧਾਰਤ ਕੀਤੀ ਹੈ।"
    },
    hi: {
      question: "घरेलू वाणिज्यिक उड़ानों के लिए रियल आईडी की अंतिम समय सीमा क्या है?",
      options: ["1 जनवरी 2024", "7 मई 2025", "1 जनवरी 2026", "कोई समय सीमा तय नहीं"],
      explanation: "होमलैंड सुरक्षा विभाग ने रियल आईडी प्रवर्तन के लिए 7 मई, 2025 की समय सीमा तय की है।"
    }
  },
  "8": {
    es: {
      question: "¿Qué documentos se requieren para obtener una credencial compatible con Real ID?",
      options: ["Solo prueba de identidad", "Identidad, estado legal, Seguro Social y residencia en Indiana", "Solo certificado de nacimiento", "Solo licencia de otro estado"],
      explanation: "Debe presentar documentos originales de identidad, presencia legal, Seguro Social y comprobante de residencia en Indiana."
    },
    ps: {
      question: "د Real ID لایسنس ترلاسه کولو لپاره کوم اسناد اړین دي؟",
      options: ["یوازې د هویت ثبوت", "هویت، قانوني حالت، د ټولنیز خوندیتوب (SSN) شمېره، او په انډیانا کې د استوګنې ثبوت", "یوازې د زیږون کارت", "یوازې د بل ایالت لایسنس"],
      explanation: "تاسو باید اصلي اسناد وړاندې کړئ: د هویت ثبوت، قانوني حالت، SSN، او په انډیانا کې د استوګنې ثبوت."
    },
    pa: {
      question: "ਰੀਅਲ ਆਈਡੀ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਕਿਹੜੇ ਦਸਤਾਵੇਜ਼ ਲੋੜੀਂਦੇ ਹਨ?",
      options: ["ਸਿਰਫ਼ ਪਛਾਣ ਦਾ ਸਬੂਤ", "ਪਛਾਣ, ਕਾਨੂੰਨੀ ਸਥਿਤੀ, ਸੋਸ਼ਲ ਸਕਿਓਰਿਟੀ ਨੰਬਰ, ਅਤੇ ਇੰਡੀਆਨਾ ਰਿਹਾਇਸ਼ ਦਾ ਸਬੂਤ", "ਸਿਰਫ਼ ਜਨਮ ਸਰਟੀਫਿਕੇਟ", "ਸਿਰਫ਼ ਦੂਜੇ ਰਾਜ ਦਾ ਲਾਇਸੈਂਸ"],
      explanation: "ਤੁਹਾਨੂੰ ਪਛਾਣ, ਕਾਨੂੰਨੀ ਸਥਿਤੀ, ਸੋਸ਼ਲ ਸਕਿਓਰਿਟੀ ਅਤੇ ਇੰਡੀਆਨਾ ਵਿੱਚ ਰਿਹਾਇਸ਼ ਦੇ ਅਸਲ ਦਸਤਾਵੇਜ਼ ਦੇਣੇ ਹੋਣਗੇ।"
    },
    hi: {
      question: "रियल आईडी क्रेडेंशियल प्राप्त करने के लिए कौन से दस्तावेज आवश्यक हैं?",
      options: ["केवल पहचान का प्रमाण", "पहचान, कानूनी स्थिति, सामाजिक सुरक्षा संख्या और इंडियाना निवास का प्रमाण", "केवल जन्म प्रमाण पत्र", "केवल अन्य राज्य का लाइसेंस"],
      explanation: "आपको पहचान, वैध कानूनी स्थिति, सोशल सिक्योरिटी नंबर और इंडियाना निवास के मूल प्रमाण पत्र देने होंगे।"
    }
  },
  "9": {
    es: {
      question: "¿Cuánto tiempo tienen los nuevos residentes de Indiana para obtener una licencia de conducir?",
      options: ["30 días", "60 días", "90 días", "120 días"],
      explanation: "Al convertirse en residente de Indiana, tiene 60 días para obtener una nueva licencia de conducir de Indiana."
    },
    ps: {
      question: "د انډیانا نوي اوسیدونکي څومره وخت لري چې د انډیانا لایسنس واخلي؟",
      options: ["۳۰ ورځې", "۶۰ ورځې", "۹۰ ورځې", "۱۲۰ ورځې"],
      explanation: "کله چې تاسو د انډیانا نوي اوسیدونکي شئ، تاسو ۶۰ ورځې لرئ چې د انډیانا د موټر چلولو لایسنس ترلاسه کړئ."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ ਦੇ ਨਵੇਂ ਵਸਨੀਕਾਂ ਕੋਲ ਇੰਡੀਆਨਾ ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ ਲੈਣ ਲਈ ਕਿੰਨਾ ਸਮਾਂ ਹੁੰਦਾ ਹੈ?",
      options: ["30 ਦਿਨ", "60 ਦਿਨ", "90 ਦਿਨ", "120 ਦਿਨ"],
      explanation: "ਇੰਡੀਆਨਾ ਦਾ ਵਸਨੀਕ ਬਣਨ ਤੇ ਤੁਹਾਡੇ ਕੋਲ ਨਵਾਂ ਲਾਇਸੈਂਸ ਲੈਣ ਲਈ 60 ਦਿਨਾਂ ਦਾ ਸਮਾਂ ਹੁੰਦਾ ਹੈ।"
    },
    hi: {
      question: "इंडियाना के नए निवासियों के पास इंडियाना ड्राइविंग लाइसेंस प्राप्त करने के लिए कितना समय होता है?",
      options: ["30 दिन", "60 दिन", "90 दिन", "120 दिन"],
      explanation: "इंडियाना का निवासी बनने के बाद, आपके पास नया ड्राइविंग लाइसेंस प्राप्त करने के लिए 60 दिन का समय होता है।"
    }
  },
  "10": {
    es: {
      question: "¿Qué comunican las señales de tráfico rojas?",
      options: ["Advertencia de peligros adelante", "Regulaciones de tráfico que requieren acción inmediata", "Movimientos permitidos", "Servicios viales"],
      explanation: "Las señales rojas transmiten regulaciones que exigen a los conductores tomar medidas inmediatas para evitar riesgos de seguridad vial."
    },
    ps: {
      question: "سرې ترافیکي نښې څه ښيي؟",
      options: ["د مخکنیو خطرونو خبرداری", "ترافیکي مقررات چې سمدستي عمل ته اړتیا لري", "مجاز حرکتونه", "د سړک خدمتونه"],
      explanation: "سرې نښې داسې قوانین ښيي چې چلوونکي باید سمدلاسه عمل پرې وکړي لکه درېدل."
    },
    pa: {
      question: "ਲਾਲ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕੀ ਸੰਦੇਸ਼ ਦਿੰਦੇ ਹਨ?",
      options: ["ਅੱਗੇ ਖ਼ਤਰਿਆਂ ਦੀ ਚੇਤਾਵਨੀ", "ਟ੍ਰੈਫਿਕ ਨਿਯਮ ਜਿਨ੍ਹਾਂ ਲਈ ਤੁਰੰਤ ਕਾਰਵਾਈ ਦੀ ਲੋੜ ਹੈ", "ਇਜਾਜ਼ਤ ਦਿੱਤੀਆਂ ਹਰਕਤਾਂ", "ਸੜਕ ਸੇਵਾਵਾਂ"],
      explanation: "ਲਾਲ ਚਿੰਨ੍ਹ ਅਜਿਹੇ ਨਿਯਮ ਦੱਸਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਲਈ ਡਰਾਈਵਰਾਂ ਨੂੰ ਤੁਰੰਤ ਕਾਰਵਾਈ ਕਰਨੀ ਪੈਂਦੀ ਹੈ।"
    },
    hi: {
      question: "लाल रंग के ट्रैफिक संकेत क्या संदेश देते हैं?",
      options: ["आगे के खतरों की चेतावनी", "यातायात नियम जिनके लिए तत्काल कार्रवाई आवश्यक है", "अनुमति प्राप्त गतिविधियाँ", "सड़क सेवाएं"],
      explanation: "लाल रंग के संकेत ऐसे यातायात नियमों को दर्शाते हैं जिन पर ड्राइवरों को तुरंत कार्रवाई करनी होती है।"
    }
  },
  "11": {
    es: {
      question: "¿Qué indican las señales de tráfico amarillas o verde-amarillo fluorescentes?",
      options: ["Parada obligatoria", "Regulaciones para obedecer", "Condiciones de la carretera y peligros adelante", "Movimientos permitidos"],
      explanation: "Las señales amarillas o amarillo-verdosas preparan a los conductores para condiciones viales específicas y peligros adelante."
    },
    ps: {
      question: "ژېړې یا فلوروسینټ ژېړ-شین نښې څه ښيي؟",
      options: ["درېدل لازمي دي", "مقررات چې باید پرې عمل وشي", "د سړک حالات او مخکني خطرونه", "مجاز حرکتونه"],
      explanation: "ژېړې نښې چلوونکي د سړک د حالاتو او راتلونکو خطرونو لپاره چمتو کوي."
    },
    pa: {
      question: "ਪੀਲੇ ਜਾਂ ਫਲੋਰੋਸੈਂਟ ਪੀਲੇ-ਹਰੇ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕੀ ਦਰਸਾਉਂਦੇ ਹਨ?",
      options: ["ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ", "ਨਿਯਮ ਜਿਨ੍ਹਾਂ ਦੀ ਪਾਲਣਾ ਕਰਨੀ ਹੈ", "ਸੜਕ ਦੀਆਂ ਸਥਿਤੀਆਂ ਅਤੇ ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਖ਼ਤਰੇ", "ਇਜਾਜ਼ਤ ਦਿੱਤੀਆਂ ਹਰਕਤਾਂ"],
      explanation: "ਪੀਲੇ ਚਿੰਨ੍ਹ ਡਰਾਈਵਰਾਂ ਨੂੰ ਸੜਕ ਦੀਆਂ ਖਾਸ ਸਥਿਤੀਆਂ ਅਤੇ ਖ਼ਤਰਿਆਂ ਲਈ ਤਿਆਰ ਕਰਦੇ ਹਨ।"
    },
    hi: {
      question: "पीले या फ्लोरोसेंट पीले-हरे ट्रैफिक संकेत क्या दर्शाते हैं?",
      options: ["रुकना अनिवार्य है", "नियम जिनका पालन करना है", "सड़क की स्थिति और आगे आने वाले खतरे", "अनुमति प्राप्त गतिविधियाँ"],
      explanation: "पीले संकेत ड्राइवरों को सड़क की विशिष्ट स्थितियों और आगे आने वाले खतरों के प्रति सचेत करते हैं।"
    }
  },
  "12": {
    es: {
      question: "¿Qué muestran las señales de tráfico blancas?",
      options: ["Señales de advertencia", "Regulaciones de tráfico e información útil", "Áreas recreativas", "Servicios viales"],
      explanation: "Las señales blancas muestran regulaciones de tráfico (como límites de velocidad) que los conductores deben obedecer, así como información útil."
    },
    ps: {
      question: "سپینې ترافیکي نښې څه ښيي؟",
      options: ["د خبرداري نښې", "ترافیکي مقررات او ګټور معلومات", "تفریحي ځایونه", "د سړک خدمتونه"],
      explanation: "سپینې نښې ترافیکي مقررات لکه د سرعت حد او لارښوونې ښيي."
    },
    pa: {
      question: "ਚਿੱਟੇ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕੀ ਦਿਖਾਉਂਦੇ ਹਨ?",
      options: ["ਚੇਤਾਵਨੀ ਚਿੰਨ੍ਹ", "ਟ੍ਰੈਫਿਕ ਨਿਯਮ ਅਤੇ ਲਾਭਦਾਇਕ ਜਾਣਕਾਰੀ", "ਮਨੋਰੰਜਨ ਖੇਤਰ", "ਸੜਕ ਸੇਵਾਵਾਂ"],
      explanation: "ਚਿੱਟੇ ਚਿੰਨ੍ਹ ਟ੍ਰੈਫਿਕ ਨਿਯਮਾਂ (ਜਿਵੇਂ ਕਿ ਗਤੀ ਸੀਮਾ) ਅਤੇ ਜ਼ਰੂਰੀ ਜਾਣਕਾਰੀ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ।"
    },
    hi: {
      question: "सफेद रंग के ट्रैफिक संकेत क्या प्रदर्शित करते हैं?",
      options: ["चेतावनी संकेत", "यातायात नियम और उपयोगी जानकारी", "मनोरंजन क्षेत्र", "सड़क सेवाएं"],
      explanation: "सफेद संकेत यातायात नियमों (जैसे गति सीमा) और उपयोगी जानकारी को प्रदर्शित करते हैं।"
    }
  },
  "13": {
    es: {
      question: "¿De qué advierten las señales de tráfico de color naranja?",
      options: ["Condiciones permanentes", "Condiciones temporales y zonas de obras en autopistas", "Zonas escolares", "Cruces de ferrocarril"],
      explanation: "Las señales naranjas advierten sobre condiciones temporales de tráfico, usadas comúnmente en zonas de construcción y mantenimiento."
    },
    ps: {
      question: "نارنجي ترافیکي نښې چلوونکو ته د څه خبرداری ورکوي؟",
      options: ["دایمي حالات", "موقتي ترافیکي حالات او د سړک جوړونې کاري زونونه", "د ښوونځي زونونه", "د ریل پټلۍ کراسنګ"],
      explanation: "نارنجي نښې د سړک د موقتي کار او ساختماني زونونو خبرداری ورکوي."
    },
    pa: {
      question: "ਸੰਤਰੀ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕਿਸ ਚੀਜ਼ ਦੀ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ?",
      options: ["ਸਥਾਈ ਸੜਕ ਦੀਆਂ ਸਥਿਤੀਆਂ", "ਆਰਜ਼ੀ ਆਵਾਜਾਈ ਸਥਿਤੀਆਂ ਅਤੇ ਹਾਈਵੇਅ ਕੰਮ ਦੇ ਖੇਤਰ", "ਸਕੂਲ ਜ਼ੋਨ", "ਰੇਲਵੇ ਕਰਾਸਿੰਗ"],
      explanation: "ਸੰਤਰੀ ਚਿੰਨ੍ਹ ਨਿਰਮਾਣ ਕਾਰਜਾਂ ਅਤੇ ਆਰਜ਼ੀ ਸਥਿਤੀਆਂ ਦੀ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ।"
    },
    hi: {
      question: "नारंगी ट्रैफिक संकेत किस बात की चेतावनी देते हैं?",
      options: ["स्थायी सड़क स्थितियां", "अस्थायी यातायात स्थितियां और राजमार्ग निर्माण क्षेत्र", "स्कूल क्षेत्र", "रेलवे क्रॉसिंग"],
      explanation: "नारंगी संकेत सड़क निर्माण और रखरखाव परियोजनाओं की अस्थायी स्थितियों की चेतावनी देते हैं।"
    }
  },
  "14": {
    es: {
      question: "¿Qué indican las señales de tráfico verdes?",
      options: ["Parada requerida", "Advertencia de peligro", "Movimientos permitidos y guía de direcciones", "Servicios viales"],
      explanation: "Las señales verdes indican movimientos permitidos, direcciones y salidas de autopistas."
    },
    ps: {
      question: "شنې ترافیکي نښې څه ښيي؟",
      options: ["درېدل فرض دي", "د خطراتو خبرداری", "مجاز حرکتونه او د لارښوونو او لارې هدایت", "د سړک خدمتونه"],
      explanation: "شنې نښې د منزل لوري، وتلو لارو او اجازې لارښوونې ښيي."
    },
    pa: {
      question: "ਹਰੇ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕੀ ਦਰਸਾਉਂਦੇ ਹਨ?",
      options: ["ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ", "ਖ਼ਤਰੇ ਦੀ ਚੇਤਾਵਨੀ", "ਇਜਾਜ਼ਤ ਦਿੱਤੀਆਂ ਹਰਕਤਾਂ ਅਤੇ ਦਿਸ਼ਾਵਾਂ ਜਾਂ ਮਾਰਗਦਰਸ਼ਨ", "ਸੜਕ ਸੇਵਾਵਾਂ"],
      explanation: "ਹਰੇ ਚਿੰਨ੍ਹ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਹਰਕਤਾਂ, ਨਿਕਾਸ ਅਤੇ ਦਿਸ਼ਾ ਨਿਰਦੇਸ਼ਾਂ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ।"
    },
    hi: {
      question: "हरे रंग के ट्रैफिक संकेत क्या दर्शाते हैं?",
      options: ["रुकना अनिवार्य है", "खतरे की चेतावनी", "अनुमति प्राप्त गतिविधियाँ और दिशाएं", "सड़क सेवाएं"],
      explanation: "हरे संकेत अनुमत गतिविधियों, गंतव्य दिशाओं और निकास मार्गों का मार्गदर्शन करते हैं।"
    }
  },
  "15": {
    es: {
      question: "¿Qué muestran las señales de tráfico azules?",
      options: ["Regulaciones de tráfico", "Servicios viales e información para conductores", "Señales de advertencia", "Áreas recreativas"],
      explanation: "Las señales azules muestran servicios viales, como combustible, comida, alojamiento y hospitales."
    },
    ps: {
      question: "آبي ترافیکي نښې څه ښيي؟",
      options: ["ترافیکي مقررات", "د سړک خدمتونه او د موټر چلوونکو معلومات", "د خبرداري نښې", "تفریحي سیمې"],
      explanation: "آبي نښې د موټر چلوونکو لپاره خدمات لکه تېل، روغتون او استوګنځایونه ښيي."
    },
    pa: {
      question: "ਨੀਲੇ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕੀ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰਦੇ ਹਨ?",
      options: ["ਟ੍ਰੈਫਿਕ ਨਿਯਮ", "ਸੜਕ ਸੇਵਾਵਾਂ ਅਤੇ ਡਰਾਈਵਰ ਜਾਣਕਾਰੀ", "ਚੇਤਾਵਨੀ ਚਿੰਨ੍ਹ", "ਮਨੋਰੰਜਨ ਖੇਤਰ"],
      explanation: "ਨੀਲੇ ਚਿੰਨ੍ਹ ਗੈਸ, ਭੋਜਨ, ਰਿਹਾਇਸ਼ ਅਤੇ ਹਸਪਤਾਲ ਵਰਗੀਆਂ ਸੜਕ ਸੇਵਾਵਾਂ ਦਰਸਾਉਂਦੇ ਹਨ।"
    },
    hi: {
      question: "नीले रंग के ट्रैफिक संकेत क्या प्रदर्शित करते हैं?",
      options: ["यातायात नियम", "सड़क सेवाएं और चालक जानकारी", "चेतावनी संकेत", "मनोरंजन क्षेत्र"],
      explanation: "नीले संकेत सड़क सेवाओं जैसे पेट्रोल पंप, भोजन, होटल और अस्पताल की जानकारी देते हैं।"
    }
  },
  "16": {
    es: {
      question: "¿Qué indican las señales de tráfico marrones?",
      options: ["Zonas escolares", "Sitios de interés recreativo y cultural cercanos", "Zonas de construcción", "Cruces de ferrocarril"],
      explanation: "Las señales marrones indican sitios de interés recreativo, parques y lugares de interés cultural cercanos."
    },
    ps: {
      question: "نسواري (brown) ترافیکي نښې څه ښيي؟",
      options: ["د ښوونځي زونونه", "نږدې تفریحي او کلتوري لیدنې ځایونه", "د سړک کاري سیمې", "د ریل پټلۍ کراسنګ"],
      explanation: "نسواري نښې پارکونه او تاریخي یا تفریحي ځایونه په ګوته کوي."
    },
    pa: {
      question: "ਭੂਰੇ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕੀ ਦਰਸਾਉਂਦੇ ਹਨ?",
      options: ["ਸਕੂਲ ਜ਼ੋਨ", "ਨੇੜਲੇ ਮਨੋਰੰਜਨ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਦਿਲਚਸਪੀ ਵਾਲੇ ਸਥਾਨ", "ਨਿਰਮਾਣ ਖੇਤਰ", "ਰੇਲਵੇ ਕਰਾਸਿੰਗ"],
      explanation: "ਭੂਰੇ ਚਿੰਨ੍ਹ ਪਾਰਕਾਂ ਅਤੇ ਇਤਿਹਾਸਕ ਜਾਂ ਮਨੋਰੰਜਨ ਸਥਾਨਾਂ ਦੀ ਜਾਣਕਾਰੀ ਦਿੰਦੇ ਹਨ।"
    },
    hi: {
      question: "भूरे रंग के ट्रैफिक संकेत क्या दर्शाते हैं?",
      options: ["स्कूल क्षेत्र", "आस-पास के मनोरंजक और सांस्कृतिक स्थल", "निर्माण क्षेत्र", "रेलवे क्रॉसिंग"],
      explanation: "भूरे संकेत राष्ट्रीय उद्यानों, मनोरंजक और ऐतिहासिक सांस्कृतिक स्थलों को दर्शाते हैं।"
    }
  },
  "17": {
    es: {
      question: "¿De qué alerta a los conductores una señal de tráfico circular?",
      options: ["Parada requerida", "Próximo cruce de ferrocarril", "Ceda el paso", "Zona de no rebasar"],
      explanation: "Las señales circulares alertan a los conductores sobre la proximidad de un cruce de vías de ferrocarril."
    },
    ps: {
      question: "ګرده ترافیکي نښه چلوونکو ته د څه خبرداری ورکوي؟",
      options: ["درېدل لازمي دي", "مخکې د اورګاډي د پټلۍ کراسنګ", "د تګ حق ورکول", "د مخکې کېدو منع زون"],
      explanation: "ګردې نښې د ریل پټلۍ د راتلونکي کراسنګ خبرداری ورکوي."
    },
    pa: {
      question: "ਗੋਲ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਡਰਾਈਵਰਾਂ ਨੂੰ ਕਿਸ ਚੀਜ਼ ਬਾਰੇ ਸੁਚੇਤ ਕਰਦਾ ਹੈ?",
      options: ["ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ", "ਅੱਗੇ ਰੇਲਵੇ ਕਰਾਸਿੰਗ", "ਰਸਤਾ ਦਿਓ (Yield)", "ਕੋਈ ਓਵਰਟੇਕਿੰਗ ਜ਼ੋਨ ਨਹੀਂ"],
      explanation: "ਗੋਲ ਚਿੰਨ੍ਹ ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਰੇਲਵੇ ਕਰਾਸਿੰਗ ਬਾਰੇ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ।"
    },
    hi: {
      question: "गोल (वृत्ताकार) ट्रैफिक संकेत ड्राइवरों को किस बात की चेतावनी देता है?",
      options: ["रुकना अनिवार्य है", "आगे रेलवे क्रॉसिंग", "रास्ता दें (Yield)", "ओवरटेक न करें"],
      explanation: "गोल संकेत आगे आने वाले रेलवे क्रॉसिंग की अग्रिम चेतावनी देते हैं।"
    }
  },
  "18": {
    es: {
      question: "¿Qué advierte a los conductores una señal de tráfico de triángulo equilátero invertido?",
      options: ["Detenerse", "Reducir la velocidad al acercarse a la intersección y prepararse para parar (Ceda el paso)", "Ceder el paso solo al tráfico en sentido contrario", "Continuar con precaución"],
      explanation: "Un triángulo invertido significa CEDER EL PASO (YIELD): debe reducir la velocidad y detenerse si es necesario."
    },
    ps: {
      question: "درې کونجه ښکته نښه (triangle) موټر چلوونکي ته د څه خبرداری ورکوي؟",
      options: ["درېدل", "څلورلارې ته په نږدې کېدو سرعت کم کړئ او درېدو ته چمتو اوسئ (حق ورکړئ)", "یوازې مخامخ راتلونکو ته حق ورکړئ", "په احتیاط مخکې لاړ شئ"],
      explanation: "ښکته درې کونجه نښه د لاره ورکولو (Yield) نښه ده؛ سرعت کم کړئ او که اړتیا وي بشپړ ودریږئ."
    },
    pa: {
      question: "ਤਿਕੋਣਾ ਚਿੰਨ੍ਹ ਡਰਾਈਵਰਾਂ ਨੂੰ ਕੀ ਕਰਨ ਦੀ ਚੇਤਾਵਨੀ ਦਿੰਦਾ ਹੈ?",
      options: ["ਰੁਕੋ", "ਚੌਰਾਹੇ ਤੇ ਪਹੁੰਚਣ ਵੇਲੇ ਗਤੀ ਹੌਲੀ ਕਰੋ ਅਤੇ ਰੁਕਣ ਲਈ ਤਿਆਰ ਰਹੋ (ਰਸਤਾ ਦਿਓ)", "ਸਿਰਫ਼ ਸਾਹਮਣਿਓਂ ਆ ਰਹੇ ਵਾਹਨਾਂ ਨੂੰ ਰਸਤਾ ਦਿਓ", "ਸਾਵਧਾਨੀ ਨਾਲ ਅੱਗੇ ਵਧੋ"],
      explanation: "ਤਿਕੋਣੇ ਚਿੰਨ੍ਹ ਦਾ ਅਰਥ ਹੈ ਰਸਤਾ ਦਿਓ (YIELD); ਗਤੀ ਹੌਲੀ ਕਰੋ ਅਤੇ ਲੋੜ ਪੈਣ ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕੋ।"
    },
    hi: {
      question: "समबाहु त्रिकोणीय (उलटा त्रिकोण) संकेत चालकों को क्या करने की चेतावनी देता है?",
      options: ["रुकें", "चौराहे के पास धीमी गति करें और रुकने के लिए तैयार रहें (रास्ता दें / Yield)", "केवल सामने से आने वालों को रास्ता दें", "सावधानी से आगे बढ़ें"],
      explanation: "उलटे त्रिकोण का अर्थ 'रास्ता दें' (YIELD) होता है; गति धीमी करें और यदि आवश्यक हो तो रुकें।"
    }
  },
  "19": {
    es: {
      question: "¿Qué indican las señales de tráfico en forma de banderín (pennant)?",
      options: ["Zona escolar adelante", "Zona de no rebasar en el lado izquierdo", "Cruce de ferrocarril", "Construcción adelante"],
      explanation: "Las señales de banderín se colocan en el lado izquierdo de carreteras de doble sentido para marcar zonas donde está prohibido rebasar."
    },
    ps: {
      question: "د بیرغ (pennant) بڼه ترافیکي نښې څه ښيي؟",
      options: ["مخکې د ښوونځي زون", "په کیڼ اړخ کې د مخکې کېدو (سبقت) منع زون", "د ریل پټلۍ کراسنګ", "مخکې ساختماني کار"],
      explanation: "د بیرغ په څیر نښې د سړک په چپ اړخ لګول کیږي ترڅو د مخکې کیدو منع زون په ګوته کړي."
    },
    pa: {
      question: "ਝੰਡੇ (pennant) ਦੇ ਆਕਾਰ ਵਾਲੇ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕੀ ਦਰਸਾਉਂਦੇ ਹਨ?",
      options: ["ਅੱਗੇ ਸਕੂਲ ਜ਼ੋਨ", "ਖੱਬੇ ਪਾਸੇ ਨੋ-ਪਾਸਿੰਗ (ਓਵਰਟੇਕਿੰਗ ਮਨ੍ਹਾ) ਜ਼ੋਨ", "ਰੇਲਵੇ ਕਰਾਸਿੰਗ", "ਅੱਗੇ ਨਿਰਮਾਣ ਕਾਰਜ"],
      explanation: "ਇਹ ਚਿੰਨ੍ਹ ਸੜਕ ਦੇ ਖੱਬੇ ਪਾਸੇ ਲਗਾਏ ਜਾਂਦੇ ਹਨ ਅਤੇ ਓਵਰਟੇਕ ਕਰਨ ਦੀ ਮਨਾਹੀ ਦਰਸਾਉਂਦੇ ਹਨ।"
    },
    hi: {
      question: "पताका (Pennant) के आकार के ट्रैफिक संकेत क्या दर्शाते हैं?",
      options: ["आगे स्कूल क्षेत्र", "बाईं ओर नो पासिंग (ओवरटेक निषेध) ज़ोन", "रेलवे क्रॉसिंग", "आगे निर्माण कार्य"],
      explanation: "पताका के आकार का संकेत सड़क के बाईं ओर लगाया जाता है और यह 'नो पासिंग ज़ोन' को दर्शाता है।"
    }
  },
  "20": {
    es: {
      question: "¿De qué advierten las señales de tráfico en forma de diamante?",
      options: ["Parada obligatoria", "Próximas condiciones de la carretera y peligros", "Movimientos permitidos", "Servicios viales"],
      explanation: "Las señales con forma de diamante advierten a los conductores sobre condiciones especiales o peligros en el camino."
    },
    ps: {
      question: "د الماس (diamond) بڼه ترافیکي نښې د څه خبرداری ورکوي؟",
      options: ["درېدل فرض دي", "د سړک مخکني حالات او خطرونه", "مجاز حرکتونه", "د سړک خدمتونه"],
      explanation: "د الماس ډوله نښې چلوونکو ته د مخکینیو خطرونو او سړک د حالاتو خبرداری ورکوي."
    },
    pa: {
      question: "ਹੀਰੇ (diamond) ਦੇ ਆਕਾਰ ਵਾਲੇ ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕਿਸ ਚੀਜ਼ ਦੀ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ?",
      options: ["ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ", "ਸੜਕ ਦੀਆਂ ਅਗਲੀਆਂ ਸਥਿਤੀਆਂ ਅਤੇ ਖ਼ਤਰੇ", "ਇਜਾਜ਼ਤ ਦਿੱਤੀਆਂ ਹਰਕਤਾਂ", "ਸੜਕ ਸੇਵਾਵਾਂ"],
      explanation: "ਹੀਰੇ ਦੇ ਆਕਾਰ ਵਾਲੇ ਚਿੰਨ੍ਹ ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਖ਼ਤਰਿਆਂ ਅਤੇ ਸੜਕ ਦੀਆਂ ਸਥਿਤੀਆਂ ਦੀ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ।"
    },
    hi: {
      question: "हीरे (डायमंड) के आकार के ट्रैफिक संकेत किस बात की चेतावनी देते हैं?",
      options: ["रुकना अनिवार्य है", "सड़क की आगे की स्थिति और खतरे", "अनुमति प्राप्त गतिविधियाँ", "सड़क सेवाएं"],
      explanation: "डायमंड के आकार के संकेत आगे आने वाले संभावित खतरों और सड़क की स्थिति की चेतावनी देते हैं।"
    }
  },
  "21": {
    es: {
      question: "¿De qué advierten las señales de tráfico de cinco lados (pentágono)?",
      options: ["Cruces de ferrocarril", "Zonas escolares donde los niños pueden cruzar", "Zonas de construcción", "Zonas de no rebasar"],
      explanation: "Las señales de cinco lados se reservan exclusivamente para advertir sobre zonas escolares y cruces escolares."
    },
    ps: {
      question: "پنځه کونجه (pentagon) ترافیکي نښې د څه خبرداری ورکوي؟",
      options: ["د اورګاډي پټلۍ", "د ښوونځي ساحې چیرې چې ماشومان له سړک څخه تیریږي", "ساختماني زونونه", "د مخکې کیدو منع زونونه"],
      explanation: "پنځه کونجه نښې یوازې د ښوونځیو او د ماشومانو د تېرېدو ځایونو لپاره ځانګړې شوې دي."
    },
    pa: {
      question: "ਪੰਜ-ਪਾਸੜ (ਪੈਂਟਾਗਨ) ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਕਿਸ ਚੀਜ਼ ਬਾਰੇ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ?",
      options: ["ਰੇਲਵੇ ਕਰਾਸਿੰਗ", "ਸਕੂਲ ਖੇਤਰ ਜਿੱਥੇ ਬੱਚੇ ਸੜਕ ਪਾਰ ਕਰ ਸਕਦੇ ਹਨ", "ਨਿਰਮਾਣ ਜ਼ੋਨ", "ਨੋ ਪਾਸਿੰਗ ਜ਼ੋਨ"],
      explanation: "ਪੰਜ-ਭੁਜੀ ਚਿੰਨ੍ਹ ਸਕੂਲ ਖੇਤਰਾਂ ਅਤੇ ਪੈਦਲ ਬੱਚਿਆਂ ਦੇ ਲੰਘਣ ਵਾਲੇ ਖੇਤਰਾਂ ਨੂੰ ਦਰਸਾਉਂਦੇ ਹਨ।"
    },
    hi: {
      question: "पांच भुजाओं वाले (पंचकोण) ट्रैफिक संकेत किस बारे में चेतावनी देते हैं?",
      options: ["रेलवे क्रॉसिंग", "स्कूल क्षेत्र जहां बच्चे सड़क पार कर सकते हैं", "निर्माण क्षेत्र", "नो पासिंग ज़ोन"],
      explanation: "पंचकोणीय संकेत विशेष रूप से स्कूल क्षेत्रों और बच्चों के पैदल क्रॉसिंग के लिए आरक्षित होते हैं।"
    }
  },
  "22": {
    es: {
      question: "¿Qué significan las señales de tráfico de ocho lados (octágono)?",
      options: ["Ceda el paso", "Deténgase por completo y ceda el derecho de paso apropiado", "Prohibido el paso", "Reduzca la velocidad"],
      explanation: "Una señal de ocho lados siempre significa ALTO (STOP) obligatorio antes de entrar a la intersección."
    },
    ps: {
      question: "اته کونجه (octagon) ترافیکي نښې څه معنی لري؟",
      options: ["حق ورکړئ", "بشپړ ودریږئ او د تګ مناسب حق ورکړئ (STOP)", "د ننوتلو منع", "سرعت کم کړئ"],
      explanation: "اته کونجه نښه تل د بشپړ درېدو (STOP) معنی لري."
    },
    pa: {
      question: "ਅੱਠ-ਪਾਸੜ (ਅੱਠਭੁਜ) ਟ੍ਰੈਫਿਕ ਚਿੰਨ੍ਹ ਦਾ ਕੀ ਅਰਥ ਹੈ?",
      options: ["ਰਸਤਾ ਦਿਓ", "ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕੋ ਅਤੇ ਉਚਿਤ ਰਸਤਾ ਦਿਓ (STOP)", "ਕੋਈ ਦਾਖਲਾ ਨਹੀਂ", "ਗਤੀ ਹੌਲੀ ਕਰੋ"],
      explanation: "ਅੱਠ-ਪਾਸੜ ਲਾਲ ਚਿੰਨ੍ਹ ਹਮੇਸ਼ਾ ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕਣ (STOP) ਦਾ ਆਦੇਸ਼ ਦਿੰਦਾ ਹੈ।"
    },
    hi: {
      question: "आठ भुजाओं वाले (अष्टकोण) ट्रैफिक संकेत का क्या अर्थ है?",
      options: ["रास्ता दें", "पूरी तरह रुकें और उचित रास्ता दें (STOP)", "प्रवेश निषेध", "धीमी गति करें"],
      explanation: "अष्टकोणीय संकेत हमेशा पूर्ण विराम (STOP) लेने का कानूनी आदेश देता है।"
    }
  },
  "23": {
    es: {
      question: "¿Qué significa una luz verde del semáforo?",
      options: ["Detenerse", "Avanzar: tiene el derecho de paso si la intersección está despejada", "Reducir la velocidad", "Ceder el paso"],
      explanation: "Una luz verde significa avanzar; tiene derecho de paso siempre que la intersección esté libre de peatones y vehículos."
    },
    ps: {
      question: "شین څراغ څه معنی لري؟",
      options: ["درېدل", "لاړ شئ: که څلورلارې خلاصه وي تاسو د تګ حق لرئ", "سرعت کم کړئ", "لاره ورکړئ"],
      explanation: "شین څراغ د تګ معنی لري؛ که لاره خلاصه وي تاسو کولی شئ په حرکت پیل وکړئ."
    },
    pa: {
      question: "ਹਰੀ ਬੱਤੀ ਦਾ ਕੀ ਅਰਥ ਹੈ?",
      options: ["ਰੁਕੋ", "ਚੱਲੋ - ਜੇਕਰ ਚੌਰਾਹਾ ਸਾਫ਼ ਹੈ ਤਾਂ ਤੁਹਾਨੂੰ ਰਸਤੇ ਦਾ ਅਧਿਕਾਰ ਹੈ", "ਗਤੀ ਹੌਲੀ ਕਰੋ", "ਰਸਤਾ ਦਿਓ"],
      explanation: "ਹਰੀ ਬੱਤੀ ਦਾ ਮਤਲਬ ਚੱਲਣਾ ਹੈ, ਬਸ਼ਰਤੇ ਚੌਰਾਹਾ ਸਾਫ਼ ਹੋਵੇ।"
    },
    hi: {
      question: "हरी बत्ती का क्या अर्थ है?",
      options: ["रुकें", "आगे बढ़ें - यदि चौराहा साफ है तो आपको निकलने का अधिकार है", "धीमी गति करें", "रास्ता दें"],
      explanation: "हरी बत्ती का अर्थ है आगे बढ़ना; चौराहा खाली होने पर आप आगे बढ़ सकते हैं।"
    }
  },
  "24": {
    es: {
      question: "¿Qué significa una luz amarilla fija?",
      options: ["Acelerar", "La luz verde ha terminado y el semáforo está a punto de cambiar a rojo", "Detenerse bruscamente", "Ceder el paso únicamente"],
      explanation: "La luz amarilla constante advierte que la luz verde ha concluido y el semáforo cambiará pronto a rojo."
    },
    ps: {
      question: "ثابت ژېړ څراغ څه معنی لري؟",
      options: ["ګړندی لاړ شئ", "شین څراغ پای ته ورسید او سیګنال سور کیدونکی دی", "سمدستي ودریږئ", "یوازې حق ورکړئ"],
      explanation: "ژېړ څراغ خبرداری ورکوي چې شین څراغ پای ته ورسید او ډیر ژر به سور شي؛ په خوندي ډول د درېدو هڅه وکړئ."
    },
    pa: {
      question: "ਲਗਾਤਾਰ ਪੀਲੀ ਬੱਤੀ ਦਾ ਕੀ ਅਰਥ ਹੈ?",
      options: ["ਤੇਜ਼ ਗੱਡੀ ਚਲਾਓ", "ਹਰੀ ਬੱਤੀ ਖਤਮ ਹੋ ਗਈ ਹੈ ਅਤੇ ਸਿਗਨਲ ਲਾਲ ਹੋਣ ਵਾਲਾ ਹੈ", "ਤੁਰੰਤ ਬ੍ਰੇਕ ਲਗਾਓ", "ਰਸਤਾ ਦਿਓ"],
      explanation: "ਪੀਲੀ ਬੱਤੀ ਚੇਤਾਵਨੀ ਦਿੰਦੀ ਹੈ ਕਿ ਹਰੀ ਬੱਤੀ ਖਤਮ ਹੋ ਚੁੱਕੀ ਹੈ ਅਤੇ ਸਿਗਨਲ ਲਾਲ ਹੋਣ ਵਾਲਾ ਹੈ।"
    },
    hi: {
      question: "स्थिर पीली बत्ती का क्या अर्थ है?",
      options: ["तेजी से निकलें", "हरी बत्ती समाप्त हो गई है और सिग्नल लाल होने वाला है", "तुरंत रुकें", "केवल रास्ता दें"],
      explanation: "पीली बत्ती चेतावनी देती है कि हरी बत्ती समाप्त हो गई है और सिग्नल लाल होने वाला है।"
    }
  },
  "25": {
    es: {
      question: "¿Qué significa una luz roja del semáforo?",
      options: ["Reducir velocidad", "Detenerse por completo: el tráfico de otras direcciones tiene el derecho de paso", "Continuar con precaución", "Ceder el paso sin parar"],
      explanation: "Una luz roja significa detenerse por completo antes de la línea de parada o cruce peatonal."
    },
    ps: {
      question: "سور څراغ څه معنی لري؟",
      options: ["سرعت کم کړئ", "بشپړ ودریږئ: له نورو لورو راتلونکی ترافیک د تګ لومړیتوب لري", "په احتیاط دوام ورکړئ", "پرته له درېدو لاره ورکړئ"],
      explanation: "سور څراغ د بشپړ درېدو حکم کوي؛ تر څو چې شین نه شي حرکت مه کوئ."
    },
    pa: {
      question: "ਲਾਲ ਬੱਤੀ ਦਾ ਕੀ ਅਰਥ ਹੈ?",
      options: ["ਗਤੀ ਘਟਾਓ", "ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕੋ - ਦੂਜੀਆਂ ਦਿਸ਼ਾਵਾਂ ਤੋਂ ਆਉਣ ਵਾਲੇ ਟ੍ਰੈਫਿਕ ਨੂੰ ਪਹਿਲ ਹੈ", "ਸਾਵਧਾਨੀ ਨਾਲ ਅੱਗੇ ਵਧੋ", "ਰਸਤਾ ਦਿਓ"],
      explanation: "ਲਾਲ ਬੱਤੀ ਦਾ ਅਰਥ ਹੈ ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕਣਾ।"
    },
    hi: {
      question: "लाल बत्ती का क्या अर्थ है?",
      options: ["गति धीमी करें", "पूर्ण विराम लें - अन्य दिशाओं के यातायात को प्राथमिकता है", "सावधानी से आगे बढ़ें", "रास्ता दें"],
      explanation: "लाल बत्ती का अर्थ है स्टॉप लाइन से पहले पूरी तरह रुकना।"
    }
  },
  "26": {
    es: {
      question: "¿Cuándo se puede girar a la derecha con luz roja en Indiana?",
      options: ["Siempre", "Nunca", "Después de detenerse por completo y ceder el paso, si no hay señal que lo prohíba", "Solo de noche"],
      explanation: "Se puede girar a la derecha en rojo tras parar completamente y verificar peatones y vehículos, salvo señal de prohibición."
    },
    ps: {
      question: "په انډیانا کې کله کولی شئ په سور څراغ ښي لاس ته وګرځئ؟",
      options: ["تل", "هیڅکله نه", "وروسته له بشپړ درېدو او د ترافیکو له چک کولو، که چیرې په نښه منع نه وي", "یوازې د شپې لخوا"],
      explanation: "په سور څراغ ښي لور ته تاوېدل جواز لري خو لومړی باید بشپړ ودریږئ او لار وګورئ که د 'No Turn on Red' نښه نه وي."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਲਾਲ ਬੱਤੀ ਤੇ ਸੱਜੇ ਮੁੜਨ ਦੀ ਇਜਾਜ਼ਤ ਕਦੋਂ ਹੈ?",
      options: ["ਹਮੇਸ਼ਾ", "ਕਦੇ ਨਹੀਂ", "ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕਣ ਅਤੇ ਟ੍ਰੈਫਿਕ ਦੀ ਜਾਂਚ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਜੇਕਰ ਕੋਈ ਮਨਾਹੀ ਦਾ ਬੋਰਡ ਨਾ ਹੋਵੇ", "ਸਿਰਫ਼ ਰਾਤ ਨੂੰ"],
      explanation: "ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕਣ ਅਤੇ ਸੁਰੱਖਿਅਤ ਹੋਣ ਤੇ ਸੱਜੇ ਮੁੜਿਆ ਜਾ ਸਕਦਾ ਹੈ ਜੇਕਰ 'No Turn on Red' ਨਾ ਲਿਖਿਆ ਹੋਵੇ।"
    },
    hi: {
      question: "इंडियाना में लाल बत्ती पर दाएं मुड़ने की अनुमति कब है?",
      options: ["हमेशा", "कभी नहीं", "पूरी तरह रुकने और यातायात की जांच करने के बाद, यदि किसी संकेत द्वारा निषिद्ध न हो", "केवल रात में"],
      explanation: "लाल बत्ती पर पूरी तरह रुकने और रास्ता देने के बाद दाएं मुड़ सकते हैं, बशर्ते 'No Turn on Red' का बोर्ड न लगा हो।"
    }
  },
  "27": {
    es: {
      question: "¿Cuándo se puede girar a la izquierda con luz roja en Indiana?",
      options: ["Nunca", "Siempre", "Al girar desde una calle de un solo sentido hacia otra calle de un solo sentido tras parar", "Solo de noche"],
      explanation: "Se permite girar a la izquierda con luz roja únicamente desde una calle de un sentido hacia otra de un sentido tras parar completamente."
    },
    ps: {
      question: "په سور څراغ چپ اړخ ته تاویدل کله جواز لري؟",
      options: ["هیڅکله نه", "تل", "کله چې له یو طرفه سړک څخه بل یو طرفه سړک ته تاویږئ، وروسته له پوره درېدو", "یوازې د شپې"],
      explanation: "یوازې له یوه یو-طرفه سړک څخه بل یو-طرفه سړک ته له پوره تم کېدو وروسته چپ تاوېدل کیدی شي."
    },
    pa: {
      question: "ਲਾਲ ਬੱਤੀ ਤੇ ਖੱਬੇ ਮੁੜਨ ਦੀ ਇਜਾਜ਼ਤ ਕਦੋਂ ਹੁੰਦੀ ਹੈ?",
      options: ["ਕਦੇ ਨਹੀਂ", "ਹਮੇਸ਼ਾ", "ਇੱਕ-ਤਰਫ਼ਾ ਸੜਕ ਤੋਂ ਦੂਜੀ ਇੱਕ-ਤਰਫ਼ਾ ਸੜਕ ਤੇ ਮੁੜਨ ਵੇਲੇ, ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕਣ ਤੋਂ ਬਾਅਦ", "ਸਿਰਫ਼ ਰਾਤ ਨੂੰ"],
      explanation: "ਸਿਰਫ਼ ਇੱਕ-ਤਰਫ਼ਾ ਸੜਕ ਤੋਂ ਦੂਜੀ ਇੱਕ-ਤਰਫ਼ਾ ਸੜਕ ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕਣ ਤੋਂ ਬਾਅਦ ਖੱਬੇ ਮੁੜਿਆ ਜਾ ਸਕਦਾ ਹੈ।"
    },
    hi: {
      question: "लाल बत्ती पर बाएं मुड़ने की अनुमति कब होती है?",
      options: ["कभी नहीं", "हमेशा", "एकतरफा सड़क से दूसरी एकतरफा सड़क पर मुड़ते समय, पूरी तरह रुकने के बाद", "केवल रात में"],
      explanation: "पूरी तरह रुकने के बाद केवल एकतरफा सड़क से दूसरी एकतरफा सड़क पर बाएं मुड़ने की अनुमति होती है।"
    }
  },
  "28": {
    es: {
      question: "¿Qué significa una luz amarilla intermitente en una intersección?",
      options: ["Detenerse inmediatamente", "Reducir la velocidad y proceder con precaución", "Ceder el paso a todo el tráfico", "Avanzar a velocidad normal"],
      explanation: "Una luz amarilla intermitente indica que debe reducir la velocidad y avanzar con precaución."
    },
    ps: {
      question: "په څلورلارې کې ځلېدونکی (flashing) ژېړ څراغ څه معنی لري؟",
      options: ["سمدستي ودریږئ", "سرعت کم کړئ او په احتیاط مخکې لاړ شئ", "ټولو ته لاره ورکړئ", "په عادي سرعت لاړ شئ"],
      explanation: "ځلېدونکی ژېړ څراغ د سرعت کمولو او په احتیاط سره د تېرېدو امر کوي."
    },
    pa: {
      question: "ਚੌਰਾਹੇ ਤੇ ਫਲੈਸ਼ਿੰਗ (ਟਿਮਟਿਮਾਉਂਦੀ) ਪੀਲੀ ਬੱਤੀ ਦਾ ਕੀ ਅਰਥ ਹੈ?",
      options: ["ਤੁਰੰਤ ਰੁਕੋ", "ਗਤੀ ਹੌਲੀ ਕਰੋ ਅਤੇ ਸਾਵਧਾਨੀ ਵਰਤੋ", "ਸਾਰੇ ਟ੍ਰੈਫਿਕ ਨੂੰ ਰਸਤਾ ਦਿਓ", "ਆਮ ਗਤੀ ਤੇ ਚੱਲੋ"],
      explanation: "ਫਲੈਸ਼ਿੰਗ ਪੀਲੀ ਬੱਤੀ ਦਾ ਅਰਥ ਹੈ ਗਤੀ ਹੌਲੀ ਕਰੋ ਅਤੇ ਸਾਵਧਾਨੀ ਨਾਲ ਲੰਘੋ।"
    },
    hi: {
      question: "चौराहे पर चमकती (Flashing) पीली बत्ती का क्या अर्थ है?",
      options: ["तुरंत रुकें", "धीमी गति करें और सावधानी बरतें", "सभी को रास्ता दें", "सामान्य गति से आगे बढ़ें"],
      explanation: "चमकती पीली बत्ती का मतलब है कि गति धीमी करें और सावधानी से आगे बढ़ें।"
    }
  },
  "29": {
    es: {
      question: "¿Qué significa una luz roja intermitente en una intersección?",
      options: ["Reducir velocidad", "Equivale a una señal de alto: detenerse por completo", "Ceder el paso sin parar", "Avanzar con precaución"],
      explanation: "Una luz roja intermitente equivale exactamente a una señal de ALTO (STOP)."
    },
    ps: {
      question: "په څلورلارې کې ځلېدونکی (flashing) سور څراغ څه معنی لري؟",
      options: ["سرعت کم کړئ", "د STOP نښې معادل دی: بشپړ ودریږئ", "حق ورکړئ", "په احتیاط لاړ شئ"],
      explanation: "ځلېدونکی سور څراغ کټ مټ لکه د درېدو (STOP) نښه ده؛ لومړی بشپړ ودریږئ بیا لاړ شئ."
    },
    pa: {
      question: "ਚੌਰਾਹੇ ਤੇ ਫਲੈਸ਼ਿੰਗ ਲਾਲ ਬੱਤੀ ਦਾ ਕੀ ਅਰਥ ਹੈ?",
      options: ["ਗਤੀ ਹੌਲੀ ਕਰੋ", "ਸਟਾਪ ਸਾਈਨ ਦੇ ਬਰਾਬਰ - ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕੋ", "ਰਸਤਾ ਦਿਓ", "ਸਾਵਧਾਨੀ ਨਾਲ ਅੱਗੇ ਵਧੋ"],
      explanation: "ਫਲੈਸ਼ਿੰਗ ਲਾਲ ਬੱਤੀ ਸਟਾਪ ਸਾਈਨ (STOP sign) ਦੇ ਬਰਾਬਰ ਹੁੰਦੀ ਹੈ; ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ।"
    },
    hi: {
      question: "चौराहे पर चमकती (Flashing) लाल बत्ती का क्या अर्थ है?",
      options: ["धीमी गति करें", "स्टॉप साइन के बराबर - पूरी तरह रुकें", "रास्ता दें", "सावधानी से आगे बढ़ें"],
      explanation: "चमकती लाल बत्ती एक स्टॉप साइन के बराबर होती है; पूर्ण विराम लेना आवश्यक है।"
    }
  },
  "30": {
    es: {
      question: "¿Cuál es la velocidad máxima para vehículos de pasajeros en autopistas interestatales rurales en Indiana?",
      options: ["55 mph", "60 mph", "65 mph", "70 mph"],
      explanation: "Los vehículos de pasajeros no pueden superar las 70 mph en autopistas interestatales rurales."
    },
    ps: {
      question: "په کلیوالي لویو لارو (rural interstate) کې د سپرلۍ موټرو اعظمي سرعت څومره دی؟",
      options: ["۵۵ مایل", "۶۰ مایل", "۶۵ مایل", "۷۰ مایل په ساعت کې"],
      explanation: "په کلیوالي لویو لارو کې د سپرلۍ موټرو لپاره قانوني سرعت تر ۷۰ مایل په ساعت پورې دی."
    },
    pa: {
      question: "ਪੇਂਡੂ ਇੰਟਰਸਟੇਟ ਹਾਈਵੇਅ ਤੇ ਯਾਤਰੀ ਵਾਹਨਾਂ ਲਈ ਵੱਧ ਤੋਂ ਵੱਧ ਗਤੀ ਸੀਮਾ ਕੀ ਹੈ?",
      options: ["55 mph", "60 mph", "65 mph", "70 mph"],
      explanation: "ਪੇਂਡੂ ਇੰਟਰਸਟੇਟ ਹਾਈਵੇਅ ਤੇ ਯਾਤਰੀ ਕਾਰਾਂ ਲਈ ਅਧਿਕਤਮ ਗਤੀ 70 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਹੈ।"
    },
    hi: {
      question: "इंडियाना में ग्रामीण इंटरस्टेट राजमार्गों पर यात्री वाहनों के लिए अधिकतम गति सीमा क्या है?",
      options: ["55 mph", "60 mph", "65 mph", "70 mph"],
      explanation: "ग्रामीण इंटरस्टेट हाईवे पर यात्री वाहनों के लिए अधिकतम गति सीमा 70 मील प्रति घंटा है।"
    }
  },
  "31": {
    es: {
      question: "¿Cuál es el límite de velocidad para camiones de más de 26,000 libras en interestatales rurales?",
      options: ["55 mph", "60 mph", "65 mph", "70 mph"],
      explanation: "Los camiones pesados con peso bruto mayor a 26,000 libras tienen un límite máximo de 65 mph."
    },
    ps: {
      question: "په کلیوالي لویو لارو کې د هغو لاریو سرعت څومره دی چې وزن یې له ۲۶۰۰۰ پونډو زیات دی؟",
      options: ["۵۵ مایل", "۶۰ مایل", "۶۵ مایل په ساعت", "۷۰ مایل"],
      explanation: "درنې لارۍ چې وزن یې له ۲۶ زره پونډو زیات وي تر ۶۵ مایل پورې سرعت کولی شي."
    },
    pa: {
      question: "ਪੇਂਡੂ ਇੰਟਰਸਟੇਟ ਹਾਈਵੇਅ ਤੇ 26,000 ਪੌਂਡ ਤੋਂ ਵੱਧ ਦੇ ਟਰੱਕਾਂ ਲਈ ਗਤੀ ਸੀਮਾ ਕੀ ਹੈ?",
      options: ["55 mph", "60 mph", "65 mph", "70 mph"],
      explanation: "ਵੱਡੇ ਟਰੱਕਾਂ ਲਈ ਅਧਿਕਤਮ ਗਤੀ ਸੀਮਾ 65 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਹੈ।"
    },
    hi: {
      question: "ग्रामीण इंटरस्टेट पर 26,000 पाउंड से अधिक वजन वाले ट्रकों के लिए गति सीमा क्या है?",
      options: ["55 mph", "60 mph", "65 mph", "70 mph"],
      explanation: "26,000 पाउंड से अधिक वजन वाले ट्रकों के लिए अधिकतम गति सीमा 65 मील प्रति घंटा है।"
    }
  },
  "32": {
    es: {
      question: "¿Cuál es el límite de velocidad en carreteras estatales divididas rurales?",
      options: ["50 mph", "55 mph", "60 mph", "65 mph"],
      explanation: "En carreteras estatales rurales divididas, el límite máximo es de 60 mph."
    },
    ps: {
      question: "په کلیوالي ویشل شویو دولتي لویو لارو (divided highways) کې د سرعت حد څومره دی؟",
      options: ["۵۰ مایل", "۵۵ مایل", "۶۰ مایل په ساعت", "۶۵ مایل"],
      explanation: "په کلیوالي ویشل شویو لویو لارو کې د سرعت حد ۶۰ مایل په ساعت کې دی."
    },
    pa: {
      question: "ਪੇਂਡੂ ਵੰਡੀਆਂ ਹੋਈਆਂ (divided) ਸਟੇਟ ਹਾਈਵੇਅ ਤੇ ਗਤੀ ਸੀਮਾ ਕੀ ਹੈ?",
      options: ["50 mph", "55 mph", "60 mph", "65 mph"],
      explanation: "ਪੇਂਡੂ ਵੰਡੀਆਂ ਸਟੇਟ ਸੜਕਾਂ ਤੇ ਅਧਿਕਤਮ ਗਤੀ 60 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਹੈ।"
    },
    hi: {
      question: "ग्रामीण विभाजित राज्य राजमार्गों पर गति सीमा क्या है?",
      options: ["50 mph", "55 mph", "60 mph", "65 mph"],
      explanation: "ग्रामीण विभाजित राजमार्गों पर अधिकतम गति सीमा 60 मील प्रति घंटा है।"
    }
  },
  "33": {
    es: {
      question: "¿Cuál es el límite de velocidad en autopistas interestatales urbanas en Indiana?",
      options: ["50 mph", "55 mph", "60 mph", "65 mph"],
      explanation: "En autopistas interestatales urbanas, la velocidad máxima es de 55 mph."
    },
    ps: {
      question: "په ښاري لویو لارو (urban interstate) کې د سرعت حد څومره دی؟",
      options: ["۵۰ مایل", "۵۵ مایل په ساعت", "۶۰ مایل", "۶۵ مایل"],
      explanation: "په ښاري لویو لارو کې اعظمي سرعت ۵۵ مایل په ساعت کې دی."
    },
    pa: {
      question: "ਸ਼ਹਿਰੀ ਇੰਟਰਸਟੇਟ ਹਾਈਵੇਅ ਤੇ ਗਤੀ ਸੀਮਾ ਕੀ ਹੈ?",
      options: ["50 mph", "55 mph", "60 mph", "65 mph"],
      explanation: "ਸ਼ਹਿਰੀ ਹਾਈਵੇਅ ਤੇ ਗਤੀ ਸੀਮਾ 55 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਹੈ।"
    },
    hi: {
      question: "शहरी इंटरस्टेट राजमार्गों पर गति सीमा क्या है?",
      options: ["50 mph", "55 mph", "60 mph", "65 mph"],
      explanation: "शहरी इंटरस्टेट पर अधिकतम गति सीमा 55 मील प्रति घंटा है।"
    }
  },
  "34": {
    es: {
      question: "¿Cuál es el límite de velocidad en la mayoría de las áreas residenciales urbanas?",
      options: ["20 mph", "25 mph", "30 mph", "35 mph"],
      explanation: "En la mayoría de las zonas residenciales urbanas, el límite es de 30 mph."
    },
    ps: {
      question: "په ډیرو ښاري استوګنیزو (residential) سیمو کې د سرعت حد څومره دی؟",
      options: ["۲۰ مایل", "۲۵ مایل", "۳۰ مایل په ساعت", "۳۵ مایل"],
      explanation: "په ښاري استوګنیزو کوڅو او سیمو کې د سرعت قانوني حد ۳۰ مایل په ساعت دی."
    },
    pa: {
      question: "ਸ਼ਹਿਰੀ ਰਿਹਾਇਸ਼ੀ ਖੇਤਰਾਂ ਵਿੱਚ ਆਮ ਤੌਰ ਤੇ ਗਤੀ ਸੀਮਾ ਕੀ ਹੁੰਦੀ ਹੈ?",
      options: ["20 mph", "25 mph", "30 mph", "35 mph"],
      explanation: "ਰਿਹਾਇਸ਼ੀ ਖੇਤਰਾਂ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ ਗਤੀ 30 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਹੁੰਦੀ ਹੈ।"
    },
    hi: {
      question: "अधिकांश शहरी आवासीय क्षेत्रों में गति सीमा क्या होती है?",
      options: ["20 mph", "25 mph", "30 mph", "35 mph"],
      explanation: "अधिकांश शहरी आवासीय क्षेत्रों में अधिकतम गति 30 मील प्रति घंटा होती है।"
    }
  },
  "35": {
    es: {
      question: "¿Cuál es el límite de velocidad en callejones (alleys)?",
      options: ["10 mph", "15 mph", "20 mph", "25 mph"],
      explanation: "En callejones, los vehículos no pueden exceder las 15 mph."
    },
    ps: {
      question: "په تنګو کوڅو (alleys) کې د سرعت حد څومره دی؟",
      options: ["۱۰ مایل", "۱۵ مایل په ساعت", "۲۰ مایل", "۲۵ مایل"],
      explanation: "په تنګو کوڅو کې د موټر اعظمي سرعت ۱۵ مایل په ساعت کې دی."
    },
    pa: {
      question: "ਤੰਗ ਗਲੀਆਂ (alleys) ਵਿੱਚ ਸਪੀਡ ਸੀਮਾ ਕੀ ਹੈ?",
      options: ["10 mph", "15 mph", "20 mph", "25 mph"],
      explanation: "ਗਲੀਆਂ ਵਿੱਚ ਗਤੀ ਸੀਮਾ 15 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਹੁੰਦੀ ਹੈ।"
    },
    hi: {
      question: "गलियों (Alleys) में गति सीमा क्या होती है?",
      options: ["10 mph", "15 mph", "20 mph", "25 mph"],
      explanation: "गलियों में वाहनों की अधिकतम गति 15 मील प्रति घंटा होती है।"
    }
  },
  "36": {
    es: {
      question: "¿Cuál es la velocidad máxima de un autobús escolar cuando no circula por autopistas?",
      options: ["30 mph", "35 mph", "40 mph", "45 mph"],
      explanation: "Fuera de autopistas o carreteras estatales, la velocidad máxima de un autobús escolar es de 40 mph."
    },
    ps: {
      question: "کله چې د ښوونځي بس په لویه لار نه وي، اعظمي سرعت یې څومره دی؟",
      options: ["۳۰ مایل", "۳۵ مایل", "۴۰ مایل په ساعت", "۴۵ مایل"],
      explanation: "د ښوونځي بس کله چې په لویو لارو نه وي اعظمي سرعت یې ۴۰ مایل په ساعت دی."
    },
    pa: {
      question: "ਜਦੋਂ ਸਕੂਲ ਬੱਸ ਹਾਈਵੇਅ ਤੇ ਨਾ ਹੋਵੇ ਤਾਂ ਉਸਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਗਤੀ ਕੀ ਹੁੰਦੀ ਹੈ?",
      options: ["30 mph", "35 mph", "40 mph", "45 mph"],
      explanation: "ਸਕੂਲ ਬੱਸ ਦੀ ਆਮ ਸੜਕਾਂ ਤੇ ਵੱਧ ਤੋਂ ਵੱਧ ਗਤੀ 40 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਹੁੰਦੀ ਹੈ।"
    },
    hi: {
      question: "जब स्कूल बस हाईवे पर न हो तो उसकी अधिकतम गति सीमा क्या होती है?",
      options: ["30 mph", "35 mph", "40 mph", "45 mph"],
      explanation: "राजमार्गों के अलावा अन्य सड़कों पर स्कूल बस की अधिकतम गति 40 मील प्रति घंटा होती है।"
    }
  },
  "37": {
    es: {
      question: "¿Cuál es la velocidad máxima para autobuses escolares en una autopista interestatal?",
      options: ["50 mph", "55 mph", "60 mph", "65 mph"],
      explanation: "En autopistas interestatales, el límite máximo para autobuses escolares es de 60 mph."
    },
    ps: {
      question: "په لویه لار (interstate) کې د ښوونځي بس اعظمي سرعت څومره دی؟",
      options: ["۵۰ مایل", "۵۵ مایل", "۶۰ مایل په ساعت", "۶۵ مایل"],
      explanation: "په لویه لار کې د ښوونځي بس لپاره اعظمي سرعت ۶۰ مایل په ساعت کې دی."
    },
    pa: {
      question: "ਇੰਟਰਸਟੇਟ ਹਾਈਵੇਅ ਤੇ ਸਕੂਲ ਬੱਸਾਂ ਲਈ ਅਧਿਕਤਮ ਗਤੀ ਕੀ ਹੈ?",
      options: ["50 mph", "55 mph", "60 mph", "65 mph"],
      explanation: "ਇੰਟਰਸਟੇਟ ਤੇ ਸਕੂਲ ਬੱਸ ਲਈ ਅਧਿਕਤਮ ਗਤੀ 60 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਹੈ।"
    },
    hi: {
      question: "इंटरस्टेट हाईवे पर स्कूल बसों के लिए अधिकतम गति सीमा क्या है?",
      options: ["50 mph", "55 mph", "60 mph", "65 mph"],
      explanation: "इंटरस्टेट हाईवे पर स्कूल बस की अधिकतम गति सीमा 60 मील प्रति घंटा होती है।"
    }
  },
  "38": {
    es: {
      question: "¿Cuándo deben los conductores encender las luces delanteras?",
      options: ["Solo de noche", "Entre la puesta y salida del sol, y cuando la visibilidad sea menor a 500 pies", "Solo con lluvia", "Solo en autopistas"],
      explanation: "Debe encender las luces entre el atardecer y el amanecer, y siempre que no pueda ver a más de 500 pies."
    },
    ps: {
      question: "چلوونکي کله باید د موټر څراغونه (headlights) روښانه کړي؟",
      options: ["یوازې د شپې", "د لمر له پریوتو تر راختلو پورې، او کله چې لید له ۵۰۰ فوټو کم وي", "یوازې په باران کې", "یوازې په لویو لارو"],
      explanation: "د ماښام او سهار تر منځ او هر کله چې لید له ۵۰۰ فوټو کم وي څراغونه باید بل شي."
    },
    pa: {
      question: "ਡਰਾਈਵਰਾਂ ਨੂੰ ਹੈੱਡਲਾਈਟਾਂ ਕਦੋਂ ਜਗਾਉਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ?",
      options: ["ਸਿਰਫ਼ ਰਾਤ ਨੂੰ", "ਸੂਰਜ ਡੁੱਬਣ ਤੋਂ ਸੂਰਜ ਚੜ੍ਹਨ ਤੱਕ, ਅਤੇ ਜਦੋਂ ਦਿੱਖ 500 ਫੁੱਟ ਤੋਂ ਘੱਟ ਹੋਵੇ", "ਸਿਰਫ਼ ਮੀਂਹ ਵਿੱਚ", "ਸਿਰਫ਼ ਹਾਈਵੇਅ ਤੇ"],
      explanation: "ਸੂਰਜ ਡੁੱਬਣ ਤੋਂ ਚੜ੍ਹਨ ਤੱਕ ਅਤੇ ਜਦੋਂ 500 ਫੁੱਟ ਤੋਂ ਘੱਟ ਦਿਖਾਈ ਦਿੰਦਾ ਹੋਵੇ, ਹੈੱਡਲਾਈਟਾਂ ਲਾਜ਼ਮੀ ਹਨ।"
    },
    hi: {
      question: "चालकों को हेडलाइट्स कब जलानी चाहिए?",
      options: ["केवल रात में", "सूर्यास्त से सूर्योदय के बीच, और जब दृश्यता 500 फीट से कम हो", "केवल बारिश में", "केवल हाईवे पर"],
      explanation: "सूर्यास्त से सूर्योदय के बीच तथा जब भी दृश्यता 500 फीट से कम हो, हेडलाइट्स जलाना अनिवार्य है।"
    }
  },
  "39": {
    es: {
      question: "¿A qué distancia de un vehículo en sentido contrario debe cambiar a luces bajas?",
      options: ["100 pies", "200 pies", "300 pies", "500 pies"],
      explanation: "Debe cambiar a luces bajas cuando se acerque a menos de 500 pies de un vehículo que viene en sentido contrario."
    },
    ps: {
      question: "مخامخ راتلونکي موټر ته په څومره واټن کې باید څراغونه ټیټ (low beam) کړئ؟",
      options: ["۱۰۰ فوټه", "۲۰۰ فوټه", "۳۰۰ فوټه", "۵۰۰ فوټه"],
      explanation: "کله چې له مخامخ راتلونکي موټر څخه ۵۰۰ فوټه واټن ولرئ باید لوړ څراغونه ټیټ کړئ."
    },
    pa: {
      question: "ਸਾਹਮਣਿਓਂ ਆ ਰਹੇ ਵਾਹਨ ਕੋਲ ਪਹੁੰਚਣ ਤੇ ਕਿੰਨੀ ਦੂਰੀ ਤੇ ਲੋਅ ਬੀਮ (low beam) ਲਾਈਟਾਂ ਵਰਤਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ?",
      options: ["100 ਫੁੱਟ", "200 ਫੁੱਟ", "300 ਫੁੱਟ", "500 ਫੁੱਟ"],
      explanation: "ਸਾਹਮਣਿਓਂ ਆ ਰਹੇ ਵਾਹਨ ਦੇ 500 ਫੁੱਟ ਦੇ ਅੰਦਰ ਆਉਣ ਤੇ ਲੋਅ ਬੀਮ ਲਾਈਟਾਂ ਕਰਨੀਆਂ ਲਾਜ਼ਮੀ ਹਨ।"
    },
    hi: {
      question: "सामने से आने वाले वाहन के कितने करीब आने पर लो-बीम लाइट का उपयोग करना चाहिए?",
      options: ["100 फीट", "200 फीट", "300 फीट", "500 फीट"],
      explanation: "सामने से आने वाले वाहन के 500 फीट के दायरे में आने पर हाई बीम से लो बीम कर लेना चाहिए।"
    }
  },
  "40": {
    es: {
      question: "¿A qué distancia al seguir a otro vehículo debe cambiar a luces bajas?",
      options: ["50 pies", "100 pies", "200 pies", "300 pies"],
      explanation: "Debe usar luces bajas cuando siga a otro vehículo a menos de 200 pies de distancia por detrás."
    },
    ps: {
      question: "د مخکني موټر تر شا په څومره واټن کې باید د موټر څراغونه ټیټ کړئ؟",
      options: ["۵۰ فوټه", "۱۰۰ فوټه", "۲۰۰ فوټه", "۳۰۰ فوټه"],
      explanation: "کله چې د بل موټر تر شا له ۲۰۰ فوټو په کمه فاصله کې روان یاست، باید خپل څراغونه ټیټ (low beam) کړئ."
    },
    pa: {
      question: "ਕਿਸੇ ਵਾਹਨ ਦੇ ਪਿੱਛੇ ਚੱਲਦੇ ਸਮੇਂ ਕਿੰਨੀ ਦੂਰੀ ਤੇ ਲੋਅ ਬੀਮ ਲਾਈਟਾਂ ਵਰਤਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ?",
      options: ["50 ਫੁੱਟ", "100 ਫੁੱਟ", "200 ਫੁੱਟ", "300 ਫੁੱਟ"],
      explanation: "ਅੱਗੇ ਵਾਲੇ ਵਾਹਨ ਦੇ ਪਿੱਛੇ 200 ਫੁੱਟ ਦੇ ਅੰਦਰ ਲੋਅ ਬੀਮ ਲਾਈਟਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।"
    },
    hi: {
      question: "किसी अन्य वाहन के पीछे चलते समय कितनी दूरी पर लो-बीम लाइट का उपयोग करना चाहिए?",
      options: ["50 फीट", "100 फीट", "200 फीट", "300 फीट"],
      explanation: "आगे चल रहे वाहन के पीछे 200 फीट के भीतर होने पर लो बीम लाइट का उपयोग करें।"
    }
  },
  "41": {
    es: {
      question: "¿Qué separan las marcas amarillas en el pavimento?",
      options: ["Carriles en la misma dirección", "Múltiples carriles de tráfico que van en direcciones opuestas", "Carriles para bicicletas", "Áreas de estacionamiento"],
      explanation: "Las líneas amarillas separan el tráfico que viaja en direcciones opuestas (sentido contrario)."
    },
    ps: {
      question: "د سړک پر سر ژېړې کرښې څه بیلوي؟",
      options: ["په یو لوري تلونکي لینونه", "هغه ترافیکي لینونه چې په مخالفو لورو کې حرکت کوي", "د بایسکل لینونه", "د پارکینګ سیمې"],
      explanation: "ژېړې کرښې د هغو موټرو لارې جلا کوي چې په مخالفو لورو کې حرکت کوي."
    },
    pa: {
      question: "ਪੀਲੀਆਂ ਸੜਕੀ ਲਾਈਨਾਂ ਕੀ ਵੱਖ ਕਰਦੀਆਂ ਹਨ?",
      options: ["ਇੱਕੋ ਦਿਸ਼ਾ ਵਿੱਚ ਜਾਣ ਵਾਲੀਆਂ ਲੇਨਾਂ", "ਉਲਟ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ ਜਾਣ ਵਾਲੀਆਂ ਟ੍ਰੈਫਿਕ ਲੇਨਾਂ", "ਸਾਈਕਲ ਲੇਨਾਂ", "ਪਾਰਕਿੰਗ ਖੇਤਰ"],
      explanation: "ਪੀਲੀਆਂ ਲਾਈਨਾਂ ਉਲਟ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ ਜਾਣ ਵਾਲੇ ਟ੍ਰੈਫਿਕ ਨੂੰ ਵੱਖ ਕਰਦੀਆਂ ਹਨ।"
    },
    hi: {
      question: "पीली लेन मार्किंग क्या अलग करती है?",
      options: ["एक ही दिशा में जाने वाली लेन", "विपरीत दिशाओं में जाने वाले यातायात की लेन", "साइकिल लेन", "पार्किंग क्षेत्र"],
      explanation: "पीली रेखाएं विपरीत दिशाओं में चलने वाले यातायात को एक दूसरे से अलग करती हैं।"
    }
  },
  "42": {
    es: {
      question: "¿Cuándo se puede cruzar una línea amarilla discontinua?",
      options: ["Nunca", "Para rebasar a otro vehículo cuando sea seguro", "Solo para girar a la izquierda", "Solo en emergencias"],
      explanation: "Puede cruzar una línea amarilla discontinua para rebasar a otro vehículo cuando la maniobra sea segura."
    },
    ps: {
      question: "ماتې (broken) ژېړې کرښې څخه کله تېرېدلی شئ؟",
      options: ["هیڅکله نه", "د بل موټر څخه د مخکې کېدو لپاره کله چې خوندي وي", "یوازې چپ تاویدو لپاره", "یوازې په بیړني حالت کې"],
      explanation: "کله چې ژېړه کرښه ټوټه ټوټه وي، تاسو کولی شئ په احتیاط سره د بل موټر څخه مخکې شئ."
    },
    pa: {
      question: "ਟੁੱਟੀ ਹੋਈ (broken) ਪੀਲੀ ਲਾਈਨ ਕਦੋਂ ਪਾਰ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ?",
      options: ["ਕਦੇ ਨਹੀਂ", "ਦੂਜੇ ਵਾਹਨ ਨੂੰ ਓਵਰਟੇਕ ਕਰਨ ਲਈ ਜਦੋਂ ਸੁਰੱਖਿਅਤ ਹੋਵੇ", "ਸਿਰਫ਼ ਖੱਬੇ ਮੁੜਨ ਲਈ", "ਸਿਰਫ਼ ਐਮਰਜੈਂਸੀ ਵਿੱਚ"],
      explanation: "ਜਦੋਂ ਪੀਲੀ ਲਾਈਨ ਟੁੱਟੀ ਹੋਵੇ, ਤਾਂ ਸੁਰੱਖਿਅਤ ਹੋਣ ਤੇ ਦੂਜੇ ਵਾਹਨ ਨੂੰ ਪਾਸ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।"
    },
    hi: {
      question: "टूटी हुई (Broken) पीली रेखा को कब पार किया जा सकता है?",
      options: ["कभी नहीं", "सुरक्षित होने पर किसी अन्य वाहन को ओवरटेक करने के लिए", "केवल बाएं मुड़ने के लिए", "केवल आपात स्थिति में"],
      explanation: "टूटी हुई पीली रेखा होने पर सुरक्षित होने पर आगे वाले वाहन को ओवरटेक किया जा सकता है।"
    }
  },
  "43": {
    es: {
      question: "¿Cuándo se puede cruzar una línea amarilla continua?",
      options: ["Para rebasar", "Solo para dar una vuelta (girar)", "Nunca", "Cuando sea seguro"],
      explanation: "No debe cruzar una línea amarilla continua excepto para dar una vuelta o girar."
    },
    ps: {
      question: "له بشپړې (solid) ژېړې کرښې څخه کله تېرېدل جواز لري؟",
      options: ["د مخکې کېدو لپاره", "یوازې د تاوېدو (turn) لپاره", "هیڅکله نه", "کله چې خوندي وي"],
      explanation: "له بشپړې ژېړې کرښې څخه د سبقت لپاره نه شي تېرېدلی، مګر یوازې د تاوېدو لپاره."
    },
    pa: {
      question: "ਠੋਸ (solid) ਪੀਲੀ ਲਾਈਨ ਕਦੋਂ ਪਾਰ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ?",
      options: ["ਓਵਰਟੇਕ ਕਰਨ ਲਈ", "ਸਿਰਫ਼ ਮੁੜਨ ਲਈ", "ਕਦੇ ਨਹੀਂ", "ਜਦੋਂ ਸੁਰੱਖਿਅਤ ਹੋਵੇ"],
      explanation: "ਠੋਸ ਪੀਲੀ ਲਾਈਨ ਨੂੰ ਸਿਰਫ਼ ਮੁੜਨ ਵੇਲੇ ਹੀ ਪਾਰ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ, ਓਵਰਟੇਕ ਕਰਨ ਲਈ ਨਹੀਂ।"
    },
    hi: {
      question: "ठोस (Solid) पीली रेखा को कब पार किया जा सकता है?",
      options: ["ओवरटेक करने के लिए", "केवल मुड़ने के लिए", "कभी नहीं", "जब सुरक्षित हो"],
      explanation: "ठोस पीली रेखा को केवल मुड़ने के लिए पार किया जा सकता है, ओवरटेक करने के लिए नहीं।"
    }
  },
  "44": {
    es: {
      question: "¿Qué separan las marcas blancas en el pavimento?",
      options: ["Carriles en direcciones opuestas", "Múltiples carriles de tráfico que van en la misma dirección", "Solo carriles de bicicletas", "Zonas de estacionamiento"],
      explanation: "Las líneas blancas separan carriles de tráfico que viajan en la misma dirección."
    },
    ps: {
      question: "سپینې ترافیکي کرښې څه بیلوي؟",
      options: ["په مخالفو لورو تلونکي لینونه", "هغه لینونه چې په یو لوري حرکت کوي", "یوازې د بایسکل لینونه", "د پارکینګ ځایونه"],
      explanation: "سپینې کرښې هغه لینونه جلا کوي چې ټول په یو لوري روان وي."
    },
    pa: {
      question: "ਚਿੱਟੀਆਂ ਸੜਕੀ ਲਾਈਨਾਂ ਕੀ ਵੱਖ ਕਰਦੀਆਂ ਹਨ?",
      options: ["ਉਲਟ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ ਲੇਨਾਂ", "ਇੱਕੋ ਦਿਸ਼ਾ ਵਿੱਚ ਜਾਣ ਵਾਲੀਆਂ ਕਈ ਟ੍ਰੈਫਿਕ ਲੇਨਾਂ", "ਸਿਰਫ਼ ਸਾਈਕਲ ਲੇਨਾਂ", "ਪਾਰਕਿੰਗ ਖੇਤਰ"],
      explanation: "ਚਿੱਟੀਆਂ ਲਾਈਨਾਂ ਇੱਕੋ ਦਿਸ਼ਾ ਵਿੱਚ ਚੱਲ ਰਹੇ ਟ੍ਰੈਫਿਕ ਦੀਆਂ ਲੇਨਾਂ ਨੂੰ ਵੱਖ ਕਰਦੀਆਂ ਹਨ।"
    },
    hi: {
      question: "सफेद लेन मार्किंग क्या अलग करती है?",
      options: ["विपरीत दिशाओं वाली लेन", "एक ही दिशा में जाने वाली कई लेन", "केवल साइकिल लेन", "पार्किंग क्षेत्र"],
      explanation: "सफेद रेखाएं एक ही दिशा में चलने वाले यातायात की लेन को अलग करती हैं।"
    }
  },
  "45": {
    es: {
      question: "¿Qué significa una línea blanca continua entre carriles?",
      options: ["El cambio de carril está prohibido", "Se desaconseja el cambio de carril pero no está prohibido", "Debe cambiar de carril", "Es solo una sugerencia"],
      explanation: "Una línea blanca sólida indica que cambiar de carril es desaconsejable; una doble línea blanca continua lo prohíbe por completo."
    },
    ps: {
      question: "د لینونو ترمنځ بشپړه (solid) سپینه کرښه څه معنی لري؟",
      options: ["د لین بدلول منع دي", "د لین بدلول نه توصیه کیږي", "تاسو باید لین بدل کړئ", "دا یوازې یوه مشوره ده"],
      explanation: "بشپړه سپینه کرښه ښيي چې د لین بدلول نامناسب او خطرناک دي خو دوه ګونې سپینه کرښه یې په بشپړ ډول منع کوي."
    },
    pa: {
      question: "ਲੇਨਾਂ ਵਿਚਕਾਰ ਠੋਸ ਚਿੱਟੀ ਲਾਈਨ ਦਾ ਕੀ ਅਰਥ ਹੈ?",
      options: ["ਲੇਨ ਬਦਲਣਾ ਮਨ੍ਹਾ ਹੈ", "ਲੇਨ ਬਦਲਣ ਦੀ ਸਲਾਹ ਨਹੀਂ ਦਿੱਤੀ ਜਾਂਦੀ (ਨਿਰਾਸ਼ ਕੀਤਾ ਜਾਂਦਾ ਹੈ)", "ਲੇਨ ਬਦਲਣੀ ਜ਼ਰੂਰੀ ਹੈ", "ਇਹ ਸਿਰਫ਼ ਸੁਝਾਅ ਹੈ"],
      explanation: "ਠੋਸ ਚਿੱਟੀ ਲਾਈਨ ਲੇਨ ਬਦਲਣ ਦੀ ਮਨਾਹੀ ਨਹੀਂ ਕਰਦੀ ਪਰ ਇਸ ਤੋਂ ਬਚਣ ਦੀ ਸਲਾਹ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।"
    },
    hi: {
      question: "लेन के बीच एक ठोस सफेद रेखा का क्या अर्थ है?",
      options: ["लेन बदलना प्रतिबंधित है", "लेन बदलने से बचने की सलाह दी जाती है", "लेन बदलना अनिवार्य है", "यह केवल एक सुझाव है"],
      explanation: "एक ठोस सफेद रेखा दर्शाती है कि लेन बदलना हतोत्साहित किया जाता है; दोहरी ठोस सफेद रेखा लेन बदलने पर रोक लगाती है।"
    }
  },
  "46": {
    es: {
      question: "¿Cuántos carriles debe cambiar a la vez?",
      options: ["Uno", "Dos", "Tantos como sea necesario", "No importa"],
      explanation: "Cambie únicamente un carril a la vez para mantener el control y la seguridad vial."
    },
    ps: {
      question: "په یو وخت کې باید څو لینونه بدل کړئ؟",
      options: ["یو لین", "دوه لینونه", "څومره چې اړتیا وي", "فرق نه کوي"],
      explanation: "په یو وخت کې یوازې یو لین بدل کړئ."
    },
    pa: {
      question: "ਇੱਕ ਸਮੇਂ ਵਿੱਚ ਤੁਹਾਨੂੰ ਕਿੰਨੀਆਂ ਲੇਨਾਂ ਬਦਲਣੀਆਂ ਚਾਹੀਦੀਆਂ ਹਨ?",
      options: ["ਇੱਕ", "ਦੋ", "ਜਿੰਨੀਆਂ ਲੋੜ ਹੋਵੇ", "ਕੋਈ ਫਰਕ ਨਹੀਂ ਪੈਂਦਾ"],
      explanation: "ਹਮੇਸ਼ਾ ਇੱਕ ਸਮੇਂ ਵਿੱਚ ਸਿਰਫ਼ ਇੱਕ ਹੀ ਲੇਨ ਬਦਲੋ।"
    },
    hi: {
      question: "एक समय में आपको कितनी लेन बदलनी चाहिए?",
      options: ["एक", "दो", "जितनी आवश्यकता हो", "कोई फर्क नहीं पड़ता"],
      explanation: "हमेशा एक समय में केवल एक ही लेन बदलें।"
    }
  },
  "47": {
    es: {
      question: "¿A qué distancia antes de un vehículo que se aproxima debe regresar al carril derecho al rebasar?",
      options: ["50 pies", "75 pies", "100 pies", "150 pies"],
      explanation: "Debe regresar al carril derecho al menos 100 pies antes de encontrar a un vehículo en sentido contrario."
    },
    ps: {
      question: "د مخکې کېدو (سبقت) پرمهال، باید له مخامخ راتلونکي موټر څخه څومره وړاندې خپل ښي اړخ ته راوګرځئ؟",
      options: ["۵۰ فوټه", "۷۵ فوټه", "۱۰۰ فوټه", "۱۵۰ فوټه"],
      explanation: "تاسو باید له مخامخ راتلونکي موټر څخه لږترلږه ۱۰۰ فوټه وړاندې خپل ښي لین ته راستون شئ."
    },
    pa: {
      question: "ਓਵਰਟੇਕ ਕਰਨ ਤੋਂ ਬਾਅਦ ਸਾਹਮਣਿਓਂ ਆ ਰਹੇ ਵਾਹਨ ਤੋਂ ਕਿੰਨੀ ਦੂਰੀ ਪਹਿਲਾਂ ਸੱਜੇ ਪਾਸੇ ਵਾਪਸ ਆਉਣਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["50 ਫੁੱਟ", "75 ਫੁੱਟ", "100 ਫੁੱਟ", "150 ਫੁੱਟ"],
      explanation: "ਸਾਹਮਣਿਓਂ ਆ ਰਹੇ ਵਾਹਨ ਦੇ ਘੱਟੋ-ਘੱਟ 100 ਫੁੱਟ ਪਹਿਲਾਂ ਆਪਣੀ ਸੱਜੀ ਲੇਨ ਵਿੱਚ ਵਾਪਸ ਆਓ।"
    },
    hi: {
      question: "ओवरटेक करते समय सामने से आ रहे वाहन से कितनी दूरी पहले आपको दाईं लेन में वापस आ जाना चाहिए?",
      options: ["50 फीट", "75 फीट", "100 फीट", "150 फीट"],
      explanation: "सामने से आ रहे वाहन से कम से कम 100 फीट पहले आपको अपनी लेन में सुरक्षित लौट आना चाहिए।"
    }
  },
  "48": {
    es: {
      question: "¿Cuándo es ilegal rebasar a otros vehículos?",
      options: ["Línea amarilla continua en su lado", "Señal de banderín de 'No Passing Zone'", "A menos de 100 pies de una intersección", "Todas las anteriores"],
      explanation: "Es ilegal y peligroso rebasar con línea amarilla sólida, señal de no rebasar y a 100 pies de intersecciones o cruces."
    },
    ps: {
      question: "له بل موټر څخه مخکې کېدل کله غیرقانوني دي؟",
      options: ["کله چې ستاسو خوا ته پوره ژېړه کرښه وي", "کله چې د بیرغ په بڼه 'No Passing' نښه لګیدلې وي", "له څلورلارې څخه په ۱۰۰ فوټۍ کې", "پورته ټول سم دي"],
      explanation: "په دې ټولو شرایطو کې له بل موټر څخه تېرېدل او سبقت کول غیرقانوني دي."
    },
    pa: {
      question: "ਦੂਜੇ ਵਾਹਨਾਂ ਨੂੰ ਓਵਰਟੇਕ ਕਰਨਾ ਕਦੋਂ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ?",
      options: ["ਤੁਹਾਡੇ ਪਾਸੇ ਠੋਸ ਪੀਲੀ ਲਾਈਨ ਹੋਣ ਤੇ", "'No Passing Zone' ਦਾ ਬੋਰਡ ਲੱਗਿਆ ਹੋਣ ਤੇ", "ਚੌਰਾਹੇ ਦੇ 100 ਫੁੱਟ ਦੇ ਅੰਦਰ", "ਉਪਰੋਕਤ ਸਾਰੇ"],
      explanation: "ਇਹਨਾਂ ਸਾਰੀਆਂ ਸਥਿਤੀਆਂ ਵਿੱਚ ਓਵਰਟੇਕ ਕਰਨਾ ਗੈਰ-ਕਾਨੂੰਨੀ ਅਤੇ ਖ਼ਤਰਨਾਕ ਹੈ।"
    },
    hi: {
      question: "अन्य वाहनों को ओवरटेक करना कब गैरकानूनी है?",
      options: ["आपकी तरफ ठोस पीली रेखा होने पर", "'No Passing Zone' का बोर्ड लगा होने पर", "चौराहे के 100 फीट के भीतर", "उपरोक्त सभी"],
      explanation: "इन सभी परिस्थितियों में किसी अन्य वाहन को ओवरटेक करना गैरकानूनी है।"
    }
  },
  "49": {
    es: {
      question: "¿Con cuánta anticipación debe poner la direccional antes de girar?",
      options: ["50 pies", "75 pies", "100 pies", "150 pies"],
      explanation: "Debe señalizar con las luces direccionales al menos 100 pies antes de girar o cambiar de carril."
    },
    ps: {
      question: "له تاوېدو دمخه باید څومره واټن مخکې اشاره (signal) ولګوئ؟",
      options: ["۵۰ فوټه", "۷۵ فوټه", "۱۰۰ فوټه", "۱۵۰ فوټه"],
      explanation: "تاسو باید له تاوېدو لږترلږه ۱۰۰ فوټه مخکې اشاره فعاله کړئ."
    },
    pa: {
      question: "ਮੁੜਨ ਤੋਂ ਕਿੰਨੀ ਦੂਰੀ ਪਹਿਲਾਂ ਇੰਡੀਕੇਟਰ (ਸਿਗਨਲ) ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["50 ਫੁੱਟ", "75 ਫੁੱਟ", "100 ਫੁੱਟ", "150 ਫੁੱਟ"],
      explanation: "ਮੁੜਨ ਜਾਂ ਲੇਨ ਬਦਲਣ ਤੋਂ ਘੱਟੋ-ਘੱਟ 100 ਫੁੱਟ ਪਹਿਲਾਂ ਸਿਗਨਲ ਦੇਣਾ ਲਾਜ਼ਮੀ ਹੈ।"
    },
    hi: {
      question: "मुड़ने से कितनी दूरी पहले आपको इंडिकेटर (टर्न सिग्नल) देना चाहिए?",
      options: ["50 फीट", "75 फीट", "100 फीट", "150 फीट"],
      explanation: "मुड़ने या लेन बदलने से कम से कम 100 फीट पहले इंडिकेटर देना अनिवार्य है।"
    }
  },
  "50": {
    es: {
      question: "Al girar a la izquierda desde una calle de doble sentido, ¿hacia cuál carril debe girar?",
      options: ["El carril derecho", "El carril izquierdo", "Cualquier carril", "El carril más cercano a la dirección hacia la que gira"],
      explanation: "Gire en el carril más cercano a la dirección de su giro (el carril izquierdo en la dirección que entra)."
    },
    ps: {
      question: "له دوه اړخیزه سرک څخه چپ لور ته د تاویدو پرمهال باید کوم لین ته داخل شئ؟",
      options: ["ښي لین ته", "چپ لین ته", "هر لین ته", "هغه لین ته چې ستاسو د تاوېدو لوري ته تر ټولو نږدې دی"],
      explanation: "تل هغه لین ته ننوځئ چې ستاسو د تاوېدو لوري ته تر ټولو نږدې دی."
    },
    pa: {
      question: "ਦੋ-ਤਰਫ਼ਾ ਸੜਕ ਤੋਂ ਖੱਬੇ ਮੁੜਨ ਵੇਲੇ ਕਿਸ ਲੇਨ ਵਿੱਚ ਮੁੜਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["ਸੱਜੀ ਲੇਨ ਵਿੱਚ", "ਖੱਬੀ ਲੇਨ ਵਿੱਚ", "ਕਿਸੇ ਵੀ ਲੇਨ ਵਿੱਚ", "ਜਿਸ ਦਿਸ਼ਾ ਵਿੱਚ ਤੁਸੀਂ ਮੁੜ ਰਹੇ ਹੋ ਉਸਦੇ ਸਭ ਤੋਂ ਨੇੜਲੀ ਲੇਨ ਵਿੱਚ"],
      explanation: "ਹਮੇਸ਼ਾ ਉਸ ਲੇਨ ਵਿੱਚ ਮੁੜੋ ਜੋ ਤੁਹਾਡੀ ਮੁੜਨ ਵਾਲੀ ਦਿਸ਼ਾ ਦੇ ਸਭ ਤੋਂ ਨੇੜੇ ਹੈ।"
    },
    hi: {
      question: "दोतरफा सड़क से बाएं मुड़ते समय आपको किस लेन में प्रवेश करना चाहिए?",
      options: ["दाईं लेन", "बाईं लेन", "किसी भी लेन में", "जिस दिशा में आप मुड़ रहे हैं उसके सबसे नजदीकी लेन में"],
      explanation: "हमेशा उस लेन में मुड़ें जो आपकी मुड़ने की दिशा के सबसे करीब हो।"
    }
  },
  "51": {
    es: {
      question: "Al hacer un giro a la derecha, ¿hacia cuál carril debe girar?",
      options: ["El carril izquierdo", "El carril derecho", "Cualquier carril", "El carril central"],
      explanation: "Para girar a la derecha, manténgase en el carril derecho y gire hacia el carril derecho más cercano."
    },
    ps: {
      question: "ښي لاس ته د تاوېدو پرمهال باید کوم لین ته تاو شئ؟",
      options: ["چپ لین", "ښي لین", "هر لین", "منځنی لین"],
      explanation: "د ښي تاوېدو لپاره تر ټولو ښي لین ته ننوځئ."
    },
    pa: {
      question: "ਸੱਜੇ ਮੁੜਨ ਵੇਲੇ ਕਿਸ ਲੇਨ ਵਿੱਚ ਮੁੜਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["ਖੱਬੀ ਲੇਨ", "ਸੱਜੀ ਲੇਨ", "ਕਿਸੇ ਵੀ ਲੇਨ ਵਿੱਚ", "ਕੇਂਦਰੀ ਲੇਨ"],
      explanation: "ਸੱਜੇ ਮੁੜਨ ਲਈ ਹਮੇਸ਼ਾ ਸਭ ਤੋਂ ਸੱਜੀ ਲੇਨ ਵਿੱਚ ਰਹੋ।"
    },
    hi: {
      question: "दाएं मुड़ते समय आपको किस लेन में मुड़ना चाहिए?",
      options: ["बाईं लेन", "दाईं लेन", "किसी भी लेन में", "मध्य लेन"],
      explanation: "दाएं मुड़ने के लिए हमेशा सबसे दाईं लेन का उपयोग करें।"
    }
  },
  "52": {
    es: {
      question: "¿Cuándo es legal hacer una vuelta en U (vuelta en redondo)?",
      options: ["Siempre", "Nunca", "Cuando no esté prohibida por ley y sea seguro", "Solo en autopistas"],
      explanation: "Una vuelta en U solo debe realizarse cuando la ley no lo prohíba expresamente y sea completamente seguro."
    },
    ps: {
      question: "یو-ټرن (U-turn) یا بیرته شا ته تاوېدل کله قانوني دي؟",
      options: ["تل", "هیڅکله نه", "کله چې د قانون له مخې منع نه وي او خوندي وي", "یوازې په لویو لارو"],
      explanation: "یو-ټرن یوازې هغه وخت ترسره کړئ چې نښې منع کړی نه وي او خوندي وي."
    },
    pa: {
      question: "ਯੂ-ਟਰਨ (U-turn) ਲੈਣਾ ਕਦੋਂ ਕਾਨੂੰਨੀ ਹੈ?",
      options: ["ਹਮੇਸ਼ਾ", "ਕਦੇ ਨਹੀਂ", "ਜਦੋਂ ਕਾਨੂੰਨ ਦੁਆਰਾ ਮਨਾਹੀ ਨਾ ਹੋਵੇ ਅਤੇ ਸੁਰੱਖਿਅਤ ਹੋਵੇ", "ਸਿਰਫ਼ ਹਾਈਵੇਅ ਤੇ"],
      explanation: "ਯੂ-ਟਰਨ ਤਾਂ ਹੀ ਲਓ ਜਦੋਂ ਕਾਨੂੰਨੀ ਤੌਰ ਤੇ ਮਨਜ਼ੂਰ ਅਤੇ ਸੁਰੱਖਿਅਤ ਹੋਵੇ।"
    },
    hi: {
      question: "यू-टर्न (U-turn) लेना कब कानूनी है?",
      options: ["हमेशा", "कभी नहीं", "जब कानून द्वारा निषिद्ध न हो और पूरी तरह सुरक्षित हो", "केवल हाईवे पर"],
      explanation: "यू-टर्न तभी लें जब किसी संकेत द्वारा मना न किया गया हो और सड़क साफ हो।"
    }
  },
  "53": {
    es: {
      question: "¿Dónde NUNCA se permiten las vueltas en U?",
      options: ["En calles de la ciudad", "En curvas, al acercarse a la cima de una colina o en autopistas interestatales", "En estacionamientos", "En intersecciones"],
      explanation: "Nunca dé una vuelta en U en curvas, cerca de la cima de una colina ni en autopistas interestatales."
    },
    ps: {
      question: "یو-ټرن (U-turn) په کومو ځایونو کې هیڅکله جواز نلري؟",
      options: ["د ښار په کوڅو کې", "په موړونو (curves) کې، غونډۍ ته په ختلو، او په لویو لارو (interstates) کې", "د پارکینګ په ساحو کې", "په څلورلارو کې"],
      explanation: "په موړونو، غونډیو او انټرسټیټ لویو لارو کې یو-ټرن وهل په بشپړ ډول منع دي."
    },
    pa: {
      question: "ਯੂ-ਟਰਨ ਦੀ ਕਦੇ ਵੀ ਕਿੱਥੇ ਇਜਾਜ਼ਤ ਨਹੀਂ ਹੁੰਦੀ?",
      options: ["ਸ਼ਹਿਰ ਦੀਆਂ ਸੜਕਾਂ ਤੇ", "ਮੋੜਾਂ ਤੇ, ਪਹਾੜੀ ਦੀ ਚੋਟੀ ਦੇ ਨੇੜੇ, ਜਾਂ ਇੰਟਰਸਟੇਟ ਹਾਈਵੇਅ ਤੇ", "ਪਾਰਕਿੰਗ ਲਾਟਾਂ ਵਿੱਚ", "ਚੌਰਾਹਿਆਂ ਤੇ"],
      explanation: "ਮੋੜਾਂ, ਪਹਾੜੀ ਦੀ ਚੋਟੀ ਅਤੇ ਹਾਈਵੇਅ ਤੇ ਯੂ-ਟਰਨ ਲੈਣਾ ਸਖ਼ਤ ਮਨ੍ਹਾ ਹੈ।"
    },
    hi: {
      question: "यू-टर्न की अनुमति कहाँ कभी नहीं होती?",
      options: ["शहर की सड़कों पर", "मोड़ों पर, पहाड़ी की चोटी के पास, या इंटरस्टेट राजमार्गों पर", "पार्किंग स्थल में", "चौराहों पर"],
      explanation: "मोड़ों, पहाड़ियों और इंटरस्टेट हाईवे पर यू-टर्न लेना पूरी तरह से अवैध है।"
    }
  },
  "54": {
    es: {
      question: "Al acercarse a una rotonda, ¿quién tiene el derecho de paso?",
      options: ["El tráfico que ingresa", "El tráfico que ya circula dentro de la rotonda", "El vehículo más grande", "El primero en llegar"],
      explanation: "Al acercarse a una rotonda, el tráfico que entra debe ceder el paso a los vehículos que ya están dentro de la rotonda."
    },
    ps: {
      question: "ګرد چکر (roundabout) ته په نږدې کېدو د تګ حق د چا دی؟",
      options: ["ننووتونکی ترافیک", "هغه ترافیک چې دمخه په ګرد چکر کې دننه تاویږي", "لوی موټر", "لومړی رسیدلی موټر"],
      explanation: "هغه موټر چې په ګرد چکر کې دي تل د لومړیتوب حق لري."
    },
    pa: {
      question: "ਗੋਲ ਚੱਕਰ (Roundabout) ਤੇ ਪਹੁੰਚਣ ਵੇਲੇ ਰਸਤੇ ਦਾ ਅਧਿਕਾਰ ਕਿਸ ਕੋਲ ਹੁੰਦਾ ਹੈ?",
      options: ["ਦਾਖਲ ਹੋਣ ਵਾਲਾ ਟ੍ਰੈਫਿਕ", "ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਚੱਕਰ ਵਿੱਚ ਘੁੰਮ ਰਿਹਾ ਟ੍ਰੈਫਿਕ", "ਵੱਡਾ ਵਾਹਨ", "ਪਹਿਲਾਂ ਪਹੁੰਚਣ ਵਾਲਾ"],
      explanation: "ਗੋਲ ਚੱਕਰ ਵਿੱਚ ਪਹਿਲਾਂ ਤੋਂ ਮੌਜੂਦ ਵਾਹਨਾਂ ਨੂੰ ਰਸਤੇ ਦਾ ਅਧਿਕਾਰ ਹੁੰਦਾ ਹੈ।"
    },
    hi: {
      question: "गोलचक्कर (Roundabout) के पास पहुंचने पर पहले निकलने का अधिकार किसका होता है?",
      options: ["प्रवेश करने वाला यातायात", "पहले से गोलचक्कर में घूम रहा यातायात", "बड़ा वाहन", "पहले पहुंचने वाला"],
      explanation: "गोलचक्कर में पहले से चल रहे वाहनों को प्राथमिकता होती है; प्रवेश करने वालों को रुकना चाहिए।"
    }
  },
  "55": {
    es: {
      question: "¿En qué dirección fluye el tráfico en una rotonda?",
      options: ["En el sentido de las agujas del reloj", "En sentido antihorario (hacia la izquierda)", "En cualquier dirección", "Depende de la rotonda"],
      explanation: "En las rotondas de EE.UU., todo el tráfico circula siempre en sentido contrario a las manecillas del reloj (antihorario)."
    },
    ps: {
      question: "په ګرد چکر (roundabout) کې ترافیک په کوم لوري حرکت کوي؟",
      options: ["د ساعت د عقربو په لور", "د ساعت د عقربو مخالف لور (counterclockwise)", "په دواړو لورو", "د چکر په ډول پورې اړه لري"],
      explanation: "په ګرد چکر کې ټول موټرونه د ساعت د عقربې خلاف لور ته څرخي."
    },
    pa: {
      question: "ਗੋਲ ਚੱਕਰ ਵਿੱਚ ਟ੍ਰੈਫਿਕ ਕਿਸ ਦਿਸ਼ਾ ਵਿੱਚ ਚੱਲਦਾ ਹੈ?",
      options: ["ਘੜੀ ਦੀ ਦਿਸ਼ਾ ਵਿੱਚ (Clockwise)", "ਘੜੀ ਦੀ ਉਲਟ ਦਿਸ਼ਾ ਵਿੱਚ (Counterclockwise)", "ਕਿਸੇ ਵੀ ਦਿਸ਼ਾ ਵਿੱਚ", "ਗੋਲ ਚੱਕਰ ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ"],
      explanation: "ਗੋਲ ਚੱਕਰ ਵਿੱਚ ਟ੍ਰੈਫਿਕ ਹਮੇਸ਼ਾ ਘੜੀ ਦੇ ਉਲਟ (counterclockwise) ਦਿਸ਼ਾ ਵਿੱਚ ਚੱਲਦਾ ਹੈ।"
    },
    hi: {
      question: "गोलचक्कर में यातायात किस दिशा में चलता है?",
      options: ["घड़ी की दिशा में (Clockwise)", "घड़ी की विपरीत दिशा में (Counterclockwise)", "किसी भी दिशा में", "गोलचक्कर पर निर्भर करता है"],
      explanation: "गोलचक्कर में यातायात हमेशा वामावर्त (Counterclockwise) दिशा में चलता है।"
    }
  },
  "56": {
    es: {
      question: "¿Cuál es la distancia mínima de seguimiento recomendada en buenas condiciones?",
      options: ["1 segundo", "2 a 3 segundos", "5 segundos", "7 segundos"],
      explanation: "Bajo buenas condiciones de manejo, mantenga al menos 2 a 3 segundos de distancia con el vehículo de adelante."
    },
    ps: {
      question: "په ښو شرایطو کې د مخکني موټر تر شا لږ تر لږه خوندي واټن څومره دی؟",
      options: ["۱ ثانیه", "۲ تر ۳ ثانیې", "۵ ثانیې", "۷ ثانیې"],
      explanation: "په عادي او ښو شرایطو کې د ۲ تر ۳ ثانیو د فاصلې قاعده عملي کړئ."
    },
    pa: {
      question: "ਚੰਗੀਆਂ ਹਾਲਤਾਂ ਵਿੱਚ ਅੱਗੇ ਵਾਲੇ ਵਾਹਨ ਤੋਂ ਘੱਟੋ-ਘੱਟ ਕਿੰਨੀ ਦੂਰੀ ਰੱਖਣੀ ਚਾਹੀਦੀ ਹੈ?",
      options: ["1 ਸਕਿੰਟ", "2 ਤੋਂ 3 ਸਕਿੰਟ", "5 ਸਕਿੰਟ", "7 ਸਕਿੰਟ"],
      explanation: "ਆਮ ਹਾਲਤਾਂ ਵਿੱਚ ਅੱਗੇ ਚੱਲ ਰਹੇ ਵਾਹਨ ਤੋਂ ਘੱਟੋ-ਘੱਟ 2 ਤੋਂ 3 ਸਕਿੰਟਾਂ ਦੀ ਦੂਰੀ ਰੱਖੋ।"
    },
    hi: {
      question: "अच्छी परिस्थितियों में आगे वाले वाहन से न्यूनतम कितनी दूरी रखनी चाहिए?",
      options: ["1 सेकंड", "2 से 3 सेकंड", "5 सेकंड", "7 सेकंड"],
      explanation: "अनुकूल परिस्थितियों में आगे वाले वाहन से कम से कम 2 से 3 सेकंड की दूरी रखें।"
    }
  },
  "57": {
    es: {
      question: "¿Cómo debe aumentar la distancia de seguimiento en condiciones adversas (lluvia, nieve)?",
      options: ["Mantenerla igual", "Aumentarla a 4-5 segundos o más", "Disminuirla a 1 segundo", "No importa"],
      explanation: "En lluvia, hielo, nieve o niebla, aumente la distancia de seguimiento a al menos 4 a 5 segundos."
    },
    ps: {
      question: "په خرابو او باراني شرایطو کې باید د موټر تر منځ واټن څومره زیات کړئ؟",
      options: ["همغسې پریږدئ", "۴ تر ۵ ثانیو یا ډیر ته یې زیات کړئ", "۱ ثانیې ته یې کم کړئ", "فرق نه کوي"],
      explanation: "په باران یا واوره کې واټن تر ۴ یا ۵ ثانیو زیات کړئ."
    },
    pa: {
      question: "ਖ਼ਰਾਬ ਮੌਸਮ ਵਿੱਚ ਅੱਗੇ ਵਾਲੇ ਵਾਹਨ ਤੋਂ ਦੂਰੀ ਕਿੰਨੀ ਵਧਾਉਣੀ ਚਾਹੀਦੀ ਹੈ?",
      options: ["ਉਹੀ ਰੱਖੋ", "4-5 ਸਕਿੰਟ ਜਾਂ ਵੱਧ ਕਰੋ", "1 ਸਕਿੰਟ ਕਰੋ", "ਕੋਈ ਫਰਕ ਨਹੀਂ ਪੈਂਦਾ"],
      explanation: "ਮੀਂਹ ਜਾਂ ਬਰਫ਼ ਵਿੱਚ ਦੂਰੀ ਘੱਟੋ-ਘੱਟ 4 ਤੋਂ 5 ਸਕਿੰਟ ਤੱਕ ਵਧਾਓ।"
    },
    hi: {
      question: "प्रतिकूल मौसम (बारिश, बर्फ) में आगे वाले वाहन से दूरी कैसे बढ़ानी चाहिए?",
      options: ["समान रखें", "4-5 सेकंड या उससे अधिक करें", "1 सेकंड कर दें", "कोई फर्क नहीं पड़ता"],
      explanation: "खराब मौसम या फिसलन भरी सड़कों पर दूरी कम से कम 4-5 सेकंड तक बढ़ाएं।"
    }
  },
  "58": {
    es: {
      question: "¿Cuándo DEBE detenerse ante un autobús escolar?",
      options: ["Cuando parpadean las luces ámbar", "Cuando parpadean las luces rojas y el brazo de alto está extendido", "Solo si se ven niños", "Nunca"],
      explanation: "Debe detenerse por completo cuando un autobús escolar enciende las luces rojas y saca el brazo de alto."
    },
    ps: {
      question: "تاسو کله باید د ښوونځي بس لپاره بشپړ ودریږئ؟",
      options: ["کله چې ژیړ څراغونه بل شي", "کله چې سره څراغونه ځلیږي او د درېدو لاس (stop arm) راوتلی وي", "یوازې که ماشومان ښکاري", "هیڅکله نه"],
      explanation: "کله چې د ښوونځي بس سره څراغونه او د سټاپ نښه بهر کړي درېدل قانوني فرض دي."
    },
    pa: {
      question: "ਸਕੂਲ ਬੱਸ ਲਈ ਤੁਹਾਨੂੰ ਕਦੋਂ ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ?",
      options: ["ਜਦੋਂ ਪੀਲੀਆਂ ਬੱਤੀਆਂ ਜਗ ਰਹੀਆਂ ਹੋਣ", "ਜਦੋਂ ਲਾਲ ਬੱਤੀਆਂ ਜਗ ਰਹੀਆਂ ਹੋਣ ਅਤੇ ਸਟਾਪ ਆਰਮ ਬਾਹਰ ਹੋਵੇ", "ਸਿਰਫ਼ ਜੇ ਬੱਚੇ ਦਿਖਾਈ ਦੇਣ", "ਕਦੇ ਨਹੀਂ"],
      explanation: "ਜਦੋਂ ਸਕੂਲ ਬੱਸ ਦੀਆਂ ਲਾਲ ਲਾਈਟਾਂ ਜਗਣ ਅਤੇ ਸਟਾਪ ਆਰਮ ਨਿਕਲੇ ਤਾਂ ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ।"
    },
    hi: {
      question: "आपको स्कूल बस के लिए कब रुकना अनिवार्य है?",
      options: ["जब पीली बत्तियां चमक रही हों", "जब लाल बत्तियां चमक रही हों और स्टॉप आर्म बाहर निकला हो", "केवल यदि बच्चे दिखाई दे रहे हों", "कभी नहीं"],
      explanation: "जब स्कूल बस की लाल बत्तियां चमक रही हों और स्टॉप आर्म बाहर निकला हो, तो रुकना अनिवार्य है।"
    }
  },
  "59": {
    es: {
      question: "En una carretera dividida por barrera física, ¿quién debe detenerse ante un autobús escolar?",
      options: ["Siempre todos", "Solo los vehículos que viajan en la misma dirección que el autobús", "Nunca nadie", "Solo si hay niños"],
      explanation: "Si hay una mediana física o barrera divisoria, solo los conductores en el mismo sentido deben parar."
    },
    ps: {
      question: "په ویشل شوي سړک کې چې فزیکي خنډ (barrier) ولري، څوک باید د ښوونځي بس ته ودریږي؟",
      options: ["ټول موټرونه", "یوازې هغه موټرونه چې د بس په ورته لوري کې حرکت کوي", "هیڅوک نه", "یوازې که ماشومان وي"],
      explanation: "که سړک د کانکریټي یا فزیکي خنډ پواسطه ویشل شوی وي، یوازې د بس په لوري موټر ودریږي."
    },
    pa: {
      question: "ਡਿਵਾਈਡਰ ਵਾਲੀ ਸੜਕ ਤੇ ਸਕੂਲ ਬੱਸ ਲਈ ਕਿਸਨੂੰ ਰੁਕਣਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["ਸਾਰਿਆਂ ਨੂੰ", "ਸਿਰਫ਼ ਬੱਸ ਦੀ ਦਿਸ਼ਾ ਵਿੱਚ ਜਾਣ ਵਾਲੇ ਵਾਹਨਾਂ ਨੂੰ", "ਕਿਸੇ ਨੂੰ ਨਹੀਂ", "ਸਿਰਫ਼ ਜੇ ਬੱਚੇ ਹੋਣ"],
      explanation: "ਜੇਕਰ ਸੜਕ ਦੇ ਵਿਚਕਾਰ ਡਿਵਾਈਡਰ ਹੈ, ਤਾਂ ਸਿਰਫ਼ ਬੱਸ ਦੀ ਦਿਸ਼ਾ ਵਾਲੇ ਵਾਹਨ ਹੀ ਰੁਕਣਗੇ।"
    },
    hi: {
      question: "डिवाइडर या बाधा वाली सड़क पर स्कूल बस के लिए किसे रुकना आवश्यक है?",
      options: ["हमेशा सभी को", "केवल बस की समान दिशा में यात्रा करने वाले वाहनों को", "किसी को नहीं", "केवल यदि बच्चे हों"],
      explanation: "भौतिक डिवाइडर होने पर केवल उसी दिशा में चलने वाले वाहनों को रुकना होता है।"
    }
  },
  "60": {
    es: {
      question: "¿Qué indican las luces ámbar intermitentes en un autobús escolar?",
      options: ["Parar inmediatamente", "El autobús está reduciendo la velocidad para subir o bajar niños", "El autobús va a girar", "Situación de emergencia"],
      explanation: "Las luces ámbar advierten que el autobús está desacelerando para recoger o dejar escolares."
    },
    ps: {
      question: "د ښوونځي په بس کې ځلېدونکي ژېړ څراغونه څه ښيي؟",
      options: ["سمدستي ودریږئ", "بس سرعت کموي او ماشومان پورته کوي یا ښکته کوي", "بس تاویږي", "بیړنی حالت"],
      explanation: "ژېړ څراغونه خبرداری ورکوي چې بس د ماشومانو د کوزولو یا خېژولو لپاره درېدونکی دی."
    },
    pa: {
      question: "ਸਕੂਲ ਬੱਸ ਤੇ ਪੀਲੀਆਂ ਫਲੈਸ਼ਿੰਗ ਲਾਈਟਾਂ ਕੀ ਦਰਸਾਉਂਦੀਆਂ ਹਨ?",
      options: ["ਤੁਰੰਤ ਰੁਕੋ", "ਬੱਸ ਹੌਲੀ ਹੋ ਰਹੀ ਹੈ ਅਤੇ ਬੱਚਿਆਂ ਨੂੰ ਚੜ੍ਹਾਉਣ/ਉਤਾਰਨ ਵਾਲੀ ਹੈ", "ਬੱਸ ਮੁੜ ਰਹੀ ਹੈ", "ਐਮਰਜੈਂਸੀ"],
      explanation: "ਪੀਲੀਆਂ ਲਾਈਟਾਂ ਚੇਤਾਵਨੀ ਦਿੰਦੀਆਂ ਹਨ ਕਿ ਬੱਸ ਰੁਕਣ ਵਾਲੀ ਹੈ।"
    },
    hi: {
      question: "स्कूल बस पर चमकती पीली बत्तियां क्या दर्शाती हैं?",
      options: ["तुरंत रुकें", "बस गति धीमी कर रही है और बच्चों को चढ़ाने/उतारने वाली है", "बस मुड़ रही है", "आपातकालीन स्थिति"],
      explanation: "पीली बत्तियां चेतावनी देती हैं कि बस रुकने वाली है और बच्चे चढ़ने-उतरने वाले हैं।"
    }
  },
  "61": {
    es: {
      question: "¿Cuáles vehículos deben detenerse SIEMPRE en los cruces de ferrocarril?",
      options: ["Todos los vehículos", "Solo camiones grandes", "Vehículos que transportan pasajeros a sueldo, autobuses escolares y vehículos con materiales inflamables", "Solo comerciales"],
      explanation: "Autobuses escolares, vehículos de pasajeros comerciales y transporte de materiales peligrosos siempre deben parar."
    },
    ps: {
      question: "کوم موټرونه باید تل د ریل پټلۍ په کراسنګ کې پوره ودریږي؟",
      options: ["ټول موټرونه", "یوازې لویې لارۍ", "هغه موټر چې سپرلۍ په کرایه وړي، د ښوونځي بسونه، او خطرناک یا ژر سوځیدونکي توکي وړونکي موټرونه", "یوازې سوداګریز موټرونه"],
      explanation: "د ښوونځي بسونه او هغه موټر چې تیل یا چاودیدونکي توکي وړي باید د ریل په پټلۍ ودریږي."
    },
    pa: {
      question: "ਰੇਲਵੇ ਕਰਾਸਿੰਗ ਤੇ ਕਿਹੜੇ ਵਾਹਨਾਂ ਨੂੰ ਹਮੇਸ਼ਾ ਰੁਕਣਾ ਪੈਂਦਾ ਹੈ?",
      options: ["ਸਾਰੇ ਵਾਹਨ", "ਸਿਰਫ਼ ਵੱਡੇ ਟਰੱਕ", "ਸਵਾਰੀਆਂ ਲੈ ਜਾਣ ਵਾਲੇ ਵਾਹਨ, ਸਕੂਲ ਬੱਸਾਂ, ਅਤੇ ਜਲਣਸ਼ੀਲ ਸਮੱਗਰੀ ਵਾਲੇ ਵਾਹਨ", "ਸਿਰਫ਼ ਵਪਾਰਕ ਵਾਹਨ"],
      explanation: "ਸਕੂਲ ਬੱਸਾਂ ਅਤੇ ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ ਵਾਲੇ ਵਾਹਨਾਂ ਨੂੰ ਰੇਲਵੇ ਕਰਾਸਿੰਗ ਤੇ ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ।"
    },
    hi: {
      question: "रेलवे क्रॉसिंग पर किन वाहनों को हमेशा रुकना पड़ता है?",
      options: ["सभी वाहन", "केवल बड़े ट्रक", "किराए पर यात्री ले जाने वाले वाहन, स्कूल बसें और ज्वलनशील सामग्री ले जाने वाले वाहन", "केवल वाणिज्यिक वाहन"],
      explanation: "स्कूल बसों और खतरनाक सामग्री ले जाने वाले वाहनों को हर रेलवे क्रॉसिंग पर रुकना अनिवार्य है।"
    }
  },
  "62": {
    es: {
      question: "¿A qué distancia del riel más cercano deben detenerse los vehículos obligados a parar en un cruce?",
      options: ["5 a 15 pies", "10 a 20 pies", "Entre 15 y 50 pies", "20 a 60 pies"],
      explanation: "Deben detenerse a una distancia no menor de 15 pies ni mayor de 50 pies del riel más próximo."
    },
    ps: {
      question: "هغه موټر چې درېدل ورباندې لازم دي، د ریل له پټلۍ څومره فاصله کې باید ودریږي؟",
      options: ["۵ تر ۱۵ فوټه", "۱۰ تر ۲۰ فوټه", "له ۱۵ څخه تر ۵۰ فوټو پورې", "۲۰ تر ۶۰ فوټه"],
      explanation: "موټر باید د اورګاډي له نږدې پټلۍ څخه لږ تر لږه ۱۵ فوټه او زیات تر ۵۰ فوټه واټن کې تم شي."
    },
    pa: {
      question: "ਰੇਲਵੇ ਪਟੜੀ ਤੋਂ ਕਿੰਨੀ ਦੂਰੀ ਤੇ ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ?",
      options: ["5-15 ਫੁੱਟ", "10-20 ਫੁੱਟ", "15 ਤੋਂ 50 ਫੁੱਟ", "20-60 ਫੁੱਟ"],
      explanation: "ਰੇਲਵੇ ਪਟੜੀ ਤੋਂ ਘੱਟੋ-ਘੱਟ 15 ਫੁੱਟ ਅਤੇ ਵੱਧ ਤੋਂ ਵੱਧ 50 ਫੁੱਟ ਦੀ ਦੂਰੀ ਤੇ ਰੁਕੋ।"
    },
    hi: {
      question: "रेलवे ट्रैक से कितनी दूरी पर वाहनों को रुकना चाहिए?",
      options: ["5-15 फीट", "10-20 फीट", "15 से 50 फीट के बीच", "20-60 फीट"],
      explanation: "निकटतम पटरी से कम से कम 15 फीट और अधिकतम 50 फीट की दूरी पर रुकना चाहिए।"
    }
  },
  "63": {
    es: {
      question: "¿Qué debe hacer si su vehículo se apaga o queda varado sobre las vías del tren?",
      options: ["Permanecer dentro", "Todos los ocupantes deben abandonar el vehículo inmediatamente", "Intentar encenderlo", "Esperar ayuda adentro"],
      explanation: "Todos los ocupantes deben desalojar el vehículo de inmediato y alejarse de las vías en ángulo hacia el tren."
    },
    ps: {
      question: "که موټر مو د اورګاډي پر پټلۍ بند (stall) شي څه باید وکړئ؟",
      options: ["په موټر کې پاتې شئ", "ټول سپرلۍ باید سمدستي له موټر څخه بهر شي", "د موټر د چالانولو هڅه وکړئ", "مرستې ته انتظار وکړئ"],
      explanation: "ټول کسان باید سمدستي موټر پریږدي او د پټلۍ څخه لرې شي."
    },
    pa: {
      question: "ਜੇਕਰ ਤੁਹਾਡੀ ਕਾਰ ਰੇਲਵੇ ਟਰੈਕ ਤੇ ਬੰਦ ਹੋ ਜਾਵੇ ਤਾਂ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["ਕਾਰ ਵਿੱਚ ਹੀ ਰਹੋ", "ਸਾਰੇ ਯਾਤਰੀਆਂ ਨੂੰ ਤੁਰੰਤ ਕਾਰ ਵਿੱਚੋਂ ਬਾਹਰ ਨਿਕਲਣਾ ਚਾਹੀਦਾ ਹੈ", "ਕਾਰ ਸਟਾਰਟ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ", "ਮਦਦ ਦੀ ਉਡੀਕ ਕਰੋ"],
      explanation: "ਸਾਰੇ ਯਾਤਰੀਆਂ ਨੂੰ ਤੁਰੰਤ ਵਾਹਨ ਵਿੱਚੋਂ ਬਾਹਰ ਨਿਕਲ ਕੇ ਸੁਰੱਖਿਅਤ ਦੂਰੀ ਤੇ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।"
    },
    hi: {
      question: "यदि आपका वाहन रेलवे ट्रैक पर बंद हो जाए तो आपको क्या करना चाहिए?",
      options: ["वाहन में ही रहें", "सभी यात्रियों को तुरंत वाहन से बाहर निकल जाना चाहिए", "इंजन दोबारा चालू करने का प्रयास करें", "मदद की प्रतीक्षा करें"],
      explanation: "सभी यात्रियों को तुरंत वाहन खाली कर देना चाहिए और पटरियों से दूर सुरक्षित स्थान पर जाना चाहिए।"
    }
  },
  "64": {
    es: {
      question: "¿Es legal conducir esquivando una barrera de cruce de ferrocarril que está bajada?",
      options: ["Sí, si no se ve tren", "Sí, si tiene prisa", "No, es completamente ilegal", "Solo en emergencias"],
      explanation: "Es completamente ilegal y extremadamente peligroso rodear una barrera de cruce ferroviario bajada."
    },
    ps: {
      question: "ایا د ریل د کوزې شوې دروازې (gate) له خوا تېرېدل قانوني دي؟",
      options: ["هو، که اورګاډی نه وي", "هو، که بیړه لرئ", "نه، دا غیرقانوني ده", "یوازې په بیړني حالت کې"],
      explanation: "د کوزې شوې پټلۍ دروازې شاوخوا موټر تاوول غیرقانوني او مرګونی کار دی."
    },
    pa: {
      question: "ਕੀ ਰੇਲਵੇ ਕਰਾਸਿੰਗ ਦਾ ਬੰਦ ਗੇਟ ਪਾਰ ਕਰਕੇ ਜਾਣਾ ਕਾਨੂੰਨੀ ਹੈ?",
      options: ["ਹਾਂ, ਜੇ ਕੋਈ ਰੇਲਗੱਡੀ ਨਾ ਹੋਵੇ", "ਹਾਂ, ਜੇ ਕਾਹਲੀ ਹੋਵੇ", "ਨਹੀਂ, ਇਹ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ", "ਸਿਰਫ਼ ਐਮਰਜੈਂਸੀ ਵਿੱਚ"],
      explanation: "ਬੰਦ ਰੇਲਵੇ ਫਾਟਕ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਗੱਡੀ ਕੱਢਣਾ ਸਖ਼ਤ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ।"
    },
    hi: {
      question: "क्या रेलवे फाटक बंद होने पर उसके चारों ओर से गाड़ी निकालना कानूनी है?",
      options: ["हाँ, यदि ट्रेन न दिखे", "हाँ, यदि जल्दी हो", "नहीं, यह पूरी तरह गैरकानूनी है", "केवल आपात स्थिति में"],
      explanation: "बंद रेलवे फाटक को पार करना पूरी तरह से अवैध और अत्यधिक खतरनाक है।"
    }
  },
  "65": {
    es: {
      question: "¿A qué distancia antes de un cruce de ferrocarril está prohibido rebasar?",
      options: ["50 pies", "75 pies", "100 pies", "150 pies"],
      explanation: "Está prohibido por ley rebasar a otro vehículo a menos de 100 pies de un cruce de tren."
    },
    ps: {
      question: "د ریل پټلۍ څخه په څومره واټن کې له بل موټر څخه مخکې کیدل (سبقت) منع دي؟",
      options: ["۵۰ فوټه", "۷۵ فوټه", "۱۰۰ فوټه", "۱۵۰ فوټه"],
      explanation: "د اورګاډي د پټلۍ په ۱۰۰ فوټۍ کې له بل موټر څخه سبقت مه کوئ."
    },
    pa: {
      question: "ਰੇਲਵੇ ਕਰਾਸਿੰਗ ਤੋਂ ਕਿੰਨੀ ਦੂਰੀ ਦੇ ਅੰਦਰ ਓਵਰਟੇਕ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ?",
      options: ["50 ਫੁੱਟ", "75 ਫੁੱਟ", "100 ਫੁੱਟ", "150 ਫੁੱਟ"],
      explanation: "ਰੇਲਵੇ ਕਰਾਸਿੰਗ ਦੇ 100 ਫੁੱਟ ਦੇ ਅੰਦਰ ਕਿਸੇ ਹੋਰ ਵਾਹਨ ਨੂੰ ਓਵਰਟੇਕ ਨਾ ਕਰੋ।"
    },
    hi: {
      question: "रेलवे क्रॉसिंग से कितनी दूरी के भीतर किसी अन्य वाहन को ओवरटेक नहीं करना चाहिए?",
      options: ["50 फीट", "75 फीट", "100 फीट", "150 फीट"],
      explanation: "रेलवे क्रॉसिंग के 100 फीट के भीतर किसी अन्य वाहन को ओवरटेक करना अवैध है।"
    }
  },
  "66": {
    es: {
      question: "¿Cuánto más bajos son los límites de velocidad en zonas de obras respecto al límite normal?",
      options: ["Al menos 5 mph", "Al menos 10 mph por debajo", "Al menos 15 mph", "Al menos 20 mph"],
      explanation: "Los límites en zonas de trabajo siempre se reducen al menos 10 mph por debajo del límite habitual."
    },
    ps: {
      question: "د سړک جوړولو په کاري ساحو (work zones) کې سرعت د عادي سرعت په پرتله څومره کم ټاکل کیږي؟",
      options: ["لږ تر لږه ۵ مایل", "لږ تر لږه ۱۰ مایل په ساعت کم", "لږ تر لږه ۱۵ مایل", "لږ تر لږه ۲۰ مایل"],
      explanation: "د کاري سیمو د سرعت حد تل لږترلږه ۱۰ مایل په ساعت له عادي حد څخه کم وي."
    },
    pa: {
      question: "ਕੰਮ ਵਾਲੇ ਖੇਤਰਾਂ (work zones) ਵਿੱਚ ਗਤੀ ਸੀਮਾ ਆਮ ਸੀਮਾ ਨਾਲੋਂ ਕਿੰਨੀ ਘੱਟ ਹੁੰਦੀ ਹੈ?",
      options: ["ਘੱਟੋ-ਘੱਟ 5 mph", "ਘੱਟੋ-ਘੱਟ 10 mph ਘੱਟ", "ਘੱਟੋ-ਘੱਟ 15 mph", "ਘੱਟੋ-ਘੱਟ 20 mph"],
      explanation: "ਨਿਰਮਾਣ ਖੇਤਰਾਂ ਵਿੱਚ ਸਪੀਡ ਸੀਮਾ ਆਮ ਨਾਲੋਂ ਘੱਟੋ-ਘੱਟ 10 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਘੱਟ ਹੁੰਦੀ ਹੈ।"
    },
    hi: {
      question: "कार्य क्षेत्रों (Work zones) में गति सीमा सामान्य गति सीमा से कितनी कम होती है?",
      options: ["कम से कम 5 mph", "कम से कम 10 mph कम", "कम से कम 15 mph", "कम से कम 20 mph"],
      explanation: "निर्माण क्षेत्रों में गति सीमा सामान्य स्थापित सीमा से कम से कम 10 मील प्रति घंटा कम होती है।"
    }
  },
  "67": {
    es: {
      question: "¿Qué debe hacer cuando un abanderado (flagger) extiende una bandera roja horizontalmente?",
      options: ["Reducir velocidad", "Detenerse por completo", "Proceder con precaución", "Acelerar"],
      explanation: "Debe detenerse por completo cuando un banderillero extiende la bandera horizontalmente hacia su carril."
    },
    ps: {
      question: "کله چې بیرغ لرونکی کارکوونکی (flagger) سور بیرغ افقي ونیسي څه باید وکړئ؟",
      options: ["سرعت کم کړئ", "بشپړ ودریږئ", "په احتیاط لاړ شئ", "ګړندی شئ"],
      explanation: "تاسو باید ودریږئ کله چې فلیګر سور بیرغ په افقي ډول ستاسو د لین په لور ونیسي."
    },
    pa: {
      question: "ਜਦੋਂ ਫਲੈਗਰ (ਟ੍ਰੈਫਿਕ ਕੰਟਰੋਲਰ) ਲਾਲ ਝੰਡਾ ਸਿੱਧਾ ਫੜਦਾ ਹੈ ਤਾਂ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["ਗਤੀ ਹੌਲੀ ਕਰੋ", "ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕੋ", "ਸਾਵਧਾਨੀ ਨਾਲ ਚੱਲੋ", "ਤੇਜ਼ ਕਰੋ"],
      explanation: "ਜਦੋਂ ਫਲੈਗਰ ਲਾਲ ਝੰਡਾ ਖਿਤਿਜੀ (horizontal) ਕਰਦਾ ਹੈ ਤਾਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕਣਾ ਲਾਜ਼ਮੀ ਹੈ।"
    },
    hi: {
      question: "जब कोई फ्लैगर (झंडी वाला) लाल झंडा क्षैतिज रूप से फैलाता है तो आपको क्या करना चाहिए?",
      options: ["धीमी गति करें", "पूरी तरह रुकें", "सावधानी से आगे बढ़ें", "तेजी से निकलें"],
      explanation: "जब फ्लैगर लाल झंडा क्षैतिज रूप से फैलाता है, तो आपको पूरी तरह रुकना होगा।"
    }
  },
  "68": {
    es: {
      question: "Al estacionar cuesta abajo con bordillo, ¿hacia dónde debe girar las ruedas?",
      options: ["Hacia afuera del bordillo", "Hacia el bordillo (hacia la banqueta)", "Derecho hacia adelante", "No importa"],
      explanation: "Cuesta abajo, gire las ruedas hacia el bordillo para que el auto no ruede hacia el tráfico si fallan los frenos."
    },
    ps: {
      question: "په کښته شیب (downhill) کې د موټر پارک کولو پرمهال ټایرونه کوم لور ته واړوئ؟",
      options: ["د سړک غاړې څخه لیرې", "د سړک د غاړې (curb) په لور", "مستقیم مخکې", "فرق نه کوي"],
      explanation: "کله چې موټر په کښته ښکته پارک کوئ، ټایرونه د سړک د غاړې (کرب) په لور تاو کړئ."
    },
    pa: {
      question: "ਢਲਾਣ ਤੇ ਹੇਠਾਂ (downhill) ਪਾਰਕ ਕਰਦੇ ਸਮੇਂ ਪਹੀਏ ਕਿਸ ਪਾਸੇ ਮੋੜਨੇ ਚਾਹੀਦੇ ਹਨ?",
      options: ["ਫੁੱਟਪਾਥ (curb) ਤੋਂ ਦੂਰ", "ਫੁੱਟਪਾਥ (curb) ਵੱਲ", "ਸਿੱਧੇ ਅੱਗੇ", "ਕੋਈ ਫਰਕ ਨਹੀਂ ਪੈਂਦਾ"],
      explanation: "ਢਲਾਣ ਤੇ ਕਾਰ ਪਾਰਕ ਕਰਦੇ ਸਮੇਂ ਪਹੀਏ ਫੁੱਟਪਾਥ (ਕਰਬ) ਵੱਲ ਮੋੜੋ।"
    },
    hi: {
      question: "ढलान पर नीचे की ओर (Downhill) पार्क करते समय पहियों को किस तरफ मोड़ना चाहिए?",
      options: ["फुटपाथ (Curb) से दूर", "फुटपाथ (Curb) की ओर", "सीधा आगे", "कोई फर्क नहीं पड़ता"],
      explanation: "ढलान पर नीचे की ओर पार्क करते समय पहियों को फुटपाथ (कर्ब) की तरफ मोड़ें।"
    }
  },
  "69": {
    es: {
      question: "Al estacionar cuesta arriba con bordillo, ¿hacia dónde debe girar las ruedas?",
      options: ["Hacia afuera del bordillo (alejadas de la banqueta)", "Hacia el bordillo", "Derecho hacia adelante", "No importa"],
      explanation: "Cuesta arriba con bordillo, gire las ruedas hacia afuera (lejos del bordillo) para que traben con la orilla."
    },
    ps: {
      question: "په پورته ختونکي سړک (uphill) کې د موټر پارک کولو پرمهال ټایرونه کوم لور ته واړوئ؟",
      options: ["د سړک له څنډې (curb) څخه لیرې", "د څنډې په لور", "مستقیم مخکې", "فرق نه کوي"],
      explanation: "په پورته ختونکې لاره کې ټایرونه له کرب څخه بل لور ته وګرځوئ."
    },
    pa: {
      question: "ਚੜ੍ਹਾਈ ਤੇ (uphill) ਫੁੱਟਪਾਥ ਦੇ ਨਾਲ ਪਾਰਕ ਕਰਦੇ ਸਮੇਂ ਪਹੀਏ ਕਿਸ ਪਾਸੇ ਮੋੜਨੇ ਚਾਹੀਦੇ ਹਨ?",
      options: ["ਫੁੱਟਪਾਥ ਤੋਂ ਦੂਰ (Away from curb)", "ਫੁੱਟਪਾਥ ਵੱਲ", "ਸਿੱਧੇ ਅੱਗੇ", "ਕੋਈ ਫਰਕ ਨਹੀਂ ਪੈਂਦਾ"],
      explanation: "ਚੜ੍ਹਾਈ ਤੇ ਪਾਰਕ ਕਰਦੇ ਸਮੇਂ ਪਹੀਏ ਫੁੱਟਪਾਥ ਤੋਂ ਪਰ੍ਹੇ (away) ਮੋੜੋ।"
    },
    hi: {
      question: "चढ़ाई पर (Uphill) फुटपाथ के साथ पार्क करते समय पहियों को किस तरफ मोड़ना चाहिए?",
      options: ["फुटपाथ से दूर (Away from the curb)", "फुटपाथ की ओर", "सीधा आगे", "कोई फर्क नहीं पड़ता"],
      explanation: "चढ़ाई पर कर्ब के साथ पार्क करते समय पहियों को कर्ब से दूर मोड़ें।"
    }
  },
  "70": {
    es: {
      question: "¿A cuántos pies de un hidrante de incendios está prohibido estacionarse?",
      options: ["5 pies", "10 pies", "15 pies", "20 pies"],
      explanation: "Está prohibido estacionarse a menos de 15 pies de un hidrante de bomberos."
    },
    ps: {
      question: "د اور وژنې له نل (fire hydrant) څخه په څومره واټن کې پارکینګ منع دی؟",
      options: ["۵ فوټه", "۱۰ فوټه", "۱۵ فوټه", "۲۰ فوټه"],
      explanation: "د اور وژنې له نل څخه په ۱۵ فوټۍ کې پارکینګ کول منع دي."
    },
    pa: {
      question: "ਫਾਇਰ ਹਾਈਡ੍ਰੈਂਟ ਤੋਂ ਕਿੰਨੀ ਦੂਰੀ ਦੇ ਅੰਦਰ ਪਾਰਕਿੰਗ ਦੀ ਮਨਾਹੀ ਹੈ?",
      options: ["5 ਫੁੱਟ", "10 ਫੁੱਟ", "15 ਫੁੱਟ", "20 ਫੁੱਟ"],
      explanation: "ਫਾਇਰ ਹਾਈਡ੍ਰੈਂਟ ਦੇ 15 ਫੁੱਟ ਦੇ ਅੰਦਰ ਪਾਰਕਿੰਗ ਮਨ੍ਹਾ ਹੈ।"
    },
    hi: {
      question: "फायर हाइड्रेंट से कितनी दूरी के भीतर पार्किंग प्रतिबंधित है?",
      options: ["5 फीट", "10 फीट", "15 फीट", "20 फीट"],
      explanation: "फायर हाइड्रेंट के 15 फीट के भीतर वाहन पार्क करना प्रतिबंधित है।"
    }
  },
  "71": {
    es: {
      question: "¿Se permite estacionar en la zona con rayas diagonales junto a espacios para discapacitados?",
      options: ["Sí, con placa de discapacidad", "Sí, por corto tiempo", "No, está prohibido en todo momento", "Solo de noche"],
      explanation: "La zona con franjas diagonales es para rampas de sillas de ruedas; está prohibido estacionar allí en todo momento."
    },
    ps: {
      question: "ایا د معیوبینو د پارکینګ تر څنګ په خط لرونکې سیمه (diagonal stripes) کې پارکینګ جواز لري؟",
      options: ["هو، که لایسنس پلیټ ولرئ", "هو، د لنډ وخت لپاره", "نه، دا په هر وخت کې منع دي", "یوازې د شپې"],
      explanation: "دا ځای د ویلچیر د ختلو لپاره دی او پارکینګ پکې تل منع دی."
    },
    pa: {
      question: "ਕੀ ਅਪਾਹਜ ਪਾਰਕਿੰਗ ਦੇ ਨਾਲ ਵਾਲੀ ਧਾਰੀਦਾਰ (striped) ਥਾਂ ਤੇ ਪਾਰਕ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਹੈ?",
      options: ["ਹਾਂ, ਜੇ ਪਰਮਿਟ ਹੋਵੇ", "ਹਾਂ, ਥੋੜ੍ਹੇ ਸਮੇਂ ਲਈ", "ਨਹੀਂ, ਹਰ ਸਮੇਂ ਸਖ਼ਤ ਮਨ੍ਹਾ ਹੈ", "ਸਿਰਫ਼ ਰਾਤ ਨੂੰ"],
      explanation: "ਧਾਰੀਦਾਰ ਜਗ੍ਹਾ ਵ੍ਹੀਲਚੇਅਰ ਲਈ ਹੁੰਦੀ ਹੈ; ਇੱਥੇ ਪਾਰਕਿੰਗ ਦੀ ਹਰ ਸਮੇਂ ਮਨਾਹੀ ਹੈ।"
    },
    hi: {
      question: "क्या दिव्यांग पार्किंग के पास धारीदार क्षेत्र में पार्किंग की अनुमति है?",
      options: ["हाँ, यदि प्लेकार्ड हो", "हाँ, थोड़े समय के लिए", "नहीं, हर समय पूरी तरह प्रतिबंधित है", "केवल रात में"],
      explanation: "यह स्थान व्हीलचेयर रैंप के लिए होता है; यहाँ किसी भी समय पार्क करना अवैध है।"
    }
  },
  "72": {
    es: {
      question: "¿Quiénes están obligados a usar cinturón de seguridad en Indiana?",
      options: ["Solo el conductor", "Conductor y copiloto", "El conductor y todos los pasajeros", "Solo los niños"],
      explanation: "La ley de Indiana exige que el conductor y todos los pasajeros usen cinturones de seguridad en todo momento."
    },
    ps: {
      question: "په انډیانا کې د سیټ بیلټ تړل د چا لپاره لازمي دي؟",
      options: ["یوازې موټر چلوونکی", "چلوونکی او د مخکني سیټ مسافر", "چلوونکی او ټول سپرلۍ", "یوازې ماشومان"],
      explanation: "د انډیانا قانون له مخې ټول سپرلۍ او چلوونکی باید تل سیټ بیلټ وتړي."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਸੀਟ ਬੈਲਟ ਪਹਿਨਣੀ ਕਿਸ ਲਈ ਲਾਜ਼ਮੀ ਹੈ?",
      options: ["ਸਿਰਫ਼ ਡਰਾਈਵਰ", "ਡਰਾਈਵਰ ਅਤੇ ਅਗਲੀ ਸੀਟ ਦੇ ਯਾਤਰੀ", "ਡਰਾਈਵਰ ਅਤੇ ਸਾਰੇ ਯਾਤਰੀ", "ਸਿਰਫ਼ ਬੱਚੇ"],
      explanation: "ਡਰਾਈਵਰ ਅਤੇ ਸਾਰੇ ਯਾਤਰੀਆਂ ਲਈ ਸੀਟ ਬੈਲਟ ਲਗਾਉਣੀ ਕਾਨੂੰਨੀ ਤੌਰ ਤੇ ਲਾਜ਼ਮੀ ਹੈ।"
    },
    hi: {
      question: "इंडियाना में सीट बेल्ट पहनना किसके लिए अनिवार्य है?",
      options: ["केवल ड्राइवर", "ड्राइवर और अगली सीट के यात्री", "ड्राइवर और सभी यात्री", "केवल बच्चे"],
      explanation: "इंडियाना कानून के तहत वाहन में ड्राइवर और सभी यात्रियों को सीट बेल्ट पहनना अनिवार्य है।"
    }
  },
  "73": {
    es: {
      question: "¿Hasta qué edad deben los niños viajar en un asiento de seguridad para niños en Indiana?",
      options: ["Menores de 5 años", "Menores de 6 años", "Menores de 8 años", "Menores de 12 años"],
      explanation: "Todos los niños menores de 8 años deben estar sujetos en un sistema de retención infantil homologado."
    },
    ps: {
      question: "په انډیانا کې ماشومان تر کوم عمر پورې باید د ماشومانو په ځانګړې څوکۍ (car seat) کې کینول شي؟",
      options: ["تر ۵ کلنۍ کم", "تر ۶ کلنۍ کم", "تر ۸ کلنۍ کم", "تر ۱۲ کلنۍ کم"],
      explanation: "هغه ماشومان چې عمر یې له ۸ کلونو کم وي حتماً باید د ماشومانو په سیټ کې کینول شي."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਬੱਚਿਆਂ ਨੂੰ ਕਿਸ ਉਮਰ ਤੱਕ ਚਾਈਲਡ ਸੀਟ ਵਿੱਚ ਬਿਠਾਉਣਾ ਲਾਜ਼ਮੀ ਹੈ?",
      options: ["5 ਸਾਲ ਤੋਂ ਘੱਟ", "6 ਸਾਲ ਤੋਂ ਘੱਟ", "8 ਸਾਲ ਤੋਂ ਘੱਟ", "12 ਸਾਲ ਤੋਂ ਘੱਟ"],
      explanation: "8 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਲਈ ਚਾਈਲਡ ਕਾਰ ਸੀਟ ਲਾਜ਼ਮੀ ਹੈ।"
    },
    hi: {
      question: "इंडियाना में बच्चों को किस उम्र तक चाइल्ड सेफ्टी सीट में बैठना अनिवार्य है?",
      options: ["5 वर्ष से कम", "6 वर्ष से कम", "8 वर्ष से कम", "12 वर्ष से कम"],
      explanation: "8 वर्ष से कम आयु के सभी बच्चों को उचित चाइल्ड सेफ्टी सीट में बैठाना कानूनी रूप से अनिवार्य है।"
    }
  },
  "74": {
    es: {
      question: "¿Dónde deben sentarse los niños menores de 12 años en vehículos con bolsa de aire del pasajero?",
      options: ["En el asiento delantero", "En el asiento trasero", "En cualquier asiento", "No importa"],
      explanation: "Los niños menores de 12 años deben sentarse siempre en el asiento trasero para evitar lesiones graves por la bolsa de aire."
    },
    ps: {
      question: "تر ۱۲ کلنۍ کم ماشومان باید د موټر په کوم سیټ کې کیني؟",
      options: ["مخکنی سیټ", "شاته سیټ", "هر سیټ", "فرق نه کوي"],
      explanation: "د ایربګ د خطر له امله ماشومان باید تل په شاتني سیټ کې کینول شي."
    },
    pa: {
      question: "12 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਨੂੰ ਏਅਰਬੈਗ ਵਾਲੀ ਕਾਰ ਵਿੱਚ ਕਿੱਥੇ ਬੈਠਣਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["ਅਗਲੀ ਸੀਟ ਤੇ", "ਪਿਛਲੀ ਸੀਟ ਤੇ", "ਕਿਸੇ ਵੀ ਸੀਟ ਤੇ", "ਕੋਈ ਫਰਕ ਨਹੀਂ ਪੈਂਦਾ"],
      explanation: "12 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਬੱਚਿਆਂ ਨੂੰ ਹਮੇਸ਼ਾ ਪਿਛਲੀ ਸੀਟ ਤੇ ਬੈਠਣਾ ਚਾਹੀਦਾ ਹੈ।"
    },
    hi: {
      question: "12 वर्ष से कम आयु के बच्चों को एयरबैग वाले वाहन में कहाँ बैठना चाहिए?",
      options: ["अगली सीट पर", "पिछली सीट पर", "किसी भी सीट पर", "कोई फर्क नहीं पड़ता"],
      explanation: "यात्री एयरबैग से सुरक्षा के लिए 12 वर्ष से कम उम्र के बच्चों को हमेशा पिछली सीट पर बैठाना चाहिए।"
    }
  },
  "75": {
    es: {
      question: "¿Cuál es el límite legal de concentración de alcohol en sangre (BAC) para mayores de 21 años en Indiana?",
      options: ["0.05%", "0.08%", "0.10%", "0.12%"],
      explanation: "En Indiana, un BAC de 0.08% o superior se considera intoxicación legal para conductores mayores de 21 años."
    },
    ps: {
      question: "په انډیانا کې د ۲۱ کلونو او تر هغه پورته چلوونکو لپاره په وینه کې د الکولو قانوني حد (BAC) څومره دی؟",
      options: ["۰.۰۵٪", "۰.۰۸٪", "۰.۱۰٪", "۰.۱۲٪"],
      explanation: "په وینه کې د ۰.۰۸ سلنه یا زیات الکول لرل په نشه کې د موټر چلولو جرم ګڼل کیږي."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ ਵਿੱਚ 21 ਸਾਲ ਅਤੇ ਵੱਧ ਉਮਰ ਦੇ ਡਰਾਈਵਰਾਂ ਲਈ ਖੂਨ ਵਿੱਚ ਅਲਕੋਹਲ (BAC) ਦੀ ਕਾਨੂੰਨੀ ਸੀਮਾ ਕੀ ਹੈ?",
      options: ["0.05%", "0.08%", "0.10%", "0.12%"],
      explanation: "ਇੰਡੀਆਨਾ ਵਿੱਚ 0.08% ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ BAC ਨੂੰ ਕਾਨੂੰਨੀ ਤੌਰ ਤੇ ਨਸ਼ਾ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।"
    },
    hi: {
      question: "इंडियाना में 21 वर्ष और उससे अधिक उम्र के ड्राइवरों के लिए कानूनी रक्त अल्कोहल एकाग्रता (BAC) सीमा क्या है?",
      options: ["0.05%", "0.08%", "0.10%", "0.12%"],
      explanation: "इंडियाना में 0.08% या उससे अधिक BAC को कानूनी रूप से नशे में गाड़ी चलाना माना जाता है।"
    }
  },
  "76": {
    es: {
      question: "¿Qué sanción recibe si reprueba una prueba química de alcohol en Indiana?",
      options: ["Solo una advertencia", "Suspensión de la licencia por 180 días", "Suspensión de 1 año", "Suspensión de 2 años"],
      explanation: "Reprobar una prueba química resulta en una suspensión obligatoria de la licencia de conducir por 180 días."
    },
    ps: {
      question: "که تاسو د الکولو کیمیاوي ازموینه کې ناکام شئ کومه سزا درکول کیږي؟",
      options: ["یوازې خبرداری", "د ۱۸۰ ورځو لپاره د لایسنس ځنډول (suspension)", "د ۱ کال ځنډول", "د ۲ کلونو ځنډول"],
      explanation: "د الکولو په ټیسټ کې د پاتې راتلو په صورت کې د موټر چلولو حق د ۱۸۰ ورځو لپاره ځنډول کیږي."
    },
    pa: {
      question: "ਜੇਕਰ ਤੁਸੀਂ ਅਲਕੋਹਲ ਟੈਸਟ ਵਿੱਚ ਫੇਲ੍ਹ ਹੋ ਜਾਂਦੇ ਹੋ ਤਾਂ ਕੀ ਸਜ਼ਾ ਮਿਲਦੀ ਹੈ?",
      options: ["ਸਿਰਫ਼ ਚੇਤਾਵਨੀ", "180 ਦਿਨਾਂ ਲਈ ਲਾਇਸੈਂਸ ਮੁਅੱਤਲ", "1 ਸਾਲ ਦੀ ਮੁਅੱਤਲੀ", "2 ਸਾਲ ਦੀ ਮੁਅੱਤਲੀ"],
      explanation: "ਟੈਸਟ ਫੇਲ੍ਹ ਹੋਣ ਤੇ ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ 180 ਦਿਨਾਂ ਲਈ ਮੁਅੱਤਲ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।"
    },
    hi: {
      question: "यदि आप शराब के रासायनिक परीक्षण में विफल होते हैं तो क्या सजा होती है?",
      options: ["केवल चेतावनी", "180 दिनों के लिए ड्राइविंग लाइसेंस निलंबन", "1 वर्ष का निलंबन", "2 वर्ष का निलंबन"],
      explanation: "रासायनिक परीक्षण में विफल होने पर ड्राइविंग विशेषाधिकार 180 दिनों के लिए निलंबित कर दिया जाता है।"
    }
  },
  "77": {
    es: {
      question: "¿Qué sucede si se niega a someterse a una prueba química de alcohol en Indiana?",
      options: ["Ninguna penalización", "Suspensión de 180 días", "Suspensión de la licencia por 1 año", "Suspensión de 2 años"],
      explanation: "Negarse a realizar una prueba química resulta en la suspensión inmediata de la licencia por un año completo."
    },
    ps: {
      question: "که تاسو د الکولو کیمیاوي ازموینې ورکولو څخه انکار وکړئ څه کیږي؟",
      options: ["هیڅ سزا نشته", "د ۱۸۰ ورځو ځنډول", "د ۱ کال لپاره د لایسنس ځنډول", "د ۲ کلونو ځنډول"],
      explanation: "له کیمیاوي ازموینې څخه انکار کول د یو کال لپاره د لایسنس د ځنډېدو لامل کیږي."
    },
    pa: {
      question: "ਜੇਕਰ ਤੁਸੀਂ ਕੈਮੀਕਲ ਟੈਸਟ ਦੇਣ ਤੋਂ ਇਨਕਾਰ ਕਰਦੇ ਹੋ ਤਾਂ ਕੀ ਹੁੰਦਾ ਹੈ?",
      options: ["ਕੋਈ ਜ਼ੁਰਮਾਨਾ ਨਹੀਂ", "180 ਦਿਨਾਂ ਦੀ ਮੁਅੱਤਲੀ", "1 ਸਾਲ ਲਈ ਲਾਇਸੈਂਸ ਮੁਅੱਤਲ", "2 ਸਾਲ ਦੀ ਮੁਅੱਤਲੀ"],
      explanation: "ਟੈਸਟ ਤੋਂ ਇਨਕਾਰ ਕਰਨ ਤੇ ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ ਪੂਰੇ ਇੱਕ ਸਾਲ ਲਈ ਮੁਅੱਤਲ ਹੋ ਜਾਂਦਾ ਹੈ।"
    },
    hi: {
      question: "यदि आप रासायनिक परीक्षण देने से इनकार करते हैं तो क्या परिणाम होता है?",
      options: ["कोई जुर्माना नहीं", "180 दिनों का निलंबन", "1 वर्ष के लिए लाइसेंस निलंबन", "2 वर्ष का निलंबन"],
      explanation: "रासायनिक परीक्षण से इनकार करने पर ड्राइविंग लाइसेंस 1 वर्ष के लिए निलंबित कर दिया जाता है।"
    }
  },
  "78": {
    es: {
      question: "¿Es legal enviar mensajes de texto o sostener el teléfono celular mientras conduce en Indiana?",
      options: ["Sí, en autopistas", "No, es ilegal sostener o usar el teléfono mientras conduce", "Sí, en semáforos en rojo", "Solo si es mayor de 25 años"],
      explanation: "En Indiana es completamente ilegal sostener o usar un teléfono mientras maneja, excepto con modo manos libres."
    },
    ps: {
      question: "ایا په انډیانا کې د موټر چلولو پرمهال په لاس کې د تلیفون نیول یا مسیج کول قانوني دي؟",
      options: ["هو په لویو لارو کې", "نه، دا غیرقانوني ده", "هو په سور څراغ ولاړیدو کې", "یوازې که له ۲۵ کلونو پورته یاست"],
      explanation: "د موټر چلولو پر مهال په لاس کې د تلیفون کارول یا ټیکست کول غیرقانوني دي."
    },
    pa: {
      question: "ਕੀ ਇੰਡੀਆਨਾ ਵਿੱਚ ਗੱਡੀ ਚਲਾਉਂਦੇ ਸਮੇਂ ਹੱਥ ਵਿੱਚ ਫ਼ੋਨ ਫੜਨਾ ਜਾਂ ਟੈਕਸਟ ਕਰਨਾ ਕਾਨੂੰਨੀ ਹੈ?",
      options: ["ਹਾਂ, ਹਾਈਵੇਅ ਤੇ", "ਨਹੀਂ, ਇਹ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ", "ਹਾਂ, ਲਾਲ ਬੱਤੀ ਤੇ", "ਸਿਰਫ਼ 25 ਸਾਲ ਤੋਂ ਵੱਧ ਉਮਰ ਵਾਲਿਆਂ ਲਈ"],
      explanation: "ਡਰਾਈਵਿੰਗ ਕਰਦੇ ਸਮੇਂ ਫ਼ੋਨ ਹੱਥ ਵਿੱਚ ਫੜਨਾ ਜਾਂ ਟੈਕਸਟ ਕਰਨਾ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ।"
    },
    hi: {
      question: "क्या इंडियाना में गाड़ी चलाते समय फोन हाथ में पकड़ना या टेक्स्ट करना कानूनी है?",
      options: ["हाँ, हाईवे पर", "नहीं, यह पूरी तरह अवैध है", "हाँ, लाल बत्ती पर", "केवल 25 वर्ष से अधिक उम्र वालों के लिए"],
      explanation: "गाड़ी चलाते समय हाथ में मोबाइल फोन पकड़ना या टेक्स्ट करना गैरकानूनी है।"
    }
  },
  "79": {
    es: {
      question: "¿Cuándo se permite usar un dispositivo de telecomunicaciones mientras conduce?",
      options: ["Nunca", "Con tecnología manos libres o para emergencias al 911", "Solo en semáforos", "Solo en calles locales"],
      explanation: "Solo se permite el uso con modo manos libres (Bluetooth) o para llamar al 911 en emergencias reales."
    },
    ps: {
      question: "د موټر چلولو پر مهال کله د تلیفون کارول جواز لري؟",
      options: ["هیڅکله نه", "کله چې hands-free وي یا د 911 بیړنۍ اړیکې لپاره", "یوازې په سور څراغ کې", "یوازې په ښار کې"],
      explanation: "تلیفون یوازې د هینډز-فري له لارې یا ۹۱۱ ته د زنګ وهلو لپاره کارول کیدی شي."
    },
    pa: {
      question: "ਗੱਡੀ ਚਲਾਉਂਦੇ ਸਮੇਂ ਫ਼ੋਨ ਦੀ ਵਰਤੋਂ ਕਦੋਂ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ?",
      options: ["ਕਦੇ ਨਹੀਂ", "ਜਦੋਂ ਹੈਂਡਸ-ਫ੍ਰੀ ਹੋਵੇ ਜਾਂ 911 ਐਮਰਜੈਂਸੀ ਕਾਲ ਲਈ", "ਸਿਰਫ਼ ਲਾਲ ਬੱਤੀ ਤੇ", "ਸਿਰਫ਼ ਸ਼ਹਿਰ ਵਿੱਚ"],
      explanation: "ਸਿਰਫ਼ ਹੈਂਡਸ-ਫ੍ਰੀ ਮੋਡ ਵਿੱਚ ਜਾਂ 911 ਐਮਰਜੈਂਸੀ ਲਈ ਹੀ ਫ਼ੋਨ ਦੀ ਵਰਤੋਂ ਜਾਇਜ਼ ਹੈ।"
    },
    hi: {
      question: "गाड़ी चलाते समय फोन का उपयोग करने की अनुमति कब होती है?",
      options: ["कभी नहीं", "जब हैंड्स-फ्री हो या 911 आपातकालीन कॉल के लिए", "केवल लाल बत्ती पर", "केवल शहर में"],
      explanation: "केवल हैंड्स-फ्री तकनीक से या 911 पर आपातकालीन कॉल करने के लिए ही फोन का उपयोग किया जा सकता है।"
    }
  },
  "80": {
    es: {
      question: "¿Qué debe hacer al acercarse a un vehículo de emergencia detenido con luces intermitentes encendidas?",
      options: ["Reducir 10 mph bajo el límite", "Cambiar de carril alejándose del vehículo si es posible", "Ambas: cambiar de carril o reducir al menos 10 mph", "Continuar igual"],
      explanation: "La ley 'Move Over' exige cambiar al carril más alejado o reducir la velocidad al menos 10 mph por debajo del límite."
    },
    ps: {
      question: "کله چې بیړني ولاړ موټر (امبولانس یا پولیس) ته ورسیږئ چې څراغونه یې بل وي څه باید وکړئ؟",
      options: ["سرعت ۱۰ مایل راکم کړئ", "بل لین ته واوړئ که امکان ولري", "دواړه: لین بدل کړئ او یا لږترلږه ۱۰ مایل په ساعت سرعت راکم کړئ", "په عادي سرعت لاړ شئ"],
      explanation: "د Move Over قانون له مخې بل لین ته واوړئ یا سرعت ۱۰ مایل راکم کړئ."
    },
    pa: {
      question: "ਫਲੈਸ਼ਿੰਗ ਲਾਈਟਾਂ ਵਾਲੇ ਐਮਰਜੈਂਸੀ ਵਾਹਨ ਕੋਲ ਪਹੁੰਚਣ ਤੇ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["ਸਪੀਡ 10 mph ਘਟਾਓ", "ਜੇ ਸੰਭਵ ਹੋਵੇ ਤਾਂ ਦੂਜੀ ਲੇਨ ਵਿੱਚ ਜਾਓ", "ਦੋਵੇਂ: ਲੇਨ ਬਦਲੋ ਜਾਂ ਸਪੀਡ ਘੱਟੋ-ਘੱਟ 10 mph ਘਟਾਓ", "ਆਮ ਵਾਂਗ ਚੱਲੋ"],
      explanation: "Move Over ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਦੂਜੀ ਲੇਨ ਵਿੱਚ ਜਾਓ ਜਾਂ ਗਤੀ 10 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਘਟਾਓ।"
    },
    hi: {
      question: "फ्लैशिंग लाइट वाले आपातकालीन वाहन के पास पहुँचने पर आपको क्या करना चाहिए?",
      options: ["गति 10 mph कम करें", "यदि संभव हो तो दूसरी लेन में बदलें", "दोनों: लेन बदलें या गति कम से कम 10 mph धीमी करें", "सामान्य गति से चलते रहें"],
      explanation: "मूव ओवर कानून के तहत आपातकालीन वाहन से दूर वाली लेन में जाएं या गति 10 मील प्रति घंटा कम करें।"
    }
  },
  "81": {
    es: {
      question: "¿Qué vehículos se consideran vehículos de emergencia autorizados?",
      options: ["Solo policía y bomberos", "Policía, bomberos, ambulancias y otros vehículos designados por ley", "Solo ambulancias", "Solo policía"],
      explanation: "Incluyen vehículos de bomberos, policía, ambulancias y vehículos de rescate de emergencia."
    },
    ps: {
      question: "کوم وسایط د مجاز بیړنیو وسایطو (emergency vehicles) په توګه پیژندل کیږي؟",
      options: ["یوازې پولیس او اور وژونکي", "پولیس، د اور وژنې موټرونه، امبولانسونه او نور قانوني وسایط", "یوازې امبولانس", "یوازې پولیس"],
      explanation: "د اور وژنې ډله، پولیس، امبولانس او بیړني روغتیايي موټرونه بیړني ګڼل کیږي."
    },
    pa: {
      question: "ਕਿਹੜੇ ਵਾਹਨਾਂ ਨੂੰ ਐਮਰਜੈਂਸੀ ਵਾਹਨ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?",
      options: ["ਸਿਰਫ਼ ਪੁਲਿਸ ਅਤੇ ਫਾਇਰ", "ਪੁਲਿਸ, ਫਾਇਰ ਬ੍ਰਿਗੇਡ, ਐਂਬੂਲੈਂਸ ਅਤੇ ਹੋਰ ਅਧਿਕਾਰਤ ਵਾਹਨ", "ਸਿਰਫ਼ ਐਂਬੂਲੈਂਸ", "ਸਿਰਫ਼ ਪੁਲਿਸ"],
      explanation: "ਪੁਲਿਸ, ਫਾਇਰ ਬ੍ਰਿਗੇਡ ਅਤੇ ਐਂਬੂਲੈਂਸ ਅਧਿਕਾਰਤ ਐਮਰਜੈਂਸੀ ਵਾਹਨ ਹਨ।"
    },
    hi: {
      question: "किन वाहनों को अधिकृत आपातकालीन वाहन माना जाता है?",
      options: ["केवल पुलिस और अग्निशमन", "पुलिस, अग्निशमन, एम्बुलेंस और अन्य अधिकृत वाहन", "केवल एम्बुलेंस", "केवल पुलिस"],
      explanation: "पुलिस, दमकल, एम्बुलेंस और कानून द्वारा निर्दिष्ट अन्य वाहनों को आपातकालीन वाहन माना जाता है।"
    }
  },
  "82": {
    es: {
      question: "¿Qué debe hacer si se ve involucrado en un accidente vehicular?",
      options: ["Irse de inmediato", "Detenerse inmediatamente y permanecer en la escena", "Llamar al 911 solo si hay heridos", "Moverse y no decir nada"],
      explanation: "Debe detenerse inmediatamente en la escena o lo más cerca posible sin obstruir y permanecer allí."
    },
    ps: {
      question: "که تاسو په ټکر یا حادثه کې ښکیل شئ څه باید وکړئ؟",
      options: ["سمدستي وتښتئ", "سمدلاسه ودریږئ او په پیښه ځای کې پاتې شئ", "یوازې ۹۱۱ ته زنګ ووهئ که څوک ژوبل وي", "هیڅ ونه وایئ"],
      explanation: "چلوونکی باید سمدستي موټر ودروي او په صحنه کې تر هغه وخته پاتې شي چې معلومات تبادله شي."
    },
    pa: {
      question: "ਜੇਕਰ ਤੁਸੀਂ ਕਿਸੇ ਦੁਰਘਟਨਾ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋ ਜਾਂਦੇ ਹੋ ਤਾਂ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["ਤੁਰੰਤ ਚਲੇ ਜਾਓ", "ਤੁਰੰਤ ਰੁਕੋ ਅਤੇ ਘਟਨਾ ਸਥਾਨ ਤੇ ਹੀ ਰਹੋ", "ਸਿਰਫ਼ ਤਾਂ ਕਾਲ ਕਰੋ ਜੇ ਕੋਈ ਜ਼ਖਮੀ ਹੋਵੇ", "ਕੁਝ ਨਾ ਬੋਲੋ"],
      explanation: "ਦੁਰਘਟਨਾ ਹੋਣ ਤੇ ਤੁਰੰਤ ਰੁਕਣਾ ਅਤੇ ਮੌਕੇ ਤੇ ਰਹਿਣਾ ਕਾਨੂੰਨੀ ਤੌਰ ਤੇ ਲਾਜ਼ਮੀ ਹੈ।"
    },
    hi: {
      question: "यदि आप किसी दुर्घटना में शामिल होते हैं तो आपको क्या करना चाहिए?",
      options: ["तुरंत चले जाएं", "तुरंत रुकें और घटनास्थल पर ही रहें", "केवल चोट लगने पर कॉल करें", "वाहन छोड़ दें"],
      explanation: "दुर्घटना होने पर तुरंत रुकना और घटनास्थल पर बने रहना अनिवार्य है।"
    }
  },
  "83": {
    es: {
      question: "¿Qué información debe proporcionar después de un accidente?",
      options: ["Solo su nombre", "Nombre, dirección, registro del vehículo y licencia de conducir", "Solo seguro", "Nada si no hay daños"],
      explanation: "Debe proporcionar su nombre, dirección, número de registro del vehículo y mostrar su licencia."
    },
    ps: {
      question: "له حادثې وروسته باید کوم معلومات شریک کړئ؟",
      options: ["یوازې نوم", "نوم، پته، د موټر د ثبت شمېره او د موټر چلولو لایسنس", "یوازې بیمه", "هیڅ نه"],
      explanation: "تاسو باید خپل نوم، پته، د موټر رجسټریشن او د لایسنس معلومات نورو ته ورکړئ."
    },
    pa: {
      question: "ਹਾਦਸੇ ਤੋਂ ਬਾਅਦ ਤੁਹਾਨੂੰ ਕਿਹੜੀ ਜਾਣਕਾਰੀ ਦੇਣੀ ਚਾਹੀਦੀ ਹੈ?",
      options: ["ਸਿਰਫ਼ ਨਾਮ", "ਨਾਮ, ਪਤਾ, ਵਾਹਨ ਦਾ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੰਬਰ ਅਤੇ ਲਾਇਸੈਂਸ", "ਸਿਰਫ਼ ਬੀਮਾ", "ਕੁਝ ਨਹੀਂ"],
      explanation: "ਆਪਣਾ ਨਾਮ, ਪਤਾ, ਗੱਡੀ ਦਾ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੰਬਰ ਅਤੇ ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ ਦਿਖਾਓ।"
    },
    hi: {
      question: "दुर्घटना के बाद आपको क्या जानकारी प्रदान करनी चाहिए?",
      options: ["केवल नाम", "नाम, पता, वाहन पंजीकरण संख्या और ड्राइविंग लाइसेंस", "केवल बीमा", "कुछ नहीं"],
      explanation: "अपना नाम, पता, वाहन का पंजीकरण नंबर और ड्राइविंग लाइसेंस दिखाना अनिवार्य है।"
    }
  },
  "84": {
    es: {
      question: "¿Cuándo debe mover su vehículo fuera de los carriles tras un accidente en autopista?",
      options: ["Siempre", "Nunca", "Si el vehículo funciona y no hay personas lesionadas, atrapadas ni materiales peligrosos", "Solo si llega la policía"],
      explanation: "Si no hay heridos, fallecidos ni fuga de materiales peligrosos, mueva el vehículo fuera del carril de circulación."
    },
    ps: {
      question: "په لویه لاره له حادثې وروسته موټر کله باید له سرک څخه غاړې ته کړئ؟",
      options: ["تل", "هیڅکله نه", "که چیرې څوک ژوبل نه وي او موټر چلیږي، نو د سرک له منځ څخه یې لرې کړئ", "یوازې که پولیس ووایی"],
      explanation: "که ټپي یا مړی نه وي او خطرناک توکي نه وي توي شوي، موټر د ترافیک له لارې لرې کړئ."
    },
    pa: {
      question: "ਹਾਈਵੇਅ ਤੇ ਹਾਦਸੇ ਤੋਂ ਬਾਅਦ ਗੱਡੀ ਕਦੋਂ ਸੜਕ ਤੋਂ ਹਟਾਉਣੀ ਚਾਹੀਦੀ ਹੈ?",
      options: ["ਹਮੇਸ਼ਾ", "ਕਦੇ ਨਹੀਂ", "ਜੇਕਰ ਕੋਈ ਜ਼ਖਮੀ ਨਾ ਹੋਵੇ ਅਤੇ ਗੱਡੀ ਚੱਲਣਯੋਗ ਹੋਵੇ ਤਾਂ ਸੜਕ ਤੋਂ ਪਾਸੇ ਕਰੋ", "ਸਿਰਫ਼ ਪੁਲਿਸ ਦੇ ਕਹਿਣ ਤੇ"],
      explanation: "ਜੇਕਰ ਕੋਈ ਸੱਟ ਜਾਂ ਖ਼ਤਰਾ ਨਾ ਹੋਵੇ ਤਾਂ ਟ੍ਰੈਫਿਕ ਜਾਮ ਤੋਂ ਬਚਣ ਲਈ ਗੱਡੀ ਸੜਕ ਤੋਂ ਪਾਸੇ ਕਰੋ।"
    },
    hi: {
      question: "राजमार्ग पर दुर्घटना के बाद वाहन को सड़क से कब हटाना चाहिए?",
      options: ["हमेशा", "कभी नहीं", "यदि कोई घायल न हो और वाहन चलने योग्य हो तो सड़क से हटा दें", "केवल पुलिस के आने पर"],
      explanation: "यदि कोई चोट या खतरनाक सामग्री का रिसाव न हो, तो वाहन को तुरंत लेन से बाहर निकालें।"
    }
  },
  "85": {
    es: {
      question: "¿Qué debe hacer si sufre un pinchazo de llanta o estallido (blowout)?",
      options: ["Frenar de golpe", "Sujetar el volante con firmeza, mantener el auto derecho y desacelerar gradualmente", "Acelerar", "Girar el volante bruscamente"],
      explanation: "Sujete firmemente el volante, mantenga el auto en línea recta y quite el pie del acelerador sin frenar bruscamente."
    },
    ps: {
      question: "د موټر د ټایر د چاودېدو (blowout) پرمهال څه باید وکړئ؟",
      options: ["سمدستي کلک بریک ونیسئ", "سټیرنګ په دواړو لاسونو کلک ونیسئ، موټر مستقیم وساتئ او ورو ورو سرعت کم کړئ", "ګړندي شئ", "سټیرنګ په چټکۍ تاو کړئ"],
      explanation: "سټیرنګ مستقیم او کلک ونیسئ، له اګسلریټر پښه پورته کړئ او بریک په ناڅاپي ډول مه وهئ."
    },
    pa: {
      question: "ਟਾਇਰ ਫਟਣ (blowout) ਦੀ ਸਥਿਤੀ ਵਿੱਚ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["ਤੁਰੰਤ ਜ਼ੋਰ ਨਾਲ ਬ੍ਰੇਕ ਲਗਾਓ", "ਸਟੀਅਰਿੰਗ ਨੂੰ ਮਜ਼ਬੂਤੀ ਨਾਲ ਫੜੋ, ਗੱਡੀ ਸਿੱਧੀ ਰੱਖੋ ਅਤੇ ਹੌਲੀ-ਹੌਲੀ ਰਫ਼ਤਾਰ ਘਟਾਓ", "ਤੇਜ਼ ਕਰੋ", "ਸਟੀਅਰਿੰਗ ਤੇਜ਼ੀ ਨਾਲ ਘੁਮਾਓ"],
      explanation: "ਸਟੀਅਰਿੰਗ ਮਜ਼ਬੂਤੀ ਨਾਲ ਫੜੋ, ਗੱਡੀ ਸਿੱਧੀ ਰੱਖੋ ਅਤੇ ਅਚਾਨਕ ਬ੍ਰੇਕ ਲਗਾਉਣ ਤੋਂ ਬਚੋ।"
    },
    hi: {
      question: "टायर फटने (Blowout) की स्थिति में आपको क्या करना चाहिए?",
      options: ["तुरंत जोर से ब्रेक लगाएं", "स्टीयरिंग व्हील मजबूती से पकड़ें, कार को सीधा रखें और धीरे-धीरे गति कम करें", "गति बढ़ाएं", "स्टीयरिंग तेजी से मोड़ें"],
      explanation: "स्टीयरिंग मजबूती से पकड़ें, अचानक ब्रेक न लगाएं और एक्सीलेटर से पैर हटाकर धीरे-धीरे गति कम करें।"
    }
  },
  "86": {
    es: {
      question: "¿Qué debe hacer si los frenos de su vehículo fallan repentinamente?",
      options: ["Entrar en pánico", "Cambiar a una marcha más baja y bombear el pedal del freno con fuerza y rapidez", "Usar solo el freno de mano", "Apagar el motor de inmediato"],
      explanation: "Cambie a una marcha baja y bombee repetidamente el pedal del freno; use el freno de emergencia gradualmente si no responde."
    },
    ps: {
      question: "که چیرې د موټر بریک ناڅاپه ناکام شي څه باید وکړئ؟",
      options: ["وارخطا شئ", "ګیر ټیټ کړئ او بریک څو ځله په چټکۍ او زور سره پمپ کړئ", "یوازې هینډ بریک راکش کړئ", "موټر سمدستي ګل کړئ"],
      explanation: "ګیر کښته کړئ، د بریک پیډل په چټکۍ ووهئ او که کار ونه کړي نو په احتیاط له ایمرجنسي بریک څخه کار واخلئ."
    },
    pa: {
      question: "ਜੇਕਰ ਗੱਡੀ ਦੀਆਂ ਬ੍ਰੇਕਾਂ ਅਚਾਨਕ ਫੇਲ੍ਹ ਹੋ ਜਾਣ ਤਾਂ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["ਘਬਰਾ ਜਾਓ", "ਹੇਠਲੇ ਗੇਅਰ ਵਿੱਚ ਪਾਓ ਅਤੇ ਬ੍ਰੇਕ ਪੈਡਲ ਨੂੰ ਤੇਜ਼ੀ ਨਾਲ ਪੰਪ ਕਰੋ", "ਸਿਰਫ਼ ਪਾਰਕਿੰਗ ਬ੍ਰੇਕ ਵਰਤੋ", "ਇੰਜਣ ਬੰਦ ਕਰੋ"],
      explanation: "ਹੇਠਲੇ ਗੇਅਰ ਵਿੱਚ ਸ਼ਿਫਟ ਕਰੋ ਅਤੇ ਬ੍ਰੇਕ ਪੈਡਲ ਨੂੰ ਵਾਰ-ਵਾਰ ਜ਼ੋਰ ਨਾਲ ਪੰਪ ਕਰੋ।"
    },
    hi: {
      question: "यदि आपके वाहन के ब्रेक अचानक फेल हो जाएं तो क्या करना चाहिए?",
      options: ["घबरा जाएं", "निचले गियर में शिफ्ट करें और ब्रेक पेडल को तेजी से और जोर से पंप करें", "केवल हैंडब्रेक का उपयोग करें", "इंजन तुरंत बंद करें"],
      explanation: "निचले गियर में शिफ्ट करें, ब्रेक पेडल को बार-बार पंप करें और आपातकालीन ब्रेक का सावधानीपूर्वक उपयोग करें।"
    }
  },
  "87": {
    es: {
      question: "¿Durante los primeros 180 días con licencia probatoria, en qué horario tiene prohibido conducir?",
      options: ["Entre 9 p.m. y 6 a.m.", "Entre las 10 p.m. y las 5 a.m.", "Entre 11 p.m. y 6 a.m.", "Entre medianoche y 5 a.m."],
      explanation: "Durante los primeros 180 días, no puede conducir entre las 10 p.m. y las 5 a.m. sin acompañante autorizado."
    },
    ps: {
      question: "د ازمایښتي لایسنس په لومړیو ۱۸۰ ورځو کې په کومو ساعتونو کې موټر چلول منع دي؟",
      options: ["د شپې ۹ تر سهار ۶", "د شپې ۱۰ بجو څخه تر سهار ۵ بجو پورې", "د شپې ۱۱ تر سهار ۶", "له نیمې شپې تر سهار ۵"],
      explanation: "په لومړیو ۱۸۰ ورځو کې د شپې له ۱۰ څخه تر سهار ۵ پورې موټر چلول منع دي."
    },
    pa: {
      question: "ਪ੍ਰੋਬੇਸ਼ਨਰੀ ਲਾਇਸੈਂਸ ਦੇ ਪਹਿਲੇ 180 ਦਿਨਾਂ ਵਿੱਚ ਕਿਸ ਸਮੇਂ ਡਰਾਈਵਿੰਗ ਕਰਨ ਦੀ ਮਨਾਹੀ ਹੈ?",
      options: ["ਰਾਤ 9 ਤੋਂ ਸਵੇਰੇ 6", "ਰਾਤ 10 ਵਜੇ ਤੋਂ ਸਵੇਰੇ 5 ਵਜੇ ਦਰਮਿਆਨ", "ਰਾਤ 11 ਤੋਂ ਸਵੇਰੇ 6", "ਅੱਧੀ ਰਾਤ ਤੋਂ ਸਵੇਰੇ 5"],
      explanation: "ਪਹਿਲੇ 180 ਦਿਨਾਂ ਦੌਰਾਨ ਰਾਤ 10 ਵਜੇ ਤੋਂ ਸਵੇਰੇ 5 ਵਜੇ ਤੱਕ ਡਰਾਈਵਿੰਗ ਨਹੀਂ ਕੀਤੀ ਜਾ ਸਕਦੀ।"
    },
    hi: {
      question: "परिवीक्षाधीन लाइसेंस मिलने के पहले 180 दिनों में किस समय गाड़ी चलाने पर रोक होती है?",
      options: ["रात 9 बजे से सुबह 6 बजे", "रात 10 बजे से सुबह 5 बजे के बीच", "रात 11 बजे से सुबह 6 बजे", "आधी रात से सुबह 5 बजे"],
      explanation: "पहले 180 दिनों के लिए रात 10 बजे से सुबह 5 बजे के बीच गाड़ी चलाने की अनुमति नहीं होती।"
    }
  },
  "88": {
    es: {
      question: "¿Quién puede viajar con usted durante los primeros 180 días de licencia probatoria?",
      options: ["Cualquier persona", "Sin pasajeros a menos que viaje con un conductor con licencia de 25+ años, cónyuge 21+ o instructor", "Solo amigos", "Solo un pasajero"],
      explanation: "No se permiten pasajeros a menos que vaya acompañado en el asiento delantero por un conductor con licencia de 25+ años o cónyuge de 21+."
    },
    ps: {
      question: "د ازمایښتي لایسنس په لومړیو ۱۸۰ ورځو کې څوک کولی شي ستاسو سره په موټر کې کیني؟",
      options: ["هر څوک", "هیڅ مسافر نه مګر دا چې ۲۵ کلن یا تر هغه مشر با لایسنس چلوونکی یا ۲۱ کلن همسر مخکې سیټ کې وي", "یوازې ملګري", "یوازې یو مسافر"],
      explanation: "هیڅ مسافر نه شي کیناستی مګر دا چې یو تجربه لرونکی کس (۲۵+ کلن) په مخکني سیټ کې حاضر وي."
    },
    pa: {
      question: "ਪਹਿਲੇ 180 ਦਿਨਾਂ ਦੌਰਾਨ ਤੁਹਾਡੇ ਨਾਲ ਕੌਣ ਸਫ਼ਰ ਕਰ ਸਕਦਾ ਹੈ?",
      options: ["ਕੋਈ ਵੀ", "ਕੋਈ ਯਾਤਰੀ ਨਹੀਂ ਜਦੋਂ ਤੱਕ 25+ ਸਾਲ ਦਾ ਲਾਇਸੈਂਸਸ਼ੁਦਾ ਡਰਾਈਵਰ ਜਾਂ 21+ ਸਾਲ ਦਾ ਜੀਵਨ ਸਾਥੀ ਅੱਗੇ ਨਾ ਬੈਠਾ ਹੋਵੇ", "ਸਿਰਫ਼ ਦੋਸਤ", "ਸਿਰਫ਼ ਇੱਕ ਯਾਤਰੀ"],
      explanation: "ਕੋਈ ਹੋਰ ਯਾਤਰੀ ਨਹੀਂ ਬੈਠ ਸਕਦਾ ਜਦੋਂ ਤੱਕ ਅਗਲੀ ਸੀਟ ਤੇ 25 ਸਾਲ ਤੋਂ ਵੱਧ ਉਮਰ ਦਾ ਲਾਇਸੈਂਸਧਾਰਕ ਨਾ ਹੋਵੇ।"
    },
    hi: {
      question: "परिवीक्षाधीन लाइसेंस के पहले 180 दिनों में आपके साथ कौन यात्रा कर सकता है?",
      options: ["कोई भी", "कोई यात्री नहीं जब तक कि 25+ वर्ष का लाइसेंस प्राप्त चालक, 21+ पति/पत्नी या प्रशिक्षक अगली सीट पर न हो", "केवल मित्र", "केवल एक यात्री"],
      explanation: "पहले 180 दिनों में कोई भी यात्री नहीं बैठ सकता जब तक कि 25 वर्ष या उससे अधिक उम्र का लाइसेंस प्राप्त व्यक्ति साथ न हो।"
    }
  },
  "89": {
    es: {
      question: "¿Cuál es el requisito mínimo de seguro de responsabilidad en Indiana (25/50/25)?",
      options: ["$15,000 / $30,000 / $15,000", "$25,000 por lesión individual / $50,000 por accidente / $25,000 daños a propiedad", "$30,000 / $60,000 / $30,000", "$50,000 / $100,000 / $50,000"],
      explanation: "El estándar estatal mínimo es $25,000 por lesión a una persona, $50,000 por dos o más personas y $25,000 por daños a la propiedad."
    },
    ps: {
      question: "په انډیانا کې د مسؤلیت بیمې لږ تر لږه قانوني اړتیا (25/50/25) څومره ده؟",
      options: ["۱۵ زره / ۳۰ زره / ۱۵ زره", "$25,000 د یوه کس ټپي کیدو / $50,000 د دوو یا ډیرو / $25,000 د ملکیت زیان لپاره", "۳۰ زره / ۶۰ زره / ۳۰ زره", "۵۰ زره / ۱۰۰ زره / ۵۰ زره"],
      explanation: "د بیمې قانوني حد ۲۵ زره، ۵۰ زره او ۲۵ زره ډالره ټاکل شوی دی."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਬੀਮਾ ਲੋੜ (25/50/25) ਕੀ ਹੈ?",
      options: ["$15,000/$30,000/$15,000", "$25,000 ਇੱਕ ਵਿਅਕਤੀ ਦੀ ਸੱਟ / $50,000 ਕੁੱਲ ਸੱਟਾਂ / $25,000 ਜਾਇਦਾਦ ਦੇ ਨੁਕਸਾਨ ਲਈ", "$30,000/$60,000/$30,000", "$50,000/$100,000/$50,000"],
      explanation: "ਘੱਟੋ-ਘੱਟ ਲੋੜ $25,000 ਪ੍ਰਤੀ ਵਿਅਕਤੀ, $50,000 ਪ੍ਰਤੀ ਦੁਰਘਟਨਾ ਅਤੇ $25,000 ਜਾਇਦਾਦ ਦੇ ਨੁਕਸਾਨ ਲਈ ਹੈ।"
    },
    hi: {
      question: "इंडियाना में न्यूनतम देयता बीमा आवश्यकता (25/50/25) क्या है?",
      options: ["$15,000/$30,000/$15,000", "$25,000 प्रति व्यक्ति चोट / $50,000 प्रति दुर्घटना / $25,000 संपत्ति क्षति", "$30,000/$60,000/$30,000", "$50,000/$100,000/$50,000"],
      explanation: "न्यूनतम बीमा $25,000 शारीरिक चोट प्रति व्यक्ति, $50,000 प्रति दुर्घटना और $25,000 संपत्ति क्षति के लिए आवश्यक है।"
    }
  },
  "90": {
    es: {
      question: "¿Cuánto tiempo permanecen activos los puntos en su expediente de conducir en Indiana?",
      options: ["1 año", "2 años", "3 años", "5 años"],
      explanation: "Los puntos por infracciones permanecen activos durante dos años a partir de la fecha de la condena."
    },
    ps: {
      question: "په انډیانا کې منفي پوائنټونه (points) د څومره وخت لپاره په لایسنس ثبت او فعال پاتې کیږي؟",
      options: ["۱ کال", "۲ کاله", "۳ کاله", "۵ کاله"],
      explanation: "پوائنټونه د محکومیت له نیټې څخه د دوو کلونو لپاره فعال پاتې کیږي."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਡਰਾਈਵਿੰਗ ਰਿਕਾਰਡ ਤੇ ਪੁਆਇੰਟ ਕਿੰਨੇ ਸਮੇਂ ਲਈ ਐਕਟਿਵ ਰਹਿੰਦੇ ਹਨ?",
      options: ["1 ਸਾਲ", "2 ਸਾਲ", "3 ਸਾਲ", "5 ਸਾਲ"],
      explanation: "ਪੁਆਇੰਟ ਦੋ ਸਾਲਾਂ ਲਈ ਐਕਟਿਵ ਰਹਿੰਦੇ ਹਨ।"
    },
    hi: {
      question: "इंडियाना में ड्राइविंग रिकॉर्ड पर अंक (Points) कितने समय तक सक्रिय रहते हैं?",
      options: ["1 वर्ष", "2 वर्ष", "3 वर्ष", "5 वर्ष"],
      explanation: "दोषसिद्धि की तारीख से दो साल तक ड्राइविंग रिकॉर्ड पर पॉइंट सक्रिय रहते हैं।"
    }
  },
  "91": {
    es: {
      question: "¿Con cuántos puntos activos a los 21+ años debe presentar el examen teórico para renovar la licencia?",
      options: ["4 o más", "5 o más", "6 o más puntos activos", "8 o más"],
      explanation: "Si tiene 21 años o más y acumula 6 o más puntos activos, debe rendir nuevamente el examen de conocimientos para renovar."
    },
    ps: {
      question: "که چیرې تاسو ۲۱ کلن یاست او څو فعال پوائنټونه ولرئ باید د تجدید لپاره د پوهې ازموینه (knowledge exam) ورکړئ؟",
      options: ["۴ یا زیات", "۵ یا زیات", "۶ یا ډیر فعال پوائنټونه", "۸ یا زیات"],
      explanation: "که ۶ یا ډیر منفي پوائنټونه ولرئ د لایسنس نوي کولو لپاره باید بیرته امتحان ورکړئ."
    },
    pa: {
      question: "ਲਾਇਸੈਂਸ ਰੀਨਿਊ ਕਰਨ ਲਈ ਕਿੰਨੇ ਪੁਆਇੰਟ ਹੋਣ ਤੇ ਦੁਬਾਰਾ ਲਿਖਤੀ ਪ੍ਰੀਖਿਆ ਦੇਣੀ ਪੈਂਦੀ ਹੈ?",
      options: ["4 ਜਾਂ ਵੱਧ", "5 ਜਾਂ ਵੱਧ", "6 ਜਾਂ ਵੱਧ ਪੁਆਇੰਟ", "8 ਜਾਂ ਵੱਧ"],
      explanation: "ਜੇਕਰ ਰਿਕਾਰਡ ਤੇ 6 ਜਾਂ ਵੱਧ ਪੁਆਇੰਟ ਹਨ ਤਾਂ ਪ੍ਰੀਖਿਆ ਦੁਬਾਰਾ ਦੇਣੀ ਪਵੇਗੀ।"
    },
    hi: {
      question: "21 वर्ष की आयु में कितने सक्रिय पॉइंट होने पर लाइसेंस नवीनीकरण के लिए दोबारा लिखित परीक्षा देनी पड़ती है?",
      options: ["4 या अधिक", "5 या अधिक", "6 या अधिक सक्रिय पॉइंट", "8 या अधिक"],
      explanation: "यदि आपके ड्राइविंग रिकॉर्ड पर 6 या अधिक सक्रिय पॉइंट हैं, तो लाइसेंस नवीनीकरण के लिए ज्ञान परीक्षा उत्तीर्ण करनी होगी।"
    }
  },
  "92": {
    es: {
      question: "¿Qué porcentaje debe obtener para aprobar el examen teórico del BMV de Indiana?",
      options: ["70%", "75%", "80%", "90%"],
      explanation: "Debe obtener un puntaje de al menos el 80% (o 14 de 16 en señales) para aprobar el examen del BMV."
    },
    ps: {
      question: "د انډیانا BMV په ازموینه کې د پاس کیدو لپاره څو سلنه نمرې پکار دي؟",
      options: ["۷۰٪", "۷۵٪", "۸۰٪", "۹۰٪"],
      explanation: "تاسو باید لږترلږه ۸۰ سلنه نمرې ترلاسه کړئ ترڅو د BMV ازموینه پاس کړئ."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ BMV ਪ੍ਰੀਖਿਆ ਪਾਸ ਕਰਨ ਲਈ ਕਿੰਨੇ ਪ੍ਰਤੀਸ਼ਤ ਅੰਕ ਚਾਹੀਦੇ ਹਨ?",
      options: ["70%", "75%", "80%", "90%"],
      explanation: "ਪ੍ਰੀਖਿਆ ਪਾਸ ਕਰਨ ਲਈ ਘੱਟੋ-ਘੱਟ 80% ਅੰਕ ਪ੍ਰਾਪਤ ਕਰਨੇ ਜ਼ਰੂਰੀ ਹਨ।"
    },
    hi: {
      question: "इंडियाना BMV ज्ञान परीक्षा उत्तीर्ण करने के लिए कितने प्रतिशत अंक आवश्यक हैं?",
      options: ["70%", "75%", "80%", "90%"],
      explanation: "BMV ज्ञान परीक्षा में उत्तीर्ण होने के लिए आपको 80% या उससे अधिक अंक प्राप्त करने होंगे।"
    }
  },
  "93": {
    es: {
      question: "¿Cuándo puede volver a presentar el examen teórico del BMV si reprueba?",
      options: ["Inmediatamente", "Al siguiente día hábil", "Después de 1 semana", "Después de 1 mes"],
      explanation: "Si reprueba el examen de conocimientos, debe esperar hasta el siguiente día hábil para volver a intentarlo."
    },
    ps: {
      question: "که په BMV کې تیوري ازموینه کې ناکام شئ، کله کولی شئ بیا امتحان ورکړئ؟",
      options: ["سمدستي", "په بله کاري ورځ", "له یوې اونۍ وروسته", "له یوې میاشتې وروسته"],
      explanation: "تاسو باید تر بلې کاري ورځې انتظار وکړئ ترڅو بیا امتحان ورکړئ."
    },
    pa: {
      question: "ਜੇਕਰ ਲਿਖਤੀ ਪ੍ਰੀਖਿਆ ਫੇਲ੍ਹ ਹੋ ਜਾਵੇ ਤਾਂ ਦੁਬਾਰਾ ਕਦੋਂ ਦੇ ਸਕਦੇ ਹੋ?",
      options: ["ਤੁਰੰਤ", "ਅਗਲੇ ਕੰਮਕਾਜੀ ਦਿਨ", "1 ਹਫ਼ਤੇ ਬਾਅਦ", "1 ਮਹੀਨੇ ਬਾਅਦ"],
      explanation: "ਤੁਸੀਂ ਅਗਲੇ ਕੰਮਕਾਜੀ ਦਿਨ ਦੁਬਾਰਾ ਪ੍ਰੀਖਿਆ ਦੇ ਸਕਦੇ ਹੋ।"
    },
    hi: {
      question: "यदि आप BMV ज्ञान परीक्षा में अनुत्तीर्ण होते हैं, तो आप इसे दोबारा कब दे सकते हैं?",
      options: ["तुरंत", "अगले कारोबारी दिन", "एक सप्ताह बाद", "एक महीने बाद"],
      explanation: "यदि आप लिखित परीक्षा में फेल हो जाते हैं, तो आपको अगले कारोबारी दिन तक प्रतीक्षा करनी होगी।"
    }
  },
  "94": {
    es: {
      question: "¿Cuánto tiempo debe esperar si reprueba el examen práctico de manejo?",
      options: ["1 día", "3 días", "7 días", "30 días"],
      explanation: "Si reprueba el examen práctico de habilidades de manejo, debe esperar al menos 7 días antes de repetirlo."
    },
    ps: {
      question: "که تاسو د موټر چلولو په عملي (skills) ازموینه کې ناکام شئ څومره وخت باید صبر وکړئ؟",
      options: ["۱ ورځ", "۳ ورځې", "۷ ورځې", "۳۰ ورځې"],
      explanation: "که عملي ډرایونګ ټیسټ کې پاتې راشئ باید پوره ۷ ورځې انتظار وکړئ."
    },
    pa: {
      question: "ਜੇਕਰ ਡਰਾਈਵਿੰਗ ਸਕਿੱਲ ਟੈਸਟ ਵਿੱਚ ਫੇਲ੍ਹ ਹੋ ਜਾਵੋ ਤਾਂ ਕਿੰਨੇ ਦਿਨ ਉਡੀਕ ਕਰਨੀ ਪੈਂਦੀ ਹੈ?",
      options: ["1 ਦਿਨ", "3 ਦਿਨ", "7 ਦਿਨ", "30 ਦਿਨ"],
      explanation: "ਡਰਾਈਵਿੰਗ ਟੈਸਟ ਫੇਲ੍ਹ ਹੋਣ ਤੇ ਘੱਟੋ-ਘੱਟ 7 ਦਿਨ ਉਡੀਕ ਕਰਨੀ ਪੈਂਦੀ ਹੈ।"
    },
    hi: {
      question: "यदि आप ड्राइविंग कौशल (प्रैक्टिकल) परीक्षा में फेल हो जाते हैं, तो कितने दिन प्रतीक्षा करनी होगी?",
      options: ["1 दिन", "3 दिन", "7 दिन", "30 दिन"],
      explanation: "ड्राइविंग टेस्ट में फेल होने पर दोबारा टेस्ट देने के लिए कम से कम 7 दिन का इंतजार करना पड़ता है।"
    }
  },
  "95": {
    es: {
      question: "A 55 mph, ¿cuántos pies recorre un vehículo en un solo segundo?",
      options: ["Aproximadamente 51 pies", "Aproximadamente 81 pies", "Aproximadamente 103 pies", "Aproximadamente 120 pies"],
      explanation: "A 55 mph, un automóvil recorre aproximadamente 80.7 (cerca de 81) pies por segundo."
    },
    ps: {
      question: "په ۵۵ مایل سرعت کې، یو موټر په یو ثانیه کې څو فوټه واټن وهي؟",
      options: ["شاوخوا ۵۱ فوټه", "شاوخوا ۸۱ فوټه", "شاوخوا ۱۰۳ فوټه", "شاوخوا ۱۲۰ فوټه"],
      explanation: "په ۵۵ مایل سرعت موټر په هر ثانیه کې نږدې ۸۱ فوټه مزل کوي."
    },
    pa: {
      question: "55 mph ਦੀ ਰਫ਼ਤਾਰ ਤੇ ਇੱਕ ਸਕਿੰਟ ਵਿੱਚ ਗੱਡੀ ਕਿੰਨੇ ਫੁੱਟ ਚੱਲਦੀ ਹੈ?",
      options: ["ਲਗਭਗ 51 ਫੁੱਟ", "ਲਗਭਗ 81 ਫੁੱਟ", "ਲਗਭਗ 103 ਫੁੱਟ", "ਲਗਭਗ 120 ਫੁੱਟ"],
      explanation: "55 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਦੀ ਰਫ਼ਤਾਰ ਤੇ ਵਾਹਨ ਇੱਕ ਸਕਿੰਟ ਵਿੱਚ ਲਗਭਗ 81 ਫੁੱਟ ਦੀ ਦੂਰੀ ਤੈਅ ਕਰਦਾ ਹੈ।"
    },
    hi: {
      question: "55 mph की गति से एक सेकंड में वाहन कितने फीट की दूरी तय करता है?",
      options: ["लगभग 51 फीट", "लगभग 81 फीट", "लगभग 103 फीट", "लगभग 120 फीट"],
      explanation: "55 मील प्रति घंटे की रफ्तार से गाड़ी एक सेकंड में लगभग 81 फीट चलती है।"
    }
  },
  "96": {
    es: {
      question: "A 70 mph, ¿cuántos pies recorre un vehículo en un segundo?",
      options: ["Aproximadamente 51 pies", "Aproximadamente 81 pies", "Aproximadamente 103 pies", "Aproximadamente 120 pies"],
      explanation: "A 70 mph, un vehículo recorre aproximadamente 102.7 (cerca de 103) pies en un solo segundo."
    },
    ps: {
      question: "په ۷۰ مایل سرعت کې، یو موټر په یو ثانیه کې څو فوټه واټن وهي؟",
      options: ["شاوخوا ۵۱ فوټه", "شاوخوا ۸۱ فوټه", "شاوخوا ۱۰۳ فوټه", "شاوخوا ۱۲۰ فوټه"],
      explanation: "په ۷۰ مایل سرعت کې موټر په یوه ثانیه کې شاوخوا ۱۰۳ فوټه حرکت کوي."
    },
    pa: {
      question: "70 mph ਦੀ ਰਫ਼ਤਾਰ ਤੇ ਇੱਕ ਸਕਿੰਟ ਵਿੱਚ ਗੱਡੀ ਕਿੰਨੇ ਫੁੱਟ ਤੈਅ ਕਰਦੀ ਹੈ?",
      options: ["ਲਗਭਗ 51 ਫੁੱਟ", "ਲਗਭਗ 81 ਫੁੱਟ", "ਲਗਭਗ 103 ਫੁੱਟ", "ਲਗਭਗ 120 ਫੁੱਟ"],
      explanation: "70 ਮੀਲ ਪ੍ਰਤੀ ਘੰਟਾ ਤੇ ਕਾਰ ਇੱਕ ਸਕਿੰਟ ਵਿੱਚ ਲਗਭਗ 103 ਫੁੱਟ ਜਾਂਦੀ ਹੈ।"
    },
    hi: {
      question: "70 mph की गति पर एक सेकंड में वाहन कितने फीट चलता है?",
      options: ["लगभग 51 फीट", "लगभग 81 फीट", "लगभग 103 फीट", "लगभग 120 फीट"],
      explanation: "70 मील प्रति घंटे की गति से वाहन एक सेकंड में लगभग 103 फीट की दूरी तय करता है।"
    }
  },
  "97": {
    es: {
      question: "¿Cuántas horas de práctica supervisada debe completar un estudiante de manejo en Indiana?",
      options: ["25 horas", "50 horas (incluidas al menos 10 horas de noche)", "75 horas", "100 horas"],
      explanation: "Indiana exige 50 horas de práctica de conducción supervisada, con al menos 10 horas de noche."
    },
    ps: {
      question: "په انډیانا کې د ډرایورۍ زده کوونکی باید څو ساعته تر څارنې لاندې موټر چلول بشپړ کړي؟",
      options: ["۲۵ ساعته", "۵۰ ساعته (چې لږترلږه ۱۰ ساعته پکې د شپې وي)", "۷۵ ساعته", "۱۰۰ ساعته"],
      explanation: "انډیانا ۵۰ ساعته د موټر چلولو تمرین غواړي چې ۱۰ ساعته یې باید د شپې لخوا وي."
    },
    pa: {
      question: "ਇੰਡੀਆਨਾ ਵਿੱਚ ਡਰਾਈਵਿੰਗ ਵਿਦਿਆਰਥੀ ਨੂੰ ਕਿੰਨੇ ਘੰਟੇ ਨਿਗਰਾਨੀ ਹੇਠ ਅਭਿਆਸ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["25 ਘੰਟੇ", "50 ਘੰਟੇ (ਰਾਤ ਦੇ ਘੱਟੋ-ਘੱਟ 10 ਘੰਟੇ ਸ਼ਾਮਲ)", "75 ਘੰਟੇ", "100 ਘੰਟੇ"],
      explanation: "ਕੁੱਲ 50 ਘੰਟੇ ਡਰਾਈਵਿੰਗ ਅਭਿਆਸ ਲਾਜ਼ਮੀ ਹੈ, ਜਿਸ ਵਿੱਚ 10 ਘੰਟੇ ਰਾਤ ਦੇ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ।"
    },
    hi: {
      question: "इंडियाना में शिक्षार्थी को कितने घंटे की देखरेख में ड्राइविंग अभ्यास पूरा करना होगा?",
      options: ["25 घंटे", "50 घंटे (कम से कम 10 घंटे रात के समय सहित)", "75 घंटे", "100 घंटे"],
      explanation: "इंडियाना में 50 घंटे के ड्राइविंग अभ्यास की आवश्यकता होती है, जिसमें से कम से कम 10 घंटे रात के होने चाहिए।"
    }
  },
  "98": {
    es: {
      question: "¿Cuál es la distancia mínima de seguridad requerida por ley al rebasar a un ciclista?",
      options: ["1 pie", "2 pies", "3 pies", "5 pies"],
      explanation: "Los automovilistas deben mantener un espacio libre de al menos 3 pies al adelantar a un ciclista."
    },
    ps: {
      question: "له بایسکل چلوونکي څخه د تېرېدو پرمهال د قانون له مخې لږ تر لږه خوندي واټن څومره دی؟",
      options: ["۱ فوټ", "۲ فوټه", "۳ فوټه", "۵ فوټه"],
      explanation: "له بایسکل ځغلونکي څخه د تېرېدو پرمهال لږترلږه ۳ فوټه فاصله ساتل قانوني دي."
    },
    pa: {
      question: "ਸਾਈਕਲ ਸਵਾਰ ਨੂੰ ਓਵਰਟੇਕ ਕਰਦੇ ਸਮੇਂ ਕਾਨੂੰਨ ਅਨੁਸਾਰ ਘੱਟੋ-ਘੱਟ ਕਿੰਨੀ ਦੂਰੀ ਰੱਖਣੀ ਚਾਹੀਦੀ ਹੈ?",
      options: ["1 ਫੁੱਟ", "2 ਫੁੱਟ", "3 ਫੁੱਟ", "5 ਫੁੱਟ"],
      explanation: "ਸਾਈਕਲ ਸਵਾਰ ਤੋਂ ਘੱਟੋ-ਘੱਟ 3 ਫੁੱਟ ਦੀ ਸੁਰੱਖਿਅਤ ਦੂਰੀ ਬਣਾ ਕੇ ਰੱਖੋ।"
    },
    hi: {
      question: "साइकिल चालक को ओवरटेक करते समय कानून द्वारा न्यूनतम कितनी सुरक्षित दूरी आवश्यक है?",
      options: ["1 फीट", "2 फीट", "3 फीट", "5 फीट"],
      explanation: "साइकिल चालक को पार करते समय कम से कम 3 फीट की सुरक्षित दूरी बनाए रखना अनिवार्य है।"
    }
  },
  "99": {
    es: {
      question: "¿Cuál es la distancia máxima de frenado de un camión con remolque cargado a 55 mph?",
      options: ["150 pies", "250 pies", "300 pies", "Más de 400 pies"],
      explanation: "Un camión con remolque totalmente cargado a 55 mph puede necesitar más de 400 pies para detenerse por completo."
    },
    ps: {
      question: "په ۵۵ مایل سرعت کې، د بار وړونکي لوی ټریلر اعظمي درېدو واټن څومره دی؟",
      options: ["۱۵۰ فوټه", "۲۵۰ فوټه", "۳۰۰ فوټه", "له ۴۰۰ فوټو څخه زیات"],
      explanation: "یو ډک ټریلر د ۵۵ مایل سرعت څخه بشپړ درېدو لپاره له ۴۰۰ فوټو څخه ډیر واټن ته اړتیا لري."
    },
    pa: {
      question: "55 mph ਤੇ ਇੱਕ ਭਰੇ ਹੋਏ ਵੱਡੇ ਟਰੈਕਟਰ-ਟਰੇਲਰ ਨੂੰ ਰੁਕਣ ਲਈ ਕਿੰਨੀ ਦੂਰੀ ਲੱਗਦੀ ਹੈ?",
      options: ["150 ਫੁੱਟ", "250 ਫੁੱਟ", "300 ਫੁੱਟ", "400 ਫੁੱਟ ਤੋਂ ਵੱਧ"],
      explanation: "ਵੱਡੇ ਭਾਰੇ ਟਰੱਕ ਨੂੰ 55 ਮੀਲ ਦੀ ਰਫ਼ਤਾਰ ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੁਕਣ ਲਈ 400 ਫੁੱਟ ਤੋਂ ਵੱਧ ਦੂਰੀ ਲੱਗ ਸਕਦੀ ਹੈ।"
    },
    hi: {
      question: "55 mph की गति पर पूरी तरह से लोड किए गए बड़े ट्रेलर-ट्रक की अधिकतम रोक दूरी क्या है?",
      options: ["150 फीट", "250 फीट", "300 फीट", "400 फीट से अधिक"],
      explanation: "55 मील प्रति घंटे की गति से पूरी तरह से भरे हुए ट्रक को पूरी तरह रुकने में 400 फीट से अधिक की दूरी लग सकती है।"
    }
  },
  "100": {
    es: {
      question: "¿Qué debe hacer al conducir con niebla espesa?",
      options: ["Usar luces altas", "Usar luces bajas y reducir la velocidad", "Apagar las luces por completo", "Conducir solo con luces intermitentes de emergencia"],
      explanation: "En niebla espesa, las luces altas rebotan y encandilan. Use luces bajas y maneje despacio."
    },
    ps: {
      question: "په درنه دوړه یا لړه (heavy fog) کې د موټر چلولو پرمهال څه باید وکړئ؟",
      options: ["لوړ څراغونه (high beams) بل کړئ", "ټیټ څراغونه (low beams) وکاروئ او سرعت راکم کړئ", "څراغونه بیخي مړه کړئ", "یوازې په اشارو موټر چلوئ"],
      explanation: "په دوړه کې لوړ څراغونه بیرته ستاسو سترګو ته رڼا وهي؛ تل ټیټ څراغونه ولګوئ او ورو لاړ شئ."
    },
    pa: {
      question: "ਸੰਘਣੀ ਧੁੰਦ ਵਿੱਚ ਗੱਡੀ ਚਲਾਉਂਦੇ ਸਮੇਂ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?",
      options: ["ਹਾਈ ਬੀਮ ਲਾਈਟਾਂ ਵਰਤੋ", "ਲੋਅ ਬੀਮ ਲਾਈਟਾਂ ਵਰਤੋ ਅਤੇ ਗਤੀ ਘਟਾਓ", "ਲਾਈਟਾਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਬੰਦ ਕਰੋ", "ਸਿਰਫ਼ ਹੈਜ਼ਰਡ ਲਾਈਟਾਂ ਚਲਾਓ"],
      explanation: "ਧੁੰਦ ਵਿੱਚ ਹਮੇਸ਼ਾ ਲੋਅ ਬੀਮ ਲਾਈਟਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ ਅਤੇ ਗਤੀ ਹੌਲੀ ਰੱਖੋ।"
    },
    hi: {
      question: "घने कोहरे में गाड़ी चलाते समय आपको क्या करना चाहिए?",
      options: ["हाई-बीम हेडलाइट्स का उपयोग करें", "लो-बीम हेडलाइट्स का उपयोग करें और गति कम करें", "हेडलाइट्स पूरी तरह बंद कर दें", "केवल खतरे की बत्तियों पर गाड़ी चलाएं"],
      explanation: "कोहरे में हाई बीम प्रकाश को आंखों में परावर्तित करती है। हमेशा लो बीम का उपयोग करें और गति धीमी रखें।"
    }
  }
};

