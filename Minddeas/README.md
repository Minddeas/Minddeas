<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/47ead632-854e-412a-97ec-95e7c371065d

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Set the `VITE_FORMSPREE_FORM_ID` in [.env](.env) to your Formspree form ID (formspree.io → Forms → copy form ID from URL)
4. Run the app:
   `npm run dev`

**Formspree:** O formulário de contacto envia dados para o Formspree. Copie o ID do formulário (ex: `mnopqrst` de `https://formspree.io/f/mnopqrst`) e defina `VITE_FORMSPREE_FORM_ID` no ficheiro `.env`. Na Vercel, adicione a mesma variável em Project Settings → Environment Variables.
