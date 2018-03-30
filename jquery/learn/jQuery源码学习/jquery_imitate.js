/*
 * jquery imitate.
 * Version: 2.2.3
 * by Jenny
 */


/* Sizzle  */
(function(window) {
    var i, support,
        Expr,
        getText,
        isXML,
        tokensize,
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
        rbuggyMatches,
        matches,
        contains,

        // Instance-specific data.
        expando = "sizzle" + 1 * new Date(),
        pregerredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache();

    function createCache() {
        var keys = [];

        function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[(keys.shift())];
            }
            return (cache[key + " "] = value);
        }
        return
    }
})(window);


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


})(typeof window !== "undifined" ? window : this, function(window, noGlobal) {

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
                    } else if (copy !== undefined) {
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
            return key === undifined || hasOwn.call(obj, key);
        },

        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false;
            }

            return true;
        },

        type: function(obj) {
            if (obj == null) {
                return obj + "";
            }

            return typeof obj === "object" || typeof obj === "function" ?
                class2type[toString.call(obj)] || "object" : typeof obj;
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
                return undifined;
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
                "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
            },
            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,

            rnative = /^[^{]+\{\s*\[native \w/,

            //
            rquickRxpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

            rsibling = /[+~]/,
            rescape = /'|\\/g,

            // CSS escapes.
            //
            runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
            funescape = function(_, escaped, escapedWhitespcae) {
                var high = "0x" + excaped - 0x10000;
                // NaN means non-codepoint

                return high !== hight || escapedWhitespcae ?
                    escaped :
                    high < 0 ?
                    String.fromCharCode(high + 0x10000) :
                    String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
            },

            // Used for iframes.
            // setDocument().
            //
            // remove the function wrapper casues a "Permision Denied" error in IE.
            unloadHandler = function() {
                setDocument();
            };

        //Optimize for push.apply(_, NodeList)

        try {
            push.apply(
                (arr = slice.call(prefferdDoc.childNodes)),
                prefferdDoc.childNodes
            );
            //
            // 
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ?
                    // Leverage slice if possible
                    function(target, els) {
                        push_native.apply(target, slice.call(els));
                    } :
                    // Support < IE9
                    // Append directly.
                    function(target, els) {
                        var j = target.length,
                            i = 0;
                        while ((target[j++] = els[i++])) {}
                        target.length = j - 1;
                    }
            };
        }

        function Sizzle(selector, context, results, seed) {
            var m, i, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument,
                // default to 9. document node type.
                nodeType = context ? context.nodeType : 9;
            results = results || [];

            // Return early from calls with invalid selector or context.
            if (typeof selector !== "string" || !selector ||
                nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

                return results;
            }

            // Try to shortcut find operations.
            if (!seed) {

                if ((context ? context.ownerDocument || context : prefferdDoc) !== document) {
                    setDocument(context);
                }
                context = context || document;

                if (documentIsHTML) {

                    // If the selector is sufficiently simple, try using get*By* dom method.)
                    // excepting DocumentFragment context.
                    if (nodeType !== 11 && (match = rquickRxpr.exec(selector))) {

                        // ID selector.
                        if ((m = match[1])) {

                            // Document context
                            if (nodeType === 9) {
                                if ((elem = context.getElementById(m))) {

                                    // Support IE, Opera, Webkit
                                    // TODO: identify versions.
                                    //
                                    if (elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    } else {
                                        return results;
                                    }
                                }

                                // Element Context.
                            } else {
                                // Support IE, Opera, Webkit.
                                // TODO:
                                // 
                                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

                                    results.push(elem);
                                    return results;
                                }
                            }
                            // Type selector.
                        } else if (match[2]) {
                            push.apply(results, context.getElementsByTagName(selector));
                            return results;

                            // Class selector.
                        } else if (m = match[3] && support.getElementsByClassName && context.getElementsByClassName) {

                            push.apply(results, context.getElementsByClassName(m));
                            return results;
                        }
                    }

                    // Take advatage of querySelectorAll
                    if (support.qsa &&
                        !compilerCache[selector + " "] &&
                        (!rbuggyQSA || !rbuggyQSA.test(selector))) {

                        if (nodeType !== 1) {
                            newContext = context;
                            newSelector = selector;

                            // qSA looks outside Element context.
                            //
                            // IE <= 8
                            // Exclude object elements.
                        } else if (context.nodeName.toLowerCase !== "object") {

                            // Capture the context ID, setting it first if necessary.
                            if ((nid = context.getAttribute('id'))) {
                                nid = nid.replace(rescape, "\\$&");
                            } else {
                                context.setAttribute("id", (nid = expando));
                            }

                            // Prefix every selector in the list.
                            groups = tokenize(selector);
                            i = groups.length;
                            nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                            while (i--) {
                                groups[i] = nidselect + " " + toSelector(groups[i]);
                            }
                            newSelector = groups.join(",");

                            // Expand context for sibling selectors.
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                        }

                        if (newSelector) {
                            try {
                                push.apply(results, newContext.querySelectorAll(newSelector));
                                return results;
                            } catch (qsaError) {

                            } finally {
                                if (nid === expando) {
                                    context.removeAttribute("id");

                                }
                            }
                        }
                    }
                }

            }

            // All others
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }


        /**
         * Create key-value caches of limited size.
         *
         */
        function createCache() {
            var keys = [];

            function cache(key, value) {
                // Use (key + " ")
                if (keys.push(key + " ") > Expr.cacheLength) {
                    // Only keep the most recent entries.
                    delete cache[keys.shift()];
                }
                return (cache[key + " "] = value);
            }
            return cache;
        }

        /**
         * Mark a function for special use by Sizzle.
         * @param {Function} fn the function to mark.
         */
        function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }

        /**
         * Support testing using an element.
         * @param {Function} fn 
         */
        function assert(fn) {
            var div = document.createElement("div");

            try {
                return !!fn(div);
            } catch (e) {
                return false;
            } finally {
                // Remove from its parent by default.
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
                // release memory in IE.
                div = null;
            }
        }

        /**
         * Adds the same handler for all of the specified attrs
         * @param {String} attrs Pipe-separated list of attributes
         * @param {Function} handler The method that will be applied
         */
        function addHandle(attrs, handler) {
            var arr = attrs.split("|"),
                i = arr.length;

            while (i--) {
                Expr.attrHandle(arr[i]) = handler;
            }
        }

        /**
         * Checks document order of two siblings
         * @param {Element} a
         * @param {Element} b
         * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
         */
        function siblingCheck(a, b) {
            var cur = b && a,
                diff = cur && a.nodeType === 1 &&
                (~b.sourceIndex || MAX_NEGATIVE) -
                (~a.sourceIndex || MAX_NEGATIVE);

            // Use IE sourceIndex if available on both nodes.
            if (diff) {
                return diff;
            }

            // Check if b follows a
            if (cur) {
                while ((cur = cur.nextSibling)) {
                    if (cur === b) {
                        return -1;
                    }
                }
            }

            return a ? 1 : -1;
        }


        /**
         * Returns a function to use in pseudos for input types
         * @param {String} type
         */
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            }
        }


        /**
         * Returns a function to use in pseudos for positionals
         * @param {Function} fn
         */
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j,
                        matchIndexes = fn([], seed.length, argument),
                        i = matchIndexes.length;

                    // Match elements found at the specified indexes
                    while (i--) {
                        if (seed[(j = matchIndexes[i])]) {
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }

        /**
         * Checks a node for validity as a Sizzle context
         * @param {Element|Object=} context
         * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
         */
        function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undifined" && context;
        }

        // Expose support vars for convenience.
        support = Sizzle.support = {};


        /**
         * Detects XML nodes
         * @param {Element|Object} elem An element or a document
         * @returns {Boolean} True iff elem is a non-HTML XML node
         */
        isXML = Sizzle.isXML = function(elem) {
            // documentElement is verified for cases where it doesn't yet exist.
            // such as loading iframes in IE.
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };

        /**
         * Sets document-related variables once based on the current document
         * @param {Element|Object} [doc] An element or document object to use to set the document
         * @returns {Object} Returns the current document
         */
        setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, parent,
                doc = node ? node.ownerDocument || node : preferredDoc;

            // Return early if doc is invalid or already selected.
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                return document;
            }

            // update global variables.
            document = doc;
            docElem = document.documentElement;
            documentIsHTML = !isXML(document);

            // Support: IE 9-11, Edge.
            // Accessing iframe documents after unload throws "permission denied" errors.
            if ((parent = document.defaultView) && parent.top !== parent) {
                // Support IE 11, Edge
                if (parent.addEventListener) {
                    parent.addEventListener("unload", unloadHandler, false);

                    // Support IE 9 - 10 only.
                } else if (parent.attachEvent) {
                    parent.attachEvent("onunload", unloadHandler);
                }
            }

            /* Attributes
            ---------------------------------------------------------------------- */

            // Support: IE < 8.
            // Verify that getAttribute really returns attributes and not properties.
            // Excepting IE8 booleans.
            support.attributes = assert(function(div) {
                div.className = "i";
                return !div.getAttribute("className");
            });

            /*getElement(s)
            ------------------------------------------------------------------------*/

            // Check if getElementsByTagName("*") return only elements.
            support.getElementsByTagName = assert(function(div) {
                div.appendChild(document.createElement(""));
                return !div.getElementsByTagName("*").length;
            });

            // Support: IE < 9
            support.getElementsByClassName = rnative.test(document.getElementsByClassName);

            // Support: IE < 10
            // Check if getElementById returns elements by name.
            // The broken getElementById methods don't pickup programatically-set names.
            // so use a roundabout getElementsByName test.
            support.getById = assert(function(div) {
                docElem.appendChild(div).id = expando;
                return !document.getElementsByName || !document.getElementsByName(expando).length;
            });

            // ID find and filter.
            if (support.getById) {
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undifined" && documentIsHTML) {
                        var m = context.getElementById(id);
                        return m ? [m] : [];
                    }
                }

                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    }
                }
            } else {
                // Support: IE6/7
                // getElementById is not reliable as a find shortcut,
                delete Expr.find["ID"];

                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" &&
                            elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    }
                }
            }


            // Tag
            Expr.find["TAG"] = support.getElementsByTagName ?
                function(tag, context) {
                    if (typeof context.getElementsByTagName !== "undefined") {
                        return context.getElementsByTagName(tag);

                        // DocumentFragment nodes dont have gEBTN.
                    } else if (support.qsa) {
                        return context.querySelectorAll(tag);
                    }
                } :
                function(tag, context) {
                    var elem,
                        tmp = [],
                        i = 0,
                        //
                        results = context.getElementsByTagName(tag);

                    // Filter out possible comments.
                    if (tag === "*") {
                        while ((elem = results[i++])) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem);
                            }
                        }

                        return tmp;
                    }
                    return results;
                }

            // Class
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                    return context.getElementsByClassName(className);
                }
            };

            /* QSA matchesSelector
            ----------------------------------------------------------------*/

            // QSA and matchesSelector support.

            // matchesSelecor (:active) reports false when true. (IE9/oprea 11.5)
            rbuggyMatches = [];

            // qSa(:focus) reports false when true (chrome 21)
            // We allow this because of a bug in IE8/9 that throws an error.
            // whenever 'document.activeElement' is accessed on an iframe.
            // So, we allow :focus to pass through QSA all the time to avoid the IE error.
            // See http://bugs.jquery.com/ticket/13378
            rbuggyQSA = [];

            if ((support.qsa = rnative.test(document.querySelectorAll))) {
                // Build QSA regex
                // Regex strategy adopted from Diego Perini
                assert(function(div) {
                    // Select is set to empty string on purpose
                    // This is to test IE's treatment of not explicitly
                    // setting a boolean content attribute,
                    // since its presence should be enough
                    // http://bugs.jquery.com/ticket/12359
                    docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" +
                        "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                        "<option selected=''></option></select>";

                    // Support: IE8, Opera 11-12.16
                    // Nothing should be selected when empty strings follow ^= or $= or *=
                    // The test attribute must be unknown in Opera but "safe" for WinRT
                    // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                    if (div.querySelectorAll("[msallowcapture^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    }

                    // Support: IE8
                    // Boolean attributes and "value" are not treated correctly
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    }

                    // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                    if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                        rbuggyQSA.push("~=");
                    }

                    // Webkit/Opera - :checked should return selected option elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    // IE8 throws error here and will not see later tests
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked");
                    }

                    // Support: Safari 8+, iOS 8+
                    // https://bugs.webkit.org/show_bug.cgi?id=136851
                    // In-page `selector#id sibing-combinator selector` fails
                    if (!div.querySelectorAll("a#" + expando + "+*").length) {
                        rbuggyQSA.push(".#.+[+~]");
                    }
                });

                assert(function(div) {
                    // Support: Windows 8 Native Apps
                    // The type and name attributes are restricted during .innerHTML assignment
                    var input = document.createElement("input");
                    input.setAttribute("type", "hidden");
                    div.appendChild(input).setAttribute("name", "D");

                    // Support: IE8
                    // Enforce case-sensitivity of name attribute
                    if (div.querySelectorAll("[name=d]").length) {
                        rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                    }

                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                    // IE8 throws error here and will not see later tests
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled");
                    }

                    // Opera 10-11 does not throw on post-comma invalid pseudos
                    div.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }

            if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
                    docElem.webkitMatchesSelector ||
                    docElem.mozMatchesSelector ||
                    docElem.oMatchesSelector ||
                    docElem.msMatchesSelector)))) {

                assert(function(div) {
                    // Check to see if it's possible to do matchesSelector
                    // on a disconnected node (IE 9)
                    support.disconnectedMatch = matches.call(div, "div");

                    // This should fail with an exception
                    // Gecko does not error, returns false instead
                    matches.call(div, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos);
                });
            }

            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

            /*Contains
                -------------------------------------------------
            */

            hasCompare = rnative.test(docElem.compareDocumentPosition);

            // Elements contains another
            // Purposefully self-exclusive
            // As in, an element does not contain itself.
            contains = hasCompare || rnative.test(docElem.contains) ?
                function(a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a,
                        bug = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bug) : a.compareDocumentPosition && a.compareDocumentPosition(bup) && 16));
                } : function(a, b) {
                    if (b) {
                        while ((b = b.parentNode)) {
                            if (b === a) {
                                return true;
                            }
                        }
                        return false;
                    }
                };

            // Sorting 

            // Document order sorting.
            sortOrder = hasCompare ? function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }

                // Sort on method existence if only one input has compareDocumentPosition.
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) {
                    return compare;
                }

                // Calculate position if both inputs belong to the same document.
                compare = (a.ownerDocument || a) === (b.ownerDocument || b) ?
                    a.compareDocumentPosition(b) : 1;


                if (compare && 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
                    if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                        return -1;
                    }

                    if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                        return 1;
                    }

                    // Maintain original order.
                    return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
                }

                return compare & 4 ? -1 : 1;
            } : function(a, b) {
                // Exit early if the nodes are identical.
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }

                var cur,
                    i = 0,
                    aup = a.parentNode,
                    bup = b.parentNode,
                    ap = [a],
                    bp = [b];

                // parentless nodes are either documents or disconnected.
                if (!aup || !bup) {
                    return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, b)) : 0;
                } else if (aup === bup) {
                    return siblingCheck(a, b);
                }

                // Otherwise we need full lists of their ancesstors for comparison.
                cur = a;
                while ((cur = cur.parentNode)) {
                    ap.unshift(cur);
                }
                cur = b;
                while ((cur = cur.parentNode)) {
                    bp.unshift(cur);
                }

                // Walk down the tree looking for a discrepancy
                while (ap[i] === bp[i]) {
                    i++;
                }

                return i ?
                    // Do a sibling check if the nodes have a common ancestor.
                    siblingCheck(ap[i], bp[i]) :

                    // Otherwise nodes in our document sort first. 
                    ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            };

            return document;
        };

        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elments);
        }

        Sizzle.matchesSelector = function(elem, expre) {
            // Set document vars if needed.
            if (elem.ownerDocument || elem != document) {
                setDocument(elem);
            }

            // Make sure that attribute selectors are quoted.
            expr = expr.replace(rattributeQuotes, "='$1'");

            if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || rbuggyQSA.test(expr))) {
                try {
                    var ret = matches.call(elem, expr);

                    // IE 9's matchesSelector returns false on disconnected nodes.
                    if (ret || support.disconnectedMatch ||
                        // As well, disconnected nodes are said to be in a document fragment in IE 9.
                        elem.document && elem.document.nodeType !== 11) {
                        return ret;
                    }
                } catch (e) {}
            }

            return Sizzle(expr, document, null, [elem].length > 0);
        };

        Sizzle.contains = function(context, elem) {
            // Set document vars if needed.
            if ((context.ownerDocument || context) != document) {
                setDocument(context);
            }
            return contains(context, elem);
        }

        Sizzle.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }

            var fn = Expr.attrHandle[name.toLowerCase()],
                // Don't get fooled by Object.property properties (jQuery #13807)
                val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undifined;
            return val !== undifined ?
                val :
                support.attribute || !documentIsHTML ?
                elem.getAttribute(name) :
                (val = elem.getAttributeNode(name)) && val.specified ?
                val.value :
                null;
        };

        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        }


        /**
         * Document sorting and removing duplicates.
         * @param {ArrayLike} results.
         */

        Sizzle.uniqueSort = function(results) {
            var elem,
                duplicates = [],
                j = 0,
                i = 0;
            // Unless we *know* we can detect duplicates, assume their presence.
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);

            if (hasDuplicate) {
                while ((elem) = results[i++]) {
                    if (elem === results[i]) {
                        j = duplicates.push(i);
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1);
                }
            }

            // Clear input after sorting to release objects.
            // See https://github.com/jquery/sizzle/pull/225
            sortInput = null;

            return results;
        }

        /**
         * Utility function for retrieving the next value of an array of DOM nodes.
         * @param {Array | Element} elem
         */
        getText = Sizzle.getText = function(elem) {
            var node,
                ret = '',
                i = 0;
            nodeType = elem.nodeType;

            if (!nodeType) {
                // If no nodeType, this is expected to be an array.
                while ((node = elem[i++])) {
                    ret += getText(node);
                }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                ret += getText(elem);
            } else if (nodeType === 3 || nodeType === 4) {
                // TextNode or CDATA section.
                return elem.nodeValue;
            }

            // Do not include comment or processing instruction nodes.
            return ret;
        };

        Expr = Sizzle.selectors = {
            // Can be adjusted by the user.
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": { dir: "parentNode", first: true },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: true },
                "~": { dir: "previousSibling" }
            },
            preFilter: {
                "ATTR": function(match) {
                    match[i] = match[1].replace(runescape, funescape);

                    // Move the given value to match[3] wether quoted or unquoted.
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " ";
                    }
                    return match.slice(0, 4);
                },
                "CHILD": function(match) {
                    /* matches from matchExpr["CHILD"]
                        1. type (only|nth|...)
                        2. what (child|of-type)
                        3. argument(even|odd|\d*|\d*n(+-)?|...)
                        4. xn-component of xn+y arguument
                        5. sign of xn-component
                        6. x of xn-component
                        7. y of y-component
                    */

                    match[1] = match[1].toLowerCase();

                    if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!match[3]) {
                            Sizzle.error(match[0]);
                        }

                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = ((match[7]) + match[8] || match[3] === "odd");
                    } else if (match[3]) {
                        Sizzle.error(match[0]);
                    }

                    return match;
                },
                "PSEUDO": function(match) {
                    var excess,
                        unquoted = !match[6] && match[2];

                    if (matchExpr["CHILD"].test(match[0])) {
                        return null;
                    }

                    // Accept quoted arguments as-is
                    if (match[3]) {
                        match[2] = match[4] || match[5] || "";

                        // Strip excess characters from unquoted arguments.
                    } else if (unquoted && rpseudo.test(unquoted) &&
                        // Get excess from tokenize (recusively)
                        (excess = tokenize(unquoted, true)) &&
                        // advance to the next closing parenthesis.
                        (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

                        // exces is a negative index
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    // return only captures needed by the pseudo.
                    return match.slice(0, 3);
                },
                filter: {
                    "TAG": function(nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ?
                            function() {
                                return true;
                            } :
                            function(elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                            };
                    },
                    "CLASS": function(className) {
                        var pattern = classCache[className + " "];
                        return pattern ||
                            (pattern = new RegExp("(^|)" + whitespace + ")" + className + "(" + whitespace + "|$")) &&
                            classCache(className, function(elem) {
                                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class" || ""));
                            });
                    },
                    "ATTR": function(name, operator, check) {
                        return function(elem) {
                            var result = Sizzle.attr(elem, name);

                            if (result == null) {
                                return operator === "!=";
                            }

                            if (!operator) {
                                return true;
                            }
                            result += "";

                            return operator === "=" ? result === check :
                                operator === "!=" ? result !== check :
                                operator === "^=" ? check && result.indexOf(check) === 0 :
                                operator === "*=" ? check && result.indexOf(check) > -1 :
                                operator === "$=" ? check && result.slice(-check.length) === check :
                                operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 :
                                operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
                                false;
                        }
                    },
                    "CHILD": function(type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth",
                            forward = type.slice(-4) !== "last",
                            ofType = what === "of-type";

                        return first === 1 && last === 0 ?
                            function(elem) {
                                return !!elem.parentNode;
                            } :

                            function(elem, context, xml) {
                                var cache, uniqueCache, outerCache, node, nodeIndex, start,
                                    dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType,
                                    diff = false;

                                if (parent) {

                                    if (simple) {
                                        while (dir) {
                                            node = elem;
                                            while ((node = node[dir])) {
                                                if (ofType ?
                                                    node.nodeName.toLowerCase() === name :
                                                    node.nodeType === 1) {
                                                    return false;
                                                }
                                            }

                                            start = dir = type === "only" && !start && "nextSibling";
                                        }
                                        return true;
                                    }

                                    start = [forward ? parent.firstChild : parent.lastChild];

                                    if (forward && useCache) {
                                        node = parent;
                                        outerCache = node[expando] || (node[expando] = {});

                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {})

                                        cache = uniqueCache[type] || [];

                                        nodeIndex = cache[0] === dirruns && cache[1];

                                        diff = nodeIndex && cache[2];

                                        node = nodeIndex && parent.childNodes[nodeIndex];

                                        while ((node = ++nodeIndex && node && node[dir] ||
                                                (diff = nodeIndex = 0) || start.pop())) {

                                            if (node.nodeType === 1 && ++diff && node === elem) {
                                                uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                break;
                                            }

                                        }
                                    } else {
                                        if (userCache) {
                                            node = elem;
                                            outerCache = node[expando] || (node[expando] = {});
                                            uniqueCache = outerCache[node.uniqueID] ||
                                                (outerCache[node.uniqueID] = {});

                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex;
                                        }

                                        if (diff === false) {
                                            while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                                                if ((ofType ?
                                                        node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                    if (userCache) {
                                                        outerCache = node[expando] || (node[expando] = {});
                                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                        uniqueCache[type] = [dirruns, diff];
                                                    }

                                                    if (node === elem) {
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    diff -= last;
                                    return diff === first || (diff % first === 0 && diff / first >= 0);
                                }
                            }
                    },
                    "PSEUDO": function(pseudo, argument) {
                        var args,
                            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
                            Sizzle.error("unsupported pseudo: " + pseudo);

                        if (fn[expando]) {
                            return fn(argument);
                        }

                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];

                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
                                markFunction(function(seed, matches) {
                                    var idx,
                                        matched = fn(seed, argument),
                                        i = matched.length;
                                    while (i--) {
                                        idx = indexOf(seed, matched[i]);
                                        seed[idx] = !(matches[idx] = matched[i]);
                                    }
                                }) :
                                function(elem) {
                                    return fn(elem, 0, args);
                                }
                        }

                        return fn;
                    }
                },
                pseudos: {
                    "not": markFunction(function(selector) {
                        var input = [],
                            results = [],
                            matcher = compile(selector, replace(rtrim, "$1"));
                        return matcher[expando] ?
                            markFunction(function(seed, matches, context, xml) {
                                var elem,
                                    unmatched = matcher(seed, null, xml, []),
                                    i = seed.length;

                                while (i--) {
                                    if ((elem = unmatched[i])) {
                                        seed[i] = !(matches[i] = elem);
                                    }
                                }
                            }) :
                            function(elem, context, xml) {
                                input[0] = elem;
                                matcher(input, null, xml, results);
                                input[0] = null;
                                return !results.pop();
                            }
                    }),
                    "has": markFunction(function(selector) {
                        return function(elem) {
                            return Sizzle(selector, elem).length > 0;
                        }
                    }),
                    "contains": markFunction(function(text) {
                        text = text.replace(runescape, funescape);
                        return function(elem) {
                            return (elem.textContent || elem.innerText || getText(elem).indexOf(text) > -1);
                        }
                    }),
                    "lang": markFunction(function(lang) {
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang);
                        }

                        lang = lang.replace(runescape, funescape).toLowerCase();

                        return function(elem) {
                            var elemLang;
                            do {
                                if ((elemLang = documentIsHTML ?
                                        elem.lang :
                                        elem.getAttribute("xml:lang") || elem.getAttribute('lang'))) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return false;
                        }
                    }),
                    "target": function(elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id;
                    },
                    "root": function(elem) {
                        return elem == docElem;
                    },
                    "focus": function(elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                    },
                    "enabled": function(elem) {
                        return elem.disabled === false;
                    },
                    "disabled": function(elem) {
                        return elem.disabled === true;
                    },
                    "checked": function(elem) {
                        var nodeName = elem.nodeName.toLowerCase();
                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected)
                    },
                    "selected": function(elem) {
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex;
                        }
                        return elem.selected === true;
                    },
                    "empty": function(elem) {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return false;
                            }
                        }
                        return true;
                    },
                    "parent": function(elem) {
                        return !Expr.pseudos["empty"](elem);
                    },
                    "header": function(elem) {
                        return rheader.test(elem.nodeName);
                    },
                    "input": function(elem) {
                        return rinputs.test(elem.nodeName);
                    },
                    "button": function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },
                    "text": function(elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" &&
                            elem.type === "text" &&
                            ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                    },
                    "first": createPositionalPseudo(function() {
                        return [0];
                    }),
                    "last": createPositionalPseudo(function(matchIndexes, length) {
                        return [length - 1];
                    }),
                    "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument]
                    }),
                    "even": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "odd": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; --i >= 0;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    })
                }
            };

            Expr.pseudos["nth"] = Expr.pseudos["eq"];

            for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
                Expr.pseudos[i] = createInputPseudo(i);
            }

            for (i in { submit: true, reset: true }) {
                Expr.pseudos[i] = createButtonPseudo(i);
            }

            function setFilters() {}

            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();

            tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                var matched, match, tokens, type,
                    soFar, groups, preFilters, cached = tokenCache[selector + " "];

                if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                }

                soFar = selector;
                groups = [];
                preFilters = Expr.preFilters;

                while (soFar) {
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            soFar = soFar.slice(match[0].length)
                        }
                        groups.push((tokens = []));
                    }

                    matched = false;

                    if ((match = rcombinators.exec(soFar))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length);
                    }

                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });

                            soFar = soFar.slice(matched.length);
                        }
                    }

                    if (!matched) {
                        break;
                    }
                }

                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
            };

            function toSelector(tokens) {
                var i = 0,
                    len = tokens.length,
                    selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value;
                }
                return selector;
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir;
                checkNonElements = base && dir === "parentNode",
                    doneName = done++;

                return combinator.first ?
                    function(elem, context, xml) {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                return matcher(elem, context, xml);
                            }
                        }
                    } :
                    function(elem, context, xml) {
                        var oldCache, uniqueCache, outerCache,
                            newCache = [dirruns, doneName];

                        if (xml) {
                            while ((elem = elem[dir])) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    if (matcher(elem, context, xml)) {
                                        return true;
                                    }
                                }
                            }
                        } else {
                            while ((elem = elem[dir])) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    outerCache = elem[expando] || (elem[expando] = {});

                                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                                    if ((oldCache = uniqueCache[dir]) &&
                                        oldCache[0] === dirruns && oldCache[1] === doneName) {
                                        return (newCache[2] = oldCache[2]);
                                    } else {
                                        uniqueCache[dir] = newCache;

                                        if ((newCache[2] = matcher(elem, context, xml))) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    }
            }

            function elementMatcher(matchers) {
                return matchers.length > 1 ?
                    function(elem, context, xml) {
                        var i = matchers.length;
                        while (i--) {
                            if (!matchers[i](elem, context, xml)) {
                                return false;
                            }
                        }
                        return true;
                    } :
                    matchers[0];
            }

            function multipleContexts(selector, context, results) {
                var i = 0,
                    len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                }
                return results;
            }

            function condense(unmatched, map, filter, context, xml) {
                var elem,
                    newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;

                for (; i < len; i++) {
                    if ((elem = unmatched[i])) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i);
                            }
                        }
                    }
                }

                return newUnmatched;
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                }

                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                }

                return markFunction(function(seed, results, context, xml) {
                    var temp, i, elem,
                        preMap = [],
                        postMap = [],
                        preexisting = results.length,
                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

                        matcherIn = preFilter && (seed || !selector) ?
                        condense(elems, preMap, preFilter, context, xml) :
                        elems,
                        matcherOut = matcher ?
                        postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;

                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml);
                    }

                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);

                        i = temp.length;
                        while (i--) {
                            if ((elem = temp[i])) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                        }
                    }

                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if ((elem = matcherOut[i])) {
                                        temp.push((matcher[i] = elem));
                                    }
                                }

                                postFinder(null, (matcherOut = []), temp, xml);
                            }
                        }

                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    } else {
                        matcherOut = condense(
                            matcherOut === results ?
                            matcherOut.splice(preexisting, matcherOut.length) :
                            matcherOut
                        );

                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml);
                        } else {
                            push.apply(results, matcherOut);
                        }
                    }
                });
            }

            function matcherFromTokens(tokens) {
                var checkContext, matcher, j,
                    len = tokens.length,
                    leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0,

                    matchContext = addCombinator(function(elem) {
                        return elem === checkContext;
                    }, implicitRelative, true),

                    matchAnyContext = addCombinator(function(elem) {
                        return indexOf(checkContext, elem) > -1;
                    }, implicitRelative, true),
                    matchers = [function(elem, context, xml) {
                        var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ?
                            matchContext(elem, context, xml) :
                            matchAnyContext(elem, context, xml))
                        checkContext = null;
                    }];
                for (; i < len; i++) {
                    if ((matcher = Expr.relative[tokens[i].type])) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)];
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                        // Return special upon seeing a positional matcher.
                        if (matcher[expando]) {
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j]].type) {
                                    break;
                                }
                            }
                            return setMatcher(
                                i > 1 && elementMatcher(matchers),
                                i > 1 && toSelector(
                                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                    tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"),
                                matcher,
                                i < j && matcherFromTokens(tokens.slice(i, j)),
                                j < len && matcherFromTokens((tokens = tokens.slice(j))),
                                j < len && toSelector(tokens)
                            );
                        }
                        matchers.push(matcher);
                    }
                }
                return elementMatcher(matchers);
            }

            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function(seed, context, xml, results, outermost) {
                        var elem, j, matcher,
                            matchedCount = 0,
                            i = "0",
                            unmatched = seed && [],
                            setMatched = [],
                            contextBackup = outermostContext,
                            // We must always have either seed elements or outermost context
                            elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                            // Use integer dirruns if this is the outermost matcher
                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                            len = elems.length;

                        if (outermost) {
                            outermostContext = context === document || context || outermost;
                        }

                        // Add elements passing elementMatchers directly to results.
                        // Support: IE < 9, Safari
                        // 
                        for (; i != len && (elem = elems[i]) ! = null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                if (!context && elem.ownerDocument !== document) {
                                    setDocument(elem);
                                    xml = !documentIsHTML;
                                }

                                while ((matcher = elementMatchers[j++])) {
                                    if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                }

                                if (outermost) {
                                    dirruns = dirrunsUnique;
                                }
                            }
                        }

                        if (bySet) {
                            if ((elem = !matcher) && elem) {
                                matchedCount--;
                            }

                            if (seed) {
                                unmatched.push(elem);
                            }
                        }
                    }

                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while ((matcher = setMatchers[j++])) {
                        matcher(unmatched, setMatched, context, xml);
                    }

                    if (seed) {
                        if (matchedCount > 0) {
                            while (i--) {
                                if (!(unmatched[i]) || setMatched[i]) {
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }

                        setMatched = condense(setMatched);
                    }

                    push.apply(results, setMatched);

                    if (outermost && !seed && setMatched.length > 0 &&
                        (matchedCount + setMatchers.length) > 1) {
                        Sizzle.uniqueSort(results);
                    }
                }

                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }

                return unmatched;

            };
            return bySet ?
                markFunction(superMatcher) : superMatcher;
        }

        compile = Sizzle.compile = function(selector, match) {
            var i,
                setMatchers = [],
                elementMatchers = [],
                cached = compilerCache[selector + " "];

            if (!cached) {
                if (!match) {
                    match = tokenize(selector);
                }

                i = match.length;
                while (i--) {
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached);
                    } else {
                        elementMatchers.psuh(cached);
                    }
                }

                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                cached.selector = selector;
            }
            return cached;
        }；

        select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find,
                compiled = typeof selector === "function" && selector,
                match = !seed && tokenize((selector = compile.selector || selector));

            results = results || [];

            // Try to minimize operations if there is only on selector in the list.
            if (match.length === 1) {
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                    support.getById && context.nodeType === 9 && documentIsHTML &&
                    Expr.relative[tokens[1].type]) {
                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) {
                        return results;
                    } else if (compiled) {
                        context = context.parentNode;
                    }

                    selector = selector.slice(tokens.shift().value.length);
                }

                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while (i--) {
                    token = tokens[i];

                    if (Expr.relative[(type = token.type)]) {
                        break;
                    }

                    if ((find = Expr.find[type])) {
                        if ((seed = find(
                                token.matches[0].replace(runescape, funescape),
                                rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                            ))) {
                            // If seed is empty or no tokens remain, we can return early.
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }

                            break;
                        }
                    }
                }
            }

            (compiled || compile(selector, match)) {
                seed,
                context,
                !documentIsHTML,
                results.!context || rsibling.test(selector) && testContext(context.parentNode) || context
            }
            return results;
        };

        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

        support.detectDuplicates = !!hasDuplicate;

        // Initialize against the default document.
        setDocument();

        support.sortDetached = assert(function(div1) {
            return div1.compareDocumentPosition(document.createElement("div") & 1);
        });

        // Support: IE < 8
        // 
        if (!assert(function(div) {
                div.innerHTML = "<a href='#'></a>";
                return div.firstChild.getAttribute("href") === "#";
            })) {
            addHandle("type|href|height|width", function(elem, node, isXML) {
                if (!isXML) {
                    return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }

        // Support: IE < 9
        // Use defaultValue in place of getAttribute("value")
        if (!support.attributes || !assert(function(div) {
                div.innerHTML = "<input/>";
                div.firstChild.setAttribute("value", "");
                return div.firstChild.getAttribute("value" === "");
            })) {
            addHandle("value", function(elem, name, isXML) {
                if (!isXML && elem.nodeName.toLowerCase() === "input") {
                    return elem.defaultValue;
                }
            })
        }
        // Support: IE < 9
        // Use getAttributeNode to fetch booleans when getAttribute lies.
        if (!assert(function(div) {
                return div.getAttribute("disabled") == null;
            })) {
            addHandle(booleans, function(elem, name, isXML) {
                var val;
                if (isXML) {
                    return elem[name] === true ? name.toLowerCase() :
                        (val = elem.getAttributeNode(name)) && val.specified ?
                        val.value :
                        null;
                }
            });
        }

        return Sizzle;
    })(window);

    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;

    var dir = function(elem, dir, until) {
        var matched = [],
            truncate = until !== undefined;

        while ((elem = elem[dir]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                    break;
                }
                matched.push(elem);
            }
        }
        return matched;
    };

    var siblings = function(n, elem) {
        var matched = [];

        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
                matched.push(n);
            }
        }
        return matched;
    }

    var rneedContext = jQuery.expr.match.needsContext;

    var rsingleTag = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);

    var risSimple = /^.[^:#\[\.,]*$/;

    // Implement the identical funcitonaloty for filter and not.
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                /* jshint - @018 */
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }

        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return (elem === qualifier) !== not;
            })
        }

        if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }
            qualifier = jQuery.filter(qualifier, elements);
        }

        return jQuery.grep(elements, function(elem) {
            return (indexOf.call(qualifier, elem) > -1) !== not;
        });

        jQuery.filter = function(expr, elems, not) {
            var elem = elems[0];

            if (not) {
                expr = ":not(" + expr + ")";
            }

            return elems.length === 1 && elem.nodeType === 1 ?
                jQuery.find.matchesSelector(elem, expr) ? [elem] : [] :
                jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                    return elem.nodeType === 1;
                }));
        };

        jQuery.fn.extend({
            find: function(selector) {
                var i,
                    len = this.length,
                    ret = [],
                    self = this;

                if (typeof selector !== "string") {
                    return this.pushStack(jQuery(selector).filter(function() {
                        for (i = 0; i < len; i++) {
                            if (jQuery.contains(self[i], this)) {
                                return true;
                            }
                        }
                    }));
                }

                for (i = 0; i < len; i++) {
                    jQuery.find(selector, self[i], ret);
                }

                // Needed because $( selector, context ) becomes $( context ).find( selector )
                ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
                ret.selector = this.selector ? this.selector + " " + selector : selector;
                return ret;
            },
            filter: function(selector) {
                return this.pushStack(winnow(this, selector || [], false));
            },
            not: function(selector) {
                return this.pushStack(winnow(this, selector || [], true));
            },
            is: function(selector) {
                return !!winnow(
                    this,

                    // If this is a positional/relative selector, check membership in the returned set.
                    // So $("p:first").is("p:last") won't return true for a doc with two "p". 
                    typeof selector === "string" && rneedContext.test(selector) ?
                    jQuery(selector) : selector || [],
                    false
                ).length;
            }
        });

        // Initialize a jQuery object.

        // A central reference to the root jQuery(document)
        var rootjQuery,
            rquickRxpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            init = jQuery.fn.init = function(selector, context, root) {
                var match, elem;

                // HANDLE: $(""), $(null), $(undefined), $(false)
                if (!selector) {
                    return this;
                }

                // Method init() accepts an alternate rootjQuery 
                // so migrate can support jQuery.sub (gh-2101)

                root = root || rootjQuery;

                if (typeof selector === "string") {
                    if (selector[0] === "<" &&
                        selector[selector.length - 1] === ">" &&
                        selector.length >= 3) {

                        // Assume that strings that start and end with <> are HTML and skip the regex check.
                        match = [null, selector, null];
                    } else {
                        match = rquickRxpr.exec(selector);
                    }

                    // Match html or make sure no context is specified for #id
                    if (match && (match[1] || !context)) {

                        // HANDLE: $(html) -> $(array)
                        if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            jQuery.merge(this, jQuery.parseHTML(
                                match[1],
                                context && context.nodeType ? context.ownerDocument || context : document,
                                true
                            ));

                            // HANDLE: $(html, props)
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                                for (match in context) {
                                    if (jQuery.isFunction(this[match])) {
                                        this[match](context[match]);
                                    } else {
                                        this.attr(match, context[match]);
                                    }
                                }
                            }

                            return this;
                        } else {
                            // HANDLE: $(#id)
                            elem = document.getElementById(match[2]);

                            // Support: Blackberry 4.6
                            if (elem && elem.parentNode) {
                                this.length = 1;
                                this[0] = elem;
                            }

                            this.context = document;
                            tihs.selector = selector;
                            return this;
                        }
                    } else if (!context || context.jquery) {
                        return (context || root).find(selector);
                    } else {
                        return this.constructor(context).find(selector);
                    }
                } else if (selector.nodeType) {
                    // HANDLE: $(DOMElement)
                    this.context = this[0] = selector;
                    this.length = 1;
                    return this;

                    // HANDLE: $(function)
                    // Shortcut for document ready
                } else if (jQuery.isFunction(selector)) {
                    return root.ready !== undefined ?
                        root.ready(selector) :
                        // Execute immediately if ready is not present.
                        selector(jQuery);
                }

                if (selector.selector !== undefined) {
                    this.selector = selector.selector;
                    this.context = selector.context;
                }
                return jQuery.makeArray(selector, this);
            };

        // Give the init function the jQuery prototype for later instantiation
        init.prototype = jQuery.fn;

        //Initialize central reference.
        rootjQuery = jQuery(document);

        var rparentsprev = /^(?:parents|prev(?:Until|ALL))/,

            //Methods guaranteed to produce a unique set when starting from a unique set.
            guaranteedUnique = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };

        jQuery.fn.extend({
            has: function(target) {
                var target = jQuery(target, this),
                    l = targets.length;

                return this.filter(function() {
                    var i = 0;
                    for (; i < l, i++) {
                        if (jQuery.contains(this, target[i])) {
                            return true;
                        }
                    }
                });
            },
            closest: function(selectors, context) {
                var cur,
                    i = 0,
                    l = this.length,
                    matched = [],
                    pos = rneedContext.test(selectors) || typeof selectors !== "string" ?
                    jQuery(selectors, context || this.context) : 0;

                for (; i < l; i++) {
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                        // Always skip document fragments.
                        if (cur.nodeType < 11 && (pos ?
                                pos.index(cur) > -1 :
                                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break;
                        }
                    }
                }
                return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
            },

            // Determine the position of an element within the set.
            index: function(elem) {
                // No argument, return index of parent.
                if (!elem) {
                    return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
                }

                // Index in selector
                if (typeof elem === "string") {
                    return indexOf.call(jQuery(elem), this[0]);
                }

                // Locate the position of the desired element.
                // If it receives a jQuery object, the first element is used.
                return indexOf.call(this, elem.jquery ? elem[0] : elem);
            },
            add: function(selector, context) {
                return this.pushStack(
                    jQuery.uniqueSort(
                        jQuery.merge(this.get(), jQuery(selector, context))
                    )
                );
            },
            addBack: function(selector) {
                return this.add(selector == null ?
                    this.prevObject : this.prevObject.filter(selector)
                );
            }
        });

        function sibling(cur, dir) {
            while ((cur = cur[dir]) && cur.nodeType !== 1) {}
            return cur;
        }

        jQuery.each({
            parent: function(elem) {
                var parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
            },
            parents: function(elem) {
                return dir(elem, "parentNode");
            },
            parentUntil: function(elem, i, until) {
                return dir(elem, "parentNode", until);
            },
            next: function(elem) {
                return sibling(elem, "nextSibling");
            },
            prev: function(elem) {
                return sibling(elem, "previousSibling");
            },
            nextAll: function(elem) {
                return dir(elem, "nextSibling");
            },
            prevAll: function(elem) {
                return dir(elem, "previousSibling");
            },
            nextUntil: function(elem, i, until) {
                return dir(elem, "nextSibling", until);
            },
            prevUntil: function(elem, i, until) {
                return dir(elem, "previousSibling", until);
            },
            siblings: function(elem) {
                return siblings((elem.parentNode || {}).firstChild, elem);
            },
            children: function(elem) {
                return siblings(elem.firstChild);
            },
            contents: function(elem) {
                return elem.contentDocument || jQuery.merge([], elem.childNodes);
            }
        }, function(name, fn) {
            jQuery.fn[name] = function(until, selector) {
                var matched = jQuery.map(this, fn, until);

                if (name.slice(-5) !== "Until") {
                    selector = until;
                }

                if (selector && typeof selector === "string") {
                    matched = jQuery.filter(selector, matched);
                }

                if (this.length > 1) {
                    // Remove duplicates.

                    if (!guaranteedUnique[name]) {
                        jQuery.uniqueSort(matched);
                    }

                    // Reverse order for parents* and prev-derivatives.
                    if (rparentsprev.test(name)) {
                        matched.reverse();
                    }
                }

                return this.pushStack(matched);
            };
        });

        var rnotwhite = (/\S+/g);

        function createOptions(options) {
            var object = {};
            jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
                object[flag] = true;
            });
            return object;
        }

        /*
         * Create a callback list using the following parameters: 
         * options: an optional list of space-separated options that will change how the callback list behaves or a more traditional option object.
         * 
         * By default a callback list will act like an event callback list and can be "fired" multiple times.
         *
         * Possible options: 
         * once:     will ensure the callback list can only be fired once (like a Defferred)
         * memory:   will keep track of previous values and will call any callback added after the list has been fired right away with the latest "memorized" values (lide a Defferred)
         * 
         * unique:   will ensure a callback can only be added once (no duplicate in the list) 
         * 
         * stopOnFalse: interrupt callings when a callback returns false
         */

        jQuery.Callbacks = function(options) {
            options = typeof options === "string" ?
                createOptions(options) : jQuery.extend({}, options);

            var
                // Flag to know if list is currently firing.
                firing,

                // Last fire value for non-forggettable list.
                memory,

                // Flag to know if list was already fired.
                fired,

                // Flag to prevent firing
                locked,

                // Actual callback list
                list = [],

                // Quene of execution data for repeatable lists.
                queue = [],

                // Fire callbacks
                fire = function() {

                    // Enforce single-firing
                    locked = options.once;

                    // Execute callbacks for all pending executions,
                    // respecting firingIndex ovverides and runtime changes.
                    fired = firing = true;
                    for (; queue.length; firingIndex = -1) {
                        memory = queue.shift();
                        while (++firingIndex < list.length) {

                            // Run callback and check for early termination.
                            if (list[firingIndex].apply(memory[0], memory[1]) === false &&
                                options.stopOnFalse) {

                                // Jump to end and forget the data so .add doesn't re-fire
                                firingIndex = list.length;
                                memory = false;
                            }
                        }
                    }

                    // Forget the data if we're done with it.
                    if (options.memory) {
                        memory = false;
                    }

                    firing = false;

                    // Clean up if we're done firing for good.
                    if (locked) {

                        // Keep an empty list if we have data for future add calls.
                        if (memory) {
                            list = [];
                        } else {
                            list = "";
                        }
                    }

                },

                // Actual Callbacks object.

                self = {

                    // Add a callback or a collection of callbacks to the list.
                    add: function() {
                        if (list) {

                            // If we have memory from a past run, we should fire after adding.
                            if (memory && !firing) {
                                firingIndex = list.length - 1;
                                queue.push(memory);
                            }

                            (function add(args) {
                                jQuery.each(args, function(_, arg) {
                                    if (jQuery.isFunction(arg)) {
                                        if (!options.unique || !self.has(arg)) {
                                            list.push(arg);
                                        }
                                    } else if (arg && arg.length && jQuery.type(arg)) {
                                        // Inspect recursively
                                        add(arg);
                                    }
                                });
                            })(arguments);

                            if (memory && !firing) {
                                fire();
                            }
                        }
                        return this;
                    },
                    // Remove a callback from the list.
                    remove: function() {
                        jQuery.each(arguments, function(_, arg) {
                            var index;
                            while ((index = jQuery.inArray(arg, list, Index)) > -1) {
                                list.splice(index, 1);

                                // Handle firing indexes
                                if (index <= firingIndex) {
                                    firingIndex--;
                                }
                            }
                        });
                        return this;
                    }
                }
        }
    }

});