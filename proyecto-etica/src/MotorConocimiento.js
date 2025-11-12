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
      `¡Hola! 😊 Qué alegría saludarte.  
Espero que estés teniendo un lindo día. Cuéntame, ¿quieres que te oriente sobre alimentación infantil, anemia, lactancia o cuidado del bebé? 🌼`,

      `¡Hola, bienvenida! 💛  
Me alegra tenerte por aquí. Puedo ayudarte con información sobre hierro, vitaminas, alimentación por edades y prevención de anemia infantil.  
¿Sobre qué tema te gustaría saber más? 🍎`,

      `¡Hola! 🌞 Qué gusto saludarte.  
Estoy lista para resolver tus dudas sobre nutrición del bebé, lactancia o introducción de alimentos sólidos.  
Cuéntame un poquito más sobre lo que necesitas 🤱🍌`,

      `¡Hola! 🌸  
Gracias por escribirme.  
Estoy aquí para acompañarte con información útil sobre salud y nutrición infantil. ¿Te gustaría que hablemos sobre cómo prevenir la anemia o qué alimentos ofrecer a tu bebé? 🍲`
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
      '6 a 12 meses anemia','reserva de hierro agotada','sospecha de anemia','signos de anemia',
      'sintomas de anemia','signos anemia','sintomas anemia','anemia por hierro'
    ],
    respuesta: [
      `🩸 La **anemia infantil** es una condición muy común durante los primeros años de vida, sobre todo entre los 6 y 12 meses, cuando se agotan las reservas de hierro con las que nacen los bebés.  
Aparece cuando el cuerpo no tiene suficiente hierro para formar hemoglobina, la proteína que transporta el oxígeno en la sangre.  

👀 **Señales frecuentes:**  
• Palidez en la piel, labios o párpados  
• Cansancio o falta de energía  
• Irritabilidad o desánimo  
• Poco apetito o menor interés al jugar  

🥦 **Prevención:**  
Ofrece alimentos ricos en hierro desde los 6 meses, como hígado, sangrecita, carne molida y menestras bien cocidas.  
Combínalos con frutas ricas en vitamina C (naranja, mandarina, papaya o tomate) para mejorar la absorción del hierro.  

👩‍⚕️ Si sospechas anemia, acude al pediatra para un análisis de hemoglobina. Una detección temprana evita complicaciones y ayuda a recuperar la energía del bebé. 🌻`,

      `❤️ La anemia infantil suele deberse a una **deficiencia de hierro**, algo frecuente en bebés de 6 a 12 meses porque sus reservas naturales se agotan.  
Cuando hay poca hemoglobina, el cuerpo transporta menos oxígeno, lo que puede generar cansancio, palidez y pérdida del apetito.  

🍖 **Alimentos recomendados:** hígado de pollo o res, sangrecita, carne molida, lentejas, garbanzos y espinaca cocida.  
🍊 Acompaña siempre con frutas ricas en vitamina C para absorber mejor el hierro.  

💬 Un consejo práctico: sirve las comidas en pequeñas porciones y variadas, para que el bebé las acepte con más facilidad.  
Consulta al pediatra ante cualquier signo de palidez o decaimiento. 🌼`,

      `🌷 La anemia puede pasar desapercibida al inicio, pero sus efectos son importantes.  
El bebé puede lucir pálido, estar más irritable, dormir más de lo normal o tener menos ganas de jugar.  
Estas señales indican que sus niveles de hierro podrían estar bajos.  

🥩 Desde los 6 meses, es importante incluir alimentos con hierro, sobre todo de origen animal, como carne de res, hígado o sangrecita.  
También se pueden ofrecer legumbres bien cocidas y trituradas, acompañadas de frutas cítricas.  

👶 Una alimentación variada y rica en nutrientes ayuda a prevenir la anemia y a fortalecer el crecimiento del bebé.  
No olvides hacer controles médicos periódicos para asegurar un desarrollo saludable. 💛`,

      `🌿 La **anemia ferropénica** es la más frecuente en los bebés y se debe a la falta de hierro en la dieta.  
Aparece cuando el pequeño comienza a crecer y su cuerpo necesita más nutrientes que los que la leche por sí sola puede ofrecer.  

🍲 A partir de los 6 meses, se deben introducir alimentos ricos en hierro: hígado, carne de res, pollo, pescado, lentejas o garbanzos.  
💡 Consejo: combina los alimentos con frutas como naranja o tomate para mejorar la absorción.  

🧡 Mantén los controles pediátricos y evita dar suplementos por cuenta propia.  
La prevención desde la alimentación es la mejor manera de cuidar la energía y el bienestar del bebé. 🍼`
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

Si se trata de una situación médica puntual, lo mejor es consultar con un profesional de salud. 💬`
};


// Detectores de emergencia y dieta
export const detectarEmergenciaMedica = (mensaje) => {
  const palabrasEmergencia = [
    'enfermo','vomita','vómito','vomitos','vómitos','diarrea','fiebre','temperatura alta',
    'urgencia','emergencia','hospital','dolor fuerte','dolor abdominal','sangra','sangrado',
    'alergia','reaccion','reacción','convulsiona','convulsión','dificultad para respirar',
    'respira mal','no responde','muy somnoliento','deshidratacion','deshidratación','no orina',
    'letargo','decaimiento severo','labios morados'
  ];
  const fiebreAlta = /\b(38(\.|,)?5|39|40)(?:\s*°\s*C| c| grados)?\b/i;
  const txt = mensaje.toLowerCase();
  return palabrasEmergencia.some(p => txt.includes(p)) || fiebreAlta.test(mensaje);
};

export const detectarSolicitudDieta = (mensaje) => {
  const palabrasDieta = [
    'cuanto darle','cantidad','porcion','porción','gramos','racion','ración',
    'menu para','menú para','menu diario','menu semanal','plan de alimentacion',
    'dieta para','calorias','calorías','medida exacta','cuanto debe comer'
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
