import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { _ as __astro_tag_component__ } from '../astro.f66c1913.mjs';
import { config, singleton, fields, collection } from '@keystatic/core';

const _hoc_function = config({
  storage: {
    kind: "github",
    repo: {
      owner: "Brem-LLC",
      name: "local-muscle-movers"
    }
    // kind: 'local',
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
              desciption: fields.text({
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

var setCookie = {exports: {}};

var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false,
};

function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}

function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);

  var nameValuePairStr = parts.shift();
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;

  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  try {
    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" +
        value +
        "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }

  var cookie = {
    name: name,
    value: value,
  };

  parts.forEach(function (part) {
    var sides = part.split("=");
    var key = sides.shift().trimLeft().toLowerCase();
    var value = sides.join("=");
    if (key === "expires") {
      cookie.expires = new Date(value);
    } else if (key === "max-age") {
      cookie.maxAge = parseInt(value, 10);
    } else if (key === "secure") {
      cookie.secure = true;
    } else if (key === "httponly") {
      cookie.httpOnly = true;
    } else if (key === "samesite") {
      cookie.sameSite = value;
    } else {
      cookie[key] = value;
    }
  });

  return cookie;
}

function parseNameValuePair(nameValuePairStr) {
  // Parses name-value-pair according to rfc6265bis draft

  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("="); // everything after the first =, joined by a "=" if there was more than one part
  } else {
    value = nameValuePairStr;
  }

  return { name: name, value: value };
}

function parse(input, options) {
  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }

  if (input.headers) {
    if (typeof input.headers.getSetCookie === "function") {
      // for fetch responses - they combine headers of the same type in the headers array,
      // but getSetCookie returns an uncombined array
      input = input.headers.getSetCookie();
    } else if (input.headers["set-cookie"]) {
      // fast-path for node.js (which automatically normalizes header names to lower-case
      input = input.headers["set-cookie"];
    } else {
      // slow-path for other environments - see #25
      var sch =
        input.headers[
          Object.keys(input.headers).find(function (key) {
            return key.toLowerCase() === "set-cookie";
          })
        ];
      // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
      if (!sch && input.headers.cookie && !options.silent) {
        console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        );
      }
      input = sch;
    }
  }
  if (!Array.isArray(input)) {
    input = [input];
  }

  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  if (!options.map) {
    return input.filter(isNonEmptyString).map(function (str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function (cookies, str) {
      var cookie = parseString(str, options);
      cookies[cookie.name] = cookie;
      return cookies;
    }, cookies);
  }
}

/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.

  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.

  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }

  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;

  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }

  function notSpecialChar() {
    ch = cookiesString.charAt(pos);

    return ch !== "=" && ch !== ";" && ch !== ",";
  }

  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;

    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        // ',' is a cookie separator if we have later first '=', not ';' or ','
        lastComma = pos;
        pos += 1;

        skipWhitespace();
        nextStart = pos;

        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }

        // currently special character
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          // we found cookies separator
          cookiesSeparatorFound = true;
          // pos is inside the next cookie, so back up and return it.
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          // in param ',' or param separator ';',
          // we continue from that comma
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }

    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }

  return cookiesStrings;
}

setCookie.exports = parse;
setCookie.exports.parse = parse;
var parseString_1 = setCookie.exports.parseString = parseString;
setCookie.exports.splitCookiesString = splitCookiesString;

function makeHandler(_config) {
  var _config$clientId, _config$clientSecret, _config$secret;
  const handler = makeGenericAPIRouteHandler({
    ..._config,
    clientId: (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : "Iv1.5242d0845440238d",
    clientSecret: (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : "91a15163ea5408d8f71882b395e306e9175e1050",
    secret: (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : "fe6a3384f951572c2f7277940a1080163fcd1eba71d28f7b915120487f9984ae18e9b02f72c38039"
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
        } = parseString_1(setCookieValue);
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
