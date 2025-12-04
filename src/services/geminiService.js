// Servicio para integrar con Google Gemini API
// Usa el motor offline como fallback si falla la conexión

import { GoogleGenerativeAI } from '@google/generative-ai';

// ⚠️ SEGURIDAD: La clave API debe estar en variables de entorno, nunca hardcodeada
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ REACT_APP_GEMINI_API_KEY no está configurada. Por favor, crea un archivo .env con tu clave API.');
  throw new Error('REACT_APP_GEMINI_API_KEY no está configurada. Verifica tu archivo .env');
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

/**
 * SISTEMA: MUY ESPECÍFICO Y ESTRICTO
 *
 * - SOLO puedes responder sobre:
 *   1) Nutrición infantil de 0 a 24 meses
 *   2) Prevención y manejo general de anemia en bebés
 *   3) Lactancia materna (exclusiva, mixta, prolongada)
 *   4) Alimentación complementaria 6–12 meses
 *   5) Seguridad alimentaria (texturas, riesgo de atragantamiento, higiene)
 *   6) Conducta alimentaria en bebés (rechazo de comida, señales de hambre/saciedad, etc.)
 *
 * - SI LA PREGUNTA NO ES DE ESTOS TEMAS:
 *   Debes responder EXACTAMENTE (sin agregar nada más):
 *   "Solo puedo ayudarte con nutrición infantil, lactancia, anemia y alimentación segura en bebés de 0 a 2 años."
 *
 *   Ejemplos de cosas que NO debes responder:
 *   - Problemas de salud de adolescentes o adultos
 *   - Temas de programación, tecnología, psicología adulta, pareja, trabajo, etc.
 *   - Política, religión, cine, chisme, redes sociales, etc.
 *   - Consultas de medicina clínica específica (diagnósticos, interpretación de exámenes, tratamientos).
 *
 * - NO puedes:
 *   - Diagnosticar enfermedades
 *   - Indicar medicamentos, dosis, esquemas ni tratamientos específicos
 *   - Dar dietas personalizadas con cantidades exactas (gramos, mililitros, calorías)
 *
 * - SI EL USUARIO PIDE DIETA DETALLADA O CANTIDADES EXACTAS:
 *   Responde siempre algo como:
 *   "No puedo dar dietas personalizadas ni cantidades exactas. Puedo darte orientaciones generales y siempre es mejor que lo revises con el pediatra o nutricionista."
 *
 * - ESTILO:
 *   - Responde SIEMPRE en español peruano.
 *   - Respuestas cortas y claras (4–8 líneas máximo).
 *   - No uses títulos grandes ni formato de informe.
 *   - Puedes usar algunos emojis, pero pocos (1–3 por respuesta).
 *   - Mantén un tono cálido, empático y profesional.
 *
 * - EMERGENCIAS:
 *   Si mencionan dificultad para respirar, convulsiones, fiebre muy alta, desmayo, labios morados, etc.,
 *   di SIEMPRE que debe acudir de inmediato a un servicio de salud o emergencia.
 */
const SYSTEM_PROMPT = `
Eres ANMI, un Asistente Nutricional Materno Infantil desarrollado por la Universidad Nacional Mayor de San Marcos.

TU ALCANCE ES EXCLUSIVAMENTE:
- Nutrición infantil de 0 a 24 meses
- Prevención y manejo general de anemia en bebés
- Lactancia materna (exclusiva, mixta, prolongada)
- Alimentación complementaria (6–12 meses)
- Seguridad alimentaria (texturas, riesgo de atragantamiento, higiene básica)
- Conducta alimentaria (rechazo de comida, apetito, señales de hambre y saciedad) en bebés

SI LA PREGUNTA NO ESTÁ RELACIONADA CON ESTOS TEMAS:
Debes responder EXACTAMENTE, sin agregar nada más:
"Solo puedo ayudarte con nutrición infantil, lactancia, anemia y alimentación segura en bebés de 0 a 2 años."

NO respondas preguntas sobre:
- Problemas de salud de adolescentes o adultos
- Programación, tecnología, matemáticas, tareas escolares, psicología adulta, pareja, trabajo, etc.
- Política, religión, cine, entretenimiento, opiniones personales o temas ajenos a nutrición infantil.
- Interpretación de exámenes, diagnósticos clínicos o indicación de medicamentos.

NO puedes:
- Diagnosticar enfermedades
- Recetar medicamentos, suplementos ni dosis
- Dar dietas personalizadas con cantidades exactas (gramos, mililitros, calorías precisas)

Si alguien pide dietas exactas o cantidades específicas, responde algo como:
"No puedo dar dietas personalizadas ni cantidades exactas, pero sí orientaciones generales. Siempre es mejor revisarlo con el pediatra o nutricionista."

Si detectas una posible emergencia (dificultad para respirar, convulsiones, desmayo, labios morados, fiebre muy alta, rechazo total de líquidos, etc.),
indica que debe acudir de inmediato a un servicio de salud o emergencia.

ESTILO:
- Responde siempre en español peruano.
- Usa frases claras, sencillas y directas.
- Mantén las respuestas cortas (aprox. 4–8 líneas).
- Tono cálido, empático y profesional.
- Usa algunos emojis de forma moderada (1–3 máximo por respuesta).
`;

