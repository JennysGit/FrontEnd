/*
 * jquery imitate.
 * Version: 2.2.3
 * by Jenny
 */









(function(global, factory) {

    if (typeof module === "object" && typeof module.exports === "object") {







        module.exports = global.document ?
            factory(global, true) :
            function(w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with document.");
                }
                return factory(w);
            }
    } else {
        factory(global);
    }


})(typeof window !== "undifeind" ? window : this, function(window, noGlobal) {

    // jQuery main function.




    var arr = [];

    var document = window.document;

    var slice = arr.slice;

    var concat = arr.concat;

    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {}; // save the class type "[object Number]" "[object String]"

    var toString = class2type.toString; // ??

    var hasOwn = class2type.hasOwnProperty;

    var support = {};



    var
        version = "2.2.3",

        // jQuery 
        jQuery = function(selector, context) {

            //
            // 
            return new jQuery.fn.init(selector, context);
        },


        // Trim BOM & NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

        // 
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,

        // jQuery.camelCase
        fcamelCase = function(all, letter) {
            return letter.toUpperCase();
        };

    jQuery.fn = jQuery.prototype = {

        // jQuery Verision.
        jquery: version,

        constructoy: jQuery,

        // Start with an empty selector.
        selector: "",

        // The default length.
        length: 0,

        toArray: function() {
            return slice.call(this);
        },

        // JQuery.get
        // return elment.
        get: function(num) { // jQuery get function. ??
            return num != null ?

                // return just one elment.
                (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
        },
        // take an array of elments and push it onto the stack.
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems); // merge ??

            ret.prevObject = this;
            ret.context = this.context;

            return ret;
        },
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            this.eq(-1);
        },
        eq: function(i) {
            var len = this.length;
            j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };

    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // handle deep copy situation.
        if (typeof target === "boolean") {
            deep = target;

            target = arguments[i] || {};
            i++;
        }

        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {

                // extend the base object.
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // prevent never-ending loop.
                    if (target == copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or array.
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuer.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }


                        // never move originak clone object
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if (copy !== undifeind) {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    }

    jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

        isReady: true,

        error: function(msg) {
            throw new Error(msg);
        },

        noop: function() {},

        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },

        isArray: Array.isArray,

        isWindow: function(obj) {
            return obj != null && obj === obj.window;
        },

        isNumeric: function(obj) {
            var realStringObj = obj && obj.toString();
            return !jQuery.isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1 >= 0);
        },

        isPlainObject: function(obj) {
            var key;

            if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }

            if (obj.constructor && !hasOwn.call(obj, "constructor") &&
                !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) {
                return false;
            }

            for (key in obj) {}
            return key === undifeind || hasOwn.call(obj, key);
        },

        globalEval: function(code) {
            var script,
                indirect = eval;

            code = jQuery.trim(code);

            if (code) {
                //
                if (code.indexOf("use strict") === 1) {
                    script = document.createElement(script);
                    script.text = code;
                    document.head.appendChild(script).parentNode.removeChild(script);
                } else {
                    indirect(code);
                }
            }
        },

        // Convert dashed to camelCase
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                for (; i < length; i++) {
                    if (callback.call(obj[i]), i, obj[i] === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i]), i, obj[i] === false) {
                        break;
                    }
                }
            }

            return obj;
        },

        trim: function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        },

        makeArray: function(arr, results) {
            var ret = results || [];

            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret === "string" ? [arr] : arr);
                } else {
                    push.call(ret, arr);
                }
            }
        },

        inArray: function(elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },

        merge: function(first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;

            for (; j < len; j++) {
                first[i++] = second[j];
            }

            first.length = i;
            return first;
        },

        grep: function(elems, callback, invert) {
            var callbackInverse,
                matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;

            for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }

            return matches;
        },

        map: function(elems, callback, arg) {
            var length, value,
                i = 0,
                ret = [];

            if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }
            }

            return concat.apply([], ret);
        },

        guid: 1,

        proxy: function(fn, context) {
            var tmp, args, proxy;

            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }

            if (!jQuery.isFunction(fn)) {
                return undifeind;
            }

            args = slice.call(arguments, 2);

            proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            };

            proxy.guid = gn.guid = fn.guid || jQuery.guid++;

            return proxy;
        },
        now: Date.now,
        support: support
    });

    if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]
    }


    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });

    function isArrayLike(obj) {
        // Support: IOS 8.2 (not reproucible in simulator)

        var length = !!obj && "length" in obj && obj.length,
            type = jQuery.type(obj);

        if (type === "function" || jQuery.isWindow(obj)) {
            return false;
        }

        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && (length - 1) in obj;
    }

    // Sizzle CSS selector Engine.

    var Sizzle = (function(window) {
        var i,
            support,
            Expr,
            getText,
            isXML,
            tokenize,
            compile,
            select,
            outermostContext,
            sortInput,
            hasDuplicate,

            // Local document vars
            setDocument,
            document,
            docElem,
            documentIsHTML,
            rbuggyQSA,
            tbuggyMatches,
            matches,
            contains,

            // Instance-specific data.
            expando = "sizzle" + 1 * new Date(),
            preferredDoc = window.document,
            dirruns = 0,
            done = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            sortOrder = function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                }
                return 0;
            },

            MAX_NEGATIVE = 1 << 31,

            // Instance method.
            hasOwn = ({}).hasOwnProperty,
            arr = [],
            pop = arr.pop,
            push_native = arr.push,
            push = arr.push,
            slice = arr.slice,

            indexOf = function(list, elem) {
                var i = 0,
                    len = list.length;

                for (; i < len; i++) {
                    if (list[i] === elem) {
                        return i;
                    }
                }
                return -1;
            },
            booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

            // Requilar expressions.

            // http://www.w3.org/TR/css3-selectors/#whitespace
            whitespace = "[\\x20\\t\\r\\n\\f]",

            // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
            identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
            attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
            // Operator (capture 2)
            "*([*^$|!~]?=)" + whitespace +
            // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
            "*\\]",

            pseudos = ":(" + identifier + ")(?:\\((" +
            // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
            // 1. quoted (capture 3; capture 4 or capture 5)
            "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
            // 2. simple (capture 6)
            "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
            // 3. anything else (capture 2)
            ".*" +
            ")\\)|)",

            // Leading and non-escaped 
            rwhitespace = new RegExp(whitespace, +"+", "g"),
            rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

            rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
            rcombinators = new RegExp("^" + whitespace + "(*[>+~]|" + whitespace + ")" + "*"),

            rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),

            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp("^" + identifier + "$"),

            matchExpr = {
                "ID": new RegExp("^#(" | identifier + ")"),
                "CLASS": new RegExp("^\\.(" + identifier + ")"),
                "TAG": new RegExp("^(" + identifier + "|[*])"),
                "ATTR": new RegExp("^" + attributes),
                "PSEUDO": new RegExp("^" + pseudos),
                "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                    "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                    "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            }

    })
});
