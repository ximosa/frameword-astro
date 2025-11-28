// config/themes.config.ts
export interface ThemeConfig {
  name: string;
  colors: {
    // Colores principales
    primary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    secondary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    accent?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    // Colores neutros
    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
}

// Tema por defecto (azul moderno)
export const defaultTheme: ThemeConfig = {
  name: "default",
  colors: {
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    secondary: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    }
  }
};

// Tema oscuro
export const darkTheme: ThemeConfig = {
  name: "dark",
  colors: {
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    secondary: {
      50: "#1f2937",
      100: "#374151",
      200: "#4b5563",
      300: "#6b7280",
      400: "#9ca3af",
      500: "#d1d5db",
      600: "#e5e7eb",
      700: "#f3f4f6",
      800: "#f9fafb",
      900: "#ffffff",
    },
    gray: {
      50: "#1f2937",
      100: "#374151",
      200: "#4b5563",
      300: "#6b7280",
      400: "#9ca3af",
      500: "#d1d5db",
      600: "#e5e7eb",
      700: "#f3f4f6",
      800: "#f9fafb",
      900: "#ffffff",
    }
  }
};

// Tema empresarial (verde/azul marino)
export const businessTheme: ThemeConfig = {
  name: "business",
  colors: {
    primary: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    secondary: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
    accent: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
    },
    gray: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    }
  }
};

// Lista de temas disponibles
export const availableThemes = {
  default: defaultTheme,
  dark: darkTheme,
  business: businessTheme,
} as const;

export type ThemeName = keyof typeof availableThemes;

// Función para obtener un tema
export function getTheme(name: ThemeName = 'default'): ThemeConfig {
  return availableThemes[name] || defaultTheme;
}

// Función para generar variables CSS de un tema
export function generateThemeCSS(theme: ThemeConfig): string {
  const cssVars: string[] = [];

  Object.entries(theme.colors).forEach(([colorName, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      cssVars.push(`  --color-${colorName}-${shade}: ${value};`);
    });
  });

  return `:root {\n${cssVars.join('\n')}\n}`;
}
