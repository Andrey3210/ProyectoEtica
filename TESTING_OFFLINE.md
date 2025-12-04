# Guía para Testing sin Internet

## Opción 1: Forzar Modo Offline en el Código (Más Fácil)

1. Abre `src/services/geminiService.js`
2. En la función `hayConexion()`, descomenta la línea:
   ```javascript
   return false; // Forzar modo offline
   ```
3. Guarda el archivo
4. Recarga la página
5. El chatbot usará siempre el motor offline

**Para volver a modo normal:** Comenta la línea de nuevo.

---

## Opción 2: Usar DevTools del Navegador

### Chrome/Edge:
1. Abre DevTools (F12)
2. Ve a la pestaña **Network** (Red)
3. En el dropdown de throttling, selecciona **"Offline"**
4. O haz clic en el botón **"Offline"** si está visible

### Firefox:
1. Abre DevTools (F12)
2. Ve a la pestaña **Network**
3. Haz clic en el ícono de configuración (⚙️)
4. Activa **"Work Offline"**

---

## Opción 3: Desconectar Internet del Sistema

1. Desactiva WiFi o desconecta el cable de red
2. El navegador detectará automáticamente que no hay conexión
3. El chatbot usará el motor offline

---

## Opción 4: Bloquear Dominio de Gemini

1. Abre DevTools (F12)
2. Ve a **Network** → **Request blocking**
3. Agrega el patrón: `*generativelanguage.googleapis.com*`
4. Esto bloqueará las peticiones a Gemini y forzará el fallback offline

---

## Verificar que Funciona

Cuando estés en modo offline, deberías ver:
- Badge "Offline" en el header de la app
- Badge "Offline" en el header del chatbot
- Respuestas del motor offline (más estructuradas y con formato específico)
- En la consola: "Sin conexión, usando motor offline"

---

## Nota Importante

El motor offline funciona completamente sin internet y usa la base de conocimiento local en `MotorConocimiento.js`. Todas las respuestas se generan localmente.


