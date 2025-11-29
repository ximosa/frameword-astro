import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DHUdpo0D.mjs';
import 'clsx';

const frontmatter = {
  "title": "Optimización de imágenes en la web: Guía completa 2025",
  "description": "Las imágenes representan la mayor parte del peso de una página web. Aprende las mejores técnicas para optimizarlas sin sacrificar calidad visual.",
  "date": "2025-01-05",
  "author": "ximo",
  "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
  "category": "Optimización"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "optimización-de-imágenes-en-la-web-guía-completa-2025",
    "text": "Optimización de imágenes en la web: Guía completa 2025"
  }, {
    "depth": 2,
    "slug": "formatos-de-imagen-modernos",
    "text": "Formatos de imagen modernos"
  }, {
    "depth": 3,
    "slug": "webp",
    "text": "WebP"
  }, {
    "depth": 3,
    "slug": "avif",
    "text": "AVIF"
  }, {
    "depth": 2,
    "slug": "técnicas-de-carga",
    "text": "Técnicas de carga"
  }, {
    "depth": 3,
    "slug": "lazy-loading",
    "text": "Lazy Loading"
  }, {
    "depth": 3,
    "slug": "responsive-images",
    "text": "Responsive Images"
  }, {
    "depth": 2,
    "slug": "herramientas-de-optimización",
    "text": "Herramientas de optimización"
  }, {
    "depth": 3,
    "slug": "automáticas",
    "text": "Automáticas"
  }, {
    "depth": 3,
    "slug": "cdns-de-imágenes",
    "text": "CDNs de imágenes"
  }, {
    "depth": 2,
    "slug": "dimensiones-explícitas",
    "text": "Dimensiones explícitas"
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
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "optimización-de-imágenes-en-la-web-guía-completa-2025",
      children: "Optimización de imágenes en la web: Guía completa 2025"
    }), "\n", createVNode(_components.p, {
      children: "Las imágenes son esenciales para crear experiencias web atractivas, pero también son responsables de la mayor parte del peso de las páginas. En esta guía veremos cómo optimizarlas correctamente."
    }), "\n", createVNode(_components.h2, {
      id: "formatos-de-imagen-modernos",
      children: "Formatos de imagen modernos"
    }), "\n", createVNode(_components.h3, {
      id: "webp",
      children: "WebP"
    }), "\n", createVNode(_components.p, {
      children: "WebP ofrece compresión superior tanto con pérdida como sin pérdida:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "25-35% más pequeño que JPEG"
      }), "\n", createVNode(_components.li, {
        children: "Soporte de transparencia (como PNG)"
      }), "\n", createVNode(_components.li, {
        children: "Amplio soporte en navegadores modernos"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "avif",
      children: "AVIF"
    }), "\n", createVNode(_components.p, {
      children: "El formato más nuevo y eficiente:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Hasta 50% más pequeño que JPEG"
      }), "\n", createVNode(_components.li, {
        children: "Excelente calidad a bajos bitrates"
      }), "\n", createVNode(_components.li, {
        children: "Soporte creciente en navegadores"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "técnicas-de-carga",
      children: "Técnicas de carga"
    }), "\n", createVNode(_components.h3, {
      id: "lazy-loading",
      children: "Lazy Loading"
    }), "\n", createVNode(_components.p, {
      children: "Carga imágenes solo cuando están a punto de entrar en el viewport:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
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
            children: "img"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"imagen.jpg\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " loading"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"lazy\""
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " alt"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Descripción\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " />"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "responsive-images",
      children: "Responsive Images"
    }), "\n", createVNode(_components.p, {
      children: "Sirve diferentes tamaños según el dispositivo:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: "img"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  srcset"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    imagen-small.jpg 400w,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    imagen-medium.jpg 800w,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "    imagen-large.jpg 1200w"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "  \""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  sizes"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"imagen-medium.jpg\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  alt"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Descripción\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "/>"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "herramientas-de-optimización",
      children: "Herramientas de optimización"
    }), "\n", createVNode(_components.h3, {
      id: "automáticas",
      children: "Automáticas"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Sharp"
        }), ": Procesamiento de imágenes en Node.js"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "ImageOptim"
        }), ": Aplicación de escritorio para Mac"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Squoosh"
        }), ": Herramienta web de Google"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "cdns-de-imágenes",
      children: "CDNs de imágenes"
    }), "\n", createVNode(_components.p, {
      children: "Servicios como Cloudinary o Imgix ofrecen:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Transformación on-the-fly"
      }), "\n", createVNode(_components.li, {
        children: "Optimización automática"
      }), "\n", createVNode(_components.li, {
        children: "CDN global"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "dimensiones-explícitas",
      children: "Dimensiones explícitas"
    }), "\n", createVNode(_components.p, {
      children: "Siempre define width y height para evitar CLS:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
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
            children: "img"
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
              color: "#B392F0"
            },
            children: "  src"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"imagen.jpg\""
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
              color: "#B392F0"
            },
            children: "  width"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"800\""
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
              color: "#B392F0"
            },
            children: "  height"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"600\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "  alt"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Descripción\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "/>"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "conclusión",
      children: "Conclusión"
    }), "\n", createVNode(_components.p, {
      children: "La optimización de imágenes es crucial para el rendimiento web. Implementa estas técnicas y verás mejoras significativas en tus Core Web Vitals y en la experiencia de usuario."
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

const url = "src/content/blog/optimizacion-imagenes-web.mdx";
const file = "C:/Users/Joaquín/Documents/frameword-astro/src/content/blog/optimizacion-imagenes-web.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Joaquín/Documents/frameword-astro/src/content/blog/optimizacion-imagenes-web.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
