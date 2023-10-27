import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config, singleton, fields, collection } from '@keystatic/core';

function makeHandler(_config) {
  var _config$clientId, _config$clientSecret, _config$secret;
  const handler = makeGenericAPIRouteHandler({
    ..._config,
    clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : tryOrUndefined(() => ({}).KEYSTATIC_GITHUB_CLIENT_ID),
    clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : tryOrUndefined(() => ({}).KEYSTATIC_GITHUB_CLIENT_SECRET),
    secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : tryOrUndefined(() => ({}).KEYSTATIC_SECRET)
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
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map(x => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return undefined;
  }
}

const keystaticConfig = config({
  storage: {
    kind: "cloud"
  },
  cloud: {
    project: "local-muscle-movers/local-muscle-movers"
  },
  singletons: {
    general: singleton({
      label: "General Information",
      path: "src/content/_general",
      schema: {
        logo: fields.image({
          label: "Logo",
          description: "Local Muscle Mover Logo",
          // This will output the images in the "public" directory
          directory: "/public/images/",
          publicPath: "/images/"
        }),
        title: fields.text({ label: "Title" }),
        usdot: fields.text({ label: "USDOT Number" }),
        phone: fields.text({ label: "Phone Number Maine" }),
        phoneSecondary: fields.text({ label: "Phone Number Vermont" }),
        email: fields.text({ label: "Email Address" }),
        hours: fields.text({ label: "Hours of Operation" })
      }
    }),
    menu: singleton({
      label: "Main Menu",
      path: "src/content/_mainMenu",
      schema: {
        menuItems: fields.array(
          fields.object({
            name: fields.text({ label: "Name" }),
            link: fields.text({ label: "Link" }),
            button: fields.checkbox({
              label: "Link is button?",
              description: "Check this box to turn the link into a button on the navbar."
            })
          }),
          {
            label: "Menu Builder",
            itemLabel: (props) => props.fields.name.value
          }
        )
      }
    })
  },
  collections: {
    pages: collection({
      label: "Pages",
      path: "src/content/pages/*/",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        componentBlocks: fields.blocks(
          {
            banner: {
              label: "Banner",
              schema: fields.object({
                bannerImage: fields.image({
                  label: "Banner Image",
                  directory: "public/images/home",
                  publicPath: "/images/home/"
                }),
                heading: fields.text({ label: "Heading" }),
                subheading: fields.text({ label: "Subheading", multiline: true }),
                buttonText: fields.text({ label: "Button Text" }),
                buttonLink: fields.text({ label: "Button Link" })
              })
            },
            shortHero: {
              label: "Short Banner",
              schema: fields.object({
                backgroundImage: fields.image({
                  label: "Background Image",
                  directory: "public/images/shortHeros",
                  publicPath: "/images/shortHeros/"
                }),
                title: fields.text({ label: "Hero Title" }),
                description: fields.text({ label: "Hero Description" })
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
                heading: fields.text({ label: "Heading" }),
                description: fields.text({ label: "Description", multiline: true }),
                imagePlacement: fields.select({
                  label: "Image Placement",
                  description: "Choose whether the image should be on the left or right.",
                  options: [
                    { label: "Left", value: "left" },
                    { label: "Right", value: "right" }
                  ],
                  defaultValue: "left"
                })
              })
            },
            videoText: {
              label: "Video and Text",
              schema: fields.object({
                video: fields.text({ label: "Video code" }),
                heading: fields.text({ label: "Heading" }),
                description: fields.text({ label: "Description", multiline: true }),
                optionalLink: fields.object({
                  link: fields.text({ label: "Link URL" }),
                  text: fields.text({ label: "Link Text" })
                }),
                type: fields.select({
                  label: "Align Vertical or Horizontal?",
                  options: [
                    { label: "Vertical", value: "vertical" },
                    { label: "Horizontal", value: "horizontal" }
                  ],
                  defaultValue: "vertical"
                })
              })
            },
            testimonialCTA: {
              label: "Testimonial CTA",
              schema: fields.object({
                personName: fields.text({ label: "Person's Name" }),
                review: fields.text({ label: "Review", multiline: true }),
                testimonialType: fields.select({
                  label: "Customer Review or Quote?",
                  options: [
                    { label: "Customer Review", value: "review" },
                    { label: "Quote", value: "quote" }
                  ],
                  defaultValue: "review"
                })
              })
            },
            serviceSelector: {
              label: "Service Selector",
              schema: fields.object({
                services: fields.array(
                  fields.relationship({
                    label: "Services",
                    collection: "services"
                  }),
                  {
                    label: "Services",
                    itemLabel: (props) => props.value !== null ? props.value : "Service"
                  }
                )
              })
            },
            testimonialSelector: {
              label: "Testimonial Selector",
              schema: fields.object({
                testimonials: fields.array(
                  fields.relationship({
                    label: "Testimonials",
                    collection: "testimonials"
                  }),
                  {
                    label: "Testimonials",
                    itemLabel: (props) => props.value !== null ? props.value : "Testimonial"
                  }
                )
              })
            },
            headerText: {
              label: "Header And Text",
              schema: fields.object({
                header: fields.text({ label: "Header" }),
                text: fields.text({ label: "Text", multiline: true })
              })
            },
            movingChecklist: {
              label: "Moving Checklist",
              schema: fields.object({
                header: fields.text({ label: "Checklist Header" }),
                subtext: fields.text({ label: "Text Under Header" }),
                image: fields.image({
                  label: "Moving Image",
                  directory: "public/images/resources",
                  publicPath: "/images/resources/"
                }),
                checklist: fields.array(
                  fields.text({ label: "Checklist Item" }),
                  {
                    label: "Checklist Items",
                    itemLabel: (props) => props.value !== null ? props.value : "Checklist Item"
                  }
                )
              })
            },
            policiesAndContracts: {
              label: "Policies And Contracts",
              schema: fields.object({
                header: fields.text({ label: "Header" }),
                subtext: fields.text({ label: "Text Under Header" }),
                localPolicies: fields.array(
                  fields.object({
                    title: fields.text({ label: "Policy / Contract" }),
                    link: fields.url({
                      label: "Policy / Contract Link"
                    })
                  }),
                  {
                    label: "Local Policies / Contracts"
                    // itemLabel: (props) => props.fields.title !== null ? props.fields.title : "Policy"
                  }
                ),
                interstatePolicies: fields.array(
                  fields.object({
                    title: fields.text({ label: "Policy / Contract" }),
                    link: fields.url({
                      label: "Policy / Contract Link"
                    })
                  }),
                  {
                    label: "Interstate Policies / Contracts"
                    // itemLabel: (props) => props.fields.title !== null ? props.fields.title : "Policy"
                  }
                ),
                disclaimer: fields.text({ label: "Disclaimer", multiline: true })
              })
            },
            plainText: {
              label: "Text Only Block",
              schema: fields.object({
                text: fields.text({ label: "Any Text", multiline: true })
              })
            },
            applicationForm: {
              label: "Application Form",
              schema: fields.object({
                details: fields.text({ label: "Details Paragraph", multiline: true }),
                header: fields.text({ label: "Form Header" }),
                subtext: fields.text({ label: "Text Under Header" }),
                formFields: fields.array(
                  fields.object({
                    title: fields.text({ label: "Field Name" }),
                    isRequired: fields.checkbox({
                      label: "Is This A Required Field?",
                      description: "Check this box if you want to make this field required."
                    }),
                    fieldType: fields.select({
                      label: "Field Type",
                      description: "What type of input should this field represent?",
                      options: [
                        { label: "Text", value: "text" },
                        { label: "Phone Number", value: "tel" },
                        { label: "Number", value: "number" },
                        { label: "Email", value: "email" },
                        { label: "Select", value: "select" },
                        { label: "Long Text", value: "longText" }
                      ],
                      defaultValue: "text"
                    })
                  }),
                  {
                    label: "Input Fields"
                  }
                ),
                locationOptions: fields.array(
                  fields.object({
                    city: fields.text({ label: "Location City" }),
                    state: fields.text({ label: "Location State" })
                  }),
                  {
                    label: "Location Options"
                  }
                )
              })
            }
          },
          { label: "Component Blocks" }
        )
      }
    }),
    posts: collection({
      label: "Posts",
      path: "src/content/posts/*/",
      entryLayout: "content",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        publishedOn: fields.date({ label: "Heading" }),
        draft: fields.checkbox({ label: "Description", defaultValue: true }),
        featuredImage: fields.image({
          label: "Featured Image",
          directory: "/public/images/",
          publicPath: "/images/"
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          links: true,
          images: true
        })
      }
    }),
    testimonials: collection({
      label: "Testimonials",
      path: "src/content/testimonials/*",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        quote: fields.text({ label: "Quote", multiline: true })
      }
    }),
    services: collection({
      label: "Services",
      path: "src/content/services/*",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        heading: fields.text({ label: "Heading" }),
        description: fields.text({ label: "Description", multiline: true })
      }
    })
  }
});

const all = makeHandler({ config: keystaticConfig });

const prerender = false;

const keystaticApi = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { keystaticApi as a, keystaticConfig as k };
