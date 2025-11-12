// Motor de conocimiento con respuestas amplias, naturales y con emojis ✨

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const baseConocimiento = {
  saludo: {
    palabrasClave: [
      'hola','holaa','holaaa','buenos dias','buenas tardes','buenas noches','buen dia','buenas',
      'hey','holi','holis','qué tal','que tal','como estas','cómo estás','saludos','saludito',
      'buen inicio de semana','feliz dia','feliz día'
    ],
    respuesta: [
      `Hola 😊 Qué alegría saludarte.  
Espero que estés teniendo un lindo día. ¿Quieres que te oriente sobre alimentación infantil, anemia, lactancia o cuidado del bebé? ✨`,
      `Hola, bienvenida 💛  
Puedo ayudarte con información sobre hierro, vitaminas, alimentación por edades y prevención de anemia infantil.  
¿Sobre qué tema te gustaría saber más? 🍎`,
      `Hola 🌞 Qué gusto verte por aquí.  
Estoy lista para resolver tus dudas sobre nutrición del bebé, lactancia o introducción de sólidos.  
Cuéntame un poquito más 🤱🍌`,
      `Hola 🌸  
Gracias por escribirme.  
¿Hablamos de cómo prevenir la anemia o qué alimentos ofrecer a tu bebé? 🍲`
    ]
  },

  anemia: {
    palabrasClave: [
      'anemia','anemico','anémico','anemia infantil','anemia en bebes','anemia en niños',
      'baja hemoglobina','poca hemoglobina','hemoglobina baja','hemograma bajo','ferritina baja',
      'globulos rojos bajos','glóbulos rojos bajos','sangre baja','deficiencia de hierro','deficit de hierro',
      'hierro bajo','falta de hierro','ferropenica','ferropénica','anemia ferropenica','anemia ferropénica',
      'bebé pálido','bebe palido','niño palido','piel palida','labios palidos','color amarillento',
      'sin energia','falta de energia','cansancio','somnolencia','irritabilidad','decaimiento',
      'no quiere comer','poco apetito','perdida de apetito','no juega','pierde interes','ojeras',
      'reserva de hierro agotada','sospecha de anemia','signos de anemia','sintomas de anemia'
    ],
    respuesta: [
      `🩸 La anemia infantil es muy común entre los 6 y 12 meses, cuando se agotan las reservas de hierro con las que nacen.  
Ocurre cuando no hay suficiente hierro para formar hemoglobina, que transporta oxígeno en la sangre.

Señales frecuentes  
• Palidez en piel, labios o párpados  
• Cansancio o menor energía  
• Irritabilidad o desánimo  
• Poco apetito o menos interés al jugar

Prevención  
• Desde los 6 meses: hígado, sangrecita, carne molida, lentejas y garbanzos bien cocidos.  
• Combina con frutas ricas en vitamina C como naranja, mandarina, papaya o tomate para mejorar la absorción.  
• Evita té, café y cacao junto con las comidas, porque reducen la absorción del hierro.

Si sospechas anemia, realiza control de hemoglobina con el pediatra. Una detección temprana ayuda a recuperar la energía del bebé. 🌻`,
      `❤️ La anemia por deficiencia de hierro reduce el transporte de oxígeno y puede causar palidez, cansancio, sueño y pérdida de apetito.  
Claves prácticas  
• Ofrece carne, vísceras, sangrecita o pescado 3 a 4 veces por semana.  
• Menestras bien cocidas y machacadas.  
• Vitamina C en la misma comida para absorber mejor.  
• Suplementos de hierro solo indicados por profesional.`
    ]
  },

  alimentosHierro: {
    palabrasClave: [
      'alimentos ricos en hierro', 'alimentos son ricos en hierro','comidas con hierro','hierro hemo','hierro no hemo',
      'sangrecita','higado','hígado','carne roja','menestras','lentejas','garbanzos','pallar',
      'espinaca','acelga','quinua','huevo','pescado azul'
    ],
    respuesta: [
      `🍖 Fuentes de hierro que funcionan muy bien  
Hierro hemo (se absorbe mejor)  
• Sangrecita, hígado de pollo o res  
• Carne de res, pavo, pollo  
• Pescado como anchoveta, bonito o atún

Hierro no hemo  
• Lentejas, garbanzos, frejoles  
• Quinua, avena fortificada  
• Verduras como espinaca cocida

Consejo  
• Acompaña con vitamina C: naranja, mandarina, fresa, papaya, tomate.  
• Evita té, café o cacao en la misma comida. ☕🚫`
    ]
  },

  preparacionSegura: {
    palabrasClave: [
      'preparacion segura','preparación segura','higiene de alimentos','manipulacion','manipulación',
      'almacenamiento','descongelar','recalentar','lavado de manos','intoxicacion','intoxicación'
    ],
    respuesta: [
      `🍲 Preparación segura en casa  
• Lávate las manos antes de cocinar y entre tareas.  
• Cocina completamente carnes y vísceras hasta que no queden partes rosadas.  
• Usa tablas y cuchillos separados para crudo y cocido.  
• Refrigera las sobras en recipientes herméticos dentro de las 2 horas.  
• Descongela en refrigeradora o en microondas, nunca a temperatura ambiente.  
• Recalienta hasta que esté humeante.  
• Si dudas del estado de un alimento, no lo ofrezcas.`
    ]
  },

  alimentacionComplementaria: {
    palabrasClave: [
      'alimentacion complementaria','alimentación complementaria','solidos','sólidos',
      'blw','baby led weaning','papillas','pures','purés','texturas','introduccion de alimentos',
      'introducción de alimentos','cuando iniciar solidos','6 meses','señales de preparación'
    ],
    respuesta: [
      `👶 Inicio de alimentación complementaria  
Cuándo  
• Cerca de los 6 meses, si se sienta con apoyo, controla la cabeza y muestra interés por la comida.

Cómo  
• Puedes usar purés espesos o enfoque BLW con alimentos blandos y en trozos grandes que el bebé pueda sujetar.  
• Un alimento nuevo a la vez y observar tolerancia.  
• Ofrece agua en vasito a partir de esta etapa.

Texturas por progreso  
• 6 a 7 meses: purés espesos o trozos muy blandos.  
• 8 a 9 meses: machacado con grumos, trozos pequeños blandos.  
• 10 a 12 meses: picado fino y alimentos familiares adaptados.

Evitar antes del año  
• Miel  
• Leche de vaca como bebida principal  
• Azúcar añadida y sal en exceso  
• Frutos secos enteros o trozos duros que puedan ahogarse`
    ]
  },

  lactanciaVitaminas: {
    palabrasClave: [
      'lactancia','vitaminas','vitamina d','suplementos','hierro gotas','multivitaminico',
      'calcio','omega 3','galactagogos','sube la leche','baja la leche'
    ],
    respuesta: [
      `🍼 Lactancia y suplementos  
• La lactancia exclusiva hasta los 6 meses es ideal y se recomienda continuar con alimentos hasta 2 años o más.  
• Vitamina D puede indicarse desde los primeros meses según recomendación profesional.  
• Hierro en gotas puede ser necesario desde los 4 a 6 meses en algunos casos, especialmente si hay riesgo de anemia.  
• Multivitamínicos solo si el profesional los indica.  
• Para mantener la producción de leche: ofrecer a demanda, buen agarre, contacto piel con piel y descanso cuando sea posible.`
    ]
  },

  blwVsPures: {
    palabrasClave: [
      'blw vs pures','blw vs purés','blw o papillas','metodo blw','método blw','autoalimentacion'
    ],
    respuesta: [
      `🍽️ BLW y purés pueden convivir  
• Lo importante es la seguridad y el avance de texturas.  
• Alimentos blandos en formas seguras si haces BLW.  
• Si usas purés, que sean espesos y no completamente líquidos.  
• Observa señales de saciedad y no obligues a terminar.`
    ]
  },

  alergias: {
    palabrasClave: [
      'alergia','alergenos','alérgenos','introduccion alergenos','huevo','mani','maní','cacahuate',
      'pescado','lactosa','gluten','falso mito alergia','urticaria','erupcion'
    ],
    respuesta: [
      `🌰 Introducción de alimentos potencialmente alergénicos  
• Huevo, maní y pescado pueden introducirse desde el inicio de la alimentación complementaria si el pediatra no indica lo contrario.  
• Introduce uno a la vez y observa durante 2 a 3 días.  
• Si aparece ronchas, vómitos persistentes, hinchazón de labios o dificultad para respirar, acude a urgencias.`
    ]
  },

  aguaHidratacion: {
    palabrasClave: [
      'agua','hidratacion','hidratación','cuanta agua','vasito','taza','sed'
    ],
    respuesta: [
      `💧 Agua e hidratación  
• Antes de los 6 meses, si hay lactancia exclusiva, no se necesita agua adicional salvo indicación médica.  
• Desde que inician sólidos, ofrece pequeños sorbos de agua en vasito en las comidas.  
• Evita jugos azucarados y bebidas gaseosas.`
    ]
  },

  alimentosNoRecomendados: {
    palabrasClave: [
      'evitar alimentos','no recomendados','prohibidos bebe','miel','sal','azucar','frutos secos enteros',
      'pescado crudo','leche de vaca','espinaca nitratos','miel botulismo'
    ],
    respuesta: [
      `🚫 Alimentos a evitar en menores de 1 año  
• Miel  
• Leche de vaca como bebida principal  
• Frutos secos enteros y trozos duros  
• Pescado o huevo crudos  
• Azúcar añadida y exceso de sal

Consejo  
• Ofrece versiones blandas, sin miel y con poca sal.`
    ]
  },

  recetasHierro: {
    palabrasClave: [
      'recetas hierro','ideas hierro','menu hierro','menú hierro','sangrecita receta',
      'papilla carne','pure lentejas','hamburguesa lentejas'
    ],
    respuesta: [
      `👩‍🍳 Ideas rápidas ricas en hierro  
• Papilla de sangrecita con zapallo y papa, servida con gajitos de mandarina.  
• Puré de lentejas con zanahoria y tomate, y un chorrito de limón al final.  
• Carne molida guisada con arvejitas y arroz suave.  
• Tortillita de yema y espinaca bien cocida.

Tip  
• Agrega vitamina C en la misma comida para mejorar la absorción. 🍊`
    ]
  },

  estreñimiento: {
    palabrasClave: [
      'estrenimiento','estreñimiento','dificultad para evacuar','heces duras','popo dura','constipacion','constipación'
    ],
    respuesta: [
      `🍐 Estreñimiento leve en bebés mayores de 6 meses  
• Ofrece agua en las comidas y frutas como papaya, pera, ciruela, durazno.  
• Aumenta fibra con menestras bien cocidas y avena.  
• Más movimiento y juego en el piso.  
• Si hay dolor intenso, sangre en heces o varios días sin evacuar, consulta.`
    ]
  },

  diarreaLeve: {
    palabrasClave: [
      'diarrea','heces liquidas','heces líquidas','popo liquida','popó líquida','gastro leve'
    ],
    respuesta: [
      `🥤 Diarrea leve sin fiebre alta  
• Ofrece lactancia a demanda y agua segura.  
• Alimentos suaves: arroz, pollo deshilachado, zanahoria cocida, manzana cocida.  
• Evita jugos y bebidas azucaradas.  
• Si hay fiebre alta, sangre en heces, vómitos persistentes o signos de deshidratación, acude al servicio de salud.`
    ]
  },

  fiebreBaja: {
    palabrasClave: [
      'febricula','fiebre baja','37.5','37,5','38','temperatura','calentura'
    ],
    respuesta: [
      `🌡️ Fiebre baja  
• Observa hidratación, sueño y estado general.  
• Ofrece líquidos y ropa ligera.  
• Si supera 38.5 °C, dura más de 48 horas o hay decaimiento marcado, consulta con un profesional.`
    ]
  },

  mitos: {
    palabrasClave: [
      'mitos','creencias','verdades','falsos mitos','errores comunes'
    ],
    respuesta: [
      `🔎 Mitos frecuentes  
• La espinaca cruda no es una buena fuente de hierro para bebés; cocínala y combínala con vitamina C.  
• El hígado bien cocido puede ofrecerse desde los 6 meses en porciones pequeñas.  
• El té y el café bajan la absorción de hierro; mejor ofrecer agua o fruta.  
• No hace falta azúcar para que el bebé acepte la comida; prueba con especias suaves y variedad de texturas.`
    ]
  }
};

