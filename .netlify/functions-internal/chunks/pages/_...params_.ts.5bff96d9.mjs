import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { _ as __astro_tag_component__ } from '../astro.ccd62b36.mjs';
import { config, singleton, fields, collection } from '@keystatic/core';

const _hoc_function = config({
  storage: {
    // kind: 'local',
    kind: "github",
    repo: {
      owner: "Brem-LLC",
      name: "local-muscle-movers"
    }
  },
  singletons: {
    general: singleton({
      label: "General Information",
      path: "src/content/_general",
      schema: {
        title: fields.text({
          label: "Title"
        }),
        usdot: fields.text({
          label: "USDOT Number"
        }),
        phone: fields.text({
          label: "Phone Number Maine"
        }),
        phoneSecondary: fields.text({
          label: "Phone Number Vermont"
        }),
        email: fields.text({
          label: "Email Address"
        }),
        hours: fields.text({
          label: "Hours of Operation"
        })
      }
    }),
    menu: singleton({
      label: "Main Menu",
      path: "src/content/_mainMenu",
      schema: {
        menuItems: fields.array(fields.object({
          name: fields.text({
            label: "Name"
          }),
          link: fields.text({
            label: "Link"
          }),
          button: fields.checkbox({
            label: "Link is button?",
            description: "Check this box to turn the link into a button on the navbar."
          })
        }), {
          label: "Menu Builder",
          itemLabel: (props) => props.fields.name.value
        })
      }
    }),
    homePage: singleton({
      label: "Home Page",
      path: "src/content/_homePage",
      schema: {
        componentBlocks: fields.blocks({
          banner: {
            label: "Banner",
            schema: fields.object({
              bannerImage: fields.image({
                label: "Banner Image",
                directory: "public/images/home",
                publicPath: "/images/home/"
              }),
              heading: fields.text({
                label: "Heading"
              }),
              subheading: fields.text({
                label: "Subheading",
                multiline: true
              }),
              buttonText: fields.text({
                label: "Button Text"
              }),
              buttonLink: fields.text({
                label: "Button Link"
              })
            })
          },
          imageText: {
            label: "Image and Text",
            schema: fields.object({
              image: fields.image({
                label: "Image",
                directory: "public/images/blocks",
                publicPath: "/images/blocks/"
              }),
              heading: fields.text({
                label: "Heading"
              }),
              description: fields.text({
                label: "Description",
                multiline: true
              }),
              imagePlacement: fields.select({
                label: "Image Placement",
                description: "Choose whether the image should be on the left or right.",
                options: [{
                  label: "Left",
                  value: "left"
                }, {
                  label: "Right",
                  value: "right"
                }],
                defaultValue: "left"
              })
            })
          },
          testimonialSelector: {
            label: "Testimonial Selector",
            schema: fields.object({
              testimonials: fields.array(fields.relationship({
                label: "Testimonials",
                collection: "testimonials"
              }), {
                label: "Testimonials",
                itemLabel: (props) => props.value
              })
            })
          }
        }, {
          label: "Component Blocks"
        })
      }
    })
  },
  collections: {
    testimonials: collection({
      label: "Testimonials",
      path: "src/content/testimonials/*/",
      slugField: "name",
      schema: {
        name: fields.slug({
          name: {
            label: "Name"
          }
        }),
        quote: fields.text({
          label: "Quote",
          multiline: true
        })
      }
    }),
    services: collection({
      label: "Services",
      path: "src/content/services/*/",
      slugField: "name",
      schema: {
        name: fields.slug({
          name: {
            label: "Name"
          }
        }),
        heading: fields.text({
          label: "Heading"
        }),
        description: fields.text({
          label: "Description",
          multiline: true
        })
      }
    })
  }
});
__astro_tag_component__(_hoc_function, "@astrojs/react");

function makeHandler(_config) {
  var _config$clientId, _config$clientSecret, _config$secret;
  const handler = makeGenericAPIRouteHandler({
    ..._config,
    clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : "Iv1.6d5986643f4e03ea",
    clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : "bef605b7450664a3e0875a2d9185a7da3a99fc74",
    secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : "cf7f6fadb0a2aa85f8e101a47445abe2e5c2316008256e145ffac487033e4062a9cbcd8170c959d6"
  }, {
    slugEnvName: 'PUBLIC_KEYSTATIC_GITHUB_APP_SLUG'
  });
  return async function keystaticAPIRoute(context) {
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    // all this stuff should be able to go away when astro is using a version of undici with getSetCookie
    let headersInADifferentStructure = new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === 'function') {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ('getSetCookie' in headers && typeof headers.getSetCookie === 'function') {
          const setCookieHeaders = headers.getSetCookie();
          if (setCookieHeaders !== null && setCookieHeaders !== void 0 && setCookieHeaders.length) {
            headersInADifferentStructure.set('set-cookie', setCookieHeaders);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get('set-cookie');
    headersInADifferentStructure.delete('set-cookie');
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === 'lax' || sameSite === 'strict' || sameSite === 'none' ? sameSite : undefined
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(_ref => {
        let [key, val] = _ref;
        return val.map(x => [key, x]);
      })
    });
  };
}

const prerender = false;
const all = makeHandler({
  config: _hoc_function
});

const ____params_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { _hoc_function as _, ____params_ as a };
