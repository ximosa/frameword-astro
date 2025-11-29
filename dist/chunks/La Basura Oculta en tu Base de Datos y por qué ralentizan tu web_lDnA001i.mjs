import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DHUdpo0D.mjs';
import 'clsx';

const frontmatter = {
  "title": "La Basura Oculta en tu Base de Datos",
  "description": "Tienes un servidor decente (8GB RAM, SSD NVMe), un CDN configurado, imágenes optimizadas, caché activado, lazy loading implementado, y tu WordPress está actualizado. Has hecho todo \"bien\".",
  "date": "2025-11-26",
  "author": "ximo",
  "image": "https://res.cloudinary.com/djjiagkho/image/upload/v1764115830/La_Basura_Oculta_en_tu_Base_de_Datos_gt1uaa.webp",
  "category": "Base de Datos"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "el-misterio-de-la-web-que-no-debería-ser-lenta",
    "text": "El misterio de la web que no debería ser lenta"
  }, {
    "depth": 2,
    "slug": "la-autopsia-técnica-un-caso-real",
    "text": "La autopsia técnica: Un caso real"
  }, {
    "depth": 2,
    "slug": "qué-demonios-es-wp_options",
    "text": "¿Qué demonios es wp_options?"
  }, {
    "depth": 3,
    "slug": "la-anatomía-de-un-registro-normal",
    "text": "La anatomía de un registro normal:"
  }, {
    "depth": 3,
    "slug": "la-anatomía-del-caos",
    "text": "La anatomía del caos:"
  }, {
    "depth": 2,
    "slug": "qué-son-los-transients-y-por-qué-son-el-enemigo-silencioso",
    "text": "Qué son los Transients y por qué son el enemigo silencioso"
  }, {
    "depth": 3,
    "slug": "los-peores-culpables",
    "text": "Los peores culpables:"
  }, {
    "depth": 2,
    "slug": "la-cascada-del-desastre-cómo-850k-filas-te-destruyen",
    "text": "La cascada del desastre: Cómo 850k filas te destruyen"
  }, {
    "depth": 3,
    "slug": "1-consulta-inicial-cada-página-cargada",
    "text": "1. Consulta inicial (cada página cargada):"
  }, {
    "depth": 3,
    "slug": "2-impacto-en-memoria",
    "text": "2. Impacto en memoria:"
  }, {
    "depth": 3,
    "slug": "3-impacto-en-io-del-disco",
    "text": "3. Impacto en I/O del disco:"
  }, {
    "depth": 3,
    "slug": "4-fragmentación-de-índices",
    "text": "4. Fragmentación de índices:"
  }, {
    "depth": 2,
    "slug": "el-análisis-forense-qué-encontramos",
    "text": "El análisis forense: Qué encontramos"
  }, {
    "depth": 2,
    "slug": "la-limpieza-procedimiento-quirúrgico",
    "text": "La limpieza: Procedimiento quirúrgico"
  }, {
    "depth": 3,
    "slug": "️-advertencia-crítica",
    "text": "⚠️ ADVERTENCIA CRÍTICA"
  }, {
    "depth": 3,
    "slug": "paso-1-backup",
    "text": "Paso 1: Backup"
  }, {
    "depth": 3,
    "slug": "paso-2-análisis-pre-limpieza",
    "text": "Paso 2: Análisis pre-limpieza"
  }, {
    "depth": 3,
    "slug": "paso-3-limpieza-con-wp-cli-método-recomendado",
    "text": "Paso 3: Limpieza con WP-CLI (método recomendado)"
  }, {
    "depth": 3,
    "slug": "paso-4-limpieza-sql-directa-método-avanzado",
    "text": "Paso 4: Limpieza SQL directa (método avanzado)"
  }, {
    "depth": 3,
    "slug": "paso-5-optimizar-la-tabla",
    "text": "Paso 5: Optimizar la tabla"
  }, {
    "depth": 2,
    "slug": "los-resultados-antes-y-después",
    "text": "Los resultados: Antes y después"
  }, {
    "depth": 3,
    "slug": "antes-de-la-limpieza",
    "text": "Antes de la limpieza:"
  }, {
    "depth": 3,
    "slug": "después-de-la-limpieza",
    "text": "Después de la limpieza:"
  }, {
    "depth": 2,
    "slug": "prevención-el-mantenimiento-que-tu-agencia-no-hace",
    "text": "Prevención: El mantenimiento que tu agencia no hace"
  }, {
    "depth": 3,
    "slug": "1-monitoreo-automatizado",
    "text": "1. Monitoreo automatizado"
  }, {
    "depth": 3,
    "slug": "2-limpieza-programada",
    "text": "2. Limpieza programada"
  }, {
    "depth": 3,
    "slug": "3-configurar-transients-externos",
    "text": "3. Configurar transients externos"
  }, {
    "depth": 3,
    "slug": "4-auditoría-trimestral",
    "text": "4. Auditoría trimestral"
  }, {
    "depth": 2,
    "slug": "los-culpables-habituales-plugins-que-destrozan-wp_options",
    "text": "Los culpables habituales: Plugins que destrozan wp_options"
  }, {
    "depth": 2,
    "slug": "la-pregunta-incómoda-para-tu-actual-proveedor",
    "text": "La pregunta incómoda para tu actual proveedor"
  }, {
    "depth": 2,
    "slug": "el-costo-real-de-la-ignorancia",
    "text": "El costo real de la ignorancia"
  }, {
    "depth": 2,
    "slug": "checklist-técnico-tu-web-está-enferma",
    "text": "Checklist técnico: ¿Tu web está enferma?"
  }, {
    "depth": 2,
    "slug": "la-verdad-que-nadie-te-dice",
    "text": "La verdad que nadie te dice"
  }, {
    "depth": 2,
    "slug": "conclusión-el-mantenimiento-invisible",
    "text": "Conclusión: El mantenimiento invisible"
  }, {
    "depth": 3,
    "slug": "quieres-saber-si-tu-web-tiene-este-problema",
    "text": "¿Quieres saber si tu web tiene este problema?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "el-misterio-de-la-web-que-no-debería-ser-lenta",
      children: "El misterio de la web que no debería ser lenta"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Escenario:"
      }), " Tienes un servidor decente (8GB RAM, SSD NVMe), un CDN configurado, imágenes optimizadas, caché activado, lazy loading implementado, y tu WordPress está actualizado. Has hecho todo “bien”."]
    }), "\n", createVNode(_components.p, {
      children: "Y aún así, tu web tarda 4-6 segundos en cargar el backend. El Time to First Byte (TTFB) es deplorable. Los usuarios se quejan. Google PageSpeed te da un 45 en mobile."
    }), "\n", createVNode(_components.p, {
      children: "Has revisado todo. Dos veces. El problema persiste."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: ["Bienvenido al infierno silencioso de la tabla ", createVNode(_components.code, {
          children: "wp_options"
        }), "."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "la-autopsia-técnica-un-caso-real",
      children: "La autopsia técnica: Un caso real"
    }), "\n", createVNode(_components.p, {
      children: "Recientemente diagnosticamos una web de e-commerce que cumplía este perfil exacto. Cliente frustrado, tres agencias anteriores sin solución, hosting premium de €180/mes, y tiempos de carga inaceptables."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# La consulta que reveló el horror"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "SELECT"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " COUNT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " wp_options"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Resultado: 847,392 filas"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Casi 850,000 registros en una tabla que debería tener entre 200-400 filas."
    }), "\n", createVNode(_components.p, {
      children: "El siguiente comando fue aún más revelador:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SELECT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    ROUND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(((data_length "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " index_length) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1024"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1024"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "AS"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"Size (MB)\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " information_schema"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "TABLES"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " table_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"wp_options\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "# Resultado: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "847"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " MB ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "8"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " GB)"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Una sola tabla pesaba más que toda la instalación de WordPress."
      })
    }), "\n", createVNode(_components.h2, {
      id: "qué-demonios-es-wp_options",
      children: "¿Qué demonios es wp_options?"
    }), "\n", createVNode(_components.p, {
      children: ["La tabla ", createVNode(_components.code, {
        children: "wp_options"
      }), " es el corazón de configuración de WordPress. Almacena:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Configuraciones del sitio (URL, título, tagline)"
      }), "\n", createVNode(_components.li, {
        children: "Opciones de plugins y temas"
      }), "\n", createVNode(_components.li, {
        children: "Widgets activos"
      }), "\n", createVNode(_components.li, {
        children: "Configuraciones de caché"
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Transients (aquí está el problema)"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Es una tabla de ", createVNode(_components.strong, {
        children: "autoload"
      }), ", lo que significa que WordPress carga su contenido en memoria en CADA página cargada, incluso en el backend."]
    }), "\n", createVNode(_components.h3, {
      id: "la-anatomía-de-un-registro-normal",
      children: "La anatomía de un registro normal:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "option_id | option_name              | option_value | autoload"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "----------|--------------------------|--------------|----------"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "         | siteurl                  | https:"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "...  | yes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "         | home                     | https:"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "//"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "...  | yes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "45"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        | active_plugins           | a:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "12"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":{...}   | yes"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Simple, limpio, necesario."
    }), "\n", createVNode(_components.h3, {
      id: "la-anatomía-del-caos",
      children: "La anatomía del caos:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "option_id | option_name                                    | option_value        | autoload"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "----------|------------------------------------------------|---------------------|----------"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "125847"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    | _transient_timeout_feed_8a7b2...               | "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1698234567"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "         | yes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "125848"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    | _transient_feed_8a7b2...                       | a:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":{s:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"child\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "... | yes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "125849"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    | _transient_timeout_wc_report_customers_...     | "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1698234890"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "         | yes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "125850"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    | _transient_wc_report_customers_...             | a:"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "23"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ":{...}         | yes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "[... 846,988 registros más ...]"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "qué-son-los-transients-y-por-qué-son-el-enemigo-silencioso",
      children: "Qué son los Transients y por qué son el enemigo silencioso"
    }), "\n", createVNode(_components.p, {
      children: ["Los ", createVNode(_components.strong, {
        children: "transients"
      }), " son datos temporales que WordPress y los plugins almacenan para acelerar operaciones. Funcionan como una caché interna:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "php",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Ejemplo de cómo se crean"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "set_transient"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'mi_dato_temporal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", $datos_pesados, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "12"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " HOUR_IN_SECONDS"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "El problema:"
      }), " Se supone que expiran automáticamente. En teoría."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "La realidad:"
      }), " WordPress solo elimina transients expirados cuando intentas acceder a ellos. Si nadie los solicita, se quedan ahí. Para siempre."]
    }), "\n", createVNode(_components.h3, {
      id: "los-peores-culpables",
      children: "Los peores culpables:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "WooCommerce"
        }), ": Transients de reportes, sesiones, productos relacionados"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Plugins de caché"
        }), ": Ironía máxima, guardan datos de “optimización”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Plugins de analytics"
        }), ": Estadísticas que ya nadie consulta"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "RSS Feeds"
        }), ": Caché de feeds externos"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Plugins desinstalados"
        }), ": Dejan su basura eternamente"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "la-cascada-del-desastre-cómo-850k-filas-te-destruyen",
      children: "La cascada del desastre: Cómo 850k filas te destruyen"
    }), "\n", createVNode(_components.h3, {
      id: "1-consulta-inicial-cada-página-cargada",
      children: "1. Consulta inicial (cada página cargada):"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SELECT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name, option_value "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " autoload "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'yes'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Con una tabla normal: ", createVNode(_components.strong, {
        children: "0.003 segundos"
      }), createVNode(_components.br, {}), "\nCon 850k filas: ", createVNode(_components.strong, {
        children: "2.8 segundos"
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2.8 segundos solo para cargar las opciones. Antes de hacer cualquier otra cosa."
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-impacto-en-memoria",
      children: "2. Impacto en memoria:"
    }), "\n", createVNode(_components.p, {
      children: ["Una tabla ", createVNode(_components.code, {
        children: "wp_options"
      }), " saludable ocupa ~3-5 MB en memoria.", createVNode(_components.br, {}), "\nNuestra tabla monstruo: ", createVNode(_components.strong, {
        children: "487 MB cargados en cada request"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Con un límite de memoria PHP de 512 MB, estás consumiendo el 95% solo en opciones antes de ejecutar tu theme o plugins."
    }), "\n", createVNode(_components.h3, {
      id: "3-impacto-en-io-del-disco",
      children: "3. Impacto en I/O del disco:"
    }), "\n", createVNode(_components.p, {
      children: "Cada consulta lee 1.8 GB de datos de disco, aunque solo necesite 2 MB. El resto son transients expirados que nadie pidió pero que MySQL debe leer para filtrar."
    }), "\n", createVNode(_components.h3, {
      id: "4-fragmentación-de-índices",
      children: "4. Fragmentación de índices:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "SHOW "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " STATUS"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " Name"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'wp_options'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "\\G"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "# Fragmentación: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "87"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "%"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "# Data_free: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "204"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " MB (espacio desperdiciado)"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Tu base de datos está leyendo aire."
    }), "\n", createVNode(_components.h2, {
      id: "el-análisis-forense-qué-encontramos",
      children: "El análisis forense: Qué encontramos"
    }), "\n", createVNode(_components.p, {
      children: "Después de investigar los 847,392 registros:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-- Transients expirados hace más de 1 año"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SELECT"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " COUNT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_transient_timeout_%'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "AND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_value "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " UNIX_TIMESTAMP(DATE_SUB("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "NOW"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(), INTERVAL "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " YEAR"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "# Resultado: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "412"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "847"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " transients zombie"
          })]
        })]
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-- Transients de plugins desinstalados hace 2 años"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SELECT"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " COUNT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '%_transient_%revslider%'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "# Resultado: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "89"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "234"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (el plugin fue borrado en "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2022"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-- Sesiones de WooCommerce de usuarios que nunca compraron"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SELECT"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " COUNT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_wc_session_%'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "# Resultado: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "156"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "893"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " sesiones fantasma"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "El 94.7% de la tabla era basura pura."
      })
    }), "\n", createVNode(_components.h2, {
      id: "la-limpieza-procedimiento-quirúrgico",
      children: "La limpieza: Procedimiento quirúrgico"
    }), "\n", createVNode(_components.h3, {
      id: "️-advertencia-crítica",
      children: "⚠️ ADVERTENCIA CRÍTICA"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "NUNCA hagas esto sin backup completo de la base de datos."
      }), createVNode(_components.br, {}), "\nUn error aquí puede destruir tu sitio irreversiblemente."]
    }), "\n", createVNode(_components.h3, {
      id: "paso-1-backup",
      children: "Paso 1: Backup"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " db"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " export"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " backup-antes-limpieza-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "date"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " +%Y%m%d-%H%M%S"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: ".sql"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "paso-2-análisis-pre-limpieza",
      children: "Paso 2: Análisis pre-limpieza"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-- Ver tamaño actual"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SELECT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    ROUND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(((data_length "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " index_length) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1024"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1024"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "), "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "AS"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"Size (MB)\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    table_rows "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "AS"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"Rows\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " information_schema"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "TABLES"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " table_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"wp_options\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-- Contar transients expirados"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SELECT"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " COUNT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '%_transient_%'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "AND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    (option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '%_transient_timeout_%'"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " AND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_value "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " UNIX_TIMESTAMP())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    OR"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    (option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '%_transient_%'"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " AND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "NOT"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '%_transient_timeout_%'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "paso-3-limpieza-con-wp-cli-método-recomendado",
      children: "Paso 3: Limpieza con WP-CLI (método recomendado)"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Eliminar transients expirados"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " transient"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " delete"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --expired"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Eliminar TODOS los transients (se regenerarán los necesarios)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " transient"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " delete"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --all"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Limpiar opciones huérfanas"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " db"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " query"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"DELETE FROM wp_options WHERE option_name LIKE '%_transient_%'\""
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "paso-4-limpieza-sql-directa-método-avanzado",
      children: "Paso 4: Limpieza SQL directa (método avanzado)"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-- Eliminar timeouts de transients expirados"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "DELETE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_transient_timeout_%'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "AND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_value "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " UNIX_TIMESTAMP();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-- Eliminar los transients correspondientes"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "DELETE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_transient_%'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "AND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "NOT"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_transient_timeout_%'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "AND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "NOT"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " IN"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    SELECT"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " REPLACE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(option_name, "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'_transient_timeout_'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'_transient_'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_transient_timeout_%'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-- Limpiar sesiones de WooCommerce antiguas (>1 semana)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "DELETE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_wc_session_%'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "AND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "NOT"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_wc_session_expires_%'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "-- Eliminar autoloads innecesarios grandes (>100KB)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "UPDATE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SET"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " autoload "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'no'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " autoload "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'yes'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "AND"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " LENGTH"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(option_value) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 102400"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "AND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "NOT"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " IN"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'active_plugins'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'siteurl'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'home'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "paso-5-optimizar-la-tabla",
      children: "Paso 5: Optimizar la tabla"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "OPTIMIZE "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "TABLE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options;"
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "los-resultados-antes-y-después",
      children: "Los resultados: Antes y después"
    }), "\n", createVNode(_components.h3, {
      id: "antes-de-la-limpieza",
      children: "Antes de la limpieza:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Filas:"
        }), " 847,392"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tamaño:"
        }), " 1,847 MB"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Autoload size:"
        }), " 487 MB"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "TTFB:"
        }), " 2.8-3.4s"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Admin load time:"
        }), " 5.2s"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Consultas por página:"
        }), " 247 queries"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Memoria PHP usada:"
        }), " 498 MB"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "después-de-la-limpieza",
      children: "Después de la limpieza:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Filas:"
        }), " 1,247"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Tamaño:"
        }), " 4.2 MB"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Autoload size:"
        }), " 2.1 MB"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "TTFB:"
        }), " 0.18-0.24s ", createVNode(_components.strong, {
          children: "(mejora del 92%)"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Admin load time:"
        }), " 0.8s ", createVNode(_components.strong, {
          children: "(mejora del 85%)"
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Consultas por página:"
        }), " 89 queries"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Memoria PHP usada:"
        }), " 67 MB"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "PageSpeed score:"
      }), " De 45 a 87 en mobile. Sin cambiar una línea de código."]
    }), "\n", createVNode(_components.h2, {
      id: "prevención-el-mantenimiento-que-tu-agencia-no-hace",
      children: "Prevención: El mantenimiento que tu agencia no hace"
    }), "\n", createVNode(_components.h3, {
      id: "1-monitoreo-automatizado",
      children: "1. Monitoreo automatizado"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# Script para monitorear wp_options (añadir a cron)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "#!/bin/bash"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "COUNT"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " db"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " query"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"SELECT COUNT(*) as count FROM wp_options\""
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --skip-column-names"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "SIZE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "$("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " db"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " query"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"SELECT ROUND(((data_length + index_length) / 1024 / 1024), 2) FROM information_schema.TABLES WHERE table_name = 'wp_options'\""
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --skip-column-names"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " [ $COUNT "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-gt"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 5000"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ]; "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "then"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    echo"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"ALERTA: wp_options tiene "
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "$COUNT"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " filas (SIZE: ${"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "SIZE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "}MB)\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # Enviar notificación"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "fi"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-limpieza-programada",
      children: "2. Limpieza programada"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "php",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Añadir a functions.php o mu-plugin"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add_action"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'wp_scheduled_delete'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    global"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $wpdb;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Limpiar transients expirados semanalmente"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    $wpdb"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "query"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "DELETE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $wpdb"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_transient_timeout_%' "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        AND"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " option_value "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " UNIX_TIMESTAMP()\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Limpiar sesiones WC antiguas"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    $wpdb"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "query"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "DELETE"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $wpdb"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "options"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_wc_session_%' "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        AND"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "NOT"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_wc_session_expires_%'\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "});"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "3-configurar-transients-externos",
      children: "3. Configurar transients externos"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "php",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// wp-config.php - Usar Redis/Memcached para transients"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "define"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'WP_CACHE'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Los transients se guardarán en Redis, no en la BD"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-auditoría-trimestral",
      children: "4. Auditoría trimestral"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Revisar tamaño de wp_options mensualmente"
      }), "\n", createVNode(_components.li, {
        children: "Limpieza profunda cada 3 meses"
      }), "\n", createVNode(_components.li, {
        children: "Desactivar plugins que abusan de transients"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "los-culpables-habituales-plugins-que-destrozan-wp_options",
      children: "Los culpables habituales: Plugins que destrozan wp_options"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Hall of Shame:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Slider Revolution"
        }), ": Guarda cada slide como transient"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Visual Composer"
        }), ": Cache de elementos desmesurado"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "WPML"
        }), ": Traducciones en transients sin expiración"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rank Math/Yoast SEO"
        }), ": Análisis que nunca se borran"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Social sharing plugins"
        }), ": Contadores de shares obsoletos"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Broken Link Checker"
        }), ": Resultados de checks eternos"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Cómo identificar al culpable:"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sql",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "SELECT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    SUBSTRING_INDEX(option_name, "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'_'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " plugin_prefix,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    COUNT"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " total,"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "    ROUND"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "SUM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LENGTH"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(option_value))"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1024"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1024"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " size_mb"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " wp_options "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "WHERE"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " option_name "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIKE"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '_transient_%'"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "GROUP BY"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " plugin_prefix"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "ORDER BY"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " total "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "DESC"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "LIMIT"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 20"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "la-pregunta-incómoda-para-tu-actual-proveedor",
      children: "La pregunta incómoda para tu actual proveedor"
    }), "\n", createVNode(_components.p, {
      children: ["Si pagas por mantenimiento WordPress y nunca han mencionado ", createVNode(_components.code, {
        children: "wp_options"
      }), " o transients, hay dos posibilidades:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "No saben que existe el problema"
      }), "\n", createVNode(_components.li, {
        children: "Saben pero no lo resuelven porque “no está en el checklist”"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Ninguna de las dos es buena señal."
    }), "\n", createVNode(_components.h2, {
      id: "el-costo-real-de-la-ignorancia",
      children: "El costo real de la ignorancia"
    }), "\n", createVNode(_components.p, {
      children: "Calculemos el impacto económico de ese sitio con 850k filas:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Servidor sobredimensionado:"
        }), " €180/mes que no necesitarías"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "CDN con tráfico extra:"
        }), " €45/mes compensando la lentitud"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Conversiones perdidas:"
        }), " 2.7% menos por cada segundo extra (Google)\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Con 10,000 visitas/mes y conversión del 3% = 300 conversiones"
          }), "\n", createVNode(_components.li, {
            children: "Pérdida de 2.8s × 2.7% = 7.56% menos conversiones"
          }), "\n", createVNode(_components.li, {
            children: "23 conversiones perdidas/mes"
          }), "\n", createVNode(_components.li, {
            children: ["A €50 ticket medio = ", createVNode(_components.strong, {
              children: "€1,150/mes en ventas perdidas"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Total anual: €14,700 tirados por una tabla sucia."
      })
    }), "\n", createVNode(_components.p, {
      children: "Y la limpieza toma 30 minutos."
    }), "\n", createVNode(_components.h2, {
      id: "checklist-técnico-tu-web-está-enferma",
      children: "Checklist técnico: ¿Tu web está enferma?"
    }), "\n", createVNode(_components.p, {
      children: "Ejecuta estos comandos:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 1. Contar filas en wp_options"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " db"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " query"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"SELECT COUNT(*) FROM wp_options\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 🚨 Si >5,000: Problema moderado"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 🚨 Si >20,000: Problema grave"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 🚨 Si >100,000: Urgencia crítica"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 2. Tamaño de wp_options"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " db"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " query"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"SELECT ROUND(((data_length + index_length) / 1024 / 1024), 2) as 'Size MB' FROM information_schema.TABLES WHERE table_name = 'wp_options'\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 🚨 Si >50 MB: Problema grave"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 🚨 Si >200 MB: Crítico"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 3. Tamaño de autoload"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " db"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " query"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"SELECT ROUND(SUM(LENGTH(option_value))/1024/1024, 2) as 'Autoload MB' FROM wp_options WHERE autoload='yes'\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 🚨 Si >3 MB: Revisar"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 🚨 Si >10 MB: Problema serio"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 🚨 Si >50 MB: Desastre inminente"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 4. Contar transients expirados"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "wp"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " transient"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " list"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " --expired"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " |"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " wc"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " -l"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "# 🚨 Si >1,000: Necesitas limpieza YA"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "la-verdad-que-nadie-te-dice",
      children: "La verdad que nadie te dice"
    }), "\n", createVNode(_components.p, {
      children: "El 80% de las webs “lentas inexplicables” que diagnosticamos tienen este problema."
    }), "\n", createVNode(_components.p, {
      children: "No es tu hosting. No es tu tema. No es que “WordPress sea lento”."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Es basura acumulada que nadie limpia porque nadie la ve."
      })
    }), "\n", createVNode(_components.p, {
      children: "Es como tener un coche de alta gama conduciendo con el freno de mano puesto. El coche es bueno, el conductor es competente, pero algo invisible está saboteando el rendimiento."
    }), "\n", createVNode(_components.h2, {
      id: "conclusión-el-mantenimiento-invisible",
      children: "Conclusión: El mantenimiento invisible"
    }), "\n", createVNode(_components.p, {
      children: "La optimización web no es solo minificar CSS y comprimir imágenes. Eso es lo visible, lo marketeable, lo que todos ofrecen."
    }), "\n", createVNode(_components.p, {
      children: "El verdadero mantenimiento profesional ocurre donde nadie mira: en las tripas de la base de datos, en los procesos cron que se acumulan, en las tablas que crecen sin control."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Una web optimizada no se construye. Se mantiene."
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "quieres-saber-si-tu-web-tiene-este-problema",
      children: "¿Quieres saber si tu web tiene este problema?"
    }), "\n", createVNode(_components.p, {
      children: "Te hacemos una auditoría técnica gratuita de tu base de datos. Te diremos exactamente:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Cuántas filas tiene tu wp_options"
      }), "\n", createVNode(_components.li, {
        children: "Cuánto espacio ocupa tu autoload"
      }), "\n", createVNode(_components.li, {
        children: "Qué plugins son los culpables"
      }), "\n", createVNode(_components.li, {
        children: "Cuánto tiempo de carga estás perdiendo"
      }), "\n", createVNode(_components.li, {
        children: "Qué mejoraría si lo limpiáramos"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Sin letra pequeña. Sin compromiso. Solo datos técnicos reales."
      })
    }), "\n", createVNode(_components.p, {
      children: "Porque el primer paso para solucionar un problema es saber que existe."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/La%20Basura%20Oculta%20en%20tu%20Base%20de%20Datos%20y%20por%20qu%C3%A9%20ralentizan%20tu%20web.mdx";
const file = "C:/Users/Joaquín/Documents/frameword-astro/src/content/blog/La Basura Oculta en tu Base de Datos y por qué ralentizan tu web.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Joaquín/Documents/frameword-astro/src/content/blog/La Basura Oculta en tu Base de Datos y por qué ralentizan tu web.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
