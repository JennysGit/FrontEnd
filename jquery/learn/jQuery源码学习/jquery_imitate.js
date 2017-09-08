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
                    } else if (copy !== undifined) {
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
            if (typeof selector !== "string" || !selecor ||
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
                var compare!a.compareDocumentPosition - !b.compareDocumentPosition;
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
                    return +=getText(node);
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
                            },
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
                        }
                    }
                }
            }
        }
    })
});