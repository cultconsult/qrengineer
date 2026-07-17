var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.bun/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "../../node_modules/.bun/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(exports, module2) {
    "use strict";
    module2.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// ../../node_modules/.bun/cssfilter@0.0.10/node_modules/cssfilter/lib/default.js
var require_default = __commonJS({
  "../../node_modules/.bun/cssfilter@0.0.10/node_modules/cssfilter/lib/default.js"(exports) {
    function getDefaultWhiteList() {
      var whiteList = {};
      whiteList["align-content"] = false;
      whiteList["align-items"] = false;
      whiteList["align-self"] = false;
      whiteList["alignment-adjust"] = false;
      whiteList["alignment-baseline"] = false;
      whiteList["all"] = false;
      whiteList["anchor-point"] = false;
      whiteList["animation"] = false;
      whiteList["animation-delay"] = false;
      whiteList["animation-direction"] = false;
      whiteList["animation-duration"] = false;
      whiteList["animation-fill-mode"] = false;
      whiteList["animation-iteration-count"] = false;
      whiteList["animation-name"] = false;
      whiteList["animation-play-state"] = false;
      whiteList["animation-timing-function"] = false;
      whiteList["azimuth"] = false;
      whiteList["backface-visibility"] = false;
      whiteList["background"] = true;
      whiteList["background-attachment"] = true;
      whiteList["background-clip"] = true;
      whiteList["background-color"] = true;
      whiteList["background-image"] = true;
      whiteList["background-origin"] = true;
      whiteList["background-position"] = true;
      whiteList["background-repeat"] = true;
      whiteList["background-size"] = true;
      whiteList["baseline-shift"] = false;
      whiteList["binding"] = false;
      whiteList["bleed"] = false;
      whiteList["bookmark-label"] = false;
      whiteList["bookmark-level"] = false;
      whiteList["bookmark-state"] = false;
      whiteList["border"] = true;
      whiteList["border-bottom"] = true;
      whiteList["border-bottom-color"] = true;
      whiteList["border-bottom-left-radius"] = true;
      whiteList["border-bottom-right-radius"] = true;
      whiteList["border-bottom-style"] = true;
      whiteList["border-bottom-width"] = true;
      whiteList["border-collapse"] = true;
      whiteList["border-color"] = true;
      whiteList["border-image"] = true;
      whiteList["border-image-outset"] = true;
      whiteList["border-image-repeat"] = true;
      whiteList["border-image-slice"] = true;
      whiteList["border-image-source"] = true;
      whiteList["border-image-width"] = true;
      whiteList["border-left"] = true;
      whiteList["border-left-color"] = true;
      whiteList["border-left-style"] = true;
      whiteList["border-left-width"] = true;
      whiteList["border-radius"] = true;
      whiteList["border-right"] = true;
      whiteList["border-right-color"] = true;
      whiteList["border-right-style"] = true;
      whiteList["border-right-width"] = true;
      whiteList["border-spacing"] = true;
      whiteList["border-style"] = true;
      whiteList["border-top"] = true;
      whiteList["border-top-color"] = true;
      whiteList["border-top-left-radius"] = true;
      whiteList["border-top-right-radius"] = true;
      whiteList["border-top-style"] = true;
      whiteList["border-top-width"] = true;
      whiteList["border-width"] = true;
      whiteList["bottom"] = false;
      whiteList["box-decoration-break"] = true;
      whiteList["box-shadow"] = true;
      whiteList["box-sizing"] = true;
      whiteList["box-snap"] = true;
      whiteList["box-suppress"] = true;
      whiteList["break-after"] = true;
      whiteList["break-before"] = true;
      whiteList["break-inside"] = true;
      whiteList["caption-side"] = false;
      whiteList["chains"] = false;
      whiteList["clear"] = true;
      whiteList["clip"] = false;
      whiteList["clip-path"] = false;
      whiteList["clip-rule"] = false;
      whiteList["color"] = true;
      whiteList["color-interpolation-filters"] = true;
      whiteList["column-count"] = false;
      whiteList["column-fill"] = false;
      whiteList["column-gap"] = false;
      whiteList["column-rule"] = false;
      whiteList["column-rule-color"] = false;
      whiteList["column-rule-style"] = false;
      whiteList["column-rule-width"] = false;
      whiteList["column-span"] = false;
      whiteList["column-width"] = false;
      whiteList["columns"] = false;
      whiteList["contain"] = false;
      whiteList["content"] = false;
      whiteList["counter-increment"] = false;
      whiteList["counter-reset"] = false;
      whiteList["counter-set"] = false;
      whiteList["crop"] = false;
      whiteList["cue"] = false;
      whiteList["cue-after"] = false;
      whiteList["cue-before"] = false;
      whiteList["cursor"] = false;
      whiteList["direction"] = false;
      whiteList["display"] = true;
      whiteList["display-inside"] = true;
      whiteList["display-list"] = true;
      whiteList["display-outside"] = true;
      whiteList["dominant-baseline"] = false;
      whiteList["elevation"] = false;
      whiteList["empty-cells"] = false;
      whiteList["filter"] = false;
      whiteList["flex"] = false;
      whiteList["flex-basis"] = false;
      whiteList["flex-direction"] = false;
      whiteList["flex-flow"] = false;
      whiteList["flex-grow"] = false;
      whiteList["flex-shrink"] = false;
      whiteList["flex-wrap"] = false;
      whiteList["float"] = false;
      whiteList["float-offset"] = false;
      whiteList["flood-color"] = false;
      whiteList["flood-opacity"] = false;
      whiteList["flow-from"] = false;
      whiteList["flow-into"] = false;
      whiteList["font"] = true;
      whiteList["font-family"] = true;
      whiteList["font-feature-settings"] = true;
      whiteList["font-kerning"] = true;
      whiteList["font-language-override"] = true;
      whiteList["font-size"] = true;
      whiteList["font-size-adjust"] = true;
      whiteList["font-stretch"] = true;
      whiteList["font-style"] = true;
      whiteList["font-synthesis"] = true;
      whiteList["font-variant"] = true;
      whiteList["font-variant-alternates"] = true;
      whiteList["font-variant-caps"] = true;
      whiteList["font-variant-east-asian"] = true;
      whiteList["font-variant-ligatures"] = true;
      whiteList["font-variant-numeric"] = true;
      whiteList["font-variant-position"] = true;
      whiteList["font-weight"] = true;
      whiteList["grid"] = false;
      whiteList["grid-area"] = false;
      whiteList["grid-auto-columns"] = false;
      whiteList["grid-auto-flow"] = false;
      whiteList["grid-auto-rows"] = false;
      whiteList["grid-column"] = false;
      whiteList["grid-column-end"] = false;
      whiteList["grid-column-start"] = false;
      whiteList["grid-row"] = false;
      whiteList["grid-row-end"] = false;
      whiteList["grid-row-start"] = false;
      whiteList["grid-template"] = false;
      whiteList["grid-template-areas"] = false;
      whiteList["grid-template-columns"] = false;
      whiteList["grid-template-rows"] = false;
      whiteList["hanging-punctuation"] = false;
      whiteList["height"] = true;
      whiteList["hyphens"] = false;
      whiteList["icon"] = false;
      whiteList["image-orientation"] = false;
      whiteList["image-resolution"] = false;
      whiteList["ime-mode"] = false;
      whiteList["initial-letters"] = false;
      whiteList["inline-box-align"] = false;
      whiteList["justify-content"] = false;
      whiteList["justify-items"] = false;
      whiteList["justify-self"] = false;
      whiteList["left"] = false;
      whiteList["letter-spacing"] = true;
      whiteList["lighting-color"] = true;
      whiteList["line-box-contain"] = false;
      whiteList["line-break"] = false;
      whiteList["line-grid"] = false;
      whiteList["line-height"] = false;
      whiteList["line-snap"] = false;
      whiteList["line-stacking"] = false;
      whiteList["line-stacking-ruby"] = false;
      whiteList["line-stacking-shift"] = false;
      whiteList["line-stacking-strategy"] = false;
      whiteList["list-style"] = true;
      whiteList["list-style-image"] = true;
      whiteList["list-style-position"] = true;
      whiteList["list-style-type"] = true;
      whiteList["margin"] = true;
      whiteList["margin-bottom"] = true;
      whiteList["margin-left"] = true;
      whiteList["margin-right"] = true;
      whiteList["margin-top"] = true;
      whiteList["marker-offset"] = false;
      whiteList["marker-side"] = false;
      whiteList["marks"] = false;
      whiteList["mask"] = false;
      whiteList["mask-box"] = false;
      whiteList["mask-box-outset"] = false;
      whiteList["mask-box-repeat"] = false;
      whiteList["mask-box-slice"] = false;
      whiteList["mask-box-source"] = false;
      whiteList["mask-box-width"] = false;
      whiteList["mask-clip"] = false;
      whiteList["mask-image"] = false;
      whiteList["mask-origin"] = false;
      whiteList["mask-position"] = false;
      whiteList["mask-repeat"] = false;
      whiteList["mask-size"] = false;
      whiteList["mask-source-type"] = false;
      whiteList["mask-type"] = false;
      whiteList["max-height"] = true;
      whiteList["max-lines"] = false;
      whiteList["max-width"] = true;
      whiteList["min-height"] = true;
      whiteList["min-width"] = true;
      whiteList["move-to"] = false;
      whiteList["nav-down"] = false;
      whiteList["nav-index"] = false;
      whiteList["nav-left"] = false;
      whiteList["nav-right"] = false;
      whiteList["nav-up"] = false;
      whiteList["object-fit"] = false;
      whiteList["object-position"] = false;
      whiteList["opacity"] = false;
      whiteList["order"] = false;
      whiteList["orphans"] = false;
      whiteList["outline"] = false;
      whiteList["outline-color"] = false;
      whiteList["outline-offset"] = false;
      whiteList["outline-style"] = false;
      whiteList["outline-width"] = false;
      whiteList["overflow"] = false;
      whiteList["overflow-wrap"] = false;
      whiteList["overflow-x"] = false;
      whiteList["overflow-y"] = false;
      whiteList["padding"] = true;
      whiteList["padding-bottom"] = true;
      whiteList["padding-left"] = true;
      whiteList["padding-right"] = true;
      whiteList["padding-top"] = true;
      whiteList["page"] = false;
      whiteList["page-break-after"] = false;
      whiteList["page-break-before"] = false;
      whiteList["page-break-inside"] = false;
      whiteList["page-policy"] = false;
      whiteList["pause"] = false;
      whiteList["pause-after"] = false;
      whiteList["pause-before"] = false;
      whiteList["perspective"] = false;
      whiteList["perspective-origin"] = false;
      whiteList["pitch"] = false;
      whiteList["pitch-range"] = false;
      whiteList["play-during"] = false;
      whiteList["position"] = false;
      whiteList["presentation-level"] = false;
      whiteList["quotes"] = false;
      whiteList["region-fragment"] = false;
      whiteList["resize"] = false;
      whiteList["rest"] = false;
      whiteList["rest-after"] = false;
      whiteList["rest-before"] = false;
      whiteList["richness"] = false;
      whiteList["right"] = false;
      whiteList["rotation"] = false;
      whiteList["rotation-point"] = false;
      whiteList["ruby-align"] = false;
      whiteList["ruby-merge"] = false;
      whiteList["ruby-position"] = false;
      whiteList["shape-image-threshold"] = false;
      whiteList["shape-outside"] = false;
      whiteList["shape-margin"] = false;
      whiteList["size"] = false;
      whiteList["speak"] = false;
      whiteList["speak-as"] = false;
      whiteList["speak-header"] = false;
      whiteList["speak-numeral"] = false;
      whiteList["speak-punctuation"] = false;
      whiteList["speech-rate"] = false;
      whiteList["stress"] = false;
      whiteList["string-set"] = false;
      whiteList["tab-size"] = false;
      whiteList["table-layout"] = false;
      whiteList["text-align"] = true;
      whiteList["text-align-last"] = true;
      whiteList["text-combine-upright"] = true;
      whiteList["text-decoration"] = true;
      whiteList["text-decoration-color"] = true;
      whiteList["text-decoration-line"] = true;
      whiteList["text-decoration-skip"] = true;
      whiteList["text-decoration-style"] = true;
      whiteList["text-emphasis"] = true;
      whiteList["text-emphasis-color"] = true;
      whiteList["text-emphasis-position"] = true;
      whiteList["text-emphasis-style"] = true;
      whiteList["text-height"] = true;
      whiteList["text-indent"] = true;
      whiteList["text-justify"] = true;
      whiteList["text-orientation"] = true;
      whiteList["text-overflow"] = true;
      whiteList["text-shadow"] = true;
      whiteList["text-space-collapse"] = true;
      whiteList["text-transform"] = true;
      whiteList["text-underline-position"] = true;
      whiteList["text-wrap"] = true;
      whiteList["top"] = false;
      whiteList["transform"] = false;
      whiteList["transform-origin"] = false;
      whiteList["transform-style"] = false;
      whiteList["transition"] = false;
      whiteList["transition-delay"] = false;
      whiteList["transition-duration"] = false;
      whiteList["transition-property"] = false;
      whiteList["transition-timing-function"] = false;
      whiteList["unicode-bidi"] = false;
      whiteList["vertical-align"] = false;
      whiteList["visibility"] = false;
      whiteList["voice-balance"] = false;
      whiteList["voice-duration"] = false;
      whiteList["voice-family"] = false;
      whiteList["voice-pitch"] = false;
      whiteList["voice-range"] = false;
      whiteList["voice-rate"] = false;
      whiteList["voice-stress"] = false;
      whiteList["voice-volume"] = false;
      whiteList["volume"] = false;
      whiteList["white-space"] = false;
      whiteList["widows"] = false;
      whiteList["width"] = true;
      whiteList["will-change"] = false;
      whiteList["word-break"] = true;
      whiteList["word-spacing"] = true;
      whiteList["word-wrap"] = true;
      whiteList["wrap-flow"] = false;
      whiteList["wrap-through"] = false;
      whiteList["writing-mode"] = false;
      whiteList["z-index"] = false;
      return whiteList;
    }
    function onAttr(name, value, options) {
    }
    function onIgnoreAttr(name, value, options) {
    }
    var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
    function safeAttrValue(name, value) {
      if (REGEXP_URL_JAVASCRIPT.test(value)) return "";
      return value;
    }
    exports.whiteList = getDefaultWhiteList();
    exports.getDefaultWhiteList = getDefaultWhiteList;
    exports.onAttr = onAttr;
    exports.onIgnoreAttr = onIgnoreAttr;
    exports.safeAttrValue = safeAttrValue;
  }
});

// ../../node_modules/.bun/cssfilter@0.0.10/node_modules/cssfilter/lib/util.js
var require_util = __commonJS({
  "../../node_modules/.bun/cssfilter@0.0.10/node_modules/cssfilter/lib/util.js"(exports, module2) {
    module2.exports = {
      indexOf: function(arr, item) {
        var i, j;
        if (Array.prototype.indexOf) {
          return arr.indexOf(item);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          if (arr[i] === item) {
            return i;
          }
        }
        return -1;
      },
      forEach: function(arr, fn, scope) {
        var i, j;
        if (Array.prototype.forEach) {
          return arr.forEach(fn, scope);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          fn.call(scope, arr[i], i, arr);
        }
      },
      trim: function(str) {
        if (String.prototype.trim) {
          return str.trim();
        }
        return str.replace(/(^\s*)|(\s*$)/g, "");
      },
      trimRight: function(str) {
        if (String.prototype.trimRight) {
          return str.trimRight();
        }
        return str.replace(/(\s*$)/g, "");
      }
    };
  }
});

// ../../node_modules/.bun/cssfilter@0.0.10/node_modules/cssfilter/lib/parser.js
var require_parser = __commonJS({
  "../../node_modules/.bun/cssfilter@0.0.10/node_modules/cssfilter/lib/parser.js"(exports, module2) {
    var _ = require_util();
    function parseStyle(css, onAttr) {
      css = _.trimRight(css);
      if (css[css.length - 1] !== ";") css += ";";
      var cssLength = css.length;
      var isParenthesisOpen = false;
      var lastPos = 0;
      var i = 0;
      var retCSS = "";
      function addNewAttr() {
        if (!isParenthesisOpen) {
          var source = _.trim(css.slice(lastPos, i));
          var j2 = source.indexOf(":");
          if (j2 !== -1) {
            var name = _.trim(source.slice(0, j2));
            var value = _.trim(source.slice(j2 + 1));
            if (name) {
              var ret = onAttr(lastPos, retCSS.length, name, value, source);
              if (ret) retCSS += ret + "; ";
            }
          }
        }
        lastPos = i + 1;
      }
      for (; i < cssLength; i++) {
        var c = css[i];
        if (c === "/" && css[i + 1] === "*") {
          var j = css.indexOf("*/", i + 2);
          if (j === -1) break;
          i = j + 1;
          lastPos = i + 1;
          isParenthesisOpen = false;
        } else if (c === "(") {
          isParenthesisOpen = true;
        } else if (c === ")") {
          isParenthesisOpen = false;
        } else if (c === ";") {
          if (isParenthesisOpen) {
          } else {
            addNewAttr();
          }
        } else if (c === "\n") {
          addNewAttr();
        }
      }
      return _.trim(retCSS);
    }
    module2.exports = parseStyle;
  }
});

// ../../node_modules/.bun/cssfilter@0.0.10/node_modules/cssfilter/lib/css.js
var require_css = __commonJS({
  "../../node_modules/.bun/cssfilter@0.0.10/node_modules/cssfilter/lib/css.js"(exports, module2) {
    var DEFAULT = require_default();
    var parseStyle = require_parser();
    var _ = require_util();
    function isNull(obj) {
      return obj === void 0 || obj === null;
    }
    function shallowCopyObject(obj) {
      var ret = {};
      for (var i in obj) {
        ret[i] = obj[i];
      }
      return ret;
    }
    function FilterCSS(options) {
      options = shallowCopyObject(options || {});
      options.whiteList = options.whiteList || DEFAULT.whiteList;
      options.onAttr = options.onAttr || DEFAULT.onAttr;
      options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
      options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
      this.options = options;
    }
    FilterCSS.prototype.process = function(css) {
      css = css || "";
      css = css.toString();
      if (!css) return "";
      var me = this;
      var options = me.options;
      var whiteList = options.whiteList;
      var onAttr = options.onAttr;
      var onIgnoreAttr = options.onIgnoreAttr;
      var safeAttrValue = options.safeAttrValue;
      var retCSS = parseStyle(css, function(sourcePosition, position, name, value, source) {
        var check = whiteList[name];
        var isWhite = false;
        if (check === true) isWhite = check;
        else if (typeof check === "function") isWhite = check(value);
        else if (check instanceof RegExp) isWhite = check.test(value);
        if (isWhite !== true) isWhite = false;
        value = safeAttrValue(name, value);
        if (!value) return;
        var opts = {
          position,
          sourcePosition,
          source,
          isWhite
        };
        if (isWhite) {
          var ret = onAttr(name, value, opts);
          if (isNull(ret)) {
            return name + ":" + value;
          } else {
            return ret;
          }
        } else {
          var ret = onIgnoreAttr(name, value, opts);
          if (!isNull(ret)) {
            return ret;
          }
        }
      });
      return retCSS;
    };
    module2.exports = FilterCSS;
  }
});

// ../../node_modules/.bun/cssfilter@0.0.10/node_modules/cssfilter/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.bun/cssfilter@0.0.10/node_modules/cssfilter/lib/index.js"(exports, module2) {
    var DEFAULT = require_default();
    var FilterCSS = require_css();
    function filterCSS(html2, options) {
      var xss2 = new FilterCSS(options);
      return xss2.process(html2);
    }
    exports = module2.exports = filterCSS;
    exports.FilterCSS = FilterCSS;
    for (i in DEFAULT) exports[i] = DEFAULT[i];
    var i;
    if (typeof window !== "undefined") {
      window.filterCSS = module2.exports;
    }
  }
});

// ../../node_modules/.bun/xss@1.0.15/node_modules/xss/lib/util.js
var require_util2 = __commonJS({
  "../../node_modules/.bun/xss@1.0.15/node_modules/xss/lib/util.js"(exports, module2) {
    module2.exports = {
      indexOf: function(arr, item) {
        var i, j;
        if (Array.prototype.indexOf) {
          return arr.indexOf(item);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          if (arr[i] === item) {
            return i;
          }
        }
        return -1;
      },
      forEach: function(arr, fn, scope) {
        var i, j;
        if (Array.prototype.forEach) {
          return arr.forEach(fn, scope);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          fn.call(scope, arr[i], i, arr);
        }
      },
      trim: function(str) {
        if (String.prototype.trim) {
          return str.trim();
        }
        return str.replace(/(^\s*)|(\s*$)/g, "");
      },
      spaceIndex: function(str) {
        var reg = /\s|\n|\t/;
        var match2 = reg.exec(str);
        return match2 ? match2.index : -1;
      }
    };
  }
});

// ../../node_modules/.bun/xss@1.0.15/node_modules/xss/lib/default.js
var require_default2 = __commonJS({
  "../../node_modules/.bun/xss@1.0.15/node_modules/xss/lib/default.js"(exports) {
    var FilterCSS = require_lib().FilterCSS;
    var getDefaultCSSWhiteList = require_lib().getDefaultWhiteList;
    var _ = require_util2();
    function getDefaultWhiteList() {
      return {
        a: ["target", "href", "title"],
        abbr: ["title"],
        address: [],
        area: ["shape", "coords", "href", "alt"],
        article: [],
        aside: [],
        audio: [
          "autoplay",
          "controls",
          "crossorigin",
          "loop",
          "muted",
          "preload",
          "src"
        ],
        b: [],
        bdi: ["dir"],
        bdo: ["dir"],
        big: [],
        blockquote: ["cite"],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ["align", "valign", "span", "width"],
        colgroup: ["align", "valign", "span", "width"],
        dd: [],
        del: ["datetime"],
        details: ["open"],
        div: [],
        dl: [],
        dt: [],
        em: [],
        figcaption: [],
        figure: [],
        font: ["color", "size", "face"],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: ["src", "alt", "title", "width", "height", "loading"],
        ins: ["datetime"],
        kbd: [],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        summary: [],
        sup: [],
        strong: [],
        strike: [],
        table: ["width", "border", "align", "valign"],
        tbody: ["align", "valign"],
        td: ["width", "rowspan", "colspan", "align", "valign"],
        tfoot: ["align", "valign"],
        th: ["width", "rowspan", "colspan", "align", "valign"],
        thead: ["align", "valign"],
        tr: ["rowspan", "align", "valign"],
        tt: [],
        u: [],
        ul: [],
        video: [
          "autoplay",
          "controls",
          "crossorigin",
          "loop",
          "muted",
          "playsinline",
          "poster",
          "preload",
          "src",
          "height",
          "width"
        ]
      };
    }
    var defaultCSSFilter = new FilterCSS();
    function onTag(tag, html2, options) {
    }
    function onIgnoreTag(tag, html2, options) {
    }
    function onTagAttr(tag, name, value) {
    }
    function onIgnoreTagAttr(tag, name, value) {
    }
    function escapeHtml2(html2) {
      return html2.replace(REGEXP_LT2, "&lt;").replace(REGEXP_GT2, "&gt;");
    }
    function safeAttrValue(tag, name, value, cssFilter) {
      value = friendlyAttrValue(value);
      if (name === "href" || name === "src") {
        value = _.trim(value);
        if (value === "#") return "#";
        if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value.substr(0, 11) === "data:image/" || value.substr(0, 6) === "ftp://" || value.substr(0, 2) === "./" || value.substr(0, 3) === "../" || value[0] === "#" || value[0] === "/")) {
          return "";
        }
      } else if (name === "background") {
        REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
          return "";
        }
      } else if (name === "style") {
        REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
          return "";
        }
        REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
          REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
            return "";
          }
        }
        if (cssFilter !== false) {
          cssFilter = cssFilter || defaultCSSFilter;
          value = cssFilter.process(value);
        }
      }
      value = escapeAttrValue3(value);
      return value;
    }
    var REGEXP_LT2 = /</g;
    var REGEXP_GT2 = />/g;
    var REGEXP_QUOTE2 = /"/g;
    var REGEXP_QUOTE_2 = /&quot;/g;
    var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
    var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
    var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
    var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
    var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
    var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
    function escapeQuote2(str) {
      return str.replace(REGEXP_QUOTE2, "&quot;");
    }
    function unescapeQuote(str) {
      return str.replace(REGEXP_QUOTE_2, '"');
    }
    function escapeHtmlEntities(str) {
      return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str2, code) {
        return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
      });
    }
    function escapeDangerHtml5Entities(str) {
      return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
    }
    function clearNonPrintableCharacter(str) {
      var str2 = "";
      for (var i = 0, len = str.length; i < len; i++) {
        str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
      }
      return _.trim(str2);
    }
    function friendlyAttrValue(str) {
      str = unescapeQuote(str);
      str = escapeHtmlEntities(str);
      str = escapeDangerHtml5Entities(str);
      str = clearNonPrintableCharacter(str);
      return str;
    }
    function escapeAttrValue3(str) {
      str = escapeQuote2(str);
      str = escapeHtml2(str);
      return str;
    }
    function onIgnoreTagStripAll() {
      return "";
    }
    function StripTagBody(tags, next) {
      if (typeof next !== "function") {
        next = function() {
        };
      }
      var isRemoveAllTag = !Array.isArray(tags);
      function isRemoveTag(tag) {
        if (isRemoveAllTag) return true;
        return _.indexOf(tags, tag) !== -1;
      }
      var removeList = [];
      var posStart = false;
      return {
        onIgnoreTag: function(tag, html2, options) {
          if (isRemoveTag(tag)) {
            if (options.isClosing) {
              var ret = "[/removed]";
              var end = options.position + ret.length;
              removeList.push([
                posStart !== false ? posStart : options.position,
                end
              ]);
              posStart = false;
              return ret;
            } else {
              if (!posStart) {
                posStart = options.position;
              }
              return "[removed]";
            }
          } else {
            return next(tag, html2, options);
          }
        },
        remove: function(html2) {
          var rethtml = "";
          var lastPos = 0;
          _.forEach(removeList, function(pos) {
            rethtml += html2.slice(lastPos, pos[0]);
            lastPos = pos[1];
          });
          rethtml += html2.slice(lastPos);
          return rethtml;
        }
      };
    }
    function stripCommentTag(html2) {
      var retHtml = "";
      var lastPos = 0;
      while (lastPos < html2.length) {
        var i = html2.indexOf("<!--", lastPos);
        if (i === -1) {
          retHtml += html2.slice(lastPos);
          break;
        }
        retHtml += html2.slice(lastPos, i);
        var j = html2.indexOf("-->", i);
        if (j === -1) {
          break;
        }
        lastPos = j + 3;
      }
      return retHtml;
    }
    function stripBlankChar(html2) {
      var chars = html2.split("");
      chars = chars.filter(function(char) {
        var c = char.charCodeAt(0);
        if (c === 127) return false;
        if (c <= 31) {
          if (c === 10 || c === 13) return true;
          return false;
        }
        return true;
      });
      return chars.join("");
    }
    exports.whiteList = getDefaultWhiteList();
    exports.getDefaultWhiteList = getDefaultWhiteList;
    exports.onTag = onTag;
    exports.onIgnoreTag = onIgnoreTag;
    exports.onTagAttr = onTagAttr;
    exports.onIgnoreTagAttr = onIgnoreTagAttr;
    exports.safeAttrValue = safeAttrValue;
    exports.escapeHtml = escapeHtml2;
    exports.escapeQuote = escapeQuote2;
    exports.unescapeQuote = unescapeQuote;
    exports.escapeHtmlEntities = escapeHtmlEntities;
    exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
    exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
    exports.friendlyAttrValue = friendlyAttrValue;
    exports.escapeAttrValue = escapeAttrValue3;
    exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
    exports.StripTagBody = StripTagBody;
    exports.stripCommentTag = stripCommentTag;
    exports.stripBlankChar = stripBlankChar;
    exports.attributeWrapSign = '"';
    exports.cssFilter = defaultCSSFilter;
    exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
  }
});

// ../../node_modules/.bun/xss@1.0.15/node_modules/xss/lib/parser.js
var require_parser2 = __commonJS({
  "../../node_modules/.bun/xss@1.0.15/node_modules/xss/lib/parser.js"(exports) {
    var _ = require_util2();
    function getTagName(html2) {
      var i = _.spaceIndex(html2);
      var tagName;
      if (i === -1) {
        tagName = html2.slice(1, -1);
      } else {
        tagName = html2.slice(1, i + 1);
      }
      tagName = _.trim(tagName).toLowerCase();
      if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
      if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
      return tagName;
    }
    function isClosing(html2) {
      return html2.slice(0, 2) === "</";
    }
    function parseTag(html2, onTag, escapeHtml2) {
      "use strict";
      var rethtml = "";
      var lastPos = 0;
      var tagStart = false;
      var quoteStart = false;
      var currentPos = 0;
      var len = html2.length;
      var currentTagName = "";
      var currentHtml = "";
      chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
        var c = html2.charAt(currentPos);
        if (tagStart === false) {
          if (c === "<") {
            tagStart = currentPos;
            continue;
          }
        } else {
          if (quoteStart === false) {
            if (c === "<") {
              rethtml += escapeHtml2(html2.slice(lastPos, currentPos));
              tagStart = currentPos;
              lastPos = currentPos;
              continue;
            }
            if (c === ">" || currentPos === len - 1) {
              rethtml += escapeHtml2(html2.slice(lastPos, tagStart));
              currentHtml = html2.slice(tagStart, currentPos + 1);
              currentTagName = getTagName(currentHtml);
              rethtml += onTag(
                tagStart,
                rethtml.length,
                currentTagName,
                currentHtml,
                isClosing(currentHtml)
              );
              lastPos = currentPos + 1;
              tagStart = false;
              continue;
            }
            if (c === '"' || c === "'") {
              var i = 1;
              var ic = html2.charAt(currentPos - i);
              while (ic.trim() === "" || ic === "=") {
                if (ic === "=") {
                  quoteStart = c;
                  continue chariterator;
                }
                ic = html2.charAt(currentPos - ++i);
              }
            }
          } else {
            if (c === quoteStart) {
              quoteStart = false;
              continue;
            }
          }
        }
      }
      if (lastPos < len) {
        rethtml += escapeHtml2(html2.substr(lastPos));
      }
      return rethtml;
    }
    var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;
    function parseAttr(html2, onAttr) {
      "use strict";
      var lastPos = 0;
      var lastMarkPos = 0;
      var retAttrs = [];
      var tmpName = false;
      var len = html2.length;
      function addAttr(name, value) {
        name = _.trim(name);
        name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
        if (name.length < 1) return;
        var ret = onAttr(name, value || "");
        if (ret) retAttrs.push(ret);
      }
      for (var i = 0; i < len; i++) {
        var c = html2.charAt(i);
        var v, j;
        if (tmpName === false && c === "=") {
          tmpName = html2.slice(lastPos, i);
          lastPos = i + 1;
          lastMarkPos = html2.charAt(lastPos) === '"' || html2.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html2, i + 1);
          continue;
        }
        if (tmpName !== false) {
          if (i === lastMarkPos) {
            j = html2.indexOf(c, i + 1);
            if (j === -1) {
              break;
            } else {
              v = _.trim(html2.slice(lastMarkPos + 1, j));
              addAttr(tmpName, v);
              tmpName = false;
              i = j;
              lastPos = i + 1;
              continue;
            }
          }
        }
        if (/\s|\n|\t/.test(c)) {
          html2 = html2.replace(/\s|\n|\t/g, " ");
          if (tmpName === false) {
            j = findNextEqual(html2, i);
            if (j === -1) {
              v = _.trim(html2.slice(lastPos, i));
              addAttr(v);
              tmpName = false;
              lastPos = i + 1;
              continue;
            } else {
              i = j - 1;
              continue;
            }
          } else {
            j = findBeforeEqual(html2, i - 1);
            if (j === -1) {
              v = _.trim(html2.slice(lastPos, i));
              v = stripQuoteWrap(v);
              addAttr(tmpName, v);
              tmpName = false;
              lastPos = i + 1;
              continue;
            } else {
              continue;
            }
          }
        }
      }
      if (lastPos < html2.length) {
        if (tmpName === false) {
          addAttr(html2.slice(lastPos));
        } else {
          addAttr(tmpName, stripQuoteWrap(_.trim(html2.slice(lastPos))));
        }
      }
      return _.trim(retAttrs.join(" "));
    }
    function findNextEqual(str, i) {
      for (; i < str.length; i++) {
        var c = str[i];
        if (c === " ") continue;
        if (c === "=") return i;
        return -1;
      }
    }
    function findNextQuotationMark(str, i) {
      for (; i < str.length; i++) {
        var c = str[i];
        if (c === " ") continue;
        if (c === "'" || c === '"') return i;
        return -1;
      }
    }
    function findBeforeEqual(str, i) {
      for (; i > 0; i--) {
        var c = str[i];
        if (c === " ") continue;
        if (c === "=") return i;
        return -1;
      }
    }
    function isQuoteWrapString(text) {
      if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
        return true;
      } else {
        return false;
      }
    }
    function stripQuoteWrap(text) {
      if (isQuoteWrapString(text)) {
        return text.substr(1, text.length - 2);
      } else {
        return text;
      }
    }
    exports.parseTag = parseTag;
    exports.parseAttr = parseAttr;
  }
});