// Respuestas de emergencia y sin resultados
export const salidasEmergencia = {
  medica: `⚠️ Esta consulta requiere atención médica profesional.  
• Contacta al pediatra o acude a tu centro de salud.  
• En caso de urgencia, llama a los servicios de emergencia.  

Recuerda que esta herramienta brinda orientación general, pero no reemplaza una consulta médica personalizada. 💬`,

  dieta: `🍽️ No puedo ofrecer dietas personalizadas ni cantidades exactas.  
Cada bebé es distinto según su edad, peso y desarrollo.  

Para definir una dieta adecuada, lo mejor es acudir a un pediatra o nutricionista infantil que pueda evaluarlo de manera individual. 👩‍⚕️`,

  noEncontrada: `Lo siento, no encontré información específica sobre esa consulta.  

Puedo ayudarte con temas como:  
• Anemia infantil 🩸  
• Alimentos ricos en hierro 🍖  
• Preparación segura de comidas 🍲  
• Alimentación complementaria 👶  
• Lactancia y vitaminas 🍼  
• Alergias e introducción de alérgenos 🌰  
• Texturas y progresión por edades 🍽️  
• Hidratación y agua 💧

Si se trata de una situación médica puntual, lo mejor es consultar con un profesional de salud. 💬`
};

// Detectores de emergencia y dieta
export const detectarEmergenciaMedica = (mensaje) => {
  const palabrasEmergencia = [
    'enfermo','vomita','vómito','vomitos','vómitos','diarrea con sangre','fiebre','temperatura alta',
    'urgencia','emergencia','hospital','dolor fuerte','dolor abdominal','sangra','sangrado',
    'alergia','reaccion','reacción','convulsiona','convulsión','dificultad para respirar',
    'respira mal','no responde','muy somnoliento','deshidratacion','deshidratación','no orina',
    'letargo','decaimiento severo','labios morados','rechazo absoluto de líquidos','signos de deshidratacion'
  ];
  const fiebreAlta = /\b(38(\.|,)?5|39|40)(?:\s*°\s*C| c| grados)?\b/i;
  const txt = mensaje.toLowerCase();
  return palabrasEmergencia.some(p => txt.includes(p)) || fiebreAlta.test(mensaje);
};

