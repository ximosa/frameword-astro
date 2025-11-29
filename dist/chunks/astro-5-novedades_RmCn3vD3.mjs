import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DHUdpo0D.mjs';
import 'clsx';

const frontmatter = {
  "title": "Astro 5.0: Novedades y mejoras en el framework más rápido",
  "description": "Astro 5.0 trae consigo importantes mejoras en rendimiento, nuevas características y una mejor experiencia de desarrollo. Descubre todo lo nuevo en esta versión.",
  "date": "2025-01-10",
  "author": "ximo",
  "image": "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=600&fit=crop",
  "category": "Frameworks"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "astro-50-novedades-y-mejoras",
    "text": "Astro 5.0: Novedades y mejoras"
  }, {
    "depth": 2,
    "slug": "principales-novedades",
    "text": "Principales novedades"
  }, {
    "depth": 3,
    "slug": "content-collections-mejoradas",
    "text": "Content Collections mejoradas"
  }, {
    "depth": 3,
    "slug": "server-islands",
    "text": "Server Islands"
  }, {
    "depth": 3,
    "slug": "mejor-soporte-para-view-transitions",
    "text": "Mejor soporte para View Transitions"
  }, {
    "depth": 2,
    "slug": "rendimiento",
    "text": "Rendimiento"
  }, {
    "depth": 2,
    "slug": "migración-desde-astro-4x",
    "text": "Migración desde Astro 4.x"
  }, {
    "depth": 2,
    "slug": "conclusión",
    "text": "Conclusión"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "astro-50-novedades-y-mejoras",
      children: "Astro 5.0: Novedades y mejoras"
    }), "\n", createVNode(_components.p, {
      children: "Astro 5.0 marca un hito importante en la evolución de este framework. Con mejoras significativas en rendimiento y nuevas características, se consolida como una de las mejores opciones para crear sitios web modernos."
    }), "\n", createVNode(_components.h2, {
      id: "principales-novedades",
      children: "Principales novedades"
    }), "\n", createVNode(_components.h3, {
      id: "content-collections-mejoradas",
      children: "Content Collections mejoradas"
    }), "\n", createVNode(_components.p, {
      children: "Las Content Collections ahora soportan validación de esquemas más robusta y mejor integración con TypeScript:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "typescript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { defineCollection, z } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'astro:content'"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " blog"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " defineCollection"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  type: "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'content'"
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
            children: "  schema: z."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "object"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "({"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    title: z."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    date: z."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "date"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    tags: z."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "array"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(z."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "string"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "()),"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  }),"
          })
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
      id: "server-islands",
      children: "Server Islands"
    }), "\n", createVNode(_components.p, {
      children: "Una de las características más esperadas: Server Islands permite renderizar componentes en el servidor de forma independiente, mejorando significativamente el tiempo de carga inicial."
    }), "\n", createVNode(_components.h3, {
      id: "mejor-soporte-para-view-transitions",
      children: "Mejor soporte para View Transitions"
    }), "\n", createVNode(_components.p, {
      children: "Las transiciones entre páginas son ahora más fluidas y personalizables:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "astro",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { ViewTransitions } "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " 'astro:transitions'"
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
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "head"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "ViewTransitions"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "head"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "rendimiento",
      children: "Rendimiento"
    }), "\n", createVNode(_components.p, {
      children: "Astro 5.0 es hasta un 30% más rápido en build time comparado con la versión anterior. Esto se debe a:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Optimizaciones en el compilador"
      }), "\n", createVNode(_components.li, {
        children: "Mejor tree-shaking"
      }), "\n", createVNode(_components.li, {
        children: "Caché mejorado de dependencias"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "migración-desde-astro-4x",
      children: "Migración desde Astro 4.x"
    }), "\n", createVNode(_components.p, {
      children: "La migración es relativamente sencilla. Los cambios principales son:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Actualizar dependencias"
      }), "\n", createVNode(_components.li, {
        children: "Revisar configuración de integraciones"
      }), "\n", createVNode(_components.li, {
        children: "Actualizar sintaxis de Content Collections si es necesario"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusión",
      children: "Conclusión"
    }), "\n", createVNode(_components.p, {
      children: "Astro 5.0 demuestra que el equipo sigue comprometido con ofrecer la mejor experiencia tanto para desarrolladores como para usuarios finales. Si aún no lo has probado, este es el momento perfecto."
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

const url = "src/content/blog/astro-5-novedades.mdx";
const file = "C:/Users/Joaquín/Documents/frameword-astro/src/content/blog/astro-5-novedades.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Joaquín/Documents/frameword-astro/src/content/blog/astro-5-novedades.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
