// tailwind.colors.js - Configuración de colores para Tailwind
const { getTheme, getSiteConfig } = require('./config/index.ts');

const siteConfig = getSiteConfig();
const theme = getTheme(siteConfig.theme.default === 'system' ? 'default' : siteConfig.theme.default);

module.exports = {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
  gray: theme.colors.gray,
  // Mantener colores de Tailwind por compatibilidad
  blue: theme.colors.primary,
  slate: theme.colors.gray,
};