// ../../node_modules/.bun/xss@1.0.15/node_modules/xss/lib/xss.js
var require_xss = __commonJS({
  "../../node_modules/.bun/xss@1.0.15/node_modules/xss/lib/xss.js"(exports, module2) {
    var FilterCSS = require_lib().FilterCSS;
    var DEFAULT = require_default2();
    var parser = require_parser2();
    var parseTag = parser.parseTag;
    var parseAttr = parser.parseAttr;
    var _ = require_util2();
    function isNull(obj) {
      return obj === void 0 || obj === null;
    }
    function getAttrs(html2) {
      var i = _.spaceIndex(html2);
      if (i === -1) {
        return {
          html: "",
          closing: html2[html2.length - 2] === "/"
        };
      }
      html2 = _.trim(html2.slice(i + 1, -1));
      var isClosing = html2[html2.length - 1] === "/";
      if (isClosing) html2 = _.trim(html2.slice(0, -1));
      return {
        html: html2,
        closing: isClosing
      };
    }
    function shallowCopyObject(obj) {
      var ret = {};
      for (var i in obj) {
        ret[i] = obj[i];
      }
      return ret;
    }
    function keysToLowerCase(obj) {
      var ret = {};
      for (var i in obj) {
        if (Array.isArray(obj[i])) {
          ret[i.toLowerCase()] = obj[i].map(function(item) {
            return item.toLowerCase();
          });
        } else {
          ret[i.toLowerCase()] = obj[i];
        }
      }
      return ret;
    }
    function FilterXSS(options) {
      options = shallowCopyObject(options || {});
      if (options.stripIgnoreTag) {
        if (options.onIgnoreTag) {
          console.error(
            'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
          );
        }
        options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
      }
      if (options.whiteList || options.allowList) {
        options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
      } else {
        options.whiteList = DEFAULT.whiteList;
      }
      this.attributeWrapSign = options.singleQuotedAttributeValue === true ? "'" : DEFAULT.attributeWrapSign;
      options.onTag = options.onTag || DEFAULT.onTag;
      options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
      options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
      options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
      options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
      options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
      this.options = options;
      if (options.css === false) {
        this.cssFilter = false;
      } else {
        options.css = options.css || {};
        this.cssFilter = new FilterCSS(options.css);
      }
    }
    FilterXSS.prototype.process = function(html2) {
      html2 = html2 || "";
      html2 = html2.toString();
      if (!html2) return "";
      var me = this;
      var options = me.options;
      var whiteList = options.whiteList;
      var onTag = options.onTag;
      var onIgnoreTag = options.onIgnoreTag;
      var onTagAttr = options.onTagAttr;
      var onIgnoreTagAttr = options.onIgnoreTagAttr;
      var safeAttrValue = options.safeAttrValue;
      var escapeHtml2 = options.escapeHtml;
      var attributeWrapSign = me.attributeWrapSign;
      var cssFilter = me.cssFilter;
      if (options.stripBlankChar) {
        html2 = DEFAULT.stripBlankChar(html2);
      }
      if (!options.allowCommentTag) {
        html2 = DEFAULT.stripCommentTag(html2);
      }
      var stripIgnoreTagBody = false;
      if (options.stripIgnoreTagBody) {
        stripIgnoreTagBody = DEFAULT.StripTagBody(
          options.stripIgnoreTagBody,
          onIgnoreTag
        );
        onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
      }
      var retHtml = parseTag(
        html2,
        function(sourcePosition, position, tag, html3, isClosing) {
          var info = {
            sourcePosition,
            position,
            isClosing,
            isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag)
          };
          var ret = onTag(tag, html3, info);
          if (!isNull(ret)) return ret;
          if (info.isWhite) {
            if (info.isClosing) {
              return "</" + tag + ">";
            }
            var attrs = getAttrs(html3);
            var whiteAttrList = whiteList[tag];
            var attrsHtml = parseAttr(attrs.html, function(name, value) {
              var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
              var ret2 = onTagAttr(tag, name, value, isWhiteAttr);
              if (!isNull(ret2)) return ret2;
              if (isWhiteAttr) {
                value = safeAttrValue(tag, name, value, cssFilter);
                if (value) {
                  return name + "=" + attributeWrapSign + value + attributeWrapSign;
                } else {
                  return name;
                }
              } else {
                ret2 = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
                if (!isNull(ret2)) return ret2;
                return;
              }
            });
            html3 = "<" + tag;
            if (attrsHtml) html3 += " " + attrsHtml;
            if (attrs.closing) html3 += " /";
            html3 += ">";
            return html3;
          } else {
            ret = onIgnoreTag(tag, html3, info);
            if (!isNull(ret)) return ret;
            return escapeHtml2(html3);
          }
        },
        escapeHtml2
      );
      if (stripIgnoreTagBody) {
        retHtml = stripIgnoreTagBody.remove(retHtml);
      }
      return retHtml;
    };
    module2.exports = FilterXSS;
  }
});

// ../../node_modules/.bun/xss@1.0.15/node_modules/xss/lib/index.js
var require_lib2 = __commonJS({
  "../../node_modules/.bun/xss@1.0.15/node_modules/xss/lib/index.js"(exports, module2) {
    var DEFAULT = require_default2();
    var parser = require_parser2();
    var FilterXSS = require_xss();
    function filterXSS(html2, options) {
      var xss2 = new FilterXSS(options);
      return xss2.process(html2);
    }
    exports = module2.exports = filterXSS;
    exports.filterXSS = filterXSS;
    exports.FilterXSS = FilterXSS;
    (function() {
      for (var i in DEFAULT) {
        exports[i] = DEFAULT[i];
      }
      for (var j in parser) {
        exports[j] = parser[j];
      }
    })();
    if (typeof window !== "undefined") {
      window.filterXSS = module2.exports;
    }
    function isWorkerEnv() {
      return typeof self !== "undefined" && typeof DedicatedWorkerGlobalScope !== "undefined" && self instanceof DedicatedWorkerGlobalScope;
    }
    if (isWorkerEnv()) {
      self.filterXSS = module2.exports;
    }
  }
});

