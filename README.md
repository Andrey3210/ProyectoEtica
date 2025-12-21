# ANMI – Asistente Nutricional Materno Infantil

ANMI es una aplicación web tipo **chatbot** desarrollada como proyecto académico por estudiantes de la **Facultad de Ingeniería de Sistemas e Informática (FISI) – UNMSM**, con apoyo de la Facultad de Nutrición, orientada a brindar **información educativa** sobre:

- Nutrición infantil (0 a 24 meses)
- Prevención y manejo informativo de **anemia** en bebés (especialmente 6–12 meses)
- Lactancia materna y alimentación complementaria
- Preparación segura de alimentos

> ⚠️ **Aviso importante:** ANMI es una herramienta educativa. **No reemplaza** la atención profesional, **no diagnostica** y **no receta** medicamentos/suplementos ni genera dietas personalizadas.

---

## ✨ Funcionalidades principales

- ✅ **Chat tipo mensajería** con UI moderna (modo claro/oscuro y animaciones)
- ✅ Renderizado de respuestas con **Markdown** (listas, negritas, links, etc.)
- ✅ **Motor híbrido**:
  - **Online (Gemini)** cuando hay conexión
  - **Fallback Offline** con motor local (`MotorConocimiento`)
- ✅ **Persistencia de chats** en el navegador (IndexedDB) con:
  - múltiples chats
  - renombrar, eliminar
  - marcar como favorito ⭐
  - buscador por nombre y contenido
- ✅ **Preferencias del usuario** guardadas:
  - tema (claro/oscuro)
  - tamaño de fuente
  - forzar modo offline
- ✅ **Exportar historial** de chat a `.txt`
- ✅ Lector de voz (Text-to-Speech) para el último mensaje del bot
- ✅ Botón flotante para bajar al final del chat
- ✅ **Detección e instalación PWA** (si el navegador lo permite)

---

## 🧩 Arquitectura (alto nivel)

**Frontend (React)**
- Componente principal: `ChatbotANMI`
- UI modular:
  - `Sidebar` (lista de chats)
  - `SubmenuSettings` (configuración)
  - `PanelInformacion` (ayuda y recursos)
  - `AvisoResponsabilidad` (modal inicial)
  - `MensajeChat` (render de mensajes con Markdown)

**Servicios**
- `services/geminiService`
  - `obtenerRespuestaInteligente(...)`
  - `setForzarModoOffline(...)`

**Motor Offline**
- `MotorConocimiento`
  - `buscarRespuesta(...)`

**Persistencia**
- `utils/storage`
  - `cargarChats`, `guardarChats`
  - `cargarPreferencias`, `guardarPreferencias`

---

## 🛠️ Stack tecnológico

- **React** (Hooks: useState, useEffect, useRef)
- **Lucide React** (iconos)
- **React Markdown** + **remark-gfm** (Markdown + tablas/listas)
- **IndexedDB** (persistencia local)
- **PWA events**: `beforeinstallprompt`, `appinstalled`
- **Web Speech API** (lector de voz)

---

## 📦 Instalación y ejecución

### 1) Clonar e instalar dependencias
```bash
npm install
2) Variables de entorno (opcional para modo online)
Crea un archivo .env en la raíz del proyecto:

env
Copiar código
REACT_APP_GEMINI_API_KEY=TU_API_KEY
Si no configuras la API Key o no hay conexión, el bot usará el motor offline como fallback.

3) Ejecutar en desarrollo
bash
Copiar código
npm run dev
o si el proyecto usa CRA:

bash
Copiar código
npm start
📴 Modo Offline (Forzar)
Desde el panel de Configuración puedes activar:

Forzar modo offline (solo motor local)
Esto deshabilita Gemini y mantiene respuestas únicamente del motor local.

🧪 Exportar historial
En Configuración → Exportar chat, puedes descargar un archivo:

chat-anmi.txt
Con todas las preguntas y respuestas separadas por divisores.

📲 Instalación como PWA
Si el navegador lo permite, ANMI mostrará un aviso en el header:

“📲 Puedes instalar ANMI como aplicación...”

Botón Instalar

Esto se activa únicamente cuando se dispara el evento beforeinstallprompt.

📚 Recursos sugeridos (links dentro de la app)
Ministerio de Salud del Perú (MINSA): https://www.gob.pe/minsa

Organización Mundial de la Salud (OMS): https://www.who.int/es

🧑‍💻 Autores
Andrey Zafra

Sebastian Tejeda

Estefano Ramirez

Luis Quispe

Maleck Ramirez

Christian Cabrejos

Rodrigo Dulanto

Luis Bizarro
