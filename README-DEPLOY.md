# Guía de despliegue 🚀

Este documento explica paso a paso cómo **publicar tu proyecto Astro** en **Firebase Hosting** y **Cloudflare Pages**, y cómo conectar ambos con tu repositorio GitHub para despliegues automáticos.

---

## 📦 Prerrequisitos

- Node.js (v18 o superior) y npm instalados.
- Cuenta en **Firebase** y **Cloudflare**.
- Repositorio en **GitHub** con el proyecto ya subido (consulta la conversación *Upload Project to GitHub* si aún no lo has hecho).
- Herramientas de línea de comandos:
  ```bash
  npm install -g firebase-tools
  ```

---

## 1️⃣ Despliegue en **Firebase Hosting**

### a) Configurar Firebase CLI
```bash
# Inicia sesión en tu cuenta de Firebase
firebase login
```

### b) Inicializar el hosting
```bash
# Dentro del directorio raíz del proyecto
firebase init hosting
```
Durante la inicialización responde:
- **¿Qué directorio público deseas usar?** → `dist` (o el que genere tu build).
- **¿Configurar como una aplicación de una sola página?** → `No` (a menos que necesites SPA).
- **¿Sobrescribir `index.html`?** → `No`.

### c) Construir el proyecto
```bash
npm run build   # Astro genera la carpeta `dist`
```

### d) Desplegar
```bash
firebase deploy --only hosting
```
> Después del despliegue verás la URL pública de Firebase Hosting.

### e) Conectar con GitHub (CI/CD)
Puedes automatizar el despliegue con GitHub Actions. Crea el archivo `.github/workflows/firebase-deploy.yml`:
```yaml
name: Deploy to Firebase Hosting
on:
  push:
    branches: [ main ]
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Install Firebase CLI
        run: npm install -g firebase-tools
      - name: Deploy
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
        run: firebase deploy --only hosting --token "$FIREBASE_TOKEN"
```
1. Genera un token de despliegue:
   ```bash
   firebase login:ci
   ```
2. Añade el token como **secret** llamado `FIREBASE_TOKEN` en la configuración del repositorio (Settings → Secrets).

---

## 2️⃣ Despliegue en **Cloudflare Pages**

### a) Crear el proyecto en Cloudflare
1. Ve a **Pages** → **Create a project**.
2. Conecta tu cuenta de GitHub y selecciona el repositorio del proyecto.
3. Configura los siguientes campos:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Haz clic en **Save and Deploy**.

### b) Configuración adicional (opcional)
- **Variables de entorno**: si tu proyecto necesita variables, añádelas en la sección *Settings → Environment Variables*.
- **Redirects / Rewrites**: usa el archivo `_redirects` en la raíz del proyecto o la configuración de `pages.config.json` para manejar rutas SPA.

### c) Despliegue continuo
Una vez conectado, cada *push* a la rama `main` (o la que hayas configurado) disparará automáticamente una nueva compilación y despliegue en Cloudflare Pages.

---

## 🔗 Enlaces útiles
- **README principal del proyecto**: [README.md](README.md)
- Firebase Docs: https://firebase.google.com/docs/hosting
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages

---

## 🎉 ¡Listo!
Con estos pasos tu sitio Astro estará disponible tanto en **Firebase Hosting** como en **Cloudflare Pages**, y los cambios en tu repositorio se desplegarán automáticamente.