// ../../node_modules/.bun/cookie@1.0.2/node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/.bun/cookie@1.0.2/node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = parse2;
    exports.serialize = serialize;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C = function() {
      };
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parse2(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode;
      let index = 0;
      do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1)
          break;
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        if (obj[key] === void 0) {
          let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
          let valEndIdx = endIndex(str, endIdx, valStartIdx);
          const value = dec(str.slice(valStartIdx, valEndIdx));
          obj[key] = value;
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function startIndex(str, index, max) {
      do {
        const code = str.charCodeAt(index);
        if (code !== 32 && code !== 9)
          return index;
      } while (++index < max);
      return max;
    }
    function endIndex(str, index, min) {
      while (index > min) {
        const code = str.charCodeAt(--index);
        if (code !== 32 && code !== 9)
          return index + 1;
      }
      return min;
    }
    function serialize(name, val, options) {
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
      }
      const value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
      }
      let str = name + "=" + value;
      if (!options)
        return str;
      if (options.maxAge !== void 0) {
        if (!Number.isInteger(options.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
      }
      if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
          throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
      }
      if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
          throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
      }
      if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
      }
      if (options.httpOnly) {
        str += "; HttpOnly";
      }
      if (options.secure) {
        str += "; Secure";
      }
      if (options.partitioned) {
        str += "; Partitioned";
      }
      if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
      }
      if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
      }
      return str;
    }
    function decode(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
  }
});

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match2, index) => {
    const mark = `@${index}`;
    groups.push([mark, match2]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label, next) => {
  if (label === "*") {
    return "*";
  }
  const match2 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match2) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match2[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match2[1], new RegExp(`^${match2[2]}(?=/${next})`)] : [label, match2[1], new RegExp(`^${match2[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match2[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
};
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match2) => {
      try {
        return decoder(match2);
      } catch {
        return match2;
      }
    });
  }
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const hashIndex = url.indexOf("#", i);
      const end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
      const path = url.slice(start, end);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63 || charCode === 35) {
      break;
    }
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
var mergePath = (base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
};
var checkOptionalParameter = (path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1) {
      return void 0;
    }
    if (!url.startsWith(key, keyIndex2 + 1)) {
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/middleware/serve-static/index.js
var ENCODINGS = {
  br: ".br",
  zstd: ".zst",
  gzip: ".gz"
};
var ENCODINGS_ORDERED_KEYS = Object.keys(ENCODINGS);

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/helper/websocket/index.js
var WSContext = class {
  #init;
  constructor(init) {
    this.#init = init;
    this.raw = init.raw;
    this.url = init.url ? new URL(init.url) : null;
    this.protocol = init.protocol ?? null;
  }
  send(source, options) {
    this.#init.send(source, options ?? {});
  }
  raw;
  binaryType = "arraybuffer";
  get readyState() {
    return this.#init.readyState;
  }
  url;
  protocol;
  close(code, reason) {
    this.#init.close(code, reason);
  }
};
var defineWebSocketHelper = (handler99) => {
  return ((...args) => {
    if (typeof args[0] === "function") {
      const [createEvents, options] = args;
      return async function upgradeWebSocket2(c, next) {
        const events = await createEvents(c);
        const result = await handler99(c, events, options);
        if (result) {
          return result;
        }
        await next();
      };
    } else {
      const [c, events, options] = args;
      return (async () => {
        const upgraded = await handler99(c, events, options);
        if (!upgraded) {
          throw new Error("Failed to upgrade WebSocket");
        }
        return upgraded;
      })();
    }
  });
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/adapter/cloudflare-workers/websocket.js
var upgradeWebSocket = defineWebSocketHelper(async (c, events) => {
  const upgradeHeader = c.req.header("Upgrade");
  if (upgradeHeader !== "websocket") {
    return;
  }
  const webSocketPair = new WebSocketPair();
  const client = webSocketPair[0];
  const server = webSocketPair[1];
  const wsContext = new WSContext({
    close: (code, reason) => server.close(code, reason),
    get protocol() {
      return server.protocol;
    },
    raw: server,
    get readyState() {
      return server.readyState;
    },
    url: server.url ? new URL(server.url) : null,
    send: (source) => server.send(source)
  });
  if (events.onClose) {
    server.addEventListener("close", (evt) => events.onClose?.(evt, wsContext));
  }
  if (events.onMessage) {
    server.addEventListener("message", (evt) => events.onMessage?.(evt, wsContext));
  }
  if (events.onError) {
    server.addEventListener("error", (evt) => events.onError?.(evt, wsContext));
  }
  server.accept?.();
  return new Response(null, {
    status: 101,
    // @ts-expect-error - webSocket is not typed
    webSocket: client
  });
});

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/adapter/cloudflare-workers/conninfo.js
var getConnInfo = (c) => ({
  remote: {
    address: c.req.header("cf-connecting-ip")
  }
});

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/request/constants.js
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
};
var handleParsingNestedValues = (form, key, value) => {
  if (/(?:^|\.)__proto__\./.test(key)) {
    return;
  }
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var escapeRe = /[&<>'"]/;
var stringBufferToString = async (buffer, callbacks) => {
  let str = "";
  callbacks ||= [];
  const resolvedBuffer = await Promise.all(buffer);
  for (let i = resolvedBuffer.length - 1; ; i--) {
    str += resolvedBuffer[i];
    i--;
    if (i < 0) {
      break;
    }
    let r = resolvedBuffer[i];
    if (typeof r === "object") {
      callbacks.push(...r.callbacks || []);
    }
    const isEscaped = r.isEscaped;
    r = await (typeof r === "object" ? r.toString() : r);
    if (typeof r === "object") {
      callbacks.push(...r.callbacks || []);
    }
    if (r.isEscaped ?? isEscaped) {
      str += r;
    } else {
      const buf = [str];
      escapeToBuffer(r, buf);
      str = buf[0];
    }
  }
  return raw(str, callbacks);
};
var escapeToBuffer = (str, buffer) => {
  const match2 = str.search(escapeRe);
  if (match2 === -1) {
    buffer[0] += str;
    return;
  }
  let escape;
  let index;
  let lastIndex = 0;
  for (index = match2; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escape = "&quot;";
        break;
      case 39:
        escape = "&#39;";
        break;
      case 38:
        escape = "&amp;";
        break;
      case 60:
        escape = "&lt;";
        break;
      case 62:
        escape = "&gt;";
        break;
      default:
        continue;
    }
    buffer[0] += str.substring(lastIndex, index) + escape;
    lastIndex = index + 1;
  }
  buffer[0] += str.substring(lastIndex, index);
};
var resolveCallbackSync = (str) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return str;
  }
  const buffer = [str];
  const context = {};
  callbacks.forEach((c) => c({ phase: HtmlEscapedCallbackPhase.Stringify, buffer, context }));
  return buffer[0];
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = (contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
};
var createResponseInstance = (body, init) => new Response(body, init);
var Context = class {
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = false;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= createResponseInstance(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = (layout) => this.#layout = layout;
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = () => this.#layout;
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = (name, value, options) => {
    if (this.finalized) {
      this.#res = createResponseInstance(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  };
  status = (status) => {
    this.#status = status;
  };
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          responseHeaders.set(k, v);
        } else {
          responseHeaders.delete(k);
          for (const v2 of v) {
            responseHeaders.append(k, v2);
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, { status, headers: responseHeaders });
  }
  newResponse = (...args) => this.#newResponse(...args);
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = (data, arg, headers) => this.#newResponse(data, arg, headers);
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = (text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
      text,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  };
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = (object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  };
  html = (html2, arg, headers) => {
    const res = (html22) => this.#newResponse(html22, arg, setDefaultContentType("text/html; charset=UTF-8", headers));
    return typeof html2 === "object" ? resolveCallback(html2, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html2);
  };
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = (location, status) => {
    const locationString = String(location);
    this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status ?? 302);
  };
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = () => {
    this.#notFoundHandler ??= () => createResponseInstance();
    return this.#notFoundHandler(this);
  };
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/middleware/timing/timing.js
var getTime = () => {
  try {
    return performance.now();
  } catch {
  }
  return Date.now();
};
var timing = (config) => {
  const options = {
    total: true,
    enabled: true,
    totalDescription: "Total Response Time",
    autoEnd: true,
    crossOrigin: false,
    ...config
  };
  return async function timing2(c, next) {
    const headers = [];
    const timers = /* @__PURE__ */ new Map();
    if (c.get("metric")) {
      return await next();
    }
    c.set("metric", { headers, timers });
    if (options.total) {
      startTime(c, "total", options.totalDescription);
    }
    await next();
    if (options.total) {
      endTime(c, "total");
    }
    if (options.autoEnd) {
      timers.forEach((_, key) => endTime(c, key));
    }
    const enabled = typeof options.enabled === "function" ? options.enabled(c) : options.enabled;
    if (enabled) {
      c.res.headers.append("Server-Timing", headers.join(","));
      const crossOrigin = typeof options.crossOrigin === "function" ? options.crossOrigin(c) : options.crossOrigin;
      if (crossOrigin) {
        c.res.headers.append(
          "Timing-Allow-Origin",
          typeof crossOrigin === "string" ? crossOrigin : "*"
        );
      }
    }
  };
};
var setMetric = (c, name, valueDescription, description, precision) => {
  const metrics = c.get("metric");
  if (!metrics) {
    console.warn("Metrics not initialized! Please add the `timing()` middleware to this route!");
    return;
  }
  if (typeof valueDescription === "number") {
    const dur = valueDescription.toFixed(precision || 1);
    const metric = description ? `${name};dur=${dur};desc="${description}"` : `${name};dur=${dur}`;
    metrics.headers.push(metric);
  } else {
    const metric = valueDescription ? `${name};desc="${valueDescription}"` : `${name}`;
    metrics.headers.push(metric);
  }
};
var startTime = (c, name, description) => {
  const metrics = c.get("metric");
  if (!metrics) {
    console.warn("Metrics not initialized! Please add the `timing()` middleware to this route!");
    return;
  }
  metrics.timers.set(name, { description, start: getTime() });
};
var endTime = (c, name, precision) => {
  const metrics = c.get("metric");
  if (!metrics) {
    console.warn("Metrics not initialized! Please add the `timing()` middleware to this route!");
    return;
  }
  const timer = metrics.timers.get(name);
  if (!timer) {
    console.warn(`Timer "${name}" does not exist!`);
    return;
  }
  const { description, start } = timer;
  const duration = getTime() - start;
  setMetric(c, name, duration, description, precision);
  metrics.timers.delete(name);
};

// ../ssr/dist/rendering/equals.js
var import_fast_deep_equal = __toESM(require_fast_deep_equal(), 1);
var initIsEqual = () => {
  const toddle = {
    isEqual: import_fast_deep_equal.default
  };
  globalThis.toddle = toddle;
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler99;
      if (middleware[i]) {
        handler99 = middleware[i][0][0];
        context.req.routeIndex = i;
      } else {
        handler99 = i === middleware.length && next || void 0;
      }
      if (handler99) {
        try {
          res = await handler99(context, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class _Hono {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler99) => {
          this.#addRoute(method, this.#path, handler99);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler99) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler99);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler99) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler99);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler99;
      if (app2.errorHandler === errorHandler) {
        handler99 = r.handler;
      } else {
        handler99 = async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res;
        handler99[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler99);
    });
    return this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = (handler99) => {
    this.errorHandler = handler99;
    return this;
  };
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = (handler99) => {
    this.#notFoundHandler = handler99;
    return this;
  };
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = (request) => request;
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler99 = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler99);
    return this;
  }
  #addRoute(method, path, handler99) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { basePath: this._basePath, path, method, handler: handler99 };
    this.router.add(method, path, [handler99, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} Env - env Object
   * @param {ExecutionContext} - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  };
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  };
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/router/reg-exp-router/matcher.js
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match2 = ((method2, path2) => {
    const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
    const staticMatch = matcher[2][path2];
    if (staticMatch) {
      return staticMatch;
    }
    const match3 = path2.match(matcher[0]);
    if (!match3) {
      return [[], emptyParam];
    }
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  });
  this.match = match2;
  return match2(method, path);
}

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class _Node {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        if (regexpStr === ".*") {
          throw PATH_ERROR;
        }
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new _Node();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new _Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/router/reg-exp-router/router.js
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes2) {
  const trie = new Trie();
  const handlerData = [];
  if (routes2.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes2.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler99) {
    const middleware = this.#middleware;
    const routes2 = this.#routes;
    if (!middleware || !routes2) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes2].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler99, paramCount]);
          });
        }
      });
      Object.keys(routes2).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes2[m]).forEach(
            (p) => re.test(p) && routes2[m][p].push([handler99, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes2).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes2[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes2[m][path2].push([handler99, paramCount - len + i + 1]);
        }
      });
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    clearWildcardRegExpCache();
    return matchers;
  }
  #buildMatcher(method) {
    const routes2 = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes2.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes2.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes2);
    }
  }
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler99) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler99]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes2 = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes2.length; i2 < len2; i2++) {
          router.add(...routes2[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/router/trie-router/node.js
var emptyParams = /* @__PURE__ */ Object.create(null);
var hasChildren = (children) => {
  for (const _ in children) {
    return true;
  }
  return false;
};
var Node2 = class _Node2 {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler99, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler99) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler: handler99, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler99) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new _Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler: handler99,
        possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
        score: this.#order
      }
    });
    return curNode;
  }
  #pushHandlerSets(handlerSets, node, method, nodeParams, params) {
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    const len = parts.length;
    let partOffsets = null;
    for (let i = 0; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              this.#pushHandlerSets(handlerSets, nextNode.#children["*"], method, node.#params);
            }
            this.#pushHandlerSets(handlerSets, nextNode, method, node.#params);
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              this.#pushHandlerSets(handlerSets, astNode, method, node.#params);
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          const [key, name, matcher] = pattern;
          if (!part && !(matcher instanceof RegExp)) {
            continue;
          }
          const child = node.#children[key];
          if (matcher instanceof RegExp) {
            if (partOffsets === null) {
              partOffsets = new Array(len);
              let offset = path[0] === "/" ? 1 : 0;
              for (let p = 0; p < len; p++) {
                partOffsets[p] = offset;
                offset += parts[p].length + 1;
              }
            }
            const restPathString = path.substring(partOffsets[i]);
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              this.#pushHandlerSets(handlerSets, child, method, node.#params, params);
              if (hasChildren(child.#children)) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              this.#pushHandlerSets(handlerSets, child, method, params, node.#params);
              if (child.#children["*"]) {
                this.#pushHandlerSets(
                  handlerSets,
                  child.#children["*"],
                  method,
                  params,
                  node.#params
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      const shifted = curNodesQueue.shift();
      curNodes = shifted ? tempNodes.concat(shifted) : tempNodes;
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler: handler99, params }) => [handler99, params])];
  }
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler99) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler99);
      }
      return;
    }
    this.#node.insert(method, path, handler99);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  /**
   * Creates an instance of the Hono class.
   *
   * @param options - Optional configuration options for the Hono instance.
   */
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/middleware/powered-by/index.js
var poweredBy = (options) => {
  return async function poweredBy2(c, next) {
    await next();
    c.res.headers.set("X-Powered-By", options?.serverName ?? "Hono");
  };
};

// ../core/dist/utils/util.js
var isDefined = (value) => value !== null && value !== void 0;
var isObject = (input) => typeof input === "object" && input !== null;
var toBoolean = (value) => value !== false && value !== void 0 && value !== null;

// ../core/dist/component/isPageComponent.js
var isPageComponent = (component) => isDefined(component.route);

// ../core/dist/formula/andFormula.js
var applyAndFormula = (formula, ctx) => {
  for (let i = 0; i < (formula.arguments ?? []).length; i++) {
    const arg = (formula.arguments ?? [])[i];
    if (!toBoolean(applyFormula(arg?.formula, ctx, ["arguments", i, "formula"]))) {
      return false;
    }
  }
  return true;
};
var applyEvaluateAllAndFormula = (formula, ctx) => {
  let andResult = true;
  if (!formula.arguments || formula.arguments.length === 0) {
    return andResult;
  }
  for (let i = 0; i < (formula.arguments ?? []).length; i++) {
    const arg = (formula.arguments ?? [])[i];
    if (!toBoolean(applyFormula(arg?.formula, ctx, ["arguments", i, "formula"]))) {
      andResult = false;
    }
  }
  return andResult;
};

// ../core/dist/utils/measure.js
var globalScope = typeof globalThis !== "undefined" ? globalThis : window;
globalScope.__nc_measure_max_depth = typeof sessionStorage !== "undefined" && sessionStorage.getItem("__nc_measure_max_depth") ? parseInt(sessionStorage.getItem("__nc_measure_max_depth")) : 10;
globalScope.__nc_measure_enabled = typeof sessionStorage !== "undefined" && sessionStorage.getItem("__nc_measure") === "true";
globalScope.__nc_enableMeasure = (enabled = true, maxDepth = 10) => {
  if (enabled) {
    sessionStorage.setItem("__nc_measure", "true");
    sessionStorage.setItem("__nc_measure_max_depth", String(maxDepth));
  } else {
    sessionStorage.removeItem("__nc_measure");
    sessionStorage.removeItem("__nc_measure_max_depth");
  }
  globalScope.__nc_measure_enabled = enabled;
  globalScope.__nc_measure_max_depth = maxDepth;
};
var measureCount = 0;
var STACK = [];
var NOOP = () => {
};
var measure = (key, details, type) => {
  if (!globalScope.__nc_measure_enabled) {
    return NOOP;
  }
  const selfIndex = measureCount++;
  const selfStackSize = STACK.length;
  if (selfStackSize >= globalScope.__nc_measure_max_depth) {
    return NOOP;
  }
  if (STACK.length >= globalScope.__nc_measure_max_depth) {
    return NOOP;
  }
  const start = performance.now() + selfStackSize * 1e-3;
  STACK.push(key);
  let _stopped = false;
  return (extraDetails) => {
    if (_stopped) {
      return;
    }
    _stopped = true;
    const end = performance.now() + selfStackSize * 1e-3;
    const mergedDetails = extraDetails ? { ...details, ...extraDetails } : details;
    performance.measure(key, {
      start,
      end,
      detail: {
        devtools: {
          dataType: "track-entry",
          track: "Nordcraft devtools",
          color: COLOR_MAP[type],
          properties: [
            ...Object.entries(mergedDetails).map(([k, v]) => [k, String(v)]),
            ["Stack", STACK.join(" > ")],
            ["Measure index", selfIndex],
            ["Sub-measures", measureCount - selfIndex]
          ],
          tooltipText: `${selfIndex}. ${key}`
        }
      }
    });
    STACK.pop();
  };
};
var COLOR_MAP = {
  component: "secondary"
};

// ../core/dist/formula/applyFormula.js
var applyApplyFormula = (formula, ctx) => {
  const componentFormula = ctx.component?.formulas?.[formula.name];
  if (!componentFormula) {
    if (ctx.env?.logErrors) {
      console.log("Component does not have a formula with the name ", formula.name);
    }
    return null;
  }
  const stopMeasure = measure(`Formula: ${componentFormula.name}`, {
    formula,
    component: ctx.component?.name
  });
  const Input = Object.fromEntries((formula.arguments ?? []).map((arg, i) => arg.isFunction ? [
    arg.name,
    (Args) => applyFormula(arg.formula, {
      ...ctx,
      data: {
        ...ctx.data,
        Args: ctx.data.Args ? { ...Args, "@toddle.parent": ctx.data.Args } : Args
      }
    }, ["arguments", i])
  ] : [arg.name, applyFormula(arg.formula, ctx, ["arguments", i])]));
  const data = {
    ...ctx.data,
    Args: ctx.data.Args ? { ...Input, "@toddle.parent": ctx.data.Args } : Input
  };
  const cache = ctx.formulaCache?.[formula.name]?.get(data);
  if (cache?.hit) {
    stopMeasure({ cache: "hit" });
    return cache.data;
  } else {
    const result = applyFormula(componentFormula.formula, {
      ...ctx,
      data
    }, ["formula"]);
    ctx.formulaCache?.[formula.name]?.set(data, result);
    stopMeasure({ cache: "miss" });
    return result;
  }
};

// ../core/dist/formula/arrayFormula.js
var applyArrayFormula = (formula, ctx) => {
  return (formula.arguments ?? []).map((entry, i) => applyFormula(entry.formula, ctx, ["arguments", i, "formula"]));
};

// ../core/dist/formula/functionFormula.js
var applyFunctionFormula = (formula, ctx) => {
  const stopMeasure = measure(`Formula: ${formula.name}`, {
    formula,
    component: ctx.component?.name
  });
  const packageName = formula.package ?? ctx.package ?? void 0;
  const newFunc = (ctx.toddle ?? globalThis.toddle)?.getCustomFormula(formula.name, packageName);
  if (isDefined(newFunc)) {
    ctx.package = packageName;
    const args = (formula.arguments ?? []).reduce((args2, arg, i) => ({
      ...args2,
      [arg.name ?? `${i}`]: arg.isFunction ? (Args) => applyFormula(arg.formula, {
        ...ctx,
        data: {
          ...ctx.data,
          Args: ctx.data.Args ? { ...Args, "@toddle.parent": ctx.data.Args } : Args
        }
      }, ["arguments", i]) : applyFormula(arg.formula, ctx, ["arguments", i])
    }), {});
    try {
      if (isToddleFormula(newFunc)) {
        return applyFormula(newFunc.formula, {
          ...ctx,
          data: { ...ctx.data, Args: args }
        }, ["formula"]);
      } else {
        return newFunc.handler(args, {
          root: ctx.root ?? document,
          env: ctx.env
        });
      }
    } catch (e) {
      ctx.toddle.errors.push(e);
      if (ctx.env?.logErrors) {
        console.error(e);
      }
      return null;
    } finally {
      stopMeasure();
    }
  } else {
    const legacyFunc = (ctx.toddle ?? globalThis.toddle).getFormula(formula.name);
    if (typeof legacyFunc === "function") {
      const args = (formula.arguments ?? []).map((arg, i) => arg.isFunction ? (Args) => applyFormula(arg.formula, {
        ...ctx,
        data: {
          ...ctx.data,
          Args: ctx.data.Args ? { ...Args, "@toddle.parent": ctx.data.Args } : Args
        }
      }, ["arguments", i]) : applyFormula(arg.formula, ctx, ["arguments", i]));
      try {
        return legacyFunc(args, ctx);
      } catch (e) {
        ctx.toddle.errors.push(e);
        if (ctx.env?.logErrors) {
          console.error(e);
        }
        return null;
      } finally {
        stopMeasure();
      }
    }
  }
  if (ctx.env?.logErrors) {
    console.error(`Could not find formula ${formula.name} in package ${packageName ?? ""}`, formula);
  }
  return null;
};

// ../core/dist/formula/objectFormula.js
var applyObjectFormula = (formula, ctx) => {
  return Object.fromEntries(formula.arguments?.map((entry, i) => [
    entry.name,
    applyFormula(entry.formula, ctx, ["arguments", i, "formula"])
  ]) ?? []);
};

// ../core/dist/formula/orFormula.js
var applyOrFormula = (formula, ctx) => {
  for (let i = 0; i < (formula.arguments ?? []).length; i++) {
    const arg = (formula.arguments ?? [])[i];
    if (toBoolean(applyFormula(arg?.formula, ctx, ["arguments", i, "formula"]))) {
      return true;
    }
  }
  return false;
};
var applyEvaluateAllOrFormula = (formula, ctx) => {
  let orResult = false;
  for (let i = 0; i < (formula.arguments ?? []).length; i++) {
    const arg = (formula.arguments ?? [])[i];
    const argResult = applyFormula(arg?.formula, ctx, [
      "arguments",
      i,
      "formula"
    ]);
    if (toBoolean(argResult)) {
      orResult = true;
    }
  }
  return orResult;
};

// ../core/dist/formula/pathFormula.js
var applyPathFormula = (formula, data) => {
  let input = data;
  for (const key of formula.path) {
    if (input && typeof input === "object") {
      input = input[key];
    } else {
      return null;
    }
  }
  return input;
};

// ../core/dist/formula/recordFormula.js
var applyRecordFormula = (formula, ctx) => {
  return Object.fromEntries((formula.entries ?? []).map((entry, i) => [
    entry.name,
    applyFormula(entry.formula, ctx, ["entries", i, "formula"])
  ]));
};

// ../core/dist/formula/switchFormula.js
var applySwitchFormula = (formula, ctx) => {
  for (let i = 0; i < (formula.cases ?? []).length; i++) {
    const switchCase = (formula.cases ?? [])[i];
    if (toBoolean(applyFormula(switchCase?.condition, ctx, ["cases", i, "condition"]))) {
      return applyFormula(switchCase?.formula, ctx, ["cases", i, "formula"]);
    }
  }
  return applyFormula(formula.default, ctx, ["default"]);
};
var applyEvaluateAllSwitchFormula = (formula, ctx) => {
  let switchResult = null;
  for (let i = 0; i < (formula.cases ?? []).length; i++) {
    const switchCase = (formula.cases ?? [])[i];
    const conditionValue = applyFormula(switchCase?.condition, ctx, [
      "cases",
      i,
      "condition"
    ]);
    const formulaValue = applyFormula(switchCase?.formula, ctx, [
      "cases",
      i,
      "formula"
    ]);
    if (toBoolean(conditionValue) && switchResult === null) {
      switchResult = { match: true, value: formulaValue };
    }
  }
  const defaultValue = applyFormula(formula.default, ctx, ["default"]);
  if (switchResult !== null) {
    return switchResult.value;
  } else {
    return defaultValue;
  }
};

// ../core/dist/formula/formula.js
var MAX_REPORT_DEPTH = 64;
function isFormula(f) {
  return f && typeof f === "object" && typeof f.type === "string" && [
    "path",
    "function",
    "record",
    "object",
    "array",
    "or",
    "and",
    "apply",
    "value",
    "switch"
  ].includes(f.type);
}
var isToddleFormula = (formula) => Object.hasOwn(formula, "formula") && isDefined(formula.formula);
function applyFormula(formula, _ctx, extendedPath) {
  const path = [..._ctx?.jsonPath ?? [], ...extendedPath ?? []];
  const ctx = { ..._ctx, jsonPath: path };
  const report = (value, p = path) => {
    ctx?.reportFormulaEvaluation?.(p, value, ctx);
    return value;
  };
  if (!isFormula(formula)) {
    return report(formula);
  }
  try {
    switch (formula.type) {
      case "value": {
        return report(formula.value);
      }
      case "path": {
        return report(applyPathFormula(formula, ctx.data));
      }
      case "switch": {
        if (ctx.reportFormulaEvaluation && ctx.jsonPath.length < MAX_REPORT_DEPTH) {
          return report(applyEvaluateAllSwitchFormula(formula, ctx));
        }
        return applySwitchFormula(formula, ctx);
      }
      case "or": {
        if (ctx.reportFormulaEvaluation && ctx.jsonPath.length < MAX_REPORT_DEPTH) {
          return report(applyEvaluateAllOrFormula(formula, ctx));
        }
        return applyOrFormula(formula, ctx);
      }
      case "and": {
        if (ctx.reportFormulaEvaluation && ctx.jsonPath.length < MAX_REPORT_DEPTH) {
          return report(applyEvaluateAllAndFormula(formula, ctx));
        }
        return applyAndFormula(formula, ctx);
      }
      case "object": {
        return report(applyObjectFormula(formula, ctx));
      }
      case "record": {
        return report(applyRecordFormula(formula, ctx));
      }
      case "array": {
        return report(applyArrayFormula(formula, ctx));
      }
      case "function": {
        return report(applyFunctionFormula(formula, ctx));
      }
      case "apply": {
        return report(applyApplyFormula(formula, ctx));
      }
      default:
        if (ctx.env?.logErrors) {
          console.error("Could not recognize formula", formula);
        }
    }
  } catch (e) {
    if (ctx.env?.logErrors) {
      console.error(e);
    }
    return report(null);
  }
  return report(void 0);
}

// ../core/dist/utils/collections.js
var mapObject = (object, f) => {
  const result = {};
  for (const key in object) {
    const [k, v] = f([key, object[key]]);
    result[k] = v;
  }
  return result;
};
var mapValues = (object, f) => mapObject(object, ([key, value]) => [key, f(value)]);
var omitKeys = (object, keys) => Object.fromEntries(Object.entries(object).filter(([k]) => !keys.includes(k)));
var filterObject = (object, f) => Object.fromEntries(Object.entries(object).filter(f));
var sortObjectEntries = (object, f, ascending = true) => easySort(Object.entries(object), f, ascending);
var easySort = (collection, f, ascending = true) => [...collection].sort((a, b) => {
  const keyA = f(a);
  const keyB = f(b);
  if (keyA === keyB) {
    return 0;
  }
  return (keyA > keyB ? 1 : -1) * (ascending ? 1 : -1);
});

// ../core/dist/utils/hash.js
var hash = (data, seed = 0) => {
  let h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
  for (let i = 0, ch; i < data.length; i++) {
    ch = data.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
  h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
  h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

// ../core/dist/api/apiTypes.js
var ApiMethod;
(function(ApiMethod2) {
  ApiMethod2["GET"] = "GET";
  ApiMethod2["POST"] = "POST";
  ApiMethod2["DELETE"] = "DELETE";
  ApiMethod2["PUT"] = "PUT";
  ApiMethod2["PATCH"] = "PATCH";
  ApiMethod2["HEAD"] = "HEAD";
  ApiMethod2["OPTIONS"] = "OPTIONS";
})(ApiMethod || (ApiMethod = {}));
var REDIRECT_STATUS_CODES = [
  300,
  301,
  302,
  303,
  304,
  307,
  308
];

// ../core/dist/api/headers.js
var isJsonHeader = (header) => {
  if (typeof header !== "string") {
    return false;
  }
  return /^application\/(json|.*\+json)/.test(header);
};
var isTextHeader = (header) => {
  if (typeof header !== "string") {
    return false;
  }
  return /^(text\/|application\/x-www-form-urlencoded|application\/(xml|.*\+xml))/.test(header);
};
var mapHeadersToObject = (headers) => {
  const headersObject = {};
  for (const [key, value] of headers.entries()) {
    if (headersObject[key]) {
      headersObject[key] += `, ${value}`;
    } else {
      headersObject[key] = value;
    }
  }
  return headersObject;
};

// ../core/dist/formula/formulaUtils.js
function* getFormulasInFormula({ formula, globalFormulas, path: _path, visitedFormulas: _visitedFormulas, packageName }) {
  if (!isDefined(formula)) {
    return;
  }
  const path = _path ?? [];
  const visitedFormulas = _visitedFormulas ?? /* @__PURE__ */ new Set();
  yield {
    path,
    formula,
    packageName: packageName ?? void 0
  };
  switch (formula.type) {
    case "path":
    case "value":
      break;
    case "record":
      for (const [key, entry] of (formula.entries ?? []).entries()) {
        yield* getFormulasInFormula({
          formula: entry.formula,
          globalFormulas,
          path: [...path, "entries", key, "formula"],
          visitedFormulas,
          packageName
        });
      }
      break;
    case "function": {
      const innerPackage = formula.package ?? packageName;
      const formulaKey = [innerPackage, formula.name].filter(isDefined).join("/");
      const shouldVisitFormula = !visitedFormulas.has(formulaKey);
      visitedFormulas.add(formulaKey);
      const globalFormula = innerPackage ? globalFormulas.packages?.[innerPackage]?.formulas?.[formula.name] : globalFormulas.formulas?.[formula.name];
      for (const [key, arg] of (formula.arguments ?? []).entries()) {
        yield* getFormulasInFormula({
          formula: arg.formula,
          globalFormulas,
          path: [...path, "arguments", key, "formula"],
          visitedFormulas,
          packageName
        });
      }
      if (globalFormula && isToddleFormula(globalFormula) && shouldVisitFormula) {
        yield* getFormulasInFormula({
          formula: globalFormula.formula,
          globalFormulas,
          path: innerPackage ? ["packages", innerPackage, "formulas", formula.name] : ["formulas", formula.name],
          visitedFormulas,
          packageName: innerPackage
        });
      }
      break;
    }
    case "array":
    case "or":
    case "and":
    case "object":
      for (const [key, arg] of (formula.arguments ?? []).entries()) {
        yield* getFormulasInFormula({
          formula: arg.formula,
          globalFormulas,
          path: [...path, "arguments", key, "formula"],
          visitedFormulas,
          packageName
        });
      }
      break;
    case "apply":
      for (const [key, arg] of (formula.arguments ?? []).entries()) {
        yield* getFormulasInFormula({
          formula: arg.formula,
          globalFormulas,
          path: [...path, "arguments", key, "formula"],
          visitedFormulas,
          packageName
        });
      }
      break;
    case "switch":
      for (const [key, c] of formula.cases?.entries() ?? []) {
        yield* getFormulasInFormula({
          formula: c.condition,
          globalFormulas,
          path: [...path, "cases", key, "condition"],
          visitedFormulas,
          packageName
        });
        yield* getFormulasInFormula({
          formula: c.formula,
          globalFormulas,
          path: [...path, "cases", key, "formula"],
          visitedFormulas,
          packageName
        });
      }
      yield* getFormulasInFormula({
        formula: formula.default,
        globalFormulas,
        path: [...path, "default"],
        visitedFormulas,
        packageName
      });
      break;
  }
}
function* getFormulasInAction({ action, globalFormulas, path: _path, visitedFormulas = /* @__PURE__ */ new Set(), packageName }) {
  if (!isDefined(action)) {
    return;
  }
  const path = _path ?? [];
  switch (action.type) {
    case "AbortFetch":
      break;
    case "Fetch":
      for (const [inputKey, input] of Object.entries(action.inputs ?? {})) {
        yield* getFormulasInFormula({
          formula: input.formula,
          globalFormulas,
          path: [...path, "input", inputKey, "formula"],
          visitedFormulas,
          packageName
        });
      }
      for (const [key, a] of Object.entries(action.onSuccess?.actions ?? {})) {
        yield* getFormulasInAction({
          action: a,
          globalFormulas,
          path: [...path, "onSuccess", "actions", key],
          visitedFormulas,
          packageName
        });
      }
      for (const [key, a] of Object.entries(action.onError?.actions ?? {})) {
        yield* getFormulasInAction({
          action: a,
          globalFormulas,
          path: [...path, "onError", "actions", key],
          visitedFormulas,
          packageName
        });
      }
      for (const [key, a] of Object.entries(action.onMessage?.actions ?? {})) {
        yield* getFormulasInAction({
          action: a,
          globalFormulas,
          path: [...path, "onMessage", "actions", key],
          visitedFormulas,
          packageName
        });
      }
      break;
    case "Custom":
    case void 0:
    case null: {
      if (isFormula(action.data)) {
        yield* getFormulasInFormula({
          formula: action.data,
          globalFormulas,
          path: [...path, "data"],
          visitedFormulas,
          packageName
        });
      }
      for (const [key, a] of Object.entries(action.arguments ?? {})) {
        if (a) {
          yield* getFormulasInFormula({
            formula: a.formula,
            globalFormulas,
            path: [...path, "arguments", key, "formula"],
            visitedFormulas,
            packageName
          });
        }
      }
      for (const [eventKey, event] of Object.entries(action.events ?? {})) {
        for (const [key, a] of Object.entries(event.actions ?? {})) {
          yield* getFormulasInAction({
            action: a,
            globalFormulas,
            path: [...path, "events", eventKey, "actions", key],
            visitedFormulas,
            packageName
          });
        }
      }
      break;
    }
    case "SetVariable":
    case "TriggerEvent":
    case "TriggerWorkflowCallback":
      yield* getFormulasInFormula({
        formula: action.data,
        globalFormulas,
        path: [...path, "data"],
        visitedFormulas,
        packageName
      });
      break;
    case "SetURLParameter":
      yield* getFormulasInFormula({
        formula: action.data,
        globalFormulas,
        path: [...path, "data"],
        visitedFormulas,
        packageName
      });
      break;
    case "SetURLParameters":
      for (const [key, formula] of Object.entries(action.parameters ?? {})) {
        yield* getFormulasInFormula({
          formula,
          globalFormulas,
          path: [...path, "parameters", key],
          visitedFormulas,
          packageName
        });
      }
      break;
    case "TriggerWorkflow":
      for (const [key, a] of Object.entries(action.parameters ?? {})) {
        if (isDefined(a.formula)) {
          yield* getFormulasInFormula({
            formula: a.formula,
            globalFormulas,
            path: [...path, "parameters", key, "formula"],
            visitedFormulas,
            packageName
          });
        }
      }
      for (const [callbackKey, callback] of Object.entries(action.callbacks ?? {})) {
        if (isDefined(callback?.actions)) {
          for (const [key, a] of Object.entries(callback.actions)) {
            if (isDefined(a)) {
              yield* getFormulasInAction({
                action: a,
                globalFormulas,
                path: [...path, "callbacks", callbackKey, "actions", key],
                visitedFormulas,
                packageName
              });
            }
          }
        }
      }
      break;
    case "Switch":
      if (isDefined(action.data) && isFormula(action.data)) {
        yield* getFormulasInFormula({
          formula: action.data,
          globalFormulas,
          path: [...path, "data"],
          visitedFormulas,
          packageName
        });
      }
      for (const [key, c] of (action.cases ?? []).entries()) {
        yield* getFormulasInFormula({
          formula: c.condition,
          globalFormulas,
          path: [...path, "cases", key, "condition"],
          visitedFormulas,
          packageName
        });
        for (const [actionKey, a] of Object.entries(c.actions)) {
          yield* getFormulasInAction({
            action: a,
            globalFormulas,
            path: [...path, "cases", key, "actions", actionKey],
            visitedFormulas,
            packageName
          });
        }
      }
      for (const [actionKey, a] of Object.entries(action.default?.actions ?? [])) {
        yield* getFormulasInAction({
          action: a,
          globalFormulas,
          path: [...path, "default", "actions", actionKey],
          visitedFormulas,
          packageName
        });
      }
      break;
  }
}

// ../core/dist/api/LegacyToddleApi.js
var LegacyToddleApi = class {
  api;
  key;
  globalFormulas;
  _apiReferences;
  constructor(api, key, globalFormulas) {
    this.api = api;
    this.key = key;
    this.globalFormulas = globalFormulas;
  }
  get apiReferences() {
    if (this._apiReferences) {
      return this._apiReferences;
    }
    const apis = /* @__PURE__ */ new Set();
    const visitFormulaReference = (formula) => {
      if (!isDefined(formula)) {
        return;
      }
      switch (formula.type) {
        case "path":
          if (formula.path[0] === "Apis") {
            const apiName = formula.path[1];
            if (typeof apiName === "string") {
              apis.add(apiName);
            }
          }
          break;
        case "value":
          break;
        case "record":
          formula.entries?.forEach((entry) => visitFormulaReference(entry.formula));
          break;
        case "function":
        case "array":
        case "or":
        case "and":
        case "apply":
        case "object":
          formula.arguments?.forEach((arg) => visitFormulaReference(arg.formula));
          break;
        case "switch":
          formula.cases?.forEach((c) => {
            visitFormulaReference(c.condition);
            visitFormulaReference(c.formula);
          });
          break;
      }
    };
    visitFormulaReference(this.api.autoFetch);
    visitFormulaReference(this.api.url);
    Object.values(this.api.path ?? {}).forEach((p) => visitFormulaReference(p.formula));
    Object.values(this.api.queryParams ?? {}).forEach((q) => visitFormulaReference(q.formula));
    if (isFormula(this.api.headers)) {
      visitFormulaReference(this.api.headers);
    } else {
      Object.values(this.api.headers ?? {}).forEach((h) => {
        visitFormulaReference(h);
      });
    }
    visitFormulaReference(this.api.body);
    this._apiReferences = apis;
    return apis;
  }
  get name() {
    return this.api.name;
  }
  get type() {
    return this.api.type;
  }
  get autoFetch() {
    return this.api.autoFetch;
  }
  get url() {
    return this.api.url;
  }
  get path() {
    return this.api.path;
  }
  get proxy() {
    return this.api.proxy;
  }
  get queryParams() {
    return this.api.queryParams;
  }
  get headers() {
    return this.api.headers;
  }
  get method() {
    return this.api.method;
  }
  get body() {
    return this.api.body;
  }
  get auth() {
    return this.api.auth;
  }
  get throttle() {
    return this.api.throttle;
  }
  get debounce() {
    return this.api.debounce;
  }
  get onCompleted() {
    return this.api.onCompleted;
  }
  get onFailed() {
    return this.api.onFailed;
  }
  *formulasInApi() {
    const api = this.api;
    const apiKey = this.key;
    yield* getFormulasInFormula({
      formula: api.autoFetch,
      globalFormulas: this.globalFormulas,
      path: ["apis", apiKey, "autoFetch"]
    });
    yield* getFormulasInFormula({
      formula: api.url,
      globalFormulas: this.globalFormulas,
      path: ["apis", apiKey, "url"]
    });
    for (const [pathKey, path] of Object.entries(api.path ?? {})) {
      yield* getFormulasInFormula({
        formula: path.formula,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "path", pathKey, "formula"]
      });
    }
    for (const [queryParamKey, queryParam] of Object.entries(api.queryParams ?? {})) {
      yield* getFormulasInFormula({
        formula: queryParam.formula,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "queryParams", queryParamKey, "formula"]
      });
    }
    if (isFormula(api.headers)) {
      yield* getFormulasInFormula({
        formula: api.headers,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "headers"]
      });
    } else {
      for (const [headerKey, header] of Object.entries(api.headers ?? {})) {
        yield* getFormulasInFormula({
          formula: header,
          globalFormulas: this.globalFormulas,
          path: ["apis", apiKey, "headers", headerKey]
        });
      }
    }
    yield* getFormulasInFormula({
      formula: api.body,
      globalFormulas: this.globalFormulas,
      path: ["apis", apiKey, "body"]
    });
    for (const [actionKey, action] of Object.entries(api.onCompleted?.actions ?? {})) {
      yield* getFormulasInAction({
        action,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "onCompleted", "actions", actionKey]
      });
    }
    for (const [actionKey, action] of Object.entries(api.onFailed?.actions ?? {})) {
      yield* getFormulasInAction({
        action,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "onFailed", "actions", actionKey]
      });
    }
  }
};

// ../core/dist/component/actionUtils.js
function* getActionsInAction(action, path = []) {
  if (!isDefined(action)) {
    return;
  }
  yield [path, action];
  switch (action.type) {
    case "AbortFetch":
    case "SetURLParameter":
    case "SetURLParameters":
    case "SetVariable":
    case "TriggerEvent":
    case "TriggerWorkflowCallback":
      break;
    case "TriggerWorkflow":
      for (const [key, callback] of Object.entries(action.callbacks ?? {})) {
        if (callback) {
          for (const [aKey, a] of Object.entries(callback.actions ?? {})) {
            if (a) {
              yield* getActionsInAction(a, [
                ...path,
                "callbacks",
                key,
                "actions",
                aKey
              ]);
            }
          }
        }
      }
      break;
    case "Fetch":
      for (const [key, a] of Object.entries(action.onSuccess?.actions ?? {})) {
        yield* getActionsInAction(a, [...path, "onSuccess", "actions", key]);
      }
      for (const [key, a] of Object.entries(action.onError?.actions ?? {})) {
        yield* getActionsInAction(a, [...path, "onError", "actions", key]);
      }
      for (const [key, a] of Object.entries(action.onMessage?.actions ?? {})) {
        yield* getActionsInAction(a, [...path, "onMessage", "actions", key]);
      }
      break;
    case "Custom":
    case void 0:
    case null:
      for (const [eventKey, event] of Object.entries(action.events ?? {})) {
        for (const [key, a] of Object.entries(event?.actions ?? {})) {
          yield* getActionsInAction(a, [
            ...path,
            "events",
            eventKey,
            "actions",
            key
          ]);
        }
      }
      break;
    case "Switch":
      for (const [key, c] of (action.cases ?? []).entries()) {
        for (const [actionKey, a] of Object.entries(c?.actions ?? {})) {
          yield* getActionsInAction(a, [
            ...path,
            "cases",
            key,
            "actions",
            actionKey
          ]);
        }
      }
      for (const [actionKey, a] of Object.entries(action.default?.actions ?? [])) {
        yield* getActionsInAction(a, [...path, "default", "actions", actionKey]);
      }
      break;
  }
}

// ../core/dist/api/ToddleApiV2.js
var ToddleApiV2 = class {
  api;
  _apiReferences;
  key;
  globalFormulas;
  constructor(api, apiKey, globalFormulas) {
    this.api = api;
    this.key = apiKey;
    this.globalFormulas = globalFormulas;
  }
  get apiReferences() {
    if (this._apiReferences) {
      return this._apiReferences;
    }
    const apis = /* @__PURE__ */ new Set();
    const visitFormulaReference = (formula) => {
      if (!isDefined(formula)) {
        return;
      }
      switch (formula.type) {
        case "path":
          if (formula.path[0] === "Apis") {
            const apiName = formula.path[1];
            if (typeof apiName === "string") {
              apis.add(apiName);
            }
          }
          break;
        case "value":
          break;
        case "record":
          formula.entries?.forEach((entry) => visitFormulaReference(entry.formula));
          break;
        case "function":
        case "array":
        case "or":
        case "and":
        case "apply":
        case "object":
          formula.arguments?.forEach((arg) => visitFormulaReference(arg.formula));
          break;
        case "switch":
          formula.cases?.forEach((c) => {
            visitFormulaReference(c.condition);
            visitFormulaReference(c.formula);
          });
          break;
      }
    };
    visitFormulaReference(this.api.autoFetch);
    visitFormulaReference(this.api.url);
    Object.values(this.api.path ?? {}).forEach((p) => visitFormulaReference(p.formula));
    Object.values(this.api.headers ?? {}).forEach((h) => visitFormulaReference(h.formula));
    visitFormulaReference(this.api.body);
    Object.values(this.api.inputs).forEach((arg) => visitFormulaReference(arg.formula));
    Object.values(this.api.queryParams ?? {}).forEach((q) => {
      visitFormulaReference(q.formula);
    });
    visitFormulaReference(this.api.server?.proxy?.enabled?.formula);
    visitFormulaReference(this.api.server?.ssr?.enabled?.formula);
    visitFormulaReference(this.api.client?.debounce?.formula);
    Object.values(this.api.redirectRules ?? {}).forEach((rule) => {
      visitFormulaReference(rule.formula);
    });
    visitFormulaReference(this.api.isError?.formula);
    visitFormulaReference(this.api.timeout?.formula);
    apis.delete(this.key);
    this._apiReferences = apis;
    return apis;
  }
  get version() {
    return this.api.version;
  }
  get name() {
    return this.api.name;
  }
  get type() {
    return this.api.type;
  }
  get autoFetch() {
    return this.api.autoFetch;
  }
  get url() {
    return this.api.url;
  }
  get path() {
    return this.api.path;
  }
  get headers() {
    return this.api.headers;
  }
  set headers(headers) {
    this.api.headers = headers;
  }
  get method() {
    return this.api.method;
  }
  get body() {
    return this.api.body;
  }
  get inputs() {
    return this.api.inputs;
  }
  get queryParams() {
    return this.api.queryParams;
  }
  get server() {
    return this.api.server;
  }
  get client() {
    return this.api.client;
  }
  get redirectRules() {
    return this.api.redirectRules;
  }
  get isError() {
    return this.api.isError;
  }
  get timeout() {
    return this.api.timeout;
  }
  get "@nordcraft/metadata"() {
    return this.api["@nordcraft/metadata"];
  }
  *formulasInApi() {
    const api = this.api;
    const apiKey = this.key;
    for (const [input, value] of Object.entries(this.api.inputs)) {
      yield* getFormulasInFormula({
        formula: value.formula,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "inputs", input, "formula"]
      });
    }
    yield* getFormulasInFormula({
      formula: api.autoFetch,
      globalFormulas: this.globalFormulas,
      path: ["apis", apiKey, "autoFetch"]
    });
    yield* getFormulasInFormula({
      formula: api.url,
      globalFormulas: this.globalFormulas,
      path: ["apis", apiKey, "url"]
    });
    for (const [pathKey, path] of Object.entries(api.path ?? {})) {
      yield* getFormulasInFormula({
        formula: path.formula,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "path", pathKey, "formula"]
      });
    }
    for (const [queryParamKey, queryParam] of Object.entries(api.queryParams ?? {})) {
      yield* getFormulasInFormula({
        formula: queryParam.formula,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "queryParams", queryParamKey, "formula"]
      });
      yield* getFormulasInFormula({
        formula: queryParam.enabled,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "queryParams", queryParamKey, "enabled"]
      });
    }
    for (const [headerKey, header] of Object.entries(api.headers ?? {})) {
      yield* getFormulasInFormula({
        formula: header.formula,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "headers", headerKey, "formula"]
      });
      yield* getFormulasInFormula({
        formula: header.enabled,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "headers", headerKey, "enabled"]
      });
    }
    if (api.method && HttpMethodsWithAllowedBody.includes(api.method)) {
      yield* getFormulasInFormula({
        formula: api.body,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "body"]
      });
    }
    for (const [actionKey, action] of Object.entries(api.client?.onCompleted?.actions ?? {})) {
      yield* getFormulasInAction({
        action,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "client", "onCompleted", "actions", actionKey]
      });
    }
    for (const [actionKey, action] of Object.entries(api.client?.onFailed?.actions ?? {})) {
      yield* getFormulasInAction({
        action,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "client", "onFailed", "actions", actionKey]
      });
    }
    yield* getFormulasInFormula({
      formula: api.client?.debounce?.formula,
      globalFormulas: this.globalFormulas,
      path: ["apis", apiKey, "client", "debounce", "formula"]
    });
    for (const [actionKey, action] of Object.entries(api.client?.onMessage?.actions ?? {})) {
      yield* getFormulasInAction({
        action,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "client", "onMessage", "actions", actionKey]
      });
    }
    for (const [rule, value] of Object.entries(api.redirectRules ?? {})) {
      yield* getFormulasInFormula({
        formula: value.formula,
        globalFormulas: this.globalFormulas,
        path: ["apis", apiKey, "redirectRules", rule, "formula"]
      });
    }
    yield* getFormulasInFormula({
      formula: api.isError?.formula,
      globalFormulas: this.globalFormulas,
      path: ["apis", apiKey, "isError", "formula"]
    });
    yield* getFormulasInFormula({
      formula: api.timeout?.formula,
      globalFormulas: this.globalFormulas,
      path: ["apis", apiKey, "timeout", "formula"]
    });
    yield* getFormulasInFormula({
      formula: api.server?.proxy?.enabled.formula,
      globalFormulas: this.globalFormulas,
      path: ["apis", apiKey, "server", "proxy", "enabled", "formula"]
    });
    yield* getFormulasInFormula({
      formula: api.server?.proxy?.useTemplatesInBody?.formula,
      globalFormulas: this.globalFormulas,
      path: [
        "apis",
        apiKey,
        "server",
        "proxy",
        "useTemplatesInBody",
        "formula"
      ]
    });
    yield* getFormulasInFormula({
      formula: api.server?.ssr?.enabled?.formula,
      globalFormulas: this.globalFormulas,
      path: ["apis", apiKey, "server", "ssr", "enabled", "formula"]
    });
  }
  *actionModelsInApi() {
    for (const [actionKey, action] of Object.entries(this.api.client?.onCompleted?.actions ?? {})) {
      yield* getActionsInAction(action, [
        "apis",
        this.key,
        "client",
        "onCompleted",
        "actions",
        actionKey
      ]);
    }
    for (const [actionKey, action] of Object.entries(this.api.client?.onFailed?.actions ?? {})) {
      yield* getActionsInAction(action, [
        "apis",
        this.key,
        "client",
        "onFailed",
        "actions",
        actionKey
      ]);
    }
    for (const [actionKey, action] of Object.entries(this.api.client?.onMessage?.actions ?? {})) {
      yield* getActionsInAction(action, [
        "apis",
        this.key,
        "client",
        "onData",
        "actions",
        actionKey
      ]);
    }
  }
};

// ../core/dist/api/api.js
var NON_BODY_RESPONSE_CODES = [101, 204, 205, 304];
var isLegacyApi = (api) => api instanceof LegacyToddleApi ? true : !("version" in api);
var createApiRequest = ({ api, formulaContext, baseUrl, defaultHeaders }) => {
  const url = getUrl(api, { ...formulaContext, jsonPath: ["apis", api.name] }, baseUrl);
  const requestSettings = getRequestSettings({
    api,
    formulaContext,
    defaultHeaders
  });
  return { url, requestSettings };
};
var getUrl = (api, formulaContext, baseUrl) => {
  let urlPathname = "";
  let urlQueryParams = new URLSearchParams();
  let parsedUrl;
  const url = applyFormula(api.url, formulaContext, ["url"]);
  if (["string", "number"].includes(typeof url)) {
    const urlInput = typeof url === "number" ? String(url) : url;
    try {
      parsedUrl = new URL(urlInput, baseUrl ?? void 0);
      urlPathname = parsedUrl.pathname;
      urlQueryParams = parsedUrl.searchParams;
    } catch {
    }
  }
  const pathParams = getRequestPath(api.path, formulaContext);
  const path = `${urlPathname}${pathParams.length > 0 && !urlPathname.endsWith("/") ? "/" : ""}${pathParams}`;
  const queryParams = new URLSearchParams([
    ...urlQueryParams,
    ...getRequestQueryParams(api.queryParams, formulaContext)
  ]);
  const queryString = [...queryParams.entries()].length > 0 ? `?${queryParams.toString()}` : "";
  const hash3 = applyFormula(api.hash?.formula, formulaContext, [
    "hash",
    "formula"
  ]);
  const hashString = typeof hash3 === "string" && hash3.length > 0 ? `#${hash3}` : "";
  if (parsedUrl) {
    const combinedUrl = new URL(parsedUrl.origin, baseUrl ?? void 0);
    combinedUrl.pathname = path;
    combinedUrl.search = queryParams.toString();
    combinedUrl.hash = hashString;
    return combinedUrl;
  } else {
    return new URL(`${path}${queryString}${hashString}`, baseUrl ?? void 0);
  }
};
var HttpMethodsWithAllowedBody = [
  ApiMethod.POST,
  ApiMethod.DELETE,
  ApiMethod.PUT,
  ApiMethod.PATCH,
  ApiMethod.OPTIONS
];
var applyAbortSignal = (api, requestSettings, formulaContext) => {
  if (api.timeout) {
    const timeout = applyFormula(api.timeout.formula, formulaContext, [
      "timeout",
      "formula"
    ]);
    if (typeof timeout === "number" && !Number.isNaN(timeout) && timeout > 0) {
      requestSettings.signal = AbortSignal.timeout(timeout);
    }
  }
};
var getRequestSettings = ({ api, formulaContext, defaultHeaders }) => {
  const method = Object.values(ApiMethod).includes(api.method) ? api.method : ApiMethod.GET;
  const headers = getRequestHeaders({
    apiHeaders: api.headers,
    formulaContext,
    defaultHeaders
  });
  const body = getRequestBody({ api, formulaContext, headers, method });
  if (headers.get("content-type") === "multipart/form-data") {
    headers.delete("content-type");
  }
  const requestSettings = {
    method,
    headers,
    body
  };
  applyAbortSignal(api, requestSettings, formulaContext);
  return requestSettings;
};
var getRequestPath = (path, formulaContext) => sortObjectEntries(path ?? {}, ([_, p]) => p.index).map(([parameterName, p]) => applyFormula(p.formula, formulaContext, ["path", parameterName])).join("/");
var getRequestQueryParams = (params, formulaContext) => {
  const queryParams = new URLSearchParams();
  Object.entries(params ?? {}).forEach(([key, param]) => {
    const enabled = isDefined(param.enabled) ? applyFormula(param.enabled, formulaContext, [
      "queryParams",
      key,
      "enabled"
    ]) : true;
    if (!enabled) {
      return;
    }
    const value = applyFormula(param.formula, formulaContext, [
      "queryParams",
      key,
      "formula"
    ]);
    if (!isDefined(value)) {
      return;
    }
    if (Array.isArray(value)) {
      value.forEach((v) => queryParams.append(key, String(v)));
    } else if (isObject(value)) {
      const encodeObject = (obj, prefix) => {
        Object.entries(obj).forEach(([key2, val]) => {
          if (!Array.isArray(val) && isObject(val)) {
            return encodeObject(val, `${prefix}[${key2}]`);
          } else {
            queryParams.set(`${prefix}[${key2}]`, String(val));
          }
        });
      };
      encodeObject(value, key);
    } else {
      queryParams.set(key, String(value));
    }
  });
  return queryParams;
};
var getRequestHeaders = ({ apiHeaders, formulaContext, defaultHeaders }) => {
  const headers = new Headers(defaultHeaders);
  Object.entries(apiHeaders ?? {}).forEach(([key, param]) => {
    const enabled = isDefined(param.enabled) ? applyFormula(param.enabled, formulaContext, ["headers", key, "enabled"]) : true;
    if (enabled) {
      const value = applyFormula(param.formula, formulaContext, [
        "headers",
        key,
        "formula"
      ]);
      if (isDefined(value)) {
        try {
          headers.set(key.trim(), (typeof value === "string" ? value : String(value)).trim());
        } catch {
        }
      }
    }
  });
  return headers;
};
var requestHash = (url, request) => hash(JSON.stringify({
  url: url.href,
  method: request.method,
  headers: omitKeys(Object.fromEntries(Object.entries(request.headers ?? {})), ["host", "cookie"]),
  body: request.body ?? null
}));
var isApiError = ({ apiName, response, formulaContext, errorFormula, performance: performance2 }) => {
  const errorFormulaRes = errorFormula ? applyFormula(errorFormula.formula, {
    component: formulaContext.component,
    package: formulaContext.package,
    toddle: formulaContext.toddle,
    data: {
      Attributes: {},
      Args: formulaContext.data.Args,
      Apis: {
        // The errorFormula will only have access to the data of the current API
        [apiName]: {
          isLoading: false,
          data: response.body,
          error: null,
          response: {
            status: response.status,
            headers: response.headers,
            performance: performance2
          }
        }
      }
    },
    env: formulaContext.env,
    jsonPath: ["apis", apiName, "isError", "formula"],
    reportFormulaEvaluation: formulaContext.reportFormulaEvaluation
  }) : null;
  if (errorFormulaRes === null || errorFormulaRes === void 0) {
    return !response.ok;
  }
  return toBoolean(errorFormulaRes);
};
var getRequestBody = ({ api, formulaContext, headers, method }) => {
  if (!api.body || !HttpMethodsWithAllowedBody.includes(method)) {
    return;
  }
  const body = applyFormula(api.body, formulaContext, ["body"]);
  if (!body) {
    return;
  }
  const contentType = headers.get("content-type");
  if (!isDefined(contentType) || isJsonHeader(contentType)) {
    return JSON.stringify(body);
  }
  switch (contentType) {
    case "application/x-www-form-urlencoded": {
      if (typeof body === "object" && body !== null) {
        return Object.entries(body).map(([key, value]) => {
          if (Array.isArray(value)) {
            return value.map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`).join("&");
          } else {
            return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
          }
        }).join("&");
      }
      return "";
    }
    case "multipart/form-data": {
      if (typeof body === "object" && body !== null) {
        return toFormData(body);
      } else {
        return new FormData();
      }
    }
    case "text/plain":
      return String(body);
    default:
      return body;
  }
};
var toFormData = (body) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(body)) {
    if (value === null || value === void 0) {
      continue;
    }
    const values = Array.isArray(value) ? value : [value];
    for (const v of values) {
      if (v === null || v === void 0) {
        continue;
      }
      if (v instanceof File) {
        formData.append(key, v, v.name);
      } else if (v instanceof Blob) {
        formData.append(key, v);
      } else if (["string", "number", "boolean"].includes(typeof v)) {
        formData.append(key, String(v));
      } else if (typeof v === "object") {
        formData.append(key, JSON.stringify(v));
      } else {
        continue;
      }
    }
  }
  return formData;
};
var compareApiDependencies = (a, b) => {
  const isADependentOnB = a.apiReferences.has(b.name);
  const isBDependentOnA = b.apiReferences.has(a.name);
  if (isADependentOnB === isBDependentOnA) {
    return 0;
  }
  return isADependentOnB ? 1 : -1;
};
var sortApiEntries = (apis) => [...apis].sort(([_, a], [__, b]) => compareApiDependencies(a, b));

// ../core/dist/component/ToddleComponent.js
var ToddleComponent = class _ToddleComponent {
  component;
  globalFormulas;
  getComponent;
  packageName;
  constructor({ component, getComponent, packageName, globalFormulas }) {
    this.component = component;
    this.getComponent = getComponent;
    this.packageName = packageName;
    this.globalFormulas = globalFormulas;
  }
  get uniqueSubComponents() {
    const components = /* @__PURE__ */ new Map();
    const visitNode = (packageName) => (node) => {
      if (node.type !== "component") {
        return;
      }
      if (components.has(node.name)) {
        return;
      }
      const component = this.getComponent(node.name, node.package ?? packageName);
      if (!component) {
        return;
      }
      components.set(component.name, new _ToddleComponent({
        component,
        getComponent: this.getComponent,
        packageName: node.package ?? packageName,
        globalFormulas: this.globalFormulas
      }));
      Object.values(component.nodes ?? {}).forEach(visitNode(node.package ?? packageName));
    };
    Object.values(this.nodes ?? {}).forEach(visitNode());
    return [...components.values()];
  }
  get formulaReferences() {
    return new Set(Array.from(this.formulasInComponent()).filter((entry) => entry.formula.type === "function").flatMap((entry) => {
      const refs = [entry.formula.name];
      const packageName = entry.formula.package ?? entry.packageName ?? this.packageName;
      if (packageName && this.globalFormulas.packages?.[packageName]?.formulas?.[entry.formula.name]) {
        refs.push([packageName, entry.formula.name].join("/"));
      }
      return refs;
    }));
  }
  get actionReferences() {
    return new Set(Array.from(this.actionModelsInComponent()).filter((entry) => entry[1].type === "Custom" || entry[1].type === void 0).map(([, a]) => [a.package, a.name].filter(isDefined).join("/")));
  }
  /**
   * Traverse all formulas in the component.
   * @returns An iterable that yields the path and formula.
   */
  *formulasInComponent() {
    const globalFormulas = this.globalFormulas;
    const packageName = this.packageName;
    function* visitNode(node, path = []) {
      switch (node.type) {
        case "text":
          yield* getFormulasInFormula({
            formula: node.condition,
            globalFormulas,
            path: [...path, "condition"],
            packageName
          });
          yield* getFormulasInFormula({
            formula: node.repeat,
            globalFormulas,
            path: [...path, "repeat"],
            packageName
          });
          yield* getFormulasInFormula({
            formula: node.repeatKey,
            globalFormulas,
            path: [...path, "repeatKey"],
            packageName
          });
          yield* getFormulasInFormula({
            formula: node.value,
            globalFormulas,
            path: [...path, "value"],
            packageName
          });
          break;
        case "slot":
          yield* getFormulasInFormula({
            formula: node.condition,
            globalFormulas,
            path: [...path, "condition"],
            packageName
          });
          break;
        case "component":
          yield* getFormulasInFormula({
            formula: node.condition,
            globalFormulas,
            path: [...path, "condition"],
            packageName
          });
          yield* getFormulasInFormula({
            formula: node.repeat,
            globalFormulas,
            path: [...path, "repeat"],
            packageName
          });
          yield* getFormulasInFormula({
            formula: node.repeatKey,
            globalFormulas,
            path: [...path, "repeatKey"],
            packageName
          });
          for (const [attrKey, attr] of Object.entries(node.attrs ?? {})) {
            yield* getFormulasInFormula({
              formula: attr,
              globalFormulas,
              path: [...path, "attrs", attrKey],
              packageName
            });
          }
          for (const [eventKey, event] of Object.entries(node.events ?? {})) {
            for (const [actionKey, action] of Object.entries(event?.actions ?? {})) {
              yield* getFormulasInAction({
                action,
                globalFormulas,
                path: [...path, "events", eventKey, "actions", actionKey],
                packageName
              });
            }
          }
          for (const [customPropertyKey, customProperty] of Object.entries(node.customProperties ?? {})) {
            yield* getFormulasInFormula({
              formula: customProperty.formula,
              globalFormulas,
              path: [...path, "customProperties", customPropertyKey, "formula"],
              packageName
            });
          }
          for (const [variantKey, variant] of Object.entries(node.variants ?? {})) {
            for (const [customPropertyKey, customProperty] of Object.entries(variant.customProperties ?? {})) {
              yield* getFormulasInFormula({
                formula: customProperty.formula,
                globalFormulas,
                path: [
                  ...path,
                  "variants",
                  variantKey,
                  "customProperties",
                  customPropertyKey,
                  "formula"
                ],
                packageName
              });
            }
          }
          break;
        case "element":
          yield* getFormulasInFormula({
            formula: node.condition,
            globalFormulas,
            path: [...path, "condition"],
            packageName
          });
          yield* getFormulasInFormula({
            formula: node.repeat,
            globalFormulas,
            path: [...path, "repeat"],
            packageName
          });
          yield* getFormulasInFormula({
            formula: node.repeatKey,
            globalFormulas,
            path: [...path, "repeatKey"],
            packageName
          });
          for (const [attrKey, attr] of Object.entries(node.attrs ?? {})) {
            yield* getFormulasInFormula({
              formula: attr,
              globalFormulas,
              path: [...path, "attrs", attrKey],
              packageName
            });
          }
          for (const [eventKey, event] of Object.entries(node.events ?? {})) {
            for (const [actionKey, a] of Object.entries(event?.actions ?? {})) {
              yield* getFormulasInAction({
                action: a,
                globalFormulas,
                path: [...path, "events", eventKey, "actions", actionKey],
                packageName
              });
            }
          }
          for (const [classKey, c] of Object.entries(node.classes ?? {})) {
            yield* getFormulasInFormula({
              formula: c.formula,
              globalFormulas,
              path: [...path, "classes", classKey, "formula"],
              packageName
            });
          }
          for (const [styleVariableKey, styleVariable] of Object.entries(node["style-variables"] ?? {})) {
            yield* getFormulasInFormula({
              formula: styleVariable.formula,
              globalFormulas,
              path: [...path, "style-variables", styleVariableKey, "formula"],
              packageName
            });
          }
          for (const [customPropertyKey, customProperty] of Object.entries(node.customProperties ?? {})) {
            yield* getFormulasInFormula({
              formula: customProperty.formula,
              globalFormulas,
              path: [...path, "customProperties", customPropertyKey, "formula"],
              packageName
            });
          }
          for (const [variantKey, variant] of Object.entries(node.variants ?? {})) {
            for (const [customPropertyKey, customProperty] of Object.entries(variant.customProperties ?? {})) {
              yield* getFormulasInFormula({
                formula: customProperty.formula,
                globalFormulas,
                path: [
                  ...path,
                  "variants",
                  variantKey,
                  "customProperties",
                  customPropertyKey,
                  "formula"
                ],
                packageName
              });
            }
          }
          break;
      }
    }
    yield* getFormulasInFormula({
      formula: this.route?.info?.language?.formula,
      globalFormulas,
      path: ["route", "info", "language", "formula"],
      packageName
    });
    yield* getFormulasInFormula({
      formula: this.route?.info?.title?.formula,
      globalFormulas,
      path: ["route", "info", "title", "formula"],
      packageName
    });
    yield* getFormulasInFormula({
      formula: this.route?.info?.description?.formula,
      globalFormulas,
      path: ["route", "info", "description", "formula"],
      packageName
    });
    yield* getFormulasInFormula({
      formula: this.route?.info?.icon?.formula,
      globalFormulas,
      path: ["route", "info", "icon", "formula"],
      packageName
    });
    yield* getFormulasInFormula({
      formula: this.route?.info?.charset?.formula,
      globalFormulas,
      path: ["route", "info", "charset", "formula"],
      packageName
    });
    yield* getFormulasInFormula({
      formula: this.route?.info?.theme?.formula,
      globalFormulas,
      path: ["route", "info", "theme", "formula"],
      packageName
    });
    for (const [metaKey, meta] of Object.entries(this.route?.info?.meta ?? {})) {
      yield* getFormulasInFormula({
        formula: meta.content,
        globalFormulas,
        path: ["route", "info", "meta", metaKey, "content"],
        packageName
      });
      for (const [attrKey, a] of Object.entries(meta.attrs ?? {})) {
        yield* getFormulasInFormula({
          formula: a,
          globalFormulas,
          path: ["route", "info", "meta", metaKey, "attrs", attrKey],
          packageName
        });
      }
      yield* getFormulasInFormula({
        formula: meta.enabled,
        globalFormulas,
        path: ["route", "info", "meta", metaKey, "enabled"],
        packageName
      });
    }
    for (const [formulaKey, formula] of Object.entries(this.formulas ?? {})) {
      yield* getFormulasInFormula({
        formula: formula.formula,
        globalFormulas,
        path: ["formulas", formulaKey, "formula"],
        packageName
      });
    }
    for (const [variableKey, variable] of Object.entries(this.variables ?? {})) {
      yield* getFormulasInFormula({
        formula: variable.initialValue,
        globalFormulas,
        path: ["variables", variableKey, "initialValue"],
        packageName
      });
    }
    for (const [workflowKey, workflow] of Object.entries(this.workflows ?? {})) {
      for (const [actionKey, action] of workflow.actions.entries()) {
        yield* getFormulasInAction({
          action,
          globalFormulas,
          path: ["workflows", workflowKey, "actions", actionKey],
          packageName
        });
      }
    }
    for (const [, api] of Object.entries(this.apis)) {
      yield* api.formulasInApi();
    }
    for (const [actionKey, action] of Object.entries(this.component.onLoad?.actions ?? {})) {
      yield* getFormulasInAction({
        action,
        globalFormulas,
        path: ["onLoad", "actions", actionKey],
        packageName
      });
    }
    for (const [actionKey, action] of Object.entries(this.component.onAttributeChange?.actions ?? {})) {
      yield* getFormulasInAction({
        action,
        globalFormulas,
        path: ["onAttributeChange", "actions", actionKey],
        packageName
      });
    }
    for (const [nodeKey, node] of Object.entries(this.nodes ?? {})) {
      yield* visitNode(node, ["nodes", nodeKey]);
    }
  }
  /**
   * Traverse all actions in the component.
   * @returns An iterable that yields the path and action.
   */
  *actionModelsInComponent() {
    function* visitNode(node, path = []) {
      switch (node.type) {
        case "text":
        case "slot":
          break;
        case "component":
        case "element":
          for (const [eventKey, event] of Object.entries(node.events ?? {})) {
            for (const [actionKey, a] of Object.entries(event?.actions ?? {})) {
              yield* getActionsInAction(a, [
                ...path,
                "events",
                eventKey,
                "actions",
                actionKey
              ]);
            }
          }
          break;
      }
    }
    for (const [workflowKey, workflow] of Object.entries(this.workflows ?? {})) {
      for (const [key, a] of Object.entries(workflow?.actions ?? {})) {
        yield* getActionsInAction(a, ["workflows", workflowKey, "actions", key]);
      }
    }
    for (const [apiKey, api] of Object.entries(this.apis ?? {})) {
      if (!isLegacyApi(api)) {
        yield* api.actionModelsInApi();
        continue;
      }
      for (const [actionKey, a] of Object.entries(api.onCompleted?.actions ?? {})) {
        yield* getActionsInAction(a, [
          "apis",
          apiKey,
          "onCompleted",
          "actions",
          actionKey
        ]);
      }
      for (const [actionKey, a] of Object.entries(api.onFailed?.actions ?? {})) {
        yield* getActionsInAction(a, [
          "apis",
          apiKey,
          "onFailed",
          "actions",
          actionKey
        ]);
      }
    }
    for (const [actionKey, action] of Object.entries(this.component.onLoad?.actions ?? {})) {
      yield* getActionsInAction(action, ["onLoad", "actions", actionKey]);
    }
    for (const [actionKey, action] of Object.entries(this.component.onAttributeChange?.actions ?? {})) {
      yield* getActionsInAction(action, [
        "onAttributeChange",
        "actions",
        actionKey
      ]);
    }
    for (const [nodeKey, node] of Object.entries(this.nodes ?? {})) {
      yield* visitNode(node, ["nodes", nodeKey]);
    }
  }
  get formulas() {
    return this.component.formulas;
  }
  get name() {
    return this.component.name;
  }
  get route() {
    return this.component.route;
  }
  get attributes() {
    return this.component.attributes;
  }
  get variables() {
    return this.component.variables;
  }
  get workflows() {
    return this.component.workflows;
  }
  get apis() {
    return Object.fromEntries(Object.entries(this.component.apis ?? {}).filter((entry) => isDefined(entry[1])).map(([key, api]) => [
      key,
      isLegacyApi(api) ? new LegacyToddleApi(api, key, this.globalFormulas) : new ToddleApiV2(api, key, this.globalFormulas)
    ]));
  }
  get nodes() {
    return this.component.nodes;
  }
  get events() {
    return this.component.events;
  }
  get onLoad() {
    return this.component.onLoad;
  }
  get onAttributeChange() {
    return this.component.onAttributeChange;
  }
  get isPage() {
    return isPageComponent(this.component);
  }
  get contexts() {
    return this.component.contexts;
  }
  get exported() {
    return this.component.exported;
  }
  get customElement() {
    return this.component.customElement;
  }
};

// ../core/dist/styling/theme.const.js
var CUSTOM_PROPERTIES_STYLESHEET_ID = "nc-custom-properties";
var THEME_DATA_ATTRIBUTE = "data-nc-theme";
var THEME_COOKIE_NAME = "nc-theme";
var theme = {
  colors: {
    grey: {
      order: 0,
      variants: {
        "50": { order: 0, value: "#FAFAFA" },
        "100": { order: 1, value: "#F5F5F5" },
        "200": { order: 2, value: "#E5E5E5" },
        "300": { order: 3, value: "#D4D4D4" },
        "400": { order: 4, value: "#A3A3A3" },
        "500": { order: 5, value: "#737373" },
        "600": { order: 6, value: "#525252" },
        "700": { order: 7, value: "#404040" },
        "800": { order: 8, value: "#262626" },
        "900": { order: 9, value: "#171717" }
      }
    },
    red: {
      order: 1,
      variants: {
        "50": { order: 0, value: "#FEF2F2" },
        "100": { order: 1, value: "#FEE2E2" },
        "200": { order: 2, value: "#FECACA" },
        "300": { order: 3, value: "#FCA5A5" },
        "400": { order: 4, value: "#F87171" },
        "500": { order: 5, value: "#EF4444" },
        "600": { order: 6, value: "#DC2626" },
        "700": { order: 7, value: "#B91C1C" },
        "800": { order: 8, value: "#991B1B" },
        "900": { order: 9, value: "#7F1D1D" }
      }
    },
    rose: {
      order: 3,
      variants: {
        "50": { order: 0, value: "#FFF1F2" },
        "100": { order: 1, value: "#FFE4E6" },
        "200": { order: 2, value: "#FECDD3" },
        "300": { order: 3, value: "#FDA4AF" },
        "400": { order: 4, value: "#FB7185" },
        "500": { order: 5, value: "#F43F5E" },
        "600": { order: 6, value: "#E11D48" },
        "700": { order: 7, value: "#BE123C" },
        "800": { order: 8, value: "#9F1239" },
        "900": { order: 9, value: "#881337" }
      }
    },
    pink: {
      order: 4,
      variants: {
        "50": { order: 0, value: "#FDF2F8" },
        "100": { order: 1, value: "#FCE7F3" },
        "200": { order: 2, value: "#FBCFE8" },
        "300": { order: 3, value: "#F9A8D4" },
        "400": { order: 4, value: "#F472B6" },
        "500": { order: 5, value: "#EC4899" },
        "600": { order: 6, value: "#DB2777" },
        "700": { order: 7, value: "#BE185D" },
        "800": { order: 8, value: "#9D174D" },
        "900": { order: 9, value: "#831843" }
      }
    },
    amber: {
      order: 5,
      variants: {
        "50": { order: 0, value: "#FFFBEB" },
        "100": { order: 1, value: "#FEF3C7" },
        "200": { order: 2, value: "#FDE68A" },
        "300": { order: 3, value: "#FCD34D" },
        "400": { order: 4, value: "#FBBF24" },
        "500": { order: 5, value: "#F59E0B" },
        "600": { order: 6, value: "#D97706" },
        "700": { order: 7, value: "#B45309" },
        "800": { order: 8, value: "#92400E" },
        "900": { order: 9, value: "#78350F" }
      }
    },
    orange: {
      order: 6,
      variants: {
        "50": { order: 0, value: "#FFF7ED" },
        "100": { order: 1, value: "#FFEDD5" },
        "200": { order: 2, value: "#FED7AA" },
        "300": { order: 3, value: "#FDBA74" },
        "400": { order: 4, value: "#FB923C" },
        "500": { order: 5, value: "#F97316" },
        "600": { order: 6, value: "#EA580C" },
        "700": { order: 7, value: "#C2410C" },
        "800": { order: 8, value: "#9A3412" },
        "900": { order: 9, value: "#7C2D12" }
      }
    },
    yellow: {
      order: 7,
      variants: {
        "50": { order: 0, value: "#FFFBEB" },
        "100": { order: 1, value: "#FEF3C7" },
        "200": { order: 2, value: "#FDE68A" },
        "300": { order: 3, value: "#FCD34D" },
        "400": { order: 4, value: "#FBBF24" },
        "500": { order: 5, value: "#F59E0B" },
        "600": { order: 6, value: "#D97706" },
        "700": { order: 7, value: "#B45309" },
        "800": { order: 8, value: "#92400E" },
        "900": { order: 9, value: "#78350F" }
      }
    },
    lime: {
      order: 8,
      variants: {
        "50": { order: 0, value: "#F7FEE7" },
        "100": { order: 1, value: "#ECFCCB" },
        "200": { order: 2, value: "#D9F99D" },
        "300": { order: 3, value: "#BEF264" },
        "400": { order: 4, value: "#A3E635" },
        "500": { order: 5, value: "#84CC16" },
        "600": { order: 6, value: "#65A30D" },
        "700": { order: 7, value: "#4D7C0F" },
        "800": { order: 8, value: "#3F6212" },
        "900": { order: 9, value: "#365314" }
      }
    },
    green: {
      order: 9,
      variants: {
        "50": { order: 0, value: "#ECFDF5" },
        "100": { order: 1, value: "#D1FAE5" },
        "200": { order: 2, value: "#A7F3D0" },
        "300": { order: 3, value: "#6EE7B7" },
        "400": { order: 4, value: "#34D399" },
        "500": { order: 5, value: "#10B981" },
        "600": { order: 6, value: "#059669" },
        "700": { order: 7, value: "#047857" },
        "800": { order: 8, value: "#065F46" },
        "900": { order: 9, value: "#064E3B" }
      }
    },
    emerald: {
      order: 10,
      variants: {
        "50": { order: 0, value: "#ECFDF5" },
        "100": { order: 1, value: "#D1FAE5" },
        "200": { order: 2, value: "#A7F3D0" },
        "300": { order: 3, value: "#6EE7B7" },
        "400": { order: 4, value: "#34D399" },
        "500": { order: 5, value: "#10B981" },
        "600": { order: 6, value: "#059669" },
        "700": { order: 7, value: "#047857" },
        "800": { order: 8, value: "#065F46" },
        "900": { order: 9, value: "#064E3B" }
      }
    },
    teal: {
      order: 11,
      variants: {
        "50": { order: 0, value: "#F0FDFA" },
        "100": { order: 1, value: "#CCFBF1" },
        "200": { order: 2, value: "#99F6E4" },
        "300": { order: 3, value: "#5EEAD4" },
        "400": { order: 4, value: "#2DD4BF" },
        "500": { order: 5, value: "#14B8A6" },
        "600": { order: 6, value: "#0D9488" },
        "700": { order: 7, value: "#0F766E" },
        "800": { order: 8, value: "#115E59" },
        "900": { order: 9, value: "#134E4A" }
      }
    },
    cyan: {
      order: 12,
      variants: {
        "50": { order: 0, value: "#ECFEFF" },
        "100": { order: 1, value: "#CFFAFE" },
        "200": { order: 2, value: "#A5F3FC" },
        "300": { order: 3, value: "#67E8F9" },
        "400": { order: 4, value: "#22D3EE" },
        "500": { order: 5, value: "#06B6D4" },
        "600": { order: 6, value: "#0891B2" },
        "700": { order: 7, value: "#0E7490" },
        "800": { order: 8, value: "#155E75" },
        "900": { order: 9, value: "#164E63" }
      }
    },
    sky: {
      order: 13,
      variants: {
        "50": { order: 0, value: "#F0F9FF" },
        "100": { order: 1, value: "#E0F2FE" },
        "200": { order: 2, value: "#BAE6FD" },
        "300": { order: 3, value: "#7DD3FC" },
        "400": { order: 4, value: "#38BDF8" },
        "500": { order: 5, value: "#0EA5E9" },
        "600": { order: 6, value: "#0284C7" },
        "700": { order: 7, value: "#0369A1" },
        "800": { order: 8, value: "#075985" },
        "900": { order: 9, value: "#0C4A6E" }
      }
    },
    blue: {
      order: 14,
      variants: {
        "50": { order: 0, value: "#EFF6FF" },
        "100": { order: 1, value: "#DBEAFE" },
        "200": { order: 2, value: "#BFDBFE" },
        "300": { order: 3, value: "#93C5FD" },
        "400": { order: 4, value: "#60A5FA" },
        "500": { order: 5, value: "#3B82F6" },
        "600": { order: 6, value: "#2563EB" },
        "700": { order: 7, value: "#1D4ED8" },
        "800": { order: 8, value: "#1E40AF" },
        "900": { order: 9, value: "#1E3A8A" }
      }
    },
    indigo: {
      order: 15,
      variants: {
        "50": { order: 0, value: "#EEF2FF" },
        "100": { order: 1, value: "#E0E7FF" },
        "200": { order: 2, value: "#C7D2FE" },
        "300": { order: 3, value: "#A5B4FC" },
        "400": { order: 4, value: "#818CF8" },
        "500": { order: 5, value: "#6366F1" },
        "600": { order: 6, value: "#4F46E5" },
        "700": { order: 7, value: "#4338CA" },
        "800": { order: 8, value: "#3730A3" },
        "900": { order: 9, value: "#312E81" }
      }
    },
    purple: {
      order: 16,
      variants: {
        "50": { order: 0, value: "#F5F3FF" },
        "100": { order: 1, value: "#EDE9FE" },
        "200": { order: 2, value: "#DDD6FE" },
        "300": { order: 3, value: "#C4B5FD" },
        "400": { order: 4, value: "#A78BFA" },
        "500": { order: 5, value: "#8B5CF6" },
        "600": { order: 6, value: "#7C3AED" },
        "700": { order: 7, value: "#6D28D9" },
        "800": { order: 8, value: "#5B21B6" },
        "900": { order: 9, value: "#4C1D95" }
      }
    },
    fuchsia: {
      order: 17,
      variants: {
        "50": { order: 0, value: "#FDF4FF" },
        "100": { order: 1, value: "#FAE8FF" },
        "200": { order: 2, value: "#F5D0FE" },
        "300": { order: 3, value: "#F0ABFC" },
        "400": { order: 4, value: "#E879F9" },
        "500": { order: 5, value: "#D946EF" },
        "600": { order: 6, value: "#C026D3" },
        "700": { order: 7, value: "#A21CAF" },
        "800": { order: 8, value: "#86198F" },
        "900": { order: 9, value: "#701A75" }
      }
    }
  },
  shadow: {
    sm: { order: 0, value: "0 1px 2px 0 rgba(0, 0, 0, 0.25)" },
    base: {
      order: 1,
      value: "0 1px 3px 0 rgba(0, 0, 0, 0.25), 0 1px 2px 0 rgba(0, 0, 0, 0.25)"
    },
    md: {
      order: 2,
      value: "0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.25)"
    },
    lg: {
      order: 3,
      value: "0 10px 15px -3px rgba(0, 0, 0, 0.25), 0 4px 6px -2px rgba(0, 0, 0, 0.25)"
    },
    xl: {
      order: 4,
      value: "0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.25)"
    },
    "2xl": { order: 5, value: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }
  },
  spacing: 0.25,
  fontSize: {
    lg: { order: 0, value: "1.125rem" },
    sm: { order: 1, value: "0.875rem" },
    xl: { order: 2, value: "1.25rem" },
    xs: { order: 3, value: "0.75rem" },
    "2xl": { order: 4, value: "1.5rem" },
    "3xl": { order: 5, value: "1.875rem" },
    "4xl": { order: 6, value: "2.25rem" },
    "5xl": { order: 7, value: "3rem" },
    xxs: { order: 8, value: "0.625rem" },
    base: { order: 9, value: "1rem", default: true }
  },
  fontFamily: {
    mono: { order: 0, value: ["Fira Code", "monospace"] },
    sans: { order: 1, value: ["Inter", "sans-serif"], default: true }
  },
  fontWeight: {
    bold: { order: 0, value: "700" },
    bolder: { order: 1, value: "800" },
    normal: { order: 2, value: "500", default: true },
    regular: { order: 3, value: "400" },
    "semi-bold": { order: 4, value: "600" }
  },
  breakpoints: {
    large: { order: 2, value: 1440 },
    small: { order: 0, value: 576 },
    medium: { order: 1, value: 960 }
  }
};

// ../ssr/dist/components/utils.js
function takeIncludedComponents({ root, projectComponents, packages = {}, includeRoot = true }) {
  const components = {
    ...projectComponents,
    // Join the project components with all package components
    ...Object.fromEntries(Object.values(packages).flatMap((installedPackage) => installedPackage ? Object.values(installedPackage.components).map((component) => [
      `${installedPackage.manifest.name}/${component.name}`,
      component
    ]) : []))
  };
  const includedComponents = [];
  if (includeRoot) {
    includedComponents.push(root);
  }
  includedComponents.push(...takeComponentsIncludedInProject(root, components));
  return includedComponents;
}
function takeComponentsIncludedInProject(parent, components) {
  const dependencies = /* @__PURE__ */ new Map();
  const visitNode = (node, packageName) => {
    if (node.type !== "component") {
      return;
    }
    const nodeName = [node.package ?? packageName, node.name].filter(isDefined).join("/");
    if (dependencies.has(nodeName)) {
      return;
    }
    const component = components[nodeName];
    if (!isDefined(component)) {
      return;
    }
    if (Object.hasOwn(components, nodeName)) {
      dependencies.set(nodeName, { ...component, name: nodeName });
    }
    Object.values(component.nodes ?? {}).forEach((node2) => visitNode(node2, (node2.type === "component" ? node2.package : void 0) ?? packageName));
  };
  Object.values(parent.nodes ?? {}).forEach((node) => visitNode(node, node.type === "component" ? node.package : void 0));
  return Array.from(dependencies.values());
}

// ../core/dist/styling/hash.js
var SEED = 5381;
var phash = (h, x) => {
  let i = x.length;
  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }
  return h;
};
var hash2 = (x) => {
  return phash(SEED, x);
};
var AD_REPLACER_R = /(a)(d)/gi;
var charsLength = 52;
var getAlphabeticChar = (code) => String.fromCharCode(code + (code > 25 ? 39 : 97));
function generateAlphabeticName(code) {
  let name = "";
  let x;
  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }
  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, "$1-$2");
}

// ../core/dist/styling/className.js
var CLASSNAME_LOOKUP = /* @__PURE__ */ new Map();
var getClassName = (object) => {
  const stringified = JSON.stringify(object);
  if (CLASSNAME_LOOKUP.has(stringified)) {
    return CLASSNAME_LOOKUP.get(stringified);
  }
  const className = generateAlphabeticName(hash2(stringified));
  CLASSNAME_LOOKUP.set(stringified, className);
  return className;
};
var toValidClassName = (input, escapeSpecialCharacters = false) => {
  let className = input.trim().replace(/\s+/g, "-");
  if (escapeSpecialCharacters) {
    className = className.replace(/[^a-zA-Z0-9-_]/g, (match2) => `\\${match2}`);
  }
  if (/^[^a-zA-Z]/.test(className)) {
    className = `_${className}`;
  }
  return className;
};

// ../core/dist/styling/customProperty.js
var appendUnit = (value, unit) => isDefined(value) && isDefined(unit) && !String(value).endsWith(unit) ? `${value}${unit}` : value;

// ../core/dist/styling/variantSelector.js
var variantSelector = (variant) => [
  (variant.className ?? variant["class"]) && `.${variant.className}`,
  (variant.evenChild ?? variant["even-child"] ?? variant["nth-child(even)"]) && ":nth-child(even)",
  (variant.firstChild ?? variant["first-child"]) && ":first-child",
  (variant.focusWithin ?? variant["focus-within"]) && ":focus-within",
  (variant.lastChild ?? variant["last-child"]) && ":last-child",
  variant.active && ":active",
  variant.autofill && ":is(:-webkit-autofill, :autofill)",
  variant.checked && ":checked",
  variant.disabled && ":disabled",
  variant.empty && ":empty",
  variant.focus && ":focus",
  variant.hover && ":hover",
  variant.invalid && ":invalid",
  variant.link && ":link",
  variant.visited && ":visited",
  variant["first-of-type"] && ":first-of-type",
  variant["focus-visible"] && ":focus-visible",
  variant["last-of-type"] && ":last-of-type",
  variant["popover-open"] && ":popover-open",
  variant.pseudoElement && `::${variant.pseudoElement}`
].filter(Boolean).join("");

// ../core/dist/utils/getNodeSelector.js
function getNodeSelector(path, { componentName, nodeId, variant } = {}) {
  let selector = `[data-id="${path}"]`;
  if (componentName) {
    selector += startsWithNumber(componentName) ? `._${componentName}` : `.${componentName}`;
  }
  if (nodeId) {
    selector += `\\:${nodeId}`;
  }
  selector = selector.replace(/(^|[^\\])\//g, "$1\\/");
  if (variant) {
    selector += variantSelector(variant);
  }
  return selector;
}
function startsWithNumber(str) {
  if (!str)
    return false;
  const code = str.charCodeAt(0);
  return code >= 48 && code <= 57;
}

// ../core/dist/utils/html.js
var VOID_HTML_ELEMENTS = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];

// ../ssr/dist/rendering/components.js
var import_xss = __toESM(require_lib2(), 1);

// ../ssr/dist/rendering/attributes.js
var REGEXP_QUOTE = /"/g;
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var validAttrTypes = ["string", "number", "boolean"];
var escapeAttrValue = (value) => {
  if (!isDefined(value) || !validAttrTypes.includes(typeof value)) {
    return "";
  }
  return escapeHtml(escapeQuote(String(value)));
};
var escapeQuote = (value) => {
  return value.replace(REGEXP_QUOTE, "&quot;");
};
var escapeHtml = (html2) => {
  return html2.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
};
var toEncodedText = (str) => {
  return str.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;").replaceAll("\n", "<br />");
};
function getNodeAttrs({ node, data, component, packageName, env, toddle }) {
  const { style, ...restAttrs } = node.attrs;
  const nodeAttrs = Object.entries(restAttrs).reduce((appliedAttributes, [name, attrValue]) => {
    const value = applyFormula(attrValue, {
      data,
      component,
      package: packageName,
      env,
      toddle
    });
    if (toBoolean(value)) {
      appliedAttributes.push(`${name}="${escapeAttrValue(value)}"`);
    }
    return appliedAttributes;
  }, []);
  const styleVariables = Object.values(node["style-variables"] ?? {}).map((styleVariable) => {
    return `--${styleVariable.name}: ${String(applyFormula(styleVariable.formula, {
      data,
      component,
      package: packageName,
      env,
      toddle
    })) + (styleVariable.unit ?? "")}`;
  });
  const styles = [
    ...style ? [
      applyFormula(style, {
        data,
        component,
        package: packageName,
        env,
        toddle
      })
    ] : [],
    ...styleVariables
  ].filter(Boolean).map(String).join("; ");
  if (styles.length > 0) {
    return [...nodeAttrs, `style="${escapeAttrValue(styles)};"`];
  }
  return nodeAttrs;
}

// ../ssr/dist/rendering/components.js
var renderComponent = async ({ path, apiCache, children, component, data, env, evaluateComponentApis: evaluateComponentApis2, files, toddle, includedComponents, instance, packageName, projectId, req, updateApiCache, addCustomProperty, namespace }) => {
  const renderNode = async ({ id, path: path2, node, data: data2, packageName: packageName2, isComponentRootNode = false, namespace: namespace2 }) => {
    if (!node) {
      return "";
    }
    const formulaContext = {
      data: data2,
      component,
      package: packageName2,
      env,
      toddle
    };
    if (node.repeat) {
      const items = applyFormula(node.repeat, formulaContext);
      if (!Array.isArray(items)) {
        return "";
      }
      const nodeItems = await Promise.all(items.map((Item, Index) => renderNode({
        id,
        path: Index ? `${path2}(${Index})` : path2,
        node: { ...node, repeat: void 0 },
        data: {
          ...data2,
          ListItem: data2.ListItem ? { Index, Item, Parent: data2.ListItem } : { Index, Item }
        },
        namespace: namespace2,
        packageName: packageName2
      })));
      return nodeItems.join("");
    }
    if (node.condition && !toBoolean(applyFormula(node.condition, formulaContext))) {
      return "";
    }
    switch (node.type) {
      case "text": {
        if (!namespace2 || namespace2 === "http://www.w3.org/1999/xhtml") {
          return `<span data-node-type="text" data-node-id="${id}">${toEncodedText(String(applyFormula(node.value, formulaContext)))}</span>`;
        }
        return toEncodedText(String(applyFormula(node.value, formulaContext)));
      }
      case "slot": {
        const defaultChild = children?.[node.name ?? "default"];
        if (defaultChild) {
          return typeof defaultChild === "function" ? await defaultChild(data2.Contexts ?? {}) : defaultChild;
        } else {
          const slotChildren = await Promise.all(node.children.map((child) => renderNode({
            id: child,
            path: `${path2}[${node.name ?? "default"}]`,
            node: component.nodes?.[child],
            data: data2,
            packageName: packageName2,
            namespace: namespace2
          })));
          return slotChildren.join("");
        }
      }
      case "element": {
        switch (node.tag.toLocaleLowerCase()) {
          case "script": {
            return "";
          }
          case "svg": {
            namespace2 = "http://www.w3.org/2000/svg";
            break;
          }
          case "math": {
            namespace2 = "http://www.w3.org/1998/Math/MathML";
            break;
          }
        }
        const nodeAttrs = getNodeAttrs({
          node,
          data: data2,
          component,
          packageName: packageName2,
          env,
          toddle
        });
        const classList = [getClassName([node.style, node.variants])];
        classList.push(...Object.entries(node.classes ?? {}).filter(([_, { formula }]) => toBoolean(applyFormula(formula, formulaContext))).map(([className]) => className));
        if (instance && id === "root") {
          classList.push(...Object.entries(instance).map(([key, value]) => toValidClassName(`${key}:${value}`)));
        }
        Object.entries(node.customProperties ?? {}).forEach(([customPropertyName, customProperty]) => {
          const value = appendUnit(applyFormula(customProperty.formula, formulaContext), customProperty.unit);
          if (isDefined(value)) {
            addCustomProperty(getNodeSelector(path2), `${customPropertyName}: ${value}`);
          }
        });
        node.variants?.forEach((variant) => {
          Object.entries(variant.customProperties ?? {}).forEach(([customPropertyName, customProperty]) => {
            const value = appendUnit(applyFormula(customProperty.formula, formulaContext), customProperty.unit);
            if (isDefined(value)) {
              addCustomProperty(getNodeSelector(path2, { variant }), `${customPropertyName}: ${value}`, variant);
            }
          });
        });
        let innerHTML = "";
        if (["script", "style"].includes(node.tag.toLocaleLowerCase()) === false) {
          const childNodes = await Promise.all(node.children.map((child, i) => renderNode({
            id: child,
            path: `${path2}.${i}`,
            namespace: namespace2,
            node: component.nodes?.[child],
            data: data2,
            packageName: packageName2
          })));
          innerHTML = childNodes.join("");
        }
        if (node.tag.toLocaleLowerCase() === "style") {
          const textNode = node.children[0] ? component.nodes?.[node.children[0]] : void 0;
          if (textNode?.type === "text") {
            innerHTML = String(applyFormula(textNode.value, formulaContext));
          }
        }
        const tag = component.version === 2 && isComponentRootNode ? `${packageName2 ?? projectId}-${node.tag}` : node.tag;
        const attributes = [
          ...nodeAttrs,
          `data-id="${path2}"`,
          `data-node-id="${(0, import_xss.escapeAttrValue)(id)}"`,
          `class="${(0, import_xss.escapeAttrValue)(classList.join(" "))}"`
        ];
        if (!VOID_HTML_ELEMENTS.includes(tag)) {
          return `<${tag} ${attributes.join(" ")}>${innerHTML}</${tag}>`;
        } else {
          return `<${tag} ${attributes.join(" ")} />`;
        }
      }
      case "component": {
        const attrs = mapValues(node.attrs, (formula) => applyFormula(formula, formulaContext));
        const contexts = {
          ...data2.Contexts,
          [component.name]: Object.fromEntries(Object.entries(component.formulas ?? {}).filter(([, formula]) => formula.exposeInContext).map(([key, formula]) => [
            key,
            applyFormula(formula.formula, formulaContext)
          ]))
        };
        let _childComponent;
        const _packageName = node.package ?? packageName2;
        if (_packageName) {
          _childComponent = files.packages?.[_packageName]?.components[node.name] ?? files.components[node.name];
        } else {
          _childComponent = files.components[node.name];
        }
        if (!isDefined(_childComponent)) {
          console.warn(`Unable to find component ${[packageName2, node.name].filter(isDefined).join("/")} in files`);
          return "";
        }
        const childComponent = _childComponent;
        const isLocalComponent = includedComponents.some((c) => c.name === childComponent.name);
        const apis = await evaluateComponentApis2({
          component: new ToddleComponent({
            component: childComponent,
            getComponent: (name, packageName3) => {
              const nodeLookupKey = [packageName3, name].filter(isDefined).join("/");
              const component2 = packageName3 ? files.packages?.[packageName3]?.components[name] : files.components[name];
              if (!component2) {
                console.warn(`Unable to find component ${nodeLookupKey} in files`);
                return void 0;
              }
              return component2;
            },
            packageName: packageName2,
            globalFormulas: {
              formulas: files.formulas,
              packages: files.packages
            }
          }),
          formulaContext: {
            data: {
              Location: formulaContext.data.Location,
              Attributes: attrs,
              Contexts: contexts,
              Page: formulaContext.data.Page,
              Variables: mapValues(childComponent.variables ?? {}, ({ initialValue }) => {
                return applyFormula(initialValue, formulaContext);
              }),
              Apis: {}
            },
            component: childComponent,
            package: node.package ?? (isLocalComponent ? void 0 : packageName2),
            env,
            toddle
          },
          req,
          apiCache,
          updateApiCache
        });
        const childNodes = await Promise.all(node.children.map(async (child, i) => {
          const slotName = typeof child === "string" ? component.nodes?.[child]?.slot ?? "default" : "default";
          return (contexts2) => {
            return renderNode({
              id: child,
              path: `${path2}.${i}[${slotName}]`,
              namespace: namespace2,
              node: component.nodes?.[child],
              data: {
                ...data2,
                Contexts: {
                  ...data2.Contexts,
                  ...contexts2,
                  [childComponent.name]: Object.fromEntries(Object.entries(childComponent.formulas ?? {}).filter(([, formula]) => formula.exposeInContext).map(([key, formula]) => [
                    key,
                    applyFormula(formula.formula, {
                      component: childComponent,
                      package: _packageName,
                      data: {
                        Contexts: {
                          ...data2.Contexts,
                          ...Object.fromEntries(Object.entries(childComponent.formulas ?? {}).filter(([, formula2]) => formula2.exposeInContext).map(([key2, formula2]) => [
                            key2,
                            applyFormula(formula2.formula, {
                              data: {
                                Attributes: attrs,
                                Apis: { ...data2.Apis, ...apis },
                                Location: data2.Location,
                                Page: data2.Page
                              },
                              component,
                              package: _packageName,
                              env,
                              toddle
                            })
                          ]))
                        },
                        Apis: apis,
                        Attributes: attrs,
                        Variables: mapValues(childComponent.variables ?? {}, ({ initialValue }) => {
                          return applyFormula(initialValue, {
                            data: {
                              Attributes: attrs,
                              Location: data2.Location,
                              Page: data2.Page
                            },
                            component,
                            package: _packageName,
                            env,
                            toddle
                          });
                        })
                      },
                      env,
                      toddle
                    })
                  ]))
                }
              },
              // pass package name to child component if it's defined
              packageName: packageName2
            });
          };
        }));
        const children2 = {};
        childNodes.forEach((renderFn, i) => {
          const childNodeId = node.children[i];
          const slotName = typeof childNodeId === "string" ? component.nodes?.[childNodeId]?.slot ?? "default" : "default";
          const existing = children2[slotName];
          if (existing) {
            const previous = typeof existing === "function" ? existing : async () => existing;
            children2[slotName] = async (contexts2) => {
              return await previous(contexts2) + await renderFn(contexts2);
            };
          } else {
            children2[slotName] = renderFn;
          }
        });
        Object.entries(node.customProperties ?? {}).forEach(([customPropertyName, customProperty]) => {
          const value = appendUnit(applyFormula(customProperty.formula, formulaContext), customProperty.unit);
          if (isDefined(value)) {
            addCustomProperty(getNodeSelector(path2, {
              componentName: component.name,
              nodeId: id
            }), `${customPropertyName}: ${value}`);
          }
        });
        node.variants?.forEach((variant) => {
          Object.entries(variant.customProperties ?? {}).forEach(([customPropertyName, customProperty]) => {
            const value = appendUnit(applyFormula(customProperty.formula, formulaContext), customProperty.unit);
            if (isDefined(value)) {
              addCustomProperty(getNodeSelector(path2, {
                componentName: component.name,
                nodeId: id,
                variant
              }), `${customPropertyName}: ${value}`, variant);
            }
          });
        });
        return createComponent({
          path: path2,
          attrs,
          component: childComponent,
          contexts,
          children: children2,
          packageName: node.package ?? (isLocalComponent ? void 0 : packageName2),
          // If the root node is another component, then append and forward previous instance
          instance: id === "root" ? {
            ...instance,
            [[packageName2, component.name].filter(isDefined).join("/")]: "root"
          } : {
            [[packageName2, component.name].filter(isDefined).join("/")]: id
          },
          apis,
          env,
          includedComponents,
          formulaContext,
          files,
          apiCache,
          updateApiCache,
          addCustomProperty,
          projectId,
          namespace: namespace2,
          evaluateComponentApis: evaluateComponentApis2,
          req
        });
      }
    }
  };
  return renderNode({
    id: "root",
    path,
    node: component.nodes?.root,
    data,
    packageName,
    isComponentRootNode: true,
    namespace
  });
};
var createComponent = async ({ path, apiCache, apis, attrs, children, component, contexts, env, evaluateComponentApis: evaluateComponentApis2, files, formulaContext, includedComponents, instance, packageName, projectId, req, updateApiCache, addCustomProperty, namespace }) => {
  const data = {
    Location: formulaContext.data.Location,
    Attributes: attrs,
    Contexts: contexts,
    Page: formulaContext.data.Page,
    Apis: apis
  };
  data.Variables = mapValues(component.variables ?? {}, ({ initialValue }) => {
    return applyFormula(initialValue, {
      ...formulaContext,
      data
    });
  });
  data.Contexts = {
    ...data.Contexts,
    [component.name]: {
      ...data.Contexts?.[component.name],
      ...Object.fromEntries(Object.entries(component.formulas ?? {}).filter(([, formula]) => formula.exposeInContext).map(([key, formula]) => [
        key,
        applyFormula(formula.formula, {
          ...formulaContext,
          data
        })
      ]))
    }
  };
  return renderComponent({
    apiCache,
    path,
    children,
    component,
    data,
    env,
    evaluateComponentApis: evaluateComponentApis2,
    files,
    includedComponents,
    instance,
    packageName,
    projectId,
    namespace,
    req,
    toddle: formulaContext.toddle,
    updateApiCache,
    addCustomProperty
  });
};
var renderPageBody = async ({ component, env, evaluateComponentApis: evaluateComponentApis2, files, formulaContext, includedComponents, req, projectId }) => {
  const apiCache = {};
  const updateApiCache = (key, value) => apiCache[key] = value;
  const customProperties = /* @__PURE__ */ new Map();
  const addCustomProperty = (selector, rule, options) => {
    selector = options?.startingStyle ? `${selector} { @starting-style { __RULES__ } }` : `${selector} { __RULES__ }`;
    if (options?.mediaQuery) {
      selector = `@media (${Object.entries(options.mediaQuery).map(([key, value]) => `${key}: ${value}`).filter(Boolean).join(") and (")}) { ${selector} }`;
    }
    if (!customProperties.has(selector)) {
      customProperties.set(selector, /* @__PURE__ */ new Set());
    }
    customProperties.get(selector)?.add(rule);
  };
  const apis = await evaluateComponentApis2({
    component,
    formulaContext,
    req,
    apiCache,
    updateApiCache
  });
  formulaContext.data.Apis = apis;
  const html2 = await renderComponent({
    path: "0",
    apiCache,
    component,
    data: formulaContext.data,
    env,
    evaluateComponentApis: evaluateComponentApis2,
    files,
    includedComponents,
    instance: {},
    packageName: void 0,
    projectId,
    req,
    toddle: formulaContext.toddle,
    updateApiCache,
    addCustomProperty
  });
  return {
    html: html2,
    apiCache,
    customProperties: [...customProperties].map(([selector, vars]) => selector.replace("__RULES__", Array.from(vars).join(";\n"))).toReversed()
  };
};

// ../lib/dist/formulas.js
var formulas_exports = {};
__export(formulas_exports, {
  Id: () => handler_exports12,
  absolute: () => handler_exports94,
  add: () => handler_exports27,
  append: () => handler_exports95,
  boolean: () => handler_exports33,
  branchName: () => handler_exports30,
  canShare: () => handler_exports72,
  capitalize: () => handler_exports52,
  clamp: () => handler_exports13,
  concatenate: () => handler_exports93,
  currentURL: () => handler_exports4,
  dateFromString: () => handler_exports83,
  dateFromTimestamp: () => handler_exports73,
  decodeBase64: () => handler_exports38,
  decodeURIComponent: () => handler_exports66,
  defaultTo: () => handler_exports15,
  deleteKey: () => handler_exports81,
  divide: () => handler_exports22,
  drop: () => handler_exports68,
  dropLast: () => handler_exports70,
  encodeBase64: () => handler_exports75,
  encodeJSON: () => handler_exports64,
  encodeURIComponent: () => handler_exports25,
  entries: () => handler_exports55,
  equals: () => handler_exports36,
  every: () => handler_exports18,
  filter: () => handler_exports96,
  find: () => handler_exports97,
  findIndex: () => handler_exports41,
  findLast: () => handler_exports90,
  first: () => handler_exports11,
  flatten: () => handler_exports84,
  formatDate: () => handler_exports54,
  formatNumber: () => handler_exports16,
  fromEntries: () => handler_exports59,
  get: () => handler_exports29,
  getCookie: () => handler_exports63,
  getElementById: () => handler_exports19,
  getFromLocalStorage: () => handler_exports3,
  getFromSessionStorage: () => handler_exports35,
  getHttpOnlyCookie: () => handler_exports51,
  greaterOrEqueal: () => handler_exports53,
  greaterThan: () => handler_exports6,
  groupBy: () => handler_exports20,
  includes: () => handler_exports56,
  indexOf: () => handler_exports98,
  isServer: () => handler_exports48,
  join: () => handler_exports87,
  json: () => handler_exports,
  keyBy: () => handler_exports37,
  languages: () => handler_exports61,
  last: () => handler_exports80,
  lastIndexOf: () => handler_exports76,
  lessOrEqual: () => handler_exports46,
  lessThan: () => handler_exports77,
  logarithm: () => handler_exports31,
  lowercase: () => handler_exports88,
  map: () => handler_exports65,
  matches: () => handler_exports34,
  max: () => handler_exports78,
  min: () => handler_exports74,
  minus: () => handler_exports28,
  modulo: () => handler_exports26,
  multiply: () => handler_exports2,
  not: () => handler_exports69,
  notEqual: () => handler_exports32,
  now: () => handler_exports21,
  number: () => handler_exports50,
  parseJSON: () => handler_exports39,
  parseURL: () => handler_exports49,
  power: () => handler_exports67,
  prepend: () => handler_exports91,
  randomNumber: () => handler_exports86,
  range: () => handler_exports82,
  reduce: () => handler_exports89,
  replaceAll: () => handler_exports14,
  reverse: () => handler_exports44,
  round: () => handler_exports57,
  roundDown: () => handler_exports5,
  roundUp: () => handler_exports45,
  set: () => handler_exports85,
  shuffle: () => handler_exports58,
  size: () => handler_exports43,
  some: () => handler_exports42,
  sort_by: () => handler_exports23,
  split: () => handler_exports17,
  squareRoot: () => handler_exports24,
  startsWith: () => handler_exports40,
  string: () => handler_exports7,
  sum: () => handler_exports71,
  take: () => handler_exports9,
  takeLast: () => handler_exports92,
  timestamp: () => handler_exports10,
  trim: () => handler_exports8,
  typeOf: () => handler_exports47,
  unique: () => handler_exports79,
  uppercase: () => handler_exports60,
  userAgent: () => handler_exports62
});

// ../lib/dist/formulas/json/handler.js
var handler_exports = {};
__export(handler_exports, {
  default: () => handler_default
});
var handler = ([data, indentation]) => {
  const indent = isNaN(Number(indentation)) ? 0 : Number(indentation);
  return JSON.stringify(data, null, indent);
};
var handler_default = handler;

// ../lib/dist/formulas/multiply/handler.js
var handler_exports2 = {};
__export(handler_exports2, {
  default: () => handler_default2
});
var handler2 = (numbers) => {
  if (numbers.some((n) => isNaN(Number(n)))) {
    return null;
  }
  return numbers.reduce(
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
    (product, num) => product * num,
    1
  );
};
var handler_default2 = handler2;

// ../lib/dist/formulas/getFromLocalStorage/handler.js
var handler_exports3 = {};
__export(handler_exports3, {
  default: () => handler_default3
});
var handler3 = ([key]) => {
  if (typeof key !== "string" || key.length === 0) {
    return null;
  }
  if (typeof window === "undefined") {
    return null;
  }
  const value = window.localStorage.getItem(key);
  if (value === null) {
    return value;
  }
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};
var handler_default3 = handler3;

// ../lib/dist/formulas/currentURL/handler.js
var handler_exports4 = {};
__export(handler_exports4, {
  default: () => handler_default4
});
var handler4 = (_, { env }) => {
  if (env.isServer) {
    return env.request.url;
  } else {
    return window?.location.href ?? null;
  }
};
var handler_default4 = handler4;

// ../lib/dist/formulas/roundDown/handler.js
var handler_exports5 = {};
__export(handler_exports5, {
  default: () => handler_default5
});
var handler5 = ([input, decimals]) => {
  if (typeof input !== "number") {
    return null;
  }
  if (typeof decimals !== "number") {
    return null;
  }
  const multiplier = Math.max(1, Math.pow(10, decimals));
  return Math.floor(input * multiplier) / multiplier;
};
var handler_default5 = handler5;

// ../lib/dist/formulas/greaterThan/handler.js
var handler_exports6 = {};
__export(handler_exports6, {
  default: () => handler_default6
});
var handler6 = ([first, second]) => {
  return first > second;
};
var handler_default6 = handler6;

// ../lib/dist/formulas/string/handler.js
var handler_exports7 = {};
__export(handler_exports7, {
  default: () => handler_default7
});
var handler7 = ([input]) => String(input);
var handler_default7 = handler7;

// ../lib/dist/formulas/trim/handler.js
var handler_exports8 = {};
__export(handler_exports8, {
  default: () => handler_default8
});
var handler8 = ([str]) => {
  if (typeof str !== "string") {
    return null;
  }
  return str.trim();
};
var handler_default8 = handler8;

// ../lib/dist/formulas/take/handler.js
var handler_exports9 = {};
__export(handler_exports9, {
  default: () => handler_default9
});
var handler9 = ([list, count]) => {
  if (typeof count !== "number") {
    return null;
  }
  if (Array.isArray(list)) {
    return list.slice(0, count);
  }
  if (typeof list === "string") {
    return list.substring(0, count);
  }
  return null;
};
var handler_default9 = handler9;

// ../lib/dist/formulas/timestamp/handler.js
var handler_exports10 = {};
__export(handler_exports10, {
  default: () => handler_default10
});
var handler10 = ([date]) => {
  if (!date || !(date instanceof Date)) {
    return null;
  }
  return date.getTime();
};
var handler_default10 = handler10;

// ../lib/dist/formulas/first/handler.js
var handler_exports11 = {};
__export(handler_exports11, {
  default: () => handler_default11
});
var handler11 = ([list]) => {
  if (typeof list === "string" || Array.isArray(list)) {
    return list[0];
  }
  return null;
};
var handler_default11 = handler11;

// ../lib/dist/formulas/Id/handler.js
var handler_exports12 = {};
__export(handler_exports12, {
  default: () => handler_default12
});
var localCounter = 0;
var requestCounters = /* @__PURE__ */ new WeakMap();
function getRequestCounter(key) {
  if (!requestCounters.has(key)) {
    requestCounters.set(key, { idCounter: 0 });
  }
  return requestCounters.get(key);
}
var handler12 = (_, ctx) => {
  if (ctx.env.isServer) {
    const counter = getRequestCounter(ctx.env.request);
    return `_id_${counter.idCounter++}_`;
  }
  return `_id_${localCounter++}_`;
};
var handler_default12 = handler12;

// ../lib/dist/formulas/clamp/handler.js
var handler_exports13 = {};
__export(handler_exports13, {
  default: () => handler_default13
});
var handler13 = ([value, min, max]) => {
  if (typeof value !== "number") {
    return null;
  }
  if (typeof min !== "number") {
    return null;
  }
  if (typeof max !== "number") {
    return null;
  }
  return Math.min(Math.max(value, min), max);
};
var handler_default13 = handler13;

// ../lib/dist/formulas/replaceAll/handler.js
var handler_exports14 = {};
__export(handler_exports14, {
  default: () => handler_default14
});
var handler14 = ([input, searchValue, replaceValue]) => {
  if (typeof input !== "string") {
    return null;
  }
  if (typeof searchValue !== "string") {
    return null;
  }
  return input.replaceAll(searchValue, String(replaceValue));
};
var handler_default14 = handler14;

// ../lib/dist/formulas/defaultTo/handler.js
var handler_exports15 = {};
__export(handler_exports15, {
  default: () => handler_default15
});
var handler15 = (values) => {
  for (const value of values) {
    if (toBoolean(value)) {
      return value;
    }
  }
  return null;
};
var handler_default15 = handler15;

// ../lib/dist/formulas/formatNumber/handler.js
var handler_exports16 = {};
__export(handler_exports16, {
  default: () => handler_default16
});
var handler16 = ([input, loc, opt]) => {
  if (typeof input !== "number" || Number.isNaN(input)) {
    return null;
  }
  const locales = typeof loc === "string" && loc.length > 0 ? loc : Array.isArray(loc) && loc.every((l) => typeof l === "string") ? loc : void 0;
  if (!opt || typeof opt !== "object") {
    return Intl.NumberFormat(locales).format(input);
  }
  const validateString = (value, allowedValues) => typeof value === "string" && (allowedValues?.includes(value) ?? true) ? value : void 0;
  const options = opt;
  const style = validateString(options.style, ["decimal", "currency", "percent", "unit"]);
  const currency = typeof options.currency === "string" && options.currency.length === 3 ? options.currency : void 0;
  if (style === "currency" && typeof currency !== "string") {
    return null;
  }
  const currencyDisplay = validateString(options.currencyDisplay, ["code", "symbol", "narrowSymbol", "name"]);
  const unit = typeof options.unit === "string" ? options.unit : void 0;
  if (style === "unit" && typeof unit !== "string") {
    return null;
  }
  const unitDisplay = validateString(options.unitDisplay, ["short", "narrow", "long"]);
  const minimumIntegerDigits = typeof options.minimumIntegerDigits === "number" && options.minimumIntegerDigits >= 1 && options.minimumIntegerDigits <= 21 ? options.minimumIntegerDigits : void 0;
  const minimumFractionDigits = typeof options.minimumFractionDigits === "number" && options.minimumFractionDigits >= 0 && options.minimumFractionDigits <= 100 ? options.minimumFractionDigits : void 0;
  const maximumFractionDigits = typeof options.maximumFractionDigits === "number" && options.maximumFractionDigits >= 0 && options.maximumFractionDigits <= 100 ? options.maximumFractionDigits : void 0;
  const minimumSignificantDigits = typeof options.minimumSignificantDigits === "number" && options.minimumSignificantDigits >= 1 && options.minimumSignificantDigits <= 21 ? options.minimumSignificantDigits : void 0;
  const maximumSignificantDigits = typeof options.maximumSignificantDigits === "number" && options.maximumSignificantDigits >= 1 && options.maximumSignificantDigits <= 21 ? options.maximumSignificantDigits : void 0;
  const notation = validateString(options.notation, ["standard", "scientific", "engineering", "compact"]);
  const compactDisplay = validateString(options.compactDisplay, ["short", "long"]);
  const validGroupingValues = ["always", "auto", "min2"];
  const useGrouping = typeof options.useGrouping === "boolean" ? options.useGrouping : validateString(options.useGrouping, validGroupingValues);
  return new Intl.NumberFormat(locales, {
    style,
    currency,
    currencyDisplay,
    unit,
    unitDisplay,
    minimumIntegerDigits,
    minimumFractionDigits,
    maximumFractionDigits,
    minimumSignificantDigits,
    maximumSignificantDigits,
    notation,
    compactDisplay,
    useGrouping
  }).format(input);
};
var handler_default16 = handler16;

// ../lib/dist/formulas/split/handler.js
var handler_exports17 = {};
__export(handler_exports17, {
  default: () => handler_default17
});
var handler17 = ([inputString, delimiter]) => {
  if (typeof inputString !== "string") {
    return null;
  }
  if (typeof delimiter !== "string") {
    return null;
  }
  return inputString.split(delimiter);
};
var handler_default17 = handler17;

// ../lib/dist/formulas/every/handler.js
var handler_exports18 = {};
__export(handler_exports18, {
  default: () => handler_default18,
  getArgumentInputData: () => getArgumentInputData,
  handler: () => handler18
});
var handler18 = ([items, fx]) => {
  if (typeof fx !== "function") {
    return null;
  }
  if (Array.isArray(items)) {
    return items.every((item, index) => fx({ item, index }));
  }
  if (items && typeof items === "object") {
    return Object.entries(items).every(([key, value]) => fx({ key, value }));
  }
  return null;
};
var handler_default18 = handler18;
var getArgumentInputData = ([items], argIndex, input) => {
  if (argIndex === 0) {
    return input;
  }
  if (Array.isArray(items)) {
    return { ...input, Args: { item: items[0], index: 0 } };
  }
  if (items && typeof items === "object") {
    const [first] = Object.entries(items);
    if (first) {
      return { ...input, Args: { key: first[0], value: first[1] } };
    }
  }
  return input;
};

// ../lib/dist/formulas/getElementById/handler.js
var handler_exports19 = {};
__export(handler_exports19, {
  default: () => handler_default19
});
var handler19 = ([id], { root }) => {
  if (typeof id !== "string") {
    return null;
  }
  return root.getElementById(id);
};
var handler_default19 = handler19;

// ../lib/dist/formulas/groupBy/handler.js
var handler_exports20 = {};
__export(handler_exports20, {
  default: () => handler_default20,
  getArgumentInputData: () => getArgumentInputData2,
  handler: () => handler20
});
var handler20 = ([items, func]) => {
  if (typeof func !== "function") {
    return null;
  }
  if (!items || typeof items !== "object" || !Array.isArray(items)) {
    return null;
  }
  const res = {};
  for (const index in items) {
    const item = items[index];
    const key = String(func({ item, index }));
    res[key] = res[key] ?? [];
    res[key].push(item);
  }
  return res;
};
var handler_default20 = handler20;
var getArgumentInputData2 = ([items], argIndex, input) => {
  if (argIndex === 1 && Array.isArray(items)) {
    return { ...input, Args: { item: items[0], index: 0 } };
  }
  return input;
};

// ../lib/dist/formulas/now/handler.js
var handler_exports21 = {};
__export(handler_exports21, {
  default: () => handler_default21
});
var handler21 = () => {
  return /* @__PURE__ */ new Date();
};
var handler_default21 = handler21;

// ../lib/dist/formulas/divide/handler.js
var handler_exports22 = {};
__export(handler_exports22, {
  default: () => handler_default22
});
var handler22 = ([a, b]) => {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return null;
  }
  return Number(a) / Number(b);
};
var handler_default22 = handler22;

// ../lib/dist/formulas/sort_by/handler.js
var handler_exports23 = {};
__export(handler_exports23, {
  default: () => handler_default23,
  getArgumentInputData: () => getArgumentInputData3
});
var handler23 = ([array, formula, ascending]) => {
  if (!Array.isArray(array)) {
    return null;
  }
  if (typeof formula !== "function") {
    return null;
  }
  if (typeof ascending !== "boolean") {
    return null;
  }
  const ascendingModifier = ascending ? 1 : -1;
  return [...array].sort((a, b) => {
    const keyA = formula({ item: a });
    const keyB = formula({ item: b });
    if (Array.isArray(keyA) && Array.isArray(keyB)) {
      for (const i in keyA) {
        if (keyA[i] === keyB[i]) {
          continue;
        }
        return (keyA[i] > keyB[i] ? 1 : -1) * ascendingModifier;
      }
      return 0;
    }
    if (keyA === keyB) {
      return 0;
    }
    return (keyA > keyB ? 1 : -1) * ascendingModifier;
  });
};
var handler_default23 = handler23;
var getArgumentInputData3 = ([items], argIndex, input) => {
  if (argIndex === 1 && Array.isArray(items)) {
    return { ...input, Args: { item: items[0] } };
  }
  return input;
};

// ../lib/dist/formulas/squareRoot/handler.js
var handler_exports24 = {};
__export(handler_exports24, {
  default: () => handler_default24
});
var handler24 = ([n]) => {
  if (typeof n !== "number") {
    return null;
  }
  return Math.sqrt(n);
};
var handler_default24 = handler24;

// ../lib/dist/formulas/encodeURIComponent/handler.js
var handler_exports25 = {};
__export(handler_exports25, {
  default: () => handler_default25
});
var handler25 = ([URIComponent]) => {
  if (typeof URIComponent !== "string") {
    return null;
  }
  return encodeURIComponent(URIComponent);
};
var handler_default25 = handler25;

// ../lib/dist/formulas/modulo/handler.js
var handler_exports26 = {};
__export(handler_exports26, {
  default: () => handler_default26
});
var handler26 = ([a, b]) => {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return null;
  }
  return Number(a) % Number(b);
};
var handler_default26 = handler26;

// ../lib/dist/formulas/add/handler.js
var handler_exports27 = {};
__export(handler_exports27, {
  default: () => handler_default27
});
var handler27 = (numbers) => {
  if (!Array.isArray(numbers) || numbers.some((n) => n === null || typeof n !== "number")) {
    return null;
  }
  return numbers.reduce((result, n) => {
    return result + Number(n);
  }, 0);
};
var handler_default27 = handler27;

// ../lib/dist/formulas/minus/handler.js
var handler_exports28 = {};
__export(handler_exports28, {
  default: () => handler_default28
});
var handler28 = ([a, b]) => {
  const first = Number(a);
  const second = Number(b);
  if (isNaN(first) || isNaN(second)) {
    return null;
  }
  return first - second;
};
var handler_default28 = handler28;

// ../lib/dist/formulas/get/handler.js
var handler_exports29 = {};
__export(handler_exports29, {
  default: () => handler_default29
});
var handler29 = ([collection, key]) => {
  if (typeof collection === "string") {
    return collection[Number(key)];
  }
  const resolve = (collection2, path) => {
    if (path.length === 0) {
      return collection2;
    }
    const [head, ...rest] = path;
    return resolve(collection2?.[String(head)], rest);
  };
  return resolve(collection, Array.isArray(key) ? key : [key]);
};
var handler_default29 = handler29;

// ../lib/dist/formulas/branchName/handler.js
var handler_exports30 = {};
__export(handler_exports30, {
  default: () => handler_default30
});
var handler30 = (_, ctx) => {
  return ctx.env.branchName;
};
var handler_default30 = handler30;

// ../lib/dist/formulas/logarithm/handler.js
var handler_exports31 = {};
__export(handler_exports31, {
  default: () => handler_default31
});
var handler31 = ([a]) => {
  if (typeof a !== "number" || Number.isNaN(a)) {
    return null;
  }
  if (a < 0) {
    return null;
  }
  return Math.log(a);
};
var handler_default31 = handler31;

// ../lib/dist/formulas/notEqual/handler.js
var handler_exports32 = {};
__export(handler_exports32, {
  default: () => handler_default32
});
var handler32 = ([a, b]) => {
  return !globalThis.toddle.isEqual(a, b);
};
var handler_default32 = handler32;

// ../lib/dist/formulas/boolean/handler.js
var handler_exports33 = {};
__export(handler_exports33, {
  default: () => handler_default33
});
var handler33 = ([input]) => {
  return toBoolean(input);
};
var handler_default33 = handler33;

// ../lib/dist/formulas/matches/handler.js
var handler_exports34 = {};
__export(handler_exports34, {
  default: () => handler_default34
});
var handler34 = ([inputString, regex, globalFlag, ignoreCaseFlag, multiLineFlag]) => {
  if (typeof inputString !== "string" || typeof regex !== "string") {
    return [];
  }
  const flags = [
    toBoolean(globalFlag) ? "g" : "",
    toBoolean(ignoreCaseFlag) ? "i" : "",
    toBoolean(multiLineFlag) ? "m" : ""
  ].join("");
  const re = new RegExp(regex, flags);
  return inputString.match(re) ?? [];
};
var handler_default34 = handler34;

// ../lib/dist/formulas/getFromSessionStorage/handler.js
var handler_exports35 = {};
__export(handler_exports35, {
  default: () => handler_default35
});
var handler35 = ([key]) => {
  if (typeof key !== "string" || key.length === 0) {
    return null;
  }
  if (typeof window === "undefined") {
    return null;
  }
  const value = window.sessionStorage.getItem(key);
  if (value === null) {
    return value;
  }
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};
var handler_default35 = handler35;

// ../lib/dist/formulas/equals/handler.js
var handler_exports36 = {};
__export(handler_exports36, {
  default: () => handler_default36
});
var handler36 = ([a, b]) => {
  return globalThis.toddle.isEqual(a, b);
};
var handler_default36 = handler36;

// ../lib/dist/formulas/keyBy/handler.js
var handler_exports37 = {};
__export(handler_exports37, {
  default: () => handler_default37,
  getArgumentInputData: () => getArgumentInputData4,
  handler: () => handler37
});
var handler37 = ([items, func]) => {
  if (typeof func !== "function") {
    return null;
  }
  if (!items || typeof items !== "object") {
    return null;
  }
  const list = Array.isArray(items) ? items : Object.entries(items);
  const res = {};
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const key = String(func({ item, i }));
    res[key] = item;
  }
  return res;
};
var handler_default37 = handler37;
var getArgumentInputData4 = ([items], argIndex, input) => {
  if (argIndex === 0) {
    return input;
  }
  if (Array.isArray(items)) {
    return { ...input, Args: { item: items[0], index: 0 } };
  }
  if (items && typeof items === "object") {
    const [first] = Object.entries(items);
    if (first) {
      return { ...input, Args: { value: first[1], key: first[0] } };
    }
  }
  return input;
};

// ../lib/dist/formulas/decodeBase64/handler.js
var handler_exports38 = {};
__export(handler_exports38, {
  default: () => handler_default38
});
var handler38 = ([input]) => {
  if (typeof input !== "string") {
    return null;
  }
  return atob(input);
};
var handler_default38 = handler38;

// ../lib/dist/formulas/parseJSON/handler.js
var handler_exports39 = {};
__export(handler_exports39, {
  default: () => handler_default39
});

// ../core/dist/utils/json.js
var iso8601Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:.\d{1,3})?Z$/;
function parseJSONWithDate(input) {
  return JSON.parse(input, (_, value) => {
    if (typeof value === "string" && value.length === 24 && iso8601Regex.test(value)) {
      return new Date(value);
    }
    return value;
  });
}

// ../lib/dist/formulas/parseJSON/handler.js
var handler39 = ([data, parseDate]) => {
  if (typeof data !== "string") {
    return null;
  }
  try {
    if (parseDate === null || parseDate === void 0 || Boolean(parseDate)) {
      return parseJSONWithDate(data);
    }
    return JSON.parse(data);
  } catch {
    return null;
  }
};
var handler_default39 = handler39;

// ../lib/dist/formulas/startsWith/handler.js
var handler_exports40 = {};
__export(handler_exports40, {
  default: () => handler_default40
});
var handler40 = ([collection, prefix]) => {
  if (typeof collection !== "string") {
    return null;
  }
  if (typeof prefix !== "string") {
    return null;
  }
  return collection.startsWith(prefix);
};
var handler_default40 = handler40;

// ../lib/dist/formulas/findIndex/handler.js
var handler_exports41 = {};
__export(handler_exports41, {
  default: () => handler_default41,
  getArgumentInputData: () => getArgumentInputData5,
  handler: () => handler41
});
var handler41 = ([items, fx]) => {
  if (typeof fx !== "function") {
    return null;
  }
  if (Array.isArray(items)) {
    return items.findIndex((item, index) => fx({ item, index }));
  }
  if (items && typeof items === "object") {
    return Object.entries(items).findIndex(([key, value]) => fx({ key, value }));
  }
  return null;
};
var handler_default41 = handler41;
var getArgumentInputData5 = ([items], argIndex, input) => {
  if (argIndex === 0) {
    return input;
  }
  if (Array.isArray(items)) {
    return { ...input, Args: { item: items[0], index: 0 } };
  }
  if (items && typeof items === "object") {
    const [first] = Object.entries(items);
    if (first) {
      return { ...input, Args: { key: first[0], value: first[1] } };
    }
  }
  return input;
};

// ../lib/dist/formulas/some/handler.js
var handler_exports42 = {};
__export(handler_exports42, {
  default: () => handler_default42,
  getArgumentInputData: () => getArgumentInputData6,
  handler: () => handler42
});
var handler42 = ([items, fx]) => {
  if (typeof fx !== "function") {
    return null;
  }
  if (Array.isArray(items)) {
    return items.some((item, index) => fx({ item, index }));
  }
  if (items && typeof items === "object") {
    return Object.entries(items).some(([key, value]) => fx({ key, value }));
  }
  return null;
};
var handler_default42 = handler42;
var getArgumentInputData6 = ([items], argIndex, input) => {
  if (argIndex === 0) {
    return input;
  }
  if (Array.isArray(items)) {
    return { ...input, Args: { item: items[0], index: 0 } };
  }
  if (items && typeof items === "object") {
    const [first] = Object.entries(items);
    if (first) {
      return { ...input, Args: { key: first[0], value: first[1] } };
    }
  }
  return input;
};

// ../lib/dist/formulas/size/handler.js
var handler_exports43 = {};
__export(handler_exports43, {
  default: () => handler_default43
});
var handler43 = ([collection]) => {
  if (Array.isArray(collection)) {
    return collection.length;
  }
  if (isObject(collection)) {
    return Object.keys(collection).length;
  }
  if (typeof collection === "string") {
    return collection.length;
  }
  return null;
};
var handler_default43 = handler43;

// ../lib/dist/formulas/reverse/handler.js
var handler_exports44 = {};
__export(handler_exports44, {
  default: () => handler_default44
});
var handler44 = ([list]) => {
  if (Array.isArray(list)) {
    return [...list].reverse();
  }
  return null;
};
var handler_default44 = handler44;

// ../lib/dist/formulas/roundUp/handler.js
var handler_exports45 = {};
__export(handler_exports45, {
  default: () => handler_default45
});
var handler45 = ([input, decimals]) => {
  if (typeof input !== "number") {
    return null;
  }
  if (typeof decimals !== "number") {
    return null;
  }
  const multiplier = Math.max(1, Math.pow(10, decimals));
  return Math.ceil(input * multiplier) / multiplier;
};
var handler_default45 = handler45;

// ../lib/dist/formulas/lessOrEqual/handler.js
var handler_exports46 = {};
__export(handler_exports46, {
  default: () => handler_default46
});
var handler46 = ([first, second]) => {
  return first <= second;
};
var handler_default46 = handler46;

// ../lib/dist/formulas/typeOf/handler.js
var handler_exports47 = {};
__export(handler_exports47, {
  default: () => handler_default47
});
var handler47 = ([value]) => {
  switch (typeof value) {
    case "number":
      if (isNaN(value)) {
        return null;
      }
      return "Number";
    case "string":
      return "String";
    case "boolean":
      return "Boolean";
    case "object":
      return Array.isArray(value) ? "Array" : value === null ? "Null" : "Object";
    case "undefined":
      return "Null";
    default:
      return null;
  }
};
var handler_default47 = handler47;

// ../lib/dist/formulas/isServer/handler.js
var handler_exports48 = {};
__export(handler_exports48, {
  default: () => handler_default48
});
var handler48 = (_, ctx) => {
  return ctx.env.isServer;
};
var handler_default48 = handler48;

// ../lib/dist/formulas/parseURL/handler.js
var handler_exports49 = {};
__export(handler_exports49, {
  default: () => handler_default49
});
var NCURL = class {
  hostname;
  searchParams;
  path;
  hash;
  href;
  protocol;
  port;
  origin;
  constructor(url) {
    this.hostname = url.hostname;
    this.searchParams = Object.fromEntries(url.searchParams);
    this.path = url.pathname.split("/").filter((p, i) => i !== 0 || p !== "");
    this.hash = url.hash.replace("#", "");
    this.href = url.href;
    this.protocol = url.protocol;
    this.port = url.port;
    this.origin = url.origin;
  }
  toString() {
    return this.href;
  }
};
var handler49 = ([url, base]) => {
  if (typeof url !== "string") {
    return null;
  }
  try {
    return new NCURL(new URL(url, typeof base === "string" ? base : void 0));
  } catch {
    return null;
  }
};
var handler_default49 = handler49;

// ../lib/dist/formulas/number/handler.js
var handler_exports50 = {};
__export(handler_exports50, {
  default: () => handler_default50
});
var handler50 = ([a]) => Number(a);
var handler_default50 = handler50;

// ../lib/dist/formulas/getHttpOnlyCookie/handler.js
var handler_exports51 = {};
__export(handler_exports51, {
  default: () => handler_default51
});

// ../core/dist/api/template.js
var STRING_TEMPLATE = (type, name) => {
  return `{{ ${templateTypes[type]}.${name} }}`;
};
var templateTypes = {
  cookies: "cookies"
};

// ../lib/dist/formulas/getHttpOnlyCookie/handler.js
var handler51 = ([name]) => {
  if (!name || typeof name !== "string") {
    return null;
  }
  return STRING_TEMPLATE("cookies", name);
};
var handler_default51 = handler51;

// ../lib/dist/formulas/capitalize/handler.js
var handler_exports52 = {};
__export(handler_exports52, {
  default: () => handler_default52
});
var handler52 = ([input]) => {
  if (typeof input !== "string") {
    return null;
  }
  const firstChar = input.at(0);
  if (input.length === 0 || typeof firstChar !== "string") {
    return input;
  }
  return firstChar.toLocaleUpperCase() + input.substring(1).toLocaleLowerCase();
};
var handler_default52 = handler52;

// ../lib/dist/formulas/greaterOrEqueal/handler.js
var handler_exports53 = {};
__export(handler_exports53, {
  default: () => handler_default53
});
var handler53 = ([first, second]) => {
  return first >= second;
};
var handler_default53 = handler53;

// ../lib/dist/formulas/formatDate/handler.js
var handler_exports54 = {};
__export(handler_exports54, {
  default: () => handler_default54
});
var handler54 = ([date, loc, opt]) => {
  if (!date || !(date instanceof Date)) {
    return null;
  }
  const locales = typeof loc === "string" && loc.length > 0 ? loc : Array.isArray(loc) && loc.every((l) => typeof l === "string") ? loc : void 0;
  if (!opt || typeof opt !== "object") {
    return Intl.DateTimeFormat(locales).format(date);
  }
  const validateString = (value, allowedValues) => typeof value === "string" && (allowedValues?.includes(value) ?? true) ? value : void 0;
  const options = opt;
  const dateStyle = validateString(options.dateStyle, ["full", "long", "medium", "short"]);
  const timeStyle = validateString(options.timeStyle, ["full", "long", "medium", "short"]);
  const calendar = validateString(options.calendar);
  const weekday = validateString(options.weekday, ["long", "short", "narrow"]);
  const era = validateString(options.era, [
    "long",
    "short",
    "narrow"
  ]);
  const year = validateString(options.year, ["numeric", "2-digit"]);
  const month = validateString(options.month, ["long", "short", "narrow", "numeric", "2-digit"]);
  const day = validateString(options.day, [
    "numeric",
    "2-digit"
  ]);
  const hour = validateString(options.hour, ["numeric", "2-digit"]);
  const minute = validateString(options.minute, ["numeric", "2-digit"]);
  const second = validateString(options.second, ["numeric", "2-digit"]);
  const timeZoneName = validateString(options.timeZoneName, [
    "long",
    "short",
    "shortOffset",
    "longOffset",
    "shortGeneric",
    "longGeneric"
  ]);
  const timeZone = validateString(options.timeZone);
  const hour12 = options.hour12 === true ? true : options.hour12 === false ? false : void 0;
  return Intl.DateTimeFormat(locales, {
    dateStyle,
    timeStyle,
    calendar,
    weekday,
    era,
    year,
    month,
    day,
    hour,
    minute,
    second,
    timeZoneName,
    timeZone,
    hour12
  }).format(date);
};
var handler_default54 = handler54;

// ../lib/dist/formulas/entries/handler.js
var handler_exports55 = {};
__export(handler_exports55, {
  default: () => handler_default55
});
var handler55 = ([object]) => {
  if (typeof object === "object" && object !== null) {
    return Object.entries(object).map(([key, value]) => ({ key, value }));
  }
  return null;
};
var handler_default55 = handler55;

// ../lib/dist/formulas/includes/handler.js
var handler_exports56 = {};
__export(handler_exports56, {
  default: () => handler_default56
});
var handler56 = ([collection, item]) => {
  if (typeof collection === "string" && typeof item === "string") {
    return collection.includes(item);
  }
  if (Array.isArray(collection)) {
    return collection.some((collectionItem) => globalThis.toddle.isEqual(collectionItem, item));
  }
  return null;
};
var handler_default56 = handler56;

// ../lib/dist/formulas/round/handler.js
var handler_exports57 = {};
__export(handler_exports57, {
  default: () => handler_default57
});
var handler57 = ([input, decimals]) => {
  if (typeof input !== "number") {
    return null;
  }
  if (typeof decimals !== "number") {
    return null;
  }
  const multiplier = Math.max(1, Math.pow(10, decimals));
  return Math.round(input * multiplier) / multiplier;
};
var handler_default57 = handler57;

// ../lib/dist/formulas/shuffle/handler.js
var handler_exports58 = {};
__export(handler_exports58, {
  default: () => handler_default58
});
var handler58 = ([list]) => {
  if (Array.isArray(list)) {
    return shuffle(list);
  }
  if (typeof list === "string") {
    return shuffle(list.split("")).join("");
  }
  return null;
};
function shuffle(input) {
  const array = [...input];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
var handler_default58 = handler58;

// ../lib/dist/formulas/fromEntries/handler.js
var handler_exports59 = {};
__export(handler_exports59, {
  default: () => handler_default59
});
var handler59 = ([list]) => {
  if (Array.isArray(list)) {
    const object = {};
    for (const { key, value } of list) {
      object[key] = value;
    }
    return object;
  }
  return null;
};
var handler_default59 = handler59;

// ../lib/dist/formulas/uppercase/handler.js
var handler_exports60 = {};
__export(handler_exports60, {
  default: () => handler_default60
});
var handler60 = ([input]) => {
  if (typeof input !== "string") {
    return null;
  }
  return input.toLocaleUpperCase();
};
var handler_default60 = handler60;

// ../lib/dist/formulas/languages/handler.js
var handler_exports61 = {};
__export(handler_exports61, {
  default: () => handler_default61
});
var handler61 = (_, { env }) => {
  if (!env.isServer) {
    return window.navigator.languages;
  } else {
    return (
      // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
      env.request?.headers["accept-language"]?.split(",").map((lang) => lang.split(";")[0] ?? "") ?? []
    );
  }
};
var handler_default61 = handler61;

// ../lib/dist/formulas/userAgent/handler.js
var handler_exports62 = {};
__export(handler_exports62, {
  default: () => handler_default62
});
var handler62 = (_, { env }) => {
  if (!env.isServer) {
    return window.navigator.userAgent;
  } else {
    return env.request?.headers["user-agent"] ?? null;
  }
};
var handler_default62 = handler62;

// ../lib/dist/formulas/getCookie/handler.js
var handler_exports63 = {};
__export(handler_exports63, {
  default: () => handler_default63
});
var handler63 = ([name], { env, root }) => {
  if (!name || typeof name !== "string") {
    return null;
  }
  if (!env.isServer) {
    if (root instanceof ShadowRoot) {
      return null;
    }
    return (
      // See https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
      root.cookie.split("; ")?.find((row) => row.startsWith(`${name}=`))?.split("=")[1] ?? null
    );
  } else {
    return env.request.cookies[name] ?? null;
  }
};
var handler_default63 = handler63;

// ../lib/dist/formulas/encodeJSON/handler.js
var handler_exports64 = {};
__export(handler_exports64, {
  default: () => handler_default64
});
var handler64 = ([data, indent]) => {
  if (typeof indent !== "number") {
    return null;
  }
  return JSON.stringify(data, null, indent);
};
var handler_default64 = handler64;

// ../lib/dist/formulas/map/handler.js
var handler_exports65 = {};
__export(handler_exports65, {
  default: () => handler_default65,
  getArgumentInputData: () => getArgumentInputData7
});
var handler65 = ([items, fx]) => {
  if (typeof fx !== "function") {
    return null;
  }
  if (Array.isArray(items)) {
    return items.map((item, index) => fx({ item, index }));
  }
  if (items && typeof items === "object") {
    return Object.fromEntries(Object.entries(items).map(([key, value]) => {
      const res = fx({ key, value });
      if ("key" in res && "value" in res) {
        return [res.key, res.value];
      }
      return null;
    }));
  }
  return null;
};
var getArgumentInputData7 = ([items], argIndex, input) => {
  if (argIndex === 0) {
    return input;
  }
  if (Array.isArray(items)) {
    return { ...input, Args: { item: items[0], index: 0 } };
  }
  if (items && typeof items === "object") {
    const [first] = Object.entries(items);
    if (first) {
      return { ...input, Args: { key: first[0], value: first[1] } };
    }
  }
  return input;
};
var handler_default65 = handler65;

// ../lib/dist/formulas/decodeURIComponent/handler.js
var handler_exports66 = {};
__export(handler_exports66, {
  default: () => handler_default66
});
var handler66 = ([URIComponent]) => {
  if (typeof URIComponent !== "string") {
    return null;
  }
  return decodeURIComponent(URIComponent);
};
var handler_default66 = handler66;

// ../lib/dist/formulas/power/handler.js
var handler_exports67 = {};
__export(handler_exports67, {
  default: () => handler_default67
});
var handler67 = ([a, b]) => {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return null;
  }
  return Number(a) ** Number(b);
};
var handler_default67 = handler67;

// ../lib/dist/formulas/drop/handler.js
var handler_exports68 = {};
__export(handler_exports68, {
  default: () => handler_default68
});
var handler68 = ([list, count]) => {
  if (typeof count !== "number" || isNaN(count)) {
    return null;
  }
  if (Array.isArray(list)) {
    return list.slice(count);
  }
  if (typeof list === "string") {
    return list.substring(count);
  }
  return null;
};
var handler_default68 = handler68;

// ../lib/dist/formulas/not/handler.js
var handler_exports69 = {};
__export(handler_exports69, {
  default: () => handler_default69
});
var handler69 = ([a]) => !toBoolean(a);
var handler_default69 = handler69;

// ../lib/dist/formulas/dropLast/handler.js
var handler_exports70 = {};
__export(handler_exports70, {
  default: () => handler_default70
});
var handler70 = ([list, count]) => {
  if (typeof count !== "number" || isNaN(count)) {
    return null;
  }
  if (Array.isArray(list)) {
    return list.slice(0, list.length - count);
  }
  if (typeof list === "string") {
    return list.substring(0, list.length - count);
  }
  return null;
};
var handler_default70 = handler70;

// ../lib/dist/formulas/sum/handler.js
var handler_exports71 = {};
__export(handler_exports71, {
  default: () => handler_default71
});
var handler71 = ([list]) => {
  if (Array.isArray(list)) {
    let sum = 0;
    for (const n of list) {
      if (isNaN(n) || typeof n !== "number") {
        return null;
      }
      sum += n;
    }
    return sum;
  }
  return null;
};
var handler_default71 = handler71;

// ../lib/dist/formulas/canShare/handler.js
var handler_exports72 = {};
__export(handler_exports72, {
  default: () => handler_default72
});
var handler72 = ([url, title, text]) => {
  if (!isDefined(navigator.canShare)) {
    return false;
  }
  const validInput = (value) => isDefined(value) && typeof value === "string";
  if (!validInput(url) && !validInput(title) && !validInput(text)) {
    return false;
  }
  const data = {};
  if (validInput(title)) {
    data.title = title;
  }
  if (validInput(text)) {
    data.text = text;
  }
  if (validInput(url)) {
    data.url = url;
  }
  return navigator.canShare(data);
};
var handler_default72 = handler72;

// ../lib/dist/formulas/dateFromTimestamp/handler.js
var handler_exports73 = {};
__export(handler_exports73, {
  default: () => handler_default73
});
var handler73 = ([timestamp]) => {
  if (typeof timestamp === "number") {
    return new Date(timestamp);
  } else {
    return null;
  }
};
var handler_default73 = handler73;

// ../lib/dist/formulas/min/handler.js
var handler_exports74 = {};
__export(handler_exports74, {
  default: () => handler_default74
});
var handler74 = (args) => {
  return Math.min(...args.map(Number));
};
var handler_default74 = handler74;

// ../lib/dist/formulas/encodeBase64/handler.js
var handler_exports75 = {};
__export(handler_exports75, {
  default: () => handler_default75
});
var handler75 = ([input]) => {
  if (typeof input !== "string") {
    return null;
  }
  return btoa(input);
};
var handler_default75 = handler75;

// ../lib/dist/formulas/lastIndexOf/handler.js
var handler_exports76 = {};
__export(handler_exports76, {
  default: () => handler_default76
});
var handler76 = ([collection, item]) => {
  if (typeof collection === "string") {
    return collection.lastIndexOf(item);
  }
  if (Array.isArray(collection)) {
    const fastIndex = collection.lastIndexOf(item);
    if (fastIndex !== -1) {
      return fastIndex;
    }
    return collection.findLastIndex((i) => globalThis.toddle.isEqual(i, item));
  }
  return null;
};
var handler_default76 = handler76;

// ../lib/dist/formulas/lessThan/handler.js
var handler_exports77 = {};
__export(handler_exports77, {
  default: () => handler_default77
});
var handler77 = ([first, second]) => {
  return first < second;
};
var handler_default77 = handler77;

// ../lib/dist/formulas/max/handler.js
var handler_exports78 = {};
__export(handler_exports78, {
  default: () => handler_default78
});
var handler78 = (args) => {
  return Math.max(...args.map(Number));
};
var handler_default78 = handler78;

// ../lib/dist/formulas/unique/handler.js
var handler_exports79 = {};
__export(handler_exports79, {
  default: () => handler_default79
});
var handler79 = ([list]) => {
  if (!Array.isArray(list)) {
    return null;
  }
  const set = /* @__PURE__ */ new Set();
  return list.filter((item) => {
    const key = typeof item === "object" ? JSON.stringify(item) : item;
    if (set.has(key)) {
      return false;
    }
    set.add(key);
    return true;
  });
};
var handler_default79 = handler79;

// ../lib/dist/formulas/last/handler.js
var handler_exports80 = {};
__export(handler_exports80, {
  default: () => handler_default80
});
var handler80 = ([list]) => {
  if (typeof list === "string" || Array.isArray(list)) {
    return list[list.length - 1];
  }
  return null;
};
var handler_default80 = handler80;

// ../lib/dist/formulas/deleteKey/handler.js
var handler_exports81 = {};
__export(handler_exports81, {
  default: () => handler_default81
});
var handler81 = ([collection, key]) => {
  if (typeof collection !== "object" || collection === null) {
    return null;
  }
  if (!Array.isArray(key) && typeof key !== "string" && typeof key !== "number") {
    return null;
  }
  const run = (collection2, [key2, ...path2]) => {
    if (Array.isArray(collection2)) {
      const index = Number(key2);
      if (Number.isNaN(index)) {
        return collection2;
      }
      if (path2.length === 0) {
        return collection2.filter((_, i) => i !== Number(key2));
      }
      return collection2.map((e, i) => i === index ? run(collection2[index], path2) : e);
    }
    if (isObject(collection2)) {
      if (path2.length === 0) {
        return Object.fromEntries(Object.entries(collection2).filter(([k]) => k !== key2));
      }
      if (typeof key2 !== "string" && typeof key2 !== "number") {
        return { ...collection2 };
      } else {
        return {
          ...collection2,
          [key2]: run(collection2[key2], path2)
        };
      }
    }
    return null;
  };
  const path = Array.isArray(key) ? key : [key];
  return run(collection, path);
};
var handler_default81 = handler81;

// ../lib/dist/formulas/range/handler.js
var handler_exports82 = {};
__export(handler_exports82, {
  default: () => handler_default82
});
var handler82 = ([min, max]) => {
  if (typeof min !== "number") {
    return null;
  }
  if (typeof max !== "number") {
    return null;
  }
  if (min > max) {
    return [];
  }
  return Array.from({ length: max - min + 1 }, (_, i) => i + min);
};
var handler_default82 = handler82;

// ../lib/dist/formulas/dateFromString/handler.js
var handler_exports83 = {};
__export(handler_exports83, {
  default: () => handler_default83
});
var handler83 = ([date]) => {
  if (typeof date === "string") {
    return new Date(date);
  } else {
    return null;
  }
};
var handler_default83 = handler83;

// ../lib/dist/formulas/flatten/handler.js
var handler_exports84 = {};
__export(handler_exports84, {
  default: () => handler_default84
});
var handler84 = ([items]) => {
  if (Array.isArray(items)) {
    return items.flat();
  }
  return null;
};
var handler_default84 = handler84;

// ../lib/dist/formulas/set/handler.js
var handler_exports85 = {};
__export(handler_exports85, {
  default: () => handler_default85
});
var handler85 = ([collection, key, value], ctx) => {
  if (typeof key !== "string" && typeof key !== "number" && !Array.isArray(key)) {
    return null;
  }
  const [head, ...rest] = Array.isArray(key) ? key : [key];
  if (isObject(collection)) {
    const clone = Array.isArray(collection) ? [...collection] : { ...collection };
    clone[head] = rest.length === 0 ? value : handler85([clone[head], rest, value], ctx);
    return clone;
  }
  return null;
};
var handler_default85 = handler85;

// ../lib/dist/formulas/randomNumber/handler.js
var handler_exports86 = {};
__export(handler_exports86, {
  default: () => handler_default86
});
var handler86 = () => {
  return Math.random();
};
var handler_default86 = handler86;

// ../lib/dist/formulas/join/handler.js
var handler_exports87 = {};
__export(handler_exports87, {
  default: () => handler_default87
});
var handler87 = ([list, separator]) => {
  if (Array.isArray(list)) {
    return list.join(String(separator));
  }
  return null;
};
var handler_default87 = handler87;

// ../lib/dist/formulas/lowercase/handler.js
var handler_exports88 = {};
__export(handler_exports88, {
  default: () => handler_default88
});
var handler88 = ([input]) => {
  if (typeof input !== "string") {
    return null;
  }
  return input.toLocaleLowerCase();
};
var handler_default88 = handler88;

// ../lib/dist/formulas/reduce/handler.js
var handler_exports89 = {};
__export(handler_exports89, {
  default: () => handler_default89,
  getArgumentInputData: () => getArgumentInputData8
});
var handler89 = ([items, fx, init]) => {
  if (typeof fx !== "function") {
    return null;
  }
  if (Array.isArray(items)) {
    return items.reduce((result, item, index) => fx({ result, item, index }), init);
  }
  if (items && typeof items === "object") {
    return Object.entries(items).reduce((result, [key, value]) => fx({ result, key, value }), init);
  }
  return null;
};
var handler_default89 = handler89;
var getArgumentInputData8 = ([items, _, result], argIndex, input) => {
  if (argIndex !== 1) {
    return input;
  }
  if (Array.isArray(items)) {
    return {
      ...input,
      Args: {
        item: items[0],
        index: 0,
        result
      }
    };
  }
  if (items && typeof items === "object") {
    const [first] = Object.entries(items);
    if (first) {
      return {
        ...input,
        Args: {
          key: first[0],
          value: first[1],
          result
        }
      };
    }
  }
  return input;
};

// ../lib/dist/formulas/findLast/handler.js
var handler_exports90 = {};
__export(handler_exports90, {
  default: () => handler_default90,
  getArgumentInputData: () => getArgumentInputData9,
  handler: () => handler90
});
var handler90 = ([items, fx]) => {
  if (typeof fx !== "function") {
    return null;
  }
  if (Array.isArray(items)) {
    return items.findLast((item, index) => fx({ item, index }));
  }
  if (items && typeof items === "object") {
    return Object.entries(items).findLast(([key, value]) => fx({ key, value }))?.[1];
  }
  return null;
};
var handler_default90 = handler90;
var getArgumentInputData9 = ([items], argIndex, input) => {
  if (argIndex === 0) {
    return input;
  }
  if (Array.isArray(items)) {
    return { ...input, Args: { item: items[0], index: 0 } };
  }
  if (items && typeof items === "object") {
    const [first] = Object.entries(items);
    if (first) {
      return { ...input, Args: { key: first[0], value: first[1] } };
    }
  }
  return input;
};

// ../lib/dist/formulas/prepend/handler.js
var handler_exports91 = {};
__export(handler_exports91, {
  default: () => handler_default91
});
var handler91 = ([list, value]) => {
  if (!Array.isArray(list)) {
    return null;
  }
  return [value, ...list];
};
var handler_default91 = handler91;

// ../lib/dist/formulas/takeLast/handler.js
var handler_exports92 = {};
__export(handler_exports92, {
  default: () => handler_default92
});
var handler92 = ([list, count]) => {
  if (typeof count !== "number") {
    return null;
  }
  if (Array.isArray(list)) {
    return list.slice(list.length - count);
  }
  if (typeof list === "string") {
    return list.substring(list.length - count);
  }
  return null;
};
var handler_default92 = handler92;

// ../lib/dist/formulas/concatenate/handler.js
var handler_exports93 = {};
__export(handler_exports93, {
  default: () => handler_default93
});
var handler93 = (items) => {
  if (items.every(Array.isArray)) {
    const result = [];
    for (const item of items) {
      result.push(...item);
    }
    return result;
  }
  if (items.every(isObject)) {
    return Object.assign({}, ...items);
  }
  return items.join("");
};
var handler_default93 = handler93;

// ../lib/dist/formulas/absolute/handler.js
var handler_exports94 = {};
__export(handler_exports94, {
  default: () => handler_default94
});
var handler94 = ([a]) => {
  if (typeof a !== "number") {
    return null;
  }
  return Math.abs(a);
};
var handler_default94 = handler94;

// ../lib/dist/formulas/append/handler.js
var handler_exports95 = {};
__export(handler_exports95, {
  default: () => handler_default95
});
var handler95 = ([list, value]) => {
  if (!Array.isArray(list)) {
    return null;
  }
  return [...list, value];
};
var handler_default95 = handler95;

// ../lib/dist/formulas/filter/handler.js
var handler_exports96 = {};
__export(handler_exports96, {
  default: () => handler_default96,
  getArgumentInputData: () => getArgumentInputData10,
  handler: () => handler96
});
var handler96 = ([items, func]) => {
  if (typeof func !== "function") {
    return null;
  }
  if (Array.isArray(items)) {
    return items.filter((item, index) => func({ item, index }));
  }
  if (items && typeof items === "object") {
    return Object.fromEntries(Object.entries(items).filter(([key, value]) => func({ key, value })));
  }
  if (Array.isArray(items)) {
    return items.filter((item, index) => func({ item, index }));
  }
  return null;
};
var handler_default96 = handler96;
var getArgumentInputData10 = ([items], argIndex, input) => {
  if (argIndex === 0) {
    return input;
  }
  if (Array.isArray(items)) {
    return { ...input, Args: { item: items[0], index: 0 } };
  }
  if (items && typeof items === "object") {
    const [first] = Object.entries(items);
    if (first) {
      return { ...input, Args: { value: first[1], key: first[0] } };
    }
  }
  return input;
};

// ../lib/dist/formulas/find/handler.js
var handler_exports97 = {};
__export(handler_exports97, {
  default: () => handler_default97,
  getArgumentInputData: () => getArgumentInputData11,
  handler: () => handler97
});
var handler97 = ([items, fx]) => {
  if (typeof fx !== "function") {
    return null;
  }
  if (Array.isArray(items)) {
    return items.find((item, index) => fx({ item, index }));
  }
  if (items && typeof items === "object") {
    return Object.entries(items).find(([key, value]) => fx({ key, value }))?.[1];
  }
  return null;
};
var handler_default97 = handler97;
var getArgumentInputData11 = ([items], argIndex, input) => {
  if (argIndex === 0) {
    return input;
  }
  if (Array.isArray(items)) {
    return { ...input, Args: { item: items[0], index: 0 } };
  }
  if (items && typeof items === "object") {
    const [first] = Object.entries(items);
    if (first) {
      return { ...input, Args: { key: first[0], value: first[1] } };
    }
  }
  return input;
};

// ../lib/dist/formulas/indexOf/handler.js
var handler_exports98 = {};
__export(handler_exports98, {
  default: () => handler_default98
});
var handler98 = ([collection, item]) => {
  if (typeof collection === "string") {
    return collection.indexOf(item);
  }
  if (Array.isArray(collection)) {
    const fastIndex = collection.indexOf(item);
    if (fastIndex !== -1) {
      return fastIndex;
    }
    return collection.findIndex((i) => globalThis.toddle.isEqual(i, item));
  }
  return null;
};
var handler_default98 = handler98;

// ../ssr/dist/routing/routing.js
var matchPageForUrl = ({ url, pages }) => matchRoutes({
  url,
  entries: Object.fromEntries(pages.map((p) => [p.name, p])),
  getRoute: (page) => page.route
});
var matchRouteForUrl = ({ env, req, routes: routes2, serverContext, url }) => {
  const enabledRoutes = filterObject(routes2 ?? {}, ([_name, route]) => {
    if (!isDefined(route.enabled)) {
      return true;
    }
    const formulaContext = getRouteFormulaContext({
      env,
      req,
      route,
      serverContext
    });
    return toBoolean(applyFormula(route.enabled.formula, formulaContext));
  });
  return matchRoutes({
    url,
    entries: enabledRoutes,
    getRoute: (route) => route.source
  });
};
var matchRoutes = ({ url, entries, getRoute }) => {
  const pathSegments = getPathSegments(url);
  const getPathHash = (path) => path.map((segment) => segment.type === "static" ? "1" : "2").join(".");
  const matches = Object.entries(entries).filter(([_, entry]) => {
    const route = getRoute(entry);
    return pathSegments.length <= route.path.length && route.path.every((segment, index) => segment.type === "param" || segment.optional === true || segment.name === pathSegments[index]);
  }).sort(([_keyA, a], [_keyB, b]) => {
    const routeAHash = getPathHash(getRoute(a).path);
    const routeBHash = getPathHash(getRoute(b).path);
    return routeAHash.localeCompare(routeBHash);
  });
  const bestMatch = matches[0];
  if (!isDefined(bestMatch)) {
    return;
  }
  return { name: bestMatch[0], route: bestMatch[1] };
};
var getRouteDestination = ({ serverContext, req, route, env }) => {
  try {
    const requestUrl = new URL(req.url);
    const formulaContext = getRouteFormulaContext({
      env,
      req,
      route,
      serverContext
    });
    const url = getUrl(route.destination, formulaContext, requestUrl.origin);
    if (route.type === "redirect" && requestUrl.origin === url.origin && requestUrl.pathname === url.pathname) {
      return;
    }
    return url;
  } catch {
  }
};
var getRouteFormulaContext = ({ env, req, route, serverContext }) => {
  const { searchParamsWithDefaults, pathParams } = getParameters({
    route: route.source,
    req
  });
  return {
    component: void 0,
    // destination formulas should only have access to URL parameters from
    // the route's source definition + global formulas.
    data: {
      Attributes: {},
      "Route parameters": {
        path: pathParams ?? {},
        query: searchParamsWithDefaults
      }
    },
    env,
    package: void 0,
    toddle: serverContext
  };
};
var getPathSegments = (url) => url.pathname.substring(1).split("/").filter((s) => s !== "").map((s) => decodeURIComponent(s));

// ../ssr/dist/rendering/cookies.js
var import_cookie = __toESM(require_dist(), 1);
var getRequestCookies = (req) => Object.fromEntries(Object.entries((0, import_cookie.parse)(req.headers.get("cookie") ?? "")).filter(
  // Ensure that both key and value are defined
  (kv) => isDefined(kv[0]) && isDefined(kv[1])
));

// ../ssr/dist/rendering/request.js
var import_xss2 = __toESM(require_lib2(), 1);
var escapeSearchParameter = (searchParameter) => typeof searchParameter === "string" ? (0, import_xss2.default)(searchParameter) : null;
var escapeSearchParameters = (searchParams) => new URLSearchParams([...searchParams.entries()].reduce((params, [key, value]) => {
  const escapedValue = escapeSearchParameter(value);
  if (isDefined(escapedValue)) {
    params[key] = escapedValue;
  }
  return params;
}, {}));

// ../ssr/dist/rendering/formulaContext.js
var getPageFormulaContext = ({ branchName, component, req, logErrors, files }) => {
  const env = serverEnv({ req, branchName, logErrors });
  const { searchParamsWithDefaults, hash: hash3, combinedParams, url } = getParameters({ route: component?.route, req });
  const formulaContext = {
    data: {
      Location: {
        page: component?.page ?? "",
        path: url.pathname,
        params: combinedParams,
        query: searchParamsWithDefaults,
        hash: hash3
      },
      Attributes: combinedParams,
      // Path and query parameters are referenced in a flat structure in formulas
      // hence, we need to merge them. We prefer path parameters over query parameters
      // in case of naming collisions
      "URL parameters": component?.route ? getDataUrlParameters({ route: component.route, req }) : {},
      Apis: {}
    },
    component,
    root: null,
    package: void 0,
    env,
    toddle: getServerToddleObject(files)
  };
  formulaContext.data.Page = {
    Theme: component ? getThemeInitialValue(component, formulaContext, env) : null
  };
  formulaContext.data.Variables = mapValues(component?.variables ?? {}, ({ initialValue }) => {
    return applyFormula(initialValue, formulaContext);
  });
  formulaContext.data.Page = {
    Theme: component ? getThemeInitialValue(component, formulaContext, env) : null
  };
  return formulaContext;
};
var getServerToddleObject = (files) => {
  const coreFormulas = Object.fromEntries(Object.entries(formulas_exports).map(([name, module2]) => [
    "@toddle/" + name,
    module2.default
  ]));
  return {
    getFormula: (name) => coreFormulas[name],
    getCustomFormula: (name, packageName) => {
      let formula;
      if (isDefined(packageName)) {
        formula = files.packages?.[packageName]?.formulas?.[name];
      } else {
        formula = files.formulas?.[name];
      }
      if (formula && isToddleFormula(formula)) {
        return formula;
      }
    },
    errors: []
  };
};
var getDataUrlParameters = ({ route, req }) => {
  const { searchParamsWithDefaults, combinedParams } = getParameters({
    route,
    req
  });
  return {
    ...searchParamsWithDefaults,
    ...combinedParams
  };
};
var getParameters = ({ route, req }) => {
  const url = new URL(req.url);
  const searchParams = [
    ...escapeSearchParameters(url.searchParams).entries()
  ].reduce((params, [key, val]) => ({
    ...params,
    [key]: val ?? null
  }), {});
  const pathSegments = getPathSegments(url);
  const pathParams = route?.path.reduce((prev, param, index) => {
    if (param.type === "param") {
      if (isDefined(pathSegments[index]) && typeof pathSegments[index] === "string") {
        return { ...prev, [param.name]: pathSegments[index] };
      } else {
        return { ...prev, [param.name]: null };
      }
    }
    return prev;
  }, {});
  const defaultQueryParams = Object.keys(route?.query ?? {}).reduce((params, key) => ({ ...params, [key]: null }), {});
  return {
    pathParams,
    searchParamsWithDefaults: { ...defaultQueryParams, ...searchParams },
    combinedParams: { ...searchParams, ...pathParams },
    hash: url.hash.slice(1),
    url
  };
};
var serverEnv = ({ branchName, req, logErrors }) => ({
  branchName,
  // isServer will be true for SSR + proxied requests
  isServer: true,
  request: {
    headers: mapHeadersToObject(req.headers),
    cookies: getRequestCookies(req),
    url: req.url
  },
  logErrors
});
var getThemeInitialValue = (component, formulaContext, env) => {
  const themeFormula = component.route.info?.theme?.formula;
  if (themeFormula) {
    return applyFormula(themeFormula, formulaContext);
  } else {
    return env.request.cookies["nc-theme"] || null;
  }
};

// ../core/dist/component/component.types.js
var HeadTagTypes;
(function(HeadTagTypes2) {
  HeadTagTypes2["Meta"] = "meta";
  HeadTagTypes2["Link"] = "link";
  HeadTagTypes2["Script"] = "script";
  HeadTagTypes2["NoScript"] = "noscript";
  HeadTagTypes2["Style"] = "style";
})(HeadTagTypes || (HeadTagTypes = {}));

// ../core/dist/utils/url.js
var validateUrl = ({ path, origin }) => {
  if (typeof path !== "string") {
    return false;
  }
  try {
    const urlObject = new URL(path, origin);
    const searchCopy = new URLSearchParams(urlObject.searchParams);
    searchCopy.forEach((value, key) => {
      urlObject.searchParams.delete(key, value);
    });
    searchCopy.forEach((value, key) => {
      urlObject.searchParams.append(key, value);
    });
    return urlObject;
  } catch {
    return false;
  }
};
var PROXY_URL_HEADER = "x-nordcraft-url";
var PROXY_TEMPLATES_IN_BODY = "x-nordcraft-templates-in-body";
var REWRITE_HEADER = "x-nordcraft-rewrite";

// ../ssr/dist/utils/media.js
var isCloudflareImagePath = (path) => typeof path === "string" && path.startsWith("/cdn-cgi/imagedelivery/");

// ../ssr/dist/utils/nanoid.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var nanoid = (size = 21) => {
  let id = "";
  let i = size | 0;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};

// ../ssr/dist/rendering/fonts.js
var getFontCssUrl = ({ fonts, baseForAbsoluteUrls, basePath = "/.toddle/fonts/stylesheet/css2" }) => {
  if (fonts.length === 0) {
    return;
  }
  const searchParams = new URLSearchParams();
  searchParams.set("display", "swap");
  for (const font of fonts) {
    const sortedWeights = easySort((font.variants ?? []).filter((v) => !Number.isNaN(Number(v.weight))), (v) => Number(v.weight));
    if (sortedWeights.length === 0) {
      continue;
    }
    const italicRange = sortedWeights.filter((v) => v.italic);
    const standardRange = sortedWeights.filter((v) => !v.italic);
    const encodeStaticRange = (range, index) => range.map((v) => `${typeof index === "number" ? `${index},` : ""}${v.weight}`).join(";");
    const hasItalicVariants = italicRange.length > 0;
    const wght = [standardRange, italicRange].map((range, index) => encodeStaticRange(range, hasItalicVariants ? index : void 0)).filter(Boolean).join(";");
    let familyValue = font.family;
    if (hasItalicVariants) {
      familyValue += `:ital,wght@${wght}`;
    } else {
      familyValue += `:wght@${wght}`;
    }
    searchParams.append("family", familyValue);
  }
  const path = `${basePath}?${searchParams.toString()}`;
  try {
    const url = typeof baseForAbsoluteUrls === "string" ? new URL(path, baseForAbsoluteUrls).toString() : path;
    return {
      // Eventually, we expect to support multiple types of font-display properties
      // and we might need to return a url for each type of font-display (e.g. swap, block, fallback)
      swap: url
    };
  } catch (e) {
    console.error(e);
  }
};

// ../ssr/dist/rendering/html.js
var getHtmlLanguage = ({ pageInfo, formulaContext, defaultLanguage = "en" }) => {
  const language = pageInfo?.language ? applyFormula(pageInfo.language.formula, formulaContext) : defaultLanguage;
  return typeof language === "string" ? language : defaultLanguage;
};
var getCharset = ({ pageInfo, formulaContext, defaultCharset = "utf-8" }) => {
  const charset = pageInfo?.charset ? applyFormula(pageInfo.charset.formula, formulaContext) : defaultCharset;
  return typeof charset === "string" ? charset : defaultCharset;
};
var getTheme = ({ pageInfo, formulaContext }) => {
  const theme2 = pageInfo?.theme?.formula ? applyFormula(pageInfo.theme.formula, formulaContext) : formulaContext.env?.request?.cookies[THEME_COOKIE_NAME];
  return typeof theme2 === "string" ? theme2 : null;
};

// ../ssr/dist/rendering/speculation.js
var defaultSpeculationRules = {
  prerender: [
    {
      source: "document",
      where: {
        // Prerender all elements with data-prerender="eager" with eagerness=eager
        selector_matches: '[data-prerender="eager"]'
      },
      eagerness: "eager"
    },
    {
      source: "document",
      where: {
        // Prerender all elements with data-prerender="moderate" with eagerness=moderate
        selector_matches: '[data-prerender="moderate"]'
      },
      eagerness: "moderate"
    }
  ]
};

// ../ssr/dist/rendering/head.js
var getHeadItems = ({ cacheBuster, context, cssBasePath = "/.toddle/fonts/stylesheet/css2", page, resetStylesheetPath = "/_static/reset.css", pageStylesheetPath = `/.toddle/stylesheet/${page.name}.css`, files, project, themes, url, customProperties }) => {
  const pageInfo = page.route?.info;
  const title = getPageTitle({
    component: page,
    context,
    defaultTitle: project.name
  });
  const description = getPageDescription({
    component: page,
    context,
    defaultDescription: project.description
  });
  const preloadFonts = /* @__PURE__ */ new Set();
  Object.values(themes).forEach((theme2) => {
    if ("breakpoints" in theme2 === false && theme2.fonts.length > 0) {
      const fontStylesheetUrl = getFontCssUrl({
        fonts: theme2.fonts,
        basePath: cssBasePath
      });
      if (fontStylesheetUrl) {
        preloadFonts.add(`<link href="${escapeAttrValue(fontStylesheetUrl.swap.toString())}" rel="stylesheet" />`);
      }
    }
  });
  const charset = getCharset({ pageInfo, formulaContext: context });
  const descriptionItems = [];
  if (typeof description === "string") {
    descriptionItems.push([
      "meta:description",
      `<meta name="description" content="${escapeAttrValue(description)}" />`
    ]);
    descriptionItems.push([
      "meta:og:description",
      `<meta property="og:description" content="${escapeAttrValue(description)}" />`
    ]);
  }
  const headItems = new Map([
    [
      "link:reset",
      `<link rel="stylesheet" fetchpriority="high" href="${escapeAttrValue(urlWithCacheBuster(resetStylesheetPath, cacheBuster))}" />`
    ],
    [
      "link:page",
      `<link rel="stylesheet" fetchpriority="high" href="${escapeAttrValue(urlWithCacheBuster(pageStylesheetPath, cacheBuster))}" />`
    ],
    [
      "style:variables",
      `<style id="${CUSTOM_PROPERTIES_STYLESHEET_ID}">${customProperties.join("\n")}</style>`
    ],
    ...Array.from(preloadFonts).map((fontLink) => [
      "link:font:swap",
      fontLink
    ]),
    // Initialize default head items (meta + links)
    // these might be overwritten by custom tags later
    ["meta:charset", `<meta charset="${escapeAttrValue(charset)}" />`],
    [
      "meta:viewport",
      `<meta name="viewport" content="width=device-width, initial-scale=1" />`
    ],
    // Title + og:title + apple-mobile-web-app-title
    ["title", `<title>${title}</title>`],
    [
      "meta:og:title",
      `<meta property="og:title" content="${escapeAttrValue(title)}" />`
    ],
    [
      "meta:apple-mobile-web-app-title",
      `<meta name="apple-mobile-web-app-title" content="${escapeAttrValue(title)}">`
    ],
    // Description + og:description
    ...descriptionItems,
    ["meta:og:type", `<meta property="og:type" content="website" />`],
    [
      "meta:og:url",
      `<meta property="og:url" content="${escapeAttrValue(url.href)}" />`
    ],
    [
      "meta:application-name",
      `<meta name="application-name" content="${escapeAttrValue(project.name)}">`
    ],
    [
      "script:speculationrules",
      `<script type="speculationrules">${JSON.stringify(defaultSpeculationRules)}</script>`
    ]
  ]);
  if (project.type === "package" && project.thumbnail) {
    const thumbnailUrl = isCloudflareImagePath(project.thumbnail.path) ? `${url.origin}${project.thumbnail.path}/256` : project.thumbnail.path;
    headItems.set("meta:og:image", `<meta property="og:image" content="${escapeAttrValue(`${thumbnailUrl}`)}" />`);
  }
  const manifestUrl = validateUrl({
    path: applyFormula(files.config?.meta?.manifest?.formula, context),
    origin: url.origin
  });
  if (manifestUrl) {
    const manifestUrl2 = urlWithCacheBuster("/manifest.json", cacheBuster);
    headItems.set("link:manifest", `<link rel="manifest" href="${escapeAttrValue(manifestUrl2)}">`);
  } else {
    headItems.set("meta:theme-color", '<meta name="theme-color" content="#171717">');
    headItems.set("meta:msapplication-tilecolor", '<meta name="msapplication-TileColor" content="#171717">');
  }
  const hasCustomMeta = (nameOrProperty) => Object.values(pageInfo?.meta ?? {}).some((m) => Object.entries(m.attrs ?? {}).some(([k, value]) => ["name", "property"].includes(k.toLowerCase()) && value.type === "value" && typeof value.value === "string" && value.value.toLowerCase() === nameOrProperty.toLowerCase()));
  const icon = files.config?.meta?.icon;
  if (isDefined(icon)) {
    const iconPath = applyFormula(icon.formula, context);
    if (isDefined(iconPath) && typeof iconPath === "string") {
      if (isCloudflareImagePath(iconPath)) {
        const basePath = iconPath.split("/").slice(0, -1).join("/");
        headItems.set("link:icon:16", `<link rel="icon" sizes="16x16" href="${escapeAttrValue(`${basePath}/16`)}" />`);
        headItems.set("link:icon:32", `<link rel="icon" sizes="32x32" href="${escapeAttrValue(`${basePath}/32`)}" />`);
        headItems.set("link:icon", `<link rel="shortcut icon" href="${escapeAttrValue(`${basePath}/48`)}" />`);
      } else {
        headItems.set("link:icon", `<link rel="icon" href="${escapeAttrValue(iconPath)}" />`);
      }
    }
  } else if (
    // Only add default icons if no icon is set
    ![
      "link:icon",
      "link:mask-icon",
      "link:apple-touch-icon",
      "link:icon:16",
      "link:icon:32"
    ].every((k) => !hasCustomMeta(k))
  ) {
    if (project.emoji) {
      headItems.set("link:icon", `<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${escapeAttrValue(project.emoji)}</text></svg>">`);
    }
    headItems.set("link:mask-icon", '<link rel="mask-icon" href="https://raw.githubusercontent.com/nordcraftengine/resources/main/icons/safari-pinned-tab.svg" color="#171717">');
    headItems.set("link:apple-touch-icon", '<link rel="apple-touch-icon" sizes="180x180" href="https://raw.githubusercontent.com/nordcraftengine/resources/main/icons/apple-touch-icon.png">');
    headItems.set("link:icon:16", '<link rel="icon" type="image/png" sizes="16x16" href="https://raw.githubusercontent.com/nordcraftengine/resources/main/icons/favicon-16x16.png">');
    headItems.set("link:icon:32", '<link rel="icon" type="image/png" sizes="32x32" href="https://raw.githubusercontent.com/nordcraftengine/resources/main/icons/favicon-32x32.png">');
  }
  if (pageInfo?.meta) {
    easySort(
      Object.entries(pageInfo.meta),
      // Sort by index if it exists
      ([_, meta]) => meta.index ?? Infinity
    ).filter(([_, meta]) => (
      // Only include enabled meta tags
      !isDefined(meta.enabled) || toBoolean(applyFormula(meta.enabled, context))
    )).forEach(([id, metaEntry]) => {
      if (Object.values(HeadTagTypes).includes(metaEntry.tag)) {
        const key = Object.entries(metaEntry.attrs ?? {}).find(([key2]) => key2 === "name" || key2 === "property");
        const headItemKey = `${metaEntry.tag}:${isDefined(key) ? applyFormula(key[1], context) : id ?? nanoid()}`;
        headItems.set(
          headItemKey,
          // Add the id to the tag so it's easier to dynamically update it later
          // from our runtime (main.ts)
          `<${metaEntry.tag} data-toddle-id="${id}" ${Object.entries(metaEntry.attrs ?? {}).map(([key2, formula]) => {
            const value = applyFormula(formula, context);
            if (value === true) {
              return key2;
            }
            return `${key2}="${escapeAttrValue(value)}"`;
          }).join(" ")} ${VOID_HTML_ELEMENTS.includes(metaEntry.tag) ? `/>` : `>${metaEntry.content ? applyFormula(metaEntry.content, context) : ""}</${metaEntry.tag}>`}`
        );
      }
    });
  }
  return headItems;
};
var renderHeadItems = ({ headItems, ordering = defaultHeadOrdering }) => easySort([...headItems.entries()], ([key]) => {
  const index = ordering.indexOf(key);
  return index === -1 ? ordering.length : index;
}).map(([_, value]) => value).join("\n    ");
var defaultHeadOrdering = [
  "meta:charset",
  "meta:viewport",
  "title",
  "meta:description",
  "link:icon:16",
  "link:icon:32",
  "link:icon",
  "meta:og:title",
  "meta:application-name",
  "meta:og:url",
  "meta:og:description",
  "meta:og:type",
  "link:manifest",
  "link:mask-icon",
  "link:apple-touch-icon",
  "meta:theme-color",
  "meta:apple-mobile-web-app-title",
  "meta:msapplication-tilecolor",
  "meta:og:locale",
  // The stylesheets should be loaded asap to avoid any flickering
  "link:reset",
  "link:page"
  // Everything else comes after these predefined tags
];
var getPageTitle = ({ component, context, defaultTitle }) => {
  const pageInfo = component.route?.info;
  const fallbackTitle = defaultTitle ?? component.name;
  if (!isDefined(pageInfo?.title)) {
    return fallbackTitle;
  }
  const title = applyFormula(pageInfo.title.formula, context);
  return typeof title === "string" ? title : fallbackTitle;
};
var getPageDescription = ({ component, context, defaultDescription }) => {
  const pageInfo = component.route?.info;
  if (!isDefined(pageInfo?.description)) {
    return defaultDescription;
  }
  const description = applyFormula(pageInfo.description.formula, context);
  return typeof description === "string" ? description : defaultDescription;
};
var urlWithCacheBuster = (url, cacheBuster) => typeof cacheBuster === "string" ? `${url}?${new URLSearchParams([["v", cacheBuster]]).toString()}` : url;

// ../ssr/src/rendering/testData.ts
var removeTestData = (component) => ({
  ...component,
  attributes: mapObject(component.attributes ?? {}, ([key, value]) => [
    key,
    omitKeys(value, ["testValue"])
  ]),
  ...component.events ? {
    events: component.events.map(
      (event) => omitKeys(event, ["dummyEvent"])
    )
  } : void 0,
  nodes: mapObject(component.nodes ?? {}, ([key, value]) => {
    if (value.type === "element") {
      const updatedNode = {
        ...value,
        events: mapObject(value.events, ([eventKey, eventValue]) => [
          eventKey,
          eventValue ? {
            ...eventValue,
            actions: eventValue.actions?.map(removeActionTestData)
          } : null
        ])
      };
      return [key, updatedNode];
    }
    return [key, value];
  }),
  ...component.route ? {
    route: {
      ...component.route,
      path: component.route.path.map((p) => omitKeys(p, ["testValue"])),
      query: mapObject(component.route.query, ([key, value]) => [
        key,
        omitKeys(value, ["testValue"])
      ])
    }
  } : {},
  ...component.formulas ? {
    formulas: mapObject(component.formulas, ([key, value]) => [
      key,
      {
        ...value,
        arguments: (value.arguments ?? []).map(
          (a) => omitKeys(a, ["testValue"])
        ),
        formula: removeFormulaTestData(value.formula)
      }
    ])
  } : {},
  ...component.workflows ? {
    workflows: mapObject(component.workflows, ([key, value]) => [
      key,
      {
        ...omitKeys(value, ["testValue"]),
        // We should find all actions (also nested actions and non-workflow actions) and remove
        // the description from them. This is a start though
        actions: value.actions.map(removeActionTestData),
        parameters: (value.parameters ?? []).map(
          (p) => omitKeys(p, ["testValue"])
        ),
        callbacks: value.callbacks?.map((c) => omitKeys(c, ["testValue"]))
      }
    ])
  } : {},
  apis: mapObject(component.apis ?? {}, ([key, api]) => {
    if (!isDefined(api)) {
      return [key, api];
    }
    return [
      key,
      // service and servicePath are only necessary in the editor. All information about an API
      // request is available on the api object itself
      isLegacyApi(api) ? api : omitKeys(api, ["service", "servicePath"])
    ];
  }),
  ...component.onLoad ? {
    onLoad: {
      ...component.onLoad,
      actions: component.onLoad.actions?.map(removeActionTestData)
    }
  } : void 0,
  ...component.onAttributeChange ? {
    onAttributeChange: {
      ...component.onAttributeChange,
      actions: component.onAttributeChange.actions?.map(removeActionTestData)
    }
  } : void 0
});
var removeActionTestData = (action) => {
  if (!isDefined(action)) {
    return action;
  }
  switch (action.type) {
    case "SetVariable":
      return {
        ...action,
        ...action.data ? { data: removeFormulaTestData(action.data) } : void 0
      };
    case "TriggerEvent":
    case "SetURLParameter":
    case "TriggerWorkflowCallback":
      return {
        ...action,
        ...action.data ? { data: removeFormulaTestData(action.data) } : void 0
      };
    case "Switch":
      return {
        ...action,
        cases: (action.cases ?? []).map((c) => ({
          ...c,
          ...c.condition ? { condition: removeFormulaTestData(c.condition) } : void 0,
          actions: c.actions.map(removeActionTestData)
        })),
        default: {
          ...action.default,
          actions: (action.default?.actions ?? []).map(removeActionTestData)
        }
      };
    case "Fetch":
      return {
        ...action,
        inputs: action.inputs ? mapObject(action.inputs, ([key, value]) => [
          key,
          {
            ...value,
            ...value.formula ? { formula: removeFormulaTestData(value.formula) } : void 0
          }
        ]) : action.inputs,
        onSuccess: {
          ...action.onSuccess,
          actions: (action.onSuccess?.actions ?? []).map(removeActionTestData)
        },
        onError: {
          ...action.onError,
          actions: (action.onError?.actions ?? []).map(removeActionTestData)
        },
        onMessage: action.onMessage ? {
          ...action.onMessage,
          actions: (action.onMessage?.actions ?? []).map(
            removeActionTestData
          )
        } : void 0
      };
    case "Custom":
    case void 0:
    case null:
      return {
        // The 'group' property was used for categorizing actions and should
        // not have been persisted in projects. But since it's there (for some actions)
        // we should remove it
        ...omitKeys(action, ["description", "group", "label"]),
        ...action.arguments ? {
          arguments: action.arguments.map(
            (a) => a ? removeActionArgumentTestData(a) : a
          )
        } : void 0,
        ...action.events ? {
          events: mapObject(
            action.events ?? {},
            ([eventKey, eventValue]) => [
              eventKey,
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              eventValue ? {
                ...eventValue,
                actions: (eventValue.actions ?? []).map(
                  removeActionTestData
                )
              } : eventValue
            ]
          )
        } : void 0
      };
    case "SetURLParameters":
      return {
        ...action,
        parameters: mapObject(action.parameters, ([key, value]) => [
          key,
          removeFormulaTestData(value)
        ])
      };
    case "TriggerWorkflow":
      return {
        ...action,
        // TODO: Below was breaking the build - investigate. Test by adding an animation etc. and see if it is being set to null by mistake
        // ...(action.parameters
        //   ? {
        //       parameters: mapObject(action.parameters, ([key, value]) => [
        //         key,
        //         {
        //           ...value,
        //           formula: isFormula(value)
        //             ? removeFormulaTestData(value)
        //             : isFormula(value.formula)
        //               ? removeFormulaTestData(value.formula)
        //               : value.formula,
        //         },
        //       ]),
        //     }
        //   : undefined),
        ...action.callbacks ? {
          callbacks: mapObject(action.callbacks, ([key, value]) => [
            key,
            {
              ...value,
              actions: value?.actions?.map(
                (a) => a ? removeActionTestData(a) : a
              ) ?? []
            }
          ])
        } : void 0
      };
    case "AbortFetch":
      return action;
  }
};
var removeActionArgumentTestData = (action) => {
  if (!isDefined(action)) {
    return action;
  }
  return {
    ...omitKeys(action, ["description", "type"]),
    formula: action.formula ? removeFormulaTestData(action.formula) : action.formula
  };
};
var removeFormulaTestData = (formula) => {
  if (!isFormula(formula)) {
    return formula;
  }
  switch (formula.type) {
    case "path":
    case "value":
    case "function":
      return formula;
    case "record":
      return {
        ...formula,
        entries: (formula.entries ?? []).map((entry) => ({
          ...entry,
          formula: removeFormulaTestData(entry.formula)
        }))
      };
    case "array":
    case "or":
    case "and":
    case "object":
      return {
        ...formula,
        arguments: formula.arguments?.map((arg) => ({
          ...arg,
          formula: removeFormulaTestData(arg.formula)
        })) ?? []
      };
    case "apply":
      return {
        ...formula,
        arguments: (formula.arguments ?? []).map((a) => ({
          ...omitKeys(a, ["testValue"]),
          formula: removeFormulaTestData(a.formula)
        }))
      };
    case "switch":
      return {
        ...formula,
        cases: (formula.cases ?? []).map((c) => ({
          ...c,
          condition: removeFormulaTestData(c.condition)
        })),
        default: removeFormulaTestData(formula.default)
      };
  }
};

// ../ssr/src/utils/headers.ts
var skipCookieHeader = (headers) => {
  const newHeaders = new Headers(headers);
  newHeaders.delete("cookie");
  return newHeaders;
};
var REDIRECT_API_NAME_HEADER = "x-nordcraft-redirect-api-name";
var REDIRECT_COMPONENT_NAME_HEADER = "x-nordcraft-redirect-component-name";
var REDIRECT_NAME_HEADER = "x-nordcraft-redirect-name";
var HOP_BY_HOP_HEADERS = [
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade"
];
var skipHopByHopHeaders = (headers) => {
  const newHeaders = new Headers(headers);
  for (const header of HOP_BY_HOP_HEADERS) {
    newHeaders.delete(header);
  }
  return newHeaders;
};
var skipContentEncodingHeader = (headers) => {
  const newHeaders = new Headers(headers);
  newHeaders.delete("content-encoding");
  return newHeaders;
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/helper/html/index.js
var html = (strings, ...values) => {
  const buffer = [""];
  for (let i = 0, len = strings.length - 1; i < len; i++) {
    buffer[0] += strings[i];
    const children = Array.isArray(values[i]) ? values[i].flat(Infinity) : [values[i]];
    for (let i2 = 0, len2 = children.length; i2 < len2; i2++) {
      const child = children[i2];
      if (typeof child === "string") {
        escapeToBuffer(child, buffer);
      } else if (typeof child === "number") {
        ;
        buffer[0] += child;
      } else if (typeof child === "boolean" || child === null || child === void 0) {
        continue;
      } else if (typeof child === "object" && child.isEscaped) {
        if (child.callbacks) {
          buffer.unshift("", child);
        } else {
          const tmp = child.toString();
          if (tmp instanceof Promise) {
            buffer.unshift("", tmp);
          } else {
            buffer[0] += tmp;
          }
        }
      } else if (child instanceof Promise) {
        buffer.unshift("", child);
      } else {
        escapeToBuffer(child.toString(), buffer);
      }
    }
  }
  buffer[0] += strings.at(-1);
  return buffer.length === 1 ? "callbacks" in buffer ? raw(resolveCallbackSync(raw(buffer[0], buffer.callbacks))) : raw(buffer[0]) : stringBufferToString(buffer, buffer.callbacks);
};

// ../ssr/dist/utils/headers.js
var skipCookieHeader2 = (headers) => {
  const newHeaders = new Headers(headers);
  newHeaders.delete("cookie");
  return newHeaders;
};
var skipNordcraftHeaders = (headers) => {
  const newHeaders = new Headers(headers);
  newHeaders.delete(PROXY_URL_HEADER);
  newHeaders.delete(PROXY_TEMPLATES_IN_BODY);
  return newHeaders;
};
var HOP_BY_HOP_HEADERS2 = [
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade"
];
var skipHopByHopHeaders2 = (headers) => {
  const newHeaders = new Headers(headers);
  for (const header of HOP_BY_HOP_HEADERS2) {
    newHeaders.delete(header);
  }
  return newHeaders;
};

// ../ssr/dist/rendering/template.js
var applyTemplateValues = (input, cookies) => {
  if (!isDefined(input)) {
    return "";
  }
  const cookieRegex = /{{ cookies\.(.+?) }}/gm;
  let output = input;
  const cookieNames = /* @__PURE__ */ new Set();
  let m;
  while ((m = cookieRegex.exec(input)) !== null) {
    if (m.index === cookieRegex.lastIndex) {
      cookieRegex.lastIndex++;
    }
    const cookieName = m[1];
    if (typeof cookieName !== "string") {
      continue;
    }
    cookieNames.add(cookieName);
  }
  for (const cookieName of cookieNames) {
    const cookieValue = cookies[cookieName];
    output = output.replaceAll(
      STRING_TEMPLATE("cookies", cookieName),
      // We fallback to an empty string to avoid sending the internal
      // template format ('{{ cookies.<cookie> }}') to other services/APIs
      cookieValue ?? ""
    );
  }
  return output;
};
var sanitizeProxyHeaders = ({ cookies, headers }) => new Headers(mapTemplateHeaders({
  cookies,
  headers: skipCookieHeader2(skipNordcraftHeaders(skipHopByHopHeaders2(headers)))
}));
var mapTemplateHeaders = ({ cookies, headers }) => new Headers([...headers.entries()].map(([name, value]) => [
  name,
  // Replace template values in the header value
  applyTemplateValues(value, cookies)
]));

// src/utils/api.ts
var evaluateComponentApis = async ({
  component,
  formulaContext: _formulaContext,
  req,
  apiCache,
  updateApiCache
}) => {
  const formulaContext = { ..._formulaContext };
  const sortedApis = [];
  sortApiEntries(Object.entries(component.apis)).forEach(
    ([key, api]) => api instanceof ToddleApiV2 && sortedApis.push([key, api])
  );
  const independentApiResponses = Object.fromEntries(
    await Promise.all(
      // Evaluate independent API requests in parallel
      sortedApis.filter(([_, api]) => api.apiReferences.size === 0).map(async ([name, api]) => {
        const { response, cacheKey } = await fetchApi({
          api,
          formulaContext,
          req,
          apiCache,
          componentName: component.name
        });
        if (isDefined(cacheKey)) {
          updateApiCache(String(cacheKey), response);
        }
        return [name, response];
      })
    )
  );
  formulaContext.data.Apis = {
    ...formulaContext.data.Apis,
    ...independentApiResponses
  };
  const dependentApis = sortedApis.filter(
    ([_, api]) => api.apiReferences.size > 0
  );
  const dependentApiResponses = {};
  for (const [_, api] of dependentApis) {
    const { response, cacheKey } = await fetchApi({
      api,
      formulaContext,
      req,
      apiCache,
      componentName: component.name
    });
    dependentApiResponses[api.name] = response;
    formulaContext.data.Apis = {
      ...formulaContext.data.Apis,
      [api.name]: response
    };
    if (isDefined(cacheKey)) {
      updateApiCache(String(cacheKey), response);
    }
  }
  return {
    ...independentApiResponses,
    ...dependentApiResponses
  };
};
var fetchApi = async ({
  api,
  formulaContext,
  req,
  apiCache,
  componentName
}) => {
  const evaluatedInputs = Object.entries(api.inputs).reduce((acc, [key, value]) => {
    acc[key] = applyFormula(value.formula, formulaContext);
    return acc;
  }, {});
  const data = {
    ...formulaContext.data,
    ApiInputs: {
      ...evaluatedInputs
    }
  };
  const newFormulaContext = {
    component: formulaContext.component,
    package: formulaContext.package,
    data,
    env: formulaContext.env,
    toddle: formulaContext.toddle
  };
  const ssrEnabled = isDefined(api.server?.ssr?.enabled) ? toBoolean(applyFormula(api.server.ssr.enabled.formula, newFormulaContext)) : false;
  const autoFetch = isDefined(api.autoFetch) ? toBoolean(applyFormula(api.autoFetch, newFormulaContext)) : false;
  if (!ssrEnabled || !autoFetch) {
    return {
      response: {
        data: null,
        isLoading: autoFetch,
        error: null
      }
    };
  }
  const url = new URL(req.url);
  const { url: requestUrl, requestSettings } = createApiRequest({
    api,
    formulaContext,
    baseUrl: url.origin,
    defaultHeaders: new Headers({
      ...mapHeadersToObject(req.headers),
      // Override accept + accept-encoding to increase the chance that we can work with the response
      // from an API fetched during SSR. Many servers don't support br encoding for instance.
      accept: "*/*",
      "accept-encoding": "gzip, deflate"
    })
  });
  const cacheKey = requestHash(requestUrl, requestSettings);
  if (apiCache?.[cacheKey]) {
    return { response: apiCache[cacheKey] };
  }
  requestUrl.searchParams.forEach((value, key) => {
    requestUrl.searchParams.set(
      key,
      applyTemplateValues(value, newFormulaContext.env?.request?.cookies ?? {})
    );
  });
  if (HttpMethodsWithAllowedBody.includes(requestSettings.method) && toBoolean(
    applyFormula(
      api.server?.proxy?.useTemplatesInBody?.formula,
      newFormulaContext
    )
  )) {
    if (typeof requestSettings.body === "string") {
      requestSettings.body = applyTemplateValues(
        requestSettings.body,
        newFormulaContext.env?.request?.cookies ?? {}
      );
    }
  }
  const request = new Request(requestUrl.href, {
    ...requestSettings,
    headers: sanitizeProxyHeaders({
      cookies: newFormulaContext.env?.request?.cookies ?? {},
      headers: requestSettings.headers
    })
  });
  const response = await fetchApiV2({
    api,
    formulaContext: newFormulaContext,
    req: request,
    originalRequest: req,
    componentName
  });
  return { response, cacheKey };
};
var fetchApiV2 = async ({
  api,
  formulaContext,
  req,
  originalRequest,
  componentName
}) => {
  let response;
  const performance2 = {
    requestStart: Date.now(),
    responseStart: null,
    responseEnd: null
  };
  try {
    response = await executeFetchCall(req);
  } catch (e) {
    return {
      data: null,
      isLoading: false,
      error: e instanceof Error ? e.message : "Unknown error"
    };
  }
  let responseBody;
  try {
    performance2.responseStart = Date.now();
    responseBody = await getBody(response, api.client?.parserMode ?? void 0);
    performance2.responseEnd = Date.now();
  } catch (e) {
    return {
      data: null,
      isLoading: false,
      error: `Error getting response body: ${e}`,
      response: {
        status: 500,
        headers: mapHeadersToObject(response.headers)
      }
    };
  }
  const errorFormula = api.isError;
  const isError = isApiError({
    apiName: api.name,
    response: {
      body: responseBody,
      ok: response.ok,
      status: response.status,
      headers: mapHeadersToObject(response.headers)
    },
    formulaContext,
    errorFormula,
    performance: performance2
  });
  const apiStatus = {
    data: isError ? null : responseBody,
    isLoading: false,
    error: isError ? responseBody ?? response.statusText : null,
    response: {
      status: response.status,
      headers: mapHeadersToObject(response.headers),
      performance: performance2
    }
  };
  const originalRequestUrl = new URL(originalRequest.url);
  easySort(
    Object.values(api.redirectRules ?? {}),
    (rule) => rule.index
  ).forEach((rule) => {
    const ruleContext = {
      ...formulaContext,
      data: {
        ...formulaContext.data,
        Apis: {
          [api.name]: apiStatus
        }
      }
    };
    const location = applyFormula(rule.formula, ruleContext);
    if (typeof location === "string") {
      const url = validateUrl({
        path: location,
        origin: originalRequestUrl.origin
      });
      if (url) {
        let statusCode = 302;
        if (isDefined(rule.statusCode)) {
          const statusCodeResult = applyFormula(rule.statusCode, ruleContext);
          if (typeof statusCodeResult === "number" && REDIRECT_STATUS_CODES.includes(
            statusCodeResult
          )) {
            statusCode = statusCodeResult;
          }
        }
        throw new RedirectError({
          url,
          statusCode,
          componentName,
          apiName: api.name
        });
      }
    }
  });
  return apiStatus;
};
var getBody = (res, parserOverride = "auto") => {
  if (parserOverride !== "auto") {
    if (parserOverride === "json") {
      return res.json();
    } else if (parserOverride === "text") {
      return res.text();
    }
    throw new Error(`Unsupported SSR API parser override: ${parserOverride}`);
  }
  const contentType = res.headers.get("content-type");
  if (isJsonHeader(contentType)) {
    return res.json();
  } else if (isTextHeader(contentType)) {
    return res.text();
  }
  throw new Error(`Unsupported SSR API content type: ${contentType}`);
};
var RedirectError = class extends Error {
  constructor(redirect) {
    super();
    this.redirect = redirect;
  }
};
var executeFetchCall = async (request) => {
  try {
    request.headers.delete("cf-connecting-ip");
    request.headers.delete("host");
    const response = await fetch(request);
    return response;
  } catch (e) {
    const status = e instanceof Error && e.name === "TimeoutError" ? 504 : 500;
    return Response.json(e.message, { status });
  }
};

// src/routes/nordcraftPage.ts
var nordcraftPage = async ({
  hono,
  project,
  files,
  page,
  status,
  options
}) => {
  const nordcraftPageTimingKey = "nordcraftPage";
  startTime(hono, nordcraftPageTimingKey, "The total render time for a page");
  const url = new URL(hono.req.raw.url);
  const formulaContext = getPageFormulaContext({
    component: page,
    branchName: "main",
    req: hono.req.raw,
    logErrors: true,
    files
  });
  const language = getHtmlLanguage({
    pageInfo: page.route.info,
    formulaContext,
    defaultLanguage: "en"
  });
  const themes = files.themes ?? {
    defaultTheme: files.config?.theme ?? theme
  };
  const includedComponents = takeIncludedComponents({
    root: page,
    projectComponents: files.components,
    packages: files.packages,
    includeRoot: true
  });
  const toddleComponent = new ToddleComponent({
    component: page,
    getComponent: (name, packageName) => {
      const nodeLookupKey = [packageName, name].filter(isDefined).join("/");
      const component = packageName ? files.packages?.[packageName]?.components[name] : files.components[name];
      if (!component) {
        console.warn(`Unable to find component ${nodeLookupKey} in files`);
        return void 0;
      }
      return component;
    },
    packageName: void 0,
    globalFormulas: {
      formulas: files.formulas,
      packages: files.packages
    }
  });
  let apiCache;
  let body;
  let customProperties = [];
  try {
    startTime(
      hono,
      "renderPageBody",
      "The time taken to render the page body - including API calls"
    );
    const pageBody = await renderPageBody({
      component: toddleComponent,
      formulaContext,
      env: formulaContext.env,
      req: hono.req.raw,
      files,
      includedComponents,
      evaluateComponentApis,
      projectId: "my_project"
    });
    endTime(hono, "renderPageBody");
    apiCache = pageBody.apiCache;
    body = pageBody.html;
    customProperties = pageBody.customProperties;
  } catch (e) {
    if (e instanceof RedirectError) {
      hono.header(REDIRECT_API_NAME_HEADER, e.redirect.apiName);
      hono.header(REDIRECT_COMPONENT_NAME_HEADER, e.redirect.componentName);
      return hono.redirect(e.redirect.url.href, e.redirect.statusCode ?? 302);
    } else {
      return hono.text("Internal server error", 500);
    }
  }
  const head = renderHeadItems({
    headItems: getHeadItems({
      url,
      // This refers to the endpoint we created in fontRouter for our proxied stylesheet
      cssBasePath: "/.toddle/fonts/stylesheet/css2",
      // Just to be explicit about where to grab the reset stylesheet from
      resetStylesheetPath: "/_static/reset.css",
      // This refers to the generated stylesheet for each page
      pageStylesheetPath: options.pageStylesheetUrl(page.name),
      page: toddleComponent,
      files,
      project,
      context: formulaContext,
      themes,
      customProperties
    })
  });
  const charset = getCharset({
    pageInfo: toddleComponent.route?.info,
    formulaContext
  });
  const toddleInternals = {
    project: project.short_id,
    branch: "main",
    commit: "unknown",
    pageState: {
      ...formulaContext.data,
      Apis: {
        ...apiCache
      }
    },
    component: removeTestData(page),
    components: includedComponents.map(removeTestData),
    isPageLoaded: false,
    cookies: Object.keys(formulaContext.env.request.cookies)
  };
  let codeImport = "";
  if (files.customCode) {
    codeImport = `
            <script type="application/json" id="nordcraft-data">
              ${JSON.stringify(toddleInternals).replaceAll(
      "</script>",
      "<\\/script>"
    )}
            </script>
            <script type="module">
              import { initGlobalObject, createRoot } from '/_static/page.main.esm.js';
              import { loadCustomCode, formulas, actions } from '${options.customCodeUrl(toddleComponent.name)}'
              window.__toddle = JSON.parse(document.getElementById('nordcraft-data').textContent);
              window.__toddle.components = [window.__toddle.component, ...window.__toddle.components];
              initGlobalObject({formulas, actions});
              loadCustomCode();
              createRoot(document.getElementById("App"));
            </script>
          `;
  } else {
    codeImport = `
        <script type="application/json" id="nordcraft-data">
          ${JSON.stringify(toddleInternals).replaceAll(
      "</script>",
      "<\\/script>"
    )}
        </script>
        <script type="module">
          import { initGlobalObject, createRoot } from '/_static/page.main.esm.js';

          window.__toddle = JSON.parse(document.getElementById('nordcraft-data').textContent);
          window.__toddle.components = [window.__toddle.component, ...window.__toddle.components];
          initGlobalObject({formulas: {}, actions: {}});
          createRoot(document.getElementById("App"));
        </script>
    `;
  }
  endTime(hono, nordcraftPageTimingKey);
  const htmlAttributes = Object.entries({
    [THEME_DATA_ATTRIBUTE]: getTheme({
      pageInfo: page.route.info,
      formulaContext
    })
  }).filter(([, value]) => toBoolean(value)).map(([key, value]) => `${key}="${value}"`).join(" ");
  return hono.html(
    html`<!doctype html>
      <html lang="${language}" ${htmlAttributes}>
        <head>
          ${raw(head)}
        </head>
        <body>
          <div id="App">${raw(body)}</div>
          ${raw(codeImport)}
        </body>
      </html>`,
    status,
    {
      "Content-Type": `text/html; charset=${charset}`
    }
  );
};

// src/middleware/notFoundLoader.ts
var notFoundLoader = (pageLoader, options) => async (ctx) => {
  const pageContent = await pageLoader({ ctx, name: "404" });
  const component = pageContent?.components?.["404"];
  if (!component || !isPageComponent(component)) {
    return ctx.text("Not Found", {
      status: 404
    });
  }
  return nordcraftPage({
    hono: ctx,
    project: ctx.var.project,
    files: pageContent,
    page: component,
    status: 404,
    options
  });
};

// src/routes/apiProxy.ts
var proxyRequestHandler = (getConnInfo2) => async (c) => {
  const req = c.req.raw;
  const requestCookies = getRequestCookies(req);
  const requestUrl = new URL(req.url);
  const outgoingRequestUrl = validateUrl(
    // Replace potential cookie values in the URL
    {
      path: applyTemplateValues(
        req.headers.get(PROXY_URL_HEADER),
        requestCookies
      ),
      origin: requestUrl.origin
    }
  );
  if (!outgoingRequestUrl) {
    return c.json(
      {
        error: `The provided URL is invalid: ${req.headers.get(
          PROXY_URL_HEADER
        )}`
      },
      { status: 400 }
    );
  }
  let headers;
  try {
    headers = sanitizeProxyHeaders({
      cookies: requestCookies,
      headers: req.headers
    });
    headers.set("accept-encoding", "gzip, deflate");
  } catch {
    return c.json(
      {
        error: "Proxy validation failed: one or more headers had an invalid name/value"
      },
      { status: 400 }
    );
  }
  try {
    let templateBody;
    if (HttpMethodsWithAllowedBody.includes(req.method) && req.headers.get(PROXY_TEMPLATES_IN_BODY) !== null) {
      try {
        const bodyText = await req.text();
        const contentType = req.headers.get("content-type")?.toLowerCase();
        if (contentType?.includes("application/x-www-form-urlencoded")) {
          templateBody = new URLSearchParams(
            Object.fromEntries(
              new URLSearchParams(bodyText).entries().map(([key, value]) => [
                key,
                applyTemplateValues(value, requestCookies)
              ])
            )
          ).toString();
        } else {
          templateBody = applyTemplateValues(bodyText, requestCookies);
        }
      } catch (e) {
        console.error("Error applying template values to request body", e);
        return c.json(
          {
            error: "Error applying template values to request body. Perhaps the request body was not text?"
          },
          { status: 400 }
        );
      }
    }
    const request = new Request(outgoingRequestUrl.href, {
      // We copy over the method
      method: c.req.method,
      headers,
      // We use the adjusted body or forward the body as is
      body: templateBody ?? req.body,
      // Let's add a 5s timeout
      signal: AbortSignal.timeout(5e3)
    });
    let response;
    try {
      request.headers.delete("cf-connecting-ip");
      request.headers.delete("host");
      const ip = normalizeIP(getConnInfo2(c).remote.address);
      if (ip) {
        request.headers.set("X-Forwarded-For", ip);
      }
      const timingKey = "apiProxyFetch";
      startTime(c, timingKey);
      response = await fetch(request);
      endTime(c, timingKey);
    } catch (e) {
      console.error("API request error", e.message);
      const status = e instanceof Error && e.name === "TimeoutError" ? 504 : 500;
      response = c.json(e.message, { status });
    }
    const body = NON_BODY_RESPONSE_CODES.includes(response.status) ? void 0 : response.body ?? new ReadableStream();
    skipHopByHopHeaders(skipContentEncodingHeader(response.headers)).entries().forEach(([name, value]) => {
      c.header(name, value, { append: true });
    });
    c.header("Vary", PROXY_URL_HEADER, { append: true });
    c.status(response.status);
    if (body) {
      return c.body(body);
    }
    return c.res;
  } catch (e) {
    const error = e instanceof Error ? e.message : "Unable to build a valid request from the API definition";
    return c.json({ error }, { status: 500 });
  }
};
var normalizeIP = (address) => {
  if (address?.startsWith("::ffff:")) {
    return address.substring(7);
  }
  return address;
};

// src/routes/cookies.ts
var setCookieHandler = async (ctx) => {
  const url = new URL(ctx.req.url);
  const searchParameters = escapeSearchParameters(url.searchParams);
  const name = searchParameters.get("name");
  const value = searchParameters.get("value");
  const sameSite = searchParameters.get("sameSite") ?? "Lax";
  const path = searchParameters.get("path") ?? "/";
  const _ttl = searchParameters.get("ttl");
  const includeSubdomains = searchParameters.get("includeSubdomains") !== "false";
  if (typeof name !== "string" || name === "") {
    return ctx.json(
      { error: `Bad request. The name must be of type string.` },
      400
    );
  }
  if (typeof value !== "string") {
    return ctx.json(
      { error: `Bad request. The value must be of type string.` },
      400
    );
  }
  if (["lax", "strict", "none"].includes(sameSite.toLowerCase()) === false) {
    return ctx.json(
      { error: `Bad request. The sameSite must be "Lax", "Strict" or "None".` },
      400
    );
  }
  if (typeof path !== "string" || !path.startsWith("/")) {
    return ctx.json(
      {
        error: `Bad request. The path must be of type string and start with /.`
      },
      400
    );
  }
  let ttl;
  if (typeof _ttl === "string") {
    ttl = Number(_ttl);
    if (isNaN(ttl)) {
      return ctx.json(
        { error: `Bad request. The ttl must be a valid number.` },
        400
      );
    }
  }
  let expirationDate;
  if (typeof ttl === "number" && ttl > 0) {
    expirationDate = new Date(Date.now() + ttl * 1e3);
  } else {
    const accessTokenPayload = decodeToken(value);
    if (typeof accessTokenPayload?.exp === "number") {
      expirationDate = new Date(accessTokenPayload.exp * 1e3);
    }
  }
  const cookieParts = [
    `${name}=${value}`,
    "Secure",
    "HttpOnly",
    `SameSite=${sameSite}`,
    `Path=${path}`
  ];
  if (expirationDate) {
    cookieParts.push(`Expires=${expirationDate.toUTCString()}`);
  } else if (ttl === 0) {
    cookieParts.push("Max-Age=0");
  }
  if (includeSubdomains) {
    cookieParts.push(`Domain=${url.hostname}`);
  }
  ctx.header("Set-Cookie", cookieParts.join("; "));
  return ctx.body(null, 200);
};
var decodeToken = (token) => {
  try {
    if (typeof token !== "string") {
      return;
    }
    const jwtUrlSafe = token.replaceAll("-", "+").replaceAll("_", "/");
    const [, payload] = jwtUrlSafe.split(".");
    if (typeof payload !== "string") {
      return;
    }
    const user = atob(payload);
    return JSON.parse(user);
  } catch {
    return;
  }
};

// ../core/dist/utils/customElements.js
var safeCustomElementName = (name) => {
  const tag = name.toLocaleLowerCase().replaceAll(" ", "");
  if (!tag.includes("-")) {
    return `toddle-${tag}`;
  }
  return tag;
};

// ../ssr/dist/rendering/testData.js
var removeTestData2 = (component) => ({
  ...component,
  attributes: mapObject(component.attributes ?? {}, ([key, value]) => [
    key,
    omitKeys(value, ["testValue"])
  ]),
  ...component.events ? {
    events: component.events.map((event) => omitKeys(event, ["dummyEvent"]))
  } : void 0,
  nodes: mapObject(component.nodes ?? {}, ([key, value]) => {
    if (value.type === "element") {
      const updatedNode = {
        ...value,
        events: mapObject(value.events, ([eventKey, eventValue]) => [
          eventKey,
          eventValue ? {
            ...eventValue,
            actions: eventValue.actions?.map(removeActionTestData2)
          } : null
        ])
      };
      return [key, updatedNode];
    }
    return [key, value];
  }),
  ...component.route ? {
    route: {
      ...component.route,
      path: component.route.path.map((p) => omitKeys(p, ["testValue"])),
      query: mapObject(component.route.query, ([key, value]) => [
        key,
        omitKeys(value, ["testValue"])
      ])
    }
  } : {},
  ...component.formulas ? {
    formulas: mapObject(component.formulas, ([key, value]) => [
      key,
      {
        ...value,
        arguments: (value.arguments ?? []).map((a) => omitKeys(a, ["testValue"])),
        formula: removeFormulaTestData2(value.formula)
      }
    ])
  } : {},
  ...component.workflows ? {
    workflows: mapObject(component.workflows, ([key, value]) => [
      key,
      {
        ...omitKeys(value, ["testValue"]),
        // We should find all actions (also nested actions and non-workflow actions) and remove
        // the description from them. This is a start though
        actions: value.actions.map(removeActionTestData2),
        parameters: (value.parameters ?? []).map((p) => omitKeys(p, ["testValue"])),
        callbacks: value.callbacks?.map((c) => omitKeys(c, ["testValue"]))
      }
    ])
  } : {},
  apis: mapObject(component.apis ?? {}, ([key, api]) => {
    if (!isDefined(api)) {
      return [key, api];
    }
    return [
      key,
      // service and servicePath are only necessary in the editor. All information about an API
      // request is available on the api object itself
      isLegacyApi(api) ? api : omitKeys(api, ["service", "servicePath"])
    ];
  }),
  ...component.onLoad ? {
    onLoad: {
      ...component.onLoad,
      actions: component.onLoad.actions?.map(removeActionTestData2)
    }
  } : void 0,
  ...component.onAttributeChange ? {
    onAttributeChange: {
      ...component.onAttributeChange,
      actions: component.onAttributeChange.actions?.map(removeActionTestData2)
    }
  } : void 0
});
var removeActionTestData2 = (action) => {
  if (!isDefined(action)) {
    return action;
  }
  switch (action.type) {
    case "SetVariable":
      return {
        ...action,
        ...action.data ? { data: removeFormulaTestData2(action.data) } : void 0
      };
    case "TriggerEvent":
    case "SetURLParameter":
    case "TriggerWorkflowCallback":
      return {
        ...action,
        ...action.data ? { data: removeFormulaTestData2(action.data) } : void 0
      };
    case "Switch":
      return {
        ...action,
        cases: (action.cases ?? []).map((c) => ({
          ...c,
          ...c.condition ? { condition: removeFormulaTestData2(c.condition) } : void 0,
          actions: c.actions.map(removeActionTestData2)
        })),
        default: {
          ...action.default,
          actions: (action.default?.actions ?? []).map(removeActionTestData2)
        }
      };
    case "Fetch":
      return {
        ...action,
        inputs: action.inputs ? mapObject(action.inputs, ([key, value]) => [
          key,
          {
            ...value,
            ...value.formula ? { formula: removeFormulaTestData2(value.formula) } : void 0
          }
        ]) : action.inputs,
        onSuccess: {
          ...action.onSuccess,
          actions: (action.onSuccess?.actions ?? []).map(removeActionTestData2)
        },
        onError: {
          ...action.onError,
          actions: (action.onError?.actions ?? []).map(removeActionTestData2)
        },
        onMessage: action.onMessage ? {
          ...action.onMessage,
          actions: (action.onMessage?.actions ?? []).map(removeActionTestData2)
        } : void 0
      };
    case "Custom":
    case void 0:
    case null:
      return {
        // The 'group' property was used for categorizing actions and should
        // not have been persisted in projects. But since it's there (for some actions)
        // we should remove it
        ...omitKeys(action, ["description", "group", "label"]),
        ...action.arguments ? {
          arguments: action.arguments.map((a) => a ? removeActionArgumentTestData2(a) : a)
        } : void 0,
        ...action.events ? {
          events: mapObject(action.events ?? {}, ([eventKey, eventValue]) => [
            eventKey,
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            eventValue ? {
              ...eventValue,
              actions: (eventValue.actions ?? []).map(removeActionTestData2)
            } : eventValue
          ])
        } : void 0
      };
    case "SetURLParameters":
      return {
        ...action,
        parameters: mapObject(action.parameters, ([key, value]) => [
          key,
          removeFormulaTestData2(value)
        ])
      };
    case "TriggerWorkflow":
      return {
        ...action,
        // TODO: Below was breaking the build - investigate. Test by adding an animation etc. and see if it is being set to null by mistake
        // ...(action.parameters
        //   ? {
        //       parameters: mapObject(action.parameters, ([key, value]) => [
        //         key,
        //         {
        //           ...value,
        //           formula: isFormula(value)
        //             ? removeFormulaTestData(value)
        //             : isFormula(value.formula)
        //               ? removeFormulaTestData(value.formula)
        //               : value.formula,
        //         },
        //       ]),
        //     }
        //   : undefined),
        ...action.callbacks ? {
          callbacks: mapObject(action.callbacks, ([key, value]) => [
            key,
            {
              ...value,
              actions: value?.actions?.map((a) => a ? removeActionTestData2(a) : a) ?? []
            }
          ])
        } : void 0
      };
    case "AbortFetch":
      return action;
  }
};
var removeActionArgumentTestData2 = (action) => {
  if (!isDefined(action)) {
    return action;
  }
  return {
    ...omitKeys(action, ["description", "type"]),
    formula: action.formula ? removeFormulaTestData2(action.formula) : action.formula
  };
};
var removeFormulaTestData2 = (formula) => {
  if (!isFormula(formula)) {
    return formula;
  }
  switch (formula.type) {
    case "path":
    case "value":
    case "function":
      return formula;
    case "record":
      return {
        ...formula,
        entries: (formula.entries ?? []).map((entry) => ({
          ...entry,
          formula: removeFormulaTestData2(entry.formula)
        }))
      };
    case "array":
    case "or":
    case "and":
    case "object":
      return {
        ...formula,
        arguments: formula.arguments?.map((arg) => ({
          ...arg,
          formula: removeFormulaTestData2(arg.formula)
        })) ?? []
      };
    case "apply":
      return {
        ...formula,
        arguments: (formula.arguments ?? []).map((a) => ({
          ...omitKeys(a, ["testValue"]),
          formula: removeFormulaTestData2(a.formula)
        }))
      };
    case "switch":
      return {
        ...formula,
        cases: (formula.cases ?? []).map((c) => ({
          ...c,
          condition: removeFormulaTestData2(c.condition)
        })),
        default: removeFormulaTestData2(formula.default)
      };
  }
};

// ../ssr/dist/utils/tags.js
var replaceTagInNodes = (oldTag, newTag) => (component) => ({
  ...component,
  nodes: Object.entries(component.nodes ?? {}).reduce((acc, [key, node]) => {
    if (node.type !== "element") {
      return {
        ...acc,
        [key]: node
      };
    }
    return {
      ...acc,
      [key]: {
        ...node,
        tag: node.tag === oldTag ? newTag : node.tag
      }
    };
  }, {})
});

// ../ssr/src/rendering/fonts.ts
var getFontCssUrl2 = ({
  fonts,
  baseForAbsoluteUrls,
  basePath = "/.toddle/fonts/stylesheet/css2"
}) => {
  if (fonts.length === 0) {
    return;
  }
  const searchParams = new URLSearchParams();
  searchParams.set("display", "swap");
  for (const font of fonts) {
    const sortedWeights = easySort(
      (font.variants ?? []).filter((v) => !Number.isNaN(Number(v.weight))),
      (v) => Number(v.weight)
    );
    if (sortedWeights.length === 0) {
      continue;
    }
    const italicRange = sortedWeights.filter((v) => v.italic);
    const standardRange = sortedWeights.filter((v) => !v.italic);
    const encodeStaticRange = (range, index) => range.map(
      (v) => `${typeof index === "number" ? `${index},` : ""}${v.weight}`
    ).join(";");
    const hasItalicVariants = italicRange.length > 0;
    const wght = [standardRange, italicRange].map(
      (range, index) => encodeStaticRange(range, hasItalicVariants ? index : void 0)
    ).filter(Boolean).join(";");
    let familyValue = font.family;
    if (hasItalicVariants) {
      familyValue += `:ital,wght@${wght}`;
    } else {
      familyValue += `:wght@${wght}`;
    }
    searchParams.append("family", familyValue);
  }
  const path = `${basePath}?${searchParams.toString()}`;
  try {
    const url = typeof baseForAbsoluteUrls === "string" ? new URL(path, baseForAbsoluteUrls).toString() : path;
    return {
      // Eventually, we expect to support multiple types of font-display properties
      // and we might need to return a url for each type of font-display (e.g. swap, block, fallback)
      swap: url
    };
  } catch (e) {
    console.error(e);
  }
};

// ../ssr/src/utils/media.ts
var transformRelativePaths = (urlOrigin) => (component) => ({
  ...component,
  nodes: Object.entries(component.nodes ?? {}).reduce((acc, [key, node]) => {
    return {
      ...acc,
      [key]: {
        ...node,
        ...node.type === "element" ? {
          attrs: Object.entries(node.attrs).reduce(
            (acc2, [key2, formula]) => {
              if (["src"].includes(key2) && formula?.type === "value" && typeof formula.value === "string") {
                return {
                  ...acc2,
                  [key2]: {
                    ...formula,
                    value: new URL(formula.value, urlOrigin).href
                  }
                };
              }
              return { ...acc2, [key2]: formula };
            },
            {}
          )
        } : {}
      }
    };
  }, {})
});

// src/routes/customElement.ts
var customElement = (pageLoader) => async (ctx) => {
  const url = new URL(ctx.req.url);
  const project = ctx.var.project;
  const errorResponse = (error, status) => ctx.json(
    {
      error,
      info: `Please see https://docs.nordcraft.com/components/export-a-component#export-as-web-component for more information on web component export`
    },
    {
      headers: {
        // Allow all origins for error responses.
        // This is useful for debugging if a web component doesn't load/work
        "Access-Control-Allow-Origin": "*"
      },
      status
    }
  );
  const componentName = ctx.req.param("filename").replace(".js", "");
  const files = await pageLoader({
    ctx,
    name: componentName
  });
  if (!files) {
    return errorResponse("Component not found", 404);
  }
  const component = files.components?.[componentName];
  if (!component) {
    return errorResponse("Component not found", 404);
  }
  try {
    if (isPageComponent(component)) {
      return errorResponse(
        `Pages are not supported as custom elements, only components`,
        403
      );
    }
    const themes = files.themes ?? {};
    const fontsToLoad = Object.values(themes).flatMap((theme2) => theme2.fonts);
    const includedComponents = takeIncludedComponents({
      root: component,
      projectComponents: files.components,
      packages: files.packages
    });
    const customCodeSearchParams = new URLSearchParams([
      ["entry", component.name]
    ]);
    const fontStylesheetUrl = getFontCssUrl2({
      fonts: fontsToLoad,
      baseForAbsoluteUrls: url.origin
    });
    const content = `/*
 * This file is autogenerated by Nordcraft and should not be edited manually.
 *
 * <${safeCustomElementName(component.name)} />
 *
 * Attributes:
 *
 * ${Object.entries(component.attributes ?? {}).map(([, attr]) => `- ${attr.name}`).join("\n * ")}
 *
 * Events:
 *
 * ${Object.entries(component.events ?? {}).map(([, event]) => `- ${event.name}`).join("\n * ")}
 */

import { defineComponents, loadCorePlugins } from '/_static/custom-element.main.esm.js';
${files.customCode ? `import { loadCustomCode, formulas, actions } from '/.toddle/custom-code.js?${customCodeSearchParams.toString()}';` : `const formulas = {};
const actions = {};`}

${isDefined(fontStylesheetUrl) ? `
    // Font loading in shadow-dom is not supported widely, so we inject in <head>
    // Ideally, we would inject the stylesheet directly in the ToddleComponent,
    // but it appears it doesn't fetch the fonts - only the stylesheet
    // See https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#referencing_external_styles
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "${fontStylesheetUrl.swap}");
    document.head.appendChild(linkElem);` : ""}

// Global toddle object
const toddle = (() => {
  const legacyActions = {}
  const legacyFormulas = {}
  const argumentInputDataList = {}
  return {
    formulas,
    actions,
    errors:[],
    project:"${project.name}",
    branch:"main",
    commit:"unknown",
    registerAction: (name, handler) => {
      if (legacyActions[name]) {
        console.error('There already exists an action with the name ', name)
        return
      }
      legacyActions[name] = handler
    },
    getAction: (name) => legacyActions[name],
    registerFormula: (name,handler,getArgumentInputData) => {
      if (legacyFormulas[name]) {
        console.error('There already exists a formula with the name ', name)
        return
      }
      legacyFormulas[name] = handler
      if (getArgumentInputData) {
        argumentInputDataList[name] = getArgumentInputData
      }
    },
    getFormula: (name) => legacyFormulas[name],
    getCustomAction: (name, packageName) => {
      return actions[packageName ?? "${project.name}"]?.[name] ?? actions["${project.name}"]?.[name]
    },
    getCustomFormula: (name, packageName) => {
      return formulas[packageName ?? "${project.name}"]?.[name] ?? formulas["${project.name}"]?.[name]
    },
    getArgumentInputData: (formulaName,args,argIndex,data
    ) => argumentInputDataList[formulaName]?.(args, argIndex, data) || data,
    data: {},
    locationSignal: null,
    eventLog: [],
    pageState: {},
    env: {
      isServer: false,
      branchName: "main",
      request: undefined,
    }
  }
})();

// Load core plugin (actions and formulas)
loadCorePlugins(toddle);

${files.customCode ? `// Load project's custom actions and formulas
loadCustomCode();` : ""}

// toddle.isEqual is required for some formulas to work. TODO: Remove this once they can consume from somewhere else.
if(!globalThis.toddle || !globalThis.toddle.isEqual) {
  globalThis.toddle = {
    isEqual: toddle.isEqual,
  }
}

// Define the custom element
defineComponents(${JSON.stringify([component.name])}, ${JSON.stringify({
      themes,
      components: includedComponents.map(replaceTagInNodes(safeCustomElementName(component.name), "div")).map(removeTestData2).map(transformRelativePaths(url.origin))
    })}, toddle);
`;
    ctx.header("Cache-Control", "no-cache");
    ctx.header("Access-Control-Allow-Origin", "*");
    ctx.header("Content-Type", "text/javascript");
    return ctx.body(content);
  } catch (e) {
    console.error(e);
    return errorResponse("404", 404);
  }
};

// src/routes/favicon.ts
var favicon = async (c) => {
  try {
    const iconUrl = applyFormula(
      c.var.config?.meta?.icon?.formula,
      void 0
    );
    const requestUrl = new URL(c.req.url);
    const validIconUrl = validateUrl({
      path: iconUrl,
      origin: requestUrl.origin
    });
    if (validIconUrl) {
      const { body, ok, headers: iconHeaders } = await fetch(validIconUrl);
      if (ok && body) {
        c.header("Cache-Control", "public, max-age=3600");
        const contentType = iconHeaders.get("content-type");
        if (isDefined(contentType)) {
          c.header("Content-Type", contentType);
        }
        return c.body(body);
      }
    }
  } catch (e) {
    console.error(e);
  }
  c.header("Content-Type", "image/x-icon");
  return c.body(null, 404);
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/middleware/cors/index.js
var cors = (options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        if (opts.credentials) {
          return (origin) => origin || null;
        }
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  const findAllowMethods = ((optsAllowMethods) => {
    if (typeof optsAllowMethods === "function") {
      return optsAllowMethods;
    } else if (Array.isArray(optsAllowMethods)) {
      return () => optsAllowMethods;
    } else {
      return () => [];
    }
  })(opts.allowMethods);
  return async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    const allowOrigin = await findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.origin !== "*" || opts.credentials) {
        set("Vary", "Origin");
      }
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      const allowMethods = await findAllowMethods(c.req.header("origin") || "", c);
      if (allowMethods.length) {
        set("Access-Control-Allow-Methods", allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
    if (opts.origin !== "*" || opts.credentials) {
      c.header("Vary", "Origin", { append: true });
    }
  };
};

// src/routes/font.ts
var fontRouter = new Hono2();
fontRouter.use(
  cors({
    origin: "*"
    // Restrict this to relevant origins in production if needed
  })
);
fontRouter.get("/stylesheet/:stylesheet{.*}", async (c) => {
  const req = c.req;
  const requestUrl = new URL(req.url);
  try {
    const timingKey = "stylesheetFetch";
    startTime(c, timingKey);
    const response = await fetch(
      `https://fonts.googleapis.com/${req.param("stylesheet")}${requestUrl.search}`,
      standardFontRequestInit(req.raw)
    );
    endTime(c, timingKey);
    let stylesheetContent = await response.text();
    if (response.ok) {
      stylesheetContent = stylesheetContent.replaceAll(
        "https://fonts.gstatic.com",
        // This should match the path in the font route below 👇
        // This ensures fonts are fetched through the proxied endpoint /.toddle/fonts/font/...
        "/.toddle/fonts/font"
      );
    } else {
      c.header("Content-Type", "text/css; charset=utf-8");
      return c.body("Stylesheet not found", 404);
    }
    const headers = filterFontResponseHeaders(response.headers);
    Array.from(headers.entries()).forEach(
      ([name, value]) => c.header(name, value, { append: true })
    );
    return c.body(stylesheetContent);
  } catch {
    c.header("Content-Type", "text/css; charset=utf-8");
    return c.body("Stylesheet could not be generated", 404);
  }
});
fontRouter.get("/font/:font{.*}", async (c) => {
  try {
    const init = standardFontRequestInit(c.req.raw);
    const response = await fetch(
      `https://fonts.gstatic.com/${c.req.param("font")}`,
      init
    );
    const headers = filterFontResponseHeaders(response.headers);
    Array.from(headers.entries()).forEach(
      ([name, value]) => c.header(name, value, { append: true })
    );
    if (response.ok && response.body) {
      return c.body(response.body, response.status);
    } else {
      return c.text("Font not found", 404);
    }
  } catch {
    return c.text("Unable to fetch font", 404);
  }
});
var standardFontRequestInit = (req) => ({
  method: req.method,
  headers: [
    "Accept",
    "Accept-Encoding",
    "Accept-Language",
    "Referer",
    "User-Agent"
  ].map((name) => [name, req.headers.get(name)]).filter((h) => typeof h[1] === "string")
});
var filterFontResponseHeaders = (headers) => new Headers(
  [
    "Content-Type",
    "Cache-Control",
    "Expires",
    "Accept-Ranges",
    "Date",
    "Last-Modified",
    "ETag"
  ].map((name) => [name, headers.get(name)]).filter((h) => typeof h[1] === "string")
);

// src/routes/manifest.ts
var MANIFEST_CONTENT_TYPE = "application/manifest+json";
var manifest = async (c) => {
  c.header("Content-Type", MANIFEST_CONTENT_TYPE);
  try {
    const manifestUrl = applyFormula(
      c.var.config?.meta?.manifest?.formula,
      void 0
    );
    const validManifestUrl = validateUrl(manifestUrl);
    if (typeof validManifestUrl === "string") {
      const { body, ok } = await fetch(manifestUrl);
      if (ok && body) {
        c.header("Cache-Control", `public, max-age=3600`);
        return c.body(body);
      }
    }
  } catch (e) {
    console.error(e);
  }
  return c.body(null, 404);
};

// src/routes/pageHandler.ts
var pageHandler = (pageLoader, options) => async (ctx, next) => {
  const url = new URL(ctx.req.url);
  const pageMatch = matchPageForUrl({
    url,
    pages: Object.values(ctx.var.routes.pages)
  });
  if (pageMatch) {
    const pageContent = await pageLoader({ ctx, name: pageMatch.name });
    const component = pageContent?.components?.[pageMatch.name];
    if (!component || !isPageComponent(component)) {
      return next();
    }
    return nordcraftPage({
      hono: ctx,
      project: ctx.var.project,
      files: pageContent,
      page: component,
      status: pageMatch.name === "404" ? 404 : 200,
      options
    });
  }
  return next();
};

// src/routes/robots.ts
var ROBOTS_CONTENT_TYPE = "text/plain";
var robots = async (c) => {
  c.header("Content-Type", ROBOTS_CONTENT_TYPE);
  try {
    const robots2 = c.var.config?.meta?.robots;
    const robotsUrl = applyFormula(robots2?.formula, void 0);
    const validatedRobotsUrl = validateUrl(robotsUrl);
    if (validatedRobotsUrl) {
      const { body, ok } = await fetch(validatedRobotsUrl);
      if (ok && body) {
        c.header("Cache-Control", "public, max-age=3600");
        return c.body(body);
      }
    }
    const url = new URL(c.req.url);
    const content = `Sitemap: ${url.origin}/sitemap.xml

User-agent: *
Disallow: /_toddle
Disallow: /_toddle/
Disallow: /.toddle
Disallow: /.toddle/
Disallow: /.nordcraft
Disallow: /.nordcraft/
Disallow: /_api
Disallow: /_api/
Allow: /cdn-cgi/imagedelivery/*
Disallow: /cdn-cgi/
`;
    c.header("Cache-Control", "public, max-age=3600");
    return c.body(content);
  } catch (e) {
    console.error(e);
  }
  return c.body(null, 404);
};

// src/routes/routeHandler.ts
var routeHandler = (getConnInfo2) => async (c, next) => {
  const url = new URL(c.req.url);
  const routeMatch = matchRouteForUrl({
    url,
    routes: c.var.routes?.routes ?? {},
    env: serverEnv({ branchName: "main", req: c.req.raw, logErrors: false }),
    req: c.req.raw,
    // TODO: We should pass in global Nordcraft formulas from project + packages here
    serverContext: getServerToddleObject({})
  });
  if (!routeMatch) {
    return next();
  }
  const { route, name: routeName } = routeMatch;
  const destination = getRouteDestination({
    // might not want to use main branch here
    env: serverEnv({ branchName: "main", req: c.req.raw, logErrors: false }),
    req: c.req.raw,
    route,
    // TODO: We should pass in global Nordcraft formulas from project + packages here
    serverContext: getServerToddleObject({})
  });
  if (!destination) {
    return c.text(`Invalid destination`, {
      status: 500
    });
  }
  if (route.type === "redirect") {
    if (c.req.raw.method !== "GET") {
      return c.text(`Method Not Allowed`, { status: 405 });
    }
    c.header(REDIRECT_NAME_HEADER, routeName);
    return c.redirect(destination, route.status ?? 302);
  }
  if (c.req.raw.headers.get(REWRITE_HEADER) !== null) {
    return c.text(`Nordcraft rewrites are not allowed to be recursive`, {
      status: 500
    });
  }
  try {
    const headers = skipCookieHeader(skipHopByHopHeaders(c.req.raw.headers));
    const ip = normalizeIP(getConnInfo2(c).remote.address);
    if (ip) {
      headers.set("X-Forwarded-For", ip);
    }
    headers.set(REWRITE_HEADER, "true");
    if ((headers.get("host") ?? "").startsWith("localhost")) {
      headers.delete("cf-connecting-ip");
      headers.delete("host");
    }
    headers.set("Accept", "*/*");
    headers.set("Accept-Encoding", "gzip, deflate");
    const timingKey = "proxyRequest";
    startTime(c, timingKey);
    let response;
    if (destination.origin === url.origin) {
      const hono = c.get("app");
      let executionCtx;
      try {
        executionCtx = c.executionCtx;
      } catch {
      }
      response = await hono.fetch(
        new Request(destination, {
          method: c.req.raw.method,
          body: HttpMethodsWithAllowedBody.includes(
            c.req.raw.method
          ) ? c.req.raw.body : void 0,
          headers
        }),
        c.env,
        executionCtx
      );
    } else {
      response = await fetch(destination, {
        headers,
        method: c.req.raw.method,
        body: HttpMethodsWithAllowedBody.includes(
          c.req.raw.method
        ) ? c.req.raw.body : void 0
      });
    }
    endTime(c, timingKey);
    const body = NON_BODY_RESPONSE_CODES.includes(response.status) ? void 0 : response.body ?? new ReadableStream();
    skipHopByHopHeaders(skipContentEncodingHeader(response.headers)).entries().forEach(([name, value]) => {
      c.header(name, value, { append: true });
    });
    c.status(response.status);
    if (body) {
      return c.body(body);
    }
    return c.res;
  } catch {
    return c.html(
      `Unable to fetch resource defined in proxy destination: ${destination.href}`,
      { status: 500 }
    );
  }
};

// src/routes/serviceWorker.ts
var serviceWorker = async (c) => {
  c.header("Content-Type", "text/javascript");
  try {
    const config = c.var.config;
    const serviceWorkerUrl = isDefined(config?.meta?.serviceWorker) ? (
      // We don't need to provide a context for applyFormula, as the formula should just be a value formula
      applyFormula(config.meta.serviceWorker.formula, void 0)
    ) : void 0;
    const url = validateUrl(serviceWorkerUrl);
    if (url) {
      const { body, ok } = await fetch(url);
      if (ok && body) {
        return c.body(body);
      }
    }
    return c.body(null, 404);
  } catch (e) {
    console.error(e);
  }
  return c.body(null, 404);
};

// src/routes/sitemap.ts
var SITEMAP_CONTENT_TYPE = "application/xml";
var sitemap = async (c) => {
  c.header("Content-Type", SITEMAP_CONTENT_TYPE);
  try {
    const url = new URL(c.req.url);
    const config = c.var.config;
    const routes2 = c.var.routes;
    const sitemapFormula = config?.meta?.sitemap?.formula;
    if (isDefined(sitemapFormula)) {
      const sitemapUrl = validateUrl(
        // we don't provide a context for applyFormula, as the formula should just be a value formula
        applyFormula(sitemapFormula, void 0)
      );
      if (sitemapUrl) {
        const { body, ok } = await fetch(sitemapUrl);
        if (ok && body) {
          c.header("Cache-Control", "public, max-age=3600");
          return c.body(body);
        }
      } else {
        return c.body(null, 404);
      }
    } else {
      const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.values(routes2.pages).filter(
        (component, i) => (
          // only include static routes
          component.route?.path.every((path) => path.type === "static") && // limit to 1000 pages for now to keep performance reasonable
          i < 1e3 ? true : false
        )
      ).sort((file1, file2) => {
        const page1PathArgs = file1.route.path.length;
        const page2PathArgs = file2.route.path.length;
        return page1PathArgs - page2PathArgs;
      }).map(
        (file) => `
<url>
  <loc>${url.origin}/${file.route.path.map((p) => p.name).join("/")}</loc>
</url>`
      ).join("")}
</urlset>`;
      c.header("Cache-Control", "public, max-age=3600");
      return c.body(content);
    }
  } catch (e) {
    console.error(e);
  }
  return c.body(null, { status: 404 });
};

// src/app.ts
var getApp = (options) => {
  initIsEqual();
  const app2 = new Hono2({ strict: false });
  app2.use(async (c, next) => {
    c.set("app", app2);
    await next();
  });
  app2.use(
    timing({
      // Potentially only enable detailed timing in development mode
      // to avoid potential timing attacks in production
      // See https://developers.cloudflare.com/workers/reference/security-model/#step-1-disallow-timers-and-multi-threading
      enabled: true
    })
  );
  options.earlyMiddleware?.forEach((mw) => app2.use(mw));
  app2.use(poweredBy({ serverName: "Nordcraft" }));
  if (options.staticRouter) {
    app2.use(options.staticRouter.path, options.staticRouter.handler);
  }
  app2.route("/.toddle/fonts", fontRouter);
  app2.all(
    "/.toddle/omvej/components/:componentName/apis/:apiName",
    proxyRequestHandler(
      (requestContext) => options.getConnInfo(requestContext)
    )
  );
  app2.get("/.nordcraft/cookies/set-cookie", setCookieHandler);
  app2.use(...options.fileLoaders);
  app2.get(
    "/.toddle/custom-element/:filename{.+.js}",
    customElement(options.pageLoader.loader)
  );
  if (options.stylesheetRouter) {
    app2.get(options.stylesheetRouter.path, options.stylesheetRouter.handler);
  }
  if (options.customCodeRouter) {
    app2.get(options.customCodeRouter.path, options.customCodeRouter.handler);
  }
  app2.all("/*", routeHandler(options.getConnInfo));
  app2.get("/sitemap.xml", sitemap);
  app2.get("/robots.txt", robots);
  app2.get("/manifest.json", manifest);
  app2.get("/favicon.ico", favicon);
  app2.get("/serviceWorker.js", serviceWorker);
  app2.get("/*", pageHandler(options.pageLoader.loader, options.pageLoader.urls));
  app2.notFound(
    notFoundLoader(options.pageLoader.loader, options.pageLoader.urls)
  );
  return app2;
};

// src/middleware/jsLoader.ts
var fileCache = /* @__PURE__ */ new Map();
var loadJsFile = async (path) => {
  if (fileCache.has(path)) {
    return fileCache.get(path);
  }
  try {
    const content = await import(path.toLowerCase());
    const parsed = content.default;
    fileCache.set(path, parsed);
    return parsed;
  } catch (e) {
    fileCache.set(path, void 0);
    console.error(`Unable to load ${path}`, e instanceof Error ? e.message : e);
  }
};

// ../../node_modules/.bun/hono@4.12.14/node_modules/hono/dist/helper/factory/index.js
var createMiddleware = (middleware) => middleware;

// src/middleware/projectInfo.ts
var loadProjectInfo = createMiddleware(
  async (ctx, next) => {
    const timingKey = "projectInfo";
    startTime(ctx, timingKey);
    const project = await loadJsFile("./project.js");
    endTime(ctx, timingKey);
    if (!project) {
      return ctx.text("Project configuration not found", { status: 404 });
    }
    ctx.set("project", project.project);
    ctx.set("config", project.config);
    return next();
  }
);

// src/middleware/routesLoader.ts
var routes;
var routesLoader = createMiddleware(
  async (ctx, next) => {
    if (!routes) {
      routes = await loadJsFile("./routes.js");
      if (!routes) {
        return ctx.text("Route declarations for project not found", {
          status: 404
        });
      }
    }
    ctx.set("routes", routes);
    return next();
  }
);

// src/index.ts
var app = getApp({
  getConnInfo,
  fileLoaders: [routesLoader, loadProjectInfo],
  pageLoader: {
    loader: async ({ name, ctx }) => {
      const timingKey = `pageLoader:${name}`;
      startTime(ctx, timingKey);
      const file = await loadJsFile(
        `./components/${name}.js`
      );
      endTime(ctx, timingKey);
      return file;
    },
    urls: {
      pageStylesheetUrl: (name) => `/_static/${name}.css`,
      customCodeUrl: (name) => `/_static/cc_${name}.js`
    }
  }
});
var index_default = app;
export {
  index_default as default
};
