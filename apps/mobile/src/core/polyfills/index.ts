import "./big-number";
import "./crypto";

/*
 * Import atob polyfill since react native does not support it
 * @see https://github.com/auth0/jwt-decode#polyfilling-atob
 */
import "core-js/stable/atob";

global.Buffer = require("buffer").Buffer;

const TextEncodingPolyfill = require("text-encoding");

global.TextEncoder = TextEncodingPolyfill.TextEncoder;
global.TextDecoder = TextEncodingPolyfill.TextDecoder;