export const detectarSolicitudDieta = (mensaje) => {
  const palabrasDieta = [
    'cuanto darle','cantidad','porcion','porción','gramos','racion','ración',
    'menu para','menú para','menu diario','menu semanal','plan de alimentacion',
    'dieta para','calorias','calorías','medida exacta','cuanto debe comer','ml exactos','gramaje'
  ];
  const txt = mensaje.toLowerCase();
  return palabrasDieta.some(p => txt.includes(p));
};

// Motor principal de búsqueda
export const buscarRespuesta = (mensaje) => {
  const m = mensaje.toLowerCase();

  if (detectarEmergenciaMedica(m)) {
    return { texto: salidasEmergencia.medica, esEmergencia: true };
  }
  if (detectarSolicitudDieta(m)) {
    return { texto: salidasEmergencia.dieta, esEmergencia: true };
  }

  for (const [clave, datos] of Object.entries(baseConocimiento)) {
    const hit = datos.palabrasClave.some(p => m.includes(p.toLowerCase()));
    if (hit) {
      const texto = Array.isArray(datos.respuesta) ? pick(datos.respuesta) : datos.respuesta;
      return { texto, esEmergencia: false };
    }
  }

  return { texto: salidasEmergencia.noEncontrada, esEmergencia: false };
};
