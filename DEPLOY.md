# 🚀 Guía de Despliegue a GitHub Pages

Esta guía te ayudará a hostear tu aplicación React en GitHub Pages de forma segura usando GitHub Secrets.

## ⚠️ Importante sobre Seguridad

**NUNCA** pongas tu clave API directamente en el código o en archivos commiteados. Usaremos **GitHub Secrets** para proteger tu clave API durante el build.

## 📋 Pasos para Desplegar

### 1. Configurar GitHub Secrets

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Secrets and variables** → **Actions**
4. Click en **New repository secret** (Nuevo secreto del repositorio)
5. Configura el secreto:
   - **Name**: `REACT_APP_GEMINI_API_KEY`
   - **Secret**: Pega tu clave API: `AIzaSyDiEzNc0hSgZ4V5I-liy6Kb4quhiaNzC-w`
6. Click en **Add secret**

✅ Ahora tu clave API está guardada de forma segura en GitHub Secrets

### 2. Configurar GitHub Pages

1. En tu repositorio, ve a **Settings** → **Pages**
2. En **Source**, selecciona:
   - **Source**: `GitHub Actions`
3. Guarda los cambios

### 3. Actualizar package.json

**IMPORTANTE**: Debes actualizar el campo `homepage` en `package.json` con la URL de tu repositorio:

```json
"homepage": "https://TU_USUARIO.github.io/TU_REPOSITORIO"
```

**Ejemplo:**
- Si tu usuario es `rodrigo123` y tu repositorio es `eticaca`, sería:
  ```json
  "homepage": "https://rodrigo123.github.io/eticaca"
  ```

### 4. Hacer Push al Repositorio

```bash
# Asegúrate de estar en la rama main o master
git add .
git commit -m "Configuración para GitHub Pages"
git push origin main
```

### 5. Verificar el Despliegue

1. Ve a la pestaña **Actions** en tu repositorio de GitHub
2. Verás un workflow ejecutándose llamado "Deploy to GitHub Pages"
3. Espera a que termine (puede tomar 2-5 minutos)
4. Una vez completado, tu app estará disponible en:
   `https://TU_USUARIO.github.io/TU_REPOSITORIO`

## 🔍 Verificación

### Verificar que el Secret está configurado:
- Settings → Secrets and variables → Actions
- Debe aparecer `REACT_APP_GEMINI_API_KEY` en la lista

### Verificar el Workflow:
- Actions → Deploy to GitHub Pages
- Debe completarse sin errores
- El build debe usar el secret correctamente

### Verificar que la clave NO está expuesta:
```bash
# Buscar en el código fuente
grep -r "AIzaSy" src/
# No debe encontrar nada

# Verificar que .env está en .gitignore
grep "\.env" .gitignore
# Debe mostrar .env
```

## 🛠️ Solución de Problemas

### Error: "REACT_APP_GEMINI_API_KEY no está configurada"
- Verifica que el Secret está configurado correctamente en GitHub
- El nombre debe ser exactamente: `REACT_APP_GEMINI_API_KEY`
- Verifica que el workflow está usando el secret en el paso de build

### Error: "404 Not Found" en GitHub Pages
- Verifica que el campo `homepage` en `package.json` tiene la URL correcta
- Asegúrate de que GitHub Pages está configurado para usar "GitHub Actions"
- Espera unos minutos después del primer despliegue

### El build falla
- Revisa los logs en la pestaña Actions
- Verifica que todas las dependencias están en `package.json`
- Asegúrate de que el código no tiene errores de sintaxis

## 📝 Notas Importantes

1. **GitHub Secrets son seguros**: Solo están disponibles durante el build, nunca se exponen en el código
2. **El build incluye la variable**: La variable de entorno se inyecta durante el build, pero está compilada en el bundle JavaScript
3. **Considera restricciones de dominio**: En Google Cloud Console, puedes restringir tu clave API para que solo funcione desde tu dominio de GitHub Pages
4. **Actualizaciones automáticas**: Cada push a `main` o `master` desplegará automáticamente

## 🔒 Seguridad Adicional (Recomendado)

Para mayor seguridad, considera:

1. **Restringir la clave API por dominio**:
   - Ve a [Google Cloud Console](https://console.cloud.google.com/)
   - Selecciona tu proyecto
   - Ve a APIs & Services → Credentials
   - Edita tu clave API
   - En "Application restrictions", selecciona "HTTP referrers"
   - Agrega: `https://TU_USUARIO.github.io/*`

2. **Usar un backend proxy** (más seguro):
   - Crea un backend simple (Node.js, Python, etc.)
   - El backend guarda la clave API
   - El frontend llama al backend, no directamente a Gemini
   - Esto oculta completamente la clave del frontend

## 📚 Recursos

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React App Deployment](https://create-react-app.dev/docs/deployment/#github-pages)

