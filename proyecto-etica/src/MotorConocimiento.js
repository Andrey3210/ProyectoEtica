// Motor de conocimiento con respuestas amplias, naturales y con emojis ✨

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Función para normalizar texto (quitar tildes, espacios extras, mayúsculas)
const normalizar = (texto) => {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Quitar tildes
    .replace(/\s+/g, ' ') // Normalizar espacios
    .trim();
};

export const baseConocimiento = {
  saludo: {
    palabrasClave: [
      'hola','holaa','holaaa','buenos dias','buenas tardes','buenas noches','buen dia','buenas',
      'hey','holi','holis','que tal','como estas','saludos','saludito',
      'buen inicio de semana','feliz dia'
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
      'anemia','anemico','anemia infantil','anemia en bebes','anemia en ninos',
      'baja hemoglobina','poca hemoglobina','hemoglobina baja','hemograma bajo','ferritina baja',
      'globulos rojos bajos','sangre baja','deficiencia de hierro','deficit de hierro',
      'hierro bajo','falta de hierro','ferropenica','anemia ferropenica',
      'bebe palido','nino palido','piel palida','labios palidos','color amarillento',
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
      'alimentos ricos en hierro','alimentos son ricos en hierro','comidas con hierro','hierro hemo','hierro no hemo',
      'sangrecita','higado','carne roja','menestras','lentejas','garbanzos','pallar',
      'espinaca','acelga','quinua','huevo','pescado azul','que tiene hierro','donde hay hierro',
      'fuentes de hierro','que dar para hierro'
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

  rechazoComida: {
    palabrasClave: [
      'no quiere comer','rechazo de alimentos','rechaza comida','no come','no acepta',
      'cierra la boca','escupe','tira la comida','no le gusta nada','selectivo',
      'solo quiere leche','no prueba','dificil de alimentar','come poco','inapetente'
    ],
    respuesta: [
      `🍽️ El rechazo de alimentos es muy común y suele ser temporal. Aquí algunas causas y recomendaciones:

Causas frecuentes  
• Dentición o molestias en encías  
• Neofobia (miedo a lo nuevo, muy normal entre 8-24 meses)  
• Preferencia por texturas conocidas  
• Saciedad con leche  
• Simple falta de hambre en ese momento

Recomendaciones prácticas  
• Ofrece sin forzar. Puede tomar 10-15 exposiciones hasta aceptar un alimento.  
• Come junto a tu bebé; aprenden imitando.  
• Presenta el alimento de distintas formas: cocido, al vapor, en tiras, mezclado.  
• Respeta sus señales de saciedad.  
• Evita distracciones como pantallas durante la comida.  
• Si rechaza todo y pierde peso, consulta con pediatra.

Recuerda: es normal que algunos días coman menos. La paciencia es clave. 💚`
    ]
  },

  horariosComidas: {
    palabrasClave: [
      'horarios de comidas','frecuencia','cuantas comidas','cada cuanto come',
      'horario alimentacion','rutina comidas','cuando darle','cuantas veces al dia'
    ],
    respuesta: [
      `⏰ Horarios y frecuencia de comidas según edad

6-8 meses  
• 2-3 comidas principales al día + lactancia a demanda  
• Empezar con 1 comida e ir aumentando gradualmente

9-11 meses  
• 3 comidas principales + 1-2 snacks pequeños + lactancia  
• Intervalos de 2-3 horas entre comidas

12 meses en adelante  
• 3 comidas principales + 2 snacks + lactancia o leche  
• Pueden integrarse más a los horarios familiares

Consejos  
• No es necesario un horario rígido; observa señales de hambre.  
• Evita "picoteo" constante para que lleguen con apetito.  
• La lactancia sigue siendo importante y complementaria. 🍼`
    ]
  },

  snacksSaludables: {
    palabrasClave: [
      'snacks','colaciones','entre comidas','bocaditos','merienda',
      'que darle entre comidas','snacks saludables','refrigerios'
    ],
    respuesta: [
      `🍌 Snacks saludables para bebés

Opciones seguras (6-12 meses)  
• Trozos de plátano maduro  
• Palitos de pepino pelado  
• Rodajas finas de pera o manzana cocida  
• Bastones de zanahoria cocida hasta blanda  
• Trocitos de aguacate  
• Pan o galletas sin sal ni azúcar  
• Yogur natural sin azúcar

Evitar  
• Galletas dulces o muy procesadas  
• Jugos (mejor fruta entera)  
• Frutos secos enteros (riesgo de atragantamiento)  
• Alimentos duros como zanahoria cruda

Recuerda: Los snacks complementan, no reemplazan comidas principales. 🥒`
    ]
  },

  lactanciaMixta: {
    palabrasClave: [
      'lactancia mixta','pecho y formula','combinar leche','leche materna y formula',
      'complementar con formula','dar pecho y biberon','mixta'
    ],
    respuesta: [
      `🍼 Lactancia mixta (pecho + fórmula)

Es totalmente válido combinar ambas. Aquí algunos consejos:

Cómo hacerlo  
• Ofrece primero el pecho y luego complementa con fórmula si es necesario.  
• Mantén la producción ofreciendo pecho con frecuencia.  
• La fórmula puede darse en biberón o vasito según la edad.  
• No hay una "forma incorrecta"; cada familia encuentra su ritmo.

Consejos prácticos  
• Si reduces tomas de pecho, hazlo gradualmente para evitar congestión.  
• Continúa con pecho directo cuando sea posible para mantener vínculo.  
• Consulta sobre qué fórmula es adecuada para la edad de tu bebé.

Lo importante es que tu bebé esté bien alimentado y tú te sientas tranquila. 💛`
    ]
  },

  bajopeso: {
    palabrasClave: [
      'bajo peso','no sube de peso','crece lento','crecimiento lento',
      'esta flaco','muy delgado','preocupa su peso','pesa poco'
    ],
    respuesta: [
      `📊 Preocupación por bajo peso o crecimiento lento

Primero: no todos los bebés crecen igual. Algunos son naturalmente más delgados.

Señales a observar  
• Si sigue activo, alerta y con pañales mojados, suele estar bien.  
• Si pierde peso sostenidamente o no gana nada en varios meses, consulta.  
• Revisa si está comiendo variedad y lactando/tomando suficiente leche.

Recomendaciones generales  
• Ofrece alimentos con más calorías: aguacate, yema de huevo, aceite de oliva en purés.  
• Aumenta frecuencia de comidas si es necesario.  
• No te compares con otros bebés; cada uno tiene su curva.  
• El pediatra evaluará si está en su rango saludable según su percentil.

El seguimiento profesional es clave para descartar problemas. 💙`
    ]
  },

  apoyoEmocional: {
    palabrasClave: [
      'cansada','agotada','estresada','no puedo mas','me siento mal',
      'ansiosa','abrumada','culpa','mala madre','mal padre','agobiado',
      'no duermo','exhausta','no doy mas'
    ],
    respuesta: [
      `💚 Apoyo emocional para madres y padres

Criar es hermoso, pero también puede ser agotador. Es completamente normal sentirte cansado/a, abrumado/a o dudar de ti mismo/a.

Lo que debes saber  
• No eres mala madre/padre por sentirte así.  
• Todos los bebés tienen días difíciles con la comida, el sueño o el llanto.  
• Pedir ayuda es un acto de fortaleza, no de debilidad.  
• Tu bienestar también importa. Un cuidador descansado cuida mejor.

Autocuidado básico  
• Acepta ayuda de familiares o amigos cuando te la ofrezcan.  
• Toma descansos cortos cuando el bebé duerma.  
• Habla con alguien de confianza sobre cómo te sientes.  
• Si la tristeza o ansiedad persisten, considera apoyo profesional.

Estás haciendo un gran trabajo. Un día a la vez. 🌻`
    ]
  },

  cortarAlimentos: {
    palabrasClave: [
      'como cortar','formas seguras','corte de alimentos','tamano','bastones',
      'evitar atragantamiento','que tamano','prevenir ahogo'
    ],
    respuesta: [
      `✂️ Cómo cortar alimentos según edad (prevención de atragantamientos)

6-9 meses  
• Bastones o tiras largas del tamaño del puño del bebé (pueden agarrarlas).  
• Alimentos blandos que se deshacen con la presión de las encías.  
• Ejemplos: bastón de zanahoria cocida, tira de pollo desmenuzado, plátano partido a lo largo.

9-12 meses  
• Trozos pequeños del tamaño de un guisante o cubitos blandos.  
• Ya tienen pinza (pulgar-índice) y pueden agarrar piezas más pequeñas.  
• Ejemplos: cubitos de papa, trocitos de pera blanda.

Siempre evitar  
• Uvas enteras, cerezas enteras (córtalas en 4 partes)  
• Salchichas redondas (córtalas a lo largo)  
• Trozos duros como zanahoria cruda, manzana cruda en trozos grandes  
• Frutos secos enteros

Supervisa siempre mientras come. 👀`
    ]
  },

  utensilios: {
    palabrasClave: [
      'vasito','cucharita','como ensenar','uso de cubiertos','vaso abierto',
      'transicion vaso','biberon','cuando usar cuchara','blw utensilios'
    ],
    respuesta: [
      `🥄 Uso de utensilios: vasito, cucharita, BLW, transición

Vasito (6 meses en adelante)  
• Ofrece agua en vasito entrenador o vaso abierto desde el inicio de sólidos.  
• Aprender a beber en vaso es parte del desarrollo motor.  
• Al principio derramarán, es normal; practica con poca cantidad.

Cucharita (6-9 meses)  
• Puedes darle una cuchara para que juegue mientras tú alimentas con otra.  
• Hacia los 9-12 meses empezarán a intentar usarla solos.  
• Cucharas con punta de silicona son más seguras.

Autoalimentación (BLW)  
• Los bebés pueden comer con las manos desde los 6 meses.  
• Hacia el año, muchos empiezan a usar utensilios con ayuda.

Transición de biberón  
• Ideal retirar biberón cerca de los 12 meses y usar vaso.  
• Hazlo gradualmente para evitar frustración.

La práctica hace al maestro. ¡Paciencia! 🍴`
    ]
  },

  atragantamientoArcadas: {
    palabrasClave: [
      'atragantamiento','arcadas','se ahoga','reflejo nausea','gag reflex',
      'diferencia arcadas','tose','se pone rojo'
    ],
    respuesta: [
      `😮 Atragantamiento vs. arcadas (reflejo nauseoso)

Arcadas (GAG reflex) - NORMAL  
• El bebé tose, hace arcadas, puede ponerse rojo.  
• Sigue respirando, hace ruidos.  
• Es un mecanismo de protección para expulsar comida.  
• No intervengas, deja que lo resuelva solo.

Atragantamiento - URGENCIA  
• No hace ruido (no puede toser ni llorar)  
• No puede respirar  
• Se pone morado  
• Puede llevarse las manos al cuello

Qué hacer si se atraganta  
• Llama a emergencias de inmediato.  
• Aplica maniobras de desobstrucción (golpes en espalda, compresiones).  
• Nunca metas dedos a ciegas en su boca.

Prevención  
• Supervisa siempre mientras come.  
• Ofrece alimentos blandos y en formas seguras.  
• Evita distracciones (TV, correr mientras come).

Considera tomar un curso de primeros auxilios para bebés. 🚨`
    ]
  },

  mejorarApetito: {
    palabrasClave: [
      'aumentar apetito','que le abra el hambre','come poco','estimular apetito',
      'mas calorias','denso nutricionalmente','que engorde'
    ],
    respuesta: [
      `🍽️ Alimentos para mejorar apetito (sin recetas milagrosas)

No hay alimentos mágicos, pero sí formas de aumentar densidad nutricional:

Opciones para agregar calorías  
• Aceite de oliva o aguacate en purés y comidas.  
• Yema de huevo bien cocida.  
• Mantequilla sin sal en papas o verduras.  
• Queso rallado (después de 9 meses).  
• Leche materna o fórmula en preparaciones.

Estrategias  
• Ofrece comidas más frecuentes en porciones pequeñas.  
• Evita llenarlos de líquidos antes de comer.  
• Crea ambiente tranquilo y sin presión.  
• No uses postres como premio; puede generar rechazo a otras comidas.

Si persiste falta de apetito y bajo peso, consulta con profesional. 🥑`
    ]
  },

  almacenamientoComida: {
    palabrasClave: [
      'congelar','recalentar','almacenar','guardar comida','cuanto dura',
      'como conservar','meal prep','preparar comida'
    ],
    respuesta: [
      `🧊 Cómo recalentar, congelar y almacenar comida para bebés

Congelar  
• Usa recipientes herméticos o bolsas para congelador.  
• Etiqueta con fecha (dura hasta 3 meses en congelador).  
• Congela en porciones pequeñas para facilitar uso.

Descongelar  
• En refrigerador durante la noche.  
• En microondas en modo descongelar.  
• Nunca a temperatura ambiente.

Recalentar  
• Calienta hasta que esté humeante, revuelve y deja entibiar.  
• No recalientes más de una vez la misma porción.

Refrigeración  
• Comida cocida dura 2-3 días en refrigerador bien tapada.  
• Refrigera dentro de las 2 horas de cocinada.

Buenas prácticas  
• Lava manos y utensilios antes de cocinar.  
• Si algo huele mal o tiene aspecto dudoso, deséchalo. 🍲`
  ]
  },

  senalesHambreSaciedad: {
    palabrasClave: [
      'senales de hambre','como saber si tiene hambre','saciedad','ya no quiere',
      'señales bebe','cuando parar de dar','esta satisfecho'
    ],
    respuesta: [
      `👶 Señales de hambre y saciedad

Señales de HAMBRE  
• Lleva manos o juguetes a la boca  
• Se inclina hacia la comida  
• Abre la boca cuando ve comida  
• Se emociona al ver el plato  
• Llora o se inquieta (señal tardía)

Señales de SACIEDAD  
• Cierra la boca o voltea la cabeza  
• Escupe o empuja la comida  
• Se distrae fácilmente  
• Juega con la comida sin comer  
• Se arquea o intenta salir de la silla

Recomendaciones  
• Respeta estas señales; no fuerces a terminar el plato.  
• Ofrece comida a horarios regulares, pero permite que decidan cuánto comen.  
• Evita distracciones para que reconozcan su saciedad.

Confiar en sus señales ayuda a desarrollar una relación sana con la comida. 💚`
    ]
  },

  adaptarAlimentosFamiliares: {
    palabrasClave: [
      'adaptar comida familiar','comida de la casa','sin sal','sin azucar',
      'comer lo mismo','como hacer seguro','comida de adultos'
    ],
    respuesta: [
      `🍛 Adaptar alimentos familiares para el bebé

Desde los 6 meses, tu bebé puede empezar a compartir comidas familiares con adaptaciones:

Cómo adaptar  
• Separa su porción ANTES de agregar sal, azúcar o condimentos fuertes.  
• Cocina hasta que esté muy blando (verduras, carnes).  
• Corta en formas seguras según su edad.  
• Evita frituras; prefiere al vapor, horneado o guisado.

Ejemplos  
• Arroz con pollo: desmenuza el pollo, arroz suave, sin sal.  
• Guisos: separa vegetales blandos y proteína sin salsa.  
• Pasta: bien cocida, corta en trozos pequeños si es necesario.

Beneficios  
• Aprenden a disfrutar sabores reales y naturales.  
• Fomenta la inclusión familiar en la mesa.  
• Más práctico para las familias.

Evita solo comidas muy picantes, procesadas o con mucha sal. 🥘`
    ]
  },

  soloQuiereLeche: {
    palabrasClave: [
      'solo quiere leche','rechaza solidos','no acepta comida','puro pecho',
      'solo teta','solo biberon','no come solo toma'
    ],
    respuesta: [
      `🍼 ¿Qué hacer si solo quiere leche y rechaza sólidos?

Es común entre 6-9 meses. Aquí algunos consejos para transición suave:

Por qué pasa  
• La leche es familiar y reconfortante.  
• Aún están aprendiendo a masticar y tragar.  
• Algunos bebés tardan más en interesarse por sólidos.

Recomendaciones  
• Ofrece leche DESPUÉS de los sólidos, no antes.  
• Presenta alimentos en momentos en que esté despierto y de buen humor.  
• Come junto a tu bebé; la imitación es poderosa.  
• Deja que explore y toque la comida sin presión.  
• Intenta diferentes texturas: purés, trozos blandos, variedad de sabores.  
• Sé paciente; puede tomar semanas.

Cuándo preocuparse  
• Si después de los 8-9 meses sigue rechazando todo sólido.  
• Si no gana peso o pierde peso.

En esos casos, consulta con pediatra o nutricionista. 🥄`
    ]
  },

  alergiaLeve: {
    palabrasClave: [
      'alergia leve','reaccion alergica','ronchas','urticaria',
      'erupcion','sarpullido','alergia grave','diferencia alergia'
    ],
    respuesta: [
      `🌰 Alergia alimentaria leve vs. reacción grave

Reacción LEVE (observar)  
• Sarpullido o ronchas leves alrededor de la boca  
• Erupción en piel que aparece y desaparece  
• Molestias estomacales leves

Qué hacer  
• Suspende ese alimento temporalmente.  
• Observa si los síntomas desaparecen.  
• Consulta con pediatra antes de reintroducir.

Reacción GRAVE - ¡URGENCIA!  
• Hinchazón de labios, lengua o cara  
• Dificultad para respirar o tragar  
• Vómitos persistentes  
• Palidez extrema, decaimiento súbito  
• Urticaria extendida por todo el cuerpo

Qué hacer  
• Llama a emergencias inmediatamente.  
• Si tienes epinefrina (EpiPen), úsala.  
• No esperes a ver si mejora.

Prevención  
• Introduce alergenos comunes (huevo, maní) desde los 6 meses bajo supervisión.  
• Un alimento nuevo a la vez.  
• Anota qué alimentos ha probado.

Ante dudas, siempre consulta con profesional. 🚨`
    ]
  },

  estrenimientoRelacionado: {
    palabrasClave: [
      'estrenimiento frecuente','heces muy duras','constipacion','hace mucha fuerza',
      'popo con dolor','sangra al hacer'
    ],
    respuesta: [
      `🍐 Estreñimiento frecuente o heces duras relacionadas a alimentos

Causas comunes  
• Poca fibra en la dieta  
• Poca hidratación  
• Exceso de lácteos (queso, leche)  
• Introducción reciente de sólidos

Recomendaciones suaves  
• Ofrece más agua entre comidas.  
• Frutas con fibra: papaya, pera, ciruela, durazno, kiwi (si tolera).  
• Verduras cocidas: calabaza, zanahoria, brócoli.  
• Menestras bien cocidas (lentejas, garbanzos).  
• Reduce lácteos temporalmente si están en exceso.  
• Avena integral en el desayuno.  
• Masajes suaves en el abdomen en sentido de las manecillas del reloj.  
• Movimiento: gatear, jugar en el piso ayuda al tránsito intestinal.

Cuándo consultar  
• Si hay sangre en las heces.  
• Si el bebé llora intensamente y arquea la espalda al intentar evacuar.  
• Si pasan más de 3-4 días sin evacuación y está molesto.

El estreñimiento leve suele resolverse con ajustes en la dieta. 🥒`
    ]
  },

  consistenciaCuidadores: {
    palabrasClave: [
      'abuelos dan dulces','cuidadores diferentes','familia opina','cada quien hace distinto',
      'conflicto crianza','todos opinan','no respetan'
    ],
    respuesta: [
      `👨‍👩‍👧 Pausas y consistencia en la alimentación

Tener diferentes cuidadores es común, pero puede generar confusión si cada uno hace algo distinto.

Desafíos frecuentes  
• Abuelos que dan dulces o comida no acordada.  
• Opiniones contradictorias sobre cómo alimentar.  
• Falta de respeto a las decisiones de los padres.

Recomendaciones  
• Conversa con calma sobre tus elecciones y por qué son importantes.  
• Comparte información educativa (pueden leer juntos sobre alimentación infantil).  
• Establece reglas claras y simples (ejemplo: "nada de azúcar antes del año").  
• Sé flexible en lo que no es crítico para la salud.  
• Reconoce que todos quieren lo mejor para el bebé, aunque difieran en métodos.

Recuerda  
• Tú eres quien toma las decisiones finales.  
• La consistencia ayuda, pero un desvío ocasional no arruina todo.  
• Mantén el diálogo abierto y respetuoso.

La crianza en equipo funciona mejor con comunicación. 💬`
    ]
  },

  ideasMenus: {
    palabrasClave: [
      'ideas de menus','menu por edad','ejemplo menu','que darle de comer',
      'combinaciones','comidas por textura','ideas recetas'
    ],
    respuesta: [
      `🍽️ Ideas de menús por textura (sin cantidades exactas)

6-7 meses (purés espesos o BLW)  
• Desayuno: Papilla de avena con plátano machacado  
• Almuerzo: Puré de zapallo con pollo desmenuzado  
• Cena: Puré de papa con yema de huevo

8-9 meses (grumos, trozos blandos)  
• Desayuno: Avena con trozos de pera blanda  
• Almuerzo: Arroz suave con lentejas machacadas y zanahoria en cubitos  
• Cena: Puré de camote con trocitos de pescado

10-12 meses (picado fino, alimentos familiares adaptados)  
• Desayuno: Pan con aguacate machacado  
• Almuerzo: Guiso de carne molida con verduras picadas y arroz  
• Cena: Tortilla de huevo con espinaca y papa en cubitos  
• Snacks: Palitos de pepino, rodajas de plátano, yogur natural

Recuerda  
• Estas son solo ideas; adapta según lo que tengas en casa.  
• Combina siempre con alimentos ricos en vitamina C si incluyes hierro.  
• Ofrece agua en las comidas. 💧`
    ]
  },

  bebeEnfermo: {
    palabrasClave: [
      'bebe enfermo','come menos enfermo','resfriado','gripe','esta resfriado',
      'con tos','mocos','enfermo no come','inapetente por enfermedad'
    ],
    respuesta: [
      `🤧 Qué hacer si el bebé se enferma y come menos

Es completamente normal que durante resfríos o enfermedades leves pierdan el apetito.

Por qué pasa  
• La congestión nasal dificulta comer y respirar al mismo tiempo.  
• El malestar general quita las ganas de comer.  
• Pueden preferir la leche porque es más fácil de tomar.

Recomendaciones  
• Ofrece lactancia o leche con más frecuencia para mantener hidratación.  
• Da líquidos: agua, caldos tibios (sin sal).  
• Alimentos suaves y fáciles de tragar: purés, sopas, frutas blandas.  
• Porciones pequeñas y frecuentes en vez de comidas grandes.  
• Mantén la nariz despejada con suero fisiológico antes de comer.  
• No fuerces; es temporal.

Cuándo consultar  
• Fiebre alta persistente (más de 38.5°C)  
• Rechazo total de líquidos por más de 6 horas  
• Signos de deshidratación (pañales secos, llanto sin lágrimas)  
• Dificultad para respirar  
• Decaimiento severo

Una vez que mejoren, el apetito volverá gradualmente. 🌡️`
    ]
  },

  mitosFrecuentes: {
    palabrasClave: [
      'mitos alimentacion','creencias falsas','verdades','mentiras',
      'mitos comunes','falsos mitos','errores comunes','mitos bebe'
    ],
    respuesta: [
      `🔍 Mitos frecuentes en la alimentación infantil

❌ "La espinaca cruda es la mejor fuente de hierro"  
✅ Realidad: La espinaca debe estar cocida para bebés y su hierro no se absorbe tan bien. Es mejor combinarla con vitamina C.

❌ "Hay que agregar sal y azúcar para que acepten la comida"  
✅ Realidad: Los bebés no necesitan sal ni azúcar. Sus papilas gustativas están en desarrollo y disfrutan sabores naturales.

❌ "Si tiene gases, no puede comer menestras"  
✅ Realidad: Las menestras bien cocidas y en puré son excelentes. Introduce gradualmente y observa tolerancia.

❌ "Darle agua antes del año es peligroso"  
✅ Realidad: Desde los 6 meses (inicio de sólidos), pueden tomar agua en pequeñas cantidades. Antes de los 6 meses con lactancia exclusiva no es necesaria.

❌ "El huevo debe darse después del año"  
✅ Realidad: El huevo puede introducirse desde los 6 meses; incluso ayuda a prevenir alergias.

❌ "Si rechaza un alimento una vez, no le gusta"  
✅ Realidad: Puede tomar 10-15 exposiciones antes de aceptar algo nuevo. ¡Paciencia!

❌ "Darle té ayuda con los cólicos y es inofensivo"  
✅ Realidad: El té reduce la absorción de hierro. Para cólicos, mejor consultar con pediatra.

❌ "Tiene que terminar todo el plato"  
✅ Realidad: Forzar genera rechazo. Respeta sus señales de saciedad.

La información actualizada es clave para una alimentación saludable. 📚`
    ]
  },

  preparacionSegura: {
    palabrasClave: [
      'preparacion segura','higiene de alimentos','manipulacion',
      'almacenamiento','descongelar','recalentar','lavado de manos','intoxicacion'
    ],
    respuesta: [
      `🍲 Preparación segura en casa  

Higiene básica  
• Lávate las manos antes de cocinar y entre tareas.  
• Lava bien frutas y verduras con agua segura.  
• Usa tablas y cuchillos separados para crudo y cocido.

Cocción  
• Cocina completamente carnes y vísceras hasta que no queden partes rosadas.  
• Huevos bien cocidos (yema y clara firmes).  
• Pescado hasta que se deshaga fácilmente.

Almacenamiento  
• Refrigera las sobras en recipientes herméticos dentro de las 2 horas.  
• Etiqueta con fecha.  
• Comida cocida dura 2-3 días en refrigerador.

Descongelación  
• En refrigeradora durante la noche.  
• En microondas en modo descongelar.  
• Nunca a temperatura ambiente.

Recalentamiento  
• Recalienta hasta que esté humeante, luego deja entibiar.  
• No recalientes más de una vez la misma porción.

Si dudas del estado de un alimento, no lo ofrezcas. Mejor prevenir. 🧼`
    ]
  },

  alimentacionComplementaria: {
    palabrasClave: [
      'alimentacion complementaria','solidos',
      'blw','baby led weaning','papillas','pures','texturas','introduccion de alimentos',
      'cuando iniciar solidos','6 meses','senales de preparacion','empezar a comer'
    ],
    respuesta: [
      `👶 Inicio de alimentación complementaria  

Cuándo empezar  
• Cerca de los 6 meses, si se sienta con apoyo, controla la cabeza y muestra interés por la comida.  
• No antes de los 4 meses ni después de los 7 meses.

Cómo iniciar  
• Puedes usar purés espesos o enfoque BLW con alimentos blandos y en trozos grandes que el bebé pueda sujetar.  
• Un alimento nuevo a la vez y observar tolerancia durante 2-3 días.  
• Ofrece agua en vasito a partir de esta etapa.  
• La leche materna o fórmula sigue siendo el alimento principal hasta el año.

Texturas por progreso  
• 6 a 7 meses: purés espesos o trozos muy blandos.  
• 8 a 9 meses: machacado con grumos, trozos pequeños blandos.  
• 10 a 12 meses: picado fino y alimentos familiares adaptados.

Evitar antes del año  
• Miel (riesgo de botulismo)  
• Leche de vaca como bebida principal  
• Azúcar añadida y sal en exceso  
• Frutos secos enteros o trozos duros que puedan causar atragantamiento  
• Alimentos crudos de alto riesgo (pescado crudo, huevo crudo)

Disfruta esta etapa; es un mundo de exploración para tu bebé. 🥄`
    ]
  },

  lactanciaVitaminas: {
    palabrasClave: [
      'lactar','lactancia','vitaminas','vitamina d','suplementos','hierro gotas','multivitaminico',
      'calcio','omega 3','galactagogos','sube la leche','baja la leche','leche materna'
    ],
    respuesta: [
      `🍼 Lactancia y suplementos  

Lactancia materna  
• La lactancia exclusiva hasta los 6 meses es ideal.  
• Se recomienda continuar con alimentos hasta 2 años o más.  
• La leche materna se adapta a las necesidades del bebé.

Suplementos comunes  
• Vitamina D: puede indicarse desde los primeros meses según clima y exposición solar.  
• Hierro en gotas: puede ser necesario desde los 4 a 6 meses en algunos casos, especialmente si hay riesgo de anemia.  
• Multivitamínicos: solo si el profesional los indica.

Para mantener la producción de leche  
• Ofrece pecho a demanda.  
• Buen agarre y posición.  
• Contacto piel con piel.  
• Hidratación y alimentación adecuada de la madre.  
• Descanso cuando sea posible.  
• Evita el estrés excesivo (más fácil decirlo que hacerlo, lo sabemos).

No existen alimentos "milagrosos" para producir más leche, pero una dieta balanceada y suficiente hidratación ayudan.

Consulta siempre con tu pediatra sobre suplementos específicos. 💚`
    ]
  },

  blwVsPures: {
    palabrasClave: [
      'blw vs pures','blw o papillas','metodo blw','autoalimentacion',
      'que es mejor','papillas o blw','combinacion'
    ],
    respuesta: [
      `🍽️ BLW y purés: pueden convivir  

¿Qué es BLW?  
• Baby-Led Weaning: el bebé se autoalimenta con trozos de alimentos desde el inicio.  
• Promueve autonomía y exploración de texturas.

¿Qué son los purés?  
• Alimentación con papillas y purés espesos usando cuchara.  
• Permite control de texturas y porciones.

Lo importante  
• No hay un método "correcto" único.  
• Puedes combinar ambos según te funcione.  
• Lo crucial es: seguridad, avance de texturas y respetar señales del bebé.

Consejos para BLW  
• Alimentos blandos en formas seguras (bastones grandes).  
• Supervisa siempre.  
• Evita alimentos duros o peligrosos.

Consejos para purés  
• Que sean espesos, no completamente líquidos.  
• Avanza gradualmente a texturas con grumos.  
• No fuerces a terminar el plato.

Cualquier método que elijas, asegúrate de que el bebé tenga oportunidades de explorar y autorregular su apetito. 👶`
    ]
  },

  alergias: {
    palabrasClave: [
      'alergia','alergenos','introduccion alergenos','huevo','mani','cacahuate',
      'pescado','lactosa','gluten','falso mito alergia','urticaria','erupcion','como introducir'
    ],
    respuesta: [
      `🌰 Introducción de alimentos potencialmente alergénicos  

Recomendaciones actuales  
• Huevo, maní, pescado, gluten y lácteos pueden introducirse desde el inicio de la alimentación complementaria (alrededor de 6 meses).  
• La introducción temprana puede ayudar a PREVENIR alergias.  
• No retrasar sin indicación médica.

Cómo introducir  
• Introduce un alergeno a la vez.  
• Observa durante 2 a 3 días antes de introducir el siguiente.  
• Ofrece en casa, no por primera vez en restaurantes o viajes.  
• Puedes mezclar con alimentos que ya tolera.

Ejemplos  
• Huevo: bien cocido, puedes empezar con yema y luego clara.  
• Maní: mantequilla de maní diluida (nunca maní entero por riesgo de atragantamiento).  
• Pescado: bien cocido, desmenuzado.

Señales leves de alergia  
• Ronchas alrededor de la boca  
• Erupción cutánea leve  
→ Suspende el alimento y consulta con pediatra.

Señales graves - ¡URGENCIA!  
• Hinchazón de labios, lengua o cara  
• Dificultad para respirar  
• Vómitos persistentes  
→ Llama a emergencias inmediatamente.

Si hay antecedentes familiares de alergias severas, consulta con especialista antes de introducir. 🥜`
    ]
  },

  aguaHidratacion: {
    palabrasClave: [
      'agua','hidratacion','cuanta agua','vasito','taza','sed','cuando dar agua'
    ],
    respuesta: [
      `💧 Agua e hidratación  

Antes de los 6 meses  
• Si hay lactancia materna exclusiva, no se necesita agua adicional.  
• La leche materna tiene suficiente agua.  
• Solo ofrecer agua si el pediatra lo indica (clima muy caluroso, fiebre).

Desde los 6 meses (inicio de sólidos)  
• Ofrece pequeños sorbos de agua en vasito durante las comidas.  
• No es necesario forzar grandes cantidades.  
• El agua complementa, no reemplaza la leche.

Cómo ofrecerla  
• Vasito entrenador o vaso abierto con ayuda.  
• Agua hervida y enfriada o agua embotellada segura.  
• Evita jugos azucarados, incluso naturales (mejor la fruta entera).

Señales de buena hidratación  
• Pañales mojados regulares (6+ al día)  
• Boca húmeda  
• Lágrimas al llorar  
• Piel elástica

Evita bebidas gaseosas, té y jugos industriales. El agua es la mejor opción. 🚰`
    ]
  },

  alimentosNoRecomendados: {
    palabrasClave: [
      'evitar alimentos','no recomendados','prohibidos bebe','miel','sal','azucar','frutos secos enteros',
      'pescado crudo','leche de vaca','espinaca nitratos','miel botulismo','que no dar'
    ],
    respuesta: [
      `🚫 Alimentos a evitar en menores de 1 año  

Totalmente prohibidos  
• Miel (riesgo de botulismo infantil, ni siquiera en preparaciones)  
• Frutos secos enteros (riesgo de atragantamiento)

Limitar o evitar  
• Leche de vaca como bebida principal (puede usarse en preparaciones)  
• Sal añadida (sus riñones no la procesan bien)  
• Azúcar añadida (caries, preferencias dulces)  
• Pescado crudo o semicrudo  
• Huevo crudo o poco cocido  
• Miel en cualquier forma

Riesgo de atragantamiento  
• Uvas enteras, cerezas (córtalas en 4 partes)  
• Zanahoria cruda en trozos  
• Manzana cruda en trozos grandes  
• Salchichas en rodajas (córtalas a lo largo)  
• Palomitas de maíz

Otros  
• Bebidas gaseosas o energéticas  
• Té y café (interfieren con absorción de hierro)  
• Alimentos ultraprocesados con exceso de sodio

Consejo  
• Ofrece versiones seguras: alimentos blandos, sin miel, sin sal añadida ni azúcar.  
• Supervisa siempre durante las comidas.

Después del año, algunos de estos alimentos pueden introducirse gradualmente con precaución. 🍯❌`
    ]
  },

  recetasHierro: {
    palabrasClave: [
      'recetas hierro','ideas hierro','menu hierro','sangrecita receta',
      'papilla carne','pure lentejas','hamburguesa lentejas','preparaciones'
    ],
    respuesta: [
      `👩‍🍳 Ideas rápidas ricas en hierro  

Desayunos  
• Avena cocida con yema de huevo revuelta y trocitos de plátano  
• Tortilla de espinaca bien cocida con papa

Almuerzos/Cenas  
• Papilla de sangrecita con zapallo y papa, servida con gajitos de mandarina 🍊  
• Puré de lentejas con zanahoria y tomate, y un chorrito de limón al final  
• Carne molida guisada con arvejitas y arroz suave  
• Hígado guisado con cebolla y tomate, acompañado de puré de camote  
• Pescado al vapor desmenuzado con brócoli y papa

Snacks  
• Bastones de pimiento rojo asado (vitamina C)  
• Garbanzos cocidos y machacados con un toque de aceite de oliva

Tip importante  
• Siempre agrega vitamina C en la misma comida para mejorar la absorción del hierro.  
• Frutas cítricas: naranja, mandarina, kiwi, fresa.  
• Verduras: tomate, pimiento, brócoli.  
• Evita té, café o lácteos junto con comidas ricas en hierro.

Combinar hierro hemo (carnes) con hierro no hemo (menestras) y vitamina C es la fórmula ganadora. 🥩🍋`
    ]
  }
};

// Respuestas de emergencia y sin resultados
export const salidasEmergencia = {
  medica: `⚠️ Esta consulta requiere atención médica profesional inmediata.  

• Contacta al pediatra o acude a tu centro de salud.  
• En caso de urgencia, llama a los servicios de emergencia.  

Recuerda que esta herramienta brinda orientación general, pero no reemplaza una consulta médica personalizada. 💬`,

  dieta: `🍽️ No puedo ofrecer dietas personalizadas ni cantidades exactas.  

Cada bebé es distinto según su edad, peso, desarrollo y necesidades individuales.  

Para definir una dieta adecuada y personalizada, lo mejor es acudir a un pediatra o nutricionista infantil que pueda evaluarlo de manera individual. 👩‍⚕️`,

  noEncontrada: `Lo siento, no encontré información específica sobre esa consulta. 😔  

Puedo ayudarte con temas como:  
• Anemia infantil 🩸  
• Alimentos ricos en hierro 🍖  
• Preparación segura de comidas 🍲  
• Alimentación complementaria 👶  
• Lactancia y vitaminas 🍼  
• Alergias e introducción de alérgenos 🌰  
• Texturas y progresión por edades 🍽️  
• Hidratación y agua 💧  
• Rechazo de alimentos y apoyo emocional 💚  
• Corte seguro de alimentos y prevención de atragantamientos ✂️  
• Snacks saludables, horarios de comidas y mucho más

Si se trata de una situación médica puntual o urgente, lo mejor es consultar con un profesional de salud. 💬`
};

// Detectores de emergencia y dieta
export const detectarEmergenciaMedica = (mensaje) => {
  const palabrasEmergencia = [
    'enfermo','vomita','vomito','diarrea con sangre','fiebre alta','temperatura alta',
    'urgencia','emergencia','hospital','dolor fuerte','dolor abdominal','sangra','sangrado',
    'alergia grave','reaccion grave','convulsiona','convulsion','dificultad para respirar',
    'respira mal','no responde','muy somnoliento','deshidratacion','no orina',
    'letargo','decaimiento severo','labios morados','rechazo absoluto de liquidos',
    'signos de deshidratacion','se desmaya','inconsciente','no despierta'
  ];
  const fiebreAlta = /\b(38(\.|,)?5|39|40|41)(?:\s*°?\s*c| c| grados)?\b/i;
  const txtNormalizado = normalizar(mensaje);
  return palabrasEmergencia.some(p => txtNormalizado.includes(normalizar(p))) || fiebreAlta.test(mensaje);
};

export const detectarSolicitudDieta = (mensaje) => {
  const palabrasDieta = [
    'cuanto darle','cantidad exacta','porcion','gramos','racion',
    'menu para','menu diario','menu semanal','plan de alimentacion',
    'dieta para','calorias','medida exacta','cuanto debe comer','ml exactos','gramaje',
    'cuantos gramos','cuantas cucharadas exactas'
  ];
  const txtNormalizado = normalizar(mensaje);
  return palabrasDieta.some(p => txtNormalizado.includes(normalizar(p)));
};

// Motor principal de búsqueda
export const buscarRespuesta = (mensaje) => {
  const mensajeNormalizado = normalizar(mensaje);

  // Primero verificar emergencias
  if (detectarEmergenciaMedica(mensajeNormalizado)) {
    return { texto: salidasEmergencia.medica, esEmergencia: true };
  }
  
  // Luego verificar solicitudes de dieta
  if (detectarSolicitudDieta(mensajeNormalizado)) {
    return { texto: salidasEmergencia.dieta, esEmergencia: true };
  }

  // Buscar en base de conocimiento
  for (const [clave, datos] of Object.entries(baseConocimiento)) {
    const hit = datos.palabrasClave.some(palabra => {
      const palabraNormalizada = normalizar(palabra);
      return mensajeNormalizado.includes(palabraNormalizada);
    });
    
    if (hit) {
      const texto = Array.isArray(datos.respuesta) ? pick(datos.respuesta) : datos.respuesta;
      return { texto, esEmergencia: false };
    }
  }

  // Si no se encuentra nada
  return { texto: salidasEmergencia.noEncontrada, esEmergencia: false };
};