/**
 * Obtiene respuesta de Gemini API usando los modelos flash
 * @param {string} mensajeUsuario - El mensaje del usuario
 * @param {Array} historialMensajes - Historial de mensajes del chat actual (opcional)
 * @returns {Promise<{texto: string, fuente: 'gemini'|'offline'}>}
 */
export const obtenerRespuestaGemini = async (mensajeUsuario, historialMensajes = []) => {
  try {
    let model;
    try {
      model = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash',
        systemInstruction: SYSTEM_PROMPT,
      });
    } catch (error) {
      console.warn('gemini-2.0-flash no disponible, intentando con gemini-2.5-flash');
      model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        systemInstruction: SYSTEM_PROMPT,
      });
    }

    // Construir historial reciente
    const historial = [];
    if (historialMensajes.length > 0) {
      const historialReciente = historialMensajes.slice(-10);
      const empezarDesde = historialReciente[0]?.esBot ? 1 : 0;

      for (let i = empezarDesde; i < historialReciente.length; i++) {
        const msg = historialReciente[i];
        if (!msg || !msg.texto) continue;
        historial.push({
          role: msg.esBot ? 'model' : 'user',
          parts: [{ text: msg.texto }],
        });
      }
    }

    const generationConfig = {
      temperature: 0.5,       // un poco más bajo para que sea más estable
      topK: 32,
      topP: 0.9,
      maxOutputTokens: 512,   // limitar tamaño de respuesta
    };

    const chat = model.startChat({
      history: historial,
      generationConfig,
    });

    const result = await chat.sendMessage(mensajeUsuario);
    const response = await result.response;
    const texto = (response.text() || '').trim();

    return {
      texto,
      fuente: 'gemini',
    };
  } catch (error) {
    console.error('Error al obtener respuesta de Gemini:', error);
    throw error;
  }
};

// Variable global para forzar modo offline (puede ser modificada desde la UI)
let forzarModoOffline = false;

/**
 * Establece si se debe forzar el modo offline
 * @param {boolean} forzar - true para forzar offline, false para usar conexión real
 */
export const setForzarModoOffline = (forzar) => {
  forzarModoOffline = forzar;
};

/**
 * Obtiene el estado de forzar modo offline
 * @returns {boolean}
 */
export const getForzarModoOffline = () => {
  return forzarModoOffline;
};

/**
 * Verifica si hay conexión a internet
 * @returns {boolean}
 */
export const hayConexion = () => {
  // Si está forzado a offline, retornar false
  if (forzarModoOffline) {
    return false;
  }

  return typeof navigator !== 'undefined' && navigator.onLine;
};

/**
 * Intenta obtener respuesta de Gemini, si falla usa el motor offline
 * @param {string} mensajeUsuario - El mensaje del usuario
 * @param {Array} historialMensajes - Historial de mensajes
 * @param {Function} buscarRespuestaOffline - Función del motor offline
 * @returns {Promise<{texto: string, fuente: string}>}
 */
export const obtenerRespuestaInteligente = async (
  mensajeUsuario,
  historialMensajes = [],
  buscarRespuestaOffline
) => {
  if (!hayConexion()) {
    console.log('Sin conexión, usando motor offline');
    return {
      texto: buscarRespuestaOffline(mensajeUsuario).texto,
      fuente: 'offline',
    };
  }

  try {
    return await obtenerRespuestaGemini(mensajeUsuario, historialMensajes);
  } catch (error) {
    console.warn('Error con Gemini, fallback a offline:', error?.message || error);
    return {
      texto: buscarRespuestaOffline(mensajeUsuario).texto,
      fuente: 'offline',
    };
  }
};
