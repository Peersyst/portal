import "./big-number";
import "./buffer";

import TextEncodingPolyfill from "text-encoding";

global.TextEncoder = TextEncodingPolyfill.TextEncoder;
global.TextDecoder = TextEncodingPolyfill.TextDecoder;
