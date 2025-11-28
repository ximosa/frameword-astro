// config/index.ts - Punto de entrada centralizado para todas las configuraciones
export * from './site.config';
export * from './themes.config';
export * from './content.config';

// Re-exportar configuraciones por defecto para fácil acceso
export { siteConfig, getSiteConfig, validateConfig } from './site.config';
export { getTheme, generateThemeCSS, availableThemes, defaultTheme } from './themes.config';
export { getCollectionConfig, getActiveCollections, createCollection, commonSchemas } from './content.config';

// Función helper para inicializar configuración completa
export function initConfig() {
  const site = getSiteConfig();
  const theme = getTheme(site.theme.default === 'system' ? 'default' : site.theme.default as any);

  return {
    site,
    theme,
    collections: getActiveCollections(),
  };
}

// Tipos principales exportados
export type { SiteConfig } from './site.config';
export type { ThemeConfig, ThemeName } from './themes.config';
export type { ContentCollectionConfig, ContentSchema, ContentField } from './content.config';
