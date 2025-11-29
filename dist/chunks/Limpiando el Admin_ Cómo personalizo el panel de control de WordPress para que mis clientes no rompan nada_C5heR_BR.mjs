import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DHUdpo0D.mjs';
import 'clsx';

const frontmatter = {
  "title": "Limpiando el Admin: Cómo personalizo el panel de control de WordPress para que mis clientes no rompan nada",
  "description": "Esta escena se repite constantemente. No es culpa del cliente. Es culpa nuestra por entregarles un panel de control de avión cuando solo necesitan un volante.",
  "date": "2025-11-26",
  "author": "ximo",
  "image": "https://res.cloudinary.com/djjiagkho/image/upload/v1764116778/Limpiando_el_Admin_dvhjxg.jpg",
  "category": "Limpiando el Admin"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "la-llamada-que-recibimos-cada-semana",
    "text": "La llamada que recibimos cada semana"
  }, {
    "depth": 2,
    "slug": "el-problema-wordpress-admin-por-defecto",
    "text": "El problema: WordPress admin por defecto"
  }, {
    "depth": 3,
    "slug": "lo-que-ve-tu-cliente-cuando-entra-al-admin",
    "text": "Lo que ve tu cliente cuando entra al admin"
  }, {
    "depth": 3,
    "slug": "lo-que-realmente-necesita-tu-cliente",
    "text": "Lo que realmente necesita tu cliente"
  }, {
    "depth": 2,
    "slug": "la-solución-admin-limpio-y-seguro",
    "text": "La solución: Admin limpio y seguro"
  }, {
    "depth": 3,
    "slug": "principio-fundamental-lo-que-no-ven-no-pueden-romper",
    "text": "Principio fundamental: “Lo que no ven, no pueden romper”"
  }, {
    "depth": 2,
    "slug": "caso-real-antes-y-después",
    "text": "Caso real: Antes y después"
  }, {
    "depth": 3,
    "slug": "cliente-bufete-de-abogados-4-personas-gestionando-contenido",
    "text": "Cliente: Bufete de abogados (4 personas gestionando contenido)"
  }, {
    "depth": 2,
    "slug": "las-técnicas-de-personalización-del-admin",
    "text": "Las técnicas de personalización del admin"
  }, {
    "depth": 3,
    "slug": "1-ocultar-elementos-del-menú-según-rol",
    "text": "1. Ocultar elementos del menú según rol"
  }, {
    "depth": 3,
    "slug": "2-renombrar-elementos-del-menú-más-claro",
    "text": "2. Renombrar elementos del menú (más claro)"
  }, {
    "depth": 3,
    "slug": "3-simplificar-el-dashboard",
    "text": "3. Simplificar el dashboard"
  }, {
    "depth": 3,
    "slug": "4-añadir-widget-personalizado-de-bienvenida",
    "text": "4. Añadir widget personalizado de bienvenida"
  }, {
    "depth": 3,
    "slug": "5-ocultar-elementos-de-la-barra-superior",
    "text": "5. Ocultar elementos de la barra superior"
  }, {
    "depth": 3,
    "slug": "6-simplificar-el-editor-de-entradaspáginas",
    "text": "6. Simplificar el editor de entradas/páginas"
  }, {
    "depth": 3,
    "slug": "7-deshabilitar-editor-de-temas-y-plugins",
    "text": "7. Deshabilitar editor de temas y plugins"
  }, {
    "depth": 3,
    "slug": "8-personalizar-mensajes-del-footer",
    "text": "8. Personalizar mensajes del footer"
  }, {
    "depth": 3,
    "slug": "9-ocultar-notificaciones-y-avisos-innecesarios",
    "text": "9. Ocultar notificaciones y avisos innecesarios"
  }, {
    "depth": 3,
    "slug": "10-forzar-editor-clásico-gutenberg-puede-ser-confuso",
    "text": "10. Forzar editor clásico (Gutenberg puede ser confuso)"
  }, {
    "depth": 2,
    "slug": "configuración-por-roles-diferentes-clientes-diferentes-necesidades",
    "text": "Configuración por roles: Diferentes clientes, diferentes necesidades"
  }, {
    "depth": 3,
    "slug": "estrategia-de-roles",
    "text": "Estrategia de roles"
  }, {
    "depth": 3,
    "slug": "plugin-recomendado-para-gestión-de-roles-avanzada",
    "text": "Plugin recomendado para gestión de roles avanzada"
  }, {
    "depth": 2,
    "slug": "admin-personalizado-plantillas-listas-por-tipo-de-cliente",
    "text": "Admin personalizado: Plantillas listas por tipo de cliente"
  }, {
    "depth": 3,
    "slug": "plantilla-1-blog-corporativo-simple",
    "text": "Plantilla 1: Blog corporativo simple"
  }, {
    "depth": 3,
    "slug": "plantilla-2-e-commerce-woocommerce",
    "text": "Plantilla 2: E-commerce (WooCommerce)"
  }, {
    "depth": 3,
    "slug": "plantilla-3-directoriocatálogo-con-cpt",
    "text": "Plantilla 3: Directorio/Catálogo con CPT"
  }, {
    "depth": 3,
    "slug": "plantilla-4-sitio-multiautor-revista-blog-colectivo",
    "text": "Plantilla 4: Sitio multiautor (revista, blog colectivo)"
  }, {
    "depth": 2,
    "slug": "el-flujo-de-onboarding-perfecto",
    "text": "El flujo de onboarding perfecto"
  }, {
    "depth": 3,
    "slug": "1-entrega-inicial-antes-de-dar-acceso",
    "text": "1. Entrega inicial (antes de dar acceso)"
  }, {
    "depth": 3,
    "slug": "2-primeros-días-soporte-activo",
    "text": "2. Primeros días (soporte activo)"
  }, {
    "depth": 3,
    "slug": "3-material-de-referencia",
    "text": "3. Material de referencia"
  }, {
    "depth": 2,
    "slug": "los-errores-comunes-al-personalizar-admin",
    "text": "Los errores comunes al personalizar admin"
  }, {
    "depth": 3,
    "slug": "-error-1-ocultar-demasiado",
    "text": "❌ Error 1: Ocultar demasiado"
  }, {
    "depth": 3,
    "slug": "-error-2-no-comunicar-los-cambios",
    "text": "❌ Error 2: No comunicar los cambios"
  }, {
    "depth": 3,
    "slug": "-error-3-usar-lenguaje-técnico-en-renombrados",
    "text": "❌ Error 3: Usar lenguaje técnico en renombrados"
  }, {
    "depth": 3,
    "slug": "-error-4-no-dar-vía-de-escape",
    "text": "❌ Error 4: No dar vía de escape"
  }, {
    "depth": 3,
    "slug": "-error-5-personalizar-demasiado-pronto",
    "text": "❌ Error 5: Personalizar demasiado pronto"
  }, {
    "depth": 2,
    "slug": "plugins-que-ayudan-con-precaución",
    "text": "Plugins que ayudan (con precaución)"
  }, {
    "depth": 3,
    "slug": "white-label-cms-gratuito",
    "text": "White Label CMS (gratuito)"
  }, {
    "depth": 3,
    "slug": "admin-menu-editor-gratuito",
    "text": "Admin Menu Editor (gratuito)"
  }, {
    "depth": 3,
    "slug": "adminimize-gratuito",
    "text": "Adminimize (gratuito)"
  }, {
    "depth": 3,
    "slug": "️-advertencia-sobre-plugins-de-personalización",
    "text": "⚠️ Advertencia sobre plugins de personalización"
  }, {
    "depth": 2,
    "slug": "el-código-en-producción-cómo-implementarlo",
    "text": "El código en producción: Cómo implementarlo"
  }, {
    "depth": 3,
    "slug": "opción-1-must-use-plugin-recomendado",
    "text": "Opción 1: Must-Use Plugin (recomendado)"
  }, {
    "depth": 3,
    "slug": "opción-2-plugin-personalizado-regular",
    "text": "Opción 2: Plugin personalizado regular"
  }, {
    "depth": 3,
    "slug": "opción-3-functionsphp-del-child-theme",
    "text": "Opción 3: Functions.php del child theme"
  }, {
    "depth": 2,
    "slug": "el-coste-vs-beneficio-real",
    "text": "El coste vs beneficio real"
  }, {
    "depth": 3,
    "slug": "inversión-inicial",
    "text": "Inversión inicial"
  }, {
    "depth": 3,
    "slug": "retorno-de-inversión",
    "text": "Retorno de inversión"
  }, {
    "depth": 2,
    "slug": "checklist-de-entrega-admin-listo-para-cliente",
    "text": "Checklist de entrega: Admin listo para cliente"
  }, {
    "depth": 2,
    "slug": "conclusión-admin-personalizado--clientes-felices",
    "text": "Conclusión: Admin personalizado = Clientes felices"
  }, {
    "depth": 3,
    "slug": "entregas-proyectos-wordpress-a-clientes",
    "text": "¿Entregas proyectos WordPress a clientes?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
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
      id: "la-llamada-que-recibimos-cada-semana",
      children: "La llamada que recibimos cada semana"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Cliente (pánico):"
      }), " “¡Ayuda! He tocado algo en WordPress y ahora la web no se ve bien. Creo que he borrado algo importante.”"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Nosotros:"
      }), " “¿Qué has intentado hacer?”"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Cliente:"
      }), " “Solo quería cambiar el texto de la página de inicio… pero había tantas opciones que no sabía cuál era. He tocado ‘Apariencia’ > ‘Personalizar’ > ‘CSS adicional’ y… no sé qué he hecho.”"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Nosotros:"
      }), " (suspiro interno) “Tranquilo, lo arreglamos. Dame 10 minutos.”"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["Esta escena se repite constantemente. No es culpa del cliente. ", createVNode(_components.strong, {
        children: "Es culpa nuestra por entregarles un panel de control de avión cuando solo necesitan un volante."
      })]
    }), "\n", createVNode(_components.p, {
      children: "WordPress, por defecto, muestra absolutamente TODO a todos los usuarios. El resultado: clientes abrumados, llamadas de emergencia, y webs rotas."
    }), "\n", createVNode(_components.h2, {
      id: "el-problema-wordpress-admin-por-defecto",
      children: "El problema: WordPress admin por defecto"
    }), "\n", createVNode(_components.h3, {
      id: "lo-que-ve-tu-cliente-cuando-entra-al-admin",
      children: "Lo que ve tu cliente cuando entra al admin"
    }), "\n", createVNode(_components.p, {
      children: "Imagina que le das las llaves de un coche a alguien que solo necesita conducir al supermercado, pero el coche tiene:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "47 botones en el salpicadero"
      }), "\n", createVNode(_components.li, {
        children: "12 palancas que no sabe para qué sirven"
      }), "\n", createVNode(_components.li, {
        children: "3 volantes (por si acaso)"
      }), "\n", createVNode(_components.li, {
        children: "Indicadores técnicos del motor"
      }), "\n", createVNode(_components.li, {
        children: "Botón de autodestrucción (exagerando… o no)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Eso es WordPress admin por defecto:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Menú lateral:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Dashboard"
      }), "\n", createVNode(_components.li, {
        children: "Entradas"
      }), "\n", createVNode(_components.li, {
        children: "Medios"
      }), "\n", createVNode(_components.li, {
        children: "Páginas"
      }), "\n", createVNode(_components.li, {
        children: "Comentarios"
      }), "\n", createVNode(_components.li, {
        children: ["Apariencia (¡peligro!)\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Temas"
          }), "\n", createVNode(_components.li, {
            children: "Personalizar"
          }), "\n", createVNode(_components.li, {
            children: "Widgets"
          }), "\n", createVNode(_components.li, {
            children: "Menús"
          }), "\n", createVNode(_components.li, {
            children: "Editor de temas (¡PELIGRO MÁXIMO!)"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Plugins (¡peligro!)"
      }), "\n", createVNode(_components.li, {
        children: "Usuarios"
      }), "\n", createVNode(_components.li, {
        children: "Herramientas"
      }), "\n", createVNode(_components.li, {
        children: ["Ajustes (¡peligro!)\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Generales"
          }), "\n", createVNode(_components.li, {
            children: "Escritura"
          }), "\n", createVNode(_components.li, {
            children: "Lectura"
          }), "\n", createVNode(_components.li, {
            children: "Comentarios"
          }), "\n", createVNode(_components.li, {
            children: "Medios"
          }), "\n", createVNode(_components.li, {
            children: "Enlaces permanentes (cambiar esto = desastre)"
          }), "\n", createVNode(_components.li, {
            children: "Privacidad"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Barra superior:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Logo WordPress"
      }), "\n", createVNode(_components.li, {
        children: "Nombre del sitio"
      }), "\n", createVNode(_components.li, {
        children: "Comentarios"
      }), "\n", createVNode(_components.li, {
        children: "Nuevo (entrada, media, página, usuario)"
      }), "\n", createVNode(_components.li, {
        children: "Tu perfil"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Dashboard widgets:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Actividad"
      }), "\n", createVNode(_components.li, {
        children: "Borrador rápido"
      }), "\n", createVNode(_components.li, {
        children: "Eventos y noticias de WordPress"
      }), "\n", createVNode(_components.li, {
        children: "Salud del sitio (que alarma sin motivo)"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "lo-que-realmente-necesita-tu-cliente",
      children: "Lo que realmente necesita tu cliente"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Para un cliente que gestiona un blog corporativo:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Añadir/editar entradas"
      }), "\n", createVNode(_components.li, {
        children: "Subir imágenes"
      }), "\n", createVNode(_components.li, {
        children: "Ver comentarios"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Eso es todo. Tres cosas."
      })
    }), "\n", createVNode(_components.p, {
      children: "¿Por qué le mostramos 47?"
    }), "\n", createVNode(_components.h2, {
      id: "la-solución-admin-limpio-y-seguro",
      children: "La solución: Admin limpio y seguro"
    }), "\n", createVNode(_components.h3, {
      id: "principio-fundamental-lo-que-no-ven-no-pueden-romper",
      children: "Principio fundamental: “Lo que no ven, no pueden romper”"
    }), "\n", createVNode(_components.p, {
      children: "No se trata de menospreciar a los clientes. Se trata de:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Reducir fricción:"
        }), " Menos opciones = menos confusión = más productividad"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Prevenir errores:"
        }), " No pueden desactivar plugins críticos si no ven la sección"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Proteger tu trabajo:"
        }), " No pueden cambiar el CSS que te costó horas perfeccionar"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Mejorar su experiencia:"
        }), " Se sienten competentes y seguros"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "caso-real-antes-y-después",
      children: "Caso real: Antes y después"
    }), "\n", createVNode(_components.h3, {
      id: "cliente-bufete-de-abogados-4-personas-gestionando-contenido",
      children: "Cliente: Bufete de abogados (4 personas gestionando contenido)"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Antes de personalizar admin:"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Problemas en 6 meses:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "12 llamadas de “he roto algo”"
      }), "\n", createVNode(_components.li, {
        children: "3 veces cambiaron los enlaces permanentes (404s masivos)"
      }), "\n", createVNode(_components.li, {
        children: "2 veces desactivaron plugins esenciales"
      }), "\n", createVNode(_components.li, {
        children: "1 vez cambiaron el tema (pánico total)"
      }), "\n", createVNode(_components.li, {
        children: "5 veces modificaron CSS sin querer"
      }), "\n", createVNode(_components.li, {
        children: "Infinitas frustraciones por “no encuentro dónde cambiar X”"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Tiempo perdido:"
      }), " ~40 horas de soporte"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Después de personalizar admin:"
      })
    }), "\n", createVNode(_components.p, {
      children: "Lo que ven ahora:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "MENÚ LATERAL:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Dashboard (simplificado)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Artículos del Blog"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Miembros del Equipo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Casos de Éxito"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Galería de Imágenes"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── Mi Perfil"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Problemas en 12 meses posteriores:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1 llamada (pregunta legítima de funcionalidad)"
      }), "\n", createVNode(_components.li, {
        children: "0 emergencias"
      }), "\n", createVNode(_components.li, {
        children: "0 webs rotas"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Tiempo ahorrado:"
      }), " ~38 horas/año × €80/hora = ", createVNode(_components.strong, {
        children: "€3,040/año ahorrados"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "las-técnicas-de-personalización-del-admin",
      children: "Las técnicas de personalización del admin"
    }), "\n", createVNode(_components.h3, {
      id: "1-ocultar-elementos-del-menú-según-rol",
      children: "1. Ocultar elementos del menú según rol"
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
            children: "// functions.php o mu-plugin"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " limpiar_menu_admin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Solo para editores y autores (no administradores)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "current_user_can"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'manage_options'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Ocultar elementos peligrosos"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        remove_menu_page"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'themes.php'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");              "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Apariencia"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        remove_menu_page"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'plugins.php'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");             "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Plugins"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        remove_menu_page"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'tools.php'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");               "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Herramientas"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        remove_menu_page"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'options-general.php'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");     "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Ajustes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Ocultar submenús específicos de Apariencia (si decides dejarlo visible)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        remove_submenu_page"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'themes.php'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'themes.php'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");        "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Temas"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        remove_submenu_page"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'themes.php'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'theme-editor.php'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");  "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Editor de temas (MUY peligroso)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        remove_submenu_page"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'themes.php'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'customize.php'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");     "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Personalizador"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
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
            children: "'admin_menu'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'limpiar_menu_admin'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "999"
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
        children: "Resultado:"
      }), " El cliente ve solo Entradas, Páginas, Medios, Comentarios. Nada más."]
    }), "\n", createVNode(_components.h3, {
      id: "2-renombrar-elementos-del-menú-más-claro",
      children: "2. Renombrar elementos del menú (más claro)"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " renombrar_menu_items"
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
            children: " $menu, $submenu;"
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
            children: "    // Cambiar \"Entradas\" por \"Artículos del Blog\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    $menu["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'Artículos del Blog'"
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
            children: "    // Cambiar \"Medios\" por \"Imágenes y Archivos\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    $menu["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "] "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'Imágenes y Archivos'"
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
            children: "    // Si tienes Custom Post Types, hazlos más descriptivos"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // \"portfolio\" → \"Proyectos Realizados\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // \"team\" → \"Nuestro Equipo\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
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
            children: "'admin_menu'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'renombrar_menu_items'"
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
        children: "Resultado:"
      }), " Lenguaje que el cliente entiende, no jerga técnica."]
    }), "\n", createVNode(_components.h3, {
      id: "3-simplificar-el-dashboard",
      children: "3. Simplificar el dashboard"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " limpiar_dashboard_widgets"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Remover widgets innecesarios"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard_primary'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'side'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");          "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Blog WordPress"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard_secondary'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'side'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");        "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Noticias WordPress"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard_quick_press'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'side'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");      "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Borrador rápido"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard_recent_drafts'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'side'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");    "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Borradores recientes"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard_activity'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'normal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");       "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Actividad"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard_right_now'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'normal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");      "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// De un vistazo"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard_site_health'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'dashboard'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'normal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");    "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Salud del sitio"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
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
            children: "'wp_dashboard_setup'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'limpiar_dashboard_widgets'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-añadir-widget-personalizado-de-bienvenida",
      children: "4. Añadir widget personalizado de bienvenida"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " widget_bienvenida_personalizado"
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
              color: "#B392F0"
            },
            children: "    wp_add_dashboard_widget"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        'bienvenida_cliente'"
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
              color: "#9ECBFF"
            },
            children: "        'Bienvenido a tu Panel de Gestión'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "        'contenido_widget_bienvenida'"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
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
            children: "'wp_dashboard_setup'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'widget_bienvenida_personalizado'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " contenido_widget_bienvenida"
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
              color: "#E1E4E8"
            },
            children: "    $user "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " wp_get_current_user"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    ?>"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " style"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"padding: 20px;\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "h2"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Hola"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<?"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "php"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " echo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " $user"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "first_name; "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?>!</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "h2"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "h3"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Accesos"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " rápidos"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "h3"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " style"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"font-size: 16px; line-height: 2;\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "📝"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"<?php echo admin_url('post-new.php'); ?>\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Escribir"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " nuevo"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " artículo"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "📄"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"<?php echo admin_url('edit.php'); ?>\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Ver"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " todos"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " los"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " artículos"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "🖼️"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"<?php echo admin_url('upload.php'); ?>\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Subir"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " imágenes"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        </"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "h3"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "¿Necesitas"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " ayuda"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "h3"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "📞"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Llámanos"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 900"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 123"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 456"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "br"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        📧"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Email"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " soporte"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "tuagencia"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "com"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "h3"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "Tutoriales"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "h3"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "><"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"URL_TUTORIAL_1\""
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " target"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"_blank\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "📹"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Cómo"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " añadir"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " un"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " artículo"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "><"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"URL_TUTORIAL_2\""
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " target"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"_blank\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "📹"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Cómo"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " subir"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " imágenes"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "><"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"URL_MANUAL_PDF\""
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " target"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"_blank\""
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "📄"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Manual"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " completo"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "PDF"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "        </"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    <?"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "php"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Resultado:"
      }), " Dashboard útil con información relevante, no ruido."]
    }), "\n", createVNode(_components.h3, {
      id: "5-ocultar-elementos-de-la-barra-superior",
      children: "5. Ocultar elementos de la barra superior"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " limpiar_admin_bar"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "($wp_admin_bar) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Ocultar logo WordPress y menú asociado"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    $wp_admin_bar"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "remove_node"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'wp-logo'"
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
            children: "    // Ocultar comentarios (si no se usan)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    $wp_admin_bar"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "remove_node"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'comments'"
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
            children: "    // Ocultar \"Nuevo\" (evita crear usuarios, etc.)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    $wp_admin_bar"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "remove_node"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'new-content'"
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
            children: "    // Ocultar \"Personalizar\" (peligroso)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    $wp_admin_bar"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "remove_node"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'customize'"
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
            children: "    // Ocultar actualizaciones (que alarman al cliente)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    $wp_admin_bar"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "remove_node"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'updates'"
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
            children: "}"
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
            children: "'admin_bar_menu'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'limpiar_admin_bar'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "999"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "6-simplificar-el-editor-de-entradaspáginas",
      children: "6. Simplificar el editor de entradas/páginas"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " limpiar_editor_pantalla"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Remover metaboxes innecesarias o confusas"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'postcustom'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'post'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'normal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");        "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Campos personalizados (avanzado)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'trackbacksdiv'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'post'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'normal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");     "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Trackbacks"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'commentstatusdiv'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'post'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'normal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");  "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Comentarios (si no los usas)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'slugdiv'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'post'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'normal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");           "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Slug (confuso para clientes)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'authordiv'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'post'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'normal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");         "
          }), createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Autor (si solo hay uno)"
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
            children: "    // Lo mismo para páginas"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'postcustom'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'page'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'normal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'commentstatusdiv'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'page'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'normal'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    remove_meta_box"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'slugdiv'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'page'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'normal'"
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
            children: "}"
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
            children: "'admin_menu'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'limpiar_editor_pantalla'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "7-deshabilitar-editor-de-temas-y-plugins",
      children: "7. Deshabilitar editor de temas y plugins"
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
            children: "// wp-config.php (nivel más seguro, no se puede deshacer desde admin)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Deshabilitar editor de archivos (temas y plugins)"
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
            children: "'DISALLOW_FILE_EDIT'"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Opcional: Deshabilitar instalación/actualización de plugins y temas"
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
            children: "'DISALLOW_FILE_MODS'"
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
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Resultado crítico:"
      }), " Cliente no puede:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Editar theme.php y romper toda la web"
      }), "\n", createVNode(_components.li, {
        children: "Modificar código de plugins"
      }), "\n", createVNode(_components.li, {
        children: "Instalar plugins/themes sospechosos"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "8-personalizar-mensajes-del-footer",
      children: "8. Personalizar mensajes del footer"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " footer_admin_personalizado"
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
              color: "#79B8FF"
            },
            children: "    echo"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '<span id=\"footer-thankyou\">Panel gestionado por <a href=\"https://tuagencia.com\" target=\"_blank\">Tu Agencia</a> | ¿Necesitas ayuda? <a href=\"mailto:soporte@tuagencia.com\">Contáctanos</a></span>'"
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
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add_filter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'admin_footer_text'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'footer_admin_personalizado'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " version_admin_personalizada"
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
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'Versión 2.1 | <a href=\"URL_MANUAL\">Manual de usuario</a>'"
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
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add_filter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'update_footer'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'version_admin_personalizada'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "999"
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
        children: "Resultado:"
      }), " Branding de agencia + recordatorio de que estás disponible."]
    }), "\n", createVNode(_components.h3, {
      id: "9-ocultar-notificaciones-y-avisos-innecesarios",
      children: "9. Ocultar notificaciones y avisos innecesarios"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " ocultar_notificaciones_admin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Solo para no-administradores"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "!"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "current_user_can"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'manage_options'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Ocultar avisos de actualización (alarman sin motivo)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        remove_action"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'admin_notices'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'update_nag'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "3"
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
            children: "        "
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "        // Ocultar avisos de plugins (tú te encargas)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        remove_all_actions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'admin_notices'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        remove_all_actions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'network_admin_notices'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "        remove_all_actions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'all_admin_notices'"
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
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
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
            children: "'admin_head'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'ocultar_notificaciones_admin'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "10-forzar-editor-clásico-gutenberg-puede-ser-confuso",
      children: "10. Forzar editor clásico (Gutenberg puede ser confuso)"
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
            children: "// Si Gutenberg es demasiado para tu cliente, vuelve al clásico"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " deshabilitar_gutenberg"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "($use_block_editor, $post_type) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Deshabilitar para todos los tipos de contenido"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " false"
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
            children: "    // O solo para algunos:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // if ($post_type === 'page') return false;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // return $use_block_editor;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "add_filter"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'use_block_editor_for_post_type'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'deshabilitar_gutenberg'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
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
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Remover CSS de Gutenberg del frontend"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " remover_gutenberg_css"
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
              color: "#B392F0"
            },
            children: "    wp_dequeue_style"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'wp-block-library'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "    wp_dequeue_style"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'wp-block-library-theme'"
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
            children: "}"
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
            children: "'wp_enqueue_scripts'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'remover_gutenberg_css'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
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
        children: "Nota:"
      }), " Solo si tu cliente se siente más cómodo con el editor clásico. Gutenberg puede ser mejor si se simplifica correctamente."]
    }), "\n", createVNode(_components.h2, {
      id: "configuración-por-roles-diferentes-clientes-diferentes-necesidades",
      children: "Configuración por roles: Diferentes clientes, diferentes necesidades"
    }), "\n", createVNode(_components.h3, {
      id: "estrategia-de-roles",
      children: "Estrategia de roles"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Administrador (tú o tu equipo):"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Ve TODO"
      }), "\n", createVNode(_components.li, {
        children: "Puede hacer TODO"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Editor (cliente principal):"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Gestiona todo el contenido"
      }), "\n", createVNode(_components.li, {
        children: "NO puede cambiar apariencia, plugins, ajustes"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Autor (colaboradores del cliente):"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Crea y edita solo SUS propias entradas"
      }), "\n", createVNode(_components.li, {
        children: "NO puede publicar sin revisión (si decides workflow con aprobación)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Colaborador (prácticas, becarios):"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Crea borradores"
      }), "\n", createVNode(_components.li, {
        children: "NO puede publicar"
      }), "\n", createVNode(_components.li, {
        children: "NO puede subir medios"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "plugin-recomendado-para-gestión-de-roles-avanzada",
      children: "Plugin recomendado para gestión de roles avanzada"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "User Role Editor"
      }), " (gratuito)"]
    }), "\n", createVNode(_components.p, {
      children: "Permite control granular:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Activar/desactivar capacidades específicas por rol"
      }), "\n", createVNode(_components.li, {
        children: "Crear roles personalizados (“Gestor de Productos”, “Gestor de Blog”)"
      }), "\n", createVNode(_components.li, {
        children: "Clonar roles existentes y modificar"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Ejemplo de uso:"
      })
    }), "\n", createVNode(_components.p, {
      children: "Crear rol “Gestor de Productos” que:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "✅ Puede gestionar CPT “Productos”"
      }), "\n", createVNode(_components.li, {
        children: "✅ Puede subir imágenes"
      }), "\n", createVNode(_components.li, {
        children: "❌ NO puede tocar entradas del blog"
      }), "\n", createVNode(_components.li, {
        children: "❌ NO puede gestionar usuarios"
      }), "\n", createVNode(_components.li, {
        children: "❌ NO ve nada de Apariencia ni Plugins"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "admin-personalizado-plantillas-listas-por-tipo-de-cliente",
      children: "Admin personalizado: Plantillas listas por tipo de cliente"
    }), "\n", createVNode(_components.h3, {
      id: "plantilla-1-blog-corporativo-simple",
      children: "Plantilla 1: Blog corporativo simple"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Cliente necesita:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Escribir artículos"
      }), "\n", createVNode(_components.li, {
        children: "Subir imágenes"
      }), "\n", createVNode(_components.li, {
        children: "Nada más"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Configuración:"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Menú visible:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Dashboard (widget bienvenida personalizado)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Artículos"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── Todos los artículos"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── Añadir nuevo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── Categorías"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Imágenes"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── Mi perfil"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Oculto:"
      }), " Todo lo demás"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Tiempo configuración:"
      }), " 30 minutos"]
    }), "\n", createVNode(_components.h3, {
      id: "plantilla-2-e-commerce-woocommerce",
      children: "Plantilla 2: E-commerce (WooCommerce)"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Cliente necesita:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Gestionar productos"
      }), "\n", createVNode(_components.li, {
        children: "Ver pedidos"
      }), "\n", createVNode(_components.li, {
        children: "Gestionar cupones"
      }), "\n", createVNode(_components.li, {
        children: "Ver estadísticas básicas"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Configuración:"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Menú visible:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Dashboard (widget pedidos recientes)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Productos"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── Todos los productos"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── Añadir producto"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── Categorías"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── Etiquetas"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Pedidos"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Cupones"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Informes (solo ventas básicas)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── Mi perfil"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Oculto:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Ajustes de WooCommerce (peligrosos)"
      }), "\n", createVNode(_components.li, {
        children: "Extensiones"
      }), "\n", createVNode(_components.li, {
        children: "Estado del sistema (técnico)"
      }), "\n", createVNode(_components.li, {
        children: "Todo lo de WordPress core que no necesitan"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Tiempo configuración:"
      }), " 1 hora"]
    }), "\n", createVNode(_components.h3, {
      id: "plantilla-3-directoriocatálogo-con-cpt",
      children: "Plantilla 3: Directorio/Catálogo con CPT"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Cliente necesita:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Gestionar empresas/productos/servicios (CPT)"
      }), "\n", createVNode(_components.li, {
        children: "Gestionar categorías"
      }), "\n", createVNode(_components.li, {
        children: "Ver estadísticas de uso"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Configuración:"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Menú visible:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Dashboard (stats personalizadas)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Empresas del Directorio"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── Todas las empresas"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── Añadir nueva"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   ├── Categorías"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "│   └── Ubicaciones"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Solicitudes Pendientes (aprobar/rechazar)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Imágenes y Documentos"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── Mi perfil"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Funcionalidad especial:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Workflow de aprobación"
      }), "\n", createVNode(_components.li, {
        children: "Estadísticas de visitas por empresa"
      }), "\n", createVNode(_components.li, {
        children: "Exportación a CSV"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Tiempo configuración:"
      }), " 2 horas"]
    }), "\n", createVNode(_components.h3, {
      id: "plantilla-4-sitio-multiautor-revista-blog-colectivo",
      children: "Plantilla 4: Sitio multiautor (revista, blog colectivo)"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Cliente necesita:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Múltiples autores"
      }), "\n", createVNode(_components.li, {
        children: "Editor jefe aprueba contenido"
      }), "\n", createVNode(_components.li, {
        children: "Secciones diferenciadas"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Configuración:"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Roles personalizados:"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Editor Jefe:"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Dashboard (métricas de contenido)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Todos los Artículos (de todos los autores)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Artículos Pendientes Revisión"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Gestionar Autores"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Categorías y Etiquetas"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── Estadísticas"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Autor:"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Dashboard (solo sus métricas)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Mis Artículos"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Escribir Nuevo Artículo"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── Mi Perfil"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Colaborador:"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Dashboard"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Mis Borradores"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── Enviar Borrador a Revisión"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── Mi Perfil"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Tiempo configuración:"
      }), " 2.5 horas"]
    }), "\n", createVNode(_components.h2, {
      id: "el-flujo-de-onboarding-perfecto",
      children: "El flujo de onboarding perfecto"
    }), "\n", createVNode(_components.h3, {
      id: "1-entrega-inicial-antes-de-dar-acceso",
      children: "1. Entrega inicial (antes de dar acceso)"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Documento preparado:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Capturas de pantalla del admin limpio"
      }), "\n", createVNode(_components.li, {
        children: "Explicación de cada sección visible"
      }), "\n", createVNode(_components.li, {
        children: "Lo que pueden hacer / no pueden hacer"
      }), "\n", createVNode(_components.li, {
        children: "Datos de acceso"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Sesión de training (30-45 min):"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Tour guiado del admin personalizado"
      }), "\n", createVNode(_components.li, {
        children: "Práctica supervisada de tareas comunes"
      }), "\n", createVNode(_components.li, {
        children: "Resolución de dudas"
      }), "\n", createVNode(_components.li, {
        children: "Grabación de la sesión para referencia"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "2-primeros-días-soporte-activo",
      children: "2. Primeros días (soporte activo)"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Check-in a las 48 horas:"
      }), "\n“¿Has podido hacer lo que necesitabas? ¿Algo te resulta confuso?”"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Ajustes basados en feedback:"
      }), "\nSi dice “no encuentro cómo cambiar X”, añades acceso rápido a X."]
    }), "\n", createVNode(_components.h3, {
      id: "3-material-de-referencia",
      children: "3. Material de referencia"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Manual PDF personalizado:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Capturas de SU admin (no genéricas)"
      }), "\n", createVNode(_components.li, {
        children: "Paso a paso de tareas comunes"
      }), "\n", createVNode(_components.li, {
        children: "FAQs específicas"
      }), "\n", createVNode(_components.li, {
        children: "Datos de contacto destacados"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Vídeos cortos (2-3 min c/u):"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "“Cómo añadir un artículo”"
      }), "\n", createVNode(_components.li, {
        children: "“Cómo subir imágenes correctamente”"
      }), "\n", createVNode(_components.li, {
        children: "“Cómo editar una página existente”"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Página de ayuda interna:"
      }), "\nWidget en dashboard con enlaces a estos recursos."]
    }), "\n", createVNode(_components.h2, {
      id: "los-errores-comunes-al-personalizar-admin",
      children: "Los errores comunes al personalizar admin"
    }), "\n", createVNode(_components.h3, {
      id: "-error-1-ocultar-demasiado",
      children: "❌ Error 1: Ocultar demasiado"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Problema:"
      }), " Cliente no puede hacer tareas legítimas sin llamarte."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Ejemplo real:"
      }), " Ocultamos “Medios” pensando que subirían imágenes desde el editor. No sabían cómo gestionar imágenes ya subidas."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Solución:"
      }), " Deja acceso pero simplifica. Medios es necesario."]
    }), "\n", createVNode(_components.h3, {
      id: "-error-2-no-comunicar-los-cambios",
      children: "❌ Error 2: No comunicar los cambios"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Problema:"
      }), " Cliente se asusta al ver un admin “diferente”."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Ejemplo real:"
      }), " Cliente comparó con tutoriales de YouTube y llamó diciendo “mi WordPress está roto, falta todo”."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Solución:"
      }), " Explicación previa: “Hemos personalizado tu panel para que sea más simple y seguro. Solo ves lo que necesitas.”"]
    }), "\n", createVNode(_components.h3, {
      id: "-error-3-usar-lenguaje-técnico-en-renombrados",
      children: "❌ Error 3: Usar lenguaje técnico en renombrados"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Problema:"
      }), " Cambias “Posts” por “CPT Noticias” en lugar de “Noticias”."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Mantén lenguaje humano:"
      }), " “Artículos del Blog”, “Imágenes”, “Nuestro Equipo”."]
    }), "\n", createVNode(_components.h3, {
      id: "-error-4-no-dar-vía-de-escape",
      children: "❌ Error 4: No dar vía de escape"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Problema:"
      }), " Algo urgente necesita cambiar y el cliente te necesita (estás de vacaciones)."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Solución:"
      }), " Deja un “Usuario Administrador de Emergencia” con todos los permisos, credenciales en sobre sellado que solo abre si hay emergencia real. Instrúyeles: “Solo en caso de que no podamos atender y sea urgente de verdad”."]
    }), "\n", createVNode(_components.h3, {
      id: "-error-5-personalizar-demasiado-pronto",
      children: "❌ Error 5: Personalizar demasiado pronto"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Problema:"
      }), " Personalizas el admin antes de entender flujo real del cliente."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Solución:"
      }), " Deja 2 semanas con admin estándar (supervisado), observa qué usan y qué no. LUEGO personaliza basado en uso real."]
    }), "\n", createVNode(_components.h2, {
      id: "plugins-que-ayudan-con-precaución",
      children: "Plugins que ayudan (con precaución)"
    }), "\n", createVNode(_components.h3, {
      id: "white-label-cms-gratuito",
      children: "White Label CMS (gratuito)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Cambiar logo de login"
      }), "\n", createVNode(_components.li, {
        children: "Personalizar admin completamente"
      }), "\n", createVNode(_components.li, {
        children: "Ocultar elementos"
      }), "\n", createVNode(_components.li, {
        children: "Branding de agencia"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Cuándo usarlo:"
      }), " Clientes que valoran ver su marca, no la de WordPress."]
    }), "\n", createVNode(_components.h3, {
      id: "admin-menu-editor-gratuito",
      children: "Admin Menu Editor (gratuito)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Reordenar menú"
      }), "\n", createVNode(_components.li, {
        children: "Ocultar elementos"
      }), "\n", createVNode(_components.li, {
        children: "Renombrar fácilmente"
      }), "\n", createVNode(_components.li, {
        children: "Añadir separadores"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Cuándo usarlo:"
      }), " Si no te sientes cómodo editando PHP directamente."]
    }), "\n", createVNode(_components.h3, {
      id: "adminimize-gratuito",
      children: "Adminimize (gratuito)"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Control granular de visibilidad"
      }), "\n", createVNode(_components.li, {
        children: "Por rol"
      }), "\n", createVNode(_components.li, {
        children: "Por capacidad"
      }), "\n", createVNode(_components.li, {
        children: "Muy potente"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Cuándo usarlo:"
      }), " Casos complejos con muchos roles diferentes."]
    }), "\n", createVNode(_components.h3, {
      id: "️-advertencia-sobre-plugins-de-personalización",
      children: "⚠️ Advertencia sobre plugins de personalización"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Problema:"
      }), " Añades dependencia de plugin. Si se descontinúa o tiene bug, pierdes configuración."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Recomendación:"
      }), " Código personalizado en mu-plugin (must-use) es más sólido a largo plazo."]
    }), "\n", createVNode(_components.h2, {
      id: "el-código-en-producción-cómo-implementarlo",
      children: "El código en producción: Cómo implementarlo"
    }), "\n", createVNode(_components.h3, {
      id: "opción-1-must-use-plugin-recomendado",
      children: "Opción 1: Must-Use Plugin (recomendado)"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Crear archivo:"
      }), "\n", createVNode(_components.code, {
        children: "/wp-content/mu-plugins/admin-personalizado.php"
      })]
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "<?"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "php"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "/*"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "Plugin Name: Admin Personalizado - [Nombre Cliente]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "Description: Personalización del admin para simplificar gestión"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "Version: 1.0"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "Author: Tu Agencia"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "*/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// Incluye aquí todas las funciones de personalización"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " limpiar_menu_admin"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    // Código aquí..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
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
            children: "'admin_menu'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'limpiar_menu_admin'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "999"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// ... resto de funciones"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Ventajas:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Se carga automáticamente"
      }), "\n", createVNode(_components.li, {
        children: "NO puede desactivarse desde admin"
      }), "\n", createVNode(_components.li, {
        children: "Perfecto para configuración crítica"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "opción-2-plugin-personalizado-regular",
      children: "Opción 2: Plugin personalizado regular"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Solo si:"
      }), " Cliente podría necesitar desactivarlo temporalmente para troubleshooting."]
    }), "\n", createVNode(_components.h3, {
      id: "opción-3-functionsphp-del-child-theme",
      children: "Opción 3: Functions.php del child theme"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "NO recomendado para esto:"
      }), " Si cambias de theme, pierdes toda la personalización."]
    }), "\n", createVNode(_components.h2, {
      id: "el-coste-vs-beneficio-real",
      children: "El coste vs beneficio real"
    }), "\n", createVNode(_components.h3, {
      id: "inversión-inicial",
      children: "Inversión inicial"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Tiempo desarrollo (por proyecto):"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Admin simple (blog): 1-2 horas"
      }), "\n", createVNode(_components.li, {
        children: "Admin medio (e-commerce): 3-4 horas"
      }), "\n", createVNode(_components.li, {
        children: "Admin complejo (múltiples roles): 6-8 horas"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Coste desarrollo:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Simple: €80-160"
      }), "\n", createVNode(_components.li, {
        children: "Medio: €240-320"
      }), "\n", createVNode(_components.li, {
        children: "Complejo: €480-640"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "retorno-de-inversión",
      children: "Retorno de inversión"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Escenario conservador:"
      })
    }), "\n", createVNode(_components.p, {
      children: "Cliente llama 1 vez/mes por “he roto algo” = 30 min/llamada"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "12 llamadas/año × 0.5h = 6 horas/año"
      }), "\n", createVNode(_components.li, {
        children: "A €80/hora = €480/año"
      }), "\n", createVNode(_components.li, {
        children: "Inversión se recupera en: ~1 año (admin medio)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Escenario realista (sin admin personalizado):"
      })
    }), "\n", createVNode(_components.p, {
      children: "Cliente con problemas frecuentes:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "2-3 llamadas/mes × 0.5h = 12-18 horas/año"
      }), "\n", createVNode(_components.li, {
        children: "A €80/hora = €960-1,440/año"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ROI:"
        }), " Recuperas inversión en 2-4 meses"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Beneficio intangible:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Cliente feliz y confiado"
      }), "\n", createVNode(_components.li, {
        children: "Menos estrés en tu equipo"
      }), "\n", createVNode(_components.li, {
        children: "Mejor reputación (cliente recomienda)"
      }), "\n", createVNode(_components.li, {
        children: "Menos interrupciones = más productividad"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "checklist-de-entrega-admin-listo-para-cliente",
      children: "Checklist de entrega: Admin listo para cliente"
    }), "\n", createVNode(_components.p, {
      children: "Antes de dar acceso, verifica:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Funcional:"
      }), "\n☐ Cliente puede hacer todas las tareas necesarias\n☐ Cliente NO puede acceder a áreas peligrosas\n☐ Widget de bienvenida personalizado visible\n☐ Enlaces de ayuda funcionan\n☐ Branding de agencia en footer\n☐ Notificaciones innecesarias ocultas\n☐ Editor configurado (Gutenberg o Clásico según caso)"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Seguridad:"
      }), "\n☐ Editor de archivos deshabilitado\n☐ Roles configurados correctamente\n☐ Usuario admin de emergencia creado (credenciales seguras)\n☐ Permisos de archivos correctos"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Documentación:"
      }), "\n☐ Manual PDF personalizado entregado\n☐ Vídeos tutoriales grabados (si aplica)\n☐ Credenciales de acceso enviadas de forma segura\n☐ Sesión de training agendada"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Soporte:"
      }), "\n☐ Cliente sabe cómo contactarte\n☐ Horario de soporte comunicado\n☐ Expectativas claras de tiempos de respuesta"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusión-admin-personalizado--clientes-felices",
      children: "Conclusión: Admin personalizado = Clientes felices"
    }), "\n", createVNode(_components.p, {
      children: "Personalizar el admin de WordPress no es “un extra bonito”. Es parte fundamental de entregar un proyecto profesional."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "La diferencia entre:"
      })
    }), "\n", createVNode(_components.p, {
      children: "❌ “Aquí tienes WordPress, aprende a usarlo” (lo que hacen muchos)"
    }), "\n", createVNode(_components.p, {
      children: "✅ “Aquí tienes TU panel de gestión, diseñado para que hagas tu trabajo sin complicaciones” (lo que deberías hacer)"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Esa diferencia se traduce en:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Menos llamadas de soporte"
      }), "\n", createVNode(_components.li, {
        children: "Clientes más satisfechos"
      }), "\n", createVNode(_components.li, {
        children: "Mejores testimonios"
      }), "\n", createVNode(_components.li, {
        children: "Más recomendaciones"
      }), "\n", createVNode(_components.li, {
        children: "Menos estrés para ti"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Invierte 2-6 horas en personalizar el admin."
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Ahorra 10-20 horas al año en soporte reactivo."
      })
    }), "\n", createVNode(_components.p, {
      children: "Haz los cálculos."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h3, {
      id: "entregas-proyectos-wordpress-a-clientes",
      children: "¿Entregas proyectos WordPress a clientes?"
    }), "\n", createVNode(_components.p, {
      children: ["Te ofrecemos nuestro ", createVNode(_components.strong, {
        children: "“Kit de Admin Personalizado”"
      }), " que incluye:"]
    }), "\n", createVNode(_components.p, {
      children: "✓ Código base listo para copiar/pegar (mu-plugin)\n✓ Plantillas para 5 tipos de proyectos comunes\n✓ Widget de bienvenida personalizable\n✓ Checklist de entrega en PDF\n✓ Templates de manual de usuario editable"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Gratis. Solo regístrate."
      })
    }), "\n", createVNode(_components.p, {
      children: "Porque entregar un admin limpio debería ser el estándar, no la excepción."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Un cliente que no puede romper tu web es un cliente feliz. Un cliente feliz es un cliente que vuelve."
      })
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

const url = "src/content/blog/Limpiando%20el%20Admin_%20C%C3%B3mo%20personalizo%20el%20panel%20de%20control%20de%20WordPress%20para%20que%20mis%20clientes%20no%20rompan%20nada.mdx";
const file = "C:/Users/Joaquín/Documents/frameword-astro/src/content/blog/Limpiando el Admin_ Cómo personalizo el panel de control de WordPress para que mis clientes no rompan nada.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Joaquín/Documents/frameword-astro/src/content/blog/Limpiando el Admin_ Cómo personalizo el panel de control de WordPress para que mis clientes no rompan nada.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
