# 🚀 Guía de Despliegue en Netlify

Esta guía te ayudará a configurar tu aplicación React en Netlify con variables de entorno de forma segura.

## ✅ Ventajas de Netlify

- ✅ **Actualización automática**: Cada push a GitHub actualiza automáticamente tu sitio
- ✅ **Variables de entorno seguras**: Configuración fácil desde el dashboard
- ✅ **Sin configuración compleja**: Netlify detecta automáticamente React apps
- ✅ **HTTPS automático**: Certificados SSL gratuitos

## 📋 Configuración Paso a Paso

### 1. Conectar tu Repositorio de GitHub

1. Ve a [Netlify](https://www.netlify.com/) e inicia sesión
2. Click en **"Add new site"** → **"Import an existing project"**
3. Selecciona **GitHub** como proveedor
4. Autoriza Netlify a acceder a tus repositorios
5. Selecciona tu repositorio `eticaca` (o el nombre que tenga)
6. Netlify detectará automáticamente:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`

### 2. Configurar Variables de Entorno (IMPORTANTE)

**Esta es la parte más importante para proteger tu clave API:**

1. En el dashboard de Netlify, ve a tu sitio
2. Click en **Site settings** (Configuración del sitio)
3. En el menú lateral, click en **Environment variables** (Variables de entorno)
4. Click en **Add a variable** (Agregar variable)
5. Configura:
   - **Key**: `REACT_APP_GEMINI_API_KEY`
   - **Value**: `AIzaSyDiEzNc0hSgZ4V5I-liy6Kb4quhiaNzC-w`
6. Selecciona el **Scope** (alcance):
   - **All scopes** (todos los alcances) - para producción y previews
   - O solo **Production** si solo quieres que funcione en producción
7. Click en **Save**

✅ **Tu clave API ahora está guardada de forma segura en Netlify**

### 3. Configurar el Build

Netlify debería detectar automáticamente la configuración, pero verifica:

1. En **Site settings** → **Build & deploy** → **Build settings**
2. Verifica que:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Base directory**: (deja vacío, a menos que tu proyecto esté en un subdirectorio)

### 4. Desplegar

1. Click en **"Deploy site"** (Desplegar sitio)
2. Netlify comenzará a construir tu aplicación
3. Espera a que termine el build (2-5 minutos)
4. Una vez completado, tu sitio estará disponible en una URL como:
   `https://tu-sitio-random-123.netlify.app`

### 5. Configurar Dominio Personalizado (Opcional)

1. En **Site settings** → **Domain management**
2. Click en **Add custom domain**
3. Ingresa tu dominio
4. Sigue las instrucciones para configurar DNS

## 🔄 Actualizaciones Automáticas

**Netlify se actualiza automáticamente cuando:**
- Haces push a la rama `main` o `master` (despliegue de producción)
- Haces push a otras ramas (crea un preview deployment)
- Abres un Pull Request (crea un preview deployment)

**No necesitas hacer nada más** - cada vez que actualices en GitHub, Netlify detectará los cambios y desplegará automáticamente.

## 🔍 Verificación

### Verificar que la Variable de Entorno está configurada:
1. Site settings → Environment variables
2. Debe aparecer `REACT_APP_GEMINI_API_KEY` en la lista

### Verificar el Build:
1. En el dashboard, ve a **Deploys**
2. Click en el último deploy
3. Revisa los logs del build
4. Debe completarse sin errores relacionados con la clave API

### Verificar que funciona:
1. Abre tu sitio en el navegador
2. Prueba el chatbot
3. Debe conectarse a Gemini sin errores

## 🛠️ Solución de Problemas

### Error: "REACT_APP_GEMINI_API_KEY no está configurada"
- Verifica que la variable de entorno está configurada en Netlify
- El nombre debe ser exactamente: `REACT_APP_GEMINI_API_KEY`
- Asegúrate de que el scope incluye el entorno donde se está desplegando
- **Re-despliega** después de agregar/modificar variables de entorno

### El build falla
- Revisa los logs en la pestaña Deploys
- Verifica que todas las dependencias están en `package.json`
- Asegúrate de que el código no tiene errores de sintaxis

### La app no se actualiza automáticamente
- Verifica que Netlify está conectado a tu repositorio
- Revisa la configuración en Site settings → Build & deploy → Continuous Deployment
- Asegúrate de que estás haciendo push a la rama correcta (main/master)

### La clave API no funciona en producción
- Verifica que la variable de entorno está configurada
- **IMPORTANTE**: Después de agregar/modificar variables de entorno, debes **re-desplegar**:
  1. Ve a Deploys
  2. Click en "Trigger deploy" → "Clear cache and deploy site"

## 🔒 Seguridad Adicional (Recomendado)

### 1. Restringir la clave API por dominio en Google Cloud:

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Selecciona tu proyecto
3. Ve a **APIs & Services** → **Credentials**
4. Edita tu clave API
5. En **"Application restrictions"**, selecciona **"HTTP referrers"**
6. Agrega:
   - `https://tu-sitio.netlify.app/*`
   - `https://*.netlify.app/*` (para previews)
7. Guarda los cambios

Esto asegura que tu clave API solo funcione desde tu dominio de Netlify.

### 2. Usar diferentes claves para desarrollo y producción:

- **Development**: Usa tu clave local en `.env`
- **Production**: Usa una clave diferente en Netlify (más seguro)

## 📝 Notas Importantes

1. **Variables de entorno en Netlify son seguras**: Solo están disponibles durante el build, nunca se exponen públicamente
2. **Re-despliega después de cambiar variables**: Si modificas una variable de entorno, debes re-desplegar para que tome efecto
3. **Preview deployments**: Netlify crea previews automáticos para cada branch y PR, usando las mismas variables de entorno
4. **Cache**: Netlify cachea el build, si tienes problemas, haz "Clear cache and deploy"

## 🎯 Resumen Rápido

1. ✅ Conecta tu repositorio de GitHub a Netlify
2. ✅ Agrega la variable de entorno `REACT_APP_GEMINI_API_KEY` en Netlify
3. ✅ Despliega
4. ✅ Cada push a GitHub actualizará automáticamente tu sitio

## 📚 Recursos

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)
- [React App Deployment](https://create-react-app.dev/docs/deployment/#netlify)

