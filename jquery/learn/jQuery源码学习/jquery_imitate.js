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

            }
        }

    })
});
