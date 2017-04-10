/*
 * jquery imitate.
 * Version: 2.2.3
 * by Jenny
 */

(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) :
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
    var class2type = {};
    var toString = class2type.toString; // ??

    var hasOwn = class2type.hasOwnProperty;
    var support = {};

    var version = "2.2.3",
        jQuery = function(selector, context) {
            return new jQuery.fn.init(selector, context);
        },
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,
        fcamelCase = function(all, letter) {
            return letter.toUpperCase();
        };

    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructoy: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        get: function(num) { // jQuery get function. ??
            return num != null ?
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

        if (typeof target === "boolean") {
            deep = target;

            target = arguments[i] || {};
            i++;
        }

        if(typeof target !== "object" && !jQuery.isFunction(target)){
        	target = {};
        }

        if(i === length){
        	target = this;
        	i--;
        }
    }
});